import React from "react";
import HomeCard from "components/Cards/HomeCard";
import { HiUserGroup, HiUserPlus } from 'react-icons/hi2';

const homeInfos = [
  {
    id: 1,
    href: "/employees/new",
    icon: <HiUserPlus className="w-7 h-7" />,
    title: "Create new employee",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed",
  },
  {
    id: 2,
    href: "/employees",
    icon: <HiUserGroup className="w-7 h-7" />,
    title: "List employees",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed",
  },
];

function Home() {
  return (
    <main className="h-full md:h-3/4 w-full flex justify-center md:items-center f-container">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-5 md:space-y-0">
        {homeInfos.map((info) => {
          return <HomeCard data={info} key={info.id} />;
        })}
      </div>
    </main>
  );
}

export default Home;
