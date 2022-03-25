import logo from "./logo.svg";
import "./styles/App.css";
import axios from "axios";


function roundGet(){
  axios.get("http://localhost:3001/catalog/round").then((response) => {
    // alert(response.stringify());
    alert(JSON.stringify(response))
  });
}

function playCard() {
  axios.get("http://localhost:3001/catalog/round/play").then((response) => {
    // alert(response.stringify());
    alert(JSON.stringify(response))
  });
}

function seeHand() {
  axios.get("http://localhost:3001/catalog/hand").then((response) => {
    const cardsReturned = response.data.playerHand.cardHand;
    cardsReturned.forEach(card => {
      console.log(card.number)
      console.log(card.suit)
    })
    alert(cardsReturned)
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Daidi
        <button onClick={roundGet}>Test-Backend</button>
        <button onClick={playCard}>Play Card</button>
        <button onClick={seeHand}>My Hand</button>
      </header>
    </div>
  );
}

export default App;
