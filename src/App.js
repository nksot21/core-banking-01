import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routes";
import LoginLayout from './layouts/LoginLayout';
import React, { useCallback, useEffect, useState } from 'react'
import getDataFunc from './getData';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'


// const [bio, setBio] = useState([]);
    
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('https://cb-be.azurewebsites.net/storage/get_city_province');
//             const data = await response.json();
//             setBio(data.rows);
//         };
//         fetchData();
//     }, []);

// function useConfigFetch() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch('https://cb-be.azurewebsites.net/storage/get_city_province');
//         const data = await response.json();
//         setData(data.rows);
//     };
//     fetchData();
// }, [])
//   return data
// }

const queryClient = new QueryClient()

// let data = {}
// await getDataFunc().then(res=> {
//   console.log('xxxxxxxxxxxxxxxxxxxxxx')
//   console.log(res)
//   data = res})



const TITLE = 'Core Banking App'
function App() {
//   const [data, setData] = useState([]);
//   useCallback(() => {
//     const fetchData = async () => {
//         const response = await fetch('https://cb-be.azurewebsites.net/storage/get_city_province');
//         const data = await response.json();
//         setData(data.rows);
//     };
//     fetchData();
// }, [])

function Example(){
  const {isLoading, error, data} = useQuery(['getData'], () => 
    //fetch('https://cb-be.azurewebsites.net/storage/get_city_province')
    getDataFunc()
    .then(data => 
      {
        //console.log(data.cityProvinceData)
        return data
      }
    )
  )
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  while(!data){}
  console.log(data.cityProvinceData)
  return (
    <Router>
        <Routes>
        { 
          privateRoutes.map((route, index)=> {
            const Page = route.component
            let Layout
            if (route.path === "/login") {
              Layout = LoginLayout
            } else {
              Layout = DefaultLayout
            }
            return <Route key={index} path={route.path} element={
              <Layout>
                  <Page
                  propsData={data}
                  />
              </Layout>} />
          })
        }
        </Routes>
    </Router>
  )
}

  return (
    <QueryClientProvider client={queryClient}>
    {/* <Router>
        <Routes>
        { 
          privateRoutes.map((route, index)=> {
            const Page = route.component
            let Layout
            if (route.path === "/login") {
              Layout = LoginLayout
            } else {
              Layout = DefaultLayout
            }
            return <Route key={index} path={route.path} element={
              <Layout>
                  <Page
                  props={data}
                  />
              </Layout>} />
          })
        }
        </Routes>
    </Router> */}
    <Example />
    </QueryClientProvider>
  );
}

export default App;

