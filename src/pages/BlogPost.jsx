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
import { TAG_ACTIVE } from "../utils/tag-styles";
import { TAG_INACTIVE } from "../utils/tag-styles";

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

  return (
    <>
      <header className="w-full sticky top-0 flex justify-between items-center py-4 lg:px-18 px-4">
        <Link to="/">
          <TextLogo menuOpen={menuOpen} />
        </Link>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-sm font-body cursor-pointer text-gray-500 hover:text-blue-800 transition mb-10"
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
                    className={`text-xs px-2 py-1 rounded-full font-body ${TAG_ACTIVE[tag] ?? TAG_INACTIVE}`}
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
