import React from "react";

const ChartsHeader = ({ category, title, chart }) => {
  const baseCategoryClasses = "text-3xl font-extrabold tracking-tight";
  const chartCategoryClasses = "dark:text-gray-200";

  const combinedClasses = `${baseCategoryClasses} ${
    !chart ? "text-slate-900" : chartCategoryClasses + " text-slate-900"
  }`;

  const baseTitleClasses = "text-center text-xl mb-2 mt-3";
  return (
    <div className="mb-10">
      <div>
        {chart ? <p className="text-lg text-gray-400 mb-1">Chart</p> : null}
        <p className={combinedClasses}>{category}</p>
        <p
          className={` ${
            !chart
              ? baseTitleClasses + "text-slate-900"
              : baseTitleClasses + " text-slate-900 dark:text-gray-200"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default ChartsHeader;
