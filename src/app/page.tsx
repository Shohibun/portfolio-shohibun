import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certificates } from "@/components/sections/certificates";
import { Organization } from "@/components/sections/organization";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { SplashScreen } from "@/components/ui/splash-screen";

/**
 * Professional Software Developer Portfolio
 * Single-Page Architecture:
 * 1. Navbar (Sticky, Theme Toggle, Nav links)
 * 2. AnimatedBackground (Drifting aurora gradient orbs & soft mesh grid)
 * 3. Hero (Animated Role Rotator, Terminal, Live Badges)
 * 4. About Me (Editorial Biography, UNEJ Cum Laude, Senyum Media & Central AI)
 * 5. Technical Skills (5 Grouped Categories)
 * 6. Featured Projects (Toko Senyum & Central AI Real Platforms)
 * 7. Work Experience (Chronological Timeline)
 * 8. Education & Bootcamps (Degree & Industry Training)
 * 9. Certifications & Honors (9 Verified Credentials with Lightbox)
 * 10. Organization & Leadership (HMIF UNEJ)
 * 11. Services (What I Can Build)
 * 12. Contact (Form with Web3Forms + Direct Channels)
 * 13. Footer (Quick Links & Copyright)
 */
export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-text-primary">
      <SplashScreen />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Organization />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
