import { Routes, Route } from "react-router-dom";
import Home from "../features/home/Home-page";
import { Counter } from "../features/counter/Counter";
import ImageLabelHome from "../features/image-label-verification/components/First-page/First-page.component";
import ImageLabelQuestions from "../features/image-label-verification/ImageLabelVerification";

const mainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/imageLabelVerification" element={<ImageLabelHome />} />
      <Route path="/imageLabelQuestions" element={<ImageLabelQuestions />} />
    </Routes>
  );
};

export default mainRoutes;
