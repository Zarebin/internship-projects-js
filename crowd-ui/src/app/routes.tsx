import { Routes, Route } from "react-router-dom";
import Home from "../features/home/Home-page";
import { Counter } from "../features/counter/Counter";
import Sentiment from "../features/sentiment/Sentiment";

const AppAllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/sentiment" element={<Sentiment />} />
    </Routes>
  );
};

export default AppAllRoutes;
