::: {align="center"}
# Cal.com --- Scheduling Website UI

**A responsive scheduling website recreation inspired by Cal.com.**

A modern interface built with React and Tailwind CSS, featuring a
polished landing page, pricing plans, enterprise sections, and
authentication screens.

```{=html}
<!-- Add your landing-page screenshot at public/landing-page.png -->
```
`<img src="./public/landing-page.png" alt="Cal.com-inspired landing page preview" width="100%" />`{=html}

```{=html}
<p>
```
`<a href="#-features">`{=html}Features`</a>`{=html} ·
`<a href="#-tech-stack">`{=html}Tech stack`</a>`{=html} ·
`<a href="#-getting-started">`{=html}Getting started`</a>`{=html} ·
`<a href="#-project-structure">`{=html}Project structure`</a>`{=html}
```{=html}
</p>
```
:::✨ Features
- Landing page --- responsive hero section, calls to action, and
  supporting content.
- Enterprise pages --- feature cards, security and compliance
  content, and use-case sections.
- Pricing page --- subscription plan cards and a
  feature-comparison section.
- Sticky feature comparison --- plan headers remain visible while
  the feature list scrolls.
- Sign-in page --- dark UI, Google and Microsoft sign-in buttons,
  email/password fields, and password visibility toggle.
- Sign-up flow --- email sign-up form layout and a
  booking-calendar preview.
- Reusable components --- shared buttons and consistent styling
  across sections.
- Responsive layout --- layouts adapt to desktop, tablet, and
  mobile screens.
- Subtle visual details --- dotted world-map background, grid
  patterns, borders, shadows, and hover states.
This is a front-end recreation project inspired by Cal.com. Brand
assets, authentication providers, and backend flows should be
connected to their real services before production use.

🖼️ Landing Page Preview
The README expects the landing-page screenshot at
public/landing-page.png.
1. Run the project locally.
2. Open the landing page in your browser.
3. Take a screenshot of the page.
4. Save it as landing-page.png inside the project's public folder.
If your screenshot is stored somewhere else, update the image path above
to match its location.
🧰 Tech Stack
- React --- component-based UI
- Vite --- development server and build tooling
- Tailwind CSS --- utility-first styling
- Lucide React --- interface icons
- React Router --- page navigation, if configured in the project
🚀 Getting Started
Prerequisites
Install Node.js (LTS recommended) and npm.
Installation
Clone the repository and enter the project directory:
git clone <your-repository-url>
cd <your-project-folder>
Install dependencies:
npm install
Start the development server:
npm run dev
Open the local URL printed in your terminal, usually:
http://localhost:5173
Production build
npm run build
npm run preview
📁 Project Structure
Your exact folders may differ, but a typical structure for this project
is:
src/
├── components/
│   ├── ui/
│   │   └── Button.jsx
│   └── sections/
├── pages/
│   ├── Signin.jsx
│   └── Signup.jsx
├── styles/
│   └── Signin.css
├── App.jsx
└── main.jsx
public/
└── landing-page.png
🎨 Design Notes
- Clean white cards over a soft light-gray page background
- Dark charcoal primary buttons with subtle hover transitions
- Rounded corners, thin borders, and restrained shadows
- Bold, tightly tracked headings
- A dark sign-in screen with a dotted world-map visual
- Shared spacing and typography for a consistent experience
🔐 Authentication Notes
The current sign-in UI is a presentation layer unless you have connected
your own services. Before using it for real accounts:
- Connect the form submission to your authentication API.
- Configure Google and Microsoft OAuth credentials and callback URLs.
- Add loading, validation, and error states.
- Keep secrets in environment variables and never commit them to Git.
- Use HTTPS in production.
🛣️ Roadmap
- [ ] Add the final landing-page screenshot to
  public/landing-page.png
- [ ] Verify all routes on mobile and desktop
- [ ] Connect sign-in and sign-up to the backend
- [ ] Connect OAuth providers
- [ ] Add accessible loading and error states
- [ ] Deploy the production build
📄 License
This project is intended for learning and portfolio purposes. Cal.com is
a separate product and its name and branding belong to their respective
owners. Add a license here if you intend to distribute your own code.
::: {align="center"}
**Built with React, Tailwind CSS, and attention to detail.**
:::