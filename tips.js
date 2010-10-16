var tips = [];

tips.push({
	author: 'bentruyman',
	message: 'Using <em>Really</em> Long Explicit Ids',
	example: [
		'<div id="EN_US-Introduction-WelcomeMessage-RedText-Container">',
		'	<p id="EN_US-Introduction-WelcomeMessage-RedText-Container-Paragraph">',
		'		Welcome to Our Home Page!',
		'	</p>',
		'</div>'
	]
});

tips.push({
	author: 'unknown',
	message: 'Using <em>All</em> of the XHTML doctypes',
	example: [
		'<!DOCTYPE html PUBLIC',
		'	"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dt',
		'	"-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dt',
		'	"-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Writing All Your Styles Inline to Reduce HTTP Requests',
	example: [
		'<html>',
		'	<head>',
		'		<link href="global.css" rel="stylesheet" /> <!-- BAD!! -->',
		'		<style>',
		'			#wrapper {',
		'				...',
		'			}',
		'		</style> <!-- GOOD!! -->',
		'	</head>',
		'</html>'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Never Leave An IMG Tag Unclosed',
	example: [
		'<img src="my-corporate-logo.gif"></img>'
	]
});

module.exports = tips;