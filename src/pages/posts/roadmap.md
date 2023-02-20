---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Flotes Roadmap 2023'
pubDate: 12-01-2022
description: 'Upcoming changes and ideas. Join our Discord to provide feedback!'
author: 'Flotes'
metaType: 'article'
metaPath: 'roadmap'
post_type: '/change_log'
image:
    url: 'https://ik.imagekit.io/flotes/flotes-header.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674667619507' 
    alt: 'Flotes home page as a banner'
metaImg: 'https://ik.imagekit.io/flotes/flotes-header.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674667619507'    
tags: ["flotes", "wip", "features"]
---

**Updated**: `02-20-2023`

**Have a comment or question?**
-  [Join the discussion on Discord](https://discord.gg/GacTG3MHej)


## In Progress
- **[Programming Course](#programming)**
- [Privacy Policy & Terms of Service](#privacy)
- [Spaced Repetition Controls](#spaced)
- [Spaced Repetition Filters](#filters)
- [Public Decks](#pub)

## Complete
- [Mermaid Flowchart Diagrams](#mermaid)
- [Flotes as a PWA](#pwa)
- [Loading & Auth Improvements](#auth)
- [Starter / Public Decks](#starter)

---

# In Progress
 
---

# <a name="programming"></a> Programming Course

By far the largest challenge of being a single-developer is deciding how to divide your time. 
Flotes has over 100 users but is still in somewhat of a vaccuum with little feedback. 

So I'll be pausing work on the application to do a few things:
- Heavily use the app, creating new community notebooks
- Create a course/blogs/notes on a specific topic to promote Flotes
- Improve the demo, add more data to show certain scenarios
- Improve the landing page, add more animation/interactivity/sections

# <a name="privacy"></a> Privacy Policy and Terms of Service

I'm currently working on a few drafts of these.

The goal is that your data is your data. We don't want to use your data for anything other than powering features of the application, and we want the policies to reflect that.

We also take measures to implement rules on the database that validate your authentication on the server to prevent other users from accessing your data.

Action items:
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Cookie Policy
- [ ] Update site with links

#  <a name="pub"></a> Public Decks

User public decks
- [ ] Give users ability to make readonly decks public
- [ ] Create flow for users to accept visibility of decks

# <a name="spaced"></a> Spaced Repetition Controls
*Spaced Repetition is calculation that notifies the user of the optimal time to study*

At first, I thought about creating specific controls for pausing, resetting, restarting completion.

Since you can now archive a notebook, to essentially pause it, and resetting its current value feels a lot like micromanagement of something that should be automated

This feature will simply be the ability to restart completion. Or control the number of sessions that counts as "Complete"

Spaced Repetition Features
- [ ] Ability to restart completion


# <a name="filters"></a> Spaced Repetition Filters
*Spaced Repetition has many states: not-started, waiting, optimal, sub-optimal, overdue, archived, complete. Add filters to search by these states*

Items
- [ ] Update FTS search modal with filters
- [ ] Wire up changes to filters
  - [ ] POC: Two ways to determine; search by explicit status, search by date


---

# Complete

---

# <a name="mermaid"></a> Mermaid Flowchart Diagrams
Mermaid is a **markdown syntax** for creating **flowcharts**

![mermaid-banner](/mermaid-banner.png)

Add mermaid support to markdown editor
- [x] Core implementation
- [x] Ability to use fill in the blank inside of a node

# <a name="auth"></a> Loading & Auth Improvements
Update the Authentication flow to navigate to a specific `authentication` page.

This update will allow Flotes to immediately determine on load if the user is in demoing or logging in.

Which will allow for refactors to have components / screens wait on corresponding database calls
while delivering a better user experience. 
- [x] Remove flickering on stats screen
- [x] Remove flicker between demo sidenav and logged in sidenav when logging in
- [ ] ~~Remove stale state when navigating between notebooks~~
  - Will do this later. Need to update notebook to contain the number of users/notes. This way the server side render looks good. Otherwise, just clearing the notes and loading the new ones will cause excessive shifting.

Additionally, update login page to follow Google branding guidelines
- [x] Buttons need to describe the action taken. e.g. "Sign in with Google".

# <a name="pwa"></a> Flotes as a PWA 
A **PWA** (progressive web app) can significantly **improve the experience** for **mobile users**

![pwa-banner](/pwa-2.png)

TODO
- [x] Update to svelte-kit 1.0
- [x] Update pwa.png (192 & 512). Update: Will use white bg for now.
- [x] Add configuration
- [x] (Additional) Add dark overlay to `main` when sidenav is open on mobile

# <a name="starter"></a> Starter Decks

Create a set of starter decks & examples
- [x] Create a new screen to house starter decks
- [x] Ability for user to copy these decks as their own
