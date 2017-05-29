import React from 'react';
import {PlayerAPI} from '../api/players';
import Player from '../components/Player';

class PlayerContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      player: {}
    }
  }
  componentWillMount() {
     this.setState(
      {
        player: PlayerAPI.get(
          parseInt(this.props.match.params.number, 10)
        )
      }
    ) 
  }
  render() {
    return <Player player={this.state.player}/>
  }
};

export default PlayerContainer;