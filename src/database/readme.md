# DATABASE ComunIdeia

## modelo entidade-relacionamento (ER)

```mermaid
erDiagram
  ENUM dias {
    segunda-feira
    terça-feira
    quarta-feira
    quinta-feira
    sexta-feira
    sábado
    domingo
  }

  ENUM tipo_de_plano {
    básico
    premium
    plus
  }

  ENTITY cadastro {
    usuario_id INT [pk, increment]
    nome VARCHAR(100) [not null]
    sobrenome VARCHAR(100) [not null]
    nome_usuario VARCHAR(50) [unique, not null]
    data_nascimento DATE [not null]
    cpf VARCHAR(14) [unique, not null]
    telefone INT [not null]
    email VARCHAR(100) [not null]
    senha VARCHAR(255) [not null]
  }

  ENTITY cadastro_empresa {
    empresa_id INT [pk, increment]
    fk_usuario_id INT
    photoCard VARCHAR(255) [not null]
    title VARCHAR(100) [unique, not null]
    descriptions VARCHAR(255) [not null]
    localityRoad VARCHAR(100) [not null]
    localityDistrict VARCHAR(60) [not null]
    localityState VARCHAR(60) [not null]
    dias_funcionamento dias [not null]
    horario_inicio TIME [not null]
    horario_termino TIME [not null]
    telefone VARCHAR(15) [not null]
    site_da_empresa VARCHAR(100)
    social_instagram VARCHAR(100)
    social_linkedin VARCHAR(100)
    social_facebook VARCHAR(100)
    social_twitter VARCHAR(100)
  }

  ENTITY FAQ {
    faq_id INT [pk, increment]
    nome VARCHAR(100) [not null]
    email VARCHAR(100) [not null]
    descricao VARCHAR(255) [not null]
  }

  ENTITY planos {
    plano_id INT [pk, increment]
    fk_usuario_id INT
    planos tipo_de_plano [unique, not null]
  }

  cadastro ||--o{ cadastro_empresa: fk_usuario_id
  cadastro ||--o{ planos: fk_usuario_id

```

## Diagrama de classe

```mermaid

classDiagram
  enum dias {
    segunda-feira
    terça-feira
    quarta-feira
    quinta-feira
    sexta-feira
    sábado
    domingo
  }

  enum tipo_de_plano {
    básico
    premium
    plus
  }

  class cadastro {
    usuario_id: SERIAL [pk, increment]
    nome: VARCHAR(100) [not null]
    sobrenome: VARCHAR(100) [not null]
    nome_usuario: VARCHAR(50) [unique, not null]
    data_nascimento: DATE [not null]
    cpf: VARCHAR(14) [unique, not null]
    telefone: INT [not null]
    email: VARCHAR(100) [not null]
    senha: VARCHAR(255) [not null]
  }

  class cadastro_empresa {
    empresa_id: SERIAL [pk, increment]
    fk_usuario_id: INTEGER
    photoCard: VARCHAR(255) [not null]
    title: VARCHAR(100) [unique, not null]
    descriptions: VARCHAR(255) [not null]
    localityRoad: VARCHAR(100) [not null]
    localityDistrict: VARCHAR(60) [not null]
    localityState: VARCHAR(60) [not null]
    dias_funcionamento: dias [not null]
    horario_inicio: TIME [not null]
    horario_termino: TIME [not null]
    telefone: VARCHAR(15) [not null]
    site_da_empresa: VARCHAR(100)
    social_instagram: VARCHAR(100)
    social_linkedin: VARCHAR(100)
    social_facebook: VARCHAR(100)
    social_twitter: VARCHAR(100)
  }

  class FAQ {
    faq_id: SERIAL [pk, increment]
    nome: VARCHAR(100) [not null]
    email: VARCHAR(100) [not null]
    descricao: VARCHAR(255) [not null]
  }

  class planos {
    plano_id: SERIAL [pk, increment]
    fk_usuario_id: INTEGER
    planos: tipo_de_plano [unique, not null]
  }

  cadastro "1" --o "1" cadastro_empresa: fk_usuario_id
  cadastro "1" --o "1" planos: fk_usuario_id

```

## Links Úteis

- Editor Online para PostgreSQL: [https://extendsclass.com/postgresql-online.html]
