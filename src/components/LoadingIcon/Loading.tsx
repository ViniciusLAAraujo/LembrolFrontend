import React, { useEffect, useState } from 'react';
import styles from './styles';

const colors = ['#222f5b', '#ae0001', '#2a623d', '#f0c75e']; // Definindo as quatro cores

const Loading: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.loaderContainer}>
      <div style={styles.loader(colors[colorIndex])}></div>
    </div>
  );
};

export default Loading;