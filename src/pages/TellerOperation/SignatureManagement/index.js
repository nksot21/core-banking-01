import Amend from "./Amend";
import Capture from "./Capture";
import Enquiry from "./Enquiry";
import See from "./See";
import Status from "./Status";

function SignatureManagement() {
    return (
        <div>
            <Capture />

            <Enquiry />

            <See />

            <Amend />

            <Status />
        </div>
    )
}


export default SignatureManagement;