import React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

function Dropdown() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-filled-label">Sélectionner un rang</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={'s1'}>Silver1</MenuItem>
                    <MenuItem value={'s2'}>Silver2</MenuItem>
                    <MenuItem value={'etc'}>Etc</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default Dropdown;
