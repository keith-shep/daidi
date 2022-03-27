import "../styles/Hand.css";
import React from "react";
import axios from "axios";

class Hand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cardsInHand: ["hello"]}
    this.popCard = this.popCard.bind(this)
  }
  // This function isnt working because its not an array
  popCard() {
    this.state.cardsInHand.pop()
    this.setState({ cardsInHand: this.state.cardsInHand })
    console.log("hello from popCard after", this.state.cardsInHand)
    axios.put('https://localhost:3001/catalog/hand/pop', {
      cardHand: this.state.cardsInHand
    })
      .then(response => {
        console.log(response);
    })
  }
  componentDidMount() {
    axios.get("http://localhost:3001/catalog/hand").then((response) => {
      console.log(response)
      const cardsReturned = response.data.handOne.cardHand;
      this.setState({cardsInHand: cardsReturned})
      console.log(Array.isArray(this.state.cardsInHand))
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.popCard}>
          Play a Card
        </button>
        {this.state.cardsInHand.map(card =>
          <li>{card.number} + {card.suit}</li>
        )}
      </div>
    )
  }
}

export default Hand;
