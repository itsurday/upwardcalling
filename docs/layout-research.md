# Layout research — Upward Calling Career Services

Phase 2 deliverable. Captured 2026-11-06.
Related decisions: [ADR-0002](decisions/0002-separate-career-site-from-photography.md) (split the sites) and
[ADR-0003](decisions/0003-career-home-page-section-order.md) (home page section order, *proposed*).

Items marked **[CLIENT TO SUPPLY]** are facts I could not find on the current site and did not invent.

---

## 1. The current site

### What it is

**Upward Calling** is Christen Mazura-Morris's solo practice. It's on Wix, with "© 2022" in the footer. She describes herself as
"a PARWCC certified professional resume writer, career coach and interview professional" with
"over 20+ years" of writing resumes and educating people on the job search "while working in
the business and education sectors". Her credentials, as listed on the contact page, are **CPRW | CPCC | CEIP**.
The name comes from Philippians 3:13-14 ("the prize of the UPWARD CALL of God in Christ Jesus"),
and she describes her approach as "a positive, faith-focused perspective".

It currently sells two unrelated things:

| Line | What's offered | Evidence |
|---|---|---|
| **Career services** (the focus) | Resume, cover letter and LinkedIn writing: 3 packages ($300–$3,500) plus 7 individual services. Career, job-search and interview coaching: 4 three-session packages at $750 each, plus strategy calls at $275/hour. | `/`, `/career` |
| Photography (out of scope, see ADR-0002) | Child, family, headshot, personal-branding and school portraits | `/services-9` |

Full verbatim capture: [research/current-site-content.md](research/current-site-content.md).

### Who it's for

Job seekers "of all experience levels and industries". Her stated scenarios are:

* taking a career "to the next level"
* pivoting in a new direction
* targeting specific companies

The testimonials back this up: an academic advisor, a customer service manager, an IT support
engineer, a new sonography graduate and a director of career services. The audience is broad and
mid-career rather than executive. That matters, because most best-in-class references target
executives.

### Its single main job

**Get a job seeker to book the free Career Connection Call.** It's described as a "free 15-minute
career connection call", scheduled by email. Every section on the current site already ends in
"SCHEDULE YOUR FREE CAREER CONNECTION CALL TODAY!". The new site should keep that one conversion
and make it easier.

### What the current design does well

* **Speaks to the visitor's pain in their own words.** "Are you using your resume to apply for jobs
  and getting no response? Are you getting the interview, but not landing the job?" This is the
  same problem-first opening the strongest references use.
* **Explains the process.** Six clear steps from "Let's Connect" to "Start Applying", with a stated
  5-business-day turnaround.
* **Shows prices.** Ranges are shown openly. Most competitors hide pricing or bury it in an FAQ.
* **Has real testimonials with roles** (Kandis, Academic Advisor; Tyler, IT Support Engineer; and others),
  some describing concrete outcomes ("I got the interview the next day!").
* **Has a distinctive voice and story.** The Upward Call verse, "Moving Mountains to Move Ahead",
  and coaching package names like "Finding My Direction" and "Pursuing My Passion" give it a
  personality the generic competitors lack.
* **Includes resume samples.** It has a samples page with 3 designs (Sales Director, Sr. Oracle DBA, Social Media Intern).

### What it does badly

| Problem | Evidence | Impact |
|---|---|---|
| Hero text is nearly invisible | "UPWARD CALLING" in #372B62 on #504671 measures **1.46:1** (sampled from the screenshot). The buttons, #C0B9D8 on #6B6389, measure 2.96:1. WCAG AA requires 4.5:1. | The first thing visitors see is hard to read, and fails accessibility. |
| Two businesses in one hero | "CAREER SERVICES" and "PHOTOGRAPHY" buttons, with no value proposition | The visitor has to choose before being told what's on offer. |
| Not responsive on mobile | At a 390 px viewport the home, about, services and contact pages render the desktop layout 1,142 px wide (sideways scroll). The nav ends up in the middle of the page. | Most job seekers browse on phones. |
| Broken widgets | "We couldn't load the services due to a technical issue" (coaching services list) and "Widget Didn't Load" at the foot of the home page | Looks neglected and erodes trust. |
| Pricing grid overload | 17 near-identical cards, each with an unrelated stock nature photo; "Strategy Call" appears twice | Hard to compare, and the decorative photos say nothing about the service. |
| Inconsistent copy | "SCHEUDLE YOUR FREE…", "best suite your needs", "Moving Mountains" vs "Moving My Mountains", "The Quick Fix Fast Delivery" vs "The Quick Fix" | Small errors are costly for a writing service. |
| Weak hierarchy | Avenir Light, Open Sans Condensed and Lulo all-caps mixed together; centered body copy throughout; lavender-on-purple bands | Hard to scan, and nothing stands out as the main action. |
| No booking flow | CTAs open `mailto:` or a contact form, followed by "We will determine via email the best time to chat" | Adds friction to the one conversion that matters. |
| Credentials hidden | PARWCC badge appears only as a small footer image; CPRW/CPCC/CEIP appear only on the contact page | Her strongest trust signal is under-used. |
| Off-brand "Log In" link | A Wix member login sits in the header | It's noise, and there are no member features. |

Screenshots: `research/screenshots/upwardcalling-home-{desktop,mobile}.jpg` and `upwardcalling-services-*.jpg`.

---

## 2. Reference sites

### How they were chosen

I looked for solo or boutique resume writing and career coaching practices with a founder-led
offer like Christen's, plus one faith-based career service. I captured desktop (1440 px) and
mobile (390 px) full-page screenshots with headless Chromium on 2026-11-06.

I dropped three candidates:

* **Find My Profession:** bot check, no content.
* **Career Contessa:** a media site, closing Dec 1, 2026.
* **Luisa Zhou:** now a business-coaching site, not career services.

> Capture caveat: fonts served from hosts outside this environment's network allowlist (for example Adobe
> Fonts/Typekit) fell back to system fonts in the screenshots. Font names below come from
> each site's computed CSS, not from the rendered pixels. Christian Career Center's stylesheet
> also failed to load, so it is used for **content and positioning**, not visual reference.

### Comparison

| | [Thomas Career Consulting](https://thomascareerconsulting.com/) | [Great Resumes Fast](https://greatresumesfast.com/) | [Strategic Career Coaches](https://strategiccareercoaches.com/) | [Career Steering](https://careersteering.com/) | [Happen To Your Career](https://www.happentoyourcareer.com/) | [Christian Career Center](https://www.christiancareercenter.com/christian-career-coach-faith-based-coaching/) |
|---|---|---|---|---|---|---|
| **Model** | Solo CPRW + counselor | Founder-led team, executives | Solo NCRW, all levels | Solo master writer, executives | Coaching company + podcast | Faith-based coaching + job board |
| **Section order** | Hero, stats strip, founder video, belief statement, problem, differentiators (4), services (5), who it's for (6), 4-step process, reviews, FAQ, final CTA, footer | Promo bar, trust bar, hero, lead magnet, problem, 3-step "what you need", 2 paths (done-for-you / DIY), differentiators, story, reviews, footer | Hero, founder + problem list + credentials, services grid, samples, newsletter, certifications, awards, blog, testimonials, footer | Image slider hero, long founder letter, sample, credentials and awards, specializations, industries, firms, CTA, blog | Hero + quote, positioning, podcast, episodes, mini-course, resources, coaching programs, about, footer | Long-form page: questions, why a Christian coach, benefits, testimonial, services |
| **Hero** | Dark panel, serif headline "Land the career you *actually* want.", founder photo card with credentials, 2 CTAs, rating strip | Photo of a woman with a phone, centered serif headline, 2 buttons | Plain headline "Be the Candidate They Remember.", credentials line, 1 CTA | Full-bleed desk photo, carousel repeating one headline | Huge headline with script "happy?", testimonial card | Text only |
| **Navigation** | 6 items + phone number + filled CTA button | 6 items under a centered logo, plus two top bars | 8 items | 8 items + sidebar | 6 items + login + search | Mega-menu (~30 links) |
| **Primary CTA** | "Book a Discovery Call" (header, hero, final band) | "Resume services" / "Download free" (competing) | "Schedule Complimentary Consultation" (×3) | "Learn more", then phone/email in text | "Umm… yes please!" (45-min conversation) | "Free Career Services Consultation" (in menu) |
| **Trust signals** | 4.9 rating from 118 Google reviews; 25+ years; "Top 5" locally; credentials on photo card; FAQ | Client counts, 100% satisfaction, 3–5 day delivery, press logos, LinkedIn Top Voice | 4 certifications spelled out; "Resumes For Dummies" feature; named testimonials | Forbes Council; 4 association badges; "80% referred" | Testimonial in hero; "thousands of people" | "30 years", "thousands" |
| **Typography** | Instrument Serif display + Inter body | Haboro Contrast display + Roboto + Crayones script | Poppins / Helvetica (Typekit fell back) | Inter + Montserrat | Agenda + Niveau Grotesk + Vontens (brush) | Arial |
| **Color** | Near-black #1E1C19, cream #F6F2E6, amber #E9A23B | Black, white, blush #F5F0ED / #F4D9D4 | White + navy #253551 | Black, white, blue #092D99, olive heads | Navy #1B3454, teal #22B4AB, red #FF4043, yellow #FEC920 | Navy #2D3E50, red #9B1D20 |
| **Mobile** | Excellent: stacked hero, full-width CTA, 2×2 stats grid | Good, but hero text over the photo is low-contrast | Fine, but headshot crops to an eyes-only close-up | Fine; a very long scroll | Good; hamburger menu | Modal and menu clutter |
| **Takeaway** | **Best overall model** for a solo, credentialed writer and coach | Clear problem → 3 steps → paths story | Credentials explained in plain language | Founder voice and story | Warmth and personality | Faith positioning done plainly |

Screenshots for each: `research/screenshots/<site>-{desktop,mobile}.jpg`.

---

## 3. Patterns that recur, and are worth using

1. **One free-call CTA, repeated.** Each of the best practices has a single primary action (discovery call or
   consultation) in the header, the hero and at the end of the page. Thomas shows "Book a Discovery Call" 3 times;
   Strategic 3 times.
2. **Founder face plus credentials in the hero.** Solo practices sell the person: Thomas puts
   credentials on the photo card and Strategic lists them under the headline. Christen's
   PARWCC credentials belong there too.
3. **Problem before product.** Thomas ("The market is crowded. Your story shouldn't be."), Great
   Resumes Fast ("lost in the black hole of no response?") and Strategic ("Is this happening to you?") all name
   the visitor's frustration before pitching. Christen's site already has this copy.
4. **A short numbered process.** 3–4 steps (Great Resumes Fast, Thomas) reduce the fear of the unknown.
   Christen has 6 steps, which can be grouped visually into 3 phases without losing any.
5. **A proof strip of hard numbers right after the hero.** Thomas uses years, rating, ranking and award.
   Use only facts Christen can back up, such as "20+ years" and "5-business-day first draft".
6. **"You work directly with me."** Thomas ("No junior writers"), Strategic and Career Steering
   all make founder-only service a differentiator. Confirmed by the client: Christen writes
   every document herself, so this can be stated.
7. **Testimonials with name and role, near the final CTA.** UI/UX Pro Max `landing` search, pattern
   "Hero + Testimonials + CTA", says: "Social proof before CTA. Use a concise set of verified
   testimonials with photo, name, and role."
8. **An FAQ before the final CTA.** Thomas answers cost, location, AI use, timing and "what if I
   don't know what I want". Christen's site already states several answers: 5-day delivery, RUSH
   for an extra fee, no employment guarantee, Zoom reveal, prices subject to change.
9. **Warm serif display plus a neutral sans, on cream rather than stark white.** Thomas
   (Instrument Serif/Inter, cream #F6F2E6) and Great Resumes Fast (contrast serif, blush) feel personal yet professional.
   That suits a faith-focused, encouraging voice better than corporate navy.

## 4. Patterns to avoid

* **Competing primary actions.** Great Resumes Fast pushes a free template (twice) above its own service.
* **Carousels that repeat one message.** Career Steering's hero slider repeats the same headline 3 times. The
  UI/UX Pro Max `landing` data adds that any carousel needs pause controls and must stop under
  reduced motion. Simpler to not have one.
* **Mega-menus and long nav.** Christian Career Center has about 30 links. Keep 5–6 items.
* **Script or brush fonts for structure.** Great Resumes Fast's script "Step One" and Happen To Your Career's brush headings
  hurt legibility. If a handwritten touch is wanted, keep it to one decorative word.
* **Walls of text.** Career Steering's founder letter runs for several screens.
* **Stock nature photos as card decoration.** That's the current site's own mistake: they add weight and no meaning.
* **Text over busy photos on mobile.** Great Resumes Fast's hero fails here.
* **Unverifiable superlatives** ("#1", "Top 10") and claims Christen can't back up.

## 5. What the UI/UX Pro Max searches say

I ran these queries with `.claude/skills/ui-ux-pro-max/scripts/search.py`:

| Query | Result | How it's used |
|---|---|---|
| `--design-system "career coaching resume writing personal service faith warm professional"` | Pattern "Product Demo + Features"; style "Minimalism & Swiss"; navy #1E3A5F + blue #2563EB + green #16A34A; Caveat/Quicksand | **Partly rejected.** The matcher keyed on "resume" (a resume-builder product) and returned a software demo layout and handwritten fonts. Kept: the minimal, high-contrast style, its accessibility requirements, and the pre-delivery checklist (375/768/1024/1440, 4.5:1, focus states, reduced motion). |
| `--domain product "career coach consulting professional service"` | B2B Service and Legal Services: "Accessible & Ethical + Minimalism", landing "Trust & Authority" | This is the closest product analogue, and it confirms a trust-led page. |
| `--domain landing "hero social-proof testimonial pricing cta coaching service"` | "Hero + Testimonials + CTA" (Hero > Problem > Solution > Testimonials > CTA) and "Trust & Authority + Conversion" (Hero > Proof: certs and stats > Solution > CTA; "Transparent pricing. Low-friction form.") | The recommended order below combines both. |
| `--domain style "editorial warm trustworthy minimal"` | Minimalism & Swiss Style (low cost, low accessibility risk) | Baseline: grid, whitespace, one accent. |
| `--domain typography "editorial elegant trustworthy professional"` | Playfair Display/Inter; Newsreader/Roboto; EB Garamond/Lato; Lexend/Source Sans 3 | Candidates for Phase 3. Serif display + sans body is consistent with the references. |
| `--domain color "coaching consulting trustworthy warm"` | Warm cream backgrounds (#FFFBEB) with terracotta, amber or deep indigo accents | Supports a warm-neutral base. Phase 3 can keep a purple heritage from the current brand (#504671 family) but at accessible contrast. |
| `--domain ux` (touch target, contrast, reduced motion, form labels, focus, tables) | ≥24×24 CSS px targets (44 px preferred on touch); 4.5:1 text; honor `prefers-reduced-motion`, animate 1–2 elements per view at most; real `<label>`s, never placeholder-only; visible focus rings; tables collapse to cards on mobile | These become acceptance criteria for Phase 4. |

## 6. Recommended section order — Career Services home page

| # | Section | Why it's here | Content source |
|---|---|---|---|
| 1 | **Header**: logo; nav (Services · How it works · About · Results · Contact); "Book a free call" button (goes to the contact form) | One persistent primary action (pattern 1). Short nav (avoid list). No "Log In". | Existing pages |
| 2 | **Hero**: headline about the outcome; one-line subhead saying who it helps and how; primary CTA *Schedule your free Career Connection Call*; secondary *See services & pricing*; Christen's photo with CPRW · CPCC · CEIP | Sells the person and credentials up front (pattern 2). Fixes the 1.46:1 hero and the two-business split. | Tagline "Moving Mountains to Move Ahead"; credentials from `/contact-8`; headshot exists on the current site |
| 3 | **Proof strip**: 20+ years · PARWCC certified · resume draft in 5 business days · virtual, via Zoom | Quick credibility right after the promise (pattern 5; "Trust & Authority": proof before solution). | All stated on the current site |
| 4 | **Problem**: "Does this sum up your job search?" with 3–4 pain points | Problem before product (pattern 3). Her strongest existing copy. | Home page copy |
| 5 | **What changes**: 3 outcomes: get through the ATS, appeal to recruiters and hiring managers, win the interview and show you're the "best fit" | Turns the pain into concrete outcomes. Merges her two "You need a professional…" blocks. | Home page copy |
| 6 | **Services overview**: 3 cards: *Career documents* (3 packages), *Coaching* (4 packages, $750 each), *Individual services and strategy calls*, each with a price range and a link to the services page | Transparent pricing (`landing`: "Transparent pricing") without the 17-card wall. | `/career` |
| 7 | **How it works**: 6 steps grouped into 3 phases (Connect → Create → Launch) | A short process reduces anxiety (pattern 4); keeps all six of her steps. | Home and `/career` |
| 8 | **Testimonials**: 3–4 cards with name and role | Social proof just before the ask (pattern 7). Static grid, no carousel. | `/success-stories` |
| 9 | **About Christen**: photo, 2–3 sentence bio, faith-focused note (Philippians 3:13-14), "Read my story" | Differentiation is the person and her values, kept short (avoid walls of text). | `/about-6` |
| 10 | **Resume samples teaser**: 3 thumbnails | Shows the product. A strong signal for a writing service. | `/samples` (Sales Director, Sr. Oracle DBA, Social Media Intern) |
| 11 | **FAQ**: 5–6 questions answered only from stated facts | Handles objections before the final ask (pattern 8). | Delivery time, RUSH, no employment guarantee, Zoom reveal, pricing changes, free call length. **[CLIENT TO SUPPLY]:** any further answers |
| 12 | **Final CTA band + short contact form**: name, email, service interest (her 4 options), message | One last, low-friction conversion (`landing`: "Low-friction form"). | `/contact-8` form fields |
| 13 | **Footer**: nav repeat, email, LinkedIn, PARWCC badge, Privacy, ©, one link to *Photography* (separate site) | Keeps the photography audience one click away (ADR-0002). | Existing footer |

**Inner pages** (from the same templates): Services & Pricing (full packages, notes and
disclaimers), About, Results (testimonials and samples), Contact. One generic content page
template will cover Privacy and similar pages.

### Client answers (2026-11-06)

| Question | Answer | Effect on the build |
|---|---|---|
| Booking method | Use an email form for now. | Every "Schedule your free Career Connection Call" CTA goes to the contact form (section 12 and the Contact page). There's no calendar integration. |
| Domains | Both stay on `https://www.upwardcalling.com/`. Photography moves to `/photo`. | Career site at the root. The footer links to `/photo`. ADR-0002 updated. |
| Does Christen write every document? | Yes. | "You work directly with Christen" can be stated (pattern 6). |
| Headshot, logo, resume samples | Take them from the current site. | Download the current Wix images in Phase 4 and note their resolution. |
| Prices | Take them from the current site. | Use the Services page (`/career`) as the source of truth, since it's the dedicated pricing page. Its wording wins where the home page differs ("& Strategy Call", "The Quick Fix"). Keep its notes: RUSH extra, no employment guarantee, prices subject to change. |
| Testimonials | Take them from the current site. | Use the first names and roles exactly as published. |

### Still open

* **Google rating**: the owner pointed to the [Google Maps listing](https://maps.app.goo.gl/jeWhzemys5oUsDaP9). Checked 2026-11-06, it shows
  **5.0**, category "Resume service", 1244 State St Suite #117, Lemont, IL 60439 (Centennial
  Plaza), "Identifies as women-owned". Google's signed-out "limited view" hides the **number of
  reviews**, so **[CLIENT TO SUPPLY]** the review count. The proof strip will show "5.0 on Google (N reviews)"
  once the count is known, and leave the rating out until then.
  The listing also shows a "Claim this business" link, which suggests the Business Profile is not
  claimed. Claiming it would let Christen add her phone number, photos and replies.
* **[CLIENT TO SUPPLY]** Whether the Lemont, IL street address should appear on the site (it isn't on the current site).
* **[CLIENT TO SUPPLY]** Further FAQ answers beyond the facts already on the site.
