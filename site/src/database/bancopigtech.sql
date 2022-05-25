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

select * from usuario;


