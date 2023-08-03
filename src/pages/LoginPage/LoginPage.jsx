import React from 'react';

import './LoginPage.scss'

import { LoginForm } from '../../components'
import { BackToHome } from '../../components_UI';

export function LoginPage() {
    return (
        <div className='wrap'>
            <BackToHome 
                styles={{
                    top: "20px",
                    left: "20px"
                }}
            />
            <LoginForm />
        </div>
    )
}
