import React from "react";
import './row.css';

const Row = ({left, right}) => {
  return (
    <div>
      <div className="row container">
        {left}
        {right}
      </div>
    </div>
  )
};

export default Row;