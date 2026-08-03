"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = ["about", "news", "publication"];
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      const scrollMarker = window.innerHeight * 0.35;
      const activeId = sectionIds.reduce((currentId, sectionId) => {
        const section = document.getElementById(sectionId);
        return section && section.getBoundingClientRect().top <= scrollMarker
          ? sectionId
          : currentId;
      }, "about");

      setActiveSection(activeId);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-5">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
            <Image
              src="/profile.png"
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3">
          Teeratham &#123;<mark className="text-blue-900"style={{background:"none"}}>TJ</mark>&#125; Vitchutripop
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-blue-500 text-blue-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-blue-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-blue-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
          {[
            { id: "about", label: "🤖 BIO" },
            { id: "news", label: "📢 News" },
            { id: "publication", label: "📄 Publications" },
          ].map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={`inline-flex items-center rounded-md px-2 py-1 text-xs transition-colors duration-300 ${
                activeSection === item.id
                  ? "bg-[#E8DFC9] text-blue-900"
                  : "text-zinc-500 hover:bg-[#E8DFC9]/60 hover:text-blue-900"
              }`}
            >
              <span className="tracking-wider uppercase">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} />
            {aboutMe.email}
          </a>
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} />
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} />@{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
