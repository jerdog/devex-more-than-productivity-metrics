---
# You can also start simply with 'default'
theme: the-unnamed
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
#background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Developer Experience is more than just Productivity metrics
info: |
  ## Developer Experience is more than just Productivity metrics
  With everything changing in tech at a frenetic pace, the emphasis on developer productivity has overshadowed the true essence of developer experience (DevEx). While frameworks like SPACE, getDX, and DORA metrics provide valuable insights, they often miss the mark on capturing developers' real, day-to-day experiences using tools and services, instead focusing strictly on the bottom line for the company. Meanwhile, developers and practitioners are job-hopping more than ever.
  This talk will explore the origins and evolution of "developer experience," dissect popular frameworks, and advocate for a more balanced approach that values the practitioner's perspective. At the end we will set a path towards integrating top-down metrics with bottom-up feedback, ensuring an approach to developer experience that fosters innovation and satisfaction.
conference: "FOSDEM26 - Testing & CD DevRoom"
socialimg: /images/bluesky-jerdog-white.png
# https://sli.dev/features/drawing
drawings:
  persist: false
defaults:
  layout: center
#  class: text-center
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
# seoMeta:
#  ogImage: https://cover.sli.dev
# addons:
#  - slidev-component-progress
fonts:
  - sans: News Cycle
  - mono: Fira Code
## Current slide
# apply unocss classes to the current slide
class:
  - text-center
  - my-cool-content-on-the-left
layout: image-right
image: /images/slides/devex-iceberg.png
backgroundSize: contain
#layoutClass: openingH2
---

# Developer Experience is more than just Productivity metrics{style="margin-top: 30%;"}

<!--
***RESET THE TIMER***
-->

---
transition: fade
---

# DevEx disasters...

<!--
We've all had that experience using a tool or service that was a disaster. It could be the worst deployment process you've ever seen, or the most painful codebase you've ever had to work with, or documentation that's so confusing it makes your head spin. Or maybe a combination of them… Who here knows what I’m talking about?

There are also plenty of examples that we can point to that illustrate good developer experiences.
-->

---
title: '--Heroku ftw'
transition: slide-up
---

```bash
git push heroku main
```

![Heroku deploy button](/images/slides/heroku-deploy-button.png)

<!--
One that always comes to mind is Heroku. Heroku was long considered the gold standard for developer experience with a simple set of tools and a command-line interface that allowed developers to focus on building applications and delivering them to users. And that was it. Now of course, Heroku is still around (albeit not nearly as developer-centric as they formerly were, but that is changing), but it's not the only game in town. Anyone used Netlify, Vercel, etc.?
-->

---
layout: two-cols
class: text-center
title: "About Me"
transition: slide-down
---

<span style="position: relative; top: 20%;">

  ## Jeremy Meiss

  <p style="font-weight: bold;">Director, DevEx & DevRel</p>
  <p class="text-sm italic">OneStream Software</p>
  <p style="font-weight: bold;">DevOpsDays KC Organizer</p>
  <p style="font-weight: bold;">CDF Ambassador</p>

</span>

::right::

![alt text](/images/profile-pic.jpg){style="position: relative; margin: auto; width: 70%; border-radius: 15px 50px; "}

<!--
My name is Jeremy Meiss, and I am the Director of Developer Experience and Developer Relations at OneStream Software. I also help organize DevOpsDays Kansas City.
-->

---
layout: image
image: "/images/slides/devex-integral-dev-lifecycle.jpg"
---

<!--
Because DevEx is such an integral part of the entire development lifecycle, it means that the ease of use, reliability, how accessible and understandable documentation, how efficient the build processes are, the effectiveness of testing frameworks, and the smoothness of deployment procedures all have an impact on the overall experience for a developer.

So let's start with some definitions between Developer Experience and Developer Productivity.
-->

---
layout: two-cols-header
class: text-center
layoutClass: gap-8
---

# Developer Experience vs Developer Productivity

::left::

## Developer Experience

>_"...the **journey** of developers as they learn and deploy technology, which if successful, focuses on eliminating obstacles that hinder a developer or practitioner from achieving success in their endeavors."

-**Jessica West**, Director of Education & Customer Experience (Chronosphere)

::right::

## Developer Productivity

