import './App.css';
import Home from './containers/home/Home'
import SignIn from './containers/SignIn/SignIn';
import Nouser from './layouts/no-user/No_user'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nouser>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/sign-in'} element={<SignIn />} />
        </Routes>
      </Nouser>
    </div>
  );
}

export default App;