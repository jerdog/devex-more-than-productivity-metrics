---
# You can also start simply with 'default'
theme: the-unnamed
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Developer Experience is more than just Productivity metrics
info: |
  ## Developer Experience is more than just Productivity metrics
  With everything changing in tech at a frenetic pace, the emphasis on developer productivity has overshadowed the true essence of developer experience (DevEx). While frameworks like SPACE, getDX, and DORA metrics provide valuable insights, they often miss the mark on capturing developers' real, day-to-day experiences using tools and services, instead focusing strictly on the bottom line for the company. Meanwhile, developers and practitioners are job-hopping more than ever.
  This talk will explore the origins and evolution of "developer experience," dissect popular frameworks, and advocate for a more balanced approach that values the practitioner's perspective. At the end we will set a path towards integrating top-down metrics with bottom-up feedback, ensuring an approach to developer experience that fosters innovation and satisfaction.
conference: "Denver Dev Day 2025"
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

Back in 2023, NordicAPIs put together a list of top DevEx fails companies make.
-->

---
layout: image-right
image: /images/slides/new-feature-fail.gif
backgroundSize: contain
class: my-cool-content-on-the-left
transition: fade
---

# Bad DevEx
## Common examples

- Poorly documented features (or bugs){style="font-size: 1.2em;"}

<!--
- Poorly documented features (or bugs)

We’ve all had those moments where we encounter changes to an application that either introduce new features, or in some cases, new bugs, that aren’t adequately documented or even mentioned as existing - even if the bug won’t be fixed for awhile and there are workarounds.

-->

---
layout: image-right
image: /images/slides/api-fail.png
backgroundSize: contain
class: my-cool-content-on-the-left
transition: fade
---

# Bad DevEx
## Common examples

- Poorly documented features (or bugs){style="font-size: 1.2em;"}
- Missing OpenAPI spec (or even APIs)]{style="font-size: 1.2em;"}

<!--
- Missing OpenAPI spec (or even APIs)

We’ve all worked with those companies that say they have a developer platform, but are missing documentation for their APIs, or even worse, no APIs at all.
-->

---
layout: image-right
image: /images/slides/missing-docs-fail.png
backgroundSize: contain
class: my-cool-content-on-the-left
transition: fade
---

# Bad DevEx
## Common examples

- Poorly documented features (or bugs){style="font-size: 1.2em;"}
- Missing OpenAPI spec (or even APIs){style="font-size: 1.2em;"}
- PDF documentation... or access-gated{style="font-size: 1.2em;"}

<!--
- Downloading documentation… as a PDF, or access-gated

Having to hunt all over for documentation, and it’s not been written, OR, to find it, and realize you have to download it as a PDF, or that it’s gated by a password. For a public tool.
-->

---
layout: image-right
image: /images/slides/missing-examples-fail.png
backgroundSize: contain
class: my-cool-content-on-the-left
transition: fade
---

# Bad DevEx
## Common examples

- Poorly documented features (or bugs){style="font-size: 1.2em;"}
- Missing OpenAPI spec (or even APIs){style="font-size: 1.2em;"}
- PDF documentation... or access-gated{style="font-size: 1.2em;"}
- Missing examples… of _anything_{style="font-size: 1.2em;"}

<!--
- Missing examples… of _anything_

There’s the examples of different departments having different ideas of what has been built, without any examples of how to actually use it or put it together. Accessing a development tool shouldn’t be like putting together an IKEA piece of furniture.
-->

---
layout: image-right
image: /images/slides/ramiro-tweet.png
backgroundSize: contain
class: my-cool-content-on-the-left
---

# Bad DevEx
## Common examples

- Poorly documented features (or bugs){style="font-size: 1.2em;"}
- Missing OpenAPI spec (or even APIs){style="font-size: 1.2em;"}
- PDF documentation... or access-gated{style="font-size: 1.2em;"}
- Missing examples… of _anything_{style="font-size: 1.2em;"}
- “CI as Magic 8-Ball”{style="font-size: 1.2em;"}

<!--
- “CI as Magic 8-Ball”

And then there is Ramiro's story that I call "CI as Magic 8-Ball" where you're really just throwing code against the wall like pasta to see if it's done or not.

***Since I'm on the Frontend Stage, what about epicly bad websites that would put ebaumsworld to shame?***
-->

---
layout: image
image: /images/slides/yale-art-school.jpg
backgroundSize: contain
title: '--Yale bad website'
---

<!--

what about epicly bad websites that would put ebaumsworld to shame?
Here’s an epicly bad website (as of Oct-2024) from none other than the Yale School of Art. So much wrong on one page.

-->

---
layout: image
image: /images/slides/yale-art-school-spring2025.jpg
backgroundSize: contain
---

<!--
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
Heroku was long considered the gold standard for developer experience with a simple set of tools and a command-line interface that allowed developers to focus on building applications and delivering them to users. And that was it. Now of course, Heroku is still around (albeit not nearly as developer-centric as they formerly were, but that is changing), but it's not the only game in town. Anyone used Netlify, Vercel, etc.?
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

</span>

::right::

![alt text](/images/profile-pic.jpg){style="position: relative; margin: auto; width: 70%; border-radius: 15px 50px; "}

<!--
My name is Jeremy Meiss, and I am the Director of Developer Experience and Developer Relations at OneStream Software. I also help organize DevOpsDays Kansas City.
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

