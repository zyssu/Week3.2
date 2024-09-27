import logo from './logo.svg';
import './App.css';
import Karty from './Karty';
import karty1 from './karty1.jpg';
import karty2 from './karty2.jpg';

function App() {
  return (
    <div className="App">
        <Karty 
          image = {karty1}
          name = {"Earth Spirit "}
          functiom={"Makes small but powerful earthquakes "}
          experience={"20"}
          lore= {"A guardian of nature who summons earthquakes to defend the world."}
        />
        <Karty 
          image = {karty2} 
          name = {"Necrophos"}
          functiom={"Heals nearby allies"}
          experience={"113"}
          lore= {"Necrophos, once a life priest, now spreads death and plagues while healing allies, empowered by a dark curse."}    
        />
    </div>
  );
}

export default App;