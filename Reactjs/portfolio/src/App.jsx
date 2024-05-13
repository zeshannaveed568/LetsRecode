import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";

function App({ isDarkMode }) {
  return (
    <div className='App' data-theme={isDarkMode}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
