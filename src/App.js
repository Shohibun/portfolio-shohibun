import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Layout />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
