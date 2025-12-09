import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import Simulations from "../components/Simulations";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import BackToTop from "../components/BackToTop";
// Config
import { moreInfo } from "../config";
// Utils
import { updateTitle } from "../utils";

const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${userData.name} | Portfolio`);
  }, [userData]);

  return (
    <>
      <Hero name={userData.name} />
      <main>
        <Simulations />
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Resume />
      </main>
      <BackToTop />
    </>
  );
};

export default Home;