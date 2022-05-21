import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    isLoading && (
      <div id='loading-wrapper'>
        <div id='loading-text'>LOADING</div>
        <div id='loading-content'></div>
      </div>
    )
  );
};

export default Loading;
