import { IconContext } from "react-icons/lib";

import './Sidebar.css'
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

function Sidebar() {
    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="SidebarNav">
                    <div className='SidebarWrap'>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Sidebar;