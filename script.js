class Carta{

    constructor(valore,valore_punteggio,seme,briscola, immagine){

        this.valore = valore;   //Si inizia da 1 a 10 e l'ordine e' 2, 4, 5, 6, 7, fante, cavaliere, re, 3, asso
        this.valore_punteggio = valore_punteggio;
        this.seme = seme        // 0 = spada, 1 = denaro, 2 = bastone, 3 = coppa;
        this.briscola = briscola;
        this.immagine = immagine;
    }
}
var mazzo_di_carte_giocatore_1 = [], mazzo_di_carte_giocatore_2 = [];
var mazzo_di_carte = [];

    mazzo_di_carte[0] = new Carta(1, 0, 0, false,"S2");              //2 di spade
    mazzo_di_carte[1] = new Carta(2, 0, 0, false,"S4");              //4 di spade
    mazzo_di_carte[2] = new Carta(3, 0, 0, false,"S5");              //5 di spade
    mazzo_di_carte[3] = new Carta(4, 0, 0, false,"S6");              //6 di spade
    mazzo_di_carte[4] = new Carta(5, 0, 0, false,"S7");              //7 di spade
    mazzo_di_carte[5] = new Carta(6, 2, 0, false,"S8",);              //fante di spade
    mazzo_di_carte[6] = new Carta(7, 3, 0, false,"S9");              //cavaliere di spade
    mazzo_di_carte[7] = new Carta(8, 4, 0, false,"S10");              //re di spade
    mazzo_di_carte[8] = new Carta(9, 10, 0, false,"S3");              //3 di spade
    mazzo_di_carte[9] = new Carta(10, 11, 0, false,"S1");              //asso di spade
    mazzo_di_carte[10] = new Carta(1, 0, 1, false,"D2");              //2 di denari
    mazzo_di_carte[11] = new Carta(2, 0, 1, false,"D4");              //4 di denari
    mazzo_di_carte[12] = new Carta(3, 0, 1, false,"D5");              //5 di denari
    mazzo_di_carte[13] = new Carta(4, 0, 1, false,"D6");              //6 di denari
    mazzo_di_carte[14] = new Carta(5, 0, 1, false,"D7");              //7 di denari
    mazzo_di_carte[15] = new Carta(6, 2, 1, false,"D8");              //fante di denari
    mazzo_di_carte[16] = new Carta(7, 3, 1, false,"D9");              //cavaliere di denari
    mazzo_di_carte[17] = new Carta(8, 4, 1, false,"D10");              //re di denari
    mazzo_di_carte[18] = new Carta(9, 10, 1, false,"D3");              //3 di denari
    mazzo_di_carte[19] = new Carta(10, 11, 1, false,"D1");              //asso di denari
    mazzo_di_carte[20] = new Carta(1, 0, 2, false,"B2");              //2 di bastoni
    mazzo_di_carte[21] = new Carta(2, 0, 2, false,"B4");              //4 di bastoni
    mazzo_di_carte[22] = new Carta(3, 0, 2, false,"B5");              //5 di bastoni
    mazzo_di_carte[23] = new Carta(4, 0, 2, false,"B6");              //6 di bastoni
    mazzo_di_carte[24] = new Carta(5, 0, 2, false,"B7");              //7 di bastoni
    mazzo_di_carte[25] = new Carta(6, 2, 2, false,"B8");              //fante di bastoni
    mazzo_di_carte[26] = new Carta(7, 3, 2, false,"B9");              //cavaliere di bastoni
    mazzo_di_carte[27] = new Carta(8, 4, 2, false,"B10");              //re di bastoni
    mazzo_di_carte[28] = new Carta(9, 10, 2, false,"B3");              //3 di bastoni
    mazzo_di_carte[29] = new Carta(10, 11, 2, false,"B1");              //asso di bastoni
    mazzo_di_carte[30] = new Carta(1, 0, 3, false,"C2");              //2 di coppe
    mazzo_di_carte[31] = new Carta(2, 0, 3, false,"C4");              //4 di coppe
    mazzo_di_carte[32] = new Carta(3, 0, 3, false,"C5");              //5 di coppe
    mazzo_di_carte[33] = new Carta(4, 0, 3, false,"C6");              //6 di coppe
    mazzo_di_carte[34] = new Carta(5, 0, 3, false,"C7");              //7 di coppe
    mazzo_di_carte[35] = new Carta(6, 2, 3, false,"C8");              //fante di coppe
    mazzo_di_carte[36] = new Carta(7, 3, 3, false,"C9");              //cavaliere di coppe
    mazzo_di_carte[37] = new Carta(8, 4, 3, false,"C10");              //re di coppe
    mazzo_di_carte[38] = new Carta(9, 10, 3, false,"C3");              //3 di coppe
    mazzo_di_carte[39] = new Carta(10, 11, 3, false,"C1");              //asso di coppe

function Mescolamento_Carte(mazzo_di_carte) {
    let currentIndex = mazzo_di_carte.length,  randomIndex;
  
for(var i = 0; i < 10; i++){
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [mazzo_di_carte[currentIndex], mazzo_di_carte[randomIndex]] = [
            mazzo_di_carte[randomIndex], mazzo_di_carte[currentIndex]];
        }
    }
}  

function Assegna_Briscola(mazzo_di_carte){

    let numero_randomico = Math.floor(Math.random() * 4);

    for(let i = 0; i < mazzo_di_carte.length; i++){

        if(mazzo_di_carte[i].seme == numero_randomico)
            mazzo_di_carte[i].briscola = true;

    }
}

function Assegnazione_Iniziale_Mazzo_Giocatori() {
    let giocatore_corrente = Math.floor(Math.random() * 2);

    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < mazzo_di_carte.length + 1; j++) {

            if (mazzo_di_carte[j] == undefined) {

                if (j > 0) {

                    if (giocatore_corrente == 0) {

                        mazzo_di_carte_giocatore_1.push(mazzo_di_carte[j-1]);
                        giocatore_corrente = 1;

                    } else if (giocatore_corrente == 1) {

                        mazzo_di_carte_giocatore_2.push(mazzo_di_carte[j-1]);
                        giocatore_corrente = 0;
                    }

                    mazzo_di_carte.splice(j-1, 1);
                }
            }
        }
    }
}

function Confronto_Carte(carta_1, carta_2){

if(carta_1 != undefined && carta_2 != undefined){

    if(carta_1.briscola == true && carta_2.briscola == false){



    } else if(carta_1.briscola == false && carta_2.briscola == true){



    } else {

        if(carta_1.valore > carta_2.valore && carta_1.seme == carta_2.seme){



        } else if(carta_1.valore > carta_2.valore && carta_1.seme == carta_2.seme){

            

        }

    }

}

carta_1 = undefined;
carta_2 = undefined;

}

var conto = 1;
var conteggioCarte = 0;
Mescolamento_Carte(mazzo_di_carte);
function prigionieroSolitario(){ //funzione del prigioniero solitario (vogliamo il 6 T_T)
    document.getElementById("CartaScoperta").src = "/Immagini/"+mazzo_di_carte[conteggioCarte].immagine+".png" //cos'è? praticamente nell'HTML il tag IMG ha un'ID chiamato "CartaScoperta", ed essa viene sostituita da mazzo.immagine+".png"
    if(conteggioCarte < mazzo_di_carte.length-1){ //va fino all'ultimo elemento (if > for)
        if(mazzo_di_carte[conteggioCarte].valore == conto){ //condizione di sconfitta 
            document.getElementById("conto").innerHTML = conto;
            document.getElementById("output").innerHTML = "Hai perso (LLLL)";
            
            document.getElementById("CartaCoperta").style.pointerEvents = "none"; //disabilita il tag IMG
            conteggioCarte++;
            if(conto+1 == 4){
                conto = 1;
            }else{
                conto++;
            }
        }else{
            document.getElementById("conto").innerHTML = conto;
            conteggioCarte++;
            if(conto+1 == 4){
                conto = 1;
            }else{
                conto++;
            }
        }
    }else{ //condizione in caso NON perdi
        if(mazzo_di_carte[conteggioCarte].valore != 1){ //si arriva all'ultima carta, bisogna controllare se è diversa da un asso (se arrivi a questo punto e perdi devi avere proprio sfiga)
            document.getElementById("conto").innerHTML = conto;
            conteggioCarte++;
            if(conto+1 == 4){
                conto = 1;
            }else{
                conto++;
            }
            document.getElementById("CartaCoperta").src = ""; //togliamo il mazzo (perché l'abbiamo finito)
            document.getElementById("CartaCoperta").style.pointerEvents = "none";
            document.getElementById("output").innerHTML = "Hai vinto! :D"; 
        }else{
            document.getElementById("conto").innerHTML = conto;
            conteggioCarte++;
            if(conto+1 == 4){
                conto = 1;
            }else{
                conto++;
            }
            document.getElementById("CartaCoperta").src = ""; 
            document.getElementById("output").innerHTML = "Hai perso (LLLL)";
            
            document.getElementById("CartaCoperta").style.pointerEvents = "none";
        }

        
    }    
        
}