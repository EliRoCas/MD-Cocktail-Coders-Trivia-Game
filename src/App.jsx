import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Trivia from "./pages/Trivia";
import Drunkpedia from "./pages/Drunkpedia";
import Score from "./pages/Score";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/drunkpedia" element={<Drunkpedia />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
