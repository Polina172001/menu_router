import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__item"  activeClassName="menu__item-active"> Главная </NavLink>
      <NavLink to="/drift" className="menu__item"  activeClassName="menu__item-active"> Дрифт-такси </NavLink>
      <NavLink to="/time" className="menu__item"  activeClassName="menu__item-active"> Time attack </NavLink>
      <NavLink to="/forza" className="menu__item"  activeClassName="menu__item-active"> Forza karting </NavLink>
    </nav>
  );
};

export default Menu