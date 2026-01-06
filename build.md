# Project: Forensics Europe Expo 2026 Intelligence Hub

Create a React + Vite + Tailwind CSS project based on the materials in the `/materials` folder.

## Source Materials

- `home-page-from-llm.html` - **PRIMARY REFERENCE** - This is the complete UI design. Replicate this layout exactly in React components.
- `*.md` files - Source research documents (for context, not displayed directly)
- `media/` subfolder - Contains all assets:
  - `strategy-video.mp4` - Strategy walkthrough video
  - `forensics-roadmap-poster.pdf` - Event roadmap PDF
  - `*.docx` files - Downloadable research documents

## Requirements

1. **Stack**: React 18, Vite, Tailwind CSS, Recharts for charts
2. **Single Page App**: No routing needed - one dashboard page
3. **Sections** (from HTML):
   - Header with logo, title "Forensics Europe Expo 2026", subtitle "Intelligence Hub"
   - Strategy Video section (MP4 player)
   - Roadmap Poster section (PDF embed or download link)
   - Survey Intelligence section:
     - "Organization Type" horizontal bar chart (Forensic Providers 21.31%, Lab Equipment 19.67%, etc.)
     - "Operating Region" horizontal bar chart (International 57.38%, UK National 26.23%, etc.)
     - Two stat cards: "55% have buying power over £10k" and "27.5% are decision makers"
   - Document Library section with 4 downloadable files
   - Footer

4. **Styling**: Match the HTML exactly - dark headers, clean white cards, professional look
5. **Assets**: Copy media files to `/public/media/`
6. **Responsive**: Mobile-friendly layout

## Chart Data (from HTML)

```javascript
const organizationTypes = [
  { name: 'Forensic Providers', value: 21.31 },
  { name: 'Lab Equipment', value: 19.67 },
  { name: 'Academic/Research', value: 18.03 },
  { name: 'Law Enforcement', value: 14.75 },
  { name: 'Other', value: 26.23 }
];

const operatingRegions = [
  { name: 'International', value: 57.38 },
  { name: 'UK National', value: 26.23 },
  { name: 'UK Regional', value: 16.39 }
];