$('#botao-frase').click(fraseAleatoria);
$('#botao-frase-id').click(buscaFrase);

function fraseAleatoria(){

	$('#spinner').show();

	$.get('frases', trocaFraseAleatoria)
	.fail(function(){
		
		$('#erro').animate({
			'margin-top': 0
			}, '1000');

		setTimeout(function(){
			$('#erro').animate({
			'margin-top': -100
			}, '2000');
		}, 5000)

	})
	.always(function(){
		$('#spinner').hide();
	});
	
}

function trocaFraseAleatoria(data){
	
	var tamanhoArray = data.length;
	var nAleatorio = numeroAleatorio(tamanhoArray);
	var fAleatoria = data[nAleatorio].texto;
	var tAleatorio = data[nAleatorio].tempo;
	
	$('#frase-jogo').text(fAleatoria);
	
	atualizaTamanhoFrase();
	atualizaTempoInicial(tAleatorio);

}

function numeroAleatorio(fator) {

	var numeroAleatorio = Math.floor(Math.random() * fator);
	
	return numeroAleatorio;

}

function buscaFrase(){

	$('#spinner').show();

	var fraseId = $('#input-id').val();
	var dados = { id : fraseId };

	$.get('frases', dados, trocaFrase)
	.fail(function(){

		$('#erro').animate({
			'margin-top': 0
			}, '1000');

		setTimeout(function(){
			$('#erro').animate({
			'margin-top': -100
			}, '2000');
		}, 5000)

	})
	.always(function(){
		$('#spinner').hide();
	});

}

function trocaFrase(data){

	var frase = $('#frase-jogo');
	frase.text(data.texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data.tempo);

}

function statusMetro(){

	$.get('http://www.metro.sp.gov.br/sua-viagem/direto-metro/', function(){
		$(response).find('#diretoMetro').appendTo('.placar')
	})
}