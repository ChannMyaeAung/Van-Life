import React from "react";
import incomeGraph from "../../assets/income-graph.png";
import { hostComponentStyles, styles } from "../../style";

const Income = () => {
  const transactionData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <section id="income">
      {/* Income Info and Graph Section */}
      <section id="income__top" className={`px-4 flex flex-col gap-3`}>
        <h1 className="font-bold text-[28px] md:-text[36px]">Income</h1>
        <p className={`${hostComponentStyles.paragraph}`}>
          Last <span className="font-bold underline">30 days</span>
        </p>
        <h2 className="font-extrabold text-[32px] md:text-[40px]">$2,260</h2>
        <figure className="w-full max-w-[500px]">
          <img src={incomeGraph} alt="income-graph" />
        </figure>
      </section>

      {/* Income Transactions Section */}
      <section id="income__bottom" className={`${hostComponentStyles.margin}`}>
        {/* Transactions Titles */}
        <div className={`flex items-center justify-between`}>
          <h1 className="font-bold text-[20px] md:text-[24px]">
            Your Transactions({transactionData.length})
          </h1>
          <p className={`${hostComponentStyles.paragraph}`}>
            Last <span className="font-bold underline">30 days</span>
          </p>
        </div>

        {/* Transaction Content */}
        <div className="flex flex-col gap-3 my-3">
          {transactionData.map((item) => (
            <div
              className={`flex ${hostComponentStyles.padding} items-center justify-between bg-white rounded-[5px]`}
              key={item.id}
            >
              <h3 className="font-semibold text-[24px] md:text-[36px]">
                ${item.amount}
              </h3>
              <p className={`${hostComponentStyles.paragraph}`}>{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Income;
