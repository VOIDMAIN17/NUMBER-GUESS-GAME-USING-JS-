# Guess My Number

**A sleek, beginner-friendly JavaScript game** — built with HTML, CSS, and JavaScript. This repository contains my first JS project: a small number-guessing game that demonstrates DOM manipulation, event handling, and simple game logic.

> **Studio:** CV16 MAIN
> **Author / Handle:** `VoidMain`

---

<!-- Hero image (replace `assets/hero.png` with your own) -->


![Hero preview](<img width="1619" height="868" alt="Screenshot 2025-08-26 160455" src="https://github.com/user-attachments/assets/108887be-28ab-4178-97ea-34988a3de301" />)

## 🎯 About

This little web game challenges players to guess a secret number between **1** and **20**. It's educational and perfect for beginners who want to learn how the DOM works and how to wire up interactive UI with vanilla JavaScript.

> Note: This is my **first JavaScript project**. It was built to teach and demonstrate — so it intentionally keeps things simple (it may not follow DRY strictly). Still, it’s a great starting point to learn how browser-based games interact with the DOM.

---

## ✨ Features

* Clean red & black UI built for a gaming vibe.
* Score & highscore tracking.
* Responsive layout with a polished hero card.
* Simple and readable JS so beginners can follow along.
* Small animations for win/lose feedback (CSS classes `.number.win` and `.number.lose`).

---

## 📁 Project Structure (suggested)

```
guess-my-number/
├─ index.html
├─ style.css
├─ script.js
├─ README.md   <-- (this file)
└─ assets/
   ├─ hero.png
   ├─ screenshot.png
   └─ preview.gif
```

Replace the placeholder images in `/assets` with your own screenshots or promotional art. Example filenames used in this README:

* `assets/hero.png` — big hero banner
* `assets/screenshot.png` — gameplay screenshot
* `assets/preview.gif` — short demo animation (optional)

---

## 🛠️ Installation & Usage

No build tools required — just open the game in your browser.

1. Clone the repo or download the ZIP.
2. Make sure the files are in one folder (`index.html`, `style.css`, `script.js`).
3. Open `index.html` in your browser (double-click or `File → Open`).

**Optional (local dev server)**

If you want a local server (for a smoother dev experience):

```bash
# using Python 3
python -m http.server 5500
# then open http://localhost:5500
```

---

## 🧩 How it works (quick overview)

* `index.html` contains the markup with all interactive class names (`.guess`, `.btn.check`, `.again`, `.number`, `.score`, `.highscore`, `.message`).
* `style.css` styles the page with the red/black theme and contains helper classes `.number.win` and `.number.lose` for animations.
* `script.js` contains the game logic: secret number generation, input handling, score updates, and DOM updates.

### Helpful snippet: toggle win / lose animation

Use this small snippet inside your game logic when the player wins or loses:

```js
// show win animation
const numberEl = document.querySelector('.number');
numberEl.classList.remove('lose');
numberEl.classList.add('win');
setTimeout(() => numberEl.classList.remove('win'), 1400);

// show lose animation
numberEl.classList.remove('win');
numberEl.classList.add('lose');
setTimeout(() => numberEl.classList.remove('lose'), 600);
```

---

## 🔧 voidMain (developer entry)

You asked for a `voidMain` entry example — here is a tiny, readable pattern you can include in `script.js` if you want an explicit project entry function:

```js
// voidMain - small entry function pattern
function voidMain() {
  // attach event listeners, initialize UI and game state
  initGame && initGame();
}

voidMain();
```

`initGame()` should be the function in your `script.js` that sets up the initial state.

---

## 🧭 Classes & Selectors (useful for scripting)

All the important classes used by the game (so your `script.js` can query them easily):

* `navbar`, `brand`, `logo`, `tag`, `nav-links`, `cta-nav`
* `hero-card`, `hero-inner`, `hero-content`, `hero-sub`, `hero-actions`, `primary`
* `again`, `number`
* `main-area`, `left`, `right`
* `guess`, `check`, `message`, `label-score`, `score`, `label-highscore`, `highscore`

Helper animation classes (toggle from JS):

* `number.win` — pulsing win effect
* `number.lose` — short shake for wrong guesses

---

## 🧑‍💻 Author & Credits

* **Author:** `VoidMain`
* **Studio:** CV16 MAIN

Thank you for checking out this project — I built it to teach others how DOM manipulation works and to practice front-end basics.

---
