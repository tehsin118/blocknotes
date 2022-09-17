import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Page/Landing";
import OverviewPage from "./Page/OverviewPage";
import Aos from "aos";

function App() {
  Aos.init({
    duration: 3200,
    delay: 30,
    once: false,
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/overviewpage" element={<OverviewPage />} />
      </Routes>

      {/* <OverviewPage /> */}
    </div>
  );
}

export default App;
