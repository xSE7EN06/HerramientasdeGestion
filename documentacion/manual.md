# Manual de Instalación

## Descripción General

El Sistema de Gestión de Inventarios es una aplicación web diseñada para administrar productos, controlar existencias, registrar movimientos de entrada y salida de mercancías y generar reportes para facilitar la toma de decisiones dentro de una empresa comercial.

## Requisitos del Sistema

Antes de instalar la aplicación, es necesario contar con los siguientes componentes:

- Sistema Operativo Windows 10 o superior.
- Node.js versión 18 o superior.
- PostgreSQL versión 15 o superior.
- Visual Studio Code.
- Git.

## Instalación de Dependencias

Verificar que Node.js esté instalado:

```bash
node -v
npm -v
```

## Clonación del Repositorio

```bash
git clone https://github.com/usuario/HerramientasdeGestion.git
```

Ingresar al proyecto:

```bash
cd HerramientasdeGestion
```

## Instalación de Paquetes

```bash
npm install
```

## Configuración de Base de Datos

Crear una base de datos llamada:

```sql
CREATE DATABASE inventarios;
```

Configurar los datos de conexión según el entorno de trabajo.

## Ejecución del Sistema

Iniciar el servidor:

```bash
npm start
```

Abrir el navegador e ingresar a:

```text
http://localhost:3000
```

## Verificación

Si la instalación fue correcta, el sistema mostrará la pantalla principal de inicio de sesión permitiendo el acceso a usuarios autorizados.