---
title: Retrospectives
---

## RBF Rollback Post Mortem
The team recently made a last minute no-go decision on a feature release (RBF - Bitcoin "replace by fee" functionality on Desktop).

This did not have any impact on customers, but did result [in communication and logistical overhead](/) coordinating the most recent [Mexodus Desktop release](https://github.com/ExodusMovement/exodus-desktop/releases/tag/20.5.22).

## Attendees

* Sean Coonce ([@cooncesean][])

## Agenda
The post mortem covered these topics in following order:

* Timeline of events
* Impact to customers/internally
* Learnings and recommendations

## Event Timeline
* [Tues 5/19/2020] [][] opens a [thread in #development](/) to discuss release coordination around RBF in Desktop.
* [Weds 5/20/2020] [][] [recommends postoponing RBF](/) based on QA feedback.
* [Weds 5/20/2020] The [team makes the decision](/) to postpone the release in order to de-risk BTC usage on Desktop.
* [Weds 5/20/2020] [][] + [][] unwind RBF related pull requests, cut the release, and run it through QA.
* [Thurs 5/21/2020] The Desktop app is formally released.

## Impact
The biggest impact seemed to be internal challenges around:

* Reverting pieces of RBF safely (RBF code paths were intertwined with pre-existing BTC code in the wallet).
* QA not having enough lead time to thoroughly test the RBF specific changes. QA not having enough documentation to know how to effectively exercise this feature.

## Learnings / Next Steps
**Postponement:** The team felt that it made the correct decision in terms of postponing the launch of RBF.

**Tuning The Release Process:** This post mortem surprisingly raised some interesting points about our release process and what we might be able to do to improve it. The team identified a pain point: There isn't adequate time between code freeze, QA, and launch - to allow developers to test their changes in our release candidate.

As a next step, [][] is going to produce two documents:

1. The first will outline our current cut, build, qa, release, and hot-fix process (including branching strategies) to ensure that a) this process is documented and codified and b) that we all share a common understanding of it.
2. The second document will be a proposal that motivates changes to this process in order to increase overall confidence with each release.
