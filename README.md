# Wedding Invitation

Interactive digital wedding invitation deployed as a Google Apps Script web app. Dark, elegant and minimalist design featuring a live countdown, a Bible passage, ceremony and reception locations, and an RSVP form that stores responses in a Google Sheet.

## Features

- Live countdown to wedding day (Madrid time).
- Matthew 6:25–34 rendered in two columns.
- Single-photo gallery in black and white that turns to colour on hover.
- Independent cards for the ceremony and the reception, each with a Google Maps link.
- RSVP form with menu choice (meat, fish, special) and a conditional allergies field.
- Submissions saved automatically to Google Sheets.

## Tech stack

- Vanilla HTML, CSS and JavaScript.
- Google Apps Script (`HtmlService` to serve the web app, `SpreadsheetApp` to persist RSVPs).
- Typography: Cormorant Garamond, Italiana and Inter (Google Fonts).

## Deployment

1. Create a new project at [script.google.com](https://script.google.com).
2. Add two files — `Code.gs` (script) and `Index.html` (HTML) — and paste the contents of this repository.
3. Create an empty Google Sheet and copy its ID (the part between `/d/` and `/edit` in the URL).
4. Paste that ID into the `SHEET_ID` constant inside `Code.gs`.
5. **Deploy → New deployment → Web app**:
   - Execute as: *Me*.
   - Who has access: *Anyone*.
6. Authorise permissions on first run (Sheets access).
7. Share the resulting `/exec` URL with your guests.

## Customisation

To reuse this template for another wedding, replace:

- The names inside `<header class="hero">`.
- The target date in the script (`new Date('your date in ISO format')`).
- The ceremony and reception locations.
- The Bible passage or reading.
- The photo in the scripture section (`scripture-photo > img src`).
- The footer date in Roman numerals.

If you want to add an IBAN section for cash gifts, copy a `<section>` block with the `iban-box` structure and add its CSS together with the corresponding `copiarIBAN` function.

## License

Personal use. Feel free to reuse it as a starting point for your own wedding.
