CREATE TABLE "cadastro" (
  "usuario_id" SERIAL PRIMARY KEY,
  "nome" VARCHAR(100) NOT NULL,
  "sobrenome" VARCHAR(100) NOT NULL,
  "nome_usuario" VARCHAR(50) UNIQUE NOT NULL,
  "data_nascimento" DATE NOT NULL,
  "cpf" VARCHAR(14) UNIQUE NOT NULL,
  "telefone" INT NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  "senha" VARCHAR(255) NOT NULL
);

CREATE TABLE "cadastro_empresa" (
  "empresa_id" SERIAL PRIMARY KEY,
  "photoCard" VARCHAR(255) NOT NULL,
  "title" VARCHAR(100) UNIQUE NOT NULL,
  "description" VARCHAR(255) NOT NULL,
  "localityRoad" VARCHAR(100) NOT NULL,
  "localityDistrict" VARCHAR(60) NOT NULL,
  "dias_funcionamento" DATE NOT NULL,
  "horario_funcionamento" VARCHAR(20) NOT NULL,
  "telefone" INT NOT NULL,
  "site" VARCHAR(100) NOT NULL,
  "social_instagram" VARCHAR(100),
  "social_linkedin" VARCHAR(100),
  "social_facebook" VARCHAR(100),
  "social_twitter" VARCHAR(100)
);

CREATE TABLE "FAQ" (
  "ID" SERIAL PRIMARY KEY,
  "nome" VARCHAR(100) NOT NULL,
  "email" VARCHAR(100) NOT NULL,
  "descricao" VARCHAR(255) NOT NULL
);

CREATE TABLE "planos" (
  "id" SERIAL PRIMARY KEY,
  "tipo_de_plano" VARCHAR(20) UNIQUE NOT NULL
);
