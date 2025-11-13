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
