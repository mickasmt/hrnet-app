import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Home Card Component
 * @param {array} data Array data of cards home
 * @returns {React.ReactElement}
 */
function HomeCard({ data }) {
  return (
    <Link to={data.href} className="group w-full" data-testid={`home-card`}>
      <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded bg-lime-600 p-2 text-white">
          {data.icon}
        </span>

        <h1 className="mt-2.5 text-lg font-medium text-gray-900">
          {data.title}
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {data.description}
        </p>

        <div
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-lime-700"
        >
          Go to the page
        </div>
      </article>
    </Link>
  );
}

HomeCard.propTypes = {
  /** Array of objects of cards home infos */
  data: PropTypes.shape({
    /** ID of card home info */
    id: PropTypes.number.isRequired,
    /** Icon of card home info */
    icon: PropTypes.element.isRequired,
    /** Link of card home info */
    href: PropTypes.string.isRequired,
    /** Title of card home info */
    title: PropTypes.string.isRequired,
    /** Description of card home info */
    description: PropTypes.string.isRequired,
  }),
};

export default HomeCard;
