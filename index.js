var personagem= "Atsugua"
var vitoria= 36
var derrota= 11
var resultadoCalculo= ""
var ranking = ""


calculoVitoriaseDerrotas()

function calculoVitoriaseDerrotas(){
	resultadoCalculo = vitoria - derrota
 	return resultadoCalculo 
}

if(resultadoCalculo <= 10){
	ranking = "Ferro"
}	
else if(resultadoCalculo >= 11 && resultadoCalculo <=20){
ranking = "Bronze"
}
else if(resultadoCalculo >= 21 && resultadoCalculo <=50){
ranking = "Prata"
}
else if(resultadoCalculo >= 51 && resultadoCalculo <=80){
ranking = "Ouro"
}
else if(resultadoCalculo >= 81 && resultadoCalculo <=90){
ranking = "Diamante"
}

else if(resultadoCalculo >= 91 && resultadoCalculo <=100){
ranking = "Lendário"
}

else {ranking = "Imortal"}


console.log("O Herói " + personagem + " tem de saldo de " + resultadoCalculo +  " está no nível de " + ranking )
