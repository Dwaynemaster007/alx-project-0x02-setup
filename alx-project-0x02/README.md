# ALX Project 0x02: Components, Props and Data Fetching

A Next.js (Pages Router) + TypeScript + Tailwind CSS app from the ALX ProDev Frontend programme.

| Page | What it shows |
| --- | --- |
| `/` | Welcome page with links to the rest of the app |
| `/home` | Create posts in a modal (`PostModal`) and list them with `Card` |
| `/posts` | Posts from JSONPlaceholder, fetched with `getStaticProps` |
| `/users` | Users from JSONPlaceholder, fetched with `getStaticProps` |
| `/about` | The reusable `Button` component in different sizes and shapes |

Every page shares one `Layout` (header and footer) from `pages/_app.tsx`. If JSONPlaceholder is down at build time, the lists render empty and the pages rebuild hourly (`revalidate: 3600`).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```
