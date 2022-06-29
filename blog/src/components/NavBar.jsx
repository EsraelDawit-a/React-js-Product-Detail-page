import React from 'react'
import logo1 from '../assets/images/logo.png'

export default function NavBar() {
    return (
        <nav className="menu">
            <div className="container">
                <div className="brand">
                    <a href="#">
                        <img src={logo1} alt="Magz Logo" />
                    </a>
                </div>
                <div className="mobile-toggle">
                    <a href="#" data-toggle="menu" data-target="#menu-list"><i className="ion-navicon-round"></i></a>
                </div>
                <div className="mobile-toggle">
                    <a href="#" data-toggle="sidebar" data-target="#sidebar"><i className="ion-ios-arrow-left"></i></a>
                </div>
                <div id="menu-list">
                    <ul className="nav-list">
                        <li className="for-tablet nav-title"><a>Menu</a></li>
                        <li className="for-tablet"><a href="login.html">Login</a></li>
                        <li className="for-tablet"><a href="register.html">Register</a></li>
                        <li><a href="category.html">Standard</a></li>

                        <li className="dropdown magz-dropdown">
                            <a href="category.html">Pages <i className="ion-ios-arrow-right"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="index.html">Home</a></li>

                                <li><a href="category.html">Category</a></li>
                                <li><a href="single.html">Single</a></li>
                                <li><a href="page.html">Page</a></li>
                                <li><a href="search.html">Search</a></li>
                                <li><a href="contact.html">Contact</a></li>

                            </ul>
                        </li>

                        <li className="dropdown magz-dropdown"><a href="#">Dropdown <i className="ion-ios-arrow-right"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="category.html">Internet</a></li>
                                <li className="dropdown magz-dropdown"><a href="category.html">Troubleshoot <i className="ion-ios-arrow-right"></i></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="category.html">Software</a></li>
                                        <li className="dropdown magz-dropdown"><a href="category.html">Hardware <i className="ion-ios-arrow-right"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="category.html">Main Board</a></li>
                                                <li><a href="category.html">RAM</a></li>
                                                <li><a href="category.html">Power Supply</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="category.html">Brainware</a> </li>
                                    </ul>
                                </li>
                                <li><a href="category.html">Office</a></li>

                            </ul>
                        </li>
                        <li className="dropdown magz-dropdown magz-dropdown-megamenu"><a href="#">Mega Menu <i className="ion-ios-arrow-right"></i> <div className="badge">Hot</div></a>
                            <div className="dropdown-menu megamenu">
                                <div className="megamenu-inner">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h2 className="megamenu-title">Trending</h2>
                                                </div>
                                            </div>
                                            <ul className="vertical-menu">
                                                <li><a href="#"><i className="ion-ios-circle-outline"></i> Mega menu is a new feature</a></li>
                                                <li><a href="#"><i className="ion-ios-circle-outline"></i> This is an example</a></li>
                                                <li><a href="#"><i className="ion-ios-circle-outline"></i> For a submenu item</a></li>
                                                <li><a href="#"><i className="ion-ios-circle-outline"></i> You can add</a></li>
                                                <li><a href="#"><i className="ion-ios-circle-outline"></i> Your own items</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h2 className="megamenu-title">Featured Posts</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <article className="article col-md-4 mini">
                                                    <div className="inner">
                                                        <figure>
                                                            <a href="single.html">
                                                                <img src="images/news/img10.jpg" alt="Sample Article" />
                                                            </a>
                                                        </figure>
                                                        <div className="padding">
                                                            <div className="detail">
                                                                <div className="time">December 10, 2016</div>
                                                                <div className="category"><a href="category.html">Healthy</a></div>
                                                            </div>
                                                            <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="article col-md-4 mini">
                                                    <div className="inner">
                                                        <figure>
                                                            <a href="single.html">
                                                                <img src="images/news/img11.jpg" alt="Sample Article" />
                                                            </a>
                                                        </figure>
                                                        <div className="padding">
                                                            <div className="detail">
                                                                <div className="time">December 13, 2016</div>
                                                                <div className="category"><a href="category.html">Lifestyle</a></div>
                                                            </div>
                                                            <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="article col-md-4 mini">
                                                    <div className="inner">
                                                        <figure>
                                                            <a href="single.html">
                                                                <img src="images/news/img14.jpg" alt="Sample Article" />
                                                            </a>
                                                        </figure>
                                                        <div className="padding">
                                                            <div className="detail">
                                                                <div className="time">December 14, 2016</div>
                                                                <div className="category"><a href="category.html">Travel</a></div>
                                                            </div>
                                                            <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                     
                        <li className="dropdown magz-dropdown"><a href="#">Dropdown Icons <i className="ion-ios-arrow-right"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#"><i className="icon ion-person"></i> My Account</a></li>
                                <li><a href="#"><i className="icon ion-heart"></i> Favorite</a></li>
                                <li><a href="#"><i className="icon ion-chatbox"></i> Comments</a></li>
                                <li><a href="#"><i className="icon ion-key"></i> Change Password</a></li>
                                <li><a href="#"><i className="icon ion-settings"></i> Settings</a></li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="icon ion-log-out"></i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
