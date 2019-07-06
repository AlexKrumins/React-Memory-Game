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
      if (guess === id) return console.log("newGame()")
    })
    //This function will increase the user's score and 
    // when a character card is clicked, its id is added to the state.checked array.
    let score = this.state.score + 1
    this.setState({ score })
    this.setState({ checked: [...this.state.checked, id] })
    console.log(this.state.checked)
    console.log(this.state.score)
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
        // Map over this.state.friends and render a FriendCard component for each friend object
          <FriendCard
            friendCheck={this.friendCheck}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
