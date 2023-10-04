let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function ehumNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function estanaLista(n, l){
    if(l.indexOf(Number(n)) != -1){// esse -1 indica que o vaor não está na lista aula 15 js
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(ehumNumero(num.value) && !estanaLista(num.value, valores)){//para testar tem que verificar essas duas condições com funções éumnumero e estanalista 
        // ! indica uma negação 'se não está na lista
        valores.push(Number(num.value))//push adiciona elementos no vetor, o valor q foi digitado em num
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`//não precisa colocar Number
        lista.appendChild(item)//aiciona o valor de num na lista 
    }else{
        window.alert('Valor inválido ou já está na lista!')
    }
}
