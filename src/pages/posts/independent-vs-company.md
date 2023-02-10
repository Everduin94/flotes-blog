---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Single-Developer vs Fortune 500 Software Engineer'
pubDate: 02-08-2023
description: 'The differences between developing independently and at a company. My opinions on software development, and how I got here'
metaDescription: 'Software development is filled with methodologies, best practices, and advice. Often, what works for a developer working independently, a small team, and a large company; may vary significantly'
author: 'Flotes'
metaType: 'article'
metaPath: 'independent-vs-company'
post_type: '/'
image:
    url: 'https://ik.imagekit.io/flotes/Screen_Shot_2023-02-10_at_8.42.33_AM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676040180304' 
    alt: 'Flexible & Transient vs Rigid & Engineered'
metaImg: 'https://ik.imagekit.io/flotes/Screen_Shot_2023-02-10_at_8.42.33_AM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676040180304'
tags: ["Engineer", "Code", "Career"]
---

I currently work at the Fortune 500 tech company Cisco. While I work here, I also work on **one extensive side project** in my **free-time**. — I noticed what **worked for me in a team at my full-time job**, did **not** hold up for what **worked best for me in my side project**.

Software development is filled with **methodologies**, **best practices**, and **advice**. Often, what works for a developer working by themself, a small team, and a large company; may vary significantly. 

These practices can also vary by domain or type of project. We’ll focus on differences introduced by **size & complexity**.
- For example, the degree of automated testing needed for writing a SQL Database Engine may be more significant, regardless of size.

Thus, an alternate title may be, **working on side projects vs working on company projects**.

> Clarification: By single-developer. I mean the sole developer working on a project without other programmers, designers, product, etc… Not contractors / freelances hired independently, that then may work in a team.


## Single-Developer vs Enterprise


### Enterprise Workflow

Things I use daily at a large company in a medium sized team. All of which are patterns set by architects & followed by engineers like me:
- OOP and Redux-like patterns
- Mandatory Code Coverage
- Significant Unit/E2E/Integration Testing
- Pull Requests and Mandatory Reviewers
- Large number of modular libraries in a Monorepo
- Angular (A frontend framework, ideal for enterprise-level development)
- Numerous lint rules, sonar, and pre-commit hooks
- Release branches / Cherry-picking
- Extensive Design Mock-ups
- Jira & Agile

By contrast. I use almost **none (or very little)** of these methodologies in my side projects.

![Independent-vs-Company](/line-indie-company.png)

### Single-Developer Workflow

In my side projects I strongly prefer:
- Procedural programming
- No mandatory coverage
- Only testing critical paths if automating
- No Pull Request Approvals
- Projects are broke out by App & Shared
- Svelte-Kit, Astro, & Tailwind
- No error lint rules, sonar, or commit hooks
- Feature deployments, but no cherry picking.
- No External Designs or Mock-ups
- No Jira or Agile

![Rigid-vs-Flexible](/flex-rigid.png)

When working as a **single-developer** I tend to prefer methodologies that are **flexible and transient**.

It’s not that flexible & transient is better than rigid & engineered or vice versa. It’s more-so an evaluation of what is the **best tool for the job and the developer**.

This article will be a primer into further elaborating on these ideas in future articles. For now, here are **references and explanations** that have **shaped my opinions over the years**. These have led me to think this way and prefer some of these options over others.

## Shaping my Software Opinions

[Purple Cow & This is Marketing by Seth Godin](https://seths.blog/)
- After reading these books, I realized my app wasn't designed to succeed, and restarted.
- In 1 **month** I accrued **5x** as many users as my previous app did in 1 **year**.

[Transitional Apps](https://www.youtube.com/watch?v=860d8usGC0o) and [Rethinking Reactivity by Rich Harris](https://www.youtube.com/watch?v=AdNJ3fydeao)
- Both videos are fantastic. It was exciting to hear about a framework and really resonate with its ideas and values.

[Object Oriented Programming is Bad by Brian Will](https://www.youtube.com/watch?v=QM1iUe6IofM)
- You should watch all 3 parts. This has had a **huge influence** on the way I **prefer to code**.

[Jonathan Blow](https://www.youtube.com/watch?v=KcP1fXQv0iU) -- Creator of Braid and the Witness
- I started paying more attention to people who made games and worked with graphics. They're often **solving complex problems**, quickly, with few people.
- Coincidentally, the best engineer I've ever worked with was extremely well versed in graphics and maps.

[Chris at Machine](https://www.youtube.com/@chrisatmachine) 
- I found his first series on Neovim a couple years ago and it **completely changed the way I edited**. His latest series on Neovim from scratch is pure gold.

[Neovim Plugins by Folke](https://github.com/folke) 
- I've taken a lot of inspiration from these plugins. This type of software made me realize just how much you can do simply by having: **sane defaults**, **flexible configuration**, and **good documentation**

[Javascript 30 by Wes Bos](https://javascript30.com/)
- My first taste of truly **high quality** and **inspiring** tutorials

[What the Heck is the Event Loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- This is one of those videos that I had to watch 3 times. I could watch it again today and still learn something.

[The Death of Agile](https://www.youtube.com/watch?v=vSnCeJEka_s)
- Allen Holub's recent takes on Twitter can be… uh questionable. 
- But I agree with this video (for the most part) and helped me put in to words what **I don't like about Agile**.

[Pragmatic Programmer](https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/)
- I read this in my early 20s. It helped me realize **people don't know what they want**. You have to **show them options and iterate**.
 

Clean Code by Robert Martin. 
- Early in my career I read it front to back and tried to follow it for years. This is what lead me to find the video "Object Oriented Programming is Bad"
- An important stepping stone in my journey, but I *don't* agree with many of the teachings in this book.

Hopefully you find some of these useful like I did. Thanks for reading :)
