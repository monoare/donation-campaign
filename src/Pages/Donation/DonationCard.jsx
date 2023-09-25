import React from "react";

const DonationCard = ({ donationViewDetails }) => {
  const { id, picture, category, title, card_bg, text_color, category_bg } =
    donationViewDetails || {};
  console.log(donationViewDetails);

  return (
    <div>
      <div className="relative flex flex-col w-[312px] rounded-lg  bg-clip-border text-gray-700 shadow-md">
        <div className="relative overflow-hidden bg-clip-border">
          <img
            src={picture}
            className="h-[194px] w-full rounded-t-lg  object-cover"
          />
        </div>
        <div className="px-6">
          <div className="mb-2 flex flex-col">
            <p className="block text-sm font-medium max-w-fit px-3 py-1 rounded mt-5">
              {category}
            </p>
            <p className="block text-base font-semibold mt-3 mb-4">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
