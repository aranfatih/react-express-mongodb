import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../header';
import { shadows, colors, dimensions } from '../base_styles';

export default class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {programmers: [], authenticated: false};
  }
  
  componentWillMount() {
    axios.get('/programmers')
    .then(res => {
      this.setState({programmers: res.data.programmers, authenticated: res.data.authenticated})
    })
    .catch(err => {
      console.log("Failed Getting Programmers");
    })
  }

  getProgrammers() {
    const users = this.state.programmers.map(programmer => {
      return (
        <div style={styles.userCard} key={programmer.name}>
          <Link to={`/profile/${programmer.name}`} params={programmer} >
            <h2>Name: {programmer.name}</h2>
            <h3>Skills:</h3>
            <ul>
              {programmer.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </Link>
        </div>
      );
    })
    return users;
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {this.getProgrammers()}
        </div>
      </div>
    )
  }
}

const styles = {
  userCard: {
    width: '400px',
    backgroundColor: colors.light_purple,
    margin: dimensions.dl3,
    padding: dimensions.dl4,
    borderRadius: dimensions.dl1,
    boxShadow: shadows.sl1,
  }
}