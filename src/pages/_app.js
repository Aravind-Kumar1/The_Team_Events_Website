import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useRouter } from "next/router";
import "../styles/global.css";

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const publicPages = ["/", "/login", "/signup"]; 

  return (
    <ClerkProvider publishableKey={clerkKey} navigate={(to) => router.push(to)}>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        {publicPages.includes(router.pathname) ? <Component {...pageProps} /> : <RedirectToSignIn />}
      </SignedOut>
    </ClerkProvider>
  );
}
