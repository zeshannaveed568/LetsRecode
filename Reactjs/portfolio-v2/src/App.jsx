import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className='top-bar'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* More routes here */}
      </Routes>
    </>
  );
}

export default App;
