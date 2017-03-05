//configure system loader
System.config({
	// tells the System loadere where to find things
	map: {
		'app': 'app',
		'@angular': 'node_modules/@angular',
		'rxjs': 'node_modules/rxjs'
	},
	// tells the System loader how to load when no filename and/or no extension
	packages: {
		'app': 								 { main: 'main.js', defaultExtension: 'js' },
		
    	'@angular/common':                   { main: 'index.js', defaultExtension: 'js' },
    	'@angular/compiler':                 { main: 'index.js', defaultExtension: 'js' },
    	'@angular/core':                     { main: 'index.js', defaultExtension: 'js' },
    	'@angular/http':                     { main: 'index.js', defaultExtension: 'js' },
    	'@angular/platform-browser':         { main: 'index.js', defaultExtension: 'js' },
    	'@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
    	'@angular/router':                   { main: 'index.js', defaultExtension: 'js' },
    	'rxjs':                              { defaultExtension: 'js' },
	}
})