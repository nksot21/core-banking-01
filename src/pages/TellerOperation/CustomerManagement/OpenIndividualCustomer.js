import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField_Custom from '../../../components/TextField_Custom'
import Select_Custom from "../../../components/Select_Custom";

function OpenIndividualCustomer() {
    return (
        <div>
            {/* <TextField_Custom_Custom 
                props1="First Name"
                props2="20"
                props3="NO"
            />

            <TextField_Custom_Custom 
                props1="Last Name"
                props2="20"
                props3="YES"
            /> */}

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
                        1. Open Individual Customer
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ paddingLeft: "30px"}}>
                    <div
                        style={{ 
                            display: "flex", 
                            width: "100%", 
                            // backgroundColor: "#333", 
                            flexWrap: "wrap"
                        }}
                    >
                        <TextField_Custom props1="First Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="Last Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="Middle Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="GB Short Name" props2="35" props3="NO"/>
                        <TextField_Custom props1="GB Full Name" props2="35" props3="NO"/>
                        <TextField_Custom props1="Birthday" props2="18" props3="NO"/>
                        <TextField_Custom props1="GB Street" props2="35" props3="NO"/>
                        <TextField_Custom props1="GB Town/Dist" props2="35" props3="NO"/>  
                        <TextField_Custom props1="Mobile Phone" props2="15" props3="NO"/>  
                        <Select_Custom />
                        
                    </div>

                


                </AccordionDetails>
            </Accordion>
        </div>

        
    )
}

export default OpenIndividualCustomer;