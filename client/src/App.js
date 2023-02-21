import './App.css';
import CreateProduct from './components/createProduct';
import DisplayAll from "./components/DisplayAll"; 
import OneProduct from './components/oneProduct';
import Main from "./views/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
          <Route path='/' element={<Main/>} />
          {/* <Route path='/' element={<CreateProduct/>} />  */ }
          {/* <Route path='/' element={<DisplayAll/>} /> */}
          <Route path='/product/:id' element={<OneProduct/>} /> 
      </Routes> 
      </div>
    </BrowserRouter>
    );
}

export default App;
