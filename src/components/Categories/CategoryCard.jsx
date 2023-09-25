const CategoryCard = ({ donationCategory }) => {
  const { picture, category, title, card_bg, text_color, category_bg } =
    donationCategory || {};
  const cardBgStyle = {
    backgroundColor: card_bg, // Set the background color dynamically
  };
  const textColor = {
    color: text_color, // Set the text color dynamically
  };

  const CategoryBgColor = {
    backgroundColor: category_bg, // Set the category text background color dynamically
  };

  return (
    <div>
      <div
        className="relative flex flex-col w-[312px] h-[350px] rounded-b-lg bg-clip-border text-gray-700 shadow-md"
        style={cardBgStyle}
      >
        <div className="relative overflow-hidden bg-white bg-clip-border text-gray-700">
          <img src={picture} className="h-[194px] w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex flex-col">
            <p
              className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
              style={CategoryBgColor}
            >
              {category}
            </p>
            <p
              className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
              style={textColor}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
