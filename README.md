| :warning: NOTE          |
|:---------------------------|
| In order to use my app, you need to be whitelisted within my app's registry on Spotify, as this is still classified as "In Development." In order to be whitelisted, just send me the email you used to sign up with Spotify. Alternatively, you can register your own app within Spotify's developer platform, and run this code locally.    |

# Concierge
Who are the people in your life who point you in the direction of new artists, songs, and genres of music?
I am fortunate enough to have some friends who are always sharing some great music. They are usually the 
ones who introduce me to new tracks, and I am always grateful for their recommendations.

As a Spotify user, I started thinking about ways I could help people seek out their own recommendations and even 
learn about their playlists.

Introducing: Concierge. It's a tool that helps you learn more about your music. It uses your Spotify data to show 
your top tracks and artists over different time periods. You can also ask GPT to summarize that data. Soon, it will 
be able to analyze your playlists and recommend new music according to filters you can set, like genre, mood, and 
energy.

I hope you enjoy using Concierge as much as I enjoyed building it. If you have any questions or feedback, please feel 
free to reach out to me.

-- [Kevin Lizarazo](https://kevinlizarazo.com)

## About the Technology
Concierge is built with Next.js, React, and Material UI. Next Auth powers the authentication logic for this app's 
connection to Spotify and general session management. It uses Spotify's Web API to retrieve listening data and 
OpenAI's Chat API (gpt-3.5-turbo) to provide commentary. When interacting with these services, you are subject to 
their respective privacy policies. I encourage you to read them:

- Spotify's Privacy Policy: https://www.spotify.com/legal/privacy-policy/
- OpenAI's Use Case Policy: https://platform.openai.com/docs/use-case-policy


## Run this locally

You will need an .env.local file with the following:

- SPOTIFY_CLIENT_ID=\<your-key>
- SPOTIFY_CLIENT_SECRET=\<your-key>
- OPENAI_API_KEY=\<your-key>

Additionally, if you deploy on Vercel, set up the following environment variables within your project dashboard:

- SPOTIFY_CLIENT_ID=\<your-key>
- SPOTIFY_CLIENT_SECRET=\<your-key>
- OPENAI_API_KEY=\<your-key>
- NEXTAUTH_URL=\<your-project-url>
- NEXTAUTH_SECRET=\<your-key>

A quick way of generating a NEXTAUTH_SECRET is to run this in your preferred terminal:

```bash
openssl rand -base64 32
```

---

## Official Next.js Readme:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
