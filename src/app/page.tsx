"use client"
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { useState } from "react";

export default function Home() {
  const [visibleItems, setVisibleItems] = useState(3);
  const [isLongDescriptionVisible, setIsLongDescriptionVisible] = useState(false);


  return (
    <div className="min-h-screen bg-[#FAF7EF]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-5 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section id="about">
                <p
                  className="font-serif text-m leading-relaxed text-zinc-700 [&_a]:text-orange-600 [&_a:hover]:text-blue-900"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
                {aboutMe.description_long && (
                  <>
                    {isLongDescriptionVisible && (
                      <p
                        className="mt-6 font-serif text-m leading-relaxed text-zinc-700 [&_a]:text-orange-600 [&_a:hover]:text-blue-900"
                        dangerouslySetInnerHTML={{ __html: aboutMe.description_long }}
                      />
                    )}
                    <button
                      type="button"
                      aria-expanded={isLongDescriptionVisible}
                      onClick={() => setIsLongDescriptionVisible((visible) => !visible)}
                      className="mt-6 px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 rounded-md hover:bg-orange-200 transition-colors"
                    >
                      {isLongDescriptionVisible ? "Show Less" : "More Info 🔎"}
                    </button>
                  </>
                )}
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section id="news" key={sectionName}>
                        <h2 className="font-serif text-xl tracking-wide uppercase">
                          📢 News
                        </h2>
                        <div className="h-px bg-zinc-300 mb-10 mt-2" />
                        <div className="space-y-12">
                          {newsData
                            .slice(0, visibleItems)
                            .map((news, index) => (
                              <div key={index}>
                                <NewsEntry news={news} />
                              </div>
                            ))}
                        </div>
                        {visibleItems < newsData.length && (
                          <button
                            onClick={() => setVisibleItems(prev => Math.min(prev + 3, newsData.length))}
                            className="mt-8 mr-4 px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 rounded-md hover:bg-orange-200 transition-colors"
                          >
                            Show More
                          </button>
                        )}
                        {visibleItems > 3 && (
                          <button
                            onClick={() => setVisibleItems(3)}
                            className="mt-8 px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-300 rounded-md hover:bg-orange-200 transition-colors"
                          >
                            Show Less
                          </button>
                        )}
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section id="publication" key={sectionName}>
                        <h2 className="font-serif text-xl tracking-wide uppercase">
                          📄 Publications
                        </h2>
                        <div className="h-px bg-zinc-300 mb-10 mt-2" />
                        <div className="space-y-12">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-8" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Experience
                        </h2>
                        <div className="space-y-12">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
