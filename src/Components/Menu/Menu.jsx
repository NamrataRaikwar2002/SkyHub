import './Menu.css'
import { NavLink, useLocation } from 'react-router-dom'
import {Button} from '@chakra-ui/react';

const Menu = ({ onOpen }) => {
  const location = useLocation();
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
        <Button
              fontSize="2xl"
              bgColor="blue.500"
              color="white"
              size="lg"
              _hover={{
                bgColor: 'blue.400',
              }}
              _focus={{ bgColor: 'none' }}
              _active={{
                bgColor: 'blue.600',
              }}
              disabled={location.pathname==='/bookmark-page'}
              onClick={onOpen}
              display={{base:'none',md:'block'}}
              h='4rem'
            >
            New Post
            </Button>
      </ul>
    </div>
  )
}

export { Menu }
