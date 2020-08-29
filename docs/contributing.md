---
title: How To Contribute
---

# Contributing
Thanks for taking the time to contribute to this project. Every little bit improves our documentation, and the guidance below should make contributing a straightforward experience.

## Why GitHub?
A quick note on why we have selected a `git` oriented tool to capture documentation. The benefits of using GitHub are two-fold:

1. **Peer Review:** A peer review process is imperative in maintaining coherent information architecture and standardization. Wiki based tools that don't enforce a cycle of peer review allow anybody to add anything - anywhere. Introducing a review cycle into the content modification process promotes a sense of organization and intentionality when adding to the handbook.
2. **Developer Oriented:** Engineers are already familiar with markdown, GitHub, and the pull request process to create change. This tool compliments our existing workflow without requiring a steep learning curve.

## Folks New To Git + GitHub
If you are completely new to `git` and GitHub, you may want to read up on ["the GitHub Flow"](https://guides.github.com/introduction/flow/) before attempting to introduce change in this project.

Once you understand the basics, [this Loom video](/) sheds light on using the GitHub web-based editor to make changes to the handbook without having to open a terminal.

## Branching
There aren't any hard and fast rules here, but [topic branch naming conventions](https://deepsource.io/blog/git-branch-naming-conventions/) are recommended. When in doubt, `username/branch-name` is a reasonable pattern to follow. eg: `cooncesean/add-contributing-doc`.

## Markdown
If you are unfamailiar with markdown (or GitHub's flavor of markdown), [this cheat sheet](https://guides.github.com/features/mastering-markdown/) is a handy resource.

## Adding Images
If you want to embed a diagram, screenshot, or other visual content into the handbook (like [this](/)), you need to do it in two steps:

1. Add your image to the `_images/` directory (`git add`, then `git commit` it).
2. Then reference that image in a markdown file like so:
```markdown
![Image Description](/_images/name-of-your-image.png)
```
