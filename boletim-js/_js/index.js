function verify_aluno(){
    var name = document.getElementById('name')
    var n1 = document.getElementById('nota1')
    var n2 = document.getElementById('nota2')
    var n3 = document.getElementById('nota3')
    var n4 = document.getElementById('nota4')
    var sit = document.getElementById('sit')

    var bi1 = Number(n1.value)
    var bi2 = Number(n2.value)
    var bi3 = Number(n3.value)
    var bi4 = Number(n4.value)
    var name = String (name.value)

    var soma = (bi1 + bi2 + bi3 + bi4)/4

   if(name==0){
    alert('Insira o nome do aluno')
   }

   else{
    if(soma >=6){
        sit.innerText = `Situação: O(A) Aluno(A) ${name} com a media de ${soma} está APROVADO`
        sit.style.background= 'green'
        sit.style.margin = '20px'
        sit.style.borderRadius = '5px'
        sit.style.padding = '1%'
    }
    else{
        sit.innerText = `Situação: O(A) Aluno(A) ${name} com a media de ${soma}está RETIDO`
        sit.style.background = 'red'
        sit.style.margin = '20px'
        sit.style.borderRadius = '5px'
        sit.style.padding = '1%'

    }
   }
}