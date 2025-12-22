# Jinming Wei personal website


## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🧹 Linting & Formatting

To keep our codebase consistent, clean, and less error-prone, we've added automated **linting** and **formatting** to the project. Here's how it works:

### ✅ Linting

Linting checks our code for potential bugs, bad practices, and violations of style rules — especially useful when working with Vue and Vuetify. It can catch things like:

- Invalid `<template>` syntax
- Incorrect prop usage
- Missing `return` in computed properties
- Deprecated or disallowed patterns

The configuration lives in [`eslint.config.js`](./eslint.config.js), where we define all the rules that shape how we want our code to look and behave.

**Important:**
Linting is now part of the GitLab CI pipeline. If you commit code that breaks the lint rules, the pipeline will fail.

To automatically fix many common issues, just run:

```bash
npm run lint:fix
```

Since the linter fixes actual issues with the code, usually you have to fix it yourself.

---

### 🎨 Formatting

We also use **Prettier** as our code formatter. While linting enforces correctness, **formatting ensures consistency** — things like indentation, spacing, quotes, etc.

This helps:

- Keep merge requests smaller and easier to review
- Avoid nitpicky code style comments in PRs
- Ensure a uniform look across the entire codebase

Formatting is also enforced in the pipeline. If your code isn't formatted correctly, the build will fail.

To fix formatting issues, run:

```bash
npm run format:fix
```
