import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
// Components
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
