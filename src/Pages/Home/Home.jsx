import { useState, useEffect } from "react";
import Banner from "../../components/Header/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const categoriesData = useLoaderData();
  const [categories, setCategories] = useState(categoriesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

  // Filter and sort categories based on search term and selected category
  useEffect(() => {
    let filteredCategories = categoriesData.filter((category) => {
      return category.category.toLowerCase().match(searchTerm.toLowerCase());
    });

    setCategories(filteredCategories);

    // Show the "No results" message if there are no matching categories
    setShowNoResultsMessage(filteredCategories.length === 0);
  }, [searchTerm, categoriesData]);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <div>
      <Banner onSearch={handleSearch}></Banner>
      {showNoResultsMessage ? (
        <div className="text-center text-red-500 mt-5 text-3xl font-semibold">
          No matching categories found.
        </div>
      ) : (
        <Categories categories={categories}></Categories>
      )}
    </div>
  );
};

export default Home;
