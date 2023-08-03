import React, {useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSearchParams } from '../../utils';
import { movieService } from '../../services';
import { MovieFilter, MoviesLists } from '../../components';

export function MoviesPage() {

    let params = useParams();

    const [selectDataForm, setSelectDataForm] = useState({ ...params,  ...getSearchParams(params) });

    return (
        <>

            <MovieFilter dataForm={{ selectDataForm, setSelectDataForm }} />
            <MoviesLists callback={movieService.getAll} params={{ ...selectDataForm}} />
        </>
    );
}