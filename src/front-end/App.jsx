import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import GuidePage from './Pages/guidePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </Router>
  );
}

export default App;
