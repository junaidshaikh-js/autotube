import { BsFilterCircle } from "react-icons/bs";
import { useState } from "react";

import { useVideo, constants } from "../../context";

export const Filters = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filter } = constants;

  const {
    state: { categories, categoryFilter },

    dispatch,
  } = useVideo();

  const handleFilter = (categoryName) =>
    dispatch({ type: filter, payload: categoryName });
  return (
    <section className="filter-section my-1 ">
      <div
        className="hide-big-48 txt-bold ml-2 mobile-filter-btn flex flex-center"
        onClick={() => setShowFilter((f) => !f)}
      >
        <BsFilterCircle className="mr-1" />
        <span>Filters</span>
      </div>

      <div className={`filter-btns flex ${showFilter && "show"}`}>
        <div className="txt-center border-bottom">
          <button
            className={`btn m-sm ${!categoryFilter && "active"}`}
            onClick={() => handleFilter("")}
          >
            All
          </button>
          {categories.map((category) => {
            return (
              <button
                className={`btn m-sm ${
                  categoryFilter == category.categoryName.toLowerCase() &&
                  "active"
                }`}
                onClick={() =>
                  handleFilter(category.categoryName.toLowerCase())
                }
                key={category._id}
              >
                {category.categoryName}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
