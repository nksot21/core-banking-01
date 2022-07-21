import EnquiryCustomer from "./EnquiryCustomer";
import OpenCorporateCustomer from "./OpenCorporateCustomer";
import OpenIndividualCustomer from "./OpenIndividualCustomer";
import getDataFunc from '../../../getData';
import React, { useEffect, useState } from 'react'

// function useConfigFetch() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//           console.log('xxxxx')
//           const response = await fetch('https://cb-be.azurewebsites.net/storage/get_city_province');
//           console.log(response)
//           const data = await response.json();
//           setData(data.rows);
//       };
//     fetchData();
//   }, [])
//     return data
//   }

function CustomerManagement({propsData}) {
    //const data = useConfigFetch()
    console.log('index')
    console.log(propsData)
    return (
        <div>
            <OpenIndividualCustomer propsData={propsData}/>

            <OpenCorporateCustomer propsData={propsData} />

            <EnquiryCustomer propsData={propsData} />
        </div>
    ) 
}

export default CustomerManagement;