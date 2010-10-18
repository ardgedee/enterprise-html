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
		'	"-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd',
		'	"-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd',
		'	"-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Writing All Your Styles Inline to <em>Reduce</em> HTTP Requests',
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
	message: '<em>Never</em> Leaving An IMG Tag Unclosed',
	example: [
		'<img src="my-corporate-logo.gif"></img>'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Writing All Tags and Attributes in Uppercase for <em>Readability</em>',
	example: [
		'<DIV ID="ContainerWrapper">',
		'	<P>',
		'		This is a paragraph example.',
		'		<A HREF="/HomePage.htm" TARGET="_blank"></A>',
		'	</P>',
		'</DIV>'
	]
});

tips.push({
	author: 'bentruyman',
	message: 'Liberally Using <em>Documentation</em> to Describe Sections of Content',
	example: [
		'<!-- CONTAINER START: Container holds all the content-->',
		'<div id="global_content-Container">',
		'	<!-- CONTAINER|WELCOME START: Describe the website for users-->',
		'	<p id="global_content-Container-Welcome">',
		'		Welcome to our new home page.',
		'	</p> <!-- CONTAINER|WELCOME END -->',
		'</div><!-- CONTAINER END -->'
	]
});

tips.push({
	author: 'bentruyman',
	message: '<em>Never</em> Using Absolute URLs As the Underlying Path May Change',
	example: [
		'<a href="../../HomePage.htm">Home Page</a><br>',
		'<a href="./PrivacyPolicy.htm">Privacy Policy</a><br>',
		'<a href="./Products/Gallery.htm">Our Products</a><br>',
		'<a href="./ContactOurTeam.htm">Contact Our Sales Team</a><br>',
		'<a href="../index.htm">Go back</a>'
	]
});

tips.push({
	author: 'zetafleet',
	message: 'Using iframes to Include 3rd Party Microsites'
});

tips.push({
	author: 'zetafleet',
	message: 'Requiring a Conference Call With the Contractor, the American Employee of the American Company, and an Employee of Their Own Indian Subcontracting Company in Order to Explain the iframe-in-iframe Functionality'
});

module.exports = tips;
