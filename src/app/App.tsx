import { useEffect, useRef, useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import awgroLogoNavbar from "../imports/awgro_logo.png";
import awgroLogoFooter from "../imports/awgro_logo2.png";
import missionlogo from "../imports/ourmissionimage.jpg";
import visionlogo from "../imports/ourvisionimage.jpg";
import dream1 from "../imports/dream1.jpg";
import dream2 from "../imports/dream2.jpg";
import dream3 from "../imports/dream3.jpg";
import hero1 from "../imports/hero1.jpg";
import herovideo from "../imports/herovideo.mp4";
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Laptop,
  Megaphone,
  Users,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ArrowRight,
  ArrowDown,
  Target,
  Shield,
  Eye,
  Lightbulb,
  Award,
  Share2,
  Star,
  Briefcase,
  ExternalLink,
  MapPin,
  ArrowLeft,
} from "lucide-react";
import { clsx } from "clsx";

// ─── WhatsApp icon ────────────────────────────────────────────────────────────
const WA = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[18px] h-[18px] fill-current flex-shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const BENEFITS = [
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Structured onboarding and ongoing real estate education programs.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    desc: "Deep insights into Ahmedabad and Gandhinagar real estate markets.",
  },
  {
    icon: Target,
    title: "Systems",
    desc: "Proven scripts, objection handling, and deal-closing frameworks.",
  },
  {
    icon: Laptop,
    title: "Technology",
    desc: "CRM tools, listing platforms, and business management systems.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    desc: "Brand assets, campaigns, and digital marketing resources.",
  },
  {
    icon: Share2,
    title: "Business Ecosystem",
    desc: "Developer connections, partner referrals, and professional community.",
  },
];

const JOURNEY = [
  {
    num: "01",
    label: "Join",
    desc: "Apply and complete your onboarding with Awgro Realty.",
  },
  {
    num: "02",
    label: "Learn",
    desc: "Complete structured training in real estate and business.",
  },
  {
    num: "03",
    label: "Build",
    desc: "Develop your client network and personal brand.",
  },
  {
    num: "04",
    label: "Start",
    desc: "Close your first deals with mentor and system support.",
  },
  {
    num: "05",
    label: "Grow",
    desc: "Scale your network, income, and market presence.",
  },
  {
    num: "06",
    label: "Lead",
    desc: "Build your own team and expand your enterprise.",
  },
];

const DREAM_SLIDES = [
  {
    eyebrow: "The first step",
    title: "From 1 Associate Partner to 100 Real Estate Entrepreneurs",
    desc: "We begin by helping one determined individual build the knowledge, confidence, and systems needed to create a lasting real estate business.",
    image: dream1,
  },
  {
    eyebrow: "The community",
    title: "From 100 Entrepreneurs to 1 Powerful Real Estate Community.",
    desc: "Every successful Associate Partner adds strength to a connected community where knowledge, referrals, and opportunity can move further together.",
    image: dream2,
  },
  {
    eyebrow: "The bigger vision",
    title: "From Ahmedabad & Gandhinagar to a Larger Real Estate Network.",
    desc: "Our long-term ambition is to grow a trusted real estate network that begins locally and creates meaningful opportunity across a much wider community.",
    image: dream3,
  },
];

const LADDER = [
  "Real Estate Knowledge",
  "Sales & Negotiation Skills",
  "Client Network",
  "Personal Brand",
  "Consistent Business",
  "Team & Leadership",
  "Long-Term Real Estate Enterprise",
];

const APPLY_YES = [
  "You are ambitious and want to build something of your own",
  "You are a strong communicator with a natural network",
  "You are ready to invest time in learning and growth",
  "You are a fresher, sales professional, or relationship manager",
  "You want a long-term, scalable income source",
  "You bring discipline, integrity, and accountability",
];

const APPLY_NO = [
  "You are only looking for a fixed monthly salary",
  "You are not open to learning new skills or processes",
  "You expect results without consistent, sustained effort",
  "You are looking for a short-term or part-time opportunity",
  "You are uncomfortable with performance-based earnings",
];

const VALUES = [
  {
    icon: Lightbulb,
    label: "Entrepreneurship",
    desc: "We encourage every Associate Partner to think and act like a business owner.",
  },
  {
    icon: BookOpen,
    label: "Learning",
    desc: "The real estate industry is constantly changing. Continuous learning is the foundation of long-term success.",
  },
  {
    icon: Shield,
    label: "Trust",
    desc: "We build businesses through relationships, and relationships are built through trust.",
  },
  {
    icon: Users,
    label: "Teamwork",
    desc: "Your business may be your own, but your growth becomes stronger when you have the right team and ecosystem around you.",
  },
  {
    icon: Award,
    label: "Professionalism",
    desc: "We believe real estate should be treated as a serious profession and a long-term business.",
  },
  {
    icon: Eye,
    label: "Transparency",
    desc: "We believe in honest communication with clients, developers, investors, and our Associate Partners.",
  },
  {
    icon: TrendingUp,
    label: "Growth",
    desc: "We want our Associate Partners to grow financially, professionally, and personally.",
  },
];

