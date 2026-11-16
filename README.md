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
* Curated the user flow and information architecture for the page

### Design
* Create the low-fidelity wireframes,
* Decided on visual identities by creating a moodboard, selecting typography and color palette,
* Create high-fidelity wireframes using this design kit

View my in-depth design thought process [here](**)

## Development
* Content is loaded based on the data from `deal-page-data.json`. In places where the provided HTML was faulty, relevant parser functions were written in JavaScript and dangerouslySetHTML was used.
* Reusable components i.e. Dropdown, Carousel, SafeImage, Title, Button were created
* Each section i.e. Hero, Overview, Highlights, Itinerary, Hotel, Destinations, Excursions, Payment, Fineprint, FAQs, Testimonials has its own components, re-using the above mentioned ones
* In page.js, abstraction is observed and the page was easily built by simply importing the component then using its relevant tag in my preferred section order.
* Developed mobile-first and wrote media queries for medium and desktop screens

**Total Time Spent** 
- Research and Ideation : 1 day
- Design and Wireframing : 1 day
- Development : 3 days
