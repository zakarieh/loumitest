import './App.css';
import React, { Component } from 'react'; 
import  Slide  from "./components/Slide";


class App extends Component {

  state = {
    titre : 'Mon titre '
  }

render() {
  return (
    <div className="App"> 
        <Slide />
    </div>
  );
}



}

export default App;
