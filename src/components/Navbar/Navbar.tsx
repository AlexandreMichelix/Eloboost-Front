import React, { FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    Navbar Component
  </div>
);

export default Navbar;
