CREATE DATABASE comunideia;
USE comunideia;

-- ================= tb_cadastro =================
CREATE TABLE cadastro (
    usuario_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    nome_usuario VARCHAR(50) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

INSERT INTO 
	cadastro(nome, sobrenome,nome_usuario, data_nascimento, cpf, telefone, email, senha)
VALUES 
	('Lucas', 'Ton Gonçalves', 'Minerva', '20000513', '99999999999', 981567254, 'lucaston2323@gmail.com', 'admin123');

SELECT * FROM cadastro;


-- ================= tb_cadastro_empresa =================
CREATE TYPE dias AS ENUM 
	('segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo');

CREATE TABLE cadastro_empresa (
    empresa_id SERIAL PRIMARY KEY,
  	fk_usuario_id INTEGER REFERENCES cadastro(usuario_id),
    photoCard VARCHAR(255) NOT NULL,
    title VARCHAR(100) UNIQUE NOT NULL,
    descriptions VARCHAR(255) NOT NULL,
    localityRoad VARCHAR(100) NOT NULL,
    localityDistrict VARCHAR(60) NOT NULL,
  	localityState VARCHAR(60) NOT NULL,
    dias_funcionamento dias[] NOT NULL,
    horario_inicio TIME NOT NULL,
  	horario_termino TIME NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    site_da_empresa VARCHAR(100),
    social_instagram VARCHAR(100),
    social_linkedin VARCHAR(100),
    social_facebook VARCHAR(100),
    social_twitter VARCHAR(100)
);

INSERT INTO 
	cadastro_empresa (dias_funcionamento)
VALUES 
	(ARRAY['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira']);

INSERT INTO cadastro_empresa
    (photoCard, title, descriptions, localityRoad, localityDistrict, localityState, horario_inicio, horario_termino, telefone, site_da_empresa, social_instagram, social_linkedin, social_facebook, social_twitter)
VALUES 
    ('Lucas', 
     'BURGER KING', 
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.', 
     'Rua Ficticia 123', 
     'São Paulo',
     'SP',
     '09:00:00',
     '18:00:00', 
     '981567254', 
     'www.burgerking.com.br', 
     'www.instagram.com.br/burgerking',
     'www.linkedin.com.br/burgerking',
     'www.facebook.com.br/burgerking',
     'www.x.com.br/burgerking');


SELECT * FROM cadastro_empresa;

-- ================= tb_faq =================

CREATE TABLE FAQ (
    ID SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

-- ================= tb_planos =================

CREATE TYPE tipo_de_plano AS ENUM ('básico', 'premium', 'plus');

CREATE TABLE planos (
    id SERIAL PRIMARY KEY,
    planos tipo_de_plano UNIQUE NOT NULL
);

