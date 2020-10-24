
Instrucciones del proyecto

URI: http://localhost:3000/cars/
Ruta global: "/cars"

#### Links de repositorios
- Back-end: 
    https://github.com/galvarado2015519/ServerGestCar
- Front-end:
    https://github.com/galvarado2015519/ClientGestCar
- Database:
    https://github.com/galvarado2015519/DataBaseGestCar

# DESCRIPCION
Se conto con medio día de trabajo (viernes). El tiempo límite de entrega era para sábado a medio día,
pero por compliaciones y otros compromisos no se dispuso con el todo el tiempo. No se completo el registro y el login.

La aplicación se HIZO EN TypeScript y se adapto a JavaScript

## Se cumplieron con los requerimientos:

* Una aplicación web visual
#### * Instrucciones para levantar un ambiente local de desarrollo
    - Para levantar el API REST se utiliza el comando:
        npm start
    - Los nodemodules estaran borrados por lo que para el server tendrá que realizar lo siguienteÑ
        Colocar el comando en la terminal: npm install (Estando antes ubicado en la carpeta "server")
        De igual forma del lado de angular en la carpeta "Client" (Para instalar las dependencias de angular)

#### * Instrucciones de como levantar la aplicación
    - Para levantar a aplicación tenemos que tener levantado el servidor de angular el cual se levanta con el comando:
        ng serve
    - Tener levantado el API   
        ng start ()

# Schema de base de datos
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    year INT(4) NOT NULL,
    licensePlate VARCHAR(8) NOT NULL,
    state VARCHAR(15) NOT NULL

### Requerimientos opcionales

- Una interfaz de usuario atractiva (Fácil)
- Instrucciones para levantar la base de datos (Fácil)



# LEVANTAR BASE DE DATOS
Se puede levantar con el comando mysql -u root -p admin ( El archivo esta en la carpeta "database")

Al ingresar el usuario y contraseña podrá crear la base de datos con el siguiente codigo:

    <--
    CREATE DATABASE cars_gest_db;

    USE cars_gest_db;

    CREATE TABLE cars(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        brand VARCHAR(30) NOT NULL,
        model VARCHAR(30) NOT NULL,
        year INT(4) NOT NULL,
        licensePlate VARCHAR(8) NOT NULL,
        state VARCHAR(15) NOT NULL
    );

    DESCRIBE cars;
    -->

Si no llega a funcionar, crearla con workbench



