import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
      <div className="main">
      <h2 className="main-header">CRUD opertaions</h2>
      <div>
        {/* <BrowserRouter>
          <Create />
        </BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Create />}/>
        </Routes>
      </div>
      <div>
        {/* <BrowserRouter>
          <Read />
        </BrowserRouter> */}
        <Routes>
          <Route path='Read' element={<Read />}/>
        </Routes>
      </div>
      <div>
        {/* <BrowserRouter>
          <Update />
        </BrowserRouter> */}
        <Routes>
          <Route path='Update' element={<Update />}/>
        </Routes>
      </div>
      </div>

      // <BrowserRouter>
      // <Routes>
      //   <Route path='/' element={<Create />} />
      // </Routes>
      // </BrowserRouter>
    
  );
}

export default App;
