// src/components/InfoList.js

import PropTypes from 'prop-types';
const InfoList = ({ filteredData }) => {
  return (
    <ul>
      {filteredData.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.details}</p>
        </li>
      ))}
    </ul>
  );
};
InfoList.propTypes = {
    filteredData: PropTypes.string.isRequired,
  };
export default InfoList;
