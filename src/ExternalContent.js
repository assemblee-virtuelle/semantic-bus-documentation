// src/ExternalContent.jsx
import React from 'react';

const ExternalContent = ({ url }) => {
  return(
    <div>
      <h5>ExternalContent appearing</h5>
      <zero-md src={url}></zero-md>
    </div>
  );
};

export default ExternalContent;
