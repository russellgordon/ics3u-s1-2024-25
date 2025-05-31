---
draft: true
draftSectionTwo: true
tags: 
created: 2025-05-30T01:23:31.000-0400
createdForSectionTwo: 2025-05-30T03:00:00.000-0400
---

## Introduction

Consider the following app, which was built to allow owners of electric vehicles to post listings for private sales of used vehicles:

`<< placeholder for video >>`

## Background

If you are interested in reviewing how this example app was developed – specifically the database and app code, you [[Building Electric Ride|can read about that here]].

## User flow

When the user opens the app, if they are not signed in, they see only a summary page that shows how many vehicles are available for sale, but without providing the details of each vehicle:

`<< placeholder for screenshot showing summary >>`

Once the user signs in, they can then browse listings, and review details:

`<< placeholder for screenshot showing listings >>`

A signed in user can also save listings they are interested in:

`<< placeholder for screenshot showing favourites >>`

Until we add authentication to this app, we can "fake" an authenticated user like this:

`<< placeholder for code that fakes authentication >>`

However, we clearly need to add authentication to the app.

Right now, every user of the app can see every other user's data, because there is no row-level security enabled in our database.

Please watch this super brief video to understand the problem at hand:

`<< placeholder for video showing two users who can see each other's favourites >>`

## Plan for access

We must have a clear idea in our mind about:

- what parts of our database *anyone* can see
- what parts of our database *any logged in user* can see
- what information in our database *can only be seen by a particular user*

In this app:

- `WelcomeView` can be seen by anyone, logged in or not
- `DetailedListingView` can be seen by any logged in user
- `FavouriteListingView` should be available only to logged-in users, and should show them only listings that *they themselves* marked as a favourite

## Adding authentication

There are several ways to authenticate users.

In most cases, when building apps for use within LCS, we can authenticate users using the **Sign in with Google** service.

Why? We know that everyone at LCS already has an email address hosted by Google.

So, the rest of this tutorial will explain how to:

1. Initially set up authentication using **Sign in with Google** in your Supabase project.
2. Adjust code within your app to actually authenticate users.
3. Set row-level security on each table so that we are following our [[Adding Authentication to Database-Driven App#Plan for access|access plan]].