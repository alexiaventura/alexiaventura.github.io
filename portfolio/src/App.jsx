import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        {/* Add other routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App