# Proyecto Full-Stack -> Flask + React + PostgreSQL

## Overview

Este proyecto es una aplicación Full-Stack, construida de la siguiente manera:

- **Frontend:** React + Vite + TypeScript
- **Backend:** Flask (Python)
- **Database:** PostgreSQL
- **Integración de AI:** OpenAI API (generación de resúmenes de reportes)

El frontend consume una API REST de Flask, generando y desplegando reportes, además de generar un resumen de todos ellos por medio de IA.

---

## Versionado

- **Python:** 3.12.x
- **Flask:** 3.x
- **Node.js:** 22.x
- **Vite:** 7.2.x
- **React:** 18.x


## Estructura del proyecto:

```text
jack-automated-reports/
├── backend/
│   ├── model/
│   │   └── summarized_reports_model.py
│   ├── repositories/
│   │   └── summarized_reports_repository.py
│   ├── routes/
│   │   └── summarized_reports_routes.py
│   ├── services/
│   │   └── summarized_reports_service.py
│   ├── .env.example
│   ├── app.py
│   ├── config.py
│   ├── main.py
│   └── requirements.txt
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── schemes/
│   ├── utils/
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

## Arquitectura

El backend sigue una arquitectura por capas:

Routes → Manejo de operaciones CRUD

Services → Logica de negocio y llamada externa a la API de OpenAI

Repositories → Acceso a Database

Models → Estructuras de datos


## Endpoints del backend

Todos los API endpoints se encuentran dentro de 

/backend/routes

## Endpoints de ejemplo:

GET /api/summarized-reports/exists/<date>

POST /api/summarized-reports/generate-summary/<work_area>/<shift>/<date>

GET /api/summarized-reports/filtered/<date>

## Variables de Environment

Este proyecto necesita que utilices tus propias API_KEY y tu propia base de datos.
Crea un archivo .env dentro de /backend

Ejemplo:

OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/database_name

## Base de Datos
Recomiendo una Base de Datos en Supabase (PostgreSQL), puedes crearla con los siguientes comandos:

* Tabla de Reportes 
```text
create table reports_details (
    report_details_id SERIAL PRIMARY KEY,
    title varchar,
    work_area_id int,
    responsible_id int,
    message varchar,
    created_at date,
    enterprise_shift_id int
);
```
* Tabla de Resúmenes
```
create table summarized_reports (
  summarized_report_id SERIAL PRIMARY KEY,
  summarized_report_message VARCHAR,
  work_area_id int,
  enterprise_shift_id int,
  summary_date date
);
```

## Backend Setup (Flask)
1. Crea un virtual environment:

```
cd backend 
python -m venv venv
```
2. Activa el virtual environment:

Windows

venv\Scripts\activate

Linux / macOS

source venv/bin/activate

3. Instala las dependencias: 
```
pip install -r requirements.txt
```

4. Corre el servidor Flask
```
flask run
```
5. El servidor correrá localmente:
   http://127.0.0.1:5000

## Frontend Setup (React)

Desde el root del proyecto:

1. Instala las dependencias:
```
npm install
```

2. Start development server
```
npm run dev
```
3. El frontend correrá localmente: http://localhost:5173

## Flujo de la aplicación
1. El usuario generará reportes desde el frontend.
2. El usuario en cualquier momento podrá solicitar un resumen de los reportes del día.
2. El frontend llamará a la API de Flask utilizando React Query.
3. El backend creará los reportes en la base de datos PostgreSQL.
4. El backend verificará si el resumen diario ya existe.
   5. De no existir:
      6. Construirá un PROMPT.
      7. Llamará a la API de OpenAI.
      8. Guardará el resultado en la base de datos.
9. El frontend automáticamente se actualizará.

## Notas
1. React Query maneja el cache y la sincronización de UI
2. Los endpoint están protegidos de llamadas innecesarias a la API. 
3. La API de OpenAI está limitada a un número determinado.
4. La estructura del proyecto permite fácil integración y futura extensión.

## Contexto
Este proyecto fué desarrollado de manera académica, y sigue prácticas de desarrollo de software aptas para aplicaciones a nivel producción.

# ¡Gracias!