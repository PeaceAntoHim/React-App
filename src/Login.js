
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();


    function loginHandler(event) {
        event.preventDefault();
        // console.log('hahahhahah');
        
        const checkLogin = true;
        if(checkLogin) {
            // redirect
            navigate('/dashboard');
        }
    }

    return(
        <form onSubmit={loginHandler}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>Login</button>
        </form>
    );
}