import React from "react";
import { Link } from "gatsby";
import { identityContentProvider } from "react-netlify-identity-widget";

import "./layout.css";

function Layout({ children }) {
    return (
        <identityContentProvider url="https://jam-auth-net.netlify.com">
            <header>
                <Link to="/">JAMstack app</Link>
            </header>
            <main>{children}</main>
        </identityContentProvider>
    );
}

export default Layout;
