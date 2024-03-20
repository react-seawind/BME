import { useEffect } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
