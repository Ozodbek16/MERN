import './App.css';
import Home from './containers/home/Home'
import Nouser from './layouts/no-user/No_user'

function App() {
  return (
    <div className="App">
      <Nouser>
        <Home />
      </Nouser>
    </div>
  );
}

export default App;