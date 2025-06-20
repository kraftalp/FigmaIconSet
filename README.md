# 🧰 Open Icon Library – SVG Asset Repo

This repository contains the **open source SVG icon assets** used in the [Open Icon Library Figma Plugin](https://www.figma.com/community/plugin/OPEN-PLUGIN-LINK).

> 💡 All icons are sourced from open icon libraries like [Feather Icons](https://feathericons.com), [Bootstrap Icons](https://icons.getbootstrap.com), and others.

---

## 📁 Folder Structure

```
icons/
├── feather/
│   ├── home.svg
│   ├── user.svg
├── bootstrap/
│   ├── camera.svg
│   ├── alarm.svg
```

Each icon is a clean, minimalist **SVG file** optimized for use in design tools.

---

## 🔗 How to Use in Figma Plugin

In your Figma plugin code, load icons from this repo like so:

```js
const icons = [
  {
    name: "home",
    path: "https://raw.githubusercontent.com/kraftalp/open-icon-library-assets/main/icons/feather/home.svg"
  },
  ...
];
```

This ensures lightweight and dynamic icon loading over CDN.

---

## 📜 License

All icons are shared under their respective open licenses:
- [Feather Icons – MIT](https://github.com/feathericons/feather/blob/master/LICENSE)
- [Bootstrap Icons – MIT](https://github.com/twbs/icons/blob/main/LICENSE.md)

You can use, remix, and redistribute freely.

---

## 👨‍💻 Maintainer

**Created with ❤️ by [kraftalp](https://yourportfolio.com)**  
Feel free to star 🌟 or contribute if you'd like to expand the library.
