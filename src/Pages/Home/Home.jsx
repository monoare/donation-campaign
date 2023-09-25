import React from "react";
import "../../font/font.css";
import Banner from "../../components/Header/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default Home;
