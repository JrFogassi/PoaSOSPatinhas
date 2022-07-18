import SecondaryTitle from "../../atoms/h2/SecondaryTitle"
import PageParagraphs from "../../atoms/p/PageParagraphs"

const MainBanner = () => {
    return (
        <div className="mainBanner">
            <SecondaryTitle h2="Seja muito bem-vindo!"/>
            <PageParagraphs p="Projeto criado em 2020 pela família Fogassi"/>
            <PageParagraphs p="para ajudar os animais de rua da região."/>
        </div>
    )
}

export default MainBanner