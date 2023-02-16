import './App.css';
import Home from './Componets/Home/Home';
import { Route } from 'react-router-dom';
import LadingP from './Componets/LadingP/LadingP';
import GameDetails from './Componets/GameDetails/GameDetails';


function App() {
  return (
    <div className="App">
      <Route exact path={'/'}><LadingP></LadingP></Route>
      <Route exact path={'/home'}><Home></Home></Route>
      <Route exact path= '/videogame/:id' component = {GameDetails} />
    </div>
  );
}

export default App;
