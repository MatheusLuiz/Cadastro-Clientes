create database sistema;

use sistema;


CREATE TABLE Usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(50) NOT NULL,
    login_usu VARCHAR(255) NOT NULL,
    senha_usu VARCHAR(255) NOT NULL, 
    sobrenome VARCHAR(100),
    email VARCHAR(100),
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    status CHAR(1) CHECK (status IN ('S', 'N')) 
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,                
    cpf VARCHAR(14) NOT NULL UNIQUE,
    sexo ENUM('masculino', 'feminino', 'outros') NOT NULL,
    status ENUM('ativo', 'inativo') NOT NULL
);



CREATE TABLE enderecos_cli (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    cep VARCHAR(10) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

CREATE TABLE tipos_telefone (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE contatos_cli (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    ddd VARCHAR(3) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    tipo_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,
    FOREIGN KEY (tipo_id) REFERENCES tipos_telefone(id) ON DELETE CASCADE
);

CREATE TABLE cargos (
    cargo_id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE usuarios_cargos (
    usuario_id INT NOT NULL,
    cargo_id INT NOT NULL,
    PRIMARY KEY (usuario_id, cargo_id),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id) ON DELETE CASCADE,
    FOREIGN KEY (cargo_id) REFERENCES cargos(cargo_id) ON DELETE CASCADE
);

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,          
    valor_venda DECIMAL(10, 2) NOT NULL,   
    categoria VARCHAR(100),
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('ativo', 'inativo') NOT NULL
);

CREATE TABLE estoque (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_estoque VARCHAR(255) NOT NULL,           
    usuario_id INT NOT NULL,                       
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id) ON DELETE CASCADE
);

CREATE TABLE movimentos_produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estoque_id INT NOT NULL,                       
    produto_id INT NOT NULL,                      
    tipo ENUM('entrada', 'saida') NOT NULL,       
    quantidade INT NOT NULL,                       
    data_movimento DATETIME DEFAULT CURRENT_TIMESTAMP, 
    observacao TEXT,                               
    FOREIGN KEY (estoque_id) REFERENCES estoque(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);


CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    usuario_id INT NOT NULL,
    data_venda DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id) ON DELETE CASCADE
);

CREATE TABLE itens_venda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    venda_id INT NOT NULL,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (venda_id) REFERENCES vendas(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);
