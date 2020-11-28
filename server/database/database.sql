CREATE DATABASE ng_aeropuertos_db;
 
 USE ng_aeropuertos_db;

 CREATE TABLE pasajeros(
     id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
     nombre VARCHAR (45),
     apellido VARCHAR (45),
     documento INT (10) NOT NULL,
     image VARCHAR (200),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP


   
    
 );
  CREATE TABLE vuelos (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      destino VARCHAR (45),
      regreso VARCHAR (45),
      image VARCHAR (200),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP




  );
  
  Describe vuelos;
  Describe pasajeros;


