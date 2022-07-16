import { FormControl, InputLabel, Select } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';

function Select_Custom({props1, props2, props3}) {
    let idLabelTemp = "lbl" + props1.toString().replace(/\s/g, '');
    let idSelectTemp = "slt" + props1.toString().replace(/\s/g, '');
    let widthTemp = props2.toString() + "ch"
    return (
        <div
            style={
                props3.toString() === "NO" ? 
                    {
                        // display:  "inline",
                        marginRight: "30px",
                        marginBottom: "20px" 
                    }
                : 
                    {
                        // lineBreak: "auto",
                        marginRight: "30px",
                        marginBottom: "20px" 
                    }
            }
        >
            <FormControl sx={{ m: 0, minWidth: `${widthTemp}` }}>
                <InputLabel id={idLabelTemp}>{props1}</InputLabel>
                <Select
                    labelId={idLabelTemp}
                    id={idSelectTemp}
                    // value="age"
                    label={props1}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Select_Custom;