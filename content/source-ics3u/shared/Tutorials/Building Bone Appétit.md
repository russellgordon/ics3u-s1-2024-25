---
draft: false
draftSectionTwo: false
tags: 
created: 2025-05-17T01:23:31.000-0400
createdForSectionTwo: 2025-05-17T03:00:00.000-0400
---

> [!TIP]
> 
> This tutorial is a work in progress as Mr. Gordon finds time to author a second exemplar from scratch. Check back often to see how it develops over the coming days.

In this tutorial, Mr. Gordon (mostly) adopts an "alter ego" – a student named _Walter_ Gordon who is going to build out the _Bone Appétit_ app.

If you are interested in seeing, essentially, a live-streamed process of authoring an app from start to finish, meeting and exceeding culminating task expectations, then please keep reading.

## Thinking

### Purpose, Audience, Benefits

Walter starts his culminating task portfolio entry in Notion and defines the purpose, audience, and beneficial effect of his app, *Bone Appétit*.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1085040516?h=d7832328b7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Defining App Purpose, Audience, and Beneficial Effect"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Prototype

Walter uses Keynote to think through an app interface for *Bone Appétit*.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1085121232?h=b0f732e5aa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Using Keynote to Build Out the Bone Appétit Prototype"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

> [!NOTE]
> 
> The video above is just over two hours long. Mr. Gordon doesn't really expect anyone to watch this from start to finish, but you may find certain techniques in using Keynote useful. Keyboard shortcuts are displayed on screen so you can learn from how the Keynote deck is built by watching parts of this video.

### Peer Feedback Session

Jen kindly agrees to review Walter's prototype:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1085103047?h=919c832f3e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Peer Feedback Session with Jen (Bone Appétit)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Revised Prototype

Walter adds his original prototype, the notes from the feedback session with Jen, and his revised prototype to his culminating task entry:

`<< placeholder for video >>` 

### ER Diagram

Walter adds his ER diagram to his culminating task entry on Notion:

`<< placeholder for video >>`

Walter describes his ER diagram:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1084954811?h=53d64652e1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ER Diagram Discussion - Bone Appetit"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Knowledge

### Project organization

Walter identifies a well-organized, important file in his project, and shows that he kept files grouped in a logical manner within his Xcode project:

`<< placeholder for video >>`

### Use of source control

Walter takes screenshots of his project's complete commit history:

`<< placeholder for video >>`

Walter adds a link to his GitHub repository:

`<< placeholder for video >>`

## Application

### Creating new project

Walter creates his project in Xcode, makes a new, private repository, and then invites Mr. Gordon as a collaborator so his code can be viewed by his teacher:

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1085034838?h=24610f0a5a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Starting a New Project and Creating a Remote Repository"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

### Create a database

Walter visits Supabase to create an account, an organization, and a database:

`<< placeholder for video >>`

### Generate database schema

Walter uses ChatGPT and his ER diagram to create the SQL that will define the tables in his database, then runs that SQL against his database:

`<< placeholder for video >>`

### Create sample data

Walter continues his conversation with ChatGPT to generate sample data, then adds it to his database:

`<< placeholder for video >>`

### Make static views

Walter gets started on his project by authoring static views for the main parts of his app prototype:

`<< placeholder for video >>`

### Add Supabase framework

Walter adds the Supabase framework to his project:

`<< placeholder for video >>`

### Connect Supabase database

Walter uses his Supabase database API key and URL to connect his app to the cloud-hosted database:

`<< placeholder for video >>`

### Display information from database

Walter starts to replace string literals in his project with information loaded from database tables:

`<< placeholder for video >>`

### Create new data

Walter makes it possible to add information to his database, and displays this data in his app:

`<< placeholder for video >>`

### Show data on multiple devices

Walter applies the [[Publisher-Subscriber Messaging Pattern]] to ensure all members of a cohort of people that care for an animal see the same information:

`<< placeholder for video >>`


