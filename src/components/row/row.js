import React from "react";
import './row.css';

const Row = ({left, right}) => {
  return (
    <div className="row">
      {left}
      {right}
    </div>
  )
};

export default Row;