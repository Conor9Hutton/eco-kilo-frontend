import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import UsersPage from "./components/UsersPage";
import EnergyResults from "./components/EnergyResults";
import EducationPage from "./components/EducationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homes" element={<UsersPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
