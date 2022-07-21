import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TextField_Custom from '../../../components/TextField_Custom'
import Select_Custom from "../../../components/Select_Custom";
import DatePicker_Custom from "../../../components/DatePicker_Custom";
import Button_Custom from "../../../components/Button_Custom";
import React, { useEffect, useState } from 'react'

function OpenIndividualCustomer({propsData}) {
    console.log("chilren")
    console.log(propsData)
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
                        1. Open Individual Customer
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
                        <TextField_Custom props1="First Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="Last Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="Middle Name" props2="22.5" props3="NO"/>
                        <TextField_Custom props1="GB Short Name" props2="35" props3="YES"/>
                        <TextField_Custom props1="GB Full Name" props2="35" props3="YES"/>
                        <DatePicker_Custom props1="Birthday" props2="350" props3="YES"/>
                        <TextField_Custom props1="GB Street" props2="35" props3="YES"    />
                        <TextField_Custom props1="GB Town/Dist" props2="35" props3="YES"/>  
                        <TextField_Custom props1="Mobile Phone" props2="15" props3="NO"/>  
                        <Select_Custom props1="City/Province" props2="35" props3="NO" propsData={propsData.cityProvinceData}/>
                        <Select_Custom props1="GB Country" props2="30" props3="NO" propsData={propsData.countryData}/>
                        <Select_Custom props1="Nationality" props2="30" props3="NO" propsData={propsData.countryData}/>
                        <Select_Custom props1="Residence" props2="30" props3="NO" propsData={propsData.countryData}/>
                        <Select_Custom props1="Doc Type" props2="20" props3="YES"/>
                        <TextField_Custom props1="Doc ID" props2="20" props3="YES"/>
                        <DatePicker_Custom props1="Doc Issue Date" props2="350" props3="YES"/>
                        <DatePicker_Custom props1="Doc Expiry Date" props2="350" props3="YES"/>
                        <TextField_Custom props1="Email Address" props2="35" props3="NO"/>
                        <Select_Custom props1="Main Sector" props2="30" props3="YES"/>
                        <Select_Custom props1="SubSector" props2="30" props3="YES"/>
                        <Select_Custom props1="Main Industry" props2="30" props3="YES"/>
                        <Select_Custom props1="Industry" props2="30" props3="YES"/> 
                        <Select_Custom props1="Account Officer" props2="25" props3="NO" propsData={propsData.accountOfficerata}/>
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

export default OpenIndividualCustomer;