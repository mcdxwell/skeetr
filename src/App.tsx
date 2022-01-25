import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import skeetrPic from './images/skeetr_boi.png'
import Bitten from "./components/Bitten"
import AddToBitten from './components/AddToBitten';

// figure out how to store example information
// connect radio buttons (sex: M/F) to display after calculating

export interface IState {
  user: {
    name?: string
    weight: number
    height: number
    sex: string
    bites?: number
  }[] // array of objects
}

function App() {

  const [user, setUserBites] = useState<IState["user"]>([

  ])

  return (
    <div className="App">
      <h1>Skeetr' Bite Calculator</h1>
      <h2>Author: David Alejandro McDowell</h2>
      <body>
      <p>The idea behind this calculator came from being attacked by "skeeters" in southeast Texas. 
        <br/> I can't remember how many bit me that day, but it made me think, "how many more mosquito
        <br/> bites will it take to kill me?"</p>

        <br/>
        <br/>
        Enjoy :)
      </body>
      <Bitten user = { user } />
      <AddToBitten user = { user } setUserBites = { setUserBites }/>
      <img src = { skeetrPic } alt = 'skeetr_boi' width={640} height={480}/>
    </div>
  );
}

export default App;
