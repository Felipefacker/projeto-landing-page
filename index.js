var setaDireita = window.document.getElementById("seta-direita") 
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda") 

function RolarparaDireita() {
    leonardo.style = " display:none"
    samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"

}

function RolarParaEsquerda() {
    leonardo.style = "display: flex"
    samantha.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
     setaEsquerda.style = "display:none"
}