> "Developer productivity refers to the effectiveness and efficiency with which software developers produce high-quality code and complete projects.""

- [LinearB](https://linearb.io/blog/developer-productivity)

---
layout: image
image: "/images/slides/devex-integral-dev-lifecycle.jpg"
---

<!--
DevEx is such an integral part of the entire development lifecycle - not just if you're developing tools for use internally, choosing off-the-shelf tools to use, or creating products for other developers and companies to use. That means that the ease of use, reliability, how accessible and understandable documentation, how efficient the build processes are, the effectiveness of testing frameworks, and the smoothness of deployment procedures all have an impact on the overall dev experience.
-->

---

# Developer Experience != Developer Productivity

<span style="background-color: #ffffff; color: #000000; font-size: 1.5em; padding: 10px; border-radius: 5px;">
  <emojione-musical-notes />More than a metric....<emojione-musical-notes />
</span>

<!--
There is a subtle difference between Developer Experience and Developer Productivity, with the focus of DevProd being how effective and efficient developers are, while DevEx is about the experience developers have using tools and services - at its core it is about the practitioner. They aren't the same, but both do have some relation to each other - with Productivity being driven by the experience instead of the other way around. Dev Productivity is a metric, while DevEx is a feeling.
-->

---
layout: two-cols-header
class: text-center
layoutClass: gap-8
---

# Developer Experience != Developer Productivity

::left::

<v-click>

## Experience is the <span class="text-[#FF6E54] font-bold">Cause</span>

<div class="flex flex-col items-center justify-center text-center">
  <div class="glass-card p-8 w-full">
    <div class="text-6xl">🌳</div>
    <h4 class="text-2xl font-bold text-[#FFA600]">The Roots: DevEx</h4>
    <p class="text-slate-300">The daily journey: tools, processes, cognitive load, and flow state.</p>
  </div>
</div>

</v-click>

::right::

<v-click>

## Productivity is the <span class="text-[#955196] font-bold">Effect</span>

<div class="flex flex-col items-center justify-center text-center">
  <div class="glass-card p-8 w-full">
    <div class="text-6xl mb-4">🍎</div>
    <h4 class="text-2xl font-bold text-[#DD5182]">The Fruit: Productivity</h4>
    <p class="mt-2 text-slate-300">The outcome: high-quality, impactful software that drives business value.</p>
  </div>
</div>

</v-click>

<!--
Over the past few years, there's been a lot of talk about Developer Productivity. But it's important to understand that Developer Productivity and Developer Experience are not the same thing, even though a lot of companies selling you something would like you to think that they are, or that they're interchangeable as a term. They are not. [click]Sustainable productivity isn't forced; it's a natural outcome of a superior Developer Experience (DevEx). DevEx is the leading indicator of success, focusing on the developer's lived reality, [click]while productivity is the lagging indicator, measuring the ultimate business impact.
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

<font class="text-3xl font-bold gradient-text mb-4">From Lines of Code to Value Streams</font>

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
For decades, engineering leaders grappled with measuring productivity, often relying on flawed metrics like lines of code. This created easily gamed incentives and missed the bigger picture. Today, the focus has shifted to understanding the entire value stream, leading to sophisticated, research-backed frameworks that provide a holistic view of performance.
-->

---
class: text-center
---

## Evolution of "Developer Experience" Frameworks

![alt text](/images/slides/conversation-shift.png){style="width: 80%; height: auto; margin: auto;"}

<!--
Over the last few years we have seen the conversation shift from pipeline metrics to holistic, business-aligned frameworks, shifting the audience from engineers to the C-suite. All of this is fine in and of itself, but this shift has put the focus on the business and not the developer, and has created a lot of confusion.
-->

---

<h2 class="text-3xl font-bold text-center gradient-text mb-4">The Evolutionary Path of Measurement</h2>

<div class="relative pl-8">

<v-clicks>

  <div class="timeline-item relative">
    <div class="timeline-dot"></div>
    <h4 class="text-xl font-bold text-white-800">2014-2018: DORA Metrics Emerge</h4>
    <p style="font-size: 0.8em;">DORA established the gold standard for measuring DevOps pipeline health through rigorous research, priving speed & reliability are not trade-offs...</p>
  </div>
  <div class="timeline-item relative">
    <div class="timeline-dot"></div>
    <h4 class="text-xl font-bold text-white-800">2021: The SPACE Framework Broadens the Scope</h4>
    <p style="font-size: 0.8em;">SPACE framework introduced a holistic, human-centric model, arguing that productivity is multi-dimensional, emphasized the importance of developer satisfaction, well-being, and collaboration as critical components of performance...</p>
  </div>
  <div class="timeline-item relative">
    <div class="timeline-dot"></div>
    <h4 class="text-xl font-bold text-white-800">2024: GetDX Core 4 Unifies for Business Impact</h4>
    <p style="font-size: 0.8em;">GetDX Core 4 was created to be a practical, prescriptive framework attempting to unify DORA and SPACE, creating a link between engineering efforts and tangible business outcomes like ROI and revenue.</p>
  </div>

</v-clicks>

</div>

<!--
[click]2014-2018: DORA Metrics Emerge
DORA established the gold standard for measuring DevOps pipeline health. It proved that speed and stability are not trade-offs, providing engineering teams with a quantitative, evidence-backed language for software delivery performance.

[click]2021: The SPACE Framework Broadens the Scope
Recognizing DORA's limitations, the SPACE framework introduced a holistic, human-centric model. It argued that productivity is multi-dimensional, codifying the importance of developer satisfaction, well-being, and collaboration as critical components of performance.

[click]2024: GetDX Core 4 Unifies for Business Impact
To resolve market confusion, GetDX Core 4 was created to be a practical, prescriptive framework. It unifies concepts from DORA and SPACE and, most importantly, creates a direct link between engineering efforts and tangible business outcomes like ROI and revenue.

I'm going to take a look at each of these frameworks in a bit more detail, and how they relate to each other, and then we'll look at how to create a more holistic view of developer experience that works with these frameworks.
-->

---

<div class="text-center mb-1">
    <h3 class="text-3xl font-bold gradient-text">Deep Dive: DORA's Four Keys</h3>
</div>
<div class="max-w-4x1 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0 0rem;">Deployment Frequency</h4>
        <p class="text-slate-600 text-sm mb-4 flex-grow" style="font-size: 0.8rem;">How often code is deployed to production. High frequency indicates agile processes and small batch sizes.</p>
        <div class="chart-container h-48">
          <img src="/images/slides/deploy-freq.png">
        </div>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0 0rem;">Lead Time for Changes</h4>
        <p class="text-slate-600 text-sm mb-4 flex-grow" style="font-size: 0.8rem;">The time it takes for a commit to get into production. Short lead times signify efficient CI/CD pipelines.</p>
        <div class="chart-container h-48">
          <img src="/images/slides/lead-time-for-changes.png">
        </div>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0 0rem;">Change Failure Rate</h4>
        <p class="text-slate-600 text-sm mb-4 flex-grow" style="font-size: 0.8rem;">The percentage of deployments causing a failure in production. A low rate indicates high quality and robust testing.</p>
        <div class="chart-container h-48">
          <img src="/images/slides/change-failure-rate.png">
        </div>
    </div>
    <div class="bg-white p-2 rounded-lg shadow-lg text-center flex flex-col">
        <h4 class="text-yellow-600 text-xl font-bold mb-2" style="margin: 1rem 0 0 0rem;">Time to Restore Service</h4>
        <p class="text-slate-600 text-sm mb-4 flex-grow" style="font-size: 0.8rem;">How long it takes to recover from a failure in production. A low time indicates high system resilience.</p>
        <div class="chart-container h-48">
          <img src="/images/slides/time-to-restore-service.png">
        </div>
    </div>
</div>

<!--
DORA measures the health of the software delivery pipeline through four key metrics (Deployment Frequency, Lead Time for Change, Change Failure Rate, and Time to Restore Service), with the goal of balancing speed with stability. Elite performers excel at both, deploying frequently and reliably. It's gone through a number of iterations, with more and more insights being added to the framework.
-->

---
layout: two-cols-header
class: text-center
layoutClass: gap-4
---

<div class="text-center mb-1">
    <h3 class="text-3xl font-bold gradient-text">Deep Dive: The SPACE Framework</h3>
</div>

::left::

### The 5 Dimensions of Productivity

<ul class="space-y-3 text-left">
  <li class="flex items-start" style="line-height: 1em;"><span class="font-bold text-[#005f73] mr-2">S</span> <div style="font-size: 0.8em;"><b>Satisfaction & Well-being:</b> How happy and healthy developers are.</div></li>
  <li class="flex items-start" style="line-height: 1em;"><span class="font-bold text-[#0a9396] mr-2">P</span> <div style="font-size: 0.8em;"><b>Performance:</b> The outcome and quality of the work produced.</div></li>
  <li class="flex items-start" style="line-height: 1em;"><span class="font-bold text-[#94d2bd] mr-2">A</span> <div style="font-size: 0.8em;"><b>Activity:</b> The count of development outputs (used with caution).</div></li>
  <li class="flex items-start" style="line-height: 1em;"><span class="font-bold text-[#ee9b00] mr-2">C</span> <div style="font-size: 0.8em;"><b>Communication & Collaboration:</b> How well teams work together.</div></li>
  <li class="flex items-start" style="line-height: 1em;"><span class="font-bold text-[#ca6702] mr-2">E</span> <div style="font-size: 0.8em;"><b>Efficiency & Flow:</b> The ability to complete work without friction or delays.</div></li>
</ul>

::right::

![alt text](/images/slides/space-5-dimensions.png){style="width: 100%; height: auto; margin: auto; background-color: #ffffff;"}


<!--
SPACE argues that productivity is multi-dimensional and human-centric. It provides a menu of five dimensions (Satisfaction & Well-being, Performance, Activity, Communication & Collaboration, and Efficiency & Flow) to create a holistic view of engineering health beyond just delivery metrics. The radar chart shows two hypothetical teams. The "Balanced Team" shows healthy scores across all dimensions, while the "Struggling Team" excels in Activity but suffers from low Satisfaction and poor Collaboration, indicating a high risk of burnout.
-->

---
layout: two-cols-header
class: text-center
layoutClass: gap-4
---

<div class="text-center mb-1">
    <h3 class="text-3xl font-bold gradient-text">Deep Dive: GetDX Core 4k</h3>
</div>

::left::

![alt text](/images/slides/getdx-four-pillars.png)

::right::

### The Four Pillars of Impact

<div class="p-8">
    <ul class="space-y-3 mb-6 text-left">
        <li class="flex items-start" style="line-height: 1em;"><span class="text-2xl mr-3">🚀</span> <div style="font-size: 0.8em;"><b>Speed:</b> Measures development throughput and velocity.</div></li>
        <li class="flex items-start" style="line-height: 1em;"><span class="text-2xl mr-3">🎯</span> <div style="font-size: 0.8em;"><b>Effectiveness:</b> Assesses developer experience and work outcomes.</div></li>
        <li class="flex items-start" style="line-height: 1em;"><span class="text-2xl mr-3">✅</span> <div style="font-size: 0.8em;"><b>Quality:</b> Measures software stability and reliability.</div></li>
        <li class="flex items-start" style="line-height: 1em;"><span class="text-2xl mr-3">💰</span> <div style="font-size: 0.8em;"><b>Impact:</b> Directly connects engineering to business value and ROI.</div></li>
    </ul>
</div>

<!--
GetDX Core 4 is a prescriptive framework designed to unify DORA and SPACE concepts, creating a shared language from the C-suite to engineering teams by linking work directly to business impact.

A key metric in the 'Impact' pillar is the allocation of engineering effort. The chart visualizes how three different companies balance their time between building new, value-creating capabilities versus essential maintenance, bug fixes, and paying down technical debt.
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
So comparing the different frameworks out there, they each have their own strengths and weaknesses, but largely focused on the business and its bottom line, and not the developer.
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
A great Developer Experience is not accidental. It's built with the developer in mind, and designed to minimize friction, reduce mental overhead, and enable deep, focused work. We'll dive into each of these a bit more with some actionable steps to implement them.
-->

---

### Fast, High-Quality Feedback Loops

<v-clicks>

1. Automated Visual Regression Testing in CI/CD
2. "Shifting Left" with Static Code Analysis and Linting in the IDE & Pre-Commit Hooks
3. Production "Canary" Deployments & Automated Monitoring with Meaningful Metrics
4. Daily "Mob Programming" or Pair Programming Sessions for Critical/Complex Tasks
5. Dedicated "Bug Bash" Weeks or Sprints with Stakeholder Involvement

</v-clicks>

<!--
Okay, here are 5 actionable strategies a software development team can implement to improve fast, high-quality feedback loops, focusing on practical changes across tools, processes, and culture.
[click]Integrate visual regression testing into your CI/CD pipeline. Instead of relying solely on functional tests, automatically capture screenshots of key UI components/pages after each commit and compare them to baseline images. Fail the build if significant visual differences are detected. Tools like BackstopJS, Percy, or Applitools can be used. This provides immediate feedback on UI changes that might be missed by traditional testing, preventing visual bugs from reaching production. *Specific Action:* Implement a BackstopJS test suite for 5 critical UI components in your React application within the next sprint.
[click]Integrate static analysis and linting tools (e.g., ESLint, SonarQube, Checkstyle) directly into developers' IDEs and as pre-commit hooks. This provides immediate feedback on code style violations, potential bugs, and security vulnerabilities before code is even committed to the repository. This prevents bad code from polluting the codebase and reduces the workload on code reviewers. *Specific Action:* Configure ESLint with Airbnb's style guide in all developers' IDEs and enable Husky pre-commit hooks to run ESLint checks before each commit to enforce code quality.
[click]Implement a robust monitoring system and adopt canary deployments (or other progressive delivery methods like feature flags). Deploy new code to a small subset of users and closely monitor key metrics like error rates, latency, and resource utilization. Automate alerts that trigger rollbacks if these metrics deviate significantly from established baselines. This allows for rapid detection and mitigation of production issues with minimal user impact. *Specific Action:* Implement Prometheus and Grafana to monitor the API service's response time and error rate, and configure an automated alert to trigger a rollback if the error rate increases by more than 5% during a canary deployment to 10% of users.
[click]Dedicate specific time slots (e.g., 1-2 hours daily) for mob programming or pair programming sessions, particularly when tackling complex features, refactoring, or debugging challenging issues. This provides immediate feedback from multiple developers, leading to better code quality, faster problem-solving, and knowledge sharing. *Specific Action:* Implement a daily "Mob Programming" session for 1 hour every afternoon for the team focusing on the highest priority and most challenging current bug.
[click]Schedule regular "bug bash" events (e.g., once per quarter) where the entire team, including developers, QA, product owners, and even stakeholders like customer support representatives, collaboratively test the software and report bugs. This provides diverse perspectives and uncovers issues that might be missed by automated testing or individual developers. Incentivize finding critical bugs. *Specific Action:* Plan a week-long "Bug Bash" event next quarter, inviting representatives from the product and customer support teams, and offer a reward for the developer who finds the most severe or critical bug.
-->

---

### Low Cognitive Load

<v-clicks>

1. Standardize Code Style & Linting Rules
2. Implement Version Control with Meaningful Commit Messages
3. Prioritize and Refactor Technical Debt Incrementally
4. Centralize Documentation and Knowledge Sharing
5. Implement Automated Testing at All Levels

</v-clicks>

<!--
Here are 5 actionable and specific strategies a software development team can implement to improve 'Low Cognitive Load', focusing on practical changes:
[click]Implement and enforce consistent code style (e.g., using Prettier, ESLint, or equivalent for the team's languages) across all projects. **Benefit:** Reduces the mental effort required to understand unfamiliar code within the codebase. Developers can immediately focus on logic and functionality rather than deciphering formatting nuances. Define a set of configuration, and use CI/CD to enforce code quality and style.
[click]Mandate a commit message format (e.g., using Conventional Commits) and encourage developers to write clear, concise descriptions of changes in each commit. Integrate commit message validation into the CI/CD pipeline. **Benefit:** Makes it much easier to understand the history of the codebase. Developers can quickly grasp the purpose and context of past changes, reducing the need to dig into code diffs to understand the "why" behind specific implementations.
[click]Dedicate a small but consistent portion of each sprint (e.g., 10-20%) to addressing identified technical debt. Choose one or two high-impact areas to focus on during each iteration. **Benefit:** Slowly but surely reduces the complexity and "cognitive burden" imposed by poorly designed or implemented code. Cleaning up technical debt improves the overall clarity and maintainability of the codebase, making it easier for developers to understand and work with.
[click]Establish a single source of truth for all project documentation (e.g., a well-organized wiki, a documentation platform like Read the Docs, or even well-structured READMEs in the repository). Encourage developers to contribute to documentation as part of their workflow and improve upon outdated sections. **Benefit:** Minimizes the time and effort required to find information about the project. Having a centralized and up-to-date knowledge base reduces the cognitive load associated with "information seeking" and allows developers to quickly find the answers they need.
[click]Develop a comprehensive suite of automated tests (unit, integration, end-to-end) that provide rapid feedback on code changes. Integrate testing into the CI/CD pipeline to ensure tests are run automatically on every commit. **Benefit:** Frees developers from the mental burden of manually verifying the correctness of their code. Automated tests provide confidence that changes haven't introduced regressions and allow developers to focus on building new features or improving existing ones.
-->

---

### Enabled "Flow State"

<v-clicks>

1. Implement a High-Signal Notification System & Prioritization
2. Adopt a Streamlined Code Review Process with Contextual Tooling
3. Standardize Development Environments and Automate Setup
4. Implement Short, Focused "Pomodoro" or Timeboxing Sessions
5. Cultivate a Culture of Psychological Safety and Open Communication

</v-clicks>

<!--
here are 5 actionable and specific strategies a software development team can implement to improve 'Enabled Flow State', focusing on practical changes to tools, processes, and culture.
[click]**Action:** Replace generic "email everything" approaches with a notification system (e.g., Slackbot integration, dedicated in-IDE notification pane) that intelligently filters and prioritizes alerts based on urgency and context (e.g., only notify for breaking CI builds directly impacting the feature being worked on, defer less critical updates). **Rationale:** Constant bombardment of irrelevant notifications severely disrupts flow. A well-designed system helps maintain focus by only surfacing critical information when needed and deferring non-urgent items. **Measurement:** Track the number of interruptions per developer per day before and after implementation. Aim for a significant reduction. **Example Tool:** PagerDuty can be customized for internal notifications. Your project management software may have granular notification options.
[click]**Action:** Implement a code review process that prioritizes speed and constructive feedback. Integrate code review tools directly into the IDE or code editor (e.g., GitHub/GitLab extensions). Enforce code review guidelines focusing on clarity, maintainability, and architectural consistency. Encourage reviewers to provide actionable suggestions, not just nitpicks. **Rationale:** Delays and unclear feedback in code review are major flow-killers. A streamlined process minimizes wait times and ensures the feedback is helpful and actionable. **Measurement:** Track the time between code submission and approval. Measure the number of iterations required for code review. **Example Tools:** GitHub Pull Requests, GitLab Merge Requests, Code Climate (for automated code quality checks integrated into the review process).
[click]**Action:** Dockerize development environments and provide pre-configured, containerized setups for each project. Automate the environment setup process with tools like Docker Compose or Kubernetes (for larger projects). Ensure that these environments closely mirror production. **Rationale:** Wasted time setting up and debugging environments is a significant source of frustration and flow disruption. Standardized, automated setups ensure everyone is working with the same tools and versions, reducing compatibility issues and setup time. **Measurement:** Track the time it takes for a new developer to get a project up and running. Survey developers on the ease of setting up and maintaining their development environment. **Example Tools:** Docker, Docker Compose, Kubernetes, Vagrant.
[click]**Action:** Encourage the use of timeboxing techniques like the Pomodoro Technique (25 minutes of focused work, followed by a 5-minute break). Implement visual timers or tools that help track and manage these sessions. **Rationale:** Breaking down work into manageable chunks, punctuated by short breaks, can help maintain focus and prevent burnout. The structured approach can also help overcome procrastination. **Measurement:** Track the number of Pomodoros completed per day. Conduct surveys to assess developers' perception of productivity and focus while using the technique. **Example Tools:** Tomato Timer (online), Focus To-Do (app), Forest (app).
[click]**Action:** Encourage developers to ask questions, admit mistakes, and experiment without fear of blame or punishment. Implement regular retrospectives to identify and address roadblocks to flow. Create a safe space to voice concerns regarding workflow. Actively work to resolve issues that developers bring up. **Rationale:** Fear of failure or negative consequences inhibits risk-taking, experimentation, and problem-solving. A psychologically safe environment fosters a culture of continuous improvement and enables developers to feel comfortable seeking help when needed. **Measurement:** Track the number of ideas and suggestions generated in retrospectives. Monitor the level of engagement in team discussions. Conduct anonymous surveys to assess the overall level of psychological safety. **Example Techniques:** Blameless postmortems, regular team retrospectives (using Agile methodologies), open-door policy for communication with managers.
-->

---

### Avoid the Gamification Trap
#### Use Metrics for Improvement, Not Judgment

> "when a measure becomes a target, it ceases to be a good measure."

- Goodhart's Law

<!--
The introduction of any measurement system carries the inherent risk of misuse. It is imperative that DevEx and productivity metrics are used as tools for systemic improvement, not as instruments for judging or ranking individual developers. When a metric becomes a target for performance evaluation, it ceases to be a good measure—a phenomenon known as Goodhart's Law. If "number of commits" is incentivized, developers will simply make many small, meaningless commits to inflate their score, degrading code history without adding value.
-->

---

## So what do we measure?

- Cycle Time
- PR Review Time
- Rework Rate
- Meeting Load
- Time to First Commit
- Perceived Focus Time

<!--
Move from abstract to actionable. Use a balanced set of metrics that reflect the developer's daily reality and provide clear signals for improvement. Use them as conversation starters, not for judgment. These 6 metrics are probably a great starting point for a team to measure their developer experience, and can be used in conjunction with the frameworks we've discussed. But I want to stress that these are not a one-size-fits-all set of metrics, and should be tailored to the specific needs and context of your team. They are a starting point, not an end point.
-->

---

### Cycle Time ⏱️

<v-clicks>

- Implement and enforce "Small Batch" Size Approach
- Optimize Code Review Process with Developer-Focused Tooling and Practices
- Invest in Test Automation and CI/CD Pipelines
- Improve Development Environment Setup and Standardization
- Proactively Identify and Remove Blocking Issues and Dependencies

</v-clicks>

<!--
Cycle time is the time it takes to go from idea to production. It is a key measure of how quickly a team can deliver value. Here are 5 actionable strategies a software development team can implement to improve cycle time, focusing on practical changes across tools, processes, and culture.
[click]Break down large features and tasks into the smallest possible independent units of work that deliver measurable value. Aim for PRs/MRs that can be reviewed and merged within a day or two. Define clear acceptance criteria for each small batch.
[click]Adopt a code review tool that integrates seamlessly with your IDE and version control system (e.g., GitHub, GitLab, Bitbucket). Implement automated code style checks and linting to catch common errors before review. Define clear code review guidelines and expectations for both reviewers and authors (e.g., focus on logic, design, and security). Encourage reviewers to provide constructive and actionable feedback. Implement review queue prioritization based on factors like change size and criticality. Track Code Review Time as a separate metric to identify bottlenecks.
[click]Automate unit, integration, and end-to-end tests to provide rapid feedback on code changes. Implement a CI/CD pipeline that automatically builds, tests, and deploys code changes to staging environments (and, ideally, production) on every commit. Configure the CI/CD pipeline to provide clear and concise feedback on build and test status. Monitor CI/CD pipeline performance (e.g., build times, test execution times) and identify areas for optimization. Shift-Left testing to catch issues earlier in the development lifecycle.
[click]Provide developers with automated, pre-configured development environments (e.g., using Docker, Vagrant, or cloud-based IDEs). Create standardized project templates and code scaffolding tools to reduce boilerplate code. Centralize and document common development tasks and workflows. Offer training and support on using the development environment and tools. Ensure environments are mirrored closely to production.
[click]Implement daily stand-up meetings focused on identifying and unblocking impediments - not just status updates. Use project management tools to track dependencies and potential roadblocks. Encourage developers to proactively raise concerns about potential delays or dependencies. Establish clear escalation paths for resolving blocking issues. Investigate long lead times for external dependencies (e.g., third-party APIs, data access) and identify potential solutions. Prioritize breaking down inter-team dependencies.
-->

---

### PR Review Time 🔄

<v-clicks>

- Enforce "Small PR" Guidelines and Automation
- Implement a Reviewer Rotation and/or "Reviewer Roulette" System
- Mandate Clear and Concise PR Descriptions and Context
- Establish Service Level Agreements (SLAs) for PR Reviews and Make Them Visible
- Invest in Automated Code Analysis and CI/CD Integration

</v-clicks>

<!--
PR review time plays a part in cycle time, and is a key measurement of how quickly a team can deliver value, fixes, etc. Here are 5 actionable strategies a software development team can implement to improve PR review time, focusing on practical changes across tools, processes, and culture.
[click]Smaller PRs are *significantly* easier and faster to review. They reduce cognitive load for the reviewer, making it easier to understand the changes, identify potential issues, and provide meaningful feedback. Larger PRs can be overwhelming, leading to procrastination, missed errors, and ultimately, longer review times. Feature toggles and splitting features into smaller, incremental changes is a great way to keep PR sizes reasonable.
[click]This prevents a few individuals from being constantly overloaded with reviews, leading to burnout and delays. It also broadens the team's knowledge and understanding of different parts of the codebase, reducing "bus factor." Automating the assignment process based on ownership (e.g., by using CODEOWNERS files in GitHub or similar functionality) ensures that the right people are involved without manual intervention. It also encourages cross-training within the team.
[click]A well-written PR description provides reviewers with the necessary context to quickly understand the changes and their purpose. It minimizes the need for back-and-forth communication to clarify ambiguities. It can also point to edge-cases considered, or areas where there *are* known limitations. Without proper context, reviewers spend extra time deciphering the code and its intent, significantly increasing review time.
[click]Setting clear expectations for review turnaround time creates a sense of urgency and accountability. When reviewers know they are expected to prioritize reviews, they are more likely to allocate time for them. Publicly tracking and reporting on SLA compliance encourages reviewers to meet expectations and identifies areas where the review process needs improvement. It also shows the team that management takes PR review time seriously.
[click]Automated code analysis can catch many common coding errors, style violations, and potential security vulnerabilities *before* a human reviewer even looks at the code. This frees up reviewers to focus on more complex issues and the overall design of the solution. Faster feedback loops provided by automated testing also help developers iterate more quickly and reduce the likelihood of regressions. By shifting the focus to reviewing more complex issues, instead of the basics that should be covered by tools, review time is greatly reduced.
-->

---

### Rework Rate ✍️

<v-clicks>

- Implement Comprehensive Code Reviews with a Focused Checklist
- Refine User Stories with Clearer Acceptance Criteria and Examples
- Invest in Better Tooling and Automation for Testing
- Implement a Robust Definition of Done (DoD) and Enforce It
- Improve Feedback Loops and Communication

</v-clicks>

<!--
Rework rate is the percentage of work that needs to be redone due to errors, misunderstandings, or changes in requirements - after things have been committed. It builds on PR review time and again how efficiently a team can deliver value without unnecessary rework. Here are 5 actionable strategies a software development team can implement to improve rework rate, focusing on practical changes across tools, processes, and culture.
[click]Code reviews are a primary defense against introducing bugs and architectural flaws that lead to rework. A focused checklist ensures reviewers are consistently looking for the most common and impactful issues. By catching errors early, you prevent them from progressing further down the development pipeline, where fixing them becomes exponentially more expensive and time-consuming. Consistent code reviews also promote knowledge sharing and enforce coding standards across the team.
[click]Ambiguous or incomplete requirements are a leading cause of rework. Developers may misinterpret the intended functionality, leading to implementations that don't meet stakeholder expectations. Clear acceptance criteria act as a contract, ensuring everyone is on the same page about what "done" actually means. Examples help to solidify understanding and prevent misinterpretations. Early collaboration and refinement allows for questions and concerns to be raised before development time is spent going in the wrong direction.
[click]Automated testing catches issues much earlier in the development lifecycle than manual testing. Well-designed unit tests verify that individual components work as expected. Integration tests ensure that different modules play well together. Static analysis tools identify potential bugs and security vulnerabilities before they are even committed to the repository. This reduces the likelihood of bugs making their way into production and needing to be fixed later, leading to rework. Good tooling reduces manual effort and creates confidence.
[click]A clear and enforced Definition of Done ensures that code is not considered complete until it meets a certain quality standard. This prevents developers from prematurely merging code with unresolved issues, which can lead to rework later on. It enforces discipline and encourages a culture of quality.
[click]Rework often arises from misunderstandings or a lack of awareness of problems. By fostering open communication and providing regular opportunities for feedback, you can identify and address issues early on before they escalate. Monitoring systems provide real-time feedback on the performance and stability of your application, allowing you to quickly respond to and fix problems before they cause significant disruptions. Empowering developers to seek feedback reduces the chances of making assumptions that will need to be changed later.
-->

---

### Meeting Load 🧠

<v-clicks>

- Implement a "Meeting-Free Day" (or Half-Day) Policy
- Audit Meeting Invitations and Participation
- Standardize Meeting Agendas and Timeboxing
- Promote Asynchronous Communication Tools & Practices
- Implement a "Meeting Budget" or "Meeting Credit" System

</v-clicks>

<!--
Who spends more time on meetings than actually developing? Meeting load is the amount of time developers spend in meetings, which can significantly impact their productivity and focus. Here are 5 actionable strategies a software development team can implement to improve meeting load, focusing on practical changes across tools, processes, and culture.
[click]This provides developers with uninterrupted blocks of time for focused work, crucial for deep thinking, complex problem-solving, and code implementation. It directly addresses the problem of fragmented workdays caused by constant meetings, allowing developers to enter a flow state and make significant progress. It also signals a cultural shift demonstrating a value for uninterrupted work time.
[click]Many developers are invited to meetings out of habit or perceived politeness. Auditing helps identify and eliminate unnecessary meeting attendance, freeing up their time for productive work. It also promotes a culture of mindful meeting participation, encouraging organizers to carefully consider who *needs* to be present.
[click]A clear agenda ensures that meetings are focused and efficient. Timeboxing prevents meetings from dragging on unnecessarily, maximizing the use of attendees' time. Advance notice allows attendees to prepare and contribute more effectively.
[click]Asynchronous communication allows developers to engage with information and contribute at their own pace, without the need for real-time coordination. This reduces the need for meetings, increases flexibility, and allows developers to focus on their work when they are most productive. It also creates a searchable record of discussions for future reference.
[click]This creates a direct financial incentive for teams and developers to reduce meeting load. It forces teams to carefully consider the value of each meeting and to find alternatives whenever possible. The ability to "cash out" unused time provides a further reward for efficiency and focus on getting work done.
-->

---

### Time to First Commit 🚀

<v-clicks>

- Provide Ready-to-Run Starter Projects/Templates
- Automate Environment Setup and Onboarding
- Simplify Code Contribution Process with Clear Guidelines and Tooling
- Offer Short, Focused "First Contribution" Tasks (aka "Good First Issues")
- Provide Active Mentorship and Support (paired with tooling)

</v-clicks>

<!--
New Hire Onboarding is probably the most impactful of these, especially in smaller teams, becaause it sets the tone for the new developer's experience. Time to first commit is the time it takes for a new developer to make their first meaningful contribution to the codebase. Here are 5 actionable strategies a software development team can implement to improve time to first commit, focusing on practical changes across tools, processes, and culture.
[click]New developers often spend significant time setting up their development environment, resolving dependency conflicts, and configuring initial project structure. Starter projects drastically reduce this overhead by providing a functional base to build upon, eliminating the need to start from scratch. This bypasses common "boilerplate" hurdles, allowing them to focus on actual coding and functionality much sooner.
[click]Inconsistencies in development environments are a major source of delay and frustration. A fully automated environment setup ensures every developer has an identical and working environment, eliminating the "it works on my machine" problem. Automating onboarding streamlines the process of getting access to necessary tools and repositories, further reducing setup time and removing manual dependencies.
[click]Confusion about how to contribute code, including branching, committing, and reviewing, can add significant delays. Clear, documented guidelines and automated tooling eliminate ambiguity, reduce the chance of errors leading to rework, and allow developers to focus on the code itself. Pre-commit hooks prevent common mistakes from even reaching the repository, speeding up the review process.
[click]A large, complex codebase can be intimidating. Providing bite-sized tasks gives new developers a low-pressure entry point. Successfully completing a small task provides a sense of accomplishment, familiarity with the workflow, and confidence to tackle larger projects. It's like a "learning curve" bypass, allowing them to contribute value immediately.
[click]Even with the best tooling and documentation, new developers will inevitably encounter roadblocks. Having a designated mentor and readily available support ensures they don't get stuck and can quickly resolve issues. This personalized assistance builds confidence, accelerates learning, and fosters a welcoming environment, encouraging faster and more effective contributions. The combination of support *and* proper tooling (like good IDE intellisense) means they aren't spending all their time simply debugging configuration issues and can actually start learning the codebase.
-->

---

### Perceived Focus Time 💡

<v-clicks>

- Optimize Build Times with Incremental Builds and Caching
- Implement a "Quiet Period" During Deployments/Integrations
- Prioritize and Reduce Notification Overload
- Automate Repetitive Tasks with Scripting or Tools
- Improve Error Messaging and Debugging Tools

</v-clicks>

<!--
Perceived Focus Time is the amount of uninterrupted time developers feel they have to work on their tasks without distractions. It is very subjective, but it is critical for productivity and job satisfaction. Here are 5 actionable strategies a software development team can implement to improve perceived focus time, focusing on practical changes across tools, processes, and culture.
[click]Long build times are a major focus killer. Developers must switch context, potentially losing their train of thought, while waiting. Reducing build times, especially for small changes, allows for rapid iteration and keeps developers "in the zone" without constant interruptions from build processes. Incremental builds and caching reduce the overall time and resources needed for compilation, leading to a significantly better Perceived Focus Time.
[click]Disruptions during these crucial times can be exceptionally frustrating. Imagine a developer deeply immersed in debugging an integration issue and then being pulled into an unrelated meeting. By intentionally minimizing distractions during complex operations, we provide a more dedicated block of time for developers to focus on the critical task at hand. A predictable, quiet environment directly enhances Perceived Focus Time.
[click]Constant notifications lead to frequent context switching, even if each switch is brief. A stream of interruptions breaks the flow and requires developers to refocus each time, which is mentally taxing and reduces the perception of having enough uninterrupted time. By reducing the volume and relevance of notifications, we allow developers to maintain focus for longer periods.
[click]Repetitive tasks are not only tedious but also require mental energy without contributing significantly to the core development goals. Automating these tasks frees up developers' time and cognitive resources, allowing them to concentrate on more challenging and engaging work. The elimination of repetitive steps leads to the feeling of more control over time, leading to better perceived focus.
[click]Debugging can be a major time sink and source of frustration. When error messages are cryptic or debugging tools are inadequate, developers spend a disproportionate amount of time deciphering issues instead of writing code. Clear error messages and effective debugging tools reduce the time spent troubleshooting, leading to fewer context switches and greater perceived focus. Also, a sense of competence when solving problems also adds to the general feeling of focus and productivity. Remember to measure the impact of these strategies after implementation. Use surveys, feedback sessions, and telemetry data to track changes in Perceived Focus Time and make further adjustments as needed.
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

<!--
So here's a breakdown of these measurements, with some results to get started with. But it's important to establish a baseline, then iterate. Know where you are, so you know where you want to go, and how much room you may have for improvement. Discuss these with your teams - don't just decide and spring this on them. That's not very Practitioner-Centric, is it?
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

Remember, no framework is a silver bullet. The goal is continuous improvement, not judgment. Communicate the 'why', involve your team, focus on trends, and always combine quantitative data with qualitative human insights.

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

::right::

<p><img src="/images/bluesky-logo.svg" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">@jerdog.dev</p>
<p><img src="/images/linkedin.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">/in/jeremymeiss</p>
<p><img src="/images/devto.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">@jerdog</p>
<p><img src="/images/mastodon.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">@jerdog@hachyderm.io</p>
<p><img src="/images/www.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px">jmeiss.me</p>
<p style="text-decoration: line-through;"><img src="/images/twitter.png" style="vertical-align: middle; display: inline; margin: 5px; max-height:50px; padding-right:10px;">@IAmJerdog</p>


<!--

-->

---
layout: end
---