import React, { useState } from 'react';

const Image: React.FC<{ src: string }> = ({ src }) => {
  const [error, seterror] = useState<boolean>(false);

  return <img loading='lazy' src={error ? '/default.png' : src.replace('/', '')} alt='example' onError={() => seterror(true)} />;
};

export default Image;
