


class Produto{

    private nome:string;
    private valor:number;

    public constructor(nome:string,valor:number){

        this.nome=nome;
        this.valor=valor;
    }
    
    public falaOi(){

        console.log("OIIIIII!!!!!");
    }
}


let p = new Produto('cel',350);
