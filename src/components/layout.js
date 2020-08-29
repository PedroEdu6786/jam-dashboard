import React from "react";
import { Link } from "gatsby";

import "./layout.css";

function Layout({ children }) {
    return (
        <>
            <header>
                <Link to="/">JAMstack app</Link>
            </header>
            <main>{children}</main>
        </>
    );
}

export default Layout;
