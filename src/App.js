import './App.css';
import {  Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Overview from './Components/Overview';
import Other from './Components/Other';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Overview />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
