---
title: "The Software Was Never Really The Point"
date: 2026-03-24
excerpt: "Why Enterprise Software Implementations Keep Failing (And Why They Always Will)"
toc: true
furtherReading:
  - title: "The Mythical Man-Month"
    author: "Fred Brooks"
    year: "1975"
    note: "Old enough to be your father. Still the most precise explanation of why software projects spiral, why adding people to a late project makes it later, and why complexity compounds in ways that no timeline ever accounts for. If you've never read it, start here."
  - title: "The CHAOS Report"
    author: "Standish Group"
    year: "Annual"
    note: "The closest thing this industry has to an honest report card. Tracks IT project failure rates across sectors and project sizes. The headline numbers are consistently grim and have barely moved in thirty years — which is itself the most important data point."
---

In 2007, the Australian state of Queensland decided to replace its health department's ageing payroll system. The original budget was AU$6.2 million. The project was handed to IBM. It went live in March 2010 — after ten failed attempts to launch — and was immediately catastrophic. Nearly 78,000 Queensland Health workers received incorrect pay, or no pay at all, for months. A Commission of Inquiry later described it as sitting "in the front rank of failures in public administration in this country. It may be the worst."

The final bill to fix, stabilise and operate the system: AU$1.25 billion.

Queensland sued IBM to recover costs. They lost. Then they were ordered to pay IBM's legal fees for the entire 2.5-year court battle.

IBM's defence, stated repeatedly and without apparent irony, was that Queensland was trying to "rewrite history and shift blame for its own failings."

The Commission of Inquiry found that Queensland's own design authority — the body responsible for defining what the system needed to do — had accepted IBM's incomplete scope documents without question. The inquiry described them as "passive, perhaps lazy."

I want to be very clear: Queensland Health is not an outlier. It is the template. The names change. The platforms change — SAP, Salesforce, ServiceNow, Workday, Oracle. The countries change. The decades change. The outcome doesn't.

The question worth asking isn't why Queensland Health failed. It's why we keep being surprised when these projects fail. Because after thirty-plus years of enterprise software implementation horror stories, surprise is the one reaction that makes absolutely no sense.

## Everyone Thinks It's a CD Install

Let me tell you about a CXO I'll call David.

David is three months into his role as Group CEO of a large regional bank. He's sharp, commercially minded, and has strong opinions about the future of financial services. He's also just sat through a 45-minute product demo from a cloud platform vendor, and he is sold.

The platform is elegant. The vendor's team is polished. The slides are full of words like "seamless" and "intelligent automation" and "real-time visibility." One slide shows a timeline: implementation in 12 months. David writes that down.

Two weeks later, David announces at a company town hall that the bank will be fully live on the new platform by Q4 next year. He frames it as a bold modernisation move. The audience claps. The slide deck goes to the board.

The head of IT finds out about the timeline from the town hall. Not from David.

Procurement hasn't started. No systems integrator (SI) has been appointed. Nobody in that room has ever implemented a core banking system. The vendor's "12 months" figure was a sales estimate, generated before anyone had looked at the bank's actual systems, processes, data structures, or organisational complexity.

None of this registers as a problem. Because in David's mind — and in the minds of most executives who commission these projects — enterprise software works roughly like consumer software. You buy it. You install it. It runs.

This is the original sin of every failed implementation. Not the technical complexity. Not the vendor. Not the SI. The fundamental, stubborn, wildly expensive misunderstanding of what enterprise software actually is.

It is not a product you deploy. It is a transformation programme disguised as a technology project. And nobody tells the Davids of the world that until the project is already in trouble.

## The Clock Starts Broken

By the time an SI is appointed and the project formally kicks off, it is already behind schedule.

This is not an exaggeration. It is a structural feature of how these engagements begin.

Here's the typical sequence. An executive commits to a go-live date — sometimes publicly, sometimes to the board, sometimes just to a regional president who now has budget expectations. That date is set based on nothing: not a scoping exercise, not a complexity assessment, not any input from people who have actually delivered something like this before. It's based on the vendor's sales deck, or an executive's intuition, or a political deadline that has nothing to do with the software at all.

Procurement then takes its time. In a large enterprise, that's anywhere from three to six months of RFPs, evaluations, negotiations, legal reviews, and approval cycles. The clock is running. The committed date is not moving.

The SI walks in on day one of the engagement carrying the full weight of a timeline they had no hand in setting. In many cases, they've been given a scope of work that was written before anyone properly understood the client's environment. They are expected to hit a date that was announced at a town hall before they were even shortlisted.

And here's the part that still astonishes me, after twenty years of watching this happen: nobody — not the client, not the SI, not the software principal — stops to establish a shared baseline of how the client actually operates.

The assumption, baked in from day one, is that the SI will figure it out as they go. That they will absorb decades of institutional process knowledge through a combination of osmosis and telepathy. That the client will somehow make their best people available to transfer that knowledge, even while those people are still running the actual business.

They won't. They can't. And it wouldn't matter anyway, because there usually isn't time.

## The Cabinet Town

Here is the closest analogy I have for what enterprise software implementation actually involves.

Imagine you've been hired to design and build cabinetry. Not for a house. For an entire town.

You've been told there are roughly a thousand houses. Straightforward enough. But as you begin surveying, you find houses nobody put on the original list. Some have been there for decades. Some were built last year. Nobody updated the records.

