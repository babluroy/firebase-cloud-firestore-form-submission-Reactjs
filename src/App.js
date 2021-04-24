import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import ContactForm from './Components/ContactForm'
import Navbar from './Components/Navbar'
import ReadData from './Components/ReadData'


function App() {
  return (
    <div>
  <Navbar/>
  <ContactForm/>
  <ReadData/>
    </div>
  );
}

export default App;
