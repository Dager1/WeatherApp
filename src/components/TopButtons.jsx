import React from "react";

function TopButtons() {
  const cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Sydney" },
    { id: 1, title: "Delhi" },
    { id: 1, title: "Tokyo" },
    { id: 1, title: "Paries" },
  ];

  return (
    <div className="flex item-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-large font-medium ">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
