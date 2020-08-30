import React from "react";
import { Link } from "gatsby";
import { IdentityContextProvider } from "react-netlify-identity";

import "./layout.css";

function Layout({ children }) {
    return (
        <IdentityContextProvider url="https://jam-auth-net.netlify.app">
            <header>
                <Link to="/">JAMstack app</Link>
            </header>
            <main>{children}</main>
        </IdentityContextProvider>
    );
}

export default Layout;
