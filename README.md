# Laravel + React: Mini Tienda

Este proyecto es una mini tienda en línea con roles de Administrador y cliente construida utilizando Laravel 11 como backend y React 18 para el frontend.

## Clonar el repositorio

```
git clone git@github.com:jrosasr laravel-react-mini-tienda.git
```

## Copiar el archivo .env.example
```
cp .env.example .env
```

### Configurar variables de entorno: Edita el archivo .env y configura las siguientes variables:

```
DB_CONNECTION=pgsql

DB_HOST=127.0.0.1

DB_PORT=5432

DB_DATABASE=POSTGRES_DB (Reemplaza con el nombre de tu base de datos)

DB_USERNAME=POSTGRES_USER (Reemplaza con el nombre de usuario de tu base de datos)

DB_PASSWORD=POSTGRES_PASSWORD (Reemplaza con la contraseña de tu base de datos)
```
Nota: Los valores de POSTGRES_DB, POSTGRES_USER y POSTGRES_PASSWORD deben coincidir con los configurados en el servicio de Docker.

## Configuración de Docker
1. Se debe crear un volumen externo y un network para el contenedor

```
docker network create --driver bridge docker_network
```

```
docker volume create db-volume
```

2. Iniciar el contenedor de la base de datos
```
docker-compose up -d --build
```
Este comando levantará un contenedor Docker para PostgreSQL.

## Instalación de Dependencias
1. Instalar dependencias de Laravel
```
composer install
```
2. Instalar dependencias de React
```
npm install
```

# Ejecución del Proyecto
1. Crear la base de datos y ejecutar las migraciones
```
php artisan migrate
```

2. Seeder base de datos
```
php artisan db:seed
```
3. Iniciar el servidor de desarrollo de Laravel
```
php artisan serve
```
4. Iniciar el servidor de desarrollo de React: En una terminal separada, ejecuta
```
npm run dev
```

# Usuarios de prueba
Email: admin@admin.com
Contraseña: 12341234

Email: client@client.com
Contraseña: 12341234