const FAQS = [
  {
    q: "What is Awgro Realty Pvt. Ltd.?",
    a: "Awgro Realty is building a community of real estate entrepreneurs across Ahmedabad and Gandhinagar — we help individuals start and build their own real estate business, not work as property sales employees.",
  },
  {
    q: "Who can become an Associate Partner?",
    a: "Anyone with the right attitude, discipline, and a learning mindset. You don’t need a real estate background — we train you from the ground up in market knowledge, sales, negotiation, and business development.",
  },
  {
    q: "Do I need prior real estate experience?",
    a: "No. Our training covers the real estate business from fundamentals — market understanding, projects, property investment, and customer management — up to advanced negotiation and digital marketing.",
  },
  {
    q: "What training and support will I get?",
    a: "Structured training, proven systems, technology, marketing support, and access to a professional ecosystem of projects, developers, clients, and investors — everything needed to build your own book of business.",
  },
  {
    q: "What is the '100 Associate Partner Mission'?",
    a: "It’s our founding goal — helping 100 individuals each build their own real estate business under one strong, connected network, rather than simply hiring 100 salespeople.",
  },
  {
    q: "How is this different from a regular real estate job?",
    a: "A job gives you a role. At Awgro Realty, you build your own client relationships, your own brand, and your own long-term business — with our systems, training, and network supporting you.",
  },
  {
    q: "Which cities do you currently operate in?",
    a: "We currently focus on Ahmedabad and Gandhinagar, with a longer-term vision of extending the Awgro Realty network to a larger real estate community.",
  },
];

// ─── Section label ─────────────────────────────────────────────────────────────
function SectionLabel({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <div className={clsx("h-px w-8", light ? "bg-accent/50" : "bg-accent")} />
      <span
        className={clsx(
          "text-[12px] font-bold uppercase tracking-[0.2em]",
          light ? "text-accent/80" : "text-accent",
        )}
      >
        {text}
      </span>
      <div className={clsx("h-px w-8", light ? "bg-accent/50" : "bg-accent")} />
    </div>
  );
}
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `/${id}`);
  }
};

// ─── Scroll reveal observer ─────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!elements.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavigation = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="site-header sticky top-0 z-50 bg-card/90 backdrop-blur-xl">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            window.history.replaceState(null, "", "/");
          }}
          className="flex items-center"
        >
          <img
            src={awgroLogoNavbar}
            alt="Awgro Realty"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">

          <a
            href="#core-values"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("core-values");
            }}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Core Values
          </a>

          <a
            href="#promise"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("promise");
            }}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Promise
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("vision")}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Vision & Mission
          </button>


          <a
            href="#dream"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("dream");
            }}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Dream
          </a>

          <a
            href="#partner-mission"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("partner-mission");
            }}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Partner Mission
          </a>

          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("faq");
            }}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            FAQs
          </a>

          <a
            href="#apply"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("apply");
            }}
            className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border text-primary"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <XCircle className="w-5 h-5" />
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card shadow-lg">
          <nav className="flex flex-col p-3">

            <button
              type="button"
              onClick={() => handleMobileNavigation("core-values")}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-lg"
            >
              Core Values
            </button>

            <button
              type="button"
              onClick={() => handleMobileNavigation("vision")}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-lg"
            >
              Vision & Mission
            </button>

            <button
              type="button"
              onClick={() => handleMobileNavigation("promise")}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-lg"
            >
              Promise
            </button>

            <button
              type="button"
              onClick={() => handleMobileNavigation("dream")}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-lg"
            >
              Dream
            </button>

            <button
              type="button"
              onClick={() => handleMobileNavigation("partner-mission")}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-lg"
            >
              Partner Mission
            </button>

            <button
              type="button"
              onClick={() => handleMobileNavigation("faq")}
              className="w-full text-left px-4 py-3 text-sm font-semibold text-primary hover:bg-muted rounded-lg"
            >
              FAQs
            </button>

            <button
              type="button"
              onClick={() => handleMobileNavigation("apply")}
              className="w-full text-left px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg mt-2"
            >
              Contact Us
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="hero-section relative min-h-[calc(100svh-5rem)] overflow-hidden bg-white">
      <video
  className="hero-video absolute inset-0 w-full h-full object-cover z-0"
  src={herovideo}
  autoPlay
  muted
  loop
  playsInline
  aria-hidden="true"
