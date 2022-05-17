import React, { useEffect, useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || gUser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError || resetError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message || resetError?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    const resetPassword = async () => {
        const email = prompt('please give your email')
        if (email) {
            await sendPasswordResetEmail(email);
            toast('email sent')
        }
        else {
            toast('please give your email')
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-bold'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                <span onClick={resetPassword}
                                    className="label-text-alt text-primary">Forgot password?</span>
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p><small>New to treatment service ?<Link className='text-primary' to='/signup'> Create new account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;