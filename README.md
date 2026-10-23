# Md Shajalal – personal website

Live at https://md-shajalal.github.io

## Where to change things

| To change…                         | Edit this file           |
|------------------------------------|--------------------------|
| Name, photo, emails, profile links | `data/profile.js`        |
| Which sections show, and order     | `data/profile.js` (SECTIONS list) |
| About me, research interests       | `data/about.js`          |
| News                               | `data/news.js`           |
| Publications                       | `data/publications.js`   |
| Research projects                  | `data/projects.js`       |
| Experience, education, languages   | `data/experience.js`     |
| Awards and scholarships            | `data/awards.js`         |
| Teaching and students              | `data/teaching.js`       |
| Program committees, reviewing, talks | `data/service.js`      |
| Dataset and resource links         | `data/resources.js`      |
| Colors, fonts, design              | `css/style.css` (top of file) |

You normally don't need to touch `index.html` or `js/site.js`.

## How to edit on GitHub

1. Open the file, click the pencil icon.
2. Make the change. Copy an existing line and edit it, keeping the quotes and the comma at the end.
3. Click **Commit changes**. The site updates in 1–2 minutes (refresh with Cmd + Shift + R).

If a section disappears after an edit, there is a typo in that section's file
(usually a missing quote, comma or bracket). Undo the last change or check that line.

## Photo and files

Upload your photo to `images/` and your CV to `files/`, then set
`photo: "images/photo.jpg"` and `cv: "files/your_cv.pdf"` in `data/profile.js`.
