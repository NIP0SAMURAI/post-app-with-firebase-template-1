import { NavLink } from "react-router-dom";

export default function Nav() {
  // Image URLs for each state (active and inactive)
  const images = {
    search: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Search-Active.svg",
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Search-Innactive.svg",
    },
    articles: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Article-Active.svg",
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Article-Innactive.svg",
    },
    createPost: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/AddMushroom-Active.svg",
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/AddMushroom-Innactive.svg",
    },
    forum: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Froum-Active.svg",
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Forum-Innactive.svg",
    },
    profile: {
      active:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Profile-Active.svg",
      inactive:
        "http://portfolio.nipomultimedia.dk/wp-content/uploads/2024/11/Profile-Innactive.svg",
    },
  };

  return (
    <nav>
      <NavLink to="/" end>
        {({ isActive }) => (
          <div className="nav-item">
            <img
              src={isActive ? images.search.active : images.search.inactive}
              alt="Search Icon"
              className="nav-icon"
            />
            <span className="nav-label">Home</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/articles">
        {({ isActive }) => (
          <div className="nav-item">
            <img
              src={isActive ? images.articles.active : images.articles.inactive}
              alt="Articles Icon"
              className="nav-icon"
            />
            <span className="nav-label">Articles</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/create">
        {({ isActive }) => (
          <div className="nav-item">
            <img
              src={
                isActive ? images.createPost.active : images.createPost.inactive
              }
              alt="Create Post Icon"
              className="nav-icon"
            />
            <span className="nav-label">Create</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/forum">
        {({ isActive }) => (
          <div className="nav-item">
            <img
              src={isActive ? images.forum.active : images.forum.inactive}
              alt="Forum Icon"
              className="nav-icon"
            />
            <span className="nav-label">Forum</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/signup">
        {({ isActive }) => (
          <div className="nav-item">
            <img
              src={isActive ? images.profile.active : images.profile.inactive}
              alt="Profile Icon"
              className="nav-icon"
            />
            <span className="nav-label">Profile</span>
          </div>
        )}
      </NavLink>
    </nav>
  );
}
