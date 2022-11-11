import React, { useEffect } from "react";
import HomeCard from "components/Cards/HomeCard";

import {ReactComponent as HiUserPlus} from "assets/icons/user-plus.svg";
import {ReactComponent as HiUserGroup} from "assets/icons/user-group.svg";

// cards home infos
const homeInfos = [
  {
    id: 1,
    href: "/employees/new",
    icon: <HiUserPlus className="w-7 h-7" />,
    title: "New employee",
    description: "Create a new employee in the database with form.",
  },
  {
    id: 2,
    href: "/employees",
    icon: <HiUserGroup className="w-7 h-7" />,
    title: "List employees",
    description: "Display the list of all employees in the database.",
  },
];

/**
 * Home Page
 * @returns {React.ReactElement}
 */
function Home() {
  useEffect(() => {
    document.title = "Home | Wealth Health";
  }, []);

  return (
    <main className="h-full md:h-3/4 w-full flex justify-center md:items-center f-container">
      <div className="w-full flex flex-col space-y-4 md:flex-row md:space-x-5 md:space-y-0">
        {homeInfos.map((info) => {
          return <HomeCard data={info} key={info.id} />;
        })}
      </div>
    </main>
  );
}

export default Home;
