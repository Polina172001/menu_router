import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import Main from './pages/Main';
import Drift from './pages/Drift';
import Time from './pages/Time';
import Forza from './pages/Forza';
function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <div className="page">
          <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/drift" exact element={<Drift/>}/>
            <Route path="/time" exact element={<Time/>}/>
            <Route path="/forza" exact element={<Forza/>}/>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
