import React from "react";


export const Footer = () => {
    return(
        // Esta es un tag abreviado
        //pero no genera un div, que pueda interferir el diseño html
        //igual a fragment, pero nos ahorramos el import
        <> 
            <footer>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="http://www.baufest.com"> Para comunidad Baufest</a>
            </div>
            </footer>
        </>
    )
}
