import Header from "./components/header/Header";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Main from './components/main/Main'
import MainCarousel from "./components/mainCarousel/MainCarousel";
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <Breadcrumb />
     <Main />
     <MainCarousel />
     <Footer />
    </div>
  );
}

export default App;
