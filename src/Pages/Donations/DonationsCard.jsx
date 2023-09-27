import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DonationsCard = ({ card }) => {
  const {
    id,
    picture,
    category,
    title,
    card_bg,
    text_color,
    category_bg,
    price,
  } = card || {};

  const cardBgStyle = {
    backgroundColor: card_bg, // Set the background color dynamically
  };
  const textLetterColor = {
    color: text_color, // Set the text color dynamically
  };

  const CategoryBgColor = {
    backgroundColor: category_bg,
    color: text_color, // Set the category text background color dynamically
  };

  const ViewDetailsBgColor = {
    backgroundColor: text_color,
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative flex flex-col text-center md:text-left md:flex-row w-full rounded-lg  bg-clip-border text-gray-700 shadow-md"
        style={cardBgStyle}
      >
        <div className="relative overflow-hidden bg-clip-border">
          <img
            src={picture}
            className="md:h-full w-full rounded-l-lg  object-cover"
          />
        </div>
        <div className="px-2 md:px-6">
          <div className="mb-2 flex flex-col">
            <p
              className="block text-sm font-medium lg:max-w-fit px-3 py-1 rounded mt-5"
              style={CategoryBgColor}
            >
              {category}
            </p>
            <p
              className="block text-sm font-medium lg:max-w-fit px-3 py-1 rounded mt-2 lg:mt-5"
              style={textLetterColor}
            >
              $ {price}
            </p>
            <p
              className="block text-sm lg:text-base font-semibold mt-3 mb-4"
              style={textLetterColor}
            >
              {title}
            </p>

            <button
              className="rounded w-full lg:max-w-fit lg:px-4 py-1 lg:py-2 text-white font-semibold capitalize text-sm lg:text-lg"
              style={ViewDetailsBgColor}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationsCard.propTypes = {
  card: PropTypes.array,
};

export default DonationsCard;
