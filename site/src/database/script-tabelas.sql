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
telFixo char(8),
cnpj char(14));

create table granja (
idGranja int primary key auto_increment,

)
/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DOUBLE,
	umidade DOUBLE,
	momento DATETIME,
	fk_aquario INT
);


