import React from "react";
import PrimaryTitle from "../atoms/h1/PrimaryTitle";
import PageParagraphs from "../atoms/p/PageParagraphs";
import './style.scss'

const HeaderContainer = () =>{
    return (
        <div className="headerContainer">
            <PrimaryTitle h1="S.O.S Patinhas POA"/>
            <PageParagraphs p="Sobre nós"/>
            <PageParagraphs p="Nossos Amigos"/>
            <PageParagraphs p="Contato"/>
        </div>
    )
}

export default HeaderContainer