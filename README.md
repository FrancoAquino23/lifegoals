# Lifegoals - Gestor de Metas Personales

Este proyecto es una aplicación web moderna desarrollada con **Angular 18** y **Firebase**, diseñada para gestionar metas de vida en tiempo real. La aplicación está completamente contenerizada con **Docker** y desplegada en **Render**.

## Demo en Vivo
Puedes acceder a la aplicación desplegada aquí: 
👉 [https://lifegoals-franciscoaquino.onrender.com/](https://lifegoals-franciscoaquino.onrender.com/)

---

## Tecnologías Utilizadas
* **Frontend:** Angular 18 (Signals, Standalone Components).
* **Base de Datos:** Firebase Firestore (Real-time updates).
* **Infraestructura:** Docker & Nginx.
* **Despliegue:** Render (CI/CD mediante GitHub).

## Dockerización y Despliegue
El proyecto utiliza una estrategia de **Multi-stage Build** para optimizar el tamaño de la imagen final:
1.  **Etapa de Construcción:** Utiliza `node:20-alpine` para compilar el código fuente.
2.  **Etapa de Producción:** Utiliza `nginx:alpine` para servir los archivos estáticos de forma segura, con una configuración personalizada de `nginx.conf` para manejar las rutas virtuales de Angular.

---

## Guía de Desarrollo (Angular CLI)

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.21.

### Servidor de Desarrollo
Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

### Construcción (Build)
Ejecuta `ng build` para construir el proyecto. Los archivos de compilación se almacenarán en el directorio `dist/`.

---

## Seguridad y Configuración
Por motivos de seguridad, las credenciales de Firebase han sido omitidas del repositorio público. 
- En **entorno local**, utiliza `src/environments/environment.ts`.
- En **producción (Render)**, las llaves se inyectan dinámicamente mediante variables de entorno y el script `set-env.js` durante el proceso de build de Docker.
