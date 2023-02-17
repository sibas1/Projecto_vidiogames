import './App.css';
import Home from './Componets/Home/Home';
import { Route } from 'react-router-dom';
import LadingP from './Componets/LadingP/LadingP';
import GameDetails from './Componets/GameDetails/GameDetails';
import AddVidiogame from './Componets/AddVideogame/AddVidiogame';


function App() {
  return (
    <div className="App">
      <Route exact path={'/'}><LadingP></LadingP></Route>
      <Route exact path={'/home'}><Home></Home></Route>
      <Route exact path= '/videogame/:id' component = {GameDetails} />
      <Route exact path={'/addvideogame'} component = {AddVidiogame}/>
    </div>
  );
}

export default App;
