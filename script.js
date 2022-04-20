const celulas = document.querySelectorAll(".celula");
let checarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";
const COMBINACAOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
document.addEventListener("click", (event) =>{
    if(event.target.matches(".celula")) {
    jogar(event.target.id);
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    turno = checarTurno ? JOGADOR_X : JOGADOR_O;
    celula.textContent = turno;
    celula.classList.add(turno)
    checarVencedor(turno);
    
}

function checarVencedor(turno){
    const vencedor = COMBINACAOES.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno)

        })

    });

        if (vencedor){
            encerraJogo(turno);
        } else if (checarEmpate()) {
            encerraJogo();
        } else {
            checarTurno = !checarTurno;
            
    }
}

function encerraJogo(vencedor = null) {
    if (vencedor){
        console.log("vencedor: " + vencedor)
    } else {
        console.log("Empate")
    }
}