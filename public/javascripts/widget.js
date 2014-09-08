CloudFlare.define('battleforthenet',[
	'battle_for_the_net/config',
	'cloudflare/dom'
],
function(
	config,
	dom
){
	var js_include_url = '//widget.battleforthenet.com/widget.min.js';
	
	switch(config.widgetType){
		case "light":
		 	window._bftn_options = { animation: 'banner' };
			break;
		case "dark":
			window._bftn_options = { animation: 'banner', theme: 'dark' };
			break;
		default:
			window._bftn_options = { animation: 'modal' };
			break;
	}
	
	return CloudFlare.require([js_include_url]);
});
