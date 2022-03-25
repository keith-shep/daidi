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
    this.setState(prevState => ({
      cardsInHand: prevState.cardsInHand.pop()
    }))
  }
  componentDidMount() {
    axios.get("http://localhost:3001/catalog/hand").then((response) => {
      const cardsReturned = response.data.handOne.cardHand;
      this.setState({cardsInHand: cardsReturned})
      console.log(Array.isArray(this.state.cardsInHand))
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.popCard}>
          Play Card
        </button>
        {/* <h1>{this.state.cardsInHand[0].suit}</h1> */}
        {this.state.cardsInHand.map(card =>
          <li>{card.number} + {card.suit}</li>
        )}
      </div>
    )
  }
}

export default Hand;
