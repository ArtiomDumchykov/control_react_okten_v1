import React, { useState } from 'react';

import { localStorageKeys } from '../../constans';
import { isCheckLocalStorage } from '../../utils';
import { FavoriteLists } from '../../components'

export function FavoritePage() {

    const {favoritesKey} = localStorageKeys;

    const isFavorites = isCheckLocalStorage(favoritesKey);

    const [favoritesData, setFavoritesData] = useState(isFavorites || [])

    return (
        <>
            <FavoriteLists favorites={favoritesData} />
        </>
    )
}
