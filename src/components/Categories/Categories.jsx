import CategoryCard from "./CategoryCard";
import PropTypes from "prop-types";

const Categories = ({ categories }) => {
  return (
    <div className="flex justify-center m-10 md:m-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories?.map((donationCategory) => (
          <CategoryCard
            key={donationCategory.id}
            donationCategory={donationCategory}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
