import React from "react";

type PropsHomePage = {};

const Home = (props: PropsHomePage) => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <h1>Categories</h1>
      <h1>Post</h1>
      <h1>Loadmore</h1>
    </section>
  );
};

export default Home;
