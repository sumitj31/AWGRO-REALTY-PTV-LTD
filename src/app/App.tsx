import { useState } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import awgroLogoNavbar from "../imports/awgro_logo.png";
import awgroLogoFooter from "../imports/awgro_logo2.png";
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
  { icon: Lightbulb, label: "Entrepreneurship" },
  { icon: BookOpen, label: "Learning" },
  { icon: Shield, label: "Trust" },
  { icon: Users, label: "Teamwork" },
  { icon: Award, label: "Professionalism" },
  { icon: Eye, label: "Transparency" },
  { icon: TrendingUp, label: "Growth" },
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

// ─── Header ────────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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
          className="flex items-center"
        >
          <img
            src={awgroLogoNavbar}
            alt="Awgro Realty"
            className="h-10 w-auto object-contain"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          <button
            type="button"
            onClick={() => scrollToSection("vision")}
            className="text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Vision & Mission
          </button>

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

        {/* <a
          href="#"
          className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
        >
          Visit Main Website
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a> */}
        <a
          href="#apply"
          className="sm:hidden bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-lg"
        >
          Apply Now
        </a>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F8F6F0]">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      {/* <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/[0.04] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-7">
              <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span className="text-accent text-[12px] font-bold uppercase tracking-wide">
                Ahmedabad & Gandhinagar · Associate Partner Program
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-primary leading-[1.08] tracking-[-0.02em] mb-6">
              Start and Build Your Own{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Real Estate Business</span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full bg-accent" />
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              <b>Awgro Realty Pvt. Ltd.</b> is building a new generation of{" "}
              <b>Real Estate Entrepreneurs</b> across Ahmedabad and Gandhinagar.
            </p>

            <div className="flex flex-wrap gap-3 mb-9">
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

            <div className="flex flex-wrap gap-2">
              {["Training", "Systems", "Network", "Growth"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted ring-1 ring-accent/20">
              <img
                src="https://images.unsplash.com/photo-1781246212288-7fa538344718?w=700&h=500&fit=crop&auto=format"
                alt="Young real estate professionals collaborating in a modern office"
                className="w-full h-64 sm:h-80 lg:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent" />

              {/* Floating stat */}
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
                  {/* <div className="flex -space-x-2">
                    {["#C9A84C", "#0D1B2A", "#8B7355", "#4A6741", "#C97A3A"].map((c, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-card flex-shrink-0"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div> */}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-2xl bg-accent/12 -z-10" />
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-xl bg-primary/5 -z-10" />
          </div>
        </div>
      </div>

      <a
  href="#apply"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("apply");
            }}
  className="fixed right-6 bottom-6 z-50 bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
  Become Associate <ArrowRight className="w-5 h-5 flex" />
</a>

    </section>
  );
}

