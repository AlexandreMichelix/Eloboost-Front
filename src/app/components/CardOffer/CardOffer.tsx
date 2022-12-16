import React, { FC } from 'react';
import playerIcon from "../../../assets/icons/avatar-placeholder.png";
import {Paper} from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

interface CardOfferProps {}

const CardOffer: FC<CardOfferProps> = () => (
  <div data-testid="Card">
      <Paper elevation={6} className="w-fit h-fit flex font-sans">
          <div className="flex-none w-12 relative">
              <img src={playerIcon} alt="test" className="absolute inset-0 object-cover"
                   loading="lazy"/>
          </div>
          <form className="flex-none p-2">
              <div className="justify-center flex flex-wrap">
                  <div className="w-full flex-none text-xs font-medium text-slate-700">
                      [Offres]
                  </div>
                  <div className="space-x-10 text-xs font-semibold text-slate-500 mt-2">
                      <span className="text-xs font-semibold text-slate-900">
                        [Player Name]
                      </span>
                      <span className="text-xs font-semibold text-slate-900">
                        [Niveau]
                      </span>
                  </div>
              </div>
              <div className="flex space-x-4 mb-6 text-xs font-medium">
                  <div className="justify-center flex-auto flex space-x-4">
                      <button className="h-6 px-3 font-semibold rounded-md bg-black text-white" type="submit">
                          [Argent/€]
                      </button>
                      <button className="h-6 px-3 font-semibold rounded-md border border-slate-200 text-slate-900"
                              type="button">
                          [Ajouter au panier]
                      </button>
                  </div>
                  {/* Favoris à rajouter si on a le temps */}
                  {/*<button*/}
                  {/*    className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"*/}
                  {/*    type="button" aria-label="Like">*/}
                  {/*    <svg width="20" height="20" fill="currentColor" aria-hidden="true">*/}
                  {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                  {/*              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>*/}
                  {/*    </svg>*/}
                  {/*</button>*/}
              </div>
              <p className="justify-center text-xs text-slate-700">
                  [Courte description]
              </p>
          </form>
      </Paper>
  </div>
);

export default CardOffer;
