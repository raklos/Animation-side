


	
	
	
	
//	ZEGAREK
	
	function myClock(){
	
// Pobranie czasu i zapisanie w poszczególnych szufladkach na dane
	var dzisiaj = new Date();

	var dzien = dzisiaj.getDate();
	var nazwaDnia=dzisiaj.getDay()+1;
	var miesiac = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();

	var godzina = dzisiaj.getHours();
	var minuta = dzisiaj.getMinutes();
	var sekunda = dzisiaj.getSeconds();
	var milisekunda = dzisiaj.getMilliseconds();
		
	//zamiana czasu na słowa dni tygodnia i miesięcy
		
		switch(nazwaDnia){
			case 1: nazwaDnia="Poniedziałek"; break;
			case 2: nazwaDnia="Wtorek"; break;
			case 3: nazwaDnia="Środa"; break;
			case 4: nazwaDnia="Czwartek"; break;
			case 5: nazwaDnia="Piątek"; break;
			case 6: nazwaDnia="Sobota"; break;
			case 7: nazwaDnia="Niedziela"; break;
			default: nazwaDnia="error"; break;
		}
		//if(miesiac<10) miesiac="0"+miesiac;
		switch(miesiac){
			case 1: miesiac="styczeń"; break;
			case 2: miesiac="luty"; break;
			case 3: miesiac="marca"; break;
			case 4: miesiac="kwiecień"; break;
			case 5: miesiac="Maj"; break;
			case 6: miesiac="czerwiec"; break;
			case 7: miesiac="lipiec"; break;
			case 8: miesiac="sierpień"; break;
			case 9: miesiac="wrzesień"; break;
			case 10: miesiac="październik"; break;
			case 11: miesiac="listopad"; break;
			case 12: miesiac="grudzień"; break;
			default: miesiac="błąd";break;
		}
	// dodanie brakujących zer
		if(dzien<10) dzien="0"+dzien;
		if(godzina<10) godzina="0"+godzina;
		if(minuta<10) minuta="0"+minuta;
		if(sekunda<10) sekunda="0"+sekunda;
		milisekunda-=(milisekunda%=100);
	// zmiana milisekundy z jednej tysięcznej do jednej dziesiątej 
		switch(milisekunda){
			case 100: milisekunda="1"; break;
			case 200: milisekunda="2"; break;
			case 300: milisekunda="3"; break;
			case 400: milisekunda="4"; break;
			case 500: milisekunda="5"; break;
			case 600: milisekunda="6"; break;
			case 700: milisekunda="7"; break;
			case 800: milisekunda="8"; break;
			case 900: milisekunda="9"; break;
			default: break;
		}
		
		
	//sklejenie wszystkich pojemników przechowujących czas w tekst
		
		document.getElementById('clock').innerHTML=nazwaDnia+", "+dzien+" "+miesiac+" "+rok+"r."+"</br>"+godzina+":"+minuta+":"+sekunda+":"+milisekunda;
		
	//Ustawienie częstotliwości odświerzania zegarka
		setTimeout("myClock()",3);
		
	}
	
// SPRAWDZENIE jaka to liczbak
function sprawdz() {
	//pobranie wartości z pola edycyjnego
		var liczba=document.getElementById('pole1').value;
	
	
	//Podjęcie decyzji jaka to liczba i wyświetlenie odpowiedzi w przeglądarce
	
		if (liczba>0) document.getElementById("odp").innerHTML="dodatmoa";
		else if (liczba<0) document.getElementById("odp").innerHTML="ujemna";
		else if (liczba=="0") document.getElementById("odp").innerHTML="zero";
		else  document.getElementById("odp").innerHTML="to nie jest liczba";
	
	//

	
}
	
	