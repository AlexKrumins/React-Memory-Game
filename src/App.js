import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ScoreBoard from "./components/ScoreBoard";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    checked: [],
    score : 0,
    topscore : 0
  };
  
  
  friendCheck = id => {
    // Loop through the checked array to see if the id of the clicked character has ALREADY been clicked
    this.state.checked.map(guess => {
      if (guess === id) {
        alert ("game over")
        let score = 0
        let topscore = this.state.score
        this.setState({ topscore , score })
        this.setState({ checked: []})
        return
      }
    })
    //This function will increase the user's score and 
    // when a character card is clicked, its id is added to the state.checked array.
    let score = this.state.score + 1
    this.setState({ score })
    this.setState({ checked: [...this.state.checked, id] })
  };
  


  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <ScoreBoard 
        score={this.state.score}
        topscore={this.state.topscore}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            friendCheck={this.friendCheck}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
