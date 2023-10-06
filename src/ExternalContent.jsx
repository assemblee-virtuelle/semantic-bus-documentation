// src/ExternalContent.jsx
import React from 'react';
import { ZeroMd } from 'zero-md';

const ExternalContent = ({ url }) => {
  customElements.define('zero-md', ZeroMd)
  app.render(`<zero-md src=${url}></zero-md>`, target)
};

export default ExternalContent;
