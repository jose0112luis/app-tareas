# app-tareas
Ejercicio 2 de una app-web con NodeJS y MongoDB (CRUD de tareas) - dev y deploy 

*****
### express
Este modulo es un framework de node que nos va ayudar a crear una aplicación de servidor. Nos permite crear URL's que los usuarios pueden visitar.

### express-handlebars
Handlebars es un motor de plantilla dentro de express. Un motor de plantilla es basicamente una especie de lenguaje q se le añade a HTML para poder tener condicionales, bucles, funciones, etc. nos ayuda a crear alunas vistas, pueden ser archivos hbs (similar a como se utilizaría php con html).

### mongoose
Este módulo nos va a permitir conectarnos con la BDD MongoDB y poder modelar los datos (como tablas en SQL) dentro de la BDD.

### morgan
Morgan nos permite poder ver por consola las peticiones q van llegando al servidor. 

### dotenv
nos ayuda a poder utilizar variables de entorno a nuestros programas y podemos agrearlo a -gitignore para q si alguien ve mi repositorio no pueda ver el valor de mis variables.

## -- MODULOS PARA DESARROLLO --
#### babel
es un compilador de JavaScript. Con el compilador podemos convertir código actualizado de JavaScript (como sintaxis, llamar funciones, etc.) a código antiguo o código de versiones anteriores de NodeJS.

### @babel/core
Es el paquete, el compilador de Babel

### @babel/cli
Es la forma de utilizar Babel desde consola

### @babel/node
Para utilizar Babel con node

### @babel/preset-env
Nos permite ejecutar el código con sisntaxis nueva y tener todas las características nuevas dentro de node

### nodemon
nos va ayudar a reiniciar el servidor automáticamente cada vez q hacemos un cambio

*****
## Enviroment Variables
PORT =3000
MONGODB_HOST =localhost
MONGODB_DATABASE =crud-tareas

##### GIT - porciakso algun error de permisos agregar:
(git push ..... --allow-unrelated-histories)
*****
## npx 
Es un comando de Node q se añadió en las últimas versiones, q es básicamente para q podamos ejecutar paquetes de Node q permitan recibir argumentos por ejm: 'npx babel-node src/index.js'
*****

### -- PARA DESPLIEGUE DE LA APP --
Al utilizar babel tenemos q realizar algunas configuraciones adicionales:
1. En el package.json en scripts agregar "build": "babel src -d dist".
2. Luego ejecutar ese script con <b>*npm run build*</b>
3. Esto creará un nuevo directorio llamado dist con los archivos de JavaScript de nuestro proyecto
4. Ejecutamos la app desde el nuevo directorio con <b>*node dist/index.js*</b>
5. Si nos da error de *regeneratorRuntime* tenemos q descargar un modulo más
6. Ejecutamos: <b>*npm install --save-dev @babel/plugin-transform-runtime*</b>
7. Volvemos a compilar con <b>*npm run build*</b> y ejecutar con <b>*node dist/index.js*</b>
8. Vemos q hacen falta copiar algunos archivos en el directorio *dist/*
9. Copiamos todos los archivos faltantes manualmente o con el módulo *ncp* (ncp [archivo] [destino]). Si se utiliza el modulo <b>*ncp* agregar al script del package.json *'&& ncp src/views dist/views && ncp src/public dist/public'*</b> quedando el script: *"build": "babel src -d dist && ncp src/views dist/views && ncp src/public dist/public"*
10. Volvemos a compilar con <b>*npm run build*</b> y ejecutar con <b>*node dist/index.js*</b>