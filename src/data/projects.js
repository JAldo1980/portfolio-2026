// All portfolio content lives here, so updating the site never means touching layout code.

export const featured = {
  index: '01',
  name: 'The Circle Line',
  kind: 'Client website',
  summary:
    'A website for a consultancy that uses psychology to help leaders and teams perform. Senior clients needed to trust it on sight, so the job was a calm, credible site with a clear route in for individuals and for businesses.',
  brief: [
    'Look as considered as the service: quiet, premium, no clutter.',
    'Give two audiences, individuals and businesses, their own clear path from the first screen.',
    'Be easy to extend as new services and content are added.',
  ],
  did: [
    'Built the site in React with TypeScript, from component structure through to the finished UI.',
    'Set up reusable, typed components so new pages and sections slot in without rework.',
    'Handled state and props for interactive elements and a fully responsive layout.',
  ],
  stack: ['React', 'TypeScript', 'JavaScript', 'Responsive UI'],
  image: '/work/circle-line.webp',
  live: 'https://thecircleline.co.uk/',
}

export const builds = [
  {
    name: 'myteam',
    kind: 'Recruitment agency site',
    summary: 'Multi-page marketing site with React Router, built from a professional design file.',
    stack: ['React', 'React Router', 'Tailwind'],
    image: '/work/myteam.webp',
    live: 'https://myteam-recruitment.netlify.app/',
    code: 'https://github.com/JAldo1980/myTeam-recruitment',
  },
  {
    name: 'Parker Software',
    kind: 'Homepage redesign',
    summary: 'A fresh take on a UK software company’s homepage, rebuilt in plain HTML, CSS and JavaScript.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    image: '/work/parker.webp',
    live: 'https://parker-software-javascript.netlify.app/',
    code: 'https://github.com/JAldo1980/parker-software-flat',
  },
  {
    name: 'Glow',
    kind: 'Small business landing page',
    summary: 'Landing page for a LinkedIn personal-branding service, with content driven from local data files.',
    stack: ['React', 'JavaScript'],
    image: '/work/glow.webp',
    live: 'https://glow-small-business.netlify.app/',
    code: 'https://github.com/JAldo1980/small-business-landing-page',
  },
  {
    name: 'Adrian Foster',
    kind: 'Personal brand template',
    summary: 'Bold, type-led landing page template for a tech founder’s personal brand.',
    stack: ['React', 'JavaScript'],
    image: '/work/adrian-foster.webp',
    live: 'https://adrian-foster.netlify.app/',
    code: 'https://github.com/JAldo1980/react-adrian-foster',
  },
  {
    name: 'Olivia Wilson',
    kind: 'Personal brand template',
    summary: 'Landing page template for a performance marketer, with a validated enquiry form.',
    stack: ['React', 'Form validation'],
    image: '/work/olivia-wilson.webp',
    live: 'https://olivia-wilson-template.netlify.app/',
    code: 'https://github.com/JAldo1980/react-glow-template-2/tree/main/glow-template-2',
  },
  {
    name: 'Invoice It Up',
    kind: 'Web app',
    summary: 'Create, total and print invoices in the browser. Items are added, validated and calculated live.',
    stack: ['JavaScript', 'Forms', 'DOM'],
    image: '/work/invoice.webp',
    live: 'https://invoice-it-up.netlify.app/',
    code: 'https://github.com/JAldo1980/invoice-builder/tree/main',
  },
]

// Practice builds, UI studies and small tools. Shown as a compact index, not full cards.
export const archive = [
  { name: 'Kia homepage', note: 'UI study of a large automotive homepage', stack: 'React, Tailwind', image: '/work/kia.webp', live: 'https://kia-clone.netlify.app/', code: 'https://github.com/JAldo1980/kia-website-clone' },
  { name: 'Monzo homepage', note: 'UI study of a fintech homepage', stack: 'React, Tailwind', image: '/work/monzo.webp', live: 'https://monzo-clone.netlify.app/', code: 'https://github.com/JAldo1980/monzo-bank-clone' },
  { name: 'Slack homepage', note: 'Page assembled from PHP includes', stack: 'PHP, CSS', image: '/work/slack.webp', live: 'http://james-codes.fwh.is/?i=1', code: 'https://github.com/JAldo1980/php-landing-page' },
  { name: 'Kill Team name generator', note: 'Team names and skills for Warhammer players', stack: 'JavaScript', live: 'https://kill-team-name-generator.netlify.app/', code: 'https://github.com/JAldo1980/name-generator-tool' },
  { name: 'Baht to pound converter', note: 'Built for a trip to Thailand, used on the go', stack: 'JavaScript', live: 'https://thai-baht-pound-converter.netlify.app/', code: 'https://github.com/JAldo1980/baht-converter' },
  { name: 'Product page with cart', note: 'Image gallery, quantity and cart states', stack: 'JavaScript', live: 'https://silver-daifuku-d35f24.netlify.app/', code: 'https://github.com/JAldo1980/e-commerce-website' },
  { name: 'Hike Finder', note: 'Travel site with sign-up and log-in modals', stack: 'JavaScript', live: 'https://hike-finder-app.netlify.app/', code: 'https://github.com/JAldo1980/hike-finder' },
  { name: 'Agency landing page', note: 'Single scrolling page built to drive enquiries', stack: 'JavaScript, CSS Grid', live: 'https://watson-your-socials.netlify.app/', code: 'https://github.com/JAldo1980/agency-landing-page' },
  { name: 'E-learning landing page', note: 'Frontend Mentor brief, built mobile-first from Figma', stack: 'HTML, CSS', live: 'https://helpful-bublanina-545078.netlify.app/', code: 'https://github.com/JAldo1980/elearning-landing-page' },
  { name: 'Music app landing page', note: 'Frontend Mentor brief, built mobile-first from Figma', stack: 'HTML, CSS', live: 'https://kaleidoscopic-bubblegum-a389e7.netlify.app/', code: 'https://github.com/JAldo1980/elearning-landing-page' },
  { name: 'Chore list', note: 'To-do app with local storage, dark mode and sound', stack: 'JavaScript', live: 'https://your-chore-list.netlify.app/', code: 'https://github.com/JAldo1980/chores-list' },
  { name: 'Graze-a-gram', note: 'Instagram-style feed using ES modules', stack: 'JavaScript', live: 'https://graze-a-gram.netlify.app/', code: 'https://github.com/JAldo1980/grazeagram' },
  { name: 'Art e-shop', note: 'Small WooCommerce shop', stack: 'WordPress, WooCommerce', live: 'https://snr.uel.mybluehost.me/.website_154db3e1/' },
  { name: 'Academic website', note: 'Responsive personal site for an academic', stack: 'WordPress, Elementor Pro', live: 'https://petraalderman.com/' },
]

export const contact = {
  email: 'james_codes@icloud.com',
  linkedin: 'https://www.linkedin.com/in/jamespalderman/',
  github: 'https://github.com/JAldo1980',
}

// Rapid builds: small tools prototyped quickly with AI to solve a real problem.
// Add the Netlify and GitHub links once they're live (leave as '' to hide a link).
export const rapid = [
  {
    name: 'Agency Scope Estimator',
    kind: 'Internal tool · Rapid build with AI',
    problem:
      'Agencies rebuild the same pricing spreadsheet for every proposal, and margin mistakes only show up once the work is done. This tool turns a brief into a fixed-price estimate in a couple of minutes.',
    features: [
      'Pick scope from 30 services across strategy, SEO, paid media, content, web and custom builds',
      'Rate card with day or hourly rates, seniority multipliers, contingency, PM time and rush fees',
      'Monthly retainer budget with a recommended split of hours across services and the team',
      'Live price, cost and margin, plus a client summary to copy, email or print',
    ],
    decided: [
      'The service list and how each one is priced',
      'Pricing rules: ad spend at cost, rush fees on projects only, PM time scaling with delivery',
      'Clients never see cost or margin',
      'Accessible design: Atkinson Hyperlegible type, WCAG AA colours',
    ],
    aiHelped: [
      'Turning the pricing rules into JavaScript',
      'First-pass layout and responsive CSS',
      'Drafting the client summary text, which I then rewrote',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Built with Claude'],
    image: '/work/estimator.webp',
    live: 'https://agency-scope-estimator.netlify.app/',
    code: 'https://github.com/JAldo1980/agency-scope-estimator',
  },
]
