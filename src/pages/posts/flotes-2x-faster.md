---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'How I Made My App 2.4x Faster Switching to Svelte'
pubDate: 02-01-2023
description: 'Server side rendering, lazy loading, pre-render, and less javascript'
metaDescription: 'Perfect Lighthouse scores with server side rendering, lazy loading, pre-render, and less javascript'
author: 'Flotes'
metaType: 'article'
image:
    url: 'https://ik.imagekit.io/flotes/Fasttt_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675187392759' 
    alt: 'Demon slayer with svelte and angular logos'
metaImg: 'https://ik.imagekit.io/flotes/Fasttt_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675187392759'
tags: ["Svelte", "Performance", "Coding"]
---

## Origin

In June of 2022, I finally became curious (and frustrated) enough to give something new a try. -- That something was **Svelte(Kit)**.

I had been working on Enterprise applications in Angular for years, and so I always wrote my side projects in Angular as well.

One weekend, I was hell-bent on **improving my lighthouse score** and speeding up the apps initial page load.

I spent hours refactoring, lazy loading, removing dependencies. After everything I tried **my scores were still far from ideal** in production.

This article is not to say that Angular *can't* be fast. That's not true. It's that **Svelte Kit** makes it **intuitive** to be **fast**.

## The Technical 

### Server Side Rendering
Svelte with SvelteKit promotes `Server Side Rendering` out of the box and built in. They provide tools and conventions to intuitively determine when you're in the context of server side rendering vs client side rendering.

For example, everything on this page that is not dynamic, is server side rendered. We display a shell of our component immediately on the initial load, and then populate the dynamic content on the client.

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  example.svelte
</div>

```svelte
<script>
	import { onMount } from 'svelte';

	let photos = [];

	onMount(async () => {
		const res = await fetch(`/tutorial/api/album`);
		photos = await res.json();
	});
</script>

<div class="photos">
	{#each photos as photo}
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title}>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<p>loading...</p>
	{/each}
</div>
```

Why Server Side Rendering: A simple explanation is that going from `Server --> Client` is faster than `Server --> Client --> Server --> Client`

Another way of looking at this is that traditional SPA frameworks, like Angular, must pull down and parse/execute some javascript before displaying anything on the screen. 

With SSR, the server sends rendered HTML on first load and then hydrates it. This keeps the initial page load very fast.

### Lazy Loading

Just about every framework comes with some implementation of `lazy loading` / `code splitting`.

Svelte leverages Vite which makes lazy loading intuitive & practically automatic.

For example, a component or page's dependencies won't be loaded until that component/page is created. So just by only importing what we need, we're effectively lazy loading everything else.

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  example.svelte
</div>

```svelte
  <script>
    // OKAY
    import Fa from 'svelte-fa';
    import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
    import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
    // AVOID
    import { DatabaseClient } from '@supabase'
  </script>
  
  <div>
    Really simple landing page
    <Fa icon={faUserGroup}/>
    <Fa icon={faClock}/>
  </div>
```

### Prerender

Svelte can `prerender` a page. Any content that is not dynamic (the same to all users), can be prerendered. Prerendering computes the contents of a page at build time and saving the HTML for display. i.e. we don't recompute the page for each visitor and instead do the computation during build time.

It's as easy as setting a variable in our `+page.ts`

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  +page.ts
</div>

```javascript
export const prerender = true;
```

Again, other frameworks can achieve this. It's more so how easy and intuitive svelte(kit) makes it.

### Less Javascript

Svelte just ships less javascript. And (imo) makes it easier to **write apps with less code** / boilerplate. 

Comparing the size of the packages. -- *See caveat
- [Svelte Package Size](https://bundlephobia.com/package/svelte@3.55.0)
- [Angular Package Size](https://bundlephobia.com/package/@angular/core@15.0.4)

> Not a totally fair comparison, Angular brings a lot, and by contrast this doesn't include kit. However, Angular brings on a lot of overhead. And claims that svelte has to pull in a bunch of separate libraries is *not* necessarily true. This is because it uses native web apis where possible and provides things like `store`.

Svelte Kit makes it **intuitive to write code on the server** as well. The experience of moving code out to the server, even as a frontend developer, is relatively easy. Which means **less code on the client**.

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  theme/+server.ts
</div>

```typescript
export async function PUT(all) {
	const request = all.request;
	const theme = await request.text();
	all.cookies.set('theme', theme, { path: '/' });

	if (!theme) {
		return {
			status: 400,
			body: missingThemeErr(theme)
		};
	}

	return new Response(null, {
		headers: { 'Set-Cookie': `theme=${theme}; SameSite=Strict; HttpOnly; Secure` }
	});
}

function missingThemeErr(theme: string) {
  return `${theme} theme could not be found!`
}
```

Summary
- Smaller package
- Less boilerplate
- Easy to move logic to the server as a frontend developer

## The Numbers

Here's the numbers from which this post is based on. The bad ones are after extensive refactoring, lazy loading, and changes. It's a small NX project with a couple of Angular/Firebase applications.

The 100s are a rewrite of the app using Svelte Kit.

### Svelte Kit

![flotes-2](https://ik.imagekit.io/flotes/100-lighthouse.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675199208354)

### Angular 

![yami-1](/yami-1.png)


