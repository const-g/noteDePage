# jQuery noteDePage

## Raison d'�tre

`Rappel
Le lexique des r�gles typographiques en usage � l'imprimerie nationale rappel que "l'appel de note ou renvoi marque dans un texte l'emplacement d'un commentaire - ou note - situ� en dehors de ce texte."`

Dans votre page, vous pouvez avoir des appels de note du type :
`"Celui-ci re�oit une capitale initiale�"`

Avec, en bas de page, une note correspondante.

Il arrive, lorsque le texte change souvent, ou que des paragraphes soient ajout�s, qu'il faille rev�rifier l'ordre de ces notes dans le texte, mais aussi l'ordre des notes en bas de page.

`noteDePage` se charge de la num�rotation automatique de vos appels de note, et organise les notes en bas de page dans le m�me ordre.


## Utilisation

### �tape 1

Ajoutez cette ligne � la fin de votre `<body>` (ou bien l� o� vous placez vos fichiers JS), en tout cas, apr�s l'appel de jQuery.

	`<!-- JavaScript -->
	<script type="text/javascript" src="jquery.notedepage.js"></script>`

### �tape 2

Ajoutez une balise autour de votre ast�risque `<sup>` (ou tout autre div, span...).

`<p>Celui-ci re�oit une capitale initiale<sup rel="ndlr">*</sup></p>`

le `rel` sert � d�finir � quelle note l'appel envoi.

### �tape 3

N'importe o� dans votre `<body>`, ajoutez un bloc contenant les notes de pages.

`<a name="notesdepage" id="notesdepage"></a>
<ol class="notesdepage">
	<li>Incluant plusieurs avantages li�s � ces choix.</li>
</ol>`

Nous utilisons un `<ol>` pour la num�rotation automatique des notes, dont la classe sera � passer en param�tre.
un `<a name>` pour le lien de l'appel de page vers le bloc contenant les notes

### �tape 4

Initialisez le jQuery.

`	<script>
		$(document).ready(function() {
			$('sup').notedepage({renvoi_id:"notesdepage"});
		});
	</script>`

Le code HTML de votre balise sup sera alors modifi� en :

`<p>Celui-ci re�oit une capitale initiale<sup rel="ndlr"><a href="#notesdepage">1</a></sup></p>`

### Note importante

Le script ne modifira que l'int�rieur des balises `<sup>` dont le `rel` est d�fini. Vous pouvez utiliser dans votre document d'autres balises `<sup>`, elles ne seront pas modifi�es.

## Astuce

Vous pouvez absolument mettre plusieurs appels de note sur un m�me mot :

`<p>Celui-ci re�oit une capitale initiale<sup rel="ndlr">*</sup><sup rel="notescapitales">*</sup></p>`

Je vous conseille alors d'utiliser une simple ligne CSS pour les s�parer :

`sup + sup:before { content:",  "; }`