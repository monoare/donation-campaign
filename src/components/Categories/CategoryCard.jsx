import PropTypes from "prop-types";
import Donation from "../../Pages/Donation/Donation";
import { Link } from "react-router-dom";
const CategoryCard = ({ donationCategory }) => {
  const { id, picture, category, title, card_bg, text_color, category_bg } =
    donationCategory || {};

  const cardBgStyle = {
    backgroundColor: card_bg,
  };
  const textLetterColor = {
    color: text_color,
  };

  const CategoryBgColor = {
    backgroundColor: category_bg,
    color: text_color,
  };

  const handleAddToDonation = () => {
    const addedToDonation = [];
    const donationItems = JSON.parse(localStorage.getItem("card"));
    if (!donationItems) {
      addedToDonation.push(donationCategory);
      localStorage.setItem("card", JSON.stringify(addedToDonation));
    } else {
      addedToDonation.push(...donationItems, donationCategory);
      localStorage.setItem("card", JSON.stringify(addedToDonation));
    }
  };

  return (
    <Link to={`/donation/${id}`}>
      <div onClick={handleAddToDonation}>
        <div
          className="relative flex flex-col max-w-fit rounded-lg  bg-clip-border text-gray-700 shadow-md"
          style={cardBgStyle}
        >
          <div className="relative overflow-hidden bg-clip-border">
            <img
              src={picture}
              className="h-[194px] w-full rounded-t-lg  object-cover"
            />
          </div>
          <div className="px-6">
            <div className="mb-2 flex flex-col">
              <p
                className="block text-sm font-medium max-w-fit px-3 py-1 rounded mt-5"
                style={CategoryBgColor}
              >
                {category}
              </p>
              <p
                className="block text-base font-semibold mt-3 mb-4"
                style={textLetterColor}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

CategoryCard.propTypes = {
  donationCategory: PropTypes.object,
};

export default CategoryCard;
