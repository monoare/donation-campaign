import { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import DonationsCard from "./DonationsCard";

const Donations = () => {
  const [cards, setCards] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [seeAll, SetSeeAll] = useState(false);

  useEffect(() => {
    const getDonation = JSON.parse(localStorage.getItem("card"));

    if (getDonation) {
      setCards(getDonation);
    } else {
      setEmpty("No data found!! Please Click to Donate.");
    }
  }, []);

  return (
    <div className="mx-20">
      <Navbar></Navbar>

      {empty ? (
        <div className="h-[90vh] w-1/3 text-center text-5xl text-red-500 font-bold flex justify-center items-center mx-auto">
          {empty}
        </div>
      ) : (
        <div className="my-10">
          {cards.length >= 4 && !seeAll ? (
            <div>
              <div className="grid grid-cols-2 gap-6 mb-20">
                {cards.slice(0, 4).map((card) => (
                  <DonationsCard key={card.id} card={card}></DonationsCard>
                ))}
              </div>
              <button
                onClick={() => SetSeeAll(!seeAll)}
                className="block text-base font-semibold text-white rounded bg-[#009444] px-7 py-3 mx-auto"
              >
                See ALL
              </button>
            </div>
          ) : cards.length >= 4 && seeAll ? (
            <div>
              <div className="grid grid-cols-2 gap-6 mb-20">
                {cards.map((card) => (
                  <DonationsCard key={card.id} card={card}></DonationsCard>
                ))}
              </div>
              <button
                onClick={() => SetSeeAll(!seeAll)}
                className="block text-base font-semibold text-white rounded bg-[#009444] px-7 py-3 mx-auto"
              >
                See Less
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 mb-20">
              {cards.map((card) => (
                <DonationsCard key={card.id} card={card}></DonationsCard>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donations;
