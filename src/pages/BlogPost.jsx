import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { TextLogo } from "../components/TextLogo";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { blogPosts } from "../data/blogPosts";
import { IconArrowLeft } from "@tabler/icons-react";

const postContents = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const BlogPost = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();

  const meta = blogPosts.find((p) => p.slug === slug);
  const markdown = postContents[`../posts/${slug}.md`];

  const formattedDate = meta
    ? new Date(meta.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const TAG_STYLES = {
    LeetCode: "bg-emerald-100 text-emerald-800 border border-emerald-200",
    "Data Engineering": "bg-blue-100 text-blue-800 border border-blue-200",
    Thoughts: "bg-purple-100 text-purple-800 border border-purple-200",
    "Reading Notes": "bg-amber-100 text-amber-800 border border-amber-200",
    Career: "bg-rose-100 text-rose-800 border border-rose-200",
  };
  const DEFAULT_TAG_STYLE = "bg-gray-100 text-gray-700 border border-gray-200";

  return (
    <>
      <header className="w-full sticky top-0 bg-white border-b z-50 flex justify-between items-center py-4 lg:px-18 px-4">
        <Link to="/">
          <TextLogo menuOpen={menuOpen} />
        </Link>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-sm font-body text-gray-500 hover:text-blue-800 transition mb-10"
        >
          <IconArrowLeft size={16} />
          Back to Blog
        </button>

        {!meta || !markdown ? (
          <div className="font-body text-gray-500">Post not found.</div>
        ) : (
          <>
            {/* Post header */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {meta.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${encodeURIComponent(tag)}`}
                    className={`text-xs px-2 py-1 rounded-full font-body ${TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
                {meta.title}
              </h1>
              <p className="font-body text-sm text-gray-400">{formattedDate}</p>
            </div>

            {/* Markdown content */}
            <article className="blog-content">
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {markdown}
              </ReactMarkdown>
            </article>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};
