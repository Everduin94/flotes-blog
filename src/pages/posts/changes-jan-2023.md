---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Changes January 2023'
pubDate: 01-01-2023
description: 'Flotes changes, bug fixes, and improvements January 2023'
author: 'Flotes'
image:
    url: '/header-banner.png' 
    alt: 'Flotes home page as a banner'
tags: ["flotes", "change-log"]
draft: true
---


# Outline
- [Login Improvements](#login)


## <a name="login"></a> Login Improvements 
- [ ] Updated Login buttons to follow branding guide lines 
- [ ] Updated auth redirect

**Updated Authentication Redirect**
- This is a small but important change for flotes.

Flotes allows users to "demo" the app. This navigates the user to the actual application and then uses
functional programming on the frontend and RLS on the backend to prevent users from hitting a live database, and instead saving everything onto the heap. 

Thus, we don't "gaurd" routes because we allow users to navigate the app, without authentication.

Given our architecture, it's hard to determine **immediately** if the user is *logging in* or *viewing the demo*. 

This is because much of our app is Server Side Rendered, and the authentication comes from a "redirect".Thus, when the user is redirected to the app `/home`, the app only knows that the user is **not** logged in, and as a result server side renders the demo screens momentarily.

By navigating the user to a specific `/authentication` route, we can know the user is logging in, and then render the correct screens.

This significantly improves our ability to handle loading states from the database.

Because we know that if the user is logged in, `Component X` should make `Database X` request.
We can then server side render a loading version of the component until `Database X` request resolves.

This wasn't originally possible because given the user is *demoing the app*, that request will never happen. And if we don't know if the user is demoing or just waiting for the user state to become available on the client side, we can't confidentally wait for that database call.
