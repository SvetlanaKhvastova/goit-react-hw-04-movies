import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import services from '../../services/services';
import Form from '../../components/Form/Form';
import Spinner from '../../components/Loader/Loader';
import s from './MoviesPage.module.css';

import queryString from 'query-string';
console.log(queryString);
const { searchMovies } = services;
const ListFilms = lazy(() => import('../../components/ListFilms/ListFilms'));

class MoviesPage extends Component {
  state = {
    query: '',
    searchFilms: [],
  };

  componentDidMount() {
    // console.log(`componentDidMount`);

    const { pathname, search } = this.props.location;

    if (pathname && search) {
      this.setState({ query: queryString.parse(search).query });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`componentDidUpdate`);
    const { query: prevQuery } = prevState;
    const { query: currentQuery } = this.state;

    if (prevQuery !== currentQuery) {
      this.getSearchFilms(currentQuery);
    }
  }

  getSearchFilms = searchQuery => {
    searchMovies(searchQuery).then(results => {
      this.setState({ searchFilms: results });
    });
  };

  onSubmitForm = currentQuery => {
    const { history, location } = this.props;

    this.setState({ query: currentQuery.toLowerCase() });

    history.push({ ...location, search: `query=${currentQuery.trim()}` });
  };

  render() {
    const { query, searchFilms } = this.state;

    return (
      <div>
        <div>
          <Form onSubmit={this.onSubmitForm} />

          <div className={s.movies__page}>
            {searchFilms && (
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route
                    to={`/movies/query=${query}`}
                    render={prop => <ListFilms films={searchFilms} {...prop} />}
                  />
                </Switch>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MoviesPage;
