import React, { Component } from 'react';
import ListFilms from '../../components/ListFilms/ListFilms';
import services from '../../services/services';

class HomePage extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    const { getTrending } = services;

    getTrending().then(results => {
      this.setState({ results });
    });
  }

  render() {
    const { results } = this.state;

    return (
      <div>
        <ListFilms films={results} {...this.props} />
      </div>
    );
  }
}
export default HomePage;
