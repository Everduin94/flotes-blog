---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Writing Better Commits'
pubDate: 03-11-2023
description: 'Better commits using the better-commits CLI'
author: 'Flotes'
metaType: 'article'
metaPath: 'better-commits'
post_type: '/'
image:
    url: 'https://ik.imagekit.io/flotes/Screen_Shot_2023-03-11_at_3.55.51_PM.png?updatedAt=1678571776015' 
    alt: 'better-commits CLI'
metaImg: 'https://ik.imagekit.io/flotes/Screen_Shot_2023-03-11_at_3.55.51_PM.png?updatedAt=1678571776015'   
tags: ["git", "dev", "workflow"]
---

Recently I wrote a lightweight open-source CLI for writing better commits. It helps you follow the Conventional Commit Guideline, while being flexible and configurable.

[Source Code on Github](https://github.com/Everduin94/better-commits) 
- Highly flexible configuration
- Easy install with sane defaults
- Infers ticket/issue and type from branch
- Git status & interactive git add
- Color preview and confirm

## But, why write better commits?

A good commit history helps others (and the future you) better understand your code and how it came to be that way.

For myself, writing a good commit is like **writing good notes**. I want to write it in a way that **when I look back** I can **understand why and how** I made the decisions I did.

better-commits and the Conventional Commit Guidelines, provide a way to format commits consistenly. Doing so can result in some cool side-effects, aside from making your commits easier to read and understand.
- Automate versioning from commits with [semantic release](https://github.com/semantic-release/semantic-release)
- Automate [change logs](https://github.com/lob/generate-changelog) from commits
- Automate build processes based on commit
- Auto reference & close issues to PRs
- Auto populate the title and body of Github PRs and merge commits.


## Examples Commits

Below are a few example commits. These follow the Conventional Commit Guidelines, and may provide some inspiration for writing better commits.

### New feature
- The type of change, scope, Github ticket, and high-level description are all easily visible.
- The body explains what changed. Including the property name to enable.
- The ticket is referenced in the footer, which connects the Github issue with its corresponding pull request.

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  terminal
</div>

```
feat(tools): #3 infer ticket/issue from branch

If commit_type.infer_value_from_branch is enabled,
will attempt to infer ticket/issue from branch name.
Updated documentation with details.

Closes: #3
```

### Breaking changes
- The breaking change is signified by:
  - An **exclamation point** after the type and before the colon, brings attention to the commit
  - The "BREAKING CHANGE" label explains what the breaking change was.
- This could be extended to include an optional body. Explaining a path to migrate from Node 6 and resolve the breaking change.

<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  terminal
</div>

```
chore!: drop Node 6 from testing matrix

BREAKING CHANGE: dropping Node 6 which hits end of life in April
```

### Quick adjustment to documentation
- Technically a valid conventional commit. Many of the items in the specification are optional or shouldn't be forced if not applicable.


<div class="file-header">
  <div class="circles">
    <div class="circle red"></div>
    <div class="circle yellow"></div>
    <div class="circle green"></div>
  </div>
  terminal
</div>

```
docs: Fix tabbing in defaults section of readme
```

## Conclusion

Thanks for reading! If you enjoy using my CLI, [star it on github](https://github.com/Everduin94/better-commits), so I feel like the special little snowflake my mother tells me I am.


