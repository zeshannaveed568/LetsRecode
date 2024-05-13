import { useState } from "react";
import "./App.css";
import PaperSidebar from "./components/PaperSidebar/PaperSidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PaperSidebar />
    </>
  );
}

export default App;
