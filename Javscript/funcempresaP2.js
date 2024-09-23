// Empresa com gerente e desenvolvedor 


class Funcionario {
      constructor(nome, idade, cargo) {
          this.nome = nome;
          this.idade = idade;
          this.cargo = cargo;
      }
  
    
      seApresentar() {
          console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
      }
  
      
      trabalhar() {
          console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
      }
  }
  
  
  class Gerente extends Funcionario {
      constructor(nome, idade, cargo, departamento) {
          super(nome, idade, cargo); 
          this.departamento = departamento;
      }
  
      
      gerenciar() {
          console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
      }
  }
  
  
  class Desenvolvedor extends Funcionario {
      constructor(nome, idade, cargo, linguagem) {
          super(nome, idade, cargo); // 
          this.linguagem = linguagem;
      }
  
      
      programar() {
          console.log(`${this.nome} está programando em ${this.linguagem}.`);
      }
  }
  

  const gerente = new Gerente("Rosana", 47, "Gerente", "Marketing e Vendas");
  

  const desenvolvedor = new Desenvolvedor("Marcelo", 36, "Desenvolvedor", "JavaScript");
  
  
  gerente.seApresentar();
  gerente.trabalhar();
  gerente.gerenciar();
  
  
  desenvolvedor.seApresentar();
  desenvolvedor.trabalhar();
  desenvolvedor.programar();
  










