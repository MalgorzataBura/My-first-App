import React from 'react';
import { NavLink } from "react-router-dom";

const MenuItem = ({ link, name }) => (
    <li>
        <NavLink to={link}>{name}</NavLink>
    </li>
);

export default MenuItem;