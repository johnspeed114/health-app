import './styles.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    // maybe add a context provider to pass state data deep af without the need of redux
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* add the rest of the page routes here */}
          {/* the path is the url pathname based on that it will go that page of components */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
