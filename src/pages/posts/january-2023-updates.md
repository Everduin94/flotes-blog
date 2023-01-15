---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Changes January 2023'
pubDate: 01-07-2023
description: 'Flotes features, fixes, and improvements January 2023'
author: 'Flotes'
image:
    url: '/header-banner.png' 
    alt: 'Flotes home page as a banner'
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

The first community notebooks have been started. All of the logic and UI is written, just waiting to finish content of first Notebooks to make them available for practice. 

👉 [Community Notebooks](https://flotes.app/home/community) | [Tailwind Grid](https://flotes.app/home/community/tailwind-css-grid) | [Supabase](https://flotes.app/home/community/supabase-basics)
![Community Notebook](/community-tw.png)

## Fixes
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
