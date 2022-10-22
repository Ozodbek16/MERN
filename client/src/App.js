import './App.css';
import Home from './containers/home/Home'
import Nouser from './layouts/no-user/No_user'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nouser>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Nouser>
    </div>
  );
}

export default App;