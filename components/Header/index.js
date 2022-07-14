import Link from "next/link";
import {useCart} from 'react-use-cart';
import { SidebarData } from '../../SidebarData';
import MenuMobile from '../MenuMobile';



export default function Header() {

    const { totalItems } = useCart();

    return (
        <header className="header-3">
            <div className="header__mid pl-3 pr-3">
                <div className="row align-items-center">
                    <div className="d-lg-none d-lg-2 d-sm col-md-3 col-sm-3 col-3  d-flex justify-content-lg-start d-flex hmb align-items-center">
                        <MenuMobile />
                    </div>
                    <div className="col-lg-2 col-md-6 col-6 justify-content-lg-start align-items-lg-center  justify-content-md-center justify-content-sm-center logo">
                        <h1 className="branding">
                            <Link href="/">
                                <a className="d-block position-relative">
                                    <img src="https://cdn.shopify.com/s/files/1/0536/7660/5620/files/Bonita.png?v=1631118803" alt="" className="w-100 regular__logo" />
                                </a>
                            </Link>
                        </h1>
                    </div>
                    <div className="col-lg-8 d-none d-lg-block">
                        <div className="position-relative d-flex justify-content-center text-align-center">
                            <div className="menu-section menu-main-navigation-container">
                                <nav role="navigation">
                                    <ul className="menu clearfix" id="main-menu">
                                        {SidebarData.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href={item.path}><a>{item.title}</a></Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-3 col-3">
                        <div className="action d-flex justify-content-end align-items-center text-end">
                            <div className="cb chp position-relative">
                                <i className="pe-7s-search"></i>
                            </div>
                            <div className="position-relative ">
                                <Link href="/cart" >
                                    <a className="position-relative d-block chp">
                                        <i className="pe-7s-shopbag"></i>
                                        <span className="counter">{totalItems}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header >
    );
}
