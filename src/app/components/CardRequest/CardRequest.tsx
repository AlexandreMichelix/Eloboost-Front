'use client';

import React, { FC } from "react";
import playerIcon from "../../../assets/icons/avatar-placeholder.png";
import { Paper } from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { checkout } from "../../../checkout"

interface CardRequestProps {}

const CardRequest: FC<CardRequestProps> = () => (
  <div data-testid="Card">
    <Paper elevation={6} className="w-fit h-fit flex font-sans">
      <div className="flex-none w-32 relative">
        <img
          src={playerIcon}
          alt="test"
          className="absolute inset-0 object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-none p-2">
        <div className="justify-center flex flex-wrap">
          <div className="w-full flex-none text-xs font-medium text-slate-700">
            [Demandes]
          </div>
          <div className="space-x-10 text-xs font-semibold text-slate-500 mt-2">
            <span className="text-xs font-semibold text-slate-900">
              [Booster Name]
            </span>
            <span className="text-xs font-semibold text-slate-900">
              [Booster Level]
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-6 pb-6 border-b border-slate-200">
          <div className="space-x-2 flex text-xs items-center">
            <Dropdown></Dropdown>
            <ArrowRightAltIcon></ArrowRightAltIcon>
            <Dropdown></Dropdown>
          </div>
        </div>
        <p className="justify-center text-xs text-slate-700">
          [Courte description]
        </p>
      </form>
      <div className="flex space-x-4 mb-6 text-xs font-medium">
        <div className="justify-center flex-auto flex space-x-4">
          <button className="h-6 px-3 font-semibold rounded-md bg-black text-white" onClick={(() => {
            checkout({
              lineItems: [
                {
                  price: "price_1MWlv0AwL4pxGCAgHc6On3RA",
                  quantity: 1
                }
              ]
            })
          })}>Valider</button>
        </div>
      </div>
    </Paper>
  </div>
);

export default CardRequest;
