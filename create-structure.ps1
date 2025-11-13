# create-structure.ps1
# Script para crear la estructura EXACTA del Sistema Unificado según documentación

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  CREANDO ESTRUCTURA - HAVENLINK" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

$currentDir = Get-Location
Write-Host "Directorio actual: $currentDir" -ForegroundColor Cyan
Write-Host ""

$confirm = Read-Host "¿Crear la estructura en este directorio? (S/N)"
if ($confirm -ne "S" -and $confirm -ne "s") {
    Write-Host "Operación cancelada." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Creando estructura completa..." -ForegroundColor Yellow
Write-Host ""

# ============================================
# BACKEND
# ============================================
$backendDirs = @(
    "backend/config/settings",
    "backend/core/clientes/tests",
    "backend/core/usuarios/tests",
    "backend/core/empresas/tests",
    "backend/core/pagos/gateways",
    "backend/core/pagos/tests",
    "backend/core/reportes/generators",
    "backend/core/reportes/tests",
    "backend/core/configuracion/tests",
    "backend/modulos/comida_rapida/menu",
    "backend/modulos/comida_rapida/ordenes",
    "backend/modulos/comida_rapida/cocina",
    "backend/modulos/comida_rapida/tests",
    "backend/modulos/hotel/reservas",
    "backend/modulos/hotel/habitaciones",
    "backend/modulos/hotel/check_in_out",
    "backend/modulos/hotel/housekeeping",
    "backend/modulos/hotel/tests",
    "backend/modulos/restaurante/menu",
    "backend/modulos/restaurante/mesas",
    "backend/modulos/restaurante/ordenes",
    "backend/modulos/restaurante/room_service",
    "backend/modulos/restaurante/tests",
    "backend/modulos/servicios_extras/reservas",
    "backend/modulos/servicios_extras/control_acceso",
    "backend/modulos/servicios_extras/inventario",
    "backend/modulos/servicios_extras/tests",
    "backend/integracion/facturacion/sri/xml_templates",
    "backend/integracion/facturacion/utils",
    "backend/integracion/facturacion/tests",
    "backend/integracion/cuenta_corriente/tests",
    "backend/integracion/reportes/tests",
    "backend/utils",
    "backend/static/css",
    "backend/static/js",
    "backend/static/images",
    "backend/media/uploads",
    "backend/media/facturas/xml",
    "backend/media/facturas/pdf",
    "backend/media/certificados",
    "backend/media/reportes",
    "backend/logs"
)

foreach ($dir in $backendDirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# ============================================
# FRONTEND
# ============================================
$frontendDirs = @(
    "frontend/public",
    "frontend/src/config",
    "frontend/src/api",
    "frontend/src/components/common/Button",
    "frontend/src/components/common/Input",
    "frontend/src/components/common/Card",
    "frontend/src/components/common/Modal",
    "frontend/src/components/common/Table",
    "frontend/src/components/common/Loader",
    "frontend/src/components/common/Alert",
    "frontend/src/components/common/Pagination",
    "frontend/src/components/layout/Navbar",
    "frontend/src/components/layout/Sidebar",
    "frontend/src/components/layout/Header",
    "frontend/src/components/layout/Footer",
    "frontend/src/components/layout/MainLayout",
    "frontend/src/components/features/auth/LoginForm",
    "frontend/src/components/features/auth/RegisterForm",
    "frontend/src/components/features/clientes/ClientesList",
    "frontend/src/components/features/clientes/ClienteForm",
    "frontend/src/components/features/clientes/ClienteDetail",
    "frontend/src/components/features/hotel/HabitacionesList",
    "frontend/src/components/features/hotel/ReservaForm",
    "frontend/src/components/features/hotel/CheckInForm",
    "frontend/src/components/features/hotel/CheckOutForm",
    "frontend/src/components/features/hotel/HousekeepingPanel",
    "frontend/src/components/features/restaurante/MenuList",
    "frontend/src/components/features/restaurante/MesasPanel",
    "frontend/src/components/features/restaurante/OrdenForm",
    "frontend/src/components/features/restaurante/RoomServicePanel",
    "frontend/src/components/features/comida_rapida/MenuList",
    "frontend/src/components/features/comida_rapida/OrdenForm",
    "frontend/src/components/features/comida_rapida/CocinaPanel",
    "frontend/src/components/features/servicios_extras/ServiciosList",
    "frontend/src/components/features/servicios_extras/ReservaForm",
    "frontend/src/components/features/servicios_extras/ControlAcceso",
    "frontend/src/components/features/facturacion/FacturasList",
    "frontend/src/components/features/facturacion/FacturaDetail",
    "frontend/src/components/features/facturacion/NotaCreditoForm",
    "frontend/src/components/features/cuenta_corriente/CuentaDetail",
    "frontend/src/components/features/cuenta_corriente/CargosList",
    "frontend/src/components/features/reportes/ReportesPanel",
    "frontend/src/components/features/reportes/VentasReport",
    "frontend/src/components/features/reportes/OcupacionReport",
    "frontend/src/pages/Home",
    "frontend/src/pages/Login",
    "frontend/src/pages/Dashboard",
    "frontend/src/pages/Clientes",
    "frontend/src/pages/Hotel",
    "frontend/src/pages/Restaurante",
    "frontend/src/pages/ComidaRapida",
    "frontend/src/pages/ServiciosExtras",
    "frontend/src/pages/Facturacion",
    "frontend/src/pages/CuentaCorriente",
    "frontend/src/pages/Reportes",
    "frontend/src/pages/NotFound",
    "frontend/src/hooks",
    "frontend/src/context",
    "frontend/src/routes",
    "frontend/src/store/slices",
    "frontend/src/store/actions",
    "frontend/src/utils",
    "frontend/src/styles",
    "frontend/src/assets/images/icons",
    "frontend/src/assets/fonts",
    "frontend/src/assets/videos"
)

foreach ($dir in $frontendDirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# ============================================
# DATABASE
# ============================================
$databaseDirs = @(
    "database/migrations",
    "database/seeds",
    "database/views",
    "database/procedures"
)

foreach ($dir in $databaseDirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# ============================================
# DOCS
# ============================================
$docsDirs = @(
    "docs/api",
    "docs/architecture/diagrams",
    "docs/deployment",
    "docs/user_guide"
)

foreach ($dir in $docsDirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# ============================================
# SCRIPTS
# ============================================
New-Item -ItemType Directory -Force -Path "scripts" | Out-Null

# ============================================
# DOCKER
# ============================================
$dockerDirs = @(
    "docker/backend",
    "docker/frontend",
    "docker/postgres"
)

foreach ($dir in $dockerDirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# ============================================
# GITHUB
# ============================================
New-Item -ItemType Directory -Force -Path ".github/workflows" | Out-Null

Write-Host "Directorios creados exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "Creando archivos __init__.py en backend..." -ForegroundColor Yellow

# ============================================
# ARCHIVOS __INIT__.PY
# ============================================
$initFiles = @(
    "backend/config/__init__.py",
    "backend/config/settings/__init__.py",
    "backend/core/__init__.py",
    "backend/core/clientes/__init__.py",
    "backend/core/clientes/tests/__init__.py",
    "backend/core/usuarios/__init__.py",
    "backend/core/usuarios/tests/__init__.py",
    "backend/core/empresas/__init__.py",
    "backend/core/empresas/tests/__init__.py",
    "backend/core/pagos/__init__.py",
    "backend/core/pagos/gateways/__init__.py",
    "backend/core/pagos/tests/__init__.py",
    "backend/core/reportes/__init__.py",
    "backend/core/reportes/generators/__init__.py",
    "backend/core/reportes/tests/__init__.py",
    "backend/core/configuracion/__init__.py",
    "backend/core/configuracion/tests/__init__.py",
    "backend/modulos/__init__.py",
    "backend/modulos/comida_rapida/__init__.py",
    "backend/modulos/comida_rapida/menu/__init__.py",
    "backend/modulos/comida_rapida/ordenes/__init__.py",
    "backend/modulos/comida_rapida/cocina/__init__.py",
    "backend/modulos/comida_rapida/tests/__init__.py",
    "backend/modulos/hotel/__init__.py",
    "backend/modulos/hotel/reservas/__init__.py",
    "backend/modulos/hotel/habitaciones/__init__.py",
    "backend/modulos/hotel/check_in_out/__init__.py",
    "backend/modulos/hotel/housekeeping/__init__.py",
    "backend/modulos/hotel/tests/__init__.py",
    "backend/modulos/restaurante/__init__.py",
    "backend/modulos/restaurante/menu/__init__.py",
    "backend/modulos/restaurante/mesas/__init__.py",
    "backend/modulos/restaurante/ordenes/__init__.py",
    "backend/modulos/restaurante/room_service/__init__.py",
    "backend/modulos/restaurante/tests/__init__.py",
    "backend/modulos/servicios_extras/__init__.py",
    "backend/modulos/servicios_extras/reservas/__init__.py",
    "backend/modulos/servicios_extras/control_acceso/__init__.py",
    "backend/modulos/servicios_extras/inventario/__init__.py",
    "backend/modulos/servicios_extras/tests/__init__.py",
    "backend/integracion/__init__.py",
    "backend/integracion/facturacion/__init__.py",
    "backend/integracion/facturacion/sri/__init__.py",
    "backend/integracion/facturacion/utils/__init__.py",
    "backend/integracion/facturacion/tests/__init__.py",
    "backend/integracion/cuenta_corriente/__init__.py",
    "backend/integracion/cuenta_corriente/tests/__init__.py",
    "backend/integracion/reportes/__init__.py",
    "backend/integracion/reportes/tests/__init__.py",
    "backend/utils/__init__.py"
)

foreach ($file in $initFiles) {
    New-Item -ItemType File -Force -Path $file | Out-Null
}

Write-Host "Archivos __init__.py creados!" -ForegroundColor Green
Write-Host ""
Write-Host "Creando archivos principales..." -ForegroundColor Yellow

# ============================================
# ARCHIVOS BACKEND PRINCIPALES
# ============================================

# manage.py
@'
#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.development')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed?"
        ) from exc
    execute_from_command_line(sys.argv)
'@ | Out-File -FilePath "backend/manage.py" -Encoding UTF8

# requirements.txt
@'
Django==5.0.1
djangorestframework==3.14.0
djangorestframework-simplejwt==5.3.1
django-cors-headers==4.3.1
psycopg2-binary==2.9.9
python-decouple==3.8
Pillow==10.2.0
celery==5.3.6
redis==5.0.1
reportlab==4.0.9
lxml==5.1.0
cryptography==42.0.2
requests==2.31.0
openpyxl==3.1.2
python-dateutil==2.8.2
pytz==2024.1
whitenoise==6.6.0
gunicorn==21.2.0
django-filter==24.1
drf-spectacular==0.27.1
'@ | Out-File -FilePath "backend/requirements.txt" -Encoding UTF8

# .env.example
@'
DEBUG=True
SECRET_KEY=change-this-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1

DB_NAME=havenlink_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=postgres
DB_PORT=5432

REDIS_URL=redis://redis:6379/0
'@ | Out-File -FilePath "backend/.env.example" -Encoding UTF8

# Dockerfile backend
@'
FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    postgresql-client \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
'@ | Out-File -FilePath "backend/Dockerfile" -Encoding UTF8

# config/settings/base.py
@'
from pathlib import Path
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent.parent

SECRET_KEY = config('SECRET_KEY', default='django-insecure-key')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'django_filters',
    'drf_spectacular',
    'core.clientes',
    'core.usuarios',
    'core.empresas',
    'core.pagos',
    'core.reportes',
    'core.configuracion',
    'modulos.comida_rapida',
    'modulos.hotel',
    'modulos.restaurante',
    'modulos.servicios_extras',
    'integracion.facturacion',
    'integracion.cuenta_corriente',
    'integracion.reportes',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

LANGUAGE_CODE = 'es-ec'
TIME_ZONE = 'America/Guayaquil'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
}

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
]
'@ | Out-File -FilePath "backend/config/settings/base.py" -Encoding UTF8

# config/settings/development.py
@'
from .base import *

DEBUG = True
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME', default='havenlink_db'),
        'USER': config('DB_USER', default='postgres'),
        'PASSWORD': config('DB_PASSWORD', default='postgres'),
        'HOST': config('DB_HOST', default='localhost'),
        'PORT': config('DB_PORT', default='5432'),
    }
}

CORS_ALLOW_ALL_ORIGINS = True
'@ | Out-File -FilePath "backend/config/settings/development.py" -Encoding UTF8

# config/urls.py
@'
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/clientes/', include('core.clientes.urls')),
    path('api/usuarios/', include('core.usuarios.urls')),
    path('api/empresas/', include('core.empresas.urls')),
    path('api/hotel/', include('modulos.hotel.urls')),
    path('api/restaurante/', include('modulos.restaurante.urls')),
    path('api/facturacion/', include('integracion.facturacion.urls')),
]
'@ | Out-File -FilePath "backend/config/urls.py" -Encoding UTF8

# config/wsgi.py
@'
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.production')
application = get_wsgi_application()
'@ | Out-File -FilePath "backend/config/wsgi.py" -Encoding UTF8

# ============================================
# ARCHIVOS FRONTEND PRINCIPALES
# ============================================

# package.json
@'
{
  "name": "havenlink-frontend",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.3",
    "axios": "^1.6.5"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.12"
  }
}
'@ | Out-File -FilePath "frontend/package.json" -Encoding UTF8

# vite.config.js
@'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 }
})
'@ | Out-File -FilePath "frontend/vite.config.js" -Encoding UTF8

# Dockerfile frontend
@'
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
'@ | Out-File -FilePath "frontend/Dockerfile" -Encoding UTF8

# public/index.html
@'
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HavenLink</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
</body>
</html>
'@ | Out-File -FilePath "frontend/public/index.html" -Encoding UTF8

# src/index.jsx
@'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
'@ | Out-File -FilePath "frontend/src/index.jsx" -Encoding UTF8

# src/App.jsx
@'
import React from 'react';

function App() {
  return <div><h1>HavenLink</h1></div>;
}

export default App;
'@ | Out-File -FilePath "frontend/src/App.jsx" -Encoding UTF8

# ============================================
# DOCKER-COMPOSE.YML
# ============================================
@'
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: havenlink_db
    environment:
      POSTGRES_DB: havenlink_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - havenlink_network

  redis:
    image: redis:7-alpine
    container_name: havenlink_redis
    ports:
      - "6379:6379"
    networks:
      - havenlink_network

  backend:
    build: ./backend
    container_name: havenlink_backend
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - ./backend:/app
    ports:
      - "8000:8000"
    environment:
      - DEBUG=True
      - DB_NAME=havenlink_db
      - DB_USER=postgres
      - DB_PASSWORD=postgres
      - DB_HOST=postgres
      - DB_PORT=5432
    depends_on:
      - postgres
      - redis
    networks:
      - havenlink_network

  frontend:
    build: ./frontend
    container_name: havenlink_frontend
    volumes:
      - ./frontend:/app
      - /app/node_modules
    ports:
      - "3000:3000"
    depends_on:
      - backend
    networks:
      - havenlink_network

volumes:
  postgres_data:

networks:
  havenlink_network:
    driver: bridge
'@ | Out-File -FilePath "docker-compose.yml" -Encoding UTF8

# README.md
@'
# HavenLink

Sistema integral de gestion hotelera con facturacion electronica.

## Instalacion con Docker
```bash
docker-compose up --build
```

## Migraciones
```bash
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

## URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- Admin: http://localhost:8000/admin
'@ | Out-File -FilePath "README.md" -Encoding UTF8

# .gitignore
@'
__pycache__/
*.py[cod]
node_modules/
.env
venv/
*.log
.DS_Store
db.sqlite3
'@ | Out-File -FilePath ".gitignore" -Encoding UTF8

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  ESTRUCTURA CREADA EXITOSAMENTE" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para iniciar con Docker:" -ForegroundColor Yellow
Write-Host "  docker-compose up --build" -ForegroundColor White
Write-Host ""