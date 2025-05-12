---
draft: true
draftSectionTwo: true
created: 2025-05-05T07:00:00.000-0400
createdForSectionTwo: 2025-05-05T07:00:00.000-0400
tags:
---

## Introduction

Before reviewing this lesson you are encouraged to have at least read through [[Querying Multiple Tables, Pt. 2]] and have [downloaded the finished form of the Enrolments app](https://github.com/lcs-rgordon/StudentsAndCourses/archive/644a4c2fcaf2f95b91d5ef0e187512d4da4475db.zip) to try it out.

The approach to seeing up-to-date data shared in *this* lesson *may* be necessary for your app – it depends on how users navigate through different views within your app.

If you do try out the app, you may notice an issue – watch this video carefully:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1083182394?h=8e6b8f01ad&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Updates Not Seen in Other Views"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

At first, this might seem surprising – after all – didn't we add the new courses first and *then* navigate to the tab that shows enrolment counts by course? Therefore, shouldn't the newly added courses show up?

The answer is *no* because of the way SwiftUI works. It needs to compute (put together) all of the views that might be immediately visited by a user *when the app launches*.

So in the case of this app, the list of views already created when the app first launches are:


```mermaid
flowchart TD

id1["App Entry Point<br/>"] --> id2["LandingView"]
id2 --> id3["TabView"]
id3 --> id4["EnrolmentsView<br/>(.tabItem)"]
id3 --> id5["CoursesListView<br/>(.tabItem)"]
id3 --> id6["StudentsListView<br/>(.tabItem)"]
```

Each of those views are created when the app launches. Each view creates the following view models:

|View|View Model(s)|
|-|-|
|`EnrolmentsView`|&#8226;`EnrolmentsByCourseViewModel`<br/>&#8226;`EnrolmentsByStudentViewModel`|
|`CoursesListView`|`CoursesListViewModel`|
|`StudentsListView`|`StudentsListViewModel`|

So in the video above, the user goes to `CoursesListView` and adds a couple of courses. `CoursesListViewModel` handles sending the new courses to the database. `CoursesListViewModel` (since it knows a new course was just added) asks the database for a refreshed list of courses.

However, `EnrolmentsView` and the two view models it creates were made *before the user added the courses* on `CoursesListView` . Consequently, those two view models are left with out-of-date information. They have no way of knowing that the database has been changed.

How can we deal with this?

## A dangerous path

Apple states that: "SwiftUI offers a declarative \[and reactive\] approach to user interface design..."

This means that we don't have to handle the messy details of precisely laying out a user interface, nor do we have to manually tell parts of our user interface to update when data changes.

So while we might initially think:

> "OK, well if those view models have out of date information, I'll just tell them – after adding a new course – to refresh themselves!"

That would be a mistake. That is exactly the type of situation that SwiftUI was designed to help programmers avoid. Put another way:

<figure>
<img src="/Media/Here-Be-Dragons-Key-Art.png">
<figcaption>
<small>
<strong>Image source:</strong> <a href="https://screenrant.com/here-be-dragons-game-review/">Here Be Dragons Review: A Sinking Sense of Humor</a></small>
</figcaption>
</figure>

Rather than thinking about how we can manually *tell* parts of our app when to update their data, we need to find a way to *find out* when data has changed, and *react* accordingly. 

Reacting to changes in data – to changes in state – is much easier to deal with in practice. It eliminates an entire category of potential bugs – namely – forgetting to tell parts of an app when it needs to update.

## Publish-subscribe

> [!NOTE]
> 
> Mr. Gordon used ChatGPT to "boil down" the essence of the publisher-subscriber messaging pattern into wording appropriate for use in a high-school level computer science class.
> 
> Some of the text in this section of this lesson is directly quoted from his conversation with the large language model.

Publish-subscribe (or pub/sub) is a messaging pattern where:

- **Publishers** send messages (events, updates) without knowing who will receive them.
- **Subscribers** listen for specific messages and react when they arrive.

Here are the key ideas:

| Role                  | Responsibility                                                  |
| --------------------- | --------------------------------------------------------------- |
| **Publisher**         | Says, “Hey, something happened!”                                |
| **Subscriber**        | Says, “Tell me when this kind of thing happens.”                |
| **Broker (optional)** | Mediates communication (e.g., a notification center, event bus) |

Pub/sub is **one-to-many**:

- One publisher can notify many subscribers.
- The publisher doesn’t need to know who’s listening.

Here is how the pub/sub concept can be applied to resolve the problem with getting up-to-date data in all parts of our app.

The *source of truth* for data within our app is our Supabase database. Supabase offers a feature known as *realtime channels*. Whenever data changes within some (or any) part of our database, Supabase can broadcast this event to interested parties. A Supabase realtime channel is a **publisher**.

We will add an observable class to our app named `EnrollmentChangeNotifier`. It will use the Supabase framework to **subscribe** to a realtime channel, and will thereby be notified whenever the database is updated.

So, `EnrollmentChangeNotifier` is a *broker* that handles the job of knowing when the database is updated. It will in turn contain a single stored property named `changeCount` that is an integer. Whenever the database is updated, `EnrollmentChangeNotifier` will increment `changeCount` by one – that makes it a **publisher** within our app.

Why is this? It is because every view in our app that has its own view model will observe `changeCount` on `EnrollentChangeNotifier`  through the environment. Using a `.onChange(of:)` view modifier, each view **subscribes** to the broker, `EnrollmentChangeNotifier`. When a view sees that `changeCount` has been incremented, it will ask its view model to refresh data (to fetch new information from the database).

This will let us **fan out** a single event (e.g.: a database change) to any number of views within our app (including but not limited to `EnrolmentsView`, `CoursesListView`, `StudentsListView`).

Here is a picture of what this looks like:

```mermaid
flowchart TD

    subgraph Supabase
        DB["Database"]
        RTC["Realtime Channel<br>(Publisher)"]
        DB -->|Data Change| RTC
    end

    RTC --> Notifier["EnrollmentChangeNotifier<br>(Subscriber to channel + Publisher within app)"]
    Notifier -->|changeCount incremented| EnrolmentsView
    Notifier -->|changeCount incremented| CoursesListView
    Notifier -->|changeCount incremented| StudentsListView

    EnrolmentsView -->|onChange of changeCount| EnrolmentsVM["EnrolmentsByCourseViewModel<br>EnrolmentsByStudentViewModel<br><b>(both view models refresh)</b>"]
    CoursesListView -->|onChange of changeCount| CoursesVM["CoursesListViewModel"]
    StudentsListView -->|onChange of changeCount| StudentsVM["StudentsListViewModel"]

    EnrolmentsVM -->|refreshes| Supabase
    CoursesVM -->|refreshes| Supabase
    StudentsVM -->|refreshes| Supabase
```

Summarized:

- The **Supabase database** sends a change notification via a **Realtime Channel**.
- This message is received by our app’s **EnrollmentChangeNotifier**, which then acts as a **publisher** inside the app.
- All views (`EnrolmentsView`, `CoursesListView`, `StudentsListView`) listen for updates to `changeCount`.
- When notified, each view tells its **view model** to fetch fresh data from Supabase.

The advantage of this approach is that we have just **one** subscription to the realtime channel in our database. This conserves database server resources. As well, the code required to subscribe to a realtime channel is somewhat lengthy. By contrast, having a view watch the `changeCount` property of `EnrollmentChangeNotifier` through the environment is only a few lines of code.

## Applying the pattern

### Enable realtime updates on database

To start, we need to turn on realtime updates in the database. This makes the database a publisher.

To do this, from the project overview page, select **Table Editor**:

![[Pasted image 20250512091000.png]]

You will see the list of tables in your database:

![[Pasted image 20250512091105.png]]

At this point you need to decide – do you want to have changes to just *some* database tables published for subscribers to receive notifications about – or *all* database tables?

In the context of this example – students and courses in an enrolment scenario – changes to any table will impact what should be shown to users in the app.

So, Mr. Gordon has edited each table in turn:

![[Pasted image 20250512091315.png]]

... and enabled realtime:

![[Pasted image 20250512091446.png]]

> [!IMPORTANT]
> 
> Be sure to enable realtime on all tables you want to receive notifications about changes on.

### Subscribe to a channel

Now that the database is broadcasting (publishing) changes to database tables, we need to add code that subscribes (receives notifications) of those changes.

You are welcome to copy the following code and adapt it to your own project:

```swift
import OSLog
import Supabase
import SwiftUI

@Observable @MainActor
class EnrollmentChangeNotifier: Observable {

    // MARK: Stored properties
    
    // Subscribing views will monitor this property
    // and ask their view models to refresh data when
    // it changes
    var changeCount = 0
        
    // Stores a channel to that we will subscribe to
    // and receive realtime updates from
    private var channel: RealtimeChannelV2?
    
    // MARK: Initializer(s)
    init() {
        
        Logger.database.info("EnrollmentChangeNotifier: Initializer is starting.")
        
        // Subscribe to changes
        self.subscribe()
        
    }
    
    // MARK: Function(s)
    func subscribe() {
        
        Logger.database.info("EnrollmentChangeNotifier: About to create channel to receive realtime updates.")

        // Create a channel to that we will subscribe to
        // and receive realtime updates from
        self.channel = supabase.channel("enrollment-updates")
        if let channel = self.channel {

            Logger.database.info("EnrollmentChangeNotifier: Successfully created channel to receive realtime updates.")

            // We are going to observe all changes
            // (insertions, updates, deletions)
            // on any table in the database
            let changeStream = channel.postgresChange(
                AnyAction.self,
                schema: "public"
            )
            
            Task {
                
                // Subscribe to notifications on the channel
                await channel.subscribe()

                Logger.database.info("EnrollmentChangeNotifier: Now subscribed to channel to receive realtime updates.")

                // When a change occurs, run this code block
                for await change in changeStream {
                    
                    Logger.database.info("EnrollmentChangeNotifier: Database changed; incrementing change counter.")

                    // Update the count of changes to tell subscribing views
                    // to ask their view models to update
                    changeCount += 1
                    
                }
                
            }

        } else {
            
            Logger.database.info("EnrollmentChangeNotifier: Unable to create channel to receive realtime updates.")

        }
        
    }
    
    func unsubscribe() {
        Logger.database.info("EnrollmentChangeNotifier: About to unsubscribe from realtime updates channel.")
        Task {
            if let channel = channel {
                await supabase.removeChannel(channel)
                Logger.database.info("EnrollmentChangeNotifier: Successfully unsubscribed from realtime updates channel.")
            } else {
                Logger.database.info("EnrollmentChangeNotifier: Could not unsubscribe from realtime updates channel.")
            }

        }
    }
        
}
```

Mr. Gordon chose to add this file to the **Helpers** group in his project:

![[Pasted image 20250512093002.png]]

If you were to add that file to your project, you would immediately see the same error message come up that shows in the screenshot above.

In order to better debug logical errors in this app – especially as we begin using a publisher-subscriber messaging pattern – it's helpful to know when certain things are happening in our code.

We can enable this by using *logging*, which will be explained shortly. The gist of the idea is that we include little messages to ourselves as developers throughout our code. Then, as we use our app, it makes it easier to know everything is working the way we intend.

Mr. Gordon prefers to create a **Logging** group:

![[Pasted image 20250512093609.png]]

He then added this code:

```swift
import OSLog

extension Logger {

    // Using your bundle identifier is a great way to ensure a unique identifier.
    private static var subsystem = Bundle.main.bundleIdentifier!

    // Logs the view cycles like a view that appeared
    static let viewCycle = Logger(subsystem: subsystem, category: "viewcycle")

    // All logs related to tracking and analytics
    static let statistics = Logger(subsystem: subsystem, category: "statistics")

    // All logs related to database operations
    static let database = Logger(subsystem: subsystem, category: "database")

    // All logs related to user authentication
    static let authentication = Logger(subsystem: subsystem, category: "authentication")

}
```

... to a file named `Logger.swift`:

![[Pasted image 20250512093747.png]]

If we click back to `EnrollmentChangeNotifier` we see that the error message has resolved:

![[Pasted image 20250512094639.png]]

It's good to have at least an initial understanding of code that we add to our projects, so, let's examine it more closely:

![[Pasted image 20250512094624.png]]

In order:

> [!DISCUSSION]
> 
> 1. The `EnrollmentChangeNotifier` class must conform to the `Observable` protocol, so that our views can watch the class for changes and respond accordingly.
> 2. `@MainActor` should be added to all classes that will drive changes to the user interface. This ensures that the code in the class will run on the main thread of our application, rather than a background thread. By running on the main thread, we ensure that the user interface updates in a timely manner. Read this for [more background on what threads are](https://www.hackingwithswift.com/quick-start/concurrency/understanding-threads-and-queues), if desired.
> 3. In the initializer of the class, we run the `subscribe` function so that we can receive notifications when the database changes.
> 4. Here we create a channel to subscribe to. Select a name that makes sense for the context of your app; here, Mr. Gordon chooses `enrollment-updates`.
> 5. With this code we configure what kind of updates we want to be notified about, and from what tables. This code asks for all types of updates (*insertions* of a new row to a table, *updates* to an existing row, and *deletions* of a row). This code also asks for notifications on every database table, not just a single table.
> 6. Create an asynchronous task block (line 56) that will run and wait for update notifications from the database – then – subscribe to the channel we created earlier (line 59).
> 7. The code from lines 64 to 72 can be thought of as a loop that will iterate – run its code block – only when a change notification is received from the database.
> 8. There are times when we want to *unsubscribe* from receiving database update notifications – more on that in a moment.

Now that we have these changes made, we need to create an instance of the `EnrollmentChangeNotifier` class at the app entry point, and insert it into the environment.

Here are the changes that make this happen:

![[Pasted image 20250512102333.png]]

That code needs a bit of explanation too, so let's go over it:

> [!DISCUSSION]
> 
> 1. Here is where the instance of `EnrollmentChangeNotifier` is created.
> 2. We insert the instance of `EnrollmentChangeNotifier` into the environment so that views can (later) observe it for changes.
> 3. We create a stored property that tracks changes to *scenes* in our app. This is used to identify when our app is closed or backgrounded on a device.
> 4. This code handles subscribing to database change notifications (when the app is active) or unsubscribing (when the app goes to the background).

### Subscribe views to change notifier

### Reviewing the finished product

