# Chat en Tiempo Real con Node.js y Socket.io

## Descripción
Este proyecto es un **chat en tiempo real** desarrollado con **Node.js**, **Express** y **Socket.io**, que permite que varios usuarios se conecten y envíen mensajes simultáneamente.  
El proyecto fue pensado para aprender **JavaScript del lado del servidor** y manejar comunicación en tiempo real entre clientes.

## Características
- Chat en tiempo real para múltiples usuarios.
- Interfaz web sencilla con HTML, CSS y JavaScript.
- Servidor Node.js con Express para servir la aplicación.
- Comunicación en tiempo real usando Socket.io.
- Funciona en cualquier navegador o dispositivo conectado a Internet.

## Estructura del Proyecto

ChatNode/
│── server.js # Servidor Node.js con Express y Socket.io
│── package.json # Dependencias y scripts de Node.js
│── public/
│── index.html # Interfaz del chat
│── script.js # Lógica del cliente para enviar y recibir mensajes


## Instalación y Ejecución Local
1. Clonar el repositorio:  
```bash
git clone <URL_DE_TU_REPO>
cd ChatNode

Instalar dependencias:

npm install


Ejecutar el servidor:

npm start


Abrir un navegador y visitar:

http://localhost:3000


Abrir múltiples pestañas o dispositivos para probar el chat en tiempo real.

Uso en Replit

Importa el repositorio en Replit
.

Asegúrate de que server.js usa:

const PORT = process.env.PORT || 3000;

Haz clic en Run.

Copia el enlace público generado por Replit y abre en cualquier navegador o dispositivo para probar el chat en tiempo real.

Bibliografía

Curso de Node.js y Socket.io - YouTube

Deploy Node.js en Heroku

Deploy Node.js desde GitHub sin instalar Heroku
