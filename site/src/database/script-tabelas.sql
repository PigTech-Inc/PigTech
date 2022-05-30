-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */

create database pigtech;
use pigtech;

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
senha varchar(45),
email varchar(45),
dtCadastro datetime default current_timestamp,
telefone char(11),
cnpj char(14));

create table granja (
idGranja INT PRIMARY KEY AUTO_INCREMENT,
descricao varchar(150)
);

create table medida (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL,
momento DATETIME,
fk_granja INT,
FOREIGN KEY (fk_granja) REFERENCES granja(idGranja)
);

/* para sql server - remoto - produção */

create table usuario (
idUser int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
senha varchar(45),
email varchar(45),
dtCadastro datetime default current_timestamp,
telefone char(11),
cnpj char(14));

create table granja (
idGranja INT PRIMARY KEY AUTO_INCREMENT,
descricao varchar(150)
);

create table medida (
id INT PRIMARY KEY AUTO_INCREMENT,
temperatura DECIMAL,
momento DATETIME,
fk_granja INT,
FOREIGN KEY (fk_granja) REFERENCES granja(idGranja)
);