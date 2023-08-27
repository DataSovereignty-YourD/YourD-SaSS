import React, { useState } from "react";
import { TfiBarChart } from "react-icons/tfi";
import { MdOutlineElectricalServices, MdOutlineHistory } from "react-icons/md";
import { HiOutlineWallet } from "react-icons/hi2";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { LiaCalendarCheck } from "react-icons/lia";

export default function Billing() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleMenuClick = (key) => {
    setActiveMenu(key);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const menuItems = [
    { key: "usage", label: "Usage", icon: <TfiBarChart /> },
    { key: "plan", label: "Plan", icon: <MdOutlineElectricalServices /> },
    { key: "add-ons", label: "Add-ons", icon: <MdOutlineElectricalServices /> },
    { key: "history", label: "History", icon: <MdOutlineHistory /> },
    { key: "payment", label: "Payment methods", icon: <HiOutlineWallet /> },
  ];
  const invoiceData = [
    { name: "Discover Plan", amount: "$0.00" },
    { name: "Overages", amount: "$0.00" },
    { name: "Multi-region Transaction Broadcast", amount: "$0.00" },
    { name: "Multi-region Transaction Broadcast", amount: "$0.00" },
    { name: "Total", amount: "$0.00" },
  ];
  function Plan() {
    return (
      <div className=" text-black ">
        <div className=" flex justify-between mb-10">
          <div className="font-normal text-lg px-5 py-2">Plan : Discover</div>
          <div className=" flex">
            <button
              className=" flex items-center border-black text-white bg-purple-600 rounded-lg"
              onClick={openPopup}
            >
              <div className=" mx-3 flex items-center ">
                upgrade <AiTwotoneThunderbolt />
              </div>
            </button>
            {isPopupOpen && (
              <div className=" popup">
                <div className=" popup-content">
                  <h2>팝업 내용</h2>
                  <p>이것은 팝업의 내용입니다.</p>
                  <button onClick={closePopup}>X</button>
                </div>
              </div>
            )}
            <button className=" items-center border-black bg-blue-500 rounded-lg">
              <div className=" mx-3 flex items-center text-white">
                cancel subscription
              </div>
            </button>
          </div>
        </div>

        <div className=" mt-5 mb-14">
          <div className=" mb-2 text-sm">Upcoming Invoice</div>
          <div className=" flex justify-between border border-gray-200 rounded-lg py-10 px-8">
            <div>
              <div className="flex items-center text-sm font-semibold">
                Billing Period
              </div>
              <div className="flex items-center">
                <LiaCalendarCheck className="w-8 h-8" />
                Aug 27, 2023 - Sep 27, 2023
              </div>
            </div>
            <span className="text-gray-300  text-5xl">|</span>
            <div className="">
              <div>Total</div>
              <div>$0.00</div>
            </div>
          </div>
        </div>

        <div>
          <div className=" flex justify-between mb-2 px-3 py-2 bg-gray-200 font-bold text-sm">
            <div>Upcoming Invoice Breakdown</div>
            <div>Amount</div>
          </div>
          {invoiceData.map((item, index) => (
            <div
              key={index}
              className=" flex justify-between mb-3 border-b-4 border-gray-300 px-3 py-2"
            >
              <div>{item.name}</div>
              <div>{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-white rounded-lg shadow-md p-6">
      <h2 className=" text-2xl font-semibold mb-4 text-black">
        Usage & Billing
      </h2>
      <nav className=" bg-white text-black p-4">
        <ul className=" flex space-x-4">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => handleMenuClick(item.key)}
                className={`${
                  activeMenu === item.key
                    ? "font-semibold border-b-2 border-blue-500"
                    : ""
                } focus:outline-none`}
              >
                <div className=" flex items-center">
                  {item.icon}
                  {item.label}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      ;
      <div className=" container mx-auto p-4">
        {activeMenu === "usage" && <div>홈 페이지 컨텐츠</div>}
        {activeMenu === "plan" && <Plan></Plan>}
        {activeMenu === "add-ons" && <div>소개 페이지 컨텐츠</div>}
        {activeMenu === "history" && <div>소개 페이지 컨텐츠</div>}
        {activeMenu === "payment" && <div>소개 페이지 컨텐츠</div>}
      </div>
    </div>
  );
}
