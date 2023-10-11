class Carta{

    constructor(valore,valore_punteggio,seme,briscola){

        this.valore = valore;   //Si inizia da 1 a 10 e l'ordine e' 2, 4, 5, 6, 7, fante, cavaliere, re, 3, asso
        this.valore_punteggio = valore_punteggio;
        this.seme = seme["spada","denaro","bastone","coppa"];
        this.briscola = briscola;
    }
}

var mazzo_di_carte = [

    mazzo_di_carte[0] = new Carta(1, 0, 0, false),              //2 di spade
    mazzo_di_carte[1] = new Carta(2, 0, 0, false),              //4 di spade
    mazzo_di_carte[2] = new Carta(3, 0, 0, false),              //5 di spade
    mazzo_di_carte[3] = new Carta(4, 0, 0, false),              //6 di spade
    mazzo_di_carte[4] = new Carta(5, 0, 0, false),              //7 di spade
    mazzo_di_carte[5] = new Carta(6, 2, 0, false),              //fante di spade
    mazzo_di_carte[6] = new Carta(7, 3, 0, false),              //cavaliere di spade
    mazzo_di_carte[7] = new Carta(8, 4, 0, false),              //re di spade
    mazzo_di_carte[8] = new Carta(9, 10, 0, false),              //3 di spade
    mazzo_di_carte[9] = new Carta(10, 11, 0, false),              //asso di spade
    mazzo_di_carte[10] = new Carta(1, 0, 1, false),              //2 di denari
    mazzo_di_carte[11] = new Carta(2, 0, 1, false),              //4 di denari
    mazzo_di_carte[12] = new Carta(3, 0, 1, false),              //5 di denari
    mazzo_di_carte[13] = new Carta(4, 0, 1, false),              //6 di denari
    mazzo_di_carte[14] = new Carta(5, 0, 1, false),              //7 di denari
    mazzo_di_carte[15] = new Carta(6, 2, 1, false),              //fante di denari
    mazzo_di_carte[16] = new Carta(7, 3, 1, false),              //cavaliere di denari
    mazzo_di_carte[17] = new Carta(8, 4, 1, false),              //re di denari
    mazzo_di_carte[18] = new Carta(9, 10, 1, false),              //3 di denari
    mazzo_di_carte[19] = new Carta(10, 11, 1, false),              //asso di denari
    mazzo_di_carte[20] = new Carta(1, 0, 2, false),              //2 di bastoni
    mazzo_di_carte[21] = new Carta(2, 0, 2, false),              //4 di bastoni
    mazzo_di_carte[22] = new Carta(3, 0, 2, false),              //5 di bastoni
    mazzo_di_carte[23] = new Carta(4, 0, 2, false),              //6 di bastoni
    mazzo_di_carte[24] = new Carta(5, 0, 2, false),              //7 di bastoni
    mazzo_di_carte[25] = new Carta(6, 2, 2, false),              //fante di bastoni
    mazzo_di_carte[26] = new Carta(7, 3, 2, false),              //cavaliere di bastoni
    mazzo_di_carte[27] = new Carta(8, 4, 2, false),              //re di bastoni
    mazzo_di_carte[28] = new Carta(9, 10, 2, false),              //3 di bastoni
    mazzo_di_carte[29] = new Carta(10, 11, 2, false),              //asso di bastoni
    mazzo_di_carte[0] = new Carta(1, 0, 3, false),              //2 di coppe
    mazzo_di_carte[1] = new Carta(2, 0, 3, false),              //4 di coppe
    mazzo_di_carte[2] = new Carta(3, 0, 3, false),              //5 di coppe
    mazzo_di_carte[3] = new Carta(4, 0, 3, false),              //6 di coppe
    mazzo_di_carte[4] = new Carta(5, 0, 3, false),              //7 di coppe
    mazzo_di_carte[5] = new Carta(6, 2, 3, false),              //fante di coppe
    mazzo_di_carte[6] = new Carta(7, 3, 3, false),              //cavaliere di coppe
    mazzo_di_carte[7] = new Carta(8, 4, 3, false),              //re di coppe
    mazzo_di_carte[8] = new Carta(9, 10, 3, false),              //3 di coppe
    mazzo_di_carte[9] = new Carta(10, 11, 3, false),              //asso di coppe

];

function CreazioneMazzo(){



}