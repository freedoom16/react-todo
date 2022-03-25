import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
      <div className="main">
      <h2 className="main-header">CRUD opertaions</h2>
      <div>
        <BrowserRouter>
          <Create />
        </BrowserRouter>
      </div>
      <div>
        <BrowserRouter>
          <Read />
        </BrowserRouter>
      </div>
      <div>
        <BrowserRouter>
          <Update />
        </BrowserRouter>
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
