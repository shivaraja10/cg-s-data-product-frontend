import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import JourneyMap from './components/JourneyMap/JourneyMap';
import GetStartedPage from './pages/GetStartedPage';
import DataDiscoveryPage from './pages/DataDiscoveryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyMap />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/data-discovery" element={<DataDiscoveryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
