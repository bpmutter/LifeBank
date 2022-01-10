class validaForm{
    


     static isNumeric(value) {

        return /^-?\d+$/.test(value);
    }

     static isSymbol(value){
      // eslint-disable-next-line
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if(format.test(value)){
        return true;
        } else {
        return false;
        }
    }


    static validaSenha(senha){
        var upper = false;
        var num = false;
        var simb = false;       
        for (var i = 0; i < senha.length; i++) {
                    if(validaForm.isSymbol(senha[i])){ simb = true;}
                    if(validaForm.isNumeric(senha[i])){ num = true;}
                    if(senha[i] === senha[i].toUpperCase()){ upper = true; }
        };
        if(!upper || !simb || !num){
            return ({hasErros:true, errorText: "Necessário pelo menos 1 letra maiscula, 1 numero e 1 simbolo na senha!"})
        }
        console.log("aqui poha")
        return ({hasErros:false, errorText: ""})
    }


    static validaNomes(nome){
        var letter = false      
        for (var i = 0; i < nome.length; i++) {                    
                    if(validaForm.isSymbol(nome[i])){ letter = true;}
                    if(validaForm.isNumeric(nome[i])){ letter = true;}
        };
        if(letter){
            return {hasErros:true, errorText: "Digite apenas letras!"}
        } 
        return ({hasErros:false, errorText: ""})
    }


    static validaConfirmacaoSenha(senha, conf){
        if(conf === senha) return ({hasErros:false, errorText: ""}) 
        else return ({hasErros:true, errorText: "A confirmacão de senha inválida, precisa ser igual a senha"})
    }


    static verificaEmail(email){
     // eslint-disable-next-line
    var regExp = /^\w{1,50}\@\D{1,50}\.com$/g;
    
    if(regExp.test(email)){
            return ({hasErros:false, errorText: ""}) 
        }
        return ({hasErros:true, errorText: "email inválido, não pode estar vazio e deve ser como no exemplo: email@provedor.com"}) 
}
    
}
export default validaForm