import React from "react";
import PropTypes from "prop-types";

export default function ProductTable(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.category}</td>
    </tr>
  );
}
ProductTable.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.oneOf(["Clothes", "Electronics"]).isRequired
};
