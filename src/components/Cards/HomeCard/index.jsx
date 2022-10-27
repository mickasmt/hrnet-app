import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ data }) {
  return (
    <Link to={data.href} className="group">
      <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded bg-lime-600 p-2 text-white">
          {data.icon}
        </span>

        <h3 className="mt-2.5 text-lg font-medium text-gray-900">
          {data.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {data.description}
        </p>

        <div
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lime-700"
        >
          Find out more
        </div>
      </article>
    </Link>
  );
}

export default HomeCard;
