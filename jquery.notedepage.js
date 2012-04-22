/*
// jQuery noteDePage
//
// Version 1.0.1 beta
//
// Constantin Guay
// CG.I (http://const-g.fr/)
// 20 avril 2012
//
// Visit http://const-g.fr/notedepage for more information
//
// Usage: $('#control_id').notedepage( 'renvoi_id' )
// Example : $('sup').notedepage({renvoi_id:"notesdepage"});
//
// Dependencies:  jQuery 1.2.6 or higher (http://jquery.com/)
//
// Change Log:
//
//		1.0.2	- The link to the notes is optional now.
//		1.0.1	- Updated to use '$(this).selector'. Thanks Manu !
//
// Licensing & Terms of Use
// 
// This plugin is dual-licensed under the GNU General Public License and the MIT License and
// is copyright 2012 Constantin Guay. 
//
*/
(function($) {
    $.fn.notedepage = function(options) {   
        var defaults = {
            renvoi_id: ""
        };

        var opts = $.extend(defaults, options),
			fait = new Array(),
			notes = new Array(),
			i = 0,
			selector = $(this).selector; 
		
		function createList(){
			var rel = $(this).attr('rel');
			if(rel != '' && rel != null && jQuery.inArray(rel, fait) == -1)
			{
				fait[i] = rel;
				var appeldeNote = '';
				if(opts.renvoi_id != "")
				{
					appeldeNote = '<a href="#' + opts.renvoi_id + '">' + (i+1) + '</a>';
				}
				else
				{
					appeldeNote = (i+1);
				}
				
				$(selector + '[rel="'+rel+'"]').html(appeldeNote);				
				notes[i] = '<li rel="' + fait[i] + '">' + $('ol.' + opts.renvoi_id + ' > li[rel="' + fait[i] + '"]').html() + '</li>';		
				i++;
			}
		}
		
		function reorderNotes() {
			$('ol.' + opts.renvoi_id).html(notes.join(""));
		}
		
		$(this).each(createList);
		if(opts.renvoi_id != "" && fait.length > 1) { reorderNotes(); }
		
        return $(this);  
    };
})(jQuery); 