---
theme: the-unnamed
title: Developer Experience is more than just Productivity metrics
info: |
  ## Developer Experience is more than just Productivity metrics
  With everything changing in tech at a frenetic pace, the emphasis on developer productivity has overshadowed the true essence of developer experience (DevEx). While frameworks like SPACE, getDX, and DORA metrics provide valuable insights, they often miss the mark on capturing developers' real, day-to-day experiences using tools and services, instead focusing strictly on the bottom line for the company. Meanwhile, developers and practitioners are job-hopping more than ever.
  This talk will explore the origins and evolution of "developer experience," dissect popular frameworks, and advocate for a more balanced approach that values the practitioner's perspective. At the end we will set a path towards integrating top-down metrics with bottom-up feedback, ensuring an approach to developer experience that fosters innovation and satisfaction.
conference: "CDCon 2026 // #OSSummit NA 2026"
socialimg: /images/bluesky-jerdog-white.png
drawings:
  persist: false
defaults:
  layout: center
transition: slide-left
mdc: true
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code
class:
  - text-center
  - my-cool-content-on-the-left
layout: image-right
image: /images/slides/devex-iceberg.png
backgroundSize: contain
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
We've all had that experience using a tool or service that was a disaster. It could be the worst deployment process you've ever seen, or the most painful codebase you've ever had to work with, or documentation that's so confusing it makes your head spin. Or maybe a combination of them… Who here knows what I'm talking about?
-->

---
layout: two-cols
class: text-center
title: "About Me"
transition: slide-down
---

<span style="position: relative; top: 20%;">

  ## Jeremy Meiss

  <p style="font-weight: bold;">DevRel & DevEx Professional</p>
  <p class="italic">Coming soon....</p>
  <p style="font-weight: bold;">DevOpsDays KC Organizer</p>
  <p style="font-weight: bold;">CommunityDays KC Organizer</p>
  <p style="font-weight: bold;">CDF Ambassador</p>

</span>

::right::

![alt text](/images/profile-pic.jpg){style="position: relative; margin: auto; width: 70%; border-radius: 15px 50px; "}

<!--
I'm Jeremy Meiss - DevRel & DevEx professional, DevOpsDays KC and CommunityDays KC organizer, and CDF Ambassador.
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
DevEx and DevProd aren't the same. Productivity is driven by experience — DevEx is the leading indicator, productivity is the lagging one. You can't sustainably force productivity without first investing in the experience.
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
DevEx isn't a new concept — it was formally defined in a 2012 IEEE paper. Capturing how developers think and feel about their work has measurable positive impacts on team performance. Yet most modern frameworks have drifted far from this practitioner-centric origin.
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
For decades, engineering leaders grappled with measuring productivity — often relying on flawed metrics like lines of code. Today three prominent frameworks try to fill that gap: DORA, SPACE, and GetDX Core 4. But how well do they serve the actual developer?
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
Notice who's missing: the developer. DORA optimizes pipelines. SPACE fosters management conversations. Core 4 speaks C-suite. Each framework has real value, but none was built primarily to improve the daily practitioner experience. That's the gap.
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
Building great DevEx means designing with the developer in mind: fast feedback loops, low cognitive load, and protected flow state. These three pillars are what our metrics should actually move.
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
These 6 metrics reflect the developer's daily reality. Use them as conversation starters, not scorecards. Cycle Time (commit to prod), PR Review (feedback speed), Rework Rate (signals unclear requirements), Meeting Load (time for deep work?), Time to First Commit (onboarding friction), Perceived Focus Time (uninterrupted time).
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
Here are starting benchmarks. Establish your baseline first, then decide where you want to go. Discuss these with your teams — don't spring them as mandates. That's not very practitioner-centric, is it?
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
No framework is a silver bullet. Communicate the 'why', involve your team, focus on trends, and always pair quantitative data with human insights.
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
I'll leave you with this: DevEx is ruthlessly eliminating barriers that keep your practitioners from being successful.
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
And a final thought - black lives matter, trans rights are human rights, love is love, abortion is healthcare, and fuck ICE.
-->

---
layout: end
---
