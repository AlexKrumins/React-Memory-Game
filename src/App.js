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
    score : 0,
    topscore : 0
  };
  
  newGame = () => {
    if (this.state.score === 12) {
      alert (`Congratulations! You got a perfect score. That's so good.`);
    }else{
      alert (`IT'S OVER!\nYour Score: ${this.state.score}`)
    }
    if (this.state.topscore < this.state.score) {
      this.setState({ topscore: this.state.score })
    };
    this.setState({score: 0});
    this.state.friends.forEach(friend => {
      friend.clicks = 0;
    });
    return true;
  }
  
  friendCheck = id => {
    this.state.friends.find((j, k) => {
      if (j.id === id) {
        if (friends[k].clicks === 0) {
          friends[k].clicks = friends[k].clicks + 1;
          let score = this.state.score + 1
          this.setState({ score })
          return true;
        } else {
          this.newGame();
        }
      }
    });
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
