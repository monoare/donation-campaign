import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <div className="md:m-20">
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

export default Categories;
