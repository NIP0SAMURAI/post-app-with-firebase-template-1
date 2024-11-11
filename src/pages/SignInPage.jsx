export default function SignInPage() {

    return (
        <section id="sign-up-page" className="page">
            <h1>Sign In</h1>
            <form id="sign-up-form" onSubmit={handleSignUp}>
                <label htmlFor="mail">Mail</label>
                <input id="mail"type="email" name="mail" placeholder="Type your mail..."
                required
                autoComplete="off" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" aria-label="password" placeholder="Type your password..." autoComplete="current-password" />
                <div className="btns">Sign In</div>
            </form>
        </section>
    );
}