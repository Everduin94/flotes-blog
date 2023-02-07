---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Fa Icons Disappear'
pubDate: 01-20-2023
description: 'Fontawesome icons missing in production Vite build? Here is a possible cause and solution'
metaDescription: 'Vite Icon Missing / Disappearing Bug. Vite Fontawesome Icons Disappear in Production. My Font Awesome icons are randomly missing.'
author: 'Flotes'
metaType: 'article'
metaPath: 'vite-icon-bugs'
post_type: '/snippets'
image:
    url: '/vite.png' 
    alt: 'Vite logo banner'
metaImg: 'https://ik.imagekit.io/flotes/flotes-header.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674667619507'
tags: ["Vite", "Bug Fix", "Coding"]
---

## The Bug
I recently ran into an issue where **Fontawesome icons would show** for a moment, and **then disappear**. This is very difficult to debug because:
- It only happened in *production*
- Other icons were working
- It was *seemingly* random

When a Fontawesome icon is imported with a **treeshakeable** import **in multiple files**, it disppears the 2nd time the import is invoked. -- We can verify this in the network tab. Our icon is coming down as an **empty object**. 

**`💡Context`**  *A treeshakeable import in Fontawesome is when we import like this:*

- *import { faDiscord } from "@fortawesome/free-brands-svg-icons/**faDiscord**";*

![Network Icons](/network-icons.png)


## The Solution

We create a **single file** for importing icons that are used in **multiple places** in the project

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  icons.ts
</div>

```typescript
import {
  definition as discord 
} from "@fortawesome/free-brands-svg-icons/faDiscord";
export const faDiscord =  discord
```

Now instead of importing from `@fortawesome`, we instead import from `icons.ts`

Thats it! -- I hope you find this helpful, as this was a wild goose chase for me 😅

---

