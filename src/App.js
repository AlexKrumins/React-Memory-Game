import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ScoreBoard from "./components/ScoreBoard";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    friends,
    checked: [],
    score : 0,
    topscore : 0
  };
  
  
  friendCheck = id => {
    // Loop through the checked array to see if the id of the clicked character has ALREADY been clicked
    this.state.friends.find((j, k) => {
      if (j.id === id) {
        if (friends[k].count === 0) {
          friends[k].count = friends[k].count + 1;
          let score = this.state.score + 1
          this.setState({ score })
        }
        alert ("game over")
        let score = 0
        let topscore = this.state.score
        let checked = []
        if (this.state.topscore < topscore) {
          this.setState({ topscore })
        }
        this.setState({ checked, score })
        return
      }
    })
    //This function will increase the user's score and 
    // when a character card is clicked, its id is added to the state.checked array.
    this.setState({ checked: [...this.state.checked, id] })
  };
  


  render() {
    const shuffledFriends = shuffleArray(this.state.friends)
    return (
      <Wrapper>
        <Title>Friends List</Title>
        <ScoreBoard 
        score={this.state.score}
        topscore={this.state.topscore}
        />
        {shuffledFriends.map(friend => (
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
