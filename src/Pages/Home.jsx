import { useEffect } from "react";
import { Banner } from "../Components/Banner/Banner";
import { BlogCardContainer } from "../Components/featurs/BlogCardContainer";

export const Home = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="home">
      <Banner />
      <BlogCardContainer />
    </section>
  );
};
