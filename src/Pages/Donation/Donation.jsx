import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";
import Navbar from "../../components/Header/Navbar/Navbar";
const Donation = () => {
  const [donationViewDetails, setDonationViewDetails] = useState([]);
  const { id } = useParams();
  const categories = useLoaderData();
  const idInt = parseInt(id);
  //   console.log(typeof idInt, categories);

  useEffect(() => {
    const findDetails = categories.find((detail) => detail.id === idInt);
    setDonationViewDetails(findDetails);
  }, [categories, idInt]);

  return (
    <div>
      <div className="mt-5 md:mt-10">
        <Navbar></Navbar>
      </div>
      <div>
        <DonationCard
          key={id}
          donationViewDetails={donationViewDetails}
        ></DonationCard>
      </div>
    </div>
  );
};

export default Donation;
