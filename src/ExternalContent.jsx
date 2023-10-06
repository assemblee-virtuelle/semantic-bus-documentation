// src/ExternalContent.jsx
import React from 'react';
import ZeroMd from 'zero-md';

const ExternalContent = ({ url }) => {
  return <ZeroMd src={url} />;
};

export default ExternalContent;