/>
      <div className="hero-overlay absolute inset-0 bg-black/30" aria-hidden="true" />
      {/* <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.04] pointer-events-none" /> */}

      <div className="relative z-10 mx-auto  min-h-[calc(100svh-5rem)] max-w-8xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="hero-content order-2 lg:order-1 mx-auto max-w-7xl text-center py-5" >
            <div className="hero-pill inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 my-7 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-white flex-shrink-0" />
              <span className="text-muted text-[12px] font-bold uppercase tracking-wide">
                Ahmedabad & Gandhinagar · Associate Partner Program
              </span>
            </div>

            <h1 className="hero-title text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mix-blend-difference leading-[1.04] tracking-[-0.03em] mt-8 mb-6 mx-4">
              Start and Build Your Own{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Real Estate Business</span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-accent" />
              </span>
            </h1>

            <p className="hero-copy text-base sm:text-lg text-white/90 leading-relaxed mb-8 mt-12 max-w-2xl mx-auto">
              <b>Awgro Realty Pvt. Ltd.</b> is building a new generation of{" "}
              <b>Real Estate Entrepreneurs</b> across Ahmedabad and Gandhinagar.
            </p>

            <div className="hero-actions flex flex-wrap justify-center gap-3 mt-12">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3.5 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Apply to Become an Associate Partner
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919099999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] font-semibold px-5 py-3.5 rounded-xl hover:bg-[#25D366]/8 transition-all text-sm sm:text-base"
              >
                <WA />
                Chat on WhatsApp
              </a>
            </div>

          </div>

          {/* Right: Image */}
          {/* <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted ring-1 ring-accent/20">
              <img
                src="https://images.unsplash.com/photo-1781246212288-7fa538344718?w=700&h=500&fit=crop&auto=format"
                alt="Young real estate professionals collaborating in a modern office"
                className="w-full h-64 sm:h-80 lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 bg-card/96 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Active Partners in Network
                    </p>
                    <p className="text-xl font-extrabold text-primary mt-0.5">
                      100+
                      <span className="text-sm font-semibold text-accent ml-1.5">
                        & growing
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-accent/12 -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-xl bg-primary/5 -z-10" />
          </div> */}
        </div>
      </div>

    </section>
  );
}

// ─── Positioning ───────────────────────────────────────────────────────────────
function CoreValues() {
  return (
    <section id="core-values" className="section-shell bg-white scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8 ">
        <SectionLabel text="Core Values" />
        <div className="grid gap-y-10 sm:grid-cols-2 pt-12 lg:grid-cols-4">
          {VALUES.slice(0, 4).map(({ label, desc }, index) => (
            <div key={label} className="reveal value-item group px-6 lg:border-l lg:border-border lg:first:border-l-0">
              <p className="text-2xl text-muted-foreground/80 leading-none mb-5">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-medium text-primary mb-4">
                {label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-3 pt-12 lg:max-w-[75%] lg:mx-auto mt-10">
          {VALUES.slice(4).map(({ label, desc }, index) => (
            <div key={label} className="reveal value-item group px-6 lg:border-l lg:border-border lg:first:border-l-0">
              <p className="text-2xl text-muted-foreground/80 leading-none mb-5">
                {String(index + 5).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-medium text-primary mb-4">
                {label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AssociatePartnerModel() {
  return (
    <section className="vision-mission-section section-shell py-24 md:py-32 bg-card">
      <div className="max-w-8xl mx-auto">
        <div className="reveal text-center mb-12">
          <SectionLabel text="The Associate Partner Model" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Our goal is simple:
          </h2>
        </div>

        <div className="border-accent max-w-4xl mx-auto text-center">
          <p className="text-2xl sm:text-[1.75rem] md:text-[2rem] font-bold text-primary leading-snug mb-3">
            You build your real estate business.
          </p>

          <p className="text-2xl sm:text-[1.75rem] md:text-[2rem] font-bold text-primary leading-snug mb-3">
            We build the system that helps you{" "}
            <span className="text-accent">grow.</span>
          </p>

          <p className="text-2xl sm:text-[1.75rem] md:text-[2rem] font-bold text-primary leading-snug">
            Together, we build a stronger{" "}
            <span className="text-accent">real estate community</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const visionHeading = section.querySelector(".vision-heading");
const visionImage = section.querySelector(".vision-image");

const missionHeading = section.querySelector(".mission-heading");
const missionImage = section.querySelector(".mission-image");

    let ticking = false;

    const checkPosition = () => {
      const screenMiddle = window.innerHeight / 2;

      // VISION
if (
  visionHeading &&
  visionImage &&
  !visionImage.classList.contains("vision-image-visible")
) {
  const rect = visionHeading.getBoundingClientRect();

  if (rect.top <= screenMiddle) {
    visionImage.classList.add("vision-image-visible");
  }
}

// MISSION
if (
  missionHeading &&
  missionImage &&
  !missionImage.classList.contains("mission-image-visible")
) {
  const rect = missionHeading.getBoundingClientRect();

  if (rect.top <= screenMiddle) {
    missionImage.classList.add("mission-image-visible");
  }
}

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check once on load
    checkPosition();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="vision-mission-section py-24 md:py-32 bg-card"
    >
      <div className="max-w-8xl mx-auto">
      <SectionLabel text="Our Vision and mission" />
        <div className="grid md:grid-cols-2 max-w-8xl mx-auto -mb-20 md:-mb-24">
        
          {/* VISION CONTENT */}
          <div className="vision-content reveal flex min-h-[22rem] flex-col justify-center bg-white p-8 sm:p-12 md:aspect-square md:min-h-0 lg:p-16">
            <Briefcase className="mb-6 h-8 w-8 text-accent" />

            <h3 className="vision-heading mb-4 text-2xl font-bold text-primary sm:text-3xl">
              Our Vision
            </h3>

            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
  To create India's most trusted community of real estate entrepreneurs,
  starting with a network of 100+ successful Associate Partners across
  Ahmedabad and Gandhinagar. We envision a future where individuals have the
  opportunity to{" "}
  <b>
    build their own real estate business, client network, and professional
    identity
  </b>{" "}
  with the right support and ecosystem.
  <br />
  <br />
  Our vision is to make{" "}
  <b>
    real estate entrepreneurship accessible, professional, and scalable
  </b>{" "}
  for the right individuals by providing the knowledge, systems, technology,
  and network needed to turn their ambition into a successful long-term
  career.
</p>
          </div>

          {/* VISION IMAGE */}
          <div
  className="vision-image image-reveal aspect-square overflow-hidden bg-white mx-auto md:pr-16 md:pt-16"
>
            <img
              src={visionlogo}
              alt="Modern home representing Awgro Realty's real estate vision"
              className="h-full w-full object-cover"
            />
          </div>

          {/* MISSION IMAGE */}
          <div
            className="mission-image image-reveal order-4 aspect-square overflow-hidden bg-white mx-auto md:order-3 md:pl-16 md:pb-16"
          >
            <img
              src={missionlogo}
              alt="Professionals collaborating to represent the real estate mission"
              className="h-full w-full object-cover"
            />
          </div>

          {/* MISSION CONTENT */}
          <div className="mission-content reveal order-3 relative flex min-h-[22rem] flex-col items-end justify-center bg-white p-8 text-right sm:p-12 md:order-4 md:aspect-square md:min-h-0 lg:p-16">
            <TrendingUp className="mb-6 h-8 w-8 text-accent" />

            <h3 className="mission-heading mb-4 text-2xl font-bold text-primary sm:text-3xl">
              Our Mission
            </h3>

            <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
  To empower individuals to start, build, and grow their own real estate
  business through{" "}
  <b>
    professional training, proven systems, technology, marketing support, and
    a strong network
  </b>
  . We provide practical knowledge about the{" "}
  <b>Ahmedabad and Gandhinagar real estate markets</b>, along with the skills
  needed in sales, negotiation, communication, and business development.
  <br />
  <br />
  Our mission is to help every Associate Partner{" "}
  <b>
    build their own network, develop their personal brand, and create a
    successful long-term real estate career
  </b>{" "}
  while benefiting from the Awgro Realty ecosystem and professional support.
</p>

            <button
              type="button"
              onClick={() => scrollToSection("apply")}
              className="absolute bottom-8 right-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:bottom-12 sm:right-12 lg:bottom-16 lg:right-16"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────────────────────
function Benefits() {
  const youBring = [
    "Your Ambition",
    "Your Hard Work",
    "Your Network",
    "Your Commitment",
  ];

  const weProvide = [
    "Training",
    "Knowledge",
    "Systems",
    "Technology",
    "Marketing Support",
    "Business Ecosystem",
  ];

  const bringItemsRef = useRef<HTMLDivElement | null>(null);
  const provideItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const measureOneSet = (itemsEl: HTMLDivElement, setSize: number) => {
      // Pause animation so transform does not affect measurement
      itemsEl.style.animation = "none";
      void itemsEl.offsetWidth; // force reflow

      const children = itemsEl.children;
      if (children.length < setSize * 2) return;

      // Exact width of one full set of labels
      const first = children[0] as HTMLElement;
      const secondSetStart = children[setSize] as HTMLElement;
      const oneSetWidth = Math.round(
        secondSetStart.offsetLeft - first.offsetLeft,
      );

      // Set variable on the element that is actually animating
      itemsEl.style.setProperty("--marquee-width", `${oneSetWidth}px`);

      // Restart animation so it uses the new width
      itemsEl.style.animation = "none";
      void itemsEl.offsetWidth;
      itemsEl.style.animation = "";
    };

    const measure = () => {
      if (bringItemsRef.current) {
        measureOneSet(bringItemsRef.current, youBring.length);
      }
      if (provideItemsRef.current) {
        measureOneSet(provideItemsRef.current, weProvide.length);
      }
    };

    measure();
    const raf = requestAnimationFrame(measure);
    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 400);

    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Triple the content so small measurement errors never show a jump
  const bringLoop = [...youBring, ...youBring, ...youBring];
  const provideLoop = [...weProvide, ...weProvide, ...weProvide];

  return (
    <section
      id="promise"
      className="moving-promise-section relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        <div className="mb-16 text-center md:mb-20">
          <SectionLabel text="Our Promise" />
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-4xl md:text-5xl">
            You Build the Business.
            <br />
            We Build the System That Helps You Grow.
          </h2>
        </div>

        {/* YOU BRING */}
        <div className="moving-promise-row">
          <div className="moving-promise-label">
            <span>You Bring</span>
          </div>

          <div className="moving-promise-track moving-promise-track-forward">
            <div ref={bringItemsRef} className="moving-promise-items">
              {bringLoop.map((item, index) => (
                <div
                  key={`bring-${index}`}
                  className="moving-promise-item"
                  aria-hidden={index >= youBring.length}
                >
                  <span>{item}</span>
                  <i />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WE PROVIDE */}
        <div className="moving-promise-row moving-promise-row-right mt-8 md:mt-10">
          <div className="moving-promise-track moving-promise-track-reverse">
            <div ref={provideItemsRef} className="moving-promise-items">
              {provideLoop.map((item, index) => (
                <div
                  key={`provide-${index}`}
                  className="moving-promise-item"
                  aria-hidden={index >= weProvide.length}
                >
                  <span>{item}</span>
                  <i />
                </div>
              ))}
            </div>
          </div>

          <div className="moving-promise-label moving-promise-label-right">
            <span>We Provide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Journey timeline ──────────────────────────────────────────────────────────
function Journey() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [incomingSlide, setIncomingSlide] = useState<number | null>(null);

  useEffect(() => {
    DREAM_SLIDES.forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });
  }, []);

  const goToSlide = (nextSlide: number) => {
    if (nextSlide === activeSlide || incomingSlide !== null) return;

    const movingForward =
      (nextSlide - activeSlide + DREAM_SLIDES.length) % DREAM_SLIDES.length ===
      1;
    setSlideDirection(movingForward ? 1 : -1);
    setIncomingSlide(nextSlide);

    window.setTimeout(() => {
      setActiveSlide(nextSlide);
      setIncomingSlide(null);
    }, 150);
  };

  const changeSlide = (direction: 1 | -1) => {
    goToSlide(
      (activeSlide + direction + DREAM_SLIDES.length) % DREAM_SLIDES.length,
    );
  };

  const slide = DREAM_SLIDES[activeSlide];
  const nextSlide = incomingSlide === null ? null : DREAM_SLIDES[incomingSlide];

  const slideContent = (currentSlide: (typeof DREAM_SLIDES)[number]) => (
    <>
      <div className="dream-image aspect-square overflow-hidden bg-muted">
        <img
          src={currentSlide.image}
          alt={currentSlide.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="reveal dream-copy flex min-h-[22rem] flex-col justify-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {currentSlide.eyebrow}
        </p>
        <h3 className="max-w-xl text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
          {currentSlide.title}
        </h3>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          {currentSlide.desc}
        </p>
      </div>
    </>
  );

  return (
    <section id="dream" className="section-shell overflow-hidden bg-card py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="reveal mb-12 text-center">
          <SectionLabel text="Our Dream" />
        </div>

        <div className="relative overflow-hidden">
          <div
            className={clsx(
              "grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16",
              nextSlide &&
                (slideDirection === 1
                  ? "dream-slide-out-forward"
                  : "dream-slide-out-backward"),
            )}
          >
            {slideContent(slide)}
          </div>
          {nextSlide && (
            <div
              className={clsx(
                "absolute inset-0 grid items-center gap-10 bg-card lg:grid-cols-[1fr_1.1fr] lg:gap-16",
                slideDirection === 1
                  ? "dream-slide-in-forward"
                  : "dream-slide-in-backward",
              )}
            >
              {slideContent(nextSlide)}
            </div>
          )}
        </div>

        <div className="mt-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2" aria-label="Dream slides">
            {DREAM_SLIDES.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show dream slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={clsx(
                  "h-2 rounded-full transition-all",
                  activeSlide === index
                    ? "w-2 bg-primary"
                    : "w-2 bg-border hover:bg-accent",
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label="Previous dream slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => changeSlide(1)}
              aria-label="Next dream slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:border-primary hover:bg-muted"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Campaign (dark) ────────────────────────────────────────────────────────────
function Campaign() {
  return (
    <section
      id="partner-mission"
      className="campaign-section relative overflow-hidden py-24 md:py-32"
      style={{ background: "#0D1B2A" }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1575380591643-b2c92368dc6d?w=1400&h=700&fit=crop&auto=format)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white" />

      <div className="campaign-card relative mx-auto max-w-8xl bg-primary px-6 py-16 sm:px-10 md:px-16 md:py-24">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="reveal campaign-copy">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.2em]">
                OUR 100 ASSOCIATE PARTNER MISSION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-8">
              <span className="text-accent">100</span> Associate Partners.
              <br />
              <span className="text-accent">100</span> Real Estate Businesses.
              <br />
              <span className="text-white">One Powerful Network.</span>
            </h2>
            <p className="text-white/55 text-base leading-relaxed max-w-sm mb-10">
              We are building a community of empowered real estate entrepreneurs
              across Ahmedabad and Gandhinagar. Every partner who joins
              strengthens the entire ecosystem.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-accent text-secondary font-bold px-7 py-3.5 rounded-xl hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20"
            >
              Join the Network
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Growth ladder (Enterprise at top = goal) */}
          <div className="reveal campaign-ladder">
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.2em]">
                The Entrepreneur Journey
              </span>
            </div>
            <div className="relative">
              <div className="space-y-0">
                {LADDER.map((item, i) => {
  return (
    <div
      key={item}
      className="flex items-center justify-between gap-4 border-b border-white/10 py-4 first:pt-0 last:border-b-0"
    >
      <span className="text-sm font-semibold text-white/75">{item}</span>
      {/* <span className="text-xs font-bold tracking-[0.18em] text-white/35">
        {String(i + 1).padStart(2, "0")}
      </span> */}
    </div>
  );
})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Eligibility ───────────────────────────────────────────────────────────────
function Eligibility() {
  // return (
  //   <section className="py-20 md:py-28 bg-[#F8F6F0]">
  //     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  //       {/* <div className="text-center mb-14">
  //         <SectionLabel text="Self-Assessment" />
  //         <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-extrabold text-primary leading-tight">
  //           Is This Opportunity Right for You?
  //         </h2>
  //       </div> */}
  //       {/* <div className="grid md:grid-cols-2 gap-5">
  //         <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
  //           <div className="bg-primary px-6 py-4 flex items-center gap-2.5">
  //             <CheckCircle2 className="w-[18px] h-[18px] text-accent flex-shrink-0" />
  //             <h3 className="font-bold text-primary-foreground text-[15px]">You should apply if…</h3>
  //           </div>
  //           <ul className="p-6 space-y-3">
  //             {APPLY_YES.map((item) => (
  //               <li key={item} className="flex items-start gap-3">
  //                 <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
  //                   <CheckCircle2 className="w-3 h-3 text-emerald-600" />
  //                 </div>
  //                 <span className="text-sm text-foreground leading-relaxed">{item}</span>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
  //           <div className="bg-muted px-6 py-4 flex items-center gap-2.5">
  //             <XCircle className="w-[18px] h-[18px] text-muted-foreground flex-shrink-0" />
  //             <h3 className="font-bold text-primary text-[15px]">This may not be right if…</h3>
  //           </div>
  //           <ul className="p-6 space-y-3">
  //             {APPLY_NO.map((item) => (
  //               <li key={item} className="flex items-start gap-3">
  //                 <div className="w-5 h-5 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
  //                   <XCircle className="w-3 h-3 text-red-400" />
  //                 </div>
  //                 <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div> */}
  //     </div>
  //   </section>
  // );
}

// ─── Values ────────────────────────────────────────────────────────────────────
function ValuesSection() {
  return (
    <section id="core-values" className="section-shell py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <SectionLabel text="OUR CORE VALUES" />
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary">
            Built on These Principles
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VALUES.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={clsx(
                "reveal value-card rounded-2xl p-5 border border-border bg-[#F8F6F0] flex flex-col items-center text-center gap-3 hover:-translate-y-1 hover:shadow-xl transition-all cursor-default",
                i === 7 ? "lg:col-start-2" : "",
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Icon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm font-bold text-primary leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  return (
    <section id="faq" className="section-shell py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center mb-12">
          <SectionLabel text="FAQ's" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
            Questions & Answers
          </h2>
        </div>
        <AccordionPrimitive.Root
          type="single"
          collapsible
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <AccordionPrimitive.Item
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              <AccordionPrimitive.Trigger className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group hover:bg-muted/40 transition-colors">
                <span className="font-semibold text-primary text-sm sm:text-[15px] leading-snug">
                  {faq.q}
                </span>
                <ChevronDown className="w-5 h-5 text-secondrary flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionPrimitive.Trigger>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-6 pb-5">
                  <div className="w-full h-px bg-border mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  );
}

// ─── Conversion form ──────────────────────────────────────────────────────────
function ConversionForm({
  form,
  set,
  onSubmit,
  submitted,
}: {
  form: Record<string, string>;
  set: (
    f: string,
  ) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  onSubmit: (e: React.FormEvent) => void;
  submitted: boolean;
}) {
  const input =
    "w-full bg-[#F8F6F0] border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent/50 transition-all";
  const label = "block text-sm font-semibold text-primary mb-1.5";

  return (
    <section id="apply" className="section-shell py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-2xl bg-primary mx-auto flex items-center justify-center mb-6 shadow-xl">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-extrabold text-primary mb-3">
              Application Received!
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
              Thank you for applying. Our team will review your application and
              reach out within 1–2 business days to schedule your introductory
              call.
            </p>
          </div>
        ) : (
          <>
            {/* Form header */}
            <SectionLabel text="Contact us" />
            <div className="form-header bg-primary rounded-t-3xl px-8 pt-10 pb-8 text-center relative overflow-hidden">
              {/* <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" /> */}
              <div className="flex items-center justify-center gap-2.5 mb-4"></div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-foreground leading-tight mb-2">
                Ready to Start Your Real Estate Business?
              </h2>
              <p className="text-primary-foreground/50 text-sm">
                Complete the form below and our team will be in touch.
              </p>
            </div>

            {/* Form body */}
            <div className="form-body bg-card rounded-b-3xl border border-t-0 border-border shadow-2xl p-7 md:p-10">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Full Name *</label>
                    <input
                      className={input}
                      type="text"
                      value={form.fullName}
                      onChange={set("fullName")}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className={label}>Mobile / WhatsApp Number *</label>
                    <input
                      className={input}
                      type="tel"
                      value={form.mobile}
                      onChange={set("mobile")}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>City *</label>
                    <select
                      className={input}
                      value={form.city}
                      onChange={set("city")}
                      required
                    >
                      <option value="">Select your city</option>
                      <option>Ahmedabad</option>
                      <option>Gandhinagar</option>
                      <option>Other (nearby area)</option>
                    </select>
                  </div>
                  <div>
                    <label className={label}>Current Profession *</label>
                    <input
                      className={input}
                      type="text"
                      value={form.profession}
                      onChange={set("profession")}
                      placeholder="e.g. Sales Executive, Fresher"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={label}>Real Estate Experience</label>
                  <select
                    className={input}
                    value={form.experience}
                    onChange={set("experience")}
                  >
                    <option value="">Select your experience level</option>
                    <option>No experience (complete fresher)</option>
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3+ years</option>
                  </select>
                </div>

                <div>
                  <label className={label}>
                    Why do you want to build a real estate business? *
                  </label>
                  <textarea
                    className={clsx(input, "resize-none")}
                    value={form.reason}
                    onChange={set("reason")}
                    rows={3}
                    placeholder="Share your motivation in a few sentences…"
                    required
                  />
                </div>

                <div>
                  <label className={label}>Preferred Call Time</label>
                  <select
                    className={input}
                    value={form.callTime}
                    onChange={set("callTime")}
                  >
                    <option value="">Select a preferred time</option>
                    <option>Morning (9 AM – 12 PM)</option>
                    <option>Afternoon (12 PM – 4 PM)</option>
                    <option>Evening (4 PM – 7 PM)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5 text-base flex items-center justify-center gap-2 mt-1"
                >
                  Apply to Become an Associate Partner
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <p className="text-center text-md text-muted-foreground mt-5 leading-relaxed">
                Your information is confidential and will only be used to
                evaluate your application.
                <br />
                We do not share your details with any third party.
              </p>

              <div className="mt-6 pt-5 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Prefer to speak with someone first?
                </p>
                <a
                  href="https://wa.me/919099999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#25D366]/8 transition-all text-md"
                >
                  <WA />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const footerNav = [
    { label: "Core Values", id: "core-values" },
    { label: "Vision & Mission", id: "vision" },
    { label: "Promise", id: "promise" },
    { label: "Dream", id: "dream" },
    { label: "Partner Mission", id: "partner-mission" },
    { label: "FAQs", id: "faq" },
  ];

  return (
    <footer className="site-footer bg-[#F8F6F0] text-primary">
      <div className="mx-auto max-w-8xl px-8 text-center sm:px-12 lg:px-20">

        {/* Main Footer */}
        <div className="grid gap-16 py-14 text-center md:grid-cols-3 md:justify-between md:text-left md:py-16">

          {/* Get started and brand */}
          <div className="flex min-h-[6rem] flex-col items-center md:items-start">
            <div className="max-w-sm">
              <h3 className="mb-5 text-xl font-bold text-primary">
                Ready to build your own real estate business?
              </h3>
              <p className="mt-1.5 text-sm text-primary">
                Take the first step toward becoming an Awgro Associate Partner.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("apply")}
                className="mt-6 inline-flex items-center gap-2 bg-accent px-6 py-3 font-bold text-secondary rounded-xl hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 whitespace-nowrap"
              >
                Become a Partner
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 md:justify-self-end md:pt-1">
            {/* Quick Links */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Quick Links
              </h3>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-center md:text-left">
                {footerNav.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-center text-sm text-primary hover:text-accent transition-colors md:text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Get In Touch
              </h3>

              <div className="space-y-3">
                <p className="text-sm text-primary">
                  Ahmedabad & Gandhinagar
                </p>

                <p className="text-sm text-primary">
                  Associate Partner Program
                </p>

                <a
                  href="https://wa.me/919099999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 border-2 border-[#25D366] px-5 py-3.5 font-semibold text-[#25D366] rounded-xl hover:bg-[#25D366]/8 transition-all text-sm sm:text-base"
                >
                  <WA />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm md:justify-self-end md:text-right">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                window.history.replaceState(null, "", "/");
              }}
              className="mb-5 inline-flex"
            >
              <img
                src={awgroLogoFooter}
                alt="Awgro Realty"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="max-w-xs text-sm leading-relaxed text-primary">
              Building a community of real estate entrepreneurs across
              Ahmedabad and Gandhinagar.
            </p>

            <div className="mt-6 flex gap-2 text-sm text-primary md:justify-self-end md:text-rightAhmedabad and Gandhinagar real estate markets.">
              <MapPin className="w-4 h-4 text-primary"/>
              Ahmedabad & Gandhinagar
            </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary/50">
            <p>
              © {new Date().getFullYear()} Awgro Realty Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>

              <span className="text-primary/15">·</span>

              <button
                type="button"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </button>

              <span className="text-primary/15">·</span>

              <span>Ahmedabad · Gandhinagar</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

// ─── Sticky mobile CTA ─────────────────────────────────────────────────────────
function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-card border-t border-border shadow-2xl px-4 py-3">
      <div className="flex gap-3">
        <a
          href="#apply"
          className="flex-1 bg-primary text-primary-foreground text-sm font-bold py-3 rounded-xl text-center hover:bg-primary/90 transition-colors"
        >
          Apply Now
        </a>
        <a
          href="https://wa.me/919099999999"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-xl border-2 border-[#25D366] text-[#25D366]"
        >
          <WA />
        </a>
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  useScrollReveal();

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    city: "",
    profession: "",
    experience: "",
    reason: "",
    callTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set =
    (field: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <CoreValues />
      <AssociatePartnerModel />
      <Benefits />
      <Positioning />
      <Journey />
      <Campaign />
      {/* <Eligibility /> */}
      <FAQ />
      <ConversionForm
        form={form}
        set={set}
        onSubmit={onSubmit}
        submitted={submitted}
      />
      <Footer />
      <a
  href="#apply"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("apply");
            }}
  className="floating-cta fixed right-10 bottom-10 z-50 bg-primary text-white font-bold px-7 py-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
  Become Associate <ArrowRight className="w-5 h-5 flex" />
</a>
      <StickyMobileCTA />
      <div className="h-16 sm:hidden" aria-hidden />
    </div>
  );
}