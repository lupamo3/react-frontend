import React from 'react';

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png">
                            Products
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
