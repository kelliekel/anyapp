[![Build Status][travis-badge]][travis-badge-url]


[travis-badge]: https://travis-ci.org/kelliekel/anyapp.svg?branch=master
[travis-badge-url]: https://travis-ci.org/kelliekel/anyapp


# anyapp
A simple framework for any (angular) app


# Table of contents
  * [Features](#features)
  * [Getting started](#getting-started)
  
## Features
### Components
 - [x] Components: button
 - [ ] Components: checkbox
 - [ ] Components: datepicker
 - [ ] Components: icon
 - [ ] Components: input
 - [ ] Components: label
 - [ ] Components: select
 - [ ] Components: slider
 - [ ] Components: table
 - [ ] Components: textarea
 - [ ] Components: loading
 - [ ] Components: header
 - [ ] Components: list
 - [ ] Components: card
 - [ ] Directive: form
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
`npm install --save @angular/material @angular/cdk hammerjs moment`

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
AnyApp depends on Angular Material predefined themes and MDL (https://getmdl.io). If you're using the Angular CLI, you can add this to your styles.scss or include it in .angular-cli.json (Angular v5 and below) or angular.json (Angular v6 onwards).
```css
@import "~@anyapp/components/assets/styles/styles.bundle.css";
```

### Step 5: Include MDL script
AnyApp depends also depends on MDL. If you're using the Angular CLI, you can add include the js in .angular-cli.json (Angular v5 and below) or angular.json (Angular v6 onwards).
```json
~@anyapp/components/assets/scripts/scripts.bundle.js
```
<!---
Alternatively you can use a CDN:
```html
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
```
--->

### Step 6 (Optional): Configuration
You can also set global configuration by providing custom ANYAPP_DEFAULT_CONFIG
`todo`


<!---
npm run build:<project>
cd dist/<project>
npm publish --access=public

ng generate library <project> --prefix=<prefix>
--->
