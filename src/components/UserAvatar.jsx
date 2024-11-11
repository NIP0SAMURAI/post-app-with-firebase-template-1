import { useEffect, useState } from "react";

export default function UserAvatar({ uid }) {
  const [user, setUser] = useState({}); // create a state to store the user data

  useEffect(() => {
    getUser(); // call the getUser function

    async function getUser() {
      const response = await fetch(
        `https://mushroom-webapp-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
      );
      const data = await response.json();
      setUser(data); // set the user state with the data from firebase
    }
  }, [uid]); // <--- "[id]" VERY IMPORTANT!!!
  return (
    <div className="avatar">
      <img src={user?.image} alt={user?.id} className="edibility-icon"/>
      <span>
        <p>{user?.title}</p>
      </span>
    </div>
  );
}
