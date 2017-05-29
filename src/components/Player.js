import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.player.name} (#{this.props.player.number})</h1>
        <h2>{this.props.player.position}</h2>
      </div>
    )
  }
};

export default Player;