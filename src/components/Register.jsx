import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)


    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const users = result.user;
                console.log('sign in kaj kore', users)
                event.target.reset('');

            })
            .catch(error => {

                console.error(error)
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
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


                        <input className="btn btn-primary" type="submit" value="register now" />

                    </div>
                    <p className="text-center">all ready have accound <Link to='/login' className="bg-rose-400 px-4 py-1 rounded-sm">login</Link></p>
                </form>

            </div>
        </div>
    );
};


export default Register;