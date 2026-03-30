 # 📚 CourseCard — Course Selling Platform

A modern, fully responsive course selling web application built with React, Redux Toolkit, and Tailwind CSS.

---

## 🖥️ Live Preview

> Run locally with `npm run dev` — opens at `http://localhost:5173`

 

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI Library |
| Vite | 7.x | Build Tool & Dev Server |
| Tailwind CSS | 4.x | Styling |
| Redux Toolkit | 2.x | Global State Management |
| React Redux | 9.x | Redux bindings for React |
| React Router DOM | 7.x | Client-side Routing |

---



## 🚀 Getting Started

### 1. Clone or Download

Download the zip and extract it, or clone the repo:

```bash
git clone <your-repo-url>
cd course-selling
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

 

## 🧩 State Management

Redux Toolkit is used for global state. The `geeksSlice` manages:

- `courses` — All 25 courses loaded from `data.json`
- `cartCourses` — Courses added to cart
- `wishlistCourse` — Courses saved to wishlist

---

## 📝 Custom Hooks

| Hook | Purpose |
|---|---|
| `useFetchCourseData()` | Loads courses from local data into Redux store |
| `useIsCourseExistInCart(id)` | Checks if a course is in the cart |
| `useIsCourseExistInWishlist(id)` | Checks if a course is in the wishlist |

---


## 👤 Author

**Girdhari Patel**

> Built with ❤️ using React + Vite + Tailwind CSS + Redux Toolkit

---

## 📄 License

This project is open source and available for personal and educational use.
