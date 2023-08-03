import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import './LoginForm.scss';

import { ROUTES } from '../../routes';
import { Context } from '../../HOC';
import { loginValidators } from '../../validatos';

import { db_users } from '../../_db';

export function LoginForm() {
    const navigate = useNavigate();
    const { setAuthContext } = useContext(Context)

    const { register, handleSubmit, reset, formState: { errors, isValid }, setValue } = useForm({
        mode: 'all',
        resolver: joiResolver(loginValidators)
    })

    const checkUser = async (user) => {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                const findUser = db_users.find(({ login }) => login === user?.login);

                if (findUser !== -1) {
                    resolve(findUser)
                } else {
                    // const id = db_users.at(-1)?.id + 1
                    // const createUser = {
                    //     id, 
                    //     login: user.login,
                    //     password: user.password,
                    //     role: "user"
                    // }
                    // db_users.push(createUser)
                    // resolve(createUser)
                    throw new Error("Login or password is missing")
                }
            }, 1000)
        })
            .then(data => {
                const { login, password } = data

                if (login !== user?.login || password !== user?.password) {
                    console.log("Login or password is missing");
                    return
                } else {
                    setAuthContext(prev => ({ ...prev, isLogin: true }))
                    navigate(`${ROUTES.MAIN}`);
                    reset();
                    return data
                }
            })
            .catch(error => console.log(error, error.message))
    }

    return (
        <div className='form-wrap'>
            <div className="form-wrap-container">
                <form className="login-form" onSubmit={handleSubmit(checkUser)}>
                    <h2 className='login__title-text'>Login</h2>
                    <div className="login-form__container">

                        <div className="form__fields">
                            <div className="fields-wrap">
                                <label htmlFor="" className="label-wrap">
                                    <span className="label-text">login</span>
                                    <input type="text" {...register("login")} placeholder='login' className='form-input' />
                                    {errors.login && <span>{errors.login.message}</span>}
                                </label>
                            </div>
                            <div className="fields-wrap">
                                <label htmlFor="" className="label-wrap">
                                    <span className="label-text">password</span>
                                    <input type="password" {...register("password")} placeholder='password' className='form-input' />
                                    {errors.password && <span>{errors.password.message}</span>}
                                </label>
                            </div>
                        </div>

                        <div className="submit-wrap-btn">
                            <button
                                style={{
                                    padding: "7px 15px",
                                    border: "1px solid black"
                                }}
                                type='submit'
                                className='submit-btn'
                                disabled={!isValid}
                            >
                                login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

