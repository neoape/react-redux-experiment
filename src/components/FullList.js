import React from 'react';
import {PlayerAPI} from '../api/players';
import { Link } from 'react-router-dom';

const FullList = () => {
  let players = PlayerAPI.all().map( p => {
    return(
      <li key={p.number}>
        <Link to={`/list/${p.number}`}>{p.name}</Link>
      </li>
    )
  })

  return(
    <div className="jumbotron center">
      <h1 className="lead">List of all players</h1>
      <ul>
        {players}
      </ul>
    </div>
  )
};

export default FullList;