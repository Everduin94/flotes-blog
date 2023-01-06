---
layout: ../../layouts/MarkdownPostLayout.astro
title: '2023 Flotes Roadmap'
pubDate: 07-01-2022
description: 'Features, improvements, and ideas'
author: 'Flotes'
image:
    url: '/header-banner.png' 
    alt: 'Flotes home page as a banner'
tags: ["flotes", "work in progress", "features"]
---


# Outline
- [Flotes as a PWA](#pwa)
- [Mermaid Flowchart Diagrams](#mermaid)
- [Starter / Public Decks](#starter)
- [Spaced Repetition Controls](#spaced)
- [Spaced Repetition Filters](#filters)

# <a name="pwa"></a> Flotes as a PWA 
A **PWA** (progressive web app) can significantly **improve the experience** for **mobile users**

![pwa-banner](/pwa-2.png)

TODO
- [x] Update to svelte-kit 1.0
- [x] Update pwa.png (192 & 512). Update: Will use white bg for now.
- [x] Add configuration
- [x] (Additional) Add dark overlay to `main` when sidenav is open on mobile

Progress
- [x] concept work - [POC](https://github.com/Everduin94/svelte-kit-pwa-example)
- [x] development complete
- [ ] testing / deployment
- [ ] complete
- [ ] article

# <a name="mermaid"></a> Mermaid Flowchart Diagrams
Mermaid is a **markdown syntax** for creating **flowcharts**

![mermaid-banner](/mermaid-banner.png)

Add mermaid support to markdown editor
- [ ] Core implementation
- [ ] Ability to use fill in the blank inside of a node

Progress
- [x] concept work
- [ ] development complete
- [ ] testing / deployment
- [ ] complete

# <a name="starter"></a> Starter Decks

Create a set of starter decks & examples
- [ ] Create a new screen to house, filter, and search starter decks
- [ ] Ability for user to copy these decks as their own

Progress
- [ ] concept work
- [ ] development complete
- [ ] testing / deployment
- [ ] complete

# Public Decks

User public decks
- [ ] Give users ability to make readonly decks public
- [ ] Create flow for users to accept visibility of decks

Progress
- [ ] concept work
- [ ] development complete
- [ ] testing / deployment
- [ ] complete

# <a name="spaced"></a> Spaced Repetition Controls
*Spaced Repetition is calculation that notifies the user of the optimal time to study*

Spaced Repetition Features
- [ ] UI to handle changes
- [ ] Ability to pause
- [ ] Ability to reset (go back to 1)
- [ ] Ability to restart (completed before, do again)

Progress
- [ ] concept work
- [ ] development complete
- [ ] testing / deployment
- [ ] complete



# <a name="filters"></a> Spaced Repetition Filters
*Spaced Repetition has many states: not-started, waiting, optimal, sub-optimal, overdue. Add filters to search by these states*

TODO
- [ ] POC layout
- [ ] Update FTS search modal with filters
- [ ] Wire up changes to filters
  - [ ] POC: Two ways to determine; search by explicit status, search by date

Spaced Repetition Features
- [ ] UI to handle changes
- [ ] Ability to pause
- [ ] Ability to reset (go back to 1)
- [ ] Ability to restart (completed before, do again)

Progress
- [ ] concept work
- [ ] development complete
- [ ] testing / deployment
- [ ] complete