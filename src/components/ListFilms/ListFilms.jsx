import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './ListFilms.module.css';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const ListFilms = ({ films, location }) => {
  // console.log(films);
  return (
    <>
      <ul className={s.ImageGallery}>
        {films &&
          films.map(({ id, original_name, original_title, poster_path }) => {
            return (
              <li key={id} className={s.ImageGalleryItem}>
                <NavLink
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                >
                  <img
                    src={
                      poster_path
                        ? `${BASE_IMAGE_URL}${poster_path}`
                        : 'placeholder'
                    }
                    alt={original_name}
                    className={s.ImageGalleryItem_image}
                  />
                  <p>{original_name || original_title}</p>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
};

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      original_title: PropTypes.string,
    }),
  ),
};

export default ListFilms;
