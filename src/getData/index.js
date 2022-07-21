import axios from "axios"

//let cityProvinceData = []

async function getData() {
    let data = {
        cityProvinceData: new Array(),
        countryData: new Array(),
        accountOfficerData: new Array(),
        category: new Array(),
        chargeCode: new Array()

    }
    //CITY_PROVINCE
    await axios.get('https://cb-be.azurewebsites.net/storage/get_city_province')
    .then(res => {
        let resData = res.data.rows
        data.cityProvinceData = []
        resData.map((value) => {
            data.cityProvinceData.push(value)
        })
    })
    .catch(err => {
        console.log(err)
    })
    //COUNTRY
    await axios.get('https://cb-be.azurewebsites.net/storage/get_country')
    .then(res => {
        let resData = res.data.rows
        data.countryData = resData
    })
    .catch(err => {
        console.log(err)
    })
    //ACCOUNT OFFICER
    await axios.get('https://cb-be.azurewebsites.net/storage/get_account_officer')
    .then(res => {
        let resData = res.data.rows
        data.accountOfficerData = []
        resData.map((value) => {
            data.accountOfficerData.push(value)
        })
    })
    .catch(err => {
        console.log(err)
    })
    //CATEGORY
    await axios.get('https://cb-be.azurewebsites.net/storage/get_category')
    .then(res => {
        let resData = res.data.rows
        data.categoryData = []
        resData.map((value) => {
            data.categoryData.push(value)
        })
    })
    .catch(err => {
        console.log(err)
    })
    //CHARGECODE
    await axios.get('https://cb-be.azurewebsites.net/storage/get_charge_code')
    .then(res => {
        let resData = res.data.rows
        data.chargeCodeData = resData
    })
    .catch(err => {
        console.log(err)
    })

    return data
}

export default getData


