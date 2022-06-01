import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu = ({ onOpen }) => {
  return (
    <div className="menu">
      <h1 className="primaryColorText centerText appName cursiveFont">SkyHub</h1>
      <ul className="allList">
        <NavLink
          to="/home-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-house-chimney"></i>
            <p className="sideBarName">Home</p>
          </li>
        </NavLink>
        <NavLink
          to="/explore-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-compass"></i>
            <p className="sideBarName">Explore</p>
          </li>
        </NavLink>

        <li className="menuList newPostSmallScreen">
          <i
            className="fa-solid fa-circle-plus primaryColorText"
            onClick={onOpen}
          ></i>
        </li>

        <NavLink
          to="/bookmark-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-bookmark"></i>
            <p className="sideBarName">Bookmark</p>
          </li>
        </NavLink>
        <NavLink
          to="/profile-page"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <li className="menuList">
            <i className="fa-solid fa-user"></i>
            <p className="sideBarName">Profile</p>
          </li>
        </NavLink>
        <button className="primary_btn btn newPostBtn" onClick={onOpen}>
          New Post
        </button>
      </ul>
    </div>
  )
}

export { Menu }
