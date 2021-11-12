import React from "react";
import styles from "./Nav.module.css"

function Nav() {
  return (
    <div class="container-fluid">
      <nav className={styles.navbar} class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li>
              <a id="len1" className={styles.hoverable} href="#">
                Home
              </a>
            </li>
            <li>
              <a id="len2" className={styles.hoverable} href="#">
                Contacto
              </a>
            </li>
            <li>
              <a id="len3" className={styles.hoverable} href="#">
                Acerca de
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
