# Entorno de desarrollo

En este documento se van a detallar los pasos que se han dado para generar el entorno de desarrollo.

## Inicializar el proyecto

Una vez creado el directorio en el sistema de archivos procederemos a crear el fichero package.json mediante el comando:

```bash
$ npm init
```

Deberemos introducir una serie de datos con los que se inicializará el proyecto.

## Plugins

Se van a definir una serie de plugins base que dispondrán todos los desarrollos.

### Gulp

La instalación de gulp se realiza del siguiente modo:

```bash
$ npm install gulp --save-dev
```

#### gulp-load-plugins

```bash
$ npm install gulp-load-plugins --save-dev
```

#### del
```bash
$ npm install del --save-dev
```

#### run-sequence
```bash
$ npm install run-sequence --save-dev
```
### RequireJS

```bash
$ npm install requirejs --save-dev
```


### browser-sync

Brower-sync nos permite visualizar en tiempo real las modificaciones que realizamos sobre las fuentes de la aplicación.

Su instalación se realiza de la siguiente manera:

```bash
$ npm install browser-sync --save-dev
```


### Babel

Mediante Babel realizaremos la transpilación de código js que desarrollemos.

Esto nos permitirá dearrollar con ES6 y que pueda ser ejecutado en navegadores que no soporten esta especificación.

Lo instalaremos del siguiente modo:

```bash
$ npm install gulp-babel --save-dev
$ npm install babel-preset-env --save-dev
$ npm install babel-plugin-transform-es2015-modules-amd --save-dev
```

#### Uso

En gulpfile.js

```js
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
```

Crear el fichero de configruación ```.babelrc```





### Jasmine

Para implementar los tests de los módulos de JavasCript utilizaremos Jasmine.

La instalación se realiza del siguiente modo:

```bash
$ npm install jasmine --save-dev
```

### Karma

La ejecución de los test de Jasmine la realizaremos con Karma.

La instalación de Karma y los plugin requeridos se realizará del siguiente modo:

```bash
$ npm install karma --save-dev
$ npm install karma-jasmine --save-dev
$ npm install karma-chrome-launcher --save-dev
$ npm install karma-requirejs --save-dev
```

### JSDoc3

```bash
$ npm install gulp-jsdoc3 --save-dev
$ npm install jsdoc-to-markdown --save-dev
```

### ESLint

La instalación de ESLint se realiza del siguiente modo.

```bash
$ npm install gulp-eslint --save-dev
```


## Testing

Para la implementación y ejecución de tests vamos a utilizar los siguientes plugins.

### Jasmine

Una vez instalado la inicialización de Jasmine dentro del proyecto se realiza del siguiente modo:

```bash
$ jasmine init
```

Como punto de partida se pueden generar una serie de test de ejemplo:

```bash
$ jasmine examples
```

Para ejecutar los test bastará con el siguiente comando:

```bash
$ jasmine
```

### Karma

Una vez instalado la inicialización de Karma dentro del proyecto se realiza del siguiente modo:

```bash
$ karma init
```
