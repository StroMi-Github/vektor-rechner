// Hier wird der Vektor entstehen.
//ich kann was ändern

// Die Funktionen sind:
/*Eingabe von Vektoren  
Klasse Vektor --- Erledigt
Beliebig viele Vektoren (Jeden Vektor einzeln + Button “Hinzufügen”) 
Geraden , Ebenen , Zahlen 
Grafische Oberfläche zur Eingabe 
In einer Grafik Anzeigen 
X-Y-Z Ansicht 
(Andere Ansichten) 
Liste am Rand der Ansicht (Tabellenartig) + “Löschen” Button 
Berechnung von 2D und 3D Vektoren 
Addition 
Subtraktion 
Skalarprodukt 
Kreuzprodukt 
Einheitsvektor 
Mittelvektor 
Länge 
Winkel 
Schnitt / windschief / parallel 
Ebenenformen 
Abstand, Orthogonalität 
Magenta Boxshadow (dark mode?) 
Formelanzeige mit Berechnung */ 

class Vector{
	constructor(xPos, yPos, zPos){
		this.xPos = xPos;
		this.yPos = yPos;
		this.zPos = zPos;
	}  
	
	ausgabe(){
		return "x = " + this.xPos + "y = " + this.yPos + "z = " + this.zPos;
	}
}
