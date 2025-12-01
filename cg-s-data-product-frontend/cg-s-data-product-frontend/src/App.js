import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import JourneyMap from './components/JourneyMap/JourneyMap';
import GetStartedPage from './pages/GetStartedPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<JourneyMap />} />
          <Route path="/get-started" element={<GetStartedPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
