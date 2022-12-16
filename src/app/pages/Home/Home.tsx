import React, { FC } from 'react';
import styles from './Home.module.css';
import Card from "../../components/Cards/Cards";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
      <div>
          {/*Filter & Nom*/}
            TEST
      </div>
      <div className={styles.cards}>
          {/*Objet offre demande à toi*/}

            <Card></Card>
            <Card></Card>

      </div>
      <div>
          {/*Object offre demande générale*/}
            TEST

      </div>
  </div>
);

export default Home;
