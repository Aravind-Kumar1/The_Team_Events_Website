import Link from "next/link";
import { useRouter } from "next/router";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";



export default function Header() {
  const { isSignedIn, user } = useUser();
  const router = useRouter(); // Get current route

  // Scroll to Contact Section if on Home Page
  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    if (router.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact"); // Navigate to home and scroll
    }
  };

  return (
    <header className="header">
      <div className="logo">
        {/* ✅ Fixed Logo Navigation */}
        <Link href="/">
          <h2 className="logo-btn" style={{ cursor: "pointer" }}>The-Team-Events</h2>
        </Link>
      </div>

      {/* Centered Navigation Links */}
      <div className="nav-container">
        <nav className="nav-links">
          <Link href="/" className={router.pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>About</Link>
          <Link href="/services" className={router.pathname === "/services" ? "active" : ""}>Services</Link>
          <Link href="/gallery" className={router.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
          <a href="#contact" onClick={handleContactClick} className={router.pathname === "/contact" ? "active" : ""}>
            Contact
          </a>
        </nav>
      </div>

      {/* Authentication / User Info */}
      <div className="auth-buttons">
        {isSignedIn ? (
          <div className="user-info">
            <span className="wave">👋</span>
            <span className="username">Hi, {user?.firstName}!</span>
            <UserButton />
          </div>
        ) : (
          <>
            <SignInButton mode="modal">
              <button className="login-btn">Login</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="signup-btn">Sign Up</button>
            </SignUpButton>
          </>
        )}
      </div>
    </header>
  );
}
