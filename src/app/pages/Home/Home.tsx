import React, { FC } from "react";
import BoosterList from "../../components/BoosterList/BoosterList";
import CardOffer from "../../components/CardOffer/CardOffer";
import CardRequest from "../../components/CardRequest/CardRequest";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="bg-white min-h-screen flex" data-testid="Home">
    <div className="flex-1">
      <BoosterList></BoosterList>
    </div>
    <div className="flex-1">
      {/*Objet offre demande à toi*/}
      <div>
        <CardRequest></CardRequest>
      </div>
    </div>
  </div>
);

export default Home;
