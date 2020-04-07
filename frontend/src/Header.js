import React from 'react';

// 1- function Header(props) { // props - Propriedades da função passadas como atributos no component React
function Header({children}) { // Desestruturação
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

export default Header;