import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';

import { router } from './router';
import { AuthContextProvider } from './HOC/AuthContextProvider';
import { ThemeContextProvider } from './HOC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    </AuthContextProvider>

);



