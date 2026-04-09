import React from "react";
import { useNavigate } from "react-router-dom";

const TAG_STYLES = {
  LeetCode: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  "Data Engineering": "bg-blue-100 text-blue-800 border border-blue-200",
  Thoughts: "bg-purple-100 text-purple-800 border border-purple-200",
  "Reading Notes": "bg-amber-100 text-amber-800 border border-amber-200",
  Career: "bg-rose-100 text-rose-800 border border-rose-200",
};
const DEFAULT_TAG_STYLE = "bg-gray-100 text-gray-700 border border-gray-200";

// Handles both ["LeetCode", "Thoughts"] and ["LeetCode, Thoughts"]
const normalizeTags = (tags) =>
  tags.flatMap((t) => t.split(",").map((s) => s.trim())).filter(Boolean);

export const BlogCard = ({ slug, title, date, excerpt, tags }) => {
  const navigate = useNavigate();
  const flatTags = normalizeTags(tags);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      onClick={() => navigate(`/blog/${slug}`)}
      className="border rounded-xl shadow hover:shadow-lg transition cursor-pointer p-5 flex flex-col gap-3 bg-white"
    >
      <div className="flex flex-wrap gap-2">
        {flatTags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-2 py-1 rounded-full font-body ${TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-heading font-semibold text-lg text-gray-900 leading-snug">
        {title}
      </h3>

      <p className="font-body text-sm text-gray-600 leading-relaxed">
        {excerpt}
      </p>

      <p className="font-body text-xs text-gray-400 mt-auto">{formattedDate}</p>
    </div>
  );
};
