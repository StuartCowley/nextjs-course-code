This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Topics covered so far

- `/pages` folder structure for routing
- Dynamic routing and navigation with useRouter
- Internal navigation with `Link` from next/link
- Using `_app.js` to add a global menu
- Using CSS modules for styling
- Using `getStaticProps` so data is included in initial request to server
- Using `getStaticProps` on pages with dynamic routing, with context.params.<routeId>, plus `getStaticPaths` and fallback
- Installing mongoDB driver, creating a mongoDB cluster for backend
- Setting up a POST api route to create a collection and add documents
- Adding data to mongo via `fetch` api
- Fetching data from api in `getStaticProps`
- Filtering a collection for a single document using `findOne` method
- Programatically creating staticPaths using api IDs
- Using `ObjectId` to handle mongos `_id` object
- Adding metadata to pages using `<Head>` from `next/head`