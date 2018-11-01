# CompleteGuideDe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3 for following the Udemy course '[Angular 2 verstehen und anwenden](https://www.udemy.com/der-angular-2-kurs/)'

## meine Konvention in dieser Datei
'[c.s]' in headlines showing the corresponding course (c)hapter and (s)ection

g.E.: [1.6] means chapter 1, section 6

---


**Neues Angular Projekt erstellen**:
```
ng new complete-guide-de
```

Das Projektverzeichnis: `c:\dev\projects\udemy\complete-guide-de`

## Server starten
per Standard wird port 4200 verwendet, unser CP läuft lokal auch darüber, also einen neuen Port zum Spielen angeben
	`complete-guide-de>ng serve --port 4201`

### Für Webstorm Angular CLI Server run, Port in angular.json angepasst
`C:\dev\projects\udemy\complete-guide-de\angular.json`, dort unter `'options'`:
```
	{"projects": {
		"complete-guide-de": { 
			"architect": { 
				"serve": { 
					"options": 
					}
				}
			}
		}
	}
```
... folgendes key/val Paar hinzugefügt: `"port": 4201`

## Troubleshooting: Angular CLI / Angular 2 Setup [1.6]
Normalerweise sollte sowohl bei der Installation des CLI als auch beim Erstellen und Starten der Angular 2 App alles problemlos funktionieren.

Hier sind ein paar Hinweise falls es zu Problemen kommt:

**Generell**

Stellt sicher, dass die letzte (höchste) Version von NodeJS installiert ist.

*Auf Windows*: Falls es zu Problemen kommt oder das Erstellen eines Projekte lange dauert: Versucht die Eingabeaufforderung im Administratormodus zu starten

*Windows 10 und Node 7.1*
Es scheint einen Bug in Node 7.1 auf Windows 10 zu geben (Fehler: "this socket is closed"). Die Lösung ist, temporär auf Node 7.0 umzusteigen

**CLI Version Updaten**

Möglicherweise wurde das Angular CLI schon einmal verwendet und installiert, ein Update kann hier viele Probleme lösen.

Dabei sind die folgenden Schritte auszuführen (sudo  nur auf Mac/ Linux verwenden):
```
		[sudo] npm uninstall angular-cli -g
		npm cache clean
		[sudo] npm install angular-cli@latest -g
```

## Dateien und Verzeichnisse im Angular CLI (Auswahl) [1.9]
```
  Project/
		e2e/					    end-to-end tests via Protractor
		src/					    sources of the app
		angular.json			angular configuration
		package.json			some dependencies

	Project/src/
		app/
		assets/					  Pictures
		environments/			for build process
		...
		index.html				project html 'container'
		styles.css				global project styles
		main.ts
		polyfills.ts			project/app dependencies
		...
		
	Project/src/app/
		app.component.css		    specific styles for this app
		app.component.html		  will be placed in (app.component.ts defined selector) <app-root> container of global src/index.html
		app.component.spec.ts	  used for unit tests via Karma (can be deleted)
		app.component.ts		    typescript code
		app.module.ts
```

## TypeScript [1.10]
* erweitert JS u.a. um: (explizite) Typen, Klassen, Module, ...
* wird zu JS kompiliert
* `npm install typescript -g`
* String über mehrere Zeilen:
    \`mit  
	  back-ticks\`

## app.component.ts [2.13]
* `@component` ist ein decorator mit dessen die ts klasse zu einer component wird
* selector: selektion mit der dann die komponente ersetzt wird
  * `'app-root'` -> es wird das Element <app-root> ersetzt
  * `'#app-root'` -> es wird jede ID app-root ersetzt
  * `'.app-root'` -> es wird jede Klassse app-root ersetzt
  * siehe hierzu src/main.ts und src/app/app.module.ts
* template muss nicht eine externe Datei sein, sondern kann auch html-abschnitt als string angegeben werden [2.14]

## components anlegen [2.15]
1. manuell (Dateien selbs anlegen)
  * `apps/other/` anlegen
  * `apps/other/other.componient.html` anlegen
  * `apps/other/other.componient.ts` anlegen
  * `src/app/app.module.ts` modifizieren
2. per CLI (Command Line Interface):
  * lange Version: `ng generate component <Name der Komponente> [optionen]`
  * kurzschreibweise: `ng g c <Name der Komponente> [optionen]`
  * optionen [2.17]
    * `--flat`							          keinen Unterordner erstellen
    * `--inline-template` oder `-it`	keine extra html-tmpl datei erstellen
    * `--inline-styles` oder `-is`		keine extra css datei erstellen
    * `--spec false`					        keine Unit-Testdatei erstellen

## component css [2.18]
* css in der component definiert, gilt nur für diese component, nicht für childs!
* Stichwort: ShadowDOM
* jedes css gestylte element bekommt ein component eigenes attribut und wird beim endprodukt (der html seite) dann zu beginn entsprechend gestylte

## Databinding [2.20]
### Methoden
* **String Interpolation**: `{{ Ausdruck, der in einen String resultiert }}`
* **Property Binding**: `<button [disabled]="Ausdruck, der in einen benötigten Property Type resultiert">`
* **Event Binding**: `<button (click)="Ausdruck, das das Event behandelt">`
* **Two-Way Binding**: `<input [(ngModel)]="gebundene Datenquelle">`


---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
