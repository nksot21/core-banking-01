import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
// import styled from 'styled-components'
import './SubMenu.css'

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>
            <div
                className='SidebarLink'
                to={item.path} 
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <div className='SidebarLabel'>{item.title}</div>
                </div>
                <div>
                    {item.subNav && subnav 
                        ? item.iconOpened 
                        : item.subNav 
                        ? item.iconClosed
                        : null
                    }
                </div>
            </div>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <div className='DropdownLink' to ={item.path}
                        key={index}
                    >
                        {item.icon}
                        <div className='SidebarLabel'>{item.title}</div>
                    </div>
                )
            })}
        </>
    )
}

export default SubMenu

