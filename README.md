# CompleteGuideDe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3 for following the Udemy course '[Angular 2 verstehen und anwenden](https://www.udemy.com/der-angular-2-kurs/)'

<a name="toc"></a>
## Table of Content
1. [prerequisite](#prerequisite)
1. [New Project](#new_project)
1. [Angular CLI Server starten](#start_server)
1. [Troubleshooting: Angular CLI / Angular 2 Setup](#troubleshooting_setup)
1. [Dateien und Verzeichnisse im Angular CLI (Auswahl)](#files_and_folders)
1. [TypeScript](#typescript)
1. [What are Components?](#whatcomponentsare)
1. [Databinding](#databinding)
   1. [String Interpolation](#string_interpolation)
   1. [Property Binding](#property_binding)
   1. [Event Binding](#event_binding)
   1. [Two-Way Binding](#two-way_binding)
1. [working closer with Angular HTML Template](#working_closer_with_angular_html_template)
1. [Component Lifecycles](#component_lifecycles)
1. [Problems/Questions](#problems_questions)

## meine Konvention in dieser Datei
'[c.s]' in headlines showing the corresponding course (c)hapter and (s)ection

g.E.: [1.6] means chapter 1, section 6

<a name="prerequisite"></a>
## prerequisite [↸](#toc)

### Node.JS
Installed? Test with `npm -v` on commandprompt. Otherwise:  
- [download](https://nodejs.org/de/) an install node

### AngularCLI  
Install with:
 `npm install -g @angular/cli`

---
<a name="new_project"></a>
## New Project [↸](#toc)
(*branch from here: [`3rdStep/templateAndLifecycle`](https://github.com/dele1972/complete-guide-de/tree/3rdStep/templateAndLifecycle)*)  


**Neues Angular Projekt erstellen**:
```
ng new complete-guide-de
```

Das Projektverzeichnis: `c:\dev\projects\udemy\complete-guide-de`

---
<a name="start_server"></a>
## Angular CLI Server starten [↸](#toc)
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

---
<a name="troubleshooting_setup"></a>
## Troubleshooting: Angular CLI / Angular 2 Setup [1.6] [↸](#toc)
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

---
<a name="files_and_folders"></a>
## Dateien und Verzeichnisse im Angular CLI (Auswahl) [1.9] [↸](#toc)
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

---
<a name="typescript"></a>
## TypeScript [1.10] [↸](#toc)
* erweitert JS u.a. um: (explizite) Typen, Klassen, Module, ...
* wird zu JS kompiliert
* `npm install typescript -g`
* String über mehrere Zeilen:
    \`mit  
	  back-ticks\`

---
<a name="whatcomponentsare"></a>
## What are Components? [↸](#toc)
Folgende Grafik zeigt eine mögliche Aufteilung einer Webseite in 
Components:![Grafik, was sind components](docimages/2018-11-01_11h04_40_was-sind-components.png)

### app.component.ts [2.13]
* `@component` ist ein decorator mit dessen die ts klasse zu einer component wird
* selector: selektion mit der dann die komponente ersetzt wird
  * `'app-root'` -> es wird das Element <app-root> ersetzt
  * `'#app-root'` -> es wird jede ID app-root ersetzt
  * `'.app-root'` -> es wird jede Klassse app-root ersetzt
  * siehe hierzu src/main.ts und src/app/app.module.ts
* template muss nicht eine externe Datei sein, sondern kann auch html-abschnitt als string angegeben werden [2.14]

### components anlegen [2.15]
1. manuell (Dateien selbst anlegen)
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

### component css [2.18]
* css in der component definiert, gilt nur für diese component, nicht für childs!
* Stichwort: ShadowDOM
* jedes css gestylte element bekommt ein component eigenes attribut und wird beim endprodukt (der html seite) dann zu beginn entsprechend gestylte

---
<a name="databinding"></a>
## Databinding [2.20] [↸](#toc)
### Methoden
1. **String Interpolation**: `{{ Ausdruck, der in einen String resultiert }}`
2. **Property Binding**: `<button [disabled]="Ausdruck, der in einen benötigten Property Type resultiert">`
3. **Event Binding**: `<button (click)="Ausdruck, das das Event behandelt">`
4. **Two-Way Binding**: `<input [(ngModel)]="gebundene Datenquelle">`

<a name="string_interpolation"></a>
#### 1) String Interpolation [2.21] [↸](#toc)
(*branch from here: [`2ndStep/databinding`](https://github.com/dele1972/complete-guide-de/tree/2ndStep/databinding)*)  

Angular 2 Feature **change detection** sorgt dafür, Änderungen festgestellt 
werden und dann die Werte beim `databinding` aktualisiert. Hier wurde z. B. 
in `databinding.component.ts` ein Konstruktor hinzugefügt, welcher die 
asynchrone Funktion `setTimeout()` verwendet um die *property* 
`aNumberProperty` nach drei Sekunden zu erhöhen.  

Dafür gibt es unter Angular2 ein paar Events die eine Aktualisierung 
erkennen. Das Fertigstellen von asynchronen Funktionen (wie `setTimeout()`) 
ist eins dieser Events

<a name="property_binding"></a>
### 2) Property Binding [2.22-2.24] [↸](#toc)
![Grafik, Property & Event Binding](docimages/2018-11-05_08h16_57_property_and_event_binding.png)  
#### bind a HTML Property (`value`)
```html
<input type="text" [value]="aNumberProperty">
```

#### bind an Angular Property ([`[ngClass]`](https://angular.io/api/common/NgClass)) [2.23]
In this Example the Angular `ngClass` Directive is used. Data will be transmitted via property binding.
This Directive supports three Value types:
1. String (`'first second'`)
2. Array (`['first', 'second']`)
3. Object (`{'first': true, 'second': false}`)  

The following Example uses type 'Object'. Therefore we build an Object, with the
 css classname as keyname and a String Interpolation as Value. 'red-border' is 
 defined by src/app/databinding/databinding.component.ts:styles and 'myAttachClass'
 is defined in databinding.component.ts too.
```html
<div [ngClass]="{'red-border': myAttachClass}">Text</div>
```

#### custom properties [2.24]
New App/Component added: `ng g c property-binding --flat --spec false -it -is`
If we want to use external Values via a component side property, this property 
has to be set with the `@Input()` Decorator which has to be imported too:
```angular
import { ..., Input } from '@angular/core';
export class ComponentClassName {
  @Input() propertyName: string; // Type assignment with Typescript
}
``` 
see also: [Type assignment with Typescript](https://www.typescriptlang.org/docs/handbook/basic-types.html)

#### alternate Property Binding [2.27]
With `@Input()` we configure property binding - therefor we have to:
* import `Input` Module (from `@angular/core`)

Alternatively you can add a new key `inputs: ['propertyName(s)']` to the component Decorator. 
Then you don't need to import the `Input` Module and don't have to use the `@Input()` Decorator 
for each Property of the component class. But the other way is more than less best practice 😉

#### alternate binding name (alias) for outer access
`@Input('outerPropertyName') innerPropertyName: TYPE;`  
This alias is mandatory for the accessibility of this property from other components.

<a name="event_binding"></a>
### 3) Event Binding [2.25] [↸](#toc)
[`ngClick`](https://docs.angularjs.org/api/ng/directive/ngClick)  

#### click Event with inline Angular-Code
```html
<button (click)="myAttachClass=false">click me!</button>
```

#### click Event with Angular-Component-Function
`myOnClick()` is defined in `src/app/databinding/databinding.component.ts`
```html
<button (click)="myOnClick($event)">click me too!</button>
```
[`$event`](https://docs.angularjs.org/guide/expression#-event-) is an Angular Object - this is the actual

##### custom event [2.26]
New App/Component added: `ng g c event-binding --flat --spec false -it -is`   

Now we don't want a mother:daughter transmitting but a daughter:mother. This
will be done by a new Event - [`new EventEmitter`](https://angular.io/api/core/EventEmitter)
a module that has to be imported by the component.  

`newEventEmitter<string>()` EventEmitter is a generic type, so we can define 
the used data type with `<>`. In this case a string.  
With [`emit`](https://angular.io/api/core/EventEmitter#emit) we can fire an 
event - `this.clicked.emit('my new Text');` will fire the custom `clicked` 
Event with `'my new Text'` as `$event` Data.  

Because we want to use this custom Event from outside of the component, this
has to be defined with the `@Output()` Decorator, which must be imported too.  
`@Output() clicked = new EventEmitter<string>();`

```html
<app-event-binding (clicked)="aStringProperty = $event"></app-event-binding>
```
`$event` stores the Event-Data (in this case `'my new Text'` from the emit
 call) and will be copied to the `aStringProperty` Property.

<a name="two-way_binding"></a>
### 4) Two-Way Binding [2.28] [↸](#toc)
#### long way 'manually'
Example:  
```html
<input type="text" [value]="aStringProperty" (keyup)="aStringProperty = thisInputElement.value" #thisInputElement>
```

#### short way 'ngModel'
Uses [`ngModel`](https://angular.io/api/forms/NgModel)  
which needs the NgModule `FormsModule` imported by `app.module.ts`:
* `import {FormsModule} from '@angular/forms';` and
* `@NgModule({`  
      `...`  
      `imports: [`  
       `...,`  
       `FormsModule`  
  `],`  

Example:
```html
<input type="text" [(ngModel)]="aStringProperty">
```

---
<a name="working_closer_with_angular_html_template"></a>
## working closer with Angular HTML Template [2.29] [↸](#toc)
(*branch from here: [`3rdStep/templateAndLifecycle`](https://github.com/dele1972/complete-guide-de/tree/3rdStep/templateAndLifecycle)*)  

New App/Component added: `ng g c other --flat --spec false -it -is`   

### [Template reference variables](https://angular.io/guide/template-syntax#ref-vars) [2.29]
`#thisInputElement`: with `#` builds Angular a reference to the Element 

#### Trigger the 'change detection' Trick [2.29]
```html
<input type="text" #input (keydown)="0"/>
```
To start the change detection, use `(keydown)` or another event with nothing. 
In this case `input.value` will change by using as String Interpolation elsewhere.

### data exchange Angular Typescript with Template Element ([`@ViewChild`](https://angular.io/api/core/ViewChild))
export class:
* define reference: `@ViewChild('inputRef') inputEl[: ElementRef];`  
  * `ViewChild` Modul has to be imported
  * `[]` shows optional enhancement for Type specification
* use: `this.inputEl.nativeElement.value = 'New String Value';`

### data exchange Angular Typescript with 'mother' Element via `ng-content`  ([`@ContenChild`](https://angular.io/api/core/ContentChild))
export class:
* define reference: `@ContenChild('paragraphRef') pEl: ElementRef;`  
  * `ContentChild` Modul has to be imported
* use: `this.pEl.nativeElement.innerText = 'New String Value';`
  * `innerText`, because in this example the inner Text of the 
  `<ng-content>` element has to be overwritten (more accurate: 
  `<app-other><p #paragraph>Some Text</p></app-other>`)

---
<a name="component_lifecycles"></a>
## Component Lifecycles [2.30] [↸](#toc)
(*branch from here: [`4thStep/lifecycle`](https://github.com/dele1972/complete-guide-de/tree/4thStep/lifecycle)*)  

![Grafik, Lifecycle Hooks](docimages/2018-11-06_11h49_26_lifecycle-hooks.png)

New App/Component added: `ng g c lifecycle --flat --spec false -it -is`   

In this Branch for each Hook is a log added. To see ngOnChanges, there is a
little 'destroy' Button implemented (via `*ngIf`).


---
<a name="problems_questions"></a>
## Problems/Questions [↸](#toc)
### getting Browser Error "`[WDS] Disconnected!`"
WDS possible stands for webpack-dev-server, this is located/defined at `node_modules` Folder. 
Maybe in [this Stackoverflow Article](https://stackoverflow.com/questions/36917722/keep-getting-wds-disconnected-error) you find an answer... 



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
