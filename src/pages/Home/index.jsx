import React from "react";
import HomeCard from "components/Cards/HomeCard";
import "styles/pages/home.scss";

function Home() {
  return (
    <main className="homeContainer">
      <div className="homeCards space-x-8">
        <HomeCard
          href="/employees/new"
          title="Create employee"
          description="Little description"
          icon={<span>icon1</span>}
        />

        <HomeCard
          href="/employees/new"
          title="List employees"
          description="Little description"
          icon={<span>icon2</span>}
        />
      </div>
    </main>
  );
}

export default Home;
