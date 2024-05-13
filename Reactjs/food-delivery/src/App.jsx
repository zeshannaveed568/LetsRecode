import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='pages-content'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
