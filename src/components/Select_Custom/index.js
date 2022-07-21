import { FormControl, InputLabel, Select } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect, useState } from 'react'


function Select_Custom({props1, props2, props3, propsData}) {
    let idLabelTemp = "lbl" + props1.toString().replace(/\s/g, '');
    let idSelectTemp = "slt" + props1.toString().replace(/\s/g, '');
    let widthTemp = props2.toString() + "ch"
    
    if (propsData != undefined) {
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
                    {
                        propsData.map((data, index) => {
                            console.log(data.Name)
                            return (
                                <MenuItem key={index} value={data.id}>{data.Name}</MenuItem>
                            )
                        })
                    
                    }

                </Select>
            </FormControl>
        </div>
    )
                }
}

export default Select_Custom;