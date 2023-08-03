import React from 'react';

import '../MoviesLists/Movie/Movie.scss';

import { Movie } from '../MoviesLists/Movie/Movie';

export function FavoriteLists({ favorites }) {
    return (
        <section className='movies'>
            <div className="movies__container _container">
                <h2 className='movies__title-header'>MoviesLists</h2>
                <div className="movies__content">
                    <div className="movies-list-wrap">
                        <ul className='movies__list'>

                            {!!favorites?.length && [...favorites].map((item, index) => <Movie movie={item} key={item.id + index} />)}

                            {/* <span ref={lastElementRef}></span> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