You were told there were maybe three types of houses. There are fifty-three. Each with different dimensions, different load-bearing constraints, different owners with different opinions about storage.

There are no reliable blueprints. The original architects are retired or dead. The residents remember roughly how things work, but nobody ever wrote it down, because why would they? They live there. They just know.

To get sign-off on anything, you don't deal with individual homeowners. You deal with a residents' association, a renovation subcommittee, a heritage buildings board, a noise and disruption committee, and a plumbers' union that has strong opinions about where pipes can go. Each of them has veto power over something. None of them talk to each other.

You planned to pre-fabricate most of the cabinets off-site for efficiency. On arrival, you discover that at least two hundred and fifty houses have dimensions so non-standard that everything needs to be built on-site from scratch. Your cost model is now fiction.

Nobody agrees on the wood. You started with one specification. After six weeks of stakeholder reviews, you are building with seven different types, each sourced differently, each with its own lead time.

And the entire time, someone is asking you why you're behind schedule.

This is enterprise software implementation. The "cabinets" are your business processes. The "town" is your organisation — its subsidiaries, its countries, its legacy systems, its regulatory obligations, its internal politics, and its fourteen different ways of doing something that headquarters insists is a single global standard process.

The complexity is not primarily technical. It is organisational. It is human. It is the gap between how an organisation believes it operates and how it actually operates. That gap, in most large enterprises, is enormous. And it is almost never properly accounted for in the business case, the timeline, or the budget.

This is why costs escalate. This is why timelines double. This is why even experienced SIs with good delivery teams walk into these projects nervous.

The software is often the least complicated part.

A former supervisor of mine once delivered this line with complete seriousness: "Don't ever sell multi-year projects. For the simple fact that you just don't know what's going to happen next year."

At the time I had no idea what he was talking about. Now I'd go back and tell him: we shouldn't sell them because we don't know anything! Not even about this year. Not about what the client's processes actually are, how many exceptions exist to every rule, or which business unit is going to quietly refuse to participate until month seven. The multi-year horizon isn't the problem. The problem is that we start these projects in a state of profound, mutual, and almost wilful ignorance — and call it a kick-off.

## When It Blows Up, Someone Has to Hang

So the project delivers late. Or it delivers something that barely works. Or it goes live on a hard deadline — because the committed date was announced at a town hall and cannot move — with known defects, incomplete testing, and undertrained users.

Then the wheels come off in production.

Business operations slow down or stop. Critical transactions fail. Workarounds multiply. The helpdesk is overwhelmed. Senior people who were promised a seamless transition are now managing a crisis.

At this point, an important institutional mechanism kicks in: the search for someone to blame.

And the answer is almost always the same. Blame the SI. Or blame the software principal. They're the experts. They should have known. They should have pushed back harder on the timeline. They should have extracted the right requirements from a client that had none documented, read the business processes that nobody had written down, and predicted the organisational resistance that nobody had warned them about.

The original executive who committed to the date at the town hall? Possibly promoted by now. Or moved on to another role. Or simply insulated by enough layers of governance that direct accountability never lands.

The CIO who approved the scope without adequate challenge? Pointing at the vendor contract.

The business units that withheld their best people, refused to engage with requirements workshops, and only showed up to complain once the system didn't work the way they wanted? Also pointing at the vendor contract.

There is a consulting industry joke that goes something like: the project failed, but the engagement was a success. It's funny because it's accurate. The SI gets paid whether it works or not. The software principal retains the licence fees. The executive moves on. The organisation absorbs the loss and, eventually, starts planning the next implementation.

I spent years in this industry. My former firm was, for a long time, genuinely excellent at this work — better than most at navigating the complexity, managing the politics, and delivering something functional under impossible conditions. But the model creates perverse incentives that no amount of delivery excellence fully overcomes.

## A Brief Word on AI

There will be no shortage of executives — I'd estimate the first wave has already arrived — who look at the failures described above and conclude that AI is the answer. That intelligent automation will close the requirements gap, accelerate delivery, and remove the human friction that causes these projects to collapse.

I may write a full piece on this. Not sure yet. We'll see. For now, the short version:

AI does not know how your organisation works. You still need to tell it. If you haven't documented your processes for a human SI, you haven't documented them for an AI either. An AI will not appear in court when something goes wrong. And no model, however capable, will absorb thirty years of undocumented institutional knowledge from a two-hour scoping call.

AI will make fast, confident, and occasionally catastrophic decisions — without anyone to hold accountable when they go wrong. In an environment already defined by diffuse accountability and wishful timelines, that is not a feature.

Watch this space.

## The Uncomfortable Truth

Here is what I actually think, after twenty years of watching this play out across industries and continents.

The people who commission these projects — many of them, not all — know on some level that the project is unlikely to succeed as planned. They commission it anyway. Because the project itself serves a purpose independent of its outcome. It signals transformation. It protects share price. It builds empires. It gives an executive something to point to when the board asks what they're doing about modernisation.

And when it fails, the system is perfectly designed to absorb the loss. The SI is blamed. The software principal is sued. The post-mortem produces a report that recommends better governance next time. The organisation announces its next transformation programme.

The software was never really the point.

## Further Reading
