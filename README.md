# Taller React: aplicación To-do

Este repo lo vamos a utilizar como segunda parte de la charla [<devs> Taller de React: de 0 a ninja </devs>](https://www.meetup.com/es-ES/WordPress-Madrid/events/263751142/), haciendo ahora un ejercicio práctico.

> Los slides de la primera parte [los puedes ver aquí](#).

En la primera parte hemos visto qué es React, hemos echado un vistazo a su ecosistema y repasado cuáles son los elementos más importantes: componentes, estado y props. Si has aguantado hasta aquí, ¡ahora viene lo mejor! Vamos a poner todo esto en práctica para que empieces tu camino a ser ninja.

![Ninja](https://media.giphy.com/media/ErdfMetILIMko/source.gif)

## ¿Qué vamos a hacer?



> 💡 Si en algún momento te atascas y no sabes cómo continuar, ¡no dudes en preguntarnos! Aunque te vamos a dejar una pista 😏, en la rama `solucion` podrás ver el código del ejercicio (recuerda que puedes cambiar de rama con el comando `git checkout <nombre>`). Puedes tenerlo como referencia, ¡pero recuerda que como se aprende de verdad es peleándote con el código!

## Creando nuestra aplicación

### 1. Setup inicial

El primer paso es sencillo: ¡hay que configurar nuestro entorno de trabajo!

1. Instala `create-react-app` de forma global: `npm install -g create-react-app`. Con `-g` indicamos que es un paquete que vamos a instalar a nivel global.
2. Clona este repositorio: `git clone https://github.com/YuneVK/taller-react-todo`
3. Entra en el directorio del repo: `cd taller-react-todo`
4. Inicializa el proyecto de React: `create-react-app .`. Con el `.` indicamos que se instale en el directorio actual. Si quisiéramos que se creara una carpeta tendríamos que indicar su nombre así: `create-react-app nombre-de-la-carpeta`.
5. Arranca el proyecto: `npm start`.
6. Abre el navegador y entra a la dirección `localhost:3000` para comprobar que está funcionando.

[AÑADIR CAPTURA]

It works! 😁 ¡Seguimos!

> ⚠️ **¿Tienes algún problema con Git/Node y no puedes seguir estos pasos?** ¡No te preocupes! Hemos creado este repo de Codesandbox [❗️AÑADIR ENLACE] para que no te pierdas nada del taller. Así puedes seguirlo, y cuando termine vemos cómo podemos arreglar esos problemas. 😉

### 2. Destripando la estructura del proyecto

En este paso vamos a ver mientras la estructura del proyecto generado:

```
MyWebApp/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Tenemos tres carpetas: `node_modules`, `src` y `public`.

- `node_modules`: es donde de almacenan las dependencias del proyecto.
- `public`: la raíz del servidor, donde está el `index.html` y donde añadiremos los archivos estáticos que queramos utilizar (por ejemplo las imágenes).
- `src`: el directorio `source`, donde estará todo el código relativo a compoentes

Además, en la raíz también tenemos los siguientes archivos:

- `README.md`: archivo markdown con la información del proyecto.

- `package.json`: donde está la información de nuestro proyecto (dependencias, scripts, etc).

- `.gitignore`: donde se configuran los archivos que `git` va a ignorar, es decir, los que no se van a subir. Un ejemplo de archivos que se deben subir es aquel donde tengas _API keys_.

  > ⚠️ **¡CUIDADO CON SUBIR `NODE_MODULES!`** Esta carpeta suele ser muy pesada e innecesaria la subida, por lo que se suele añadir al `.gitignore` para que no se suba.

Otro archivo clave en este proyecto es el `index.js` que está dentro de la carpeta `src`, ya que es el punto de entrada de la aplicación. Si lo abrimos veremos que tiene muy pocas líneas:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Pero son claves para su funcionamiento. Como hablamos antes, lo primero es importar `React` y todos sus paquetes necesarios (`react-dom`), además del componente principal que vamos a utilizar, `App`.

A través del método `ReactDOM.render` renderizamos el compoente `App` dentro del elemento del DOM que tiene como ID `root` (una pista, si vamos a `public/index.html` veremos ese elemento).

Si vamos al componente App (`src/App.js`) veremos el siguiente contenido:

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a React</h2>
        </div>
          <p className="App-intro">
            Lista de usuarios
          </p>
      </div>
    );
  }
}

export default App;
```

Esto ya te va resultando familiar, ¿verdad? 😄

> ⚠️ **¡Recuerda!** `class` es una palabra reservada de JavaScript, por lo que, cuando queramos establecer este atributo, tendremos que hacerlo con `className`.

> ⚠️ **¡Otra cosa que debes tener en cuenta!** En React es necesario que todo lo que retornemos esté contenido en un único elemento. Por ejemplo, esto nos daría error:
>
> ```js
> return (
>   <h1>Elemento</h1>
>   <h2>Elemento</h2>
> );
> ```
>
> Mientras que esto sí sería correcto:
>
> ```js
> return (
> 	<div>
>   	<h1>Elemento</h1>
>   	<h2>Elemento</h2>
>   </div>
> );
> ```
>
> 💡 **Una pista**: para estos casos, si no quieres añadir elementos innecesarios, puedes utilizar [fragments](https://es.reactjs.org/docs/fragments.html).

### 3. Limpiando el código

Antes de añadir nada, vamos a hacer un poco de limpieza 🧹 al código que viene por defecto, básicamente al componente App (recuerda, `src/App.js`).

Vamos a quitar todo lo que devuelva el método `render()` para dejar solo el `div` padre, además de borrar la importación del logo que no vamos a utilizar (`import logo from './logo.svg';`), quedando así:

```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        // Aquí es donde vamos a añadir el código de nuestra aplicación
      </div>
    );
  }
}

export default App;
```

También vamos a hacer una limpieza de su archivo de estilos, `App.css`, borrando todo su contenido.

🧹 Ahora que hemos dejado el código algo más limpio, ¡vamos a empezar a añadir el nuestro para darle forma a la aplicación!

### 4. Añadiendo estilos

Sí, estamos en _front_, así que, aunque no nos centraremos en los estilos de la aplicación, sí vamos a intentar hacer las cosas con una estética mínimamente decente. 😜

Hemos preparado este CSS para que lo añadas a `App.css`, con las clases que utilizaremos a continuación:

```css
// ADD CSS
```

Ya tenemos nuestro `setup`, así que vamos con los componentes lógicos.

### 5. Establecer y leer elementos con el state

Comenzamos estableciendo los elementos es nuestro `to-do` que estarán disponibles al iniciar la aplicación.

¿Recuerdas cuando hablamos antes del `state`? Comentamos que el `state` (o estado) de un componente permite manejar datos propios a lo largo de su ciclo de vida. Es decir, es una información, un dato local de ese componente.

Nuestra aplicación va a tener una lista de tareas, por lo que, si lo piensas, ese listado debería formar parte del estado de un componente, en este caso App.

Recuerda que, mediantes los Hooks, podemos definir el estado de un componente con la siguiente sintaxis:

```js
function Componente() {
  const [fooBar, setFooBar] = useState("Este sería el valor inicial");

  // ...
}
```

Vamos a seguir esta sintaxis para establecer el estado `todos` a nuestro componente `App`:

```js
function App() {
  const [todos, setTodos] = useState([
    "Tarea 1", 
    "Tarea 2", 
    "Tarea 3"
  ]);

  // ...
}
```

Ya los tenemos establecidos en el componente, ¡así que toca mostrar el listado! Como `todos` es un array, tendremos que recorrerlo para renderizar un elemento por cada uno. Para ello, establece el método `reader()` de tu componente `App` así:

```js
 return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
 						className="todo-item"
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
```

> 💡**¡Recuerda!** El método [`map()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map) recorre un array y devuelve un nuevo array con los resultados de la función que recibe por parámetro, que es aplicada a cada elemento del array. Es muy común su uso en React para renderizar componentes en función de un listado.

Ahora vuelve al navegador y comprueba que todo funciona correctamente. :crossed_fingers:

[AÑADIR IMAGEN]

Ya vemos el listado, pero es el momento de hacer un pequeño `refactor`, ya que tenemos que pensar en componentes. Por eso, vamos a crear uno que sea el encargado de mostrar un elemento de la lista.

Para ello, crea una carpeta llama `components` dentro de `src` y, dentro de esta carpeta, un archivo `TodoItem.js`, quedando la estructura así:

```
MyWebApp/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
  	components/
  		Todo.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

> 💡 Crear una carpeta `components` no es obligatorio, puedes tener todos tus componentes sueltos en `src`, aunque se suelen poner en una carpeta por convenio, para organizar el código. ¡Sigue unas buenas prácticas y tu yo el futuró te lo agradecerá! 🤗

`Todo.js` corresponde al compontente `Todo`, que se utiliará para representar a cada elemento, por lo que recibirá por `props` el contenido.

```js
import React from 'react';

const Todo = props => {
	return (<div className="Todo">{props.content}</div>);
}

export default Todo;
```

Ahora tenemos que utilizar este componente en el principal, `App`. Para ello, el primer paso es importarlo:

```js
import Todo from './components/Todo'
```

Una vez importado, podremos utilizarlo, por lo que volvemos a cambiar el método `render()`:

```js
 return (
    <div className="App">
      <div className="todo-list">
        {todos.map((content, index) => (
          <Todo
            key={index}
            index={index}
            content={content}
          />
        ))}
      </div>
    </div>
  );
```

Con todos estos cambios, el componente `App` quedaría así:

```js
import React from 'react';
import Todo from './componentes/Todo';

function App() {
  const [todos, setTodos] = useState([
    "Tarea 1", 
    "Tarea 2", 
    "Tarea 3"
  ]);

   return (
    <div className="App">
      <div className="todo-list">
        {todos.map((content, index) => (
          <Todo
            key={index}
            index={index}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
```

Ahora volvemos al navegador y vemos que sigue funcionando correctamente:

[CAPTURA]

### 6. Añadiendo elementos

Vale, ya podemos ver los elementos, pero, ¿y si queremos añadir uno nuevo? En este paso vamos a añadir esa funcionalidad.



## ¡Bonus! Vamos a hacer un build



## ¡Ya está! ¿Y ahora qué?

¡Enhorabuena! ¡Has completado el taller! 🎉

Esperamos que hayas aprendido mucho y te hayas quedado con ganas de seguir trasteando. 😉 ¡Eso es lo importante!

Ahora tienes un mundo abierto de posibilidades: puedes tratar de mejorar tu aplicación, añadir nuevas funcionalidades, incorporar un backend, seguir estudiando, practicando, ¡lo que tú quieras!

Si quieres seguir ampliando información, en el siguiente apartado te hemos dejado algunos enlaces útiles. ¡Pero tómatelo con calma!

#### Cosas que puedes añadir/mejorar de la aplicación

Te dejamos algunas ideas para que sigas practicando:

- [ ] En nuestra aplicación, podemos crear y eliminar elementos. Pero, ¿qué pasa si queremos editarlos? Puedes empezar añadiendo esa funcionalidad. 😬
- [ ] Puedes encapsular más los componentes, teniendo una hoja de estilos asociada a cada uno (que el componente `Todo` tenga su propio `Todo.css`).
- [ ] ¡Adapta los estilos! Nosotros solo te hemos puesto unos de ejemplo, pero puedes adaptarlo a tu gusto.
- [ ] ...¡Y lo que se te ocurra! 😉 Hay muchas posibilidades, piensa en qué te gustaría añadir y hazlo.

#### Enlaces útiles para ampliar información y seguir aprendiendo



#### Recursos

// Añadir react DevTools, plugin de snippets para visual studio, newsletter semanal...