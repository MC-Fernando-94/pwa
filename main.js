// service worker

if('serviceWorker' in navigator){
	console.log('puedes usar los serviceworker en tu navegador');

	navigator.serviceWorker.register('./sw.js')
	                       .then(res => console.log('serviceWorker cargado correctamente',res))
	                       .catch(err => console.log('serviceWorker no se ha podido registar',err));



}else{
	console.log('no puedes utilizar  serviceWorker en tu navegador');

}




//Scroll suavizado
$(document).ready(function(){
	$("#menu a").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});

		return false;

	});
	
});
