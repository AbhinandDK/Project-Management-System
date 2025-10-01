

// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import Navbar from './components/navbar'
// import { Edit } from '@mui/icons-material';
import Edit from './components/Edit';
import Delete from './components/Delete';

function App() {
  const mywidth=240
  return (
    <div className="App">
      <Navbar
        drawerWidth = {mywidth}

        content={
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Create" element={<Create/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/delete/:id" element={<Delete/>}/>
          </Routes>

        }
    
      />
    
    </div>
  );
}

export default App;
