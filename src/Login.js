export default function login() {
    function loginHandler(event) {

    }

    return(
        <form onSubmit={loginHandler}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <button>Login</button>
        </form>
    );
}