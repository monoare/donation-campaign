import { PureComponent, useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import StatisticsChart from "./StatisticsChart";

const Statistics = () => {
  const [donationPrice, setDonationPrice] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const findDonation = JSON.parse(localStorage.getItem("donationPrice"));

    if (findDonation) {
      setDonationPrice(findDonation);

      const total = findDonation.reduce(
        (preValue, currentItem) =>
          parseFloat(preValue) + parseFloat(currentItem),
        0
      );

      setTotalPrice(total);
    } else {
      setNoFound("No Data Found");
    }
  }, []);

  return (
    <div>
      <div className="mt-4 md:mt-10">
        <Navbar></Navbar>
      </div>

      <div>
        {noFound && (
          <div>
            <p>{noFound}</p>
          </div>
        )}
      </div>
      <div className="text-lg mt-5 md:mt-10 md:ml-48 lg:ml-96">
        <StatisticsChart totalPrice={totalPrice}></StatisticsChart>
      </div>
    </div>
  );
};

export default Statistics;
