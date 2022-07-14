import { useState } from 'react';
import Link from "next/link";
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../../SidebarData';


export default function MenuMobile() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className="menu-mobile">
            <div className={sidebar ? 'd-none' : 'position-relative hmb-push'}>
                <img src="//cdn.shopify.com/s/files/1/0048/8469/3026/t/10/assets/jas-hamburger-black.svg" width="30"
                    height="16" alt="Menu" onClick={showSidebar}
                />
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link href='/' >
                            <a className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </a>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link href={item.path}>
                                    <a>
                                        {item.icon}
                                        <span className="item-mobile">{item.title}</span>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}
