import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSearchParams } from '../../utils';
import { movieService } from '../../services';
import { MovieFilter, MoviesLists } from '../../components';
import { useFilterForm } from '../../hooks';

export function MoviesPage() {

    let params = useParams();
    const [searchParams, setSearchParams] = useState({...params, ...getSearchParams(params)})

    // const {} = useFilterForm({params, getSearchParams})

    return (
        <>

            {/* <MovieFilter dataForm={{ register, handleSubmit, setSearchParams, handleSearchForm,  setSearchParams}} /> */}
            <MoviesLists callback={movieService.getAll} params={{ ...searchParams }} />
        </>
    );
}

