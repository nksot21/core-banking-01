// import components library
import { TextField} from "@mui/material"

function TextField_Custom({props1, props2, props3}) {
    let idTemp = "txt" + props1.toString().replace(/\s/g, '');
    let widthTemp = props2.toString() + "ch"
    return (
        <div
            style={{
                display:  "inline",
                marginRight: "30px"
            }}
        >
            <TextField 
                sx={{
                    width: `${widthTemp}`
                }} 
                id = {idTemp}
                label = {props1}
                variant="outlined"
            />
        </div>
    )
}

export default TextField_Custom;