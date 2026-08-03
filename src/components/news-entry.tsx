"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = news.images ?? [];
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  return (
    <article className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{news.date}</p>
        <h3 className="font-serif text-md mb-3 ">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-orange-600 transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
        <p className="text-sm text-zinc-600">{news.description}</p>
        {images.length > 0 && (
          <div
            className="relative mt-5 overflow-hidden rounded-lg bg-zinc-100"
            role="region"
            aria-label={`Photos for ${news.title}`}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${activeImage * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`${news.title} — photo ${index + 1} of ${images.length}`}
                  className="aspect-[16/9] w-full shrink-0 object-cover"
                />
              ))}
            </div>
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`Show photo ${index + 1}`}
                      aria-current={index === activeImage ? "true" : undefined}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === activeImage ? "bg-white" : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