> "...the effectiveness and efficiency with which software developers produce high-quality code and complete projects."

- [LinearB](https://linearb.io/blog/developer-productivity)

<!--
Developer Experience is the journey of developers as they learn and deploy technology, and Developer Productivity is how effective and efficient devs are at producing.
-->

---
layout: two-cols-header
class: text-center
layoutClass: gap-8
---

# Developer Experience != Developer Productivity

<br />
<span style="background-color: #ffffff; color: #000000; font-size: 1.5em; padding: 10px; border-radius: 5px;">
🎵 More than a metric.... 🎵
</span>

::left::

## Experience is the <span class="text-[#FF6E54] font-bold">Cause</span>

<div class="flex flex-col items-center justify-center text-center">
  <div class="glass-card p-8 w-full">
    <div class="text-6xl">🌳</div>
    <h4 class="text-2xl font-bold text-[#FFA600]">The Roots: DevEx</h4>
    <p class="text-slate-300">The daily journey: tools, processes, cognitive load, and flow state.</p>
  </div>
</div>

::right::

## Productivity is the <span class="text-[#955196] font-bold">Effect</span>

<div class="flex flex-col items-center justify-center text-center">
  <div class="glass-card p-8 w-full">
    <div class="text-6xl mb-4">🍎</div>
    <h4 class="text-2xl font-bold text-[#DD5182]">The Fruit: Productivity</h4>
    <p class="mt-2 text-slate-300">The outcome: high-quality, impactful software that drives business value.</p>
  </div>
</div>


<!--
There is a subtle difference between Developer Experience and Developer Productivity, with the focus of DevProd being how effective and efficient developers are, while DevEx is about the experience developers have using tools and services - at its core it is about the practitioner. They aren't the same, but both do have some relation to each other - with Productivity being driven by the experience instead of the other way around. Dev Productivity is a metric, while DevEx is a feeling.

Sustainable productivity isn't forced; it's a natural outcome of a superior Developer Experience (DevEx). DevEx is the leading indicator of success, focusing on the developer's lived reality, while productivity is the lagging indicator, measuring the ultimate business impact.
-->

---
layout: image-left
image: "/images/slides/cornell-devex.jpg"
backgroundSize: contain
class: my-cool-content-on-the-right
title: "DevEx isn't new"
---

## DevEx isn't new

_REF: F. Fagerholm and J. Münch, "[Developer experience: Concept and definition](https://ieeexplore.ieee.org/document/6225984?arnumber=6225984)," 2012 International Conference on Software and System Process (ICSSP), Zurich, Switzerland, 2012._

<!--
But DevEx isn't a new thing. The first mention of "developer experience" as a concept was in a paper presented at the June 2012 IEEE International Conference on Software and System Process in Zurich. There are references in the paper going back to 1985 that deal with "programmer performance and the effects of the workplace." A few things stand out in this paper, which is a really great read.
-->

---
layout: image-left
image: /images/slides/cornell-devex.jpg
backgroundSize: contain
class: my-cool-content-on-the-right
title: "DevEx isn't new"
---

## DevEx isn't new

>"New ways of working such as globally distributed development or the integration of self-motivated external developers into software ecosystems will require a better and more comprehensive understanding of developers' feelings, perceptions, motivations and identification with their tasks in their respective project environments."

_REF: F. Fagerholm and J. Münch, "[Developer experience: Concept and definition](https://ieeexplore.ieee.org/document/6225984?arnumber=6225984). 2012."_

<!--
The first is where it talked about these New ways of working where development was globally distributed and integrating self-motivated external developers into software ecosystems and would require a better and more comprehensive understanding of developers' feelings, perceptions, motivations and identification with their tasks in their respective project environments.
-->

---
layout: image-left
image: /images/slides/cornell-devex.jpg
backgroundSize: contain
class: my-cool-content-on-the-right
title: "DevEx isn't new"
---

## DevEx isn't new

>"...developer experience could be defined as a means for capturing how developers think and feel about their activities within their working environments, with the assumption that an improvement of the developer experience has positive impacts on characteristics such as sustained team and project performance."

_REF: F. Fagerholm and J. Münch, "[Developer experience: Concept and definition](https://ieeexplore.ieee.org/document/6225984?arnumber=6225984). 2012."_

<!--
The second was this line, that DevEx could be a means for capturing how devs think and feel about their activities at work, and that improving their experience impacts things like sustained team and project performance.

So all of this interest in DevEx isn't a new concept - but is largely driven by companies trying to sell you something, from the top down, with very little (if any) focus on developers themselves. That doesn't mean there isn't some good value to be had in these frameworks, but we need to be careful about how we use them, and how we think about them.
-->

---

<h2 class="text-3xl font-bold text-center gradient-text mb-4">From Lines of Code to Value Streams</h2>

<div class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="font-extrabold text-[#ae2012] text-center" style="font-size: 1.5em;">!!!</p>
        <p class="mt-2 text-slate-600 font-semibold">Leaders agree that traditional metrics like LOC are ineffective.</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="font-extrabold text-[#0a9396] text-center" style="font-size: 1.5em;">1st</p>
        <p class="mt-2 text-slate-600 font-semibold">Principle of modern measurement: Focus on systems, not just individuals.</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="font-extrabold text-[#ee9b00] text-center" style="font-size: 1.5em;">3</p>
        <p class="mt-2 text-slate-600 font-semibold">Prominent frameworks now guide the industry: DORA, SPACE, and GetDX Core 4.</p>
    </div>
</div>

<!--
For decades, engineering leaders grappled with measuring productivity, often relying on flawed metrics like lines of code - an easily gamed incentive that missed the bigger picture. Today, the focus has shifted to understanding the entire value stream, leading to sophisticated, research-backed frameworks that provide a holistic view of performance. A few of the more popular frameworks are DORA, SPACE, and GetDX Core 4.
-->

---
class: text-center
---

## Evolution of "Developer Experience" Frameworks

![alt text](/images/slides/conversation-shift.png){style="width: 80%; height: auto; margin: auto;"}

<!--
These frameworks have shifted the conversation from pipeline metrics to holistic, business-aligned frameworks, shifting the audience from engineers to the C-suite. All of this is fine in and of itself, but this shift has put the focus on the business and not the developer, and has created a lot of confusion.

Here's what we've seen with these measurement frameworks....
-->

---

### Comparing the Developer Productivity Frameworks

<div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0.5rem 0rem;">DORA</h4>
        <dl class="text-slate-600">
            <dt class="font-semibold">Scope:</dt>
            <dd class="text-sm">Narrow. The software delivery pipeline (commit to deploy).</dd>
            <dt class="font-semibold">Philosophy:</dt>
            <dd class="text-sm">Prescriptive. A clear recipe of 4 key metrics.</dd>
            <dt class="font-semibold">Audience:</dt>
            <dd class="text-sm">Technical Leaders. DevOps, SREs, Engineering Managers.</dd>
              <dt class="font-semibold">Data:</dt>
            <dd class="text-sm">Quantitative. System data from CI/CD, Git, etc.</dd>
        </dl>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0.5rem 0rem;">SPACE</h4>
          <dl class="text-slate-600">
            <dt class="font-semibold">Scope:</dt>
            <dd class="text-sm">Broad. The entire socio-technical system.</dd>
            <dt class="font-semibold">Philosophy:</dt>
            <dd class="text-sm">Flexible. A menu of dimensions to choose from.</dd>
            <dt class="font-semibold">Audience:</dt>
            <dd class="text-sm">Engineering Management. Fosters empathetic conversations.</dd>
              <dt class="font-semibold">Data:</dt>
            <dd class="text-sm">Hybrid. System data plus qualitative surveys.</dd>
        </dl>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0.5rem 0rem;">GetDX Core 4</h4>
          <dl class="text-slate-600">
            <dt class="font-semibold">Scope:</dt>
            <dd class="text-sm">Hybrid. Bridges engineering activity to business impact.</dd>
            <dt class="font-semibold">Philosophy:</dt>
            <dd class="text-sm">Prescriptive. A unified recipe of 4 pillars.</dd>
            <dt class="font-semibold">Audience:</dt>
            <dd class="text-sm">The Entire Org. A shared language for engineers and C-suite.</dd>
              <dt class="font-semibold">Data:</dt>
            <dd class="text-sm">Hybrid. System data, surveys, and financial data.</dd>
        </dl>
    </div>
</div>

<!--
In 2014 **DORA** established the gold standard for measuring DevOps pipeline health, priving that speed and stability are not trade-offs, providing engineering teams with a quantitative, evidence-backed language for **software delivery performance**.

Building on DORA, the **SPACE framework** introduced in 2021 a holistic, human-centric model, arguing that productivity is multi-dimensional, codifying the importance of satisfaction, well-being, and collaboration as critical components of **performance**.

[click]2024: GetDX Core 4 Unifies for Business Impact
To resolve market confusion (or create more?), in 2024 **GetDX Core 4** was created to be a practical, prescriptive framework seeking to unify concepts from DORA and SPACE and, most importantly, create a direct link between engineering efforts and tangible business outcomes like **ROI and revenue**.

So comparing the different frameworks out there, they each have their own strengths and weaknesses, but largely focused on the business and its bottom line, and not the developer. Anyone using these frameworks, or heard of them?
-->

---

## The Three Pillars of World-Class DevEx

<div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="font-extrabold text-[#ae2012] text-center" style="font-size: 1.5em;">Fast, High-Quality Feedback Loops</p>
        <p class="mt-2 text-slate-600 font-semibold" style="font-size: 1em;">Slow, ambiguous feedback is a primary source of frustration. The speed of the inner loop (local build/test) and outer loop (CI/CD, code review) is critical for maintaining momentum and iterating with confidence.</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="font-extrabold text-[#0a9396] text-center" style="font-size: 1.5em;">Low Cognitive Load</p>
        <p class="mt-2 text-slate-600 font-semibold" style="font-size: 1em;">Human working memory is limited. When developers must wrestle with complex systems or poor documentation, less mental energy is available for creating solutions. High rework is a strong signal of high cognitive load.</p>
    </div>
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <p class="font-extrabold text-[#ee9b00] text-center" style="font-size: 1.5em;">Enabled "Flow State"</p>
        <p class="mt-2 text-slate-600 font-semibold" style="font-size: 1em;">Flow, or being "in the zone," is where deep, creative work happens. It requires clear goals, immediate feedback, and protection from interruptions. It can take over 15 minutes to regain focus after a single interruption.</p>
    </div>
</div>

<!--
Building a great Developer Experience is not accidental. It's built with the **developer in mind**, and designed to minimize friction, reduce mental overhead, and enable deep, focused work. We'll dive into each of these a bit more with some actionable steps to implement them.
-->

---

### Fast, High-Quality Feedback Loops

1. Automated Visual Regression Testing in CI/CD
2. "Shifting Left" with Static Code Analysis and Linting in the IDE & Pre-Commit Hooks
3. Production "Canary" Deployments & Automated Monitoring with Meaningful Metrics
4. Daily "Mob Programming" or Pair Programming Sessions for Critical/Complex Tasks
5. Dedicated "Bug Bash" Weeks or Sprints with Stakeholder Involvement

<!--
A core of DevEx (and DevOps, really) are fast, high-quality feedback loops:

- Integrate visual regression testing into your CI/CD pipeline. Screenshots of key UI componentts at commit and compare them using tools like BackstopJS, Percy, and Applitools to name a few.
- Integrate static analysis and linting tools (e.g., ESLint, SonarQube, Checkstyle) directly into developers' IDEs and as pre-commit hooks, like Husky and Conventional Commits for immediate feedback on code style violations, potential bugs, and security vulnerabilities before code is even committed to the repository.
- Implement a robust monitoring system and adopt canary deployments (or other progressive delivery methods like feature flags), and measure those deployments over time.
- Dedicate specific time slots (e.g., 1-2 hours daily) for mob programming or pair programming sessions, particularly when tackling complex features, refactoring, or debugging challenging issues. This provides immediate feedback from multiple developers, leading to better code quality, faster problem-solving, and knowledge sharing.
- Schedule regular "bug bash" events (e.g., once per quarter) where the entire team, including developers, QA, product owners, and even stakeholders like customer support representatives, collaboratively test the software and report bugs. This provides diverse perspectives and uncovers issues that might be missed by automated testing or individual developers. Incentivize finding critical bugs.
-->

---

### Low Cognitive Load

1. Standardize Code Style & Linting Rules
2. Implement Version Control with Meaningful Commit Messages
3. Prioritize and Refactor Technical Debt Incrementally
4. Centralize Documentation and Knowledge Sharing
5. Implement Automated Testing at All Levels

<!--
A few ways to implement "Low Cognitive Load" for your teams:

- Implement and enforce consistent code style (e.g., using Prettier, ESLint, or equivalent for the team's languages) across all projects.
- Make sure you utilize Version Control as well as the commit message hooks I mentioned to create uniform formats to help quickly grasp the purpose and context of past changes with needing to dig into code diffs to understand the "why" behind specific implementations.
- Dedicate a small but consistent portion of each sprint (e.g., 10-20%) to addressing identified technical debt. Choose one or two high-impact areas to focus on during each iteration.
- Establish a single source of truth for all project documentation (e.g., a well-organized wiki, a documentation platform like Read the Docs, or even well-structured READMEs in the repository), and encourage documentation as part of the workflow.
- Develop a comprehensive suite of automated tests (unit, integration, end-to-end) that provide rapid feedback on code changes. Integrate testing into the CI/CD pipeline to ensure tests are run automatically on every commit.
-->

---

### Enabled "Flow State"

1. Implement a High-Signal Notification System & Prioritization
2. Adopt a Streamlined Code Review Process with Contextual Tooling
3. Standardize Development Environments and Automate Setup
4. Implement Short, Focused "Pomodoro" or Timeboxing Sessions
5. Cultivate a Culture of Psychological Safety and Open Communication

<!--
Improving 'Flow State' involves:

- Replace generic "email everything" approaches and only notify for breaking CI builds directly impacting the feature being worked on, defer less critical updates.
- Implement a code review process that prioritizes speed and constructive feedback, and enforce guidelines focusing on clarity, maintainability, and architectural consistency, and encourage reviewers to provide actionable suggestions, not just nitpicks.
- Ensure everyone is working from the same baseline and standards by standardizing the development environments and provide pre-configured, containerized setups for each project.
- Encourage teams to break work down into manageable chunks, with timeboxing techniques like the Pomodoro Technique (25 minutes of focused work, followed by a 5-minute break) - which can help maintain focus and prevent burnout. The structured approach can also help overcome procrastination.
- Encourage developers to ask questions, admit mistakes, and experiment without fear of blame or punishment. Implement regular retrospectives to identify and address roadblocks to flow. Create a safe space to voice concerns regarding workflow. Actively work to resolve issues that developers bring up.
-->

---

## So what do we measure?
### Avoid the Gamification Trap
#### Use Metrics for Improvement, Not Judgment

> "when a measure becomes a target, it ceases to be a good measure."

-Goodhart's Law

<!--
The introduction of any measurement system carries the inherent risk of misuse. It is imperative that DevEx and productivity metrics are used as **tools** for systemic improvement, **not as instruments** for judging or ranking individual developers. When a metric becomes a target for performance evaluation, it ceases to be a good measure—a phenomenon known as Goodhart's Law.

If "number of commits" is incentivized, developers will simply make many small, meaningless commits to inflate their score, degrading code history without adding value.
-->

---

## So what do we measure?

- Cycle Time
- PR Review Time
- Rework Rate
- Meeting Load
- Time to First Commit
- Perceived Focus Time

***These are not one-size-fits-all metrics, but a starting point.***

<!--
Move from abstract to actionable. Use a balanced set of metrics that reflect the developer's daily reality and provide clear signals for improvement. Use them as **conversation starters**, not for judgment. These 6 metrics are probably a great starting point for a team to measure their developer experience, and can be used in conjunction with the frameworks we've discussed.

But I want to stress that these are not a one-size-fits-all set of metrics, and should be tailored to the specific needs and context of your team. They are a starting point, not an end point.
-->

---

### Cycle Time ⏱️

- Implement and enforce "Small Batch" Size Approach
- Invest in Test Automation and CI/CD Pipelines
- Improve Dev Environment Setup and Standardization
- Proactively Identify and Remove Blocking Issues

<!--
Cycle time is the time it takes to go from idea to production. It is a key measure of how quickly a team can deliver value.

- Implement and enforce "Small Batch" Size Approach
- Invest in Test Automation and CI/CD Pipelines
- Improve Development Environment Setup and Standardization
- Proactively Identify and Remove Blocking Issues and Dependencies
-->

---

### PR Review Time 🔄

- Enforce "Small PR" Guidelines and Automation
- Implement a Reviewer Rotation and/or "Reviewer Roulette" System
- Mandate Clear and Concise PR Descriptions and Context
- Establish and Make Visible SLAs for PR Reviews

<!--
PR review time plays a part in cycle time, and is a key measurement of how quickly a team can deliver value, fixes, etc.

- Enforce "Small PR" Guidelines and Automation
- Implement a Reviewer Rotation and/or "Reviewer Roulette" System
- Mandate Clear and Concise PR Descriptions and Context
- Establish Service Level Agreements (SLAs) for PR Reviews and Make Them Visible
-->

---

### Rework Rate ✍️

- Refine User Stories with Clearer Acceptance Criteria and Examples
- Invest in Better Tooling and Automation for Testing
- Implement a Robust Definition of Done (DoD) and **Enforce** It
- Improve Feedback Loops and Communication

<!--
Rework rate is the percentage of work that needs to be redone due to errors, misunderstandings, or changes in requirements - after things have been committed. It builds on PR review time and again how efficiently a team can deliver value without unnecessary rework.

- Refine User Stories with Clearer Acceptance Criteria and Examples
- Invest in Better Tooling and Automation for Testing
- Implement a Robust Definition of Done (DoD) and Enforce It
- Improve Feedback Loops and Communication
-->

---

### Meeting Load 🧠


- Implement a "Meeting-Free Day" (or Half-Day) Policy
- Audit Meeting Invitations and Participation
- Standardize Meeting Agendas and Timeboxing
- Promote Asynchronous Communication Tools & Practices
- Implement a "Meeting Budget" or "Meeting Credit" System

<!--
Who spends more time on meetings than actually developing? Meeting load is the amount of time developers spend in meetings, which can significantly impact their productivity and focus.

- Implement a "Meeting-Free Day" (or Half-Day) Policy
- Audit Meeting Invitations and Participation
- Standardize Meeting Agendas and Timeboxing
- Promote Asynchronous Communication Tools & Practices
- Implement a "Meeting Budget" or "Meeting Credit" System
-->

---

### Time to First Commit 🚀

- Provide Ready-to-Run Starter Projects/Templates
- Automate Environment Setup and Onboarding
- Simplify Code Contribution with Clear Guidelines and Tooling
- Offer Short, Focused "First Contribution" Tasks
- Provide Active Mentorship and Support (paired with tooling)

<!--
New Hire Onboarding is probably the most impactful of these, especially in smaller teams, becaause it sets the tone for the new developer's experience. Time to first commit is the time it takes for a new developer to make their first meaningful contribution to the codebase.

- Provide Ready-to-Run Starter Projects/Templates
- Automate Environment Setup and Onboarding
- Simplify Code Contribution Process with Clear Guidelines and Tooling
- Offer Short, Focused "First Contribution" Tasks (aka "Good First Issues")
- Provide Active Mentorship and Support (paired with tooling)
-->

---

### Perceived Focus Time 💡

- Optimize Build Times with Incremental Builds and Caching
- Prioritize and Reduce Notification Overload
- Automate Repetitive Tasks with Scripting or Tools
- Improve Error Messaging and Debugging Tools


<!--
Perceived Focus Time is the amount of uninterrupted time developers feel they have to work on their tasks without distractions. It is very subjective, but it is critical for productivity and job satisfaction.

- Optimize Build Times with Incremental Builds and Caching
- Prioritize and Reduce Notification Overload
- Automate Repetitive Tasks with Scripting or Tools
- Improve Error Messaging and Debugging Tools

-->

---

## Practitioner-Centric Scorecard

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="glass-card p-1 metric-card flex flex-col justify-between text-center">
      <div>
          <div class="text-3xl mb-2">⏱️</div>
          <h3 class="text-xl font-bold" style="margin-bottom: 0em;">Cycle Time</h3>
          <p class="text-slate-300 mt-2">Commit to Production</p>
          <p class="text-xl font-bold text-white mt-3">Decreasing Trend</p>
      </div>
    </div>
    <div class="glass-card p-1 metric-card flex flex-col justify-between text-center">
      <div>
          <div class="text-3xl mb-2">🔄</div>
          <h3 class="text-xl font-bold" style="margin-bottom: 0em;">PR Review Time</h3>
          <p class="text-slate-300 mt-2">Open to Reviewed</p>
          <p class="text-2xl font-bold text-white mt-3">&lt; 3 Hours</p>
      </div>
    </div>
    <div class="glass-card p-1 metric-card flex flex-col justify-between text-center">
      <div>
          <div class="text-3xl mb-2">✍️</div>
          <h3 class="text-xl font-bold" style="margin-bottom: 0em;">Rework Rate</h3>
          <p class="text-slate-300 mt-2">Code Churned Post-Commit</p>
          <p class="text-2xl font-bold text-white mt-3">&lt; 15%</p>
      </div>
    </div>
    <div class="glass-card p-1 metric-card flex flex-col justify-between text-center">
      <div>
          <div class="text-3xl mb-2">🧠</div>
          <h3 class="text-xl font-bold" style="margin-bottom: 0em;">Meeting Load</h3>
          <p class="text-slate-300 mt-2">Time for Deep Work</p>
          <p class="text-2xl font-bold text-white mt-3">Low & Stable</p>
      </div>
    </div>
    <div class="glass-card p-1 metric-card flex flex-col justify-between text-center">
      <div>
          <div class="text-3xl mb-2">🚀</div>
          <h3 class="text-xl font-bold" style="margin-bottom: 0em;">Time to First Commit</h3>
          <p class="text-slate-300 mt-2">New Hire Onboarding</p>
          <p class="text-2xl font-bold text-white mt-3">Hours, not Weeks</p>
      </div>
    </div>
    <div class="glass-card p-1 metric-card flex flex-col justify-between text-center">
      <div>
        <div class="text-3xl mb-2">💡</div>
        <h3 class="text-xl font-bold" style="margin-bottom: 0em;">Perceived Focus Time</h3>
        <p class="text-slate-300 mt-2">Uninterrupted Time</p>
        <p class="text-2xl font-bold text-white mt-3">High & Protected</p>
      </div>
    </div>
</div>

***These are suggested benchmarks only. Establish a baseline _then_ iterate.***

<!--
So here's a breakdown of these measurements, with some results to get started with. But it's important to establish a baseline, then iterate. Know where you are, so you know where you want to go, and how much room you may have for improvement.

Discuss these with your teams - don't just decide and spring this on them. That's not very Practitioner-Centric, is it?
-->

---

## Build a Healthy Measurement Culture

- No framework is a silver bullet
- Continuous improvement, not judgment
- Communicate the 'why'
- Involve your team
- Focus on trends, not absolutes
- Combine quantitative data with qualitative human insights

<!--

Building a healthy measurement culture is foundational to the success of any DevEx initiative. These are some good things to keep in mind: Remember, no framework is a silver bullet. The goal is continuous improvement, not judgment. Communicate the 'why', involve your team, focus on trends, and always combine quantitative data with qualitative human insights.

-->

---
layout: statement
---

## Conclusion

![alt text](/images/slides/bluesky-devex-culture-post.jpg){style="width: 75%; margin: auto;"}

<!--
Investing in Developer Experience is a direct investment in your organization's capacity to innovate.
-->

---

### DevEx is...

> "ruthlessly eliminating barriers (and blockers) that keep your practitioners from being successful"


<!--
I'll leave you with this, that DevEx is ruthlessly eliminating barriers (and blockers) that keep your practitioners from being successful.
-->

---
layout: two-cols
---

<div style="padding-top:200px; align-items: center; justify-content: center; margin: 0 auto; display: flex;">

  <h2>Thank you!</h2>

</div>

<div style="padding-top:100px; align-items: center; justify-content: center; margin: 0 auto; display: flex;">
  <h4>🔬 Slides available at: speaking.jmeiss.me</h4>
</div>

::right::

<p>
  <img src="/images/bluesky-logo.svg" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">
  @jerdog.dev
</p>
<p>
  <img src="/images/linkedin.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">/in/jeremymeiss
</p>
<p>
  <img src="/images/devto.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">@jerdog
</p>
<p>
  <img src="/images/mastodon.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">@jerdog@hachyderm.io
</p>
<p>
  <img src="/images/www.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">jmeiss.me
</p>

<!--

-->

---
layout: end
---