class PlayerEntity{
    constructor(){
                this.bens= [];
                this.investimentos = [];
                this.despesas = [];
                this.email = "";
                this.id = 0;
                this.nome = "";
                this.profissao = "";
                this.salario = 0.0;
                this.saldo = 0.0;           
    }

    parse(obj){
        this.investimentos = obj.investimentos;
        this.bens = obj.bens;
        this.despesas = obj.despesas;
        this.email = obj.email;
        this.id = obj.id;
        this.nome = obj.nome;
        this.profissao = obj.profissao;
        this.salario = obj.salario;
        this.saldo = obj.saldo;    
    }

    request(){
        return {
            "email" : this.email,
            "profissao" : this.profissao,
            "saldo" : this.saldo,
            "salario" : this.salario,
            "nome" : this.nome,
            "id" : this.id,
            "bens" : this.bens,
            "despesas" : this.despesas,
            "investimentos": this.investimentos
        }
    }

    unity(){
    var json = `{
                "email": "${this.email}",
               "profissao": "${this.profissao}",
                "saldo": ${this.saldo},
                "salario": ${this.salario},
                "nome": "${this.nome}",
                "id": ${this.id},
                "despesas": ${this.despesas}
                }`;
        return json;
        // return {
        //     "email" : this.email,
        //     "profissao" : this.profissao,
        //     "saldo" : this.saldo,
        //     "salario" : this.salario,
        //     "nome" : this.nome,
        //     "id" : this.id,
        //     "despesas" : this.despesas
        //     }
    }

}

export default PlayerEntity;