import './App.css';
import Home from './Componets/Home/Home';
import { Route } from 'react-router-dom';
import LadingP from './Componets/LadingP/LadingP';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'}><LadingP></LadingP></Route>
      <Route exact path={'/home'}><Home></Home></Route>
    </div>
  );
}

export default App;
