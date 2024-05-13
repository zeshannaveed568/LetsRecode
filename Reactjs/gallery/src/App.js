import './App.scss';
import ImageCard from './components/ImageCard';
import data from './utils/data';

function App() {
  return (
    <div className="container">
      <ImageCard data={data} />
    </div>
  );
}

export default App;
