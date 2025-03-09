import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <ul>
      <li className="active">
        <Link to="introduction">Introduction</Link>
      </li>
      <li>
        <Link to="installation">Installation</Link>
      </li>
      <li>
        <Link to="">Hooks</Link>
        <ul>
          <li>
            <Link to="">useState</Link>
          </li>
          <li>
            <Link to="">useEffect</Link>
          </li>
          <li>
            <Link to="">useRef</Link>
          </li>
          <li>
            <Link to="">useCallback</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="">Navigation</Link>
      </li>
      <li>
        <Link to="">Routing</Link>
      </li>
      <li>
        <Link to="">Optimization</Link>
      </li>
    </ul>
  );
};
