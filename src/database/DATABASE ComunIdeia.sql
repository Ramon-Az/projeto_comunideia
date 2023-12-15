CREATE DATABASE comunideia;

USE comunideia;

-- ================= ENUMs =================

CREATE TYPE "dias" AS ENUM (
	'segunda-feira',
	'terça-feira',
	'quarta-feira',
	'quinta-feira',
	'sexta-feira',
	'sábado',
	'domingo'
);

CREATE TYPE "tipo_de_plano" AS ENUM (
	'básico',
	'premium',
	'plus'
);

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

-- ================= tb_cadastro_empresa =================

CREATE TABLE cadastro_empresa (
	empresa_id SERIAL PRIMARY KEY,
	fk_usuario_id INTEGER,
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

-- ================= tb_login =================

CREATE TABLE login (
	fk_usuario_id INTEGER REFERENCES cadastro(usuario_id) PRIMARY KEY,
	nome_usuario VARCHAR(50) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL, -- CHECK (email ~* '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
	senha VARCHAR(255) NOT NULL CHECK (LENGTH(senha) >= 8)
);

-- ================= tb_faq =================

CREATE TABLE FAQ (
	faq_id SERIAL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	descricao VARCHAR(255) NOT NULL
);

-- ================= tb_planos =================

CREATE TABLE plano (
	plano_id SERIAL PRIMARY KEY,
	fk_usuario_id INTEGER,
	planos tipo_de_plano NOT NULL
);

DROP TABLE login;

ALTER TABLE cadastro_empresa ADD FOREIGN KEY (fk_usuario_id) REFERENCES cadastro (usuario_id);

ALTER TABLE plano ADD FOREIGN KEY (fk_usuario_id) REFERENCES cadastro (usuario_id);


-- ================= INSERINDO DADOS =================

INSERT INTO 
	cadastro(nome, sobrenome,nome_usuario, data_nascimento, cpf, telefone, email, senha)
VALUES 
	('Lucas', 'Ton Gonçalves', 'Minerva', '20000513', '99999999990', 981999999, 'lucaston2323@gmail.com', 'admin123'),
	('Ramon', 'Azevedo', 'Ramon-Az', '20001025', '99999999900', 981999999, 'ramonazevedo123@outlook.com', 'admin321'),
	('Josué', 'Muniz', 'JosuéJmuniz', '20000328', '99999999000', 981999999, 'josuemuniz123@hotmail.com', 'admin222'),
	('Ana', 'Macedo', 'anaM', '20010710', '9999990000', 981999999, 'anamacedo123@gmail.com', 'admin555'),
	('Caroline', 'Silva', 'carolS', '20021122', '99999900000', 981999999, 'carolinesilva123@outlook.com', 'adminadmin123'),
	('João', 'Ribeiro Lima', 'joaoR', '19990101', '99999000000', 981999999, 'joaolima123@hotmail.com', 'adminadminadmin123');

INSERT INTO cadastro_empresa
	(fk_usuario_id, photoCard, title, descriptions, localityRoad, localityDistrict, localityState, dias_funcionamento, horario_inicio, horario_termino, telefone, site_da_empresa, social_instagram, social_linkedin, social_facebook, social_twitter)
VALUES 
	(1,
	'imagens.host.com/burger-king/imagem123.png',
	'BURGER KING', 
	'Conheça a melhor comida rápida da região! Servimos hambúrgueres deliciosos e batatas fritas crocantes.',
	'Rua Exemplo 456, Bairro Popular', 
	'São Paulo',
	'SP',
	ARRAY['segunda-feira', 'quarta-feira', 'sexta-feira']::dias[],
	'10:00:00',
	'20:00:00', 
	'981567254', 
	'www.burgerking.com.br', 
	'www.instagram.com.br/burgerking',
	'www.linkedin.com.br/burgerking',
	'www.facebook.com.br/burgerking',
	'www.x.com.br/burgerking'),
	(2,
	'imagens.host.com/mc-donalds/imagem456.png',
	'Mc Donalds', 
	'Venha experimentar os nossos famosos Big Macs e McNuggets! Oferecemos um menu diversificado para todos os gostos.',
	'Avenida Modelo 789, Bairro Central', 
	'São Paulo',
	'SP',
	ARRAY['terça-feira', 'quinta-feira', 'sábado']::dias[],
	'08:00:00',
	'22:00:00', 
	'982345678', 
	'www.mcdonalds.com.br', 
	'www.instagram.com.br/mcdonalds',
	'www.linkedin.com.br/mcdonalds',
	'www.facebook.com.br/mcdonalds',
	'www.x.com.br/mcdonalds'),
	(3,
	'imagens.host.com/pizza-hut/imagem789.png',
	'Pizza Hut', 
	'Saboreie as melhores pizzas da cidade! Temos uma variedade de sabores e tamanhos para atender a todos os paladares.',
	'Rua da Pizza 123, Bairro Gastronômico', 
	'São Paulo',
	'SP',
	ARRAY['segunda-feira', 'quarta-feira', 'sexta-feira', 'domingo']::dias[],
	'18:00:00',
	'23:00:00', 
	'987654321', 
	'www.pizzahut.com.br', 
	'www.instagram.com.br/pizzahut',
	'www.linkedin.com.br/pizzahut',
	'www.facebook.com.br/pizzahut',
	'www.x.com.br/pizzahut'),
	(4,
	'imagens.host.com/subway/imagem101.png',
	'Subway', 
	'Desfrute de sanduíches frescos e saudáveis na Subway! Montamos os sanduíches do jeito que você gosta.',
	'Avenida dos Sanduíches 789, Bairro Nutritivo', 
	'São Paulo',
	'SP',
	ARRAY['segunda-feira', 'quarta-feira', 'sexta-feira']::dias[],
	'11:00:00',
	'19:00:00', 
	'988876543', 
	'www.subway.com.br', 
	'www.instagram.com.br/subway',
	'www.linkedin.com.br/subway',
	'www.facebook.com.br/subway',
	'www.x.com.br/subway'),
	(5,
	'imagens.host.com/starbucks/imagem202.png',
	'Starbucks', 
	'Descubra o prazer do café na Starbucks! Oferecemos uma ampla variedade de cafés e bebidas deliciosas.',
	'Rua do Café 456, Bairro Aromático', 
	'São Paulo',
	'SP',
	ARRAY['terça-feira', 'quinta-feira', 'sábado']::dias[],
	'08:00:00',
	'21:00:00', 
	'987654321', 
	'www.starbucks.com.br', 
	'www.instagram.com.br/starbucks',
	'www.linkedin.com.br/starbucks',
	'www.facebook.com.br/starbucks',
	'www.x.com.br/starbucks'),
	(6,
	'imagens.host.com/paodeacucar/imagem303.png',
	'Pão de Açúcar', 
	'Encontre produtos frescos e de qualidade no Pão de Açúcar! Somos sua opção completa de compras.',
	'Avenida dos Alimentos 789, Bairro Gourmet', 
	'São Paulo',
	'SP',
	ARRAY['segunda-feira', 'quarta-feira', 'sexta-feira', 'domingo']::dias[],
	'07:00:00',
	'22:00:00', 
	'987123456', 
	'www.paodeacucar.com.br', 
	'www.instagram.com.br/paodeacucar',
	'www.linkedin.com.br/paodeacucar',
	'www.facebook.com.br/paodeacucar',
	'www.x.com.br/paodeacucar');

INSERT INTO 
	plano (fk_usuario_id, planos)
VALUES 
	(1,'básico'),
	(2,'básico'),
	(3,'premium'),
	(4,'plus'),
	(5,'básico'),
	(6,'plus');

INSERT INTO
	login (fk_usuario_id, nome_usuario, email, senha)
VALUES 
	(1, 'Minerva', 'lucaston2323@gmail.com', 'admin123'),
	(2, 'Ramon-Az', 'ramonazevedo123@outlook.com', 'admin123'),
	(3, 'JosuéJmuniz', 'josuemuniz123@hotmail.com', 'admin123'),
	(4, 'anaM', 'anamacedo123@gmail.com', 'admin555'),
	(5, 'carolS', 'carolinesilva123@outlook.com', 'adminadmin123'),
	(6, 'joaoR', 'joaolima123@hotmail.com', 'adminadminadmin123');

INSERT INTO 
	faq (nome, email, descricao)
VALUES 
	('Lucas Gonçalves','lucaston2323@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.'),
	('Ramon Azevedo','ramonazevedo123@outlook.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.'),
	('Josué Muniz','josuemuniz123@hotmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.'),
	('Ana Macedo','anamacedo123@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.'),
	('Carol Silva','carolinesilva123@outlook.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.'),
	('joão Lima','joaolima123@hotmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a egestas sem, eget facilisis libero. Curabitur erat neque, blandit id pellentesque et, porta ut dui.');


-- ================= CONSULTAS =================

SELECT * FROM cadastro;
SELECT * FROM login;
SELECT * FROM cadastro_empresa;
SELECT * FROM plano;
SELECT * FROM faq;

-- ================= CONSULTAS COM JOIN =================

SELECT * FROM cadastro
INNER JOIN cadastro_empresa ON cadastro.usuario_id = cadastro_empresa.fk_usuario_id;


SELECT * FROM cadastro
INNER JOIN login ON cadastro.usuario_id = login.fk_usuario_id;


/* 
ALTER TABLE cadastro
ADD CONSTRAINT valida_telefone CHECK (telefone ~ '^\\d{9}$'); 
*/