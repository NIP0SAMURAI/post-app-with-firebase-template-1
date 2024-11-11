import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CreatePage() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const post = {
      name,
      title,
      caption,
      image,
      uid: "ZfPTVEMQKf9vhNiUh0bj",
    };

    const response = await fetch(
      "https://mushroom-webapp-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      {
        method: "POST",
        body: JSON.stringify(post),
      }
    );

    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <section className="page">
      <div className="container">
        <h1>Add mushroom</h1>
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
            placeholder="Write the location..."
            onChange={(e) => setCaption(e.target.value)}
          />

          <label htmlFor="image-url">Image</label>
          <input
            id="image-url"
            name="image-url"
            type="url"
            value={image}
            aria-label="image"
            placeholder="Paste an image url..."
            onChange={(e) => setImage(e.target.value)}
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
            onError={(e) =>
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
