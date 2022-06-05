import React, { useState } from "react";
import cn from "classnames";

const PaginationEl = (props) => {
  const { countPages } = props;

  const renderPages = Array(countPages)
    .fill()
    .map((e, i) => i + 1);

  const [activePage, setActivePage] = useState(1);

  const pageToggler = (index) => {
    setActivePage(index);
  };

  return (
    <div className="pagination__items">
      <a href="#">&laquo;</a>
      {renderPages.map((index) => (
        <a
          href="#"
          className={cn({ active: activePage === index })}
          key={index}
          onClick={() => pageToggler(index)}
        >
          {index}
        </a>
      ))}
      <a href="#">&raquo;</a>
    </div>
  );
};

export default PaginationEl;

<a href="#">1</a>;
