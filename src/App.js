import React from 'react';
import axios from 'axios';

import CardList from './comonents/cardList/cardList.component';
import { SearchBox } from './comonents/searchBox/search-box.component';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      Users: [],
      searchField: ""
    }
  }

  componentDidMount() {
    axios.get('api/Users.json')
      .then(result => {
        this.setState({ Users: result.data });
      })
  }

  // handle change input
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  // handleChange(e) { this function is error
  // this.setState is not defined
  //   this.setState({searchField: e.target.value})  
  // }


  render() {

    const { Users, searchField } = this.state;
    const filtredUsers = Users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <h1 className="head-users"> Users </h1>

        <SearchBox
          placeholder="Filter Users"
          handleChange={this.handleChange}
        />

        <CardList Users={filtredUsers} />
      </div>
    );
  }

}

export default App;
