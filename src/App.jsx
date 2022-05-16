import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Main from './components/main/Main'
import MainCarousel from "./components/mainCarousel/MainCarousel";
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainCarousel />} />
        <Route path='/product' element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
