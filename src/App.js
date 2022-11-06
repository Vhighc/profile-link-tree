import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Linking from "./pages/linkTree";
import ContactForm from "./pages/Contact/ContactForm";
// import Footer from './components/Footer/footer';



function App() {
  

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Linking />} />
      <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
