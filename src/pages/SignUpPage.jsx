import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage() {
    async function handleSignUp(event) {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const mail = form.mail.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(auth, mail, password)
        .then(userCredential =>  {
            const user = userCredential.user;
            console.log(user);
            createUser(user.uid, mail, name);
        })
        .catch(error => {
            console.log(error);
        })
    }

        async function createUser(uid, mail, name) {
            const url = `https://mushroom-webapp-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify({ name, mail })
            });
            if (response.ok) {
                const data = await response.json();
                console.log("New user created: ", data);
            } else {
              console.log("Sorry, something went wrong");
            }
        }

    return (
        <section id="sign-up-page" className="page">
            <h1>Sign Up</h1>
            <form id="sign-up-form" onSubmit={handleSignUp}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Type your name..." />
                <label htmlFor="mail">Mail</label>
                <input id="mail"type="email" name="mail" placeholder="Type your mail..."
                required
                autoComplete="off" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" name="password" aria-label="password" placeholder="Type your password..." autoComplete="current-password" />
                <div className="btns">Sign Up</div>
            </form>
        </section>
    );
}