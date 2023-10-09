# Comandos importantes para el manejo de Git.
Luis Alberto Batalla Gonzàlez.

## Introduccion.
Git es un sistema de control de versiones de código abierto que permite a los desarrolladores rastrear los cambios realizados en un proyecto de software. Git es una herramienta esencial para cualquier desarrollador que trabaje en proyectos de software colaborativos.

## Comandos importantes.

### git init:
Inicializa un nuevo repositorio Git en el directorio actual. El comando git init inicializa un nuevo repositorio Git en el directorio actual. Este comando crea un directorio .git en el directorio actual, que contiene todos los datos necesarios para el repositorio.

### git add:
Agrega los cambios realizados en los archivos al área de preparación. El comando git add agrega los cambios realizados en los archivos al área de preparación. El área de preparación es una zona intermedia entre los archivos modificados y las confirmaciones.

### git commit:
Crea una confirmación que registra los cambios realizados en los archivos. El comando git commit crea una confirmación que registra los cambios realizados en los archivos. Una confirmación incluye un mensaje que describe los cambios realizados.

### git push:
Sube las confirmaciones al repositorio remoto. El comando git push sube las confirmaciones al repositorio remoto. El repositorio remoto es un servidor que almacena las confirmaciones de Git.

## git pull:
Descarga las confirmaciones del repositorio remoto. El comando git pull descarga las confirmaciones del repositorio remoto. Este comando es útil para sincronizar los cambios realizados en el repositorio remoto con el repositorio local.

### git branch:
Crea una nueva rama en el repositorio. El comando git branch crea una nueva rama en el repositorio. Una rama es una línea de desarrollo independiente del repositorio.

### git checkout:
Cambia a una rama existente. El comando git checkout cambia a una rama existente. Este comando permite a los desarrolladores trabajar en diferentes versiones del proyecto al mismo tiempo.

### git merge:
Fusiona los cambios de una rama en otra.  El comando git merge fusiona los cambios de una rama en otra. Este comando es útil para combinar los cambios realizados por diferentes desarrolladores.

### git reset:
Restablece el estado del repositorio a una confirmación anterior. El comando git reset restablece el estado del repositorio a una confirmación anterior. Este comando puede ser útil para corregir errores o revertir los cambios realizados en el repositorio.

### git log:
Muestra el historial de confirmaciones del repositorio. El comando git log muestra el historial de confirmaciones del repositorio. Este comando puede ser útil para rastrear los cambios realizados en el proyecto.

# Comandos implementados en la actividad.

Desde el directorio del proyecto:

+ git init
+ git add .
+ git commit -m "Primer commit"
+ git remote add origin https://github.com/LuisAlbertoB/Resume3.git
+ git remote set-url origin https://LuisAlbertoB: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@github.com/LuisAlbertoB/Resume3.git
+ git config --global credential.helper store
+ git push -u origin master
