import React from 'react';
import './MoviesLists.scss';
import { useScrollPagination } from '../../hooks';
import { Movie } from './Movie/Movie';

export function MoviesLists({ callback, params }) {
  const { lastElementRef, data } = useScrollPagination(callback, params);

  return (
    <section className="movies">
      <div className="movies__container _container">
        <div className="movies__content">
          <div className="movies-list-wrap">
            <ul className="movies__list">
              {data?.results?.length &&
                data.results.map((item, index) => <Movie movie={item} key={item.id + "_" + index} />)}
              <span ref={lastElementRef}></span>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}