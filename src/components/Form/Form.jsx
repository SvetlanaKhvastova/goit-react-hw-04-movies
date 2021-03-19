import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Form.module.css';

class Form extends Component {
  state = {
    queryValue: '',
  };

  handleChange = e => {
    this.setState({
      queryValue: e.target.value,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();

    const { queryValue } = this.state;
    const { onSubmit } = this.props;

    if (queryValue.trim() === '') {
      return;
    }
    onSubmit(queryValue);

    this.setState({
      queryValue: '',
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;

    return (
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            onChange={handleChange}
            value={this.state.queryValue}
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
