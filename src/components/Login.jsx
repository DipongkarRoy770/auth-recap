import { Link, useNavigate, } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogrin = (event) => {

        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const users = result.user;
                console.log('login kaj korce', users)
                event.target.reset('')
                navigate('/')


            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleGoogle = () => {
        googleSignIn()
        // .then(result =>{
        //     const user =result.user 
        //     console.log(user)
        //     alert('user login sucessfully')
        // })
        // .catch(error=>{
        //     console.error(error)
        // })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogrin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-primary" type="submit" value="Login now" />
                    </div>
                    <p className="text-center">create a new accound <Link to='/register' className="bg-rose-400 px-4 py-1 rounded-sm">Register</Link></p>
                    <div className="text-center">
                        <button onClick={handleGoogle} className="btn btn-outline" ><FaGoogle />Google</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;