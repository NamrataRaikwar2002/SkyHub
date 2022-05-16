import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu = ({ onOpen }) => {
  return (
    <div className="menu">
      <h1 className="primaryColorText centerText appName">SkyHub</h1>
      <ul className="allList">
        <NavLink
          to="/home-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-house-chimney"></i> Home
          </li>
        </NavLink>
        <NavLink
          to="/explore-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-compass"></i>Explore
          </li>
        </NavLink>
        <NavLink
          to="/bookmark-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-bookmark"></i>Bookmark
          </li>
        </NavLink>
        <NavLink
          to="/profile-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-user"></i>Profile
          </li>
        </NavLink>
        <button className="primary_btn btn" onClick={onOpen}>
          Create New Post
        </button>
      </ul>
    </div>
  )
}

export { Menu }
