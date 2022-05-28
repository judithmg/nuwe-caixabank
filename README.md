<img src="https://nuwe.io/_next/image?url=%2Flogo_color.png&w=64&q=75"/>


# Nuwe + CaixaBank Hackathon 💻

Este proyecto contiene el código para la hackathon organizada por Nuwe junto con Caixabank, para la cual se pide desarrollar una aplicación móvil y web cross platform en React.

## About 🤓

<img src="https://github.com/judithmg/nuwe-caixabank/blob/main/public/images/mobile.png?raw=true"/>

El proyecto se ha creado utilizando `react-native-web`, que permite una implementación de componentes y APIs de react-native de manera que sean interoperables con React DOM y por lo tanto operativos también en browser.

Como lenguaje se utiliza Typescript, lo cual facilitaría el tratamiento de datos una vez se escale el proyecto.

Algunos componentes, como `<TransactionsCount/>` fueron hechos de tal manera que fueran utilizados por todas las plataformas. Otros son únicos según si el dispositivo es web o mobile.

<img src="https://github.com/judithmg/nuwe-caixabank/blob/main/public/images/web.png?raw=true"/>

Escogí la opción de desarrollar la app con `react-native-web` ya que para un proyecto de apenas un día creo que es la opción más rápida, aunque si este se hubiese tratado de un proyecto a largo plazo, hubiese estudiado otras opciones como la de crear una librería de componentes reutilizables y tener proyectos independientes (web con `react` y mobile con `react-native`) ya que encuentro que son más escalables. Además, con el diseño disponible, era difícil tomar una decisión ya que no quedaba claro si los datos que se mostraban en mobile eran los mismos que en web, o si estos deberían encontrarse de otra manera (en otro tab? en otra página?).

La app requiere de testing, algo que por el poco tiempo disponible no me ha dado tiempo a implementar.

Como linter, la app utiliza `eslint`+ `prettier` y fueron agregadas reglas tanto para typescript como para react-native.


## Folder structure 📁
```
nuwe-caixabank/
├───assets      
│   ├───icons   
│   └───images  
├───components  
├───config
├───constants
├───hooks
├───navigation
├───public
├───screens
└───screens
```
## Live preview 📳

[Vista previa web](https://nuwe-summer1.netlify.app)


## Run this project 🏃‍♀️

```
git clone https://github.com/judithmg/nuwe-caixabank
cd nuwe-caixaban
yarn 
```

To run the project, use
```
yarn start
```

Asegúrate de leer la documentación de [Expo](https://docs.expo.dev/) para tener todo tu setup listo.

## Author 👩‍💻

- Judith Martínez (judithmg)
