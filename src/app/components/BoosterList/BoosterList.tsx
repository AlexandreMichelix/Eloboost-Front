import React, { FC } from "react";
import styles from "./BoosterList.module.css";
import { FormLabel, FormControlLabel, FormControl } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import CardOffer from "../CardOffer/CardOffer";

interface BoosterListProps {}

const BoosterList: FC<BoosterListProps> = () => (
  <div className={styles.BoosterList} data-testid="BoosterList">
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Boosters</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="booster-id1"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="booster-id1"
          control={<Radio />}
          label={<CardOffer />}
        />
      </RadioGroup>
    </FormControl>
  </div>
);

export default BoosterList;
