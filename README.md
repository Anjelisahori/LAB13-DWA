# 🔐 Next.js Authentication Application

Una aplicación web moderna de autenticación construida con Next.js 14, NextAuth.js, Prisma y PostgreSQL. Incluye autenticación con credenciales, OAuth (Google y GitHub), y un sistema de bloqueo por intentos fallidos.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Prisma](https://img.shields.io/badge/Prisma-6.0-2D3748)
![NextAuth](https://img.shields.io/badge/NextAuth.js-4.24-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Variables de Entorno](#-variables-de-entorno)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Seguridad](#-seguridad)
- [Despliegue](#-despliegue)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Autor](#-autor)

## ✨ Características

### Autenticación
- ✅ **Autenticación con Credenciales**: Email y contraseña
- ✅ **OAuth con Google**: Sign in con cuenta de Google
- ✅ **OAuth con GitHub**: Sign in con cuenta de GitHub
- ✅ **Sistema de Registro**: Formulario completo de registro de usuarios
- ✅ **Protección de Rutas**: Middleware para rutas protegidas

### Seguridad
- 🔒 **Encriptación de Contraseñas**: Usando bcrypt con 10 rondas de salt
- 🚫 **Bloqueo por Intentos Fallidos**: Cuenta bloqueada después de 3 intentos incorrectos
- ⏱️ **Bloqueo Temporal**: 5 minutos de bloqueo automático
- 🛡️ **Validación de Datos**: Validación en cliente y servidor
- 🔐 **Sesiones Seguras**: JWT tokens con NextAuth.js

### Diseño
- 🎨 **UI Moderna**: Diseño glassmorphism con gradientes vibrantes
- 📱 **Responsive**: Adaptado para móvil, tablet y desktop
- 💫 **Animaciones**: Transiciones suaves y efectos hover
- 🌈 **Gradientes Dinámicos**: Colores índigo, púrpura y rosa
- ⚡ **Tailwind CSS**: Estilos utility-first para desarrollo rápido

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Next.js** | 16.0.3 | Framework React para producción |
| **React** | 19 | Biblioteca de interfaz de usuario |
| **TypeScript** | 5.0 | Superset tipado de JavaScript |
| **NextAuth.js** | 4.24 | Autenticación para Next.js |
| **Prisma** | 6.19.0 | ORM para Node.js y TypeScript |
| **PostgreSQL** | 14+ | Base de datos relacional |
| **Tailwind CSS** | 3.4 | Framework CSS utility-first |
| **bcryptjs** | 2.4.3 | Hash de contraseñas |
| **React Icons** | 5.0 | Iconos para React |

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior) - [Descargar](https://nodejs.org/)
- **npm** o **yarn** - Gestor de paquetes
- **PostgreSQL** (v14 o superior) - [Descargar](https://www.postgresql.org/download/)
- **Git** - Para clonar el repositorio

## 🚀 Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

### 3. Configurar la Base de Datos

```bash
# Generar el cliente de Prisma
npx prisma generate

# Ejecutar las migraciones
npx prisma db push

# (Opcional) Abrir Prisma Studio para ver la BD
npx prisma studio
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Database
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_bd?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secret-key-aqui"

# Google OAuth (Opcional)
GOOGLE_CLIENT_ID="tu-google-client-id"
GOOGLE_CLIENT_SECRET="tu-google-client-secret"

# GitHub OAuth
GITHUB_ID="tu-github-client-id"
GITHUB_SECRET="tu-github-client-secret"
```

### Generar NEXTAUTH_SECRET

Genera un secret aleatorio seguro:

```bash
# Opción 1: Con OpenSSL
openssl rand -base64 32

# Opción 2: Con Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Configurar OAuth Providers

#### Google OAuth
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto
3. Habilita "Google+ API"
4. Ve a "Credenciales" → "Crear credenciales" → "ID de cliente OAuth"
5. Tipo de aplicación: **Aplicación web**
6. URIs de redirección autorizados:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
7. Copia el **Client ID** y **Client Secret**

#### GitHub OAuth
1. Ve a [GitHub Developer Settings](https://github.com/settings/developers)
2. Click en "New OAuth App"
3. Completa:
   - **Application name**: Tu nombre de app
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copia el **Client ID** y **Client Secret**

## 💻 Uso

### Modo Desarrollo

```bash
npm run dev
# o
yarn dev
```

La aplicación estará disponible en: `http://localhost:3000`

### Modo Producción

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start
```

### Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Crea build de producción
npm start            # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
npx prisma studio    # Abre Prisma Studio (GUI para BD)
npx prisma generate  # Genera cliente de Prisma
npx prisma db push   # Sincroniza schema con BD
```

## 📁 Estructura del Proyecto

```
LAB13-DWA/
├── prisma/
│   └── schema.prisma           # Esquema de base de datos
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts    # Configuración NextAuth
│   │   │   └── register/
│   │   │       └── route.ts        # API de registro
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Página del dashboard
│   │   ├── profile/
│   │   │   └── page.tsx            # Página de perfil
│   │   ├── signIn/
│   │   │   └── page.tsx            # Página de login
│   │   ├── signUp/
│   │   │   └── page.tsx            # Página de registro
│   │   ├── globals.css             # Estilos globales
│   │   ├── layout.tsx              # Layout principal
│   │   └── page.tsx                # Página de inicio
│   ├── components/
│   │   ├── LogoutButton.tsx        # Botón de cerrar sesión
│   │   └── SessionProvider.tsx     # Proveedor de sesión
│   ├── lib/
│   │   └── prisma.ts               # Cliente de Prisma
│   ├── generated/
│   │   └── prisma/                 # Cliente generado
│   └── middleware.ts               # Middleware de protección
├── .env                            # Variables de entorno (no subir a Git)
├── .gitignore                      # Archivos ignorados por Git
├── eslint.config.mjs              # Configuración ESLint
├── next.config.ts                 # Configuración Next.js
├── package.json                   # Dependencias del proyecto
├── postcss.config.mjs             # Configuración PostCSS
├── tailwind.config.ts             # Configuración Tailwind
├── tsconfig.json                  # Configuración TypeScript
└── README.md                      # Este archivo
```

## 🔒 Seguridad

### Implementaciones de Seguridad

1. **Encriptación de Contraseñas**
   - Bcrypt con 10 rondas de salt
   - Hash almacenado en la base de datos

2. **Sistema de Bloqueo**
   - 3 intentos fallidos permitidos
   - Bloqueo de 5 minutos
   - Reseteo automático al login exitoso

3. **Protección de Rutas**
   - Middleware con NextAuth
   - Redirección automática a `/signIn`
   - Verificación de tokens JWT

4. **Variables de Entorno**
   - Secrets no hardcodeados
   - Archivo `.env` en `.gitignore`

5. **Validación**
   - Validación de email en cliente y servidor
   - Sanitización de inputs
   - Manejo de errores robusto

### Recomendaciones Adicionales

- ⚠️ **NUNCA** subas el archivo `.env` a Git
- 🔄 Rota las credenciales OAuth periódicamente
- 🛡️ Usa HTTPS en producción
- 📝 Implementa rate limiting para APIs
- 🔐 Habilita 2FA para cuentas de administrador

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Importa tu repositorio
4. Configura las variables de entorno:
   ```
   DATABASE_URL=postgresql://...
   NEXTAUTH_URL=https://tu-app.vercel.app
   NEXTAUTH_SECRET=tu-secret
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...
   GITHUB_ID=...
   GITHUB_SECRET=...
   ```
5. Deploy automático ✅

### Base de Datos en Producción

**Opciones Recomendadas:**

- **Neon.tech** - PostgreSQL serverless (Free tier)
- **Supabase** - PostgreSQL con extras (Free tier)
- **Vercel Postgres** - Integración directa
- **Railway** - PostgreSQL managed (Free trial)

### Actualizar OAuth Redirects

Después del deploy, actualiza los redirect URIs:

**Google Console:**
```
https://tu-app.vercel.app/api/auth/callback/google
```

**GitHub OAuth:**
```
https://tu-app.vercel.app/api/auth/callback/github
```

## 📖 Descripción del Proyecto

Esta aplicación es un **sistema completo de autenticación y gestión de usuarios** desarrollado como parte del Laboratorio 13 del curso de Desarrollo Web Avanzado. El objetivo principal es implementar un sistema robusto de autenticación utilizando múltiples métodos modernos de inicio de sesión.

### ¿Qué hace la aplicación?

La aplicación permite a los usuarios:

1. **Registrarse** creando una cuenta con email y contraseña
2. **Iniciar sesión** usando tres métodos diferentes:
   - Credenciales tradicionales (email/password)
   - Cuenta de Google (OAuth)
   - Cuenta de GitHub (OAuth)
3. **Acceder a áreas protegidas** como el Dashboard y el Perfil una vez autenticados
4. **Gestionar su sesión** con la posibilidad de cerrar sesión de forma segura

### Características Técnicas Destacadas

**Seguridad Implementada:**
- Las contraseñas se cifran usando bcrypt antes de almacenarse en la base de datos
- Sistema de bloqueo automático después de 3 intentos fallidos de inicio de sesión
- La cuenta se bloquea temporalmente por 5 minutos para prevenir ataques de fuerza bruta
- Protección de rutas mediante middleware que redirige a usuarios no autenticados
- Uso de tokens JWT para mantener las sesiones seguras

**Flujo de la Aplicación:**
1. El usuario nuevo visita `/signUp` y crea su cuenta
2. Sus datos se validan y la contraseña se cifra automáticamente
3. Puede iniciar sesión en `/signIn` usando credenciales o OAuth
4. Una vez autenticado, accede al Dashboard donde ve información de su sesión
5. Puede navegar al Perfil para ver sus datos completos
6. El middleware protege estas rutas y redirige si no hay sesión activa

**Tecnologías y Arquitectura:**
- **Next.js 14** con App Router para una aplicación moderna de React
- **NextAuth.js** maneja toda la lógica de autenticación de forma segura
- **Prisma ORM** gestiona la base de datos con un esquema tipado
- **PostgreSQL** almacena usuarios, sesiones y cuentas OAuth
- **TypeScript** garantiza type-safety en todo el código
- **Tailwind CSS** proporciona un diseño moderno y responsive

### Problema que Resuelve

Este proyecto demuestra cómo implementar un sistema de autenticación completo que cumple con estándares modernos de seguridad, ofreciendo múltiples opciones de inicio de sesión para mejorar la experiencia del usuario, todo mientras mantiene la seguridad como prioridad principal.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Email: tu-email@example.com
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

## 🙏 Agradecimientos

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 📚 Recursos Adicionales

- [Next.js App Router](https://nextjs.org/docs/app)
- [NextAuth.js Providers](https://next-auth.js.org/providers/)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub

📧 Para preguntas o sugerencias, no dudes en abrir un issue
