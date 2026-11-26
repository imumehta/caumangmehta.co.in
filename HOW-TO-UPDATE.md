# How to update caumangmehta.co.in

Everything you see on both pages (home and profile) comes from **one file: `content.js`**.
You never need to touch `index.html`, `profile.html`, `style.css` or `site.js`.

## The easiest way: ask Claude

Open Claude and say what changed, for example:

- "Add my new Instagram reel to the website: https://www.instagram.com/reel/XXXX/"
- "Add a speaking session: Dec 2026, GST Annual Return workshop, ICAI Rajkot Branch"
- "Add certification: XYZ, issued by ABC, Jan 2027"
- "Update my website from my latest LinkedIn"

Claude edits `content.js`, checks the site and publishes it.

## Doing it yourself on GitHub (about 2 minutes, from phone or laptop)

1. Open **github.com/imumehta/caumangmehta.co.in** and click **content.js**.
2. Click the **pencil icon** (Edit).
3. Change the text **between the quotes**. Keep the quotes, commas and brackets exactly as they are.
4. Click **Commit changes** → **Commit changes**.
5. Wait about 1 minute, then refresh the website.

If the page looks broken after a change, a comma or quote is usually missing.
Open the file's **History** on GitHub and restore the previous version, or ask Claude to fix it.

## What to edit for common updates

| You want to… | Edit this part of `content.js` | Copy this pattern |
|---|---|---|
| Show a new Instagram post | `instagram` → `posts` | Paste the post's link at the **top** of the list: `"https://www.instagram.com/reel/XXXX/",` |
| Add a talk or session | `speaking` | `{ date: "Dec 2026", title: "Session title", org: "Organiser" },` (add `img: "img/photo.jpg"` for a photo) |
| Add a certification | `certifications` | `{ title: "Course name", org: "Issued by", dates: "Jan 2027" },` |
| Add a milestone | `milestones` | `{ year: "2027", text: "What happened." },` |
| Change "What I'm working on" | `now` | `{ title: "Short title", text: "One sentence." },` |
| Add a LinkedIn article | `posts` | `{ tag: "Topic", title: "Title", summary: "One or two lines.", url: "https://..." },` |
| Add a photo to the gallery | `gallery` | Upload the photo into the `img` folder first, then add `{ src: "img/name.jpg", caption: "Caption" },` |
| Change your note, quote or summary | `note`, `quote`, `summary` | Edit the sentences in place |

Also change `lastUpdated` at the top to today's date.

## Things that update by themselves

- **Tools:** read live from the Tools table in the `ca-toolkit` README. Add a tool there and it appears on both pages, and the tool count goes up.
- **Year in the footer.**

## Uploading a new photo

On GitHub, open the `img` folder → **Add file** → **Upload files** → drop the photo → **Commit changes**.
Use a short name with no spaces, e.g. `techsmart-2026.jpg`. Photos around 1600 px wide or smaller load fastest.

## The profile page as a PDF

Open **caumangmehta.co.in/profile.html** → **Download PDF** → choose **Save as PDF**.
It prints as a clean A4 CV, without the menu and buttons.
