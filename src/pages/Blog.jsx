import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { TextLogo } from "../components/TextLogo";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogCard } from "../components/BlogCard";
import { blogPosts } from "../data/blogPosts";
import { TAG_ACTIVE } from "../utils/tag-styles";
import { TAG_INACTIVE } from "../utils/tag-styles";

const ALL_TAGS = [
  "LeetCode",
  "Data Engineering",
  "Thoughts",
  "Reading Notes",
  "Career",
];

const normalizeTags = (tags) =>
  tags.flatMap((t) => t.split(",").map((s) => s.trim())).filter(Boolean);

export const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const filtered = activeTag
    ? blogPosts.filter((post) => normalizeTags(post.tags).includes(activeTag))
    : blogPosts;

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const handleTagClick = (tag) => {
    if (activeTag === tag) {
      setSearchParams({});
    } else {
      setSearchParams({ tag });
    }
  };

  return (
    <>
      <header className="w-full sticky top-0 z-50 flex justify-between items-center py-4 lg:px-18 px-4">
        <Link to="/">
          <TextLogo menuOpen={menuOpen} />
        </Link>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-gray-900 mb-2">
          Blog
        </h1>
        <p className="font-body text-gray-500 mb-10">
          Notes on LeetCode, data engineering, and whatever else I'm thinking
          about.
        </p>

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`text-sm px-3 py-1 rounded-full cursor-pointer border font-body transition ${
                activeTag === tag
                  ? (TAG_ACTIVE[tag] ??
                    "bg-gray-800 text-white border-gray-800")
                  : `bg-white ${TAG_INACTIVE[tag] ?? "text-gray-700 border-gray-300 hover:bg-gray-50"}`
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Post list */}
        {sorted.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {sorted.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="font-body text-gray-500">
            No posts found for this tag.
          </p>
        )}
      </main>

      <Footer />
    </>
  );
};
