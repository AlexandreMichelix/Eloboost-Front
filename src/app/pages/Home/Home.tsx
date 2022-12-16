import React, { FC } from 'react';
import CardOffer from "../../components/CardOffer/CardOffer";
import CardRequest from "../../components/CardRequest/CardRequest";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="bg-white mt-7" data-testid="Home">
      <div>
          {/*Filter & Nom*/}
            FILTRE
      </div>
      <div className="grid grid-cols-2 divide-x justify-center">
          {/*Objet offre demande à toi*/}
          <div>
              <CardOffer></CardOffer>
          </div>
          <div>
              <CardRequest></CardRequest>
          </div>
      </div>
      <span>d</span>
      <div className="grid grid-cols-2 divide-x justify-center">
          {/*Objet offre demande à toi*/}
          <div>
              <CardOffer></CardOffer>
          </div>
          <div>
              <CardRequest></CardRequest>
          </div>
      </div>
  </div>
);

export default Home;
