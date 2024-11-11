import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function UpdatePage() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    const url = `https://mushroom-webapp-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.id}.json`;

    useEffect(() => {
        async function getPost() {
            const response = await fetch(url);
            const postData = await response.json();
            console.log(postData);
            setName(postData.name);
            setTitle(postData.title);
            setCaption(postData.caption);
            setImage(postData.image);
        }

        getPost();
}, [url]);

    async function handleSubmit(event) {
        event.preventDefault();

        const postToUpdate = {name, title, caption, image};

        const response = await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(postToUpdate)
        });

        if (response.ok) {
            navigate(`/posts/${params.id}`);
        } else {
            console.log("Error updating post data");
        }
    }

    return (
        <section className="page" id="update-page">
            <div className="container">
                <h1>Update post</h1>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            aria-label="name"
            placeholder="Write the name..."
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="title">Edibility</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            aria-label="title"
            placeholder="Choose the edibility..."
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="caption">Location</label>
          <input
            id="caption"
            name="caption"
            type="text"
            value={caption}
            aria-label="caption"
            placeholder="Write a caption..."
            onChange={e => setCaption(e.target.value)}
          />
          <label htmlFor="image-url">Image</label>
          <input
            id="image-url"
            name="image-url"
            type="url"
            value={image}
            aria-label="image"
            placeholder="Paste an image url..."
            onChange={e => setImage(e.target.value)}
          />
          <label htmlFor="image-preview"></label>
          <img
            id="image-preview"
            className="image-preview"
            src={
              image
                ? image
                : "https://placehold.co/600x400?text=Paste+an+image+URL"
            }
            alt="Choose"
            onError={e =>
              (e.target.src =
                "https://placehold.co/600x400?text=Error+loading+image")
            }
          />
          <div className="btns">
            <button>Save</button>
          </div>
        </form>
            </div>
        </section>
    );
}