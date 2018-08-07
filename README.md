[![Build Status][travis-badge]][travis-badge-url]


[travis-badge]: https://travis-ci.org/kelliekel/anyapp.svg?branch=master
[travis-badge-url]: https://travis-ci.org/kelliekel/anyapp


# anyapp
A simple framework for any (angular) app


# Table of contents
  * [Features](#features)
  * [Getting started](#getting-started)
  * [Configuration](#configuration)
  
## Features
### Components
 - [x] Components: button
 - [x] Components: checkbox
 - [x] Components: datepicker
 - [x] Components: icon
 - [x] Components: input
 - [x] Components: label
 - [x] Components: select
 - [x] Components: slider
 - [x] Components: table
 - [x] Components: textarea
 - [x] Components: loading
 - [ ] Components: header
 - [ ] Components: list
 - [ ] Components: card
 - [x] Directive: form
 - [ ] Layout: side-menu
 - [ ] Layout: top-menu
### Core 
 - [ ] Authentication
 - [ ] Http
 - [ ] Exception and error
 - [ ] Application
### Tools
 - [ ] Helper
 
## Getting started

### Step 1: Install anyapp dependencies:
`npm install --save @angular/material @angular/cdk @angular/material-moment-adapter`

Optional dependencies (read below):
`npm install --save hammerjs moment material-design-lite`

### Step 2: Install `anyapp`:
`npm install --save @anyapp/components @anyapp/core @anyapp/tools`

### Step 3: Import AnyAppComponentsModule and the angular FormsModule:
```js
import { FormsModule } from '@angular/forms';
import { AnyAppComponentsModule } from '@anyapp/components';
import { AnyAppCoreModule } from '@anyapp/core';
import { AnyAppToolsModule } from '@anyapp/tools';

@NgModule({
  declarations: [AppComponent],
  imports: [AnyAppComponentsModule, AnyAppCoreModule, AnyAppToolsModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Step 4: Include a theme 
AnyApp depends on Angular Material predefined themes and MDL (https://getmdl.io). If you're using the Angular CLI, you can add any of the four styles to your styles.scss or include it in .angular-cli.json (Angular v5 and below) or angular.json (Angular v6 onwards).
```css
@import "~@anyapp/components/assets/styles/deeppurple-amber.bundle.min.css";
```
or
```css
@import "~@anyapp/components/assets/styles/indigo-pink.bundle.min.css";
```
or
```css
@import "~@anyapp/components/assets/styles/pink-bluegrey.bundle.min.css";
```
or
```css
@import "~@anyapp/components/assets/styles/purple-green.bundle.min.css";
```

### Step 5: Include the required scripts
AnyApp depends also depends on a few scripts (hammer, moment, mdl). If you're using the Angular CLI, you can add include the js in the scripts section of .angular-cli.json (Angular v5 and below) or angular.json (Angular v6 onwards).
```json
node_modules/@anyapp/components/assets/scripts/scripts.bundle.js
```
Alternatively you can include the inidividual scripts:
```json
node_modules/@anyapp/components/assets/scripts/individual/hammerjs.js
node_modules/@anyapp/components/assets/scripts/individual/material.js
node_modules/@anyapp/components/assets/scripts/individual/moment.js
```
Or you can include the scripts on your own (by either referencing it from your own node_modules or using a CDN


## Configuration
You can set global configuration by providing custom ANYAPP_DEFAULT_COMPONENTS_CONFIG
```js
<AnyAppComponentsConfig>{
  messageDuration: 2000,
  locale: "nl",
  errorMessages: {          
    required: "This field is required",
    email: "This has to be an e-mailaddress",
    pattern: "This field doesn't match the pattern",
    minLength: "This field doesn't match the min length",
    maxLength: "This field doens't match the max length",
    invalidFormMessage: "The form is invalid"
  },
  tableConfig: {
    pageSize: 50,
    selectOption: TableSelectEnum.NoSelect
  },
  buttonConfig: {
    buttonTimeoutThreshold: 250
  },
  formConfig: {
  }
```


<!---
npm run build:<project>
cd dist/<project>
npm publish --access=public

ng generate library <project> --prefix=<prefix>
--->
