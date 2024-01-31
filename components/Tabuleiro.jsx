import Linha from "./Linha";

export default function Tabuleiro() {
    return(
        <div>
            <Linha />
            <Linha preta/> {/* passando a prop preta para linha para que ela saiba quando começar com a casa preta*/}
            <Linha />
            <Linha preta/>
            <Linha />
            <Linha preta/>
            <Linha />
            <Linha preta/>
        </div>
    )
}