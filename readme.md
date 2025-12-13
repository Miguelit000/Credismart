# 🏦 CreditSmart - Plataforma de Gestión de Créditos

**CreditSmart** es una aplicación web moderna tipo Fintech desarrollada como una *Single Page Application* (SPA) con **React**.

Esta versión (Actividad 3) integra persistencia de datos en la nube utilizando **Google Firebase (Firestore)**, permitiendo que el catálogo de créditos, el simulador y las solicitudes de usuarios funcionen en tiempo real y guarden información de manera permanente.

## 🚀 Características Principales

* **Catálogo Dinámico:** Los productos de crédito se cargan directamente desde una base de datos NoSQL (Firestore), incluyendo imágenes y tasas actualizadas.
* **Simulador de Crédito:** Herramienta de filtrado y búsqueda que consulta la base de datos en tiempo real.
* **Solicitud en Línea (CRUD):** Formulario inteligente que calcula cuotas mensuales y **guarda** las solicitudes en la nube (Firestore).
* **Manejo de Errores y Validaciones:**
    * Detección automática de desconexión a internet (Modo Offline).
    * Cálculos financieros automáticos en tiempo real.
    * Alertas de estado visuales (Carga, Éxito, Error).
* **Interfaz Profesional:** Diseño responsivo con Bootstrap 5, banners visuales y tarjetas de producto atractivas.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React JS + Vite
* **Lenguaje:** JavaScript (ES6+)
* **Estilos:** Bootstrap 5 + CSS personalizado
* **Backend / Base de Datos:** Firebase Firestore (NoSQL)
* **Enrutamiento:** React Router Dom
* **Control de Versiones:** Git & GitHub

---

## ⚙️ Instrucciones de Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/Miguelit000/Credismart.git
cd CreditSmart
```

### 2. Instalar dependencias

Necesitas tener Node.js instalado.
```bash
npm install
```

### 3. Configurar Variables de Entorno (¡IMPORTANTE!) 🔐
Este proyecto utiliza Firebase, por lo que necesita credenciales de acceso privadas.
Busca el archivo .env.example en la raíz del proyecto.
Crea una copia de ese archivo y renómbralo a .env.
Ingresa tus propias credenciales de Firebase en el archivo .env (sin comillas):

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

Abre tu navegador en: http://localhost:5173/

## 📂 Estructura del Proyecto
/src
|-- /assets          # Recursos estáticos
|-- /components      # Componentes reutilizables (Navbar, CreditCard)
|-- /firebase        # Configuración de conexión a la BD (firebaseConfig.js)
|-- /pages           # Vistas principales:
|   |-- Home.jsx     # Catálogo (Lee de colección 'creditos')
|   |-- Simulador.jsx# Filtros (Lee de colección 'creditos')
|   |-- Solicitar.jsx# Formulario (Escribe en colección 'solicitudes')
|-- App.jsx          # Enrutamiento principal
|-- main.jsx         # Punto de entrada

## 👤 Autor
Miguel Angel Gomez Ingeniería Web I - Actividad 3
