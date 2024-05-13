import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    clearTimeout(handleScroll.timeout);
    handleScroll.timeout = setTimeout(() => {
      setOffset(window.pageYOffset);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container" style={{ '--offset': offset / 2 }}>
      <div className="parallax">
        <div className="content">
          Scroll down
        </div>
      </div>
      <div className="parallax">
        <div className="content">
          Parallex
        </div>
      </div>
      <div className="content">
        Content
      </div>
    </div>
  );
}

export default App;
