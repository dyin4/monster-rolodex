import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //apy request from the url
    .then(response => response.json()) //convert to json format js can understand
    .then(users => this.setState({monsters:users}));
  }
 //arrow function automatically bind this.state in App
  handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder='search monster'
          handleChange= {this.handleChange}
        />
        <CardList monsters = {filterMonsters} />
      </div>
    );
  }
  }

export default App;
