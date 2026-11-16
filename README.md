
# Transylvania Deal Page

## Overview

This is an original holiday deal page for a UK audience for which research-backed interface design and development was done. In this README, I document my design and development process, and its relevant details, alongside setup instructions

* **Objectives**: Help visitors understand what makes the holiday appealing, what is included and how to take the next step. 
* **Target Audience**: Budgeted solo, friends or family travel groups from the UK
* **Technology**: Next.js, React, CSS, Netlify
* **Design Tools**: Figma

## Design Process
<img width="1218" height="355" alt="Screenshot 2026-11-16 at 15 11 35" src="https://github.com/user-attachments/assets/4c2e512b-548e-47ad-a52e-e34301365f35" />

### Discover
* More specifically scoped out the target audience to understand their behaviors, intentions and expectations from travel, and the specific age group
* Investigated pages of similar deals to understand what does and does not work that my product can address. 

### Define
* Clearly defined the problem by creating user personas for understanding different needs, goals, and challenges of various users

### Ideate
* Brainstormed ideas to solve the problem and achieve our defined goals

### Design
* Create the low-fidelity wireframes,
* Decided on visual identities by creating a moodboard, selecting typography and color palette,
* Create high-fidelity wireframes using this design kit

View my in-depth design thought process [here](**)

## Development
- Content is rendered from `deal-page-data.json` (placed in libs folder). Where the supplied HTML needed restructuring (e.g. excursions, highlights, payment, itinerary headings), I wrote small parser functions in JavaScript. Some supplied HTML that needed no restructuring is rendered with `dangerouslySetInnerHTML`
- Reusable components (e.g. Dropdown, Carousel, SafeImage, Title, Button) were created and shared across sections where relevant.
- Each section (Hero, Overview, Highlights, Itinerary, Hotel, Destinations, Excursions, Payment, Fine Print, FAQs, Testimonials) has its own component.
- The enquiry form opens in a native <dialog> modal from any `#enquire` CTA.
- `page.js` imports the section components and renders them in my chosen order, passing in the relevant data.
- Styling is primarily mobile-first, with media queries for medium and desktop screens.
- **Image config:** `next.config.js` allows remote images from `cdn.techneapp-staging.site` and `lcv-staging.site`, which is what was in the supplied JSON. Without these, the images would be blocked by `next/image`
- Only full image URLs from the JSON are used. Relative paths are not given a guessed host and use a fallback solid-color instead.

## Demo
### Mobile
https://github.com/user-attachments/assets/221917f3-47ae-4ef0-b0d0-03c2c4500d0a


### Desktop
https://github.com/user-attachments/assets/a88ab9ea-7141-4386-a659-9e4184811e40

**Total Time Spent** 
- Research and Ideation : 1 day
- Design and Wireframing : 1 day
- Development : 3 days

## Pre-Requisites
- Node.js v24 or later - [Download Node](https://nodejs.org/en/download)
- npm 11.2
- Git - [Download Git](https://git-scm.com/install/)

*Or download [Homebrew](https://brew.sh/) and run these commands to install these prerequisites:
```bash
brew install git
brew install node
node -v
npm -v
```

## How to Install & Setup
1(a). Clone the repo from your VSCode terminal,
```bash
git clone https://github.com/fa-haseena-shah/transylvania-deal-page.git
```

OR

1(b). Click the <> Code dropdown and download the ZIP


2. Enter the project folder and run the build commands,
```bash
cd transylvania-deal-page
npm install
npm run dev        # local build
npm run build      # production build
npm run start      # serve the production build
```

## Deployment Notes
* Imported this Git repo as a new project into Netlify and was auto-deploy from `main` branch
* **Build command:** `npm run build`
- **Publish directory:** left as the Netlify default for Next.js
- **Node version:** developed locally on Node v26.13.1, Netlify built with Node 24.22.2
- **Environment variables:** none required
* Deployment happened smoothly without any issues, referring to [Tutorials by Manizha & Ryan](https://www.youtube.com/watch?v=XE2ASE7N4ho)

## Brief Test Record
| Check                                                                                                     | Result |
|-----------------------------------------------------------------------------------------------------------|--------|
| Layout, no horizontal overflow across 360px, 768px, 1024px                                                | Pass   |
| Hamburger menu opens and closes                                                                           | Pass   |
| Accordions for itinerary, FAQ and fineprint work                                                          | Pass   |
| CTA opens enquiry modal, closes properly, and relevant errors shown                                       | Pass   |
| Live site checked (Samsung Internet, S24 / Safari, iPhone / Google Chrome, MacBook / Firefox, Windows) | Pass   |

## Limitations
* Navbar and footer were not required sections but implemented for completeness since there are essential parts of a web-page. Navbar links (except contact) do not work since those additional pages were not developed.
* Footer content is not from the supplied data; it was obtained from [here](https://www.lowcostvibes.com/about-us)
* Enquiry form is simulated with no backend
* There is an overlap in some excursion data which was disregarded
* Testimonials and contact details are sample content
* Ideally, UAT must be performed on our target UK audience but since that is not available at this stage, I omit it.

### Contact
[Email](mailto:fa.haseenashah@gmail.com) ⋆ [LinkedIn](https://www.linkedin.com/in/haseena-shah-1a0a11444) ⋆ [Design](https://www.behance.net/haseenashah2d)
