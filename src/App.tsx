import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import skeetrPic from './images/skeetr_boi.png'
import Bitten from "./components/Bitten"
import AddToBitten from './components/AddToBitten';


interface IState {
  user: {
    name?: string
    weight: number
    height: number
    sex: string
    bites: number
  }[] // array of objects
}

function App() {

  const [user, setUserBites] = useState<IState["user"]>([
    {
      name: "David",
      weight: 150,
      height: 68,
      sex: "Male",
      bites: 350000
    }
  ])

  return (
    <div className="App">
      <h1>My React app</h1>
      <h2>Author: David McDowell</h2>
      <img src = { skeetrPic } alt = 'skeetr_boi' />
      <Bitten user = { user }/>
      <AddToBitten/>
    </div>
  );
}

export default App;
