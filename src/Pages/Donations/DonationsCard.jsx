import { Link } from "react-router-dom";
import Donation from "../Donation/Donation";

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
        className="relative flex w-full rounded-lg  bg-clip-border text-gray-700 shadow-md"
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
              className="block text-sm font-medium max-w-fit px-3 py-1 rounded mt-5"
              style={textLetterColor}
            >
              {price}
            </p>
            <p
              className="block text-base font-semibold mt-3 mb-4"
              style={textLetterColor}
            >
              {title}
            </p>
            <Link to={`/donation/${id}`}>
              <button
                className="rounded max-w-fit px-4 py-2 text-white font-semibold capitalize text-lg"
                style={ViewDetailsBgColor}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationsCard;
