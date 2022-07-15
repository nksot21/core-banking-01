import TextField_Custom from "../../../components/TextField_Custom/TextField_Custom";

function OpenIndividualCustomer() {
    return (
        <div>
            <TextField_Custom 
                props1="First Name"
                props2="20"
                props3="NO"
            />

            <TextField_Custom 
                props1="Last Name"
                props2="20"
                props3="YES"
            />
        </div>

        
    )
}

export default OpenIndividualCustomer;