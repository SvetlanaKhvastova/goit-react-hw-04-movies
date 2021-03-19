import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import services from '../../services/services';
import Form from '../../components/Form/Form';
import Spinner from '../../components/Loader/Loader';
const { searchMovies } = services;

const ListFilms = lazy(() => import('../../components/ListFilms/ListFilms'));

class MoviesPage extends Component {
  state = {
    query: null,
    searchFilms: null,
  };

  componentDidMount() {
    console.log(`componentDidMount`);
    const { pathname, search } = this.props.location;

    if (pathname && search) {
      this.setState({ query: search });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate`);
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
        <Form onSubmit={this.onSubmitForm} />

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
    );
  }
}
export default MoviesPage;
