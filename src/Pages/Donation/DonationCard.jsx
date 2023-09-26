import swal from "sweetalert";

const DonationCard = ({ donationViewDetails }) => {
  const { id, picture_details, title, text_color, price, description } =
    donationViewDetails || {};
  //   console.log(donationViewDetails);

  const detailsButtonBgColor = {
    backgroundColor: text_color,
  };

  const handleClickButton = () => {
    const priceArray = [];

    const findDonation = JSON.parse(localStorage.getItem("donationPrice"));

    if (!findDonation) {
      priceArray.push(price);
      localStorage.setItem("donationPrice", JSON.stringify(priceArray));
      swal("Good job!", "Products added successfully!", "success");
    } else {
      const isExits = findDonation.find((price) => price.id === id);

      if (!isExits) {
        priceArray.push(...findDonation, price);
        localStorage.setItem("donationPrice", JSON.stringify(priceArray));
        swal("Good job!", "Products added successfully!", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }

    console.log(priceArray);
  };

  return (
    <div className="my-20">
      <div className="relative flex flex-col w-[80vw] mx-auto rounded-lg  bg-clip-border text-gray-700">
        <div className="relative overflow-hidden bg-clip-border">
          <div>
            <img
              src={picture_details}
              className="rounded-t-lg w-full h-[700px] object-cover"
            />
          </div>

          <div className="relative bottom-32 hero-overlay bg-[#0b0b0b80] bg-opacity-65 h-32">
            <div className="relative top-9 left-9">
              <button
                onClick={handleClickButton}
                style={detailsButtonBgColor}
                className="text-xl font-semibold text-white px-6 py-4 rounded"
              >
                Donate {price}
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mb-2 flex flex-col">
            <p className="block text-4xl font-bold -mt-24 mb-4 text-black">
              {title}
            </p>
            <p className="pb-10 mt-6 text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
