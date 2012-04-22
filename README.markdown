# jQuery noteDePage

## Raison d'être

`Rappel
Le lexique des règles typographiques en usage à l'imprimerie nationale rappel que "l'appel de note ou renvoi marque dans un texte l'emplacement d'un commentaire - ou note - situé en dehors de ce texte."`

Dans votre page, vous pouvez avoir des appels de note du type :
`"Celui-ci reçoit une capitale initiale²"`

Avec, en bas de page, une note correspondante.

Il arrive, lorsque le texte change souvent, ou que des paragraphes soient ajoutés, qu'il faille revérifier l'ordre de ces notes dans le texte, mais aussi l'ordre des notes en bas de page.

`noteDePage` se charge de la numérotation automatique de vos appels de note, et organise les notes en bas de page dans le même ordre.


## Utilisation

### Étape 1

Ajoutez cette ligne à la fin de votre `<body>` (ou bien là où vous placez vos fichiers JS), en tout cas, après l'appel de jQuery.

	`<!-- JavaScript -->
	<script type="text/javascript" src="jquery.notedepage.js"></script>`

### Étape 2

Ajoutez une balise autour de votre astérisque `<sup>` (ou tout autre div, span...).

`<p>Celui-ci reçoit une capitale initiale<sup rel="ndlr">*</sup></p>`

le `rel` sert à définir à quelle note l'appel envoi.

### Étape 3

N'importe où dans votre `<body>`, ajoutez un bloc contenant les notes de pages.

`<a name="notesdepage" id="notesdepage"></a>
<ol class="notesdepage">
	<li>Incluant plusieurs avantages liés à ces choix.</li>
</ol>`

Nous utilisons un `<ol>` pour la numérotation automatique des notes, dont la classe sera à passer en paramètre.
un `<a name>` pour le lien de l'appel de page vers le bloc contenant les notes

### Étape 4

Initialisez le jQuery.

`	<script>
		$(document).ready(function() {
			$('sup').notedepage({renvoi_id:"notesdepage"});
		});
	</script>`

Le code HTML de votre balise sup sera alors modifié en :

`<p>Celui-ci reçoit une capitale initiale<sup rel="ndlr"><a href="#notesdepage">1</a></sup></p>`

### Note importante

Le script ne modifira que l'intérieur des balises `<sup>` dont le `rel` est défini. Vous pouvez utiliser dans votre document d'autres balises `<sup>`, elles ne seront pas modifiées.

## Astuce

Vous pouvez absolument mettre plusieurs appels de note sur un même mot :

`<p>Celui-ci reçoit une capitale initiale<sup rel="ndlr">*</sup><sup rel="notescapitales">*</sup></p>`

Je vous conseille alors d'utiliser une simple ligne CSS pour les séparer :

`sup + sup:before { content:",  "; }`