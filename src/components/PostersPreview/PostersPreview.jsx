import React, { useState, useMemo, useEffect } from 'react';

import styles from './PostersPreview.module.scss';

import { PosterPreview } from './PosterPreview/PosterPreview';
import { createPages } from '../../utils';

export const utils_casts = {
    limit: 5,
    all: null,
    page: 1,
    pages: {},
    total: {
        value: null,
    },
    getPage(page) {
        return this.pages[`page_${page}`];
    },
};

export function PostersPreview({ casts }) {
    useEffect(() => {
        
        utils_casts.all = casts;
        createPages(utils_casts);
    }, [casts]);

    const getPage = useMemo(() => utils_casts.getPage.bind(utils_casts), []); 

    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState([]);

    useEffect(() => {
        
        setPage(getPage(currentPage));
    }, [getPage, currentPage, casts]);

    const handlePrev = (e) => {
        if (currentPage <= 1) {
            const target = e.targer;
            console.log(target);
            return 
        };
        setCurrentPage(prev => prev - 1);
    };

    const handleNext = (e) => {
        if (currentPage >= utils_casts.total.value) return;
        setCurrentPage(prev => prev + 1);
    };

    return (

        <div className={styles.posters}>
            <div className={styles.buttonContainer}>
                <button 
                    className={styles.button} 
                    onClick={handlePrev}
                    disabled={currentPage <= 1}
                >
                    prev
                </button>
                <button 
                    className={styles.button} 
                    onClick={handleNext}
                    disabled={currentPage  === utils_casts.total.value}
                >
                    next
                </button>
            </div>
            <div className={styles.posters__carts}>
                {page?.length && [...page].map(item => <PosterPreview cast={item} key={item.id} />)}
            </div>
        </div>

    );
}

// old experemental

//     utils_casts.all = casts;
//     createPages(utils_casts)

//     const getPage = utils_casts.getPage.bind(utils_casts) 

//     const [currentPage, setCurrentPage] = useState(utils_casts.page || 1)
//     const [page, setPages] = useState(getPage(currentPage))

//     const hadleSetCurrentPage = () => {
//         setPages(getPage(currentPage))
//     }

//     const handlePrev = () => {
//         if (currentPage <= 1 ) return

//         setCurrentPage(prev => prev - 1)
//         hadleSetCurrentPage()
//     }

//     const handleNext = () => {
//         if (currentPage > utils_casts.total.value ) return
//         setCurrentPage(prev => prev + 1)
//         hadleSetCurrentPage()
//     }