// ─── Positioning ───────────────────────────────────────────────────────────────
function Positioning() {
  return (
    <section id="vision" className="py-20 md:py-28 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel text="The Associate Partner Model" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight">
            Our goal is simple:
          </h2>
        </div>

        <div className="border-l-[3px] border-accent pl-8 md:pl-12 mb-14 max-w-3xl mx-auto">
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

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <div className="bg-[#F8F6F0] rounded-2xl p-6 border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-bold text-primary text-[15px] mb-2">
              Our Vision
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To create India's most trusted community of real estate
              entrepreneurs, starting with a network of 100+ successful
              Associate Partners across Ahmedabad and Gandhinagar. Our vision is
              to make{" "}
              <b>
                real estate entrepreneurship accessible, professional, and
                scalable
              </b>{" "}
              for the right individuals.
            </p>
          </div>
          <div className="bg-[#F8F6F0] rounded-2xl p-6 border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-bold text-primary text-[15px] mb-2">
              Our mission
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To empower individuals to start, build, and grow their own real
              estate business through professional training, proven systems,
              technology, marketing support, and a strong network. Provide
              practical knowledge about the{" "}
              <b>Ahmedabad and Gandhinagar real estate markets</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────────────────────
function Benefits() {
  return (
    <section id="promise" className="py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel text="Our Promise" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight max-w-2xl mx-auto">
            You Build the Business. We Build the System That Helps You Grow.
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-5 mb-16 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-7 border border-border shadow-sm">
            <p className="text-[14px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
              You Bring
            </p>
            <ul className="space-y-3">
              {[
                "Your Ambition",
                "Your Hard Work",
                "Your Network",
                "Your Commitment",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary rounded-2xl p-7 shadow-lg">
            <p className="text-[14px] font-bold text-secondary uppercase tracking-[0.2em] mb-4">
              We Provide
            </p>
            <ul className="space-y-3">
              {[
                "Training",
                "Knowledge",
                "Systems",
                "Technology",
                "Marketing Support",
                "Business Ecosystem",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-primary-foreground/85"
                >
                  <div className="w-4 h-4 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Six icon cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5  transition-all group cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/5 group-hover:bg-primary flex items-center justify-center mb-4 transition-colors">
                <Icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-bold text-primary text-[15px] mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Journey timeline ──────────────────────────────────────────────────────────
function Journey() {
  return (
    <section id="dream" className="py-20 md:py-28 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel text="Our Dream" />
          <h2 className="text-3xl sm:text-4xl md:text-[1.5rem] mb-4 font-extrabold text-primary leading-tight">
            From 1 Associate Partner to 100 Real Estate Entrepreneurs
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-[1.5rem] mb-4 font-extrabold text-primary leading-tight">
            From 100 Entrepreneurs to 1 Powerful Real Estate Community.
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-[1.5rem] mb-4 font-extrabold text-primary leading-tight">
            From Ahmedabad & Gandhinagar to a Larger Real Estate Network.
          </h2>
        </div>

        {/* Desktop horizontal timeline
        <div className="hidden md:grid grid-cols-6 gap-3 relative">
          <div className="absolute top-[29px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-accent via-accent/50 to-accent/20" />
          {JOURNEY.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div
                className={clsx(
                  "relative z-10 w-[62px] h-[62px] rounded-2xl flex flex-col items-center justify-center mb-5 border-2 transition-all",
                  i < 2
                    ? "bg-primary border-primary shadow-lg shadow-primary/25"
                    : i < 4
                    ? "bg-accent/15 border-accent"
                    : "bg-[#F8F6F0] border-border"
                )}
              >
                <span
                  className={clsx(
                    "text-[10px] font-bold leading-none mb-1",
                    i < 2 ? "text-accent/70" : "text-muted-foreground"
                  )}
                >
                  {s.num}
                </span>
                <span
                  className={clsx(
                    "text-sm font-extrabold leading-none",
                    i < 2 ? "text-primary-foreground" : "text-primary"
                  )}
                >
                  {s.label}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div> */}

        {/* Mobile vertical timeline */}
        {/* <div className="md:hidden">
          {JOURNEY.map((s, i) => (
            <div key={s.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={clsx(
                    "w-12 h-12 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border-2",
                    i < 2
                      ? "bg-primary border-primary"
                      : i < 4
                        ? "bg-accent/15 border-accent"
                        : "bg-[#F8F6F0] border-border",
                  )}
                >
                  <span
                    className={clsx(
                      "text-[9px] font-bold leading-none mb-0.5",
                      i < 2 ? "text-accent/70" : "text-muted-foreground",
                    )}
                  >
                    {s.num}
                  </span>
                  <span
                    className={clsx(
                      "text-xs font-extrabold leading-none",
                      i < 2 ? "text-primary-foreground" : "text-primary",
                    )}
                  >
                    {s.label}
                  </span>
                </div>
                {i < JOURNEY.length - 1 && (
                  <div className="w-px flex-1 my-2 bg-gradient-to-b from-accent/50 to-accent/10 min-h-[2rem]" />
                )}
              </div>
              <div
                className={clsx(
                  "flex-1 pt-2.5",
                  i < JOURNEY.length - 1 ? "pb-5" : "pb-0",
                )}
              >
                <p className="text-sm font-semibold text-primary mb-0.5">
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

// ─── Campaign (dark) ────────────────────────────────────────────────────────────
function Campaign() {
  return (
    <section
      id="partner-mission"
      className="py-20 md:py-32 relative overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/90 via-[#0D1B2A]/70 to-[#0D1B2A]/95" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
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
              <span className="text-white/70">One Powerful Network.</span>
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
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary text-[11px] font-bold uppercase tracking-[0.2em]">
                The Entrepreneur Journey
              </span>
            </div>
            <div className="relative pl-7">
              <div className="absolute left-[8px] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-accent/40 to-white/5" />
              <div className="space-y-3">
                {LADDER.map((item, i) => {
  const isGoal = i === -1;

  return (
    <div key={item} className="flex items-center gap-3 group">
      {/* Circle */}
      <div
        className={clsx(
          "w-[18px] h-[18px] rounded-full border-2 flex-shrink-0 relative z-10 transition-all duration-300",
          isGoal
            ? "bg-accent border-accent shadow-md shadow-accent/40 group-hover:bg-accent group-hover:border-accent"
            : "bg-white/5 border-white/15 group-hover:bg-accent group-hover:border-accent group-hover:shadow-md group-hover:shadow-accent/40"
        )}
      />

      {/* Content */}
      <div
        className={clsx(
          "flex-1 px-4 py-2.5 rounded-xl border transition-all duration-300",
          isGoal
            ? "bg-accent/15 border-accent/40 group-hover:bg-accent/15 group-hover:border-accent/40"
            : "bg-white/[0.03] border-white/5 group-hover:bg-accent/15 group-hover:border-accent/40"
        )}
      >
        <span
          className={clsx(
            "text-sm font-semibold transition-colors duration-300",
            isGoal
              ? "text-accent"
              : "text-white/75 group-hover:text-accent"
          )}
        >
          {item}
        </span>
      </div>

      {/* Star only for first item */}
      {isGoal && (
        <Star className="w-4 h-4 text-accent flex-shrink-0" />
      )}
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
    <section id="core-values" className="py-20 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
                "rounded-2xl p-5 border border-border bg-[#F8F6F0] flex flex-col items-center text-center gap-3 hover:-translate-y-0.5 hover:shadow-md transition-all cursor-default",
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
    <section id="faq" className="py-20 md:py-28 bg-[#F8F6F0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
    <section id="apply" className="py-20 md:py-28 bg-card">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-accent text-[12px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 mb-4">
              Contact us
            </span>
            <div className="bg-primary rounded-t-2xl px-8 pt-8 pb-7 text-center relative overflow-hidden">
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
            <div className="bg-card rounded-b-2xl border border-t-0 border-border shadow-xl p-7 md:p-8">
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
    { label: "Vision & Mission", id: "vision" },
    { label: "Promise", id: "promise" },
    { label: "Dream", id: "dream" },
    { label: "Partner Mission", id: "partner-mission" },
    { label: "Core Values", id: "core-values" },
    { label: "FAQs", id: "faq" },
  ];

  return (
    <footer className="bg-[#F8F6F0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12 py-14 md:py-16">

          {/* Brand */}
          <div className="max-w-sm">
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
              className="inline-flex items-center mb-5"
            >
              <img
                src={awgroLogoFooter}
                alt="Awgro Realty"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-primary text-sm leading-relaxed max-w-xs">
              Building a community of real estate entrepreneurs across
              Ahmedabad and Gandhinagar.
            </p>

            <div className="flex items-center gap-2 mt-6 text-sm text-primary">
              <MapPin className="w-4 h-4 text-primary" />
              Ahmedabad & Gandhinagar
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary mb-5">
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
                className="inline-flex items-center gap-2 border-2 border-[#25D366] text-[#25D366] font-semibold px-5 py-3.5 rounded-xl hover:bg-[#25D366]/8 transition-all text-sm sm:text-base"
              >
                <WA />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border border-accent/25 bg-accent/[0.07] rounded-2xl p-6 md:p-7 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-primary">
                Ready to build your own real estate business?
              </h3>

              <p className="text-sm text-primary mt-1.5">
                Take the first step toward becoming an Awgro Associate Partner.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("apply")}
              className="inline-flex items-center gap-2 bg-accent text-secondary font-bold px-6 py-3 rounded-xl hover:bg-accent/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 whitespace-nowrap"
            >
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} Awgro Realty Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>

              <span className="text-white/15">·</span>

              <button
                type="button"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </button>

              <span className="text-white/15">·</span>

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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Positioning />
      <Benefits />
      <Journey />
      <Campaign />
      <Eligibility />
      <ValuesSection />
      <FAQ />
      <ConversionForm
        form={form}
        set={set}
        onSubmit={onSubmit}
        submitted={submitted}
      />
      <Footer />
      <StickyMobileCTA />
      <div className="h-16 sm:hidden" aria-hidden />
    </div>
  );
}
