import React from "react";
import { Link } from "react-router-dom";

function HomeCard({ title, description, icon, href }) {
  return (
    <Link to={href} className="homeCard">
      <div>
        {icon}
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default HomeCard;
