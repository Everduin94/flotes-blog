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

## Fixes
- Svelte Kit added a breaking change to server hooks which caused Flotes to incorrectly update the layout cookie. This is now fixed. -- Layout cookies are used to server side render preferences
- Navigating to the next note in a practice session will now scroll to the top
- The badge in the top right corner will no longer inaccurately display (for example) 4/3, once completing the practice
- Saving stats now does 1 combined network request instead of 2 (one for session stats and another for note-by-note stats)
- Demo no longer has arbitrary wait times to generate stats
- Given a slow connection, stats will now display consistently. There was an issue where you might pull stats from the server before all stats were saved.
