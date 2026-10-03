# Bonam Gokul Venkat — Portfolio

Personal portfolio for backend engineering work, team-built applications, and AI research. Gokul is a 2026 B.Tech AI & Data Science graduate and a Software Engineering Intern at Saptarishi Solutions (Dec 2025–present), contributing to Java/Spring Boot backend systems. The portfolio targets entry-level Backend Software Engineer and backend-focused full-stack roles.

## Stack and routes

Built with Next.js, React, TypeScript, and Tailwind CSS.

- `/` — profile, experience, selected work, research, and contact links
- `/work/rex` — production employee-expense backend contributions
- `/work/luxora` — team-built real-estate marketplace case study
- `/research/agentic-ids` — UNSW-NB15 intrusion detection research
- `/work/sck` — team-built wellness platform case study
- `/resume.pdf` — downloadable resume asset

## Local development

Use a supported Node.js version for the installed Next.js release, then:

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. For a production check, run `npx tsc --noEmit`, `npx eslint .`, and `npm run build`; `npm run start` serves the build.

## Deployment and site URL

Set `NEXT_PUBLIC_SITE_URL` to the actual public origin of the deployment, for example `https://your-deployment.example` (no path). The value supplies `metadataBase`, canonical and Open Graph URLs, `sitemap.xml`, and the sitemap reference in `robots.txt`. Without it, these URLs use `http://localhost:3000` for local development. Set the variable in the hosting provider before the production build; replace it if the public origin changes. No custom domain is assumed.

## Content and accessibility

REX is a proprietary, team-maintained system. Its case study describes permitted contributions and uses a non-confidential architecture illustration; it does not publish internal code or records. Other case studies distinguish direct work from team ownership. Research metrics describe benchmark evaluation, not live security performance. Keep future edits grounded in the underlying project or paper and avoid treating stored product content as independently verified facts.

The site includes semantic headings and landmarks, descriptive image text, visible keyboard focus, and mobile navigation with Escape handling. Review these behaviors and horizontal overflow at mobile widths before release.
