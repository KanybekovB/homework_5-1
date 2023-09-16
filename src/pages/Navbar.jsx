import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <header id="header">
        <div className="logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
        <nav>
          <form className="search" action="search.php">
            <input name="q" placeholder="Search..." type="search" />
          </form>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/posts">Posts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
