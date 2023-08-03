import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Main } from '../../components';

export function MainLayout() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}
