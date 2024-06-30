import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homePage';
import GuidePage from './Pages/guidePage';
import HelloWorld from './Pages/Sections/helloWorldInGo';
import Epp from './Pages/Sections/start';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path='/guide/helloworldingo' element={<HelloWorld />} />
        <Route path='/guide/start' element={<Epp />} />
      </Routes>
    </Router>
  );
}

export default App;
