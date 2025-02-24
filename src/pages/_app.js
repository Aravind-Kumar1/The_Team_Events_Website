import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useRouter } from "next/router";
import Head from "next/head";  


import "../styles/global.css"; 
import "../styles/About/abouthero.css"; // Add other necessary global styles
import "../styles/About/missionvision.css";
import "../styles/About/team.css";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const publicPages = ["/", "/login", "/signup"]; 

  return (
    <ClerkProvider publishableKey={clerkKey} navigate={(to) => router.push(to)}>
      <Head>
        <title>The Team Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        {publicPages.includes(router.pathname) ? <Component {...pageProps} /> : <RedirectToSignIn />}
      </SignedOut>
    </ClerkProvider>
  );
}
