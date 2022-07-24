import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-blue-400">{category}</p>
      <p className=" text-3xl font-extrabold tracking-tight text-slate-900 dark:text-cyan-50">
        {title}
      </p>
    </div>
  );
};

export default Header;
