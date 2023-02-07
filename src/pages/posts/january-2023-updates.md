---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Changes January 2023'
pubDate: 01-07-2023
description: 'Flotes features, fixes, and improvements January 2023'
author: 'Flotes'
metaType: 'article'
metaPath: 'january-2023-updates'
post_type: '/change_log'
image:
    url: '/header-banner.png' 
    alt: 'Flotes home page as a banner'
metaImg: 'https://ik.imagekit.io/flotes/flotes-header.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674667619507'   
tags: ["flotes", "change-log", "work in progress"]
---

## Authentication

### Branding Guidelines

We now follow the Google Branding Guidelines, and updated the Discord and Github buttons to match.

![Branding Auth](/branding-auth.png)

### Authentication Flow

Previously Flotes auth flow did not give us insight into whether the user was in the demo or logging in.
This caused us to write brittle code in some areas. This is now fixed by navigating the user to a dedicated authentication screen until the user state is available.

![Auth Logo](/auth-logo.png)

## Community Notebooks

![Community Notebooks](/community-1.png)

The first community notebook has been released 🥳

👉 [Community Notebooks](https://flotes.app/home/community) | [Tailwind Grid](https://flotes.app/home/community/tailwind-css-grid) | [Supabase](https://flotes.app/home/community/supabase-basics)
![Community Notebook](/community-tw.png)


## UI Improvements

Some minor improvements to readability of the text and buttons to **increase contrast**

![ui 1](/ui-1.png)

After selecting `Again` the second `Show Answer` prompt will now show `Next` and `Again`. This is to help streamline and clarify that only **initial feedback** is captured.

![ui 2](/ui-2.png)


## Fixes
- Fixed the Archive Button in Demo
- PWA Improvements: Flotes lazy loads potentially 100s of syntax files. The PWA was caching all possible files which caused installing the PWA and updating the PWA to take upwards of 30 seconds
  - This caused two jarring behaviors:
    - The "Install App" notification wouldn't come up for a significant amount of time.
    - If you've already installed the PWA, the refresh may happen numerous seconds into using the app, instead of moments after entering the app 
- Practice Local Storage fixes:
  - Practice in demo now properly shows the practice token in the top right
  - Previously, if you refresh/lose-connection/navigate-away/etc... while the answer/feedback was showing the correct/incorrect was lost.
    - Now the app should take you back to where you left off.
- UI Design Improvements:
  - Demo warning and demo stats warning now sit at the top of the UI
  - Visual improvements to highlighted text: like inline code, mark tags, and link tags.
  - Some scroll bars have been fixed to look more natural
  - Size between text in the editor has been increased to make text look less squished.
- Svelte Kit added a breaking change to server hooks which caused Flotes to incorrectly update the layout cookie. This is now fixed. -- Layout cookies are used to server side render preferences
- Navigating to the next note in a practice session will now scroll to the top
- The badge in the top right corner will no longer inaccurately display (for example) 4/3, once completing the practice
- Saving stats now does 1 combined network request instead of 2 (one for session stats and another for note-by-note stats)
- Demo no longer has arbitrary wait times to generate stats
- Given a slow connection, stats will now display consistently. There was an issue where you might pull stats from the server before all stats were saved.
- Fixed issue where our PWA was causing the app to not deploy new changes. If you notice this please [Report it on Discord](https://discord.gg/4KBRYjC7D9). If you're tech savy and open up the Developer Tools. You should now see a version number printed. Anything with `1.0.3` or higher should have the fix. -- If refreshing does not cause the version to print. Try clearing your browser cache.
