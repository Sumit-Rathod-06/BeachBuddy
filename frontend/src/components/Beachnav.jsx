import React, { useState, useRef, useEffect } from 'react';

const navItems = ['Overview', 'Weather', 'Tides & Surf', 'Reviews', 'Info & map'];

const Beachnav = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const listRefs = useRef([]);

  const handleClick = (index) => {
    setIsSelected(index);
  };

  useEffect(() => {
    const current = listRefs.current[isSelected];
    if (current) {
      setIndicatorStyle({
        width: current.offsetWidth + 'px',
        left: (current.offsetLeft+10) + 'px',
      });
    }
  }, [isSelected]);

  return (
    <div className="py-5 px-35">
      <div className="relative bg-gray-300 p-2 rounded-xl overflow-hidden">
        {/* Sliding background */}
        <div
          className="absolute top-2 transition-all duration-300 bg-white rounded-xl h-[32px] z-0"
          style={indicatorStyle}
        ></div>

        <ul className="relative z-10 flex justify-around items-center px-2 py-1">
          {navItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => (listRefs.current[index] = el)}
              className="cursor-pointer text-center w-50 z-10"
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Beachnav;
