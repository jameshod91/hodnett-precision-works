# Hodnett Precision Works Website

This is a simple static website ready for GitHub Pages.

## Files
- `index.html` — main website
- `styles.css` — design and layout
- `script.js` — mobile menu and current year

## Before publishing
Open `index.html` and replace:

`YOUR-EMAIL-HERE`

with the email address you want customers to use for quote requests.

## Publish on GitHub Pages
1. Sign in to GitHub.
2. Create a new repository, for example: `hodnett-precision-works`
3. Upload `index.html`, `styles.css`, and `script.js` to the repository.
4. Open the repository's **Settings**.
5. Click **Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Choose the `main` branch and `/ (root)`.
8. Save.
9. GitHub will provide your website address after deployment.

## Add your own project photos
The gallery currently uses built-in sample placeholders so there are no missing images.
Later, create an `images` folder and replace the gallery placeholder blocks with real `<img>` tags.

Example:

```html
<img src="images/my-cnc-sign.jpg" alt="Custom CNC carved wood sign">
```
