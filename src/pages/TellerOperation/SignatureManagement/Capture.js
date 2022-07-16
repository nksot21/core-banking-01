import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField_Custom from '../../../components/TextField_Custom'             
import Button_Custom from "../../../components/Button_Custom";
import UploadButton_Custom from "../../../components/UploadButton_Custom";

function Capture() {
    return (
        <div>
            <Accordion >
                <AccordionSummary
                    expandIcon  ={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography 
                        variant="h6" 
                        align="center" 
                        color="#0a3060"
                        fontWeight= "700"
                        sx={{
                            padding: "10px"
                        }}
                    >
                        1. Capture
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ paddingLeft: "30px"}}>
                    <div
                        style={{ 
                            display: "flex", 
                            width: "100%", 
                            flexWrap: "wrap"
                        }}
                    >
                        <TextField_Custom props1="Customer ID" props2="30" props3="YES"/>
                    </div>
                    
                    <div
                        style={{ 
                            display: "flex", 
                            width: "100%", 
                            flexWrap: "wrap",
                            paddingTop: "20px",
                            paddingBottom: "20px",
                        }}
                    >
                        <Typography
                            variant="h6" 
                            align="center" 
                            alignContent="center"
                            color="#0a3060"
                            fontWeight= "550"
                            paddingRight="30px"
                        >
                            Signature:
                        </Typography>
                        <UploadButton_Custom props1="Select signature image" props2="10" props3="YES"/>
                    </div>

                    <div
                        style={{ 
                            // display: "flex", 
                            width: "100%", 
                            // backgroundColor: "#333", 
                            // flexWrap: "wrap"
                        }}
                    >
                        <Button_Custom props1="Save"/> 
                    </div>
                        


                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Capture; 