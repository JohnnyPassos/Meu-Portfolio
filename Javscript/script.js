class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, "Gerente");
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, "Desenvolvedor");
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    const divErro = document.getElementById("erro");
    divErro.textContent = mensagem;
}

document.getElementById("formFuncionario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores do formulário
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const linguagem = document.getElementById("linguagem").value;

    try {
        // Verifica se os campos obrigatórios estão preenchidos corretamente
        if (!nome || isNaN(idade) || idade <= 0) {
            throw new Error("Preencha todos os campos corretamente.");
        }

        let funcionario;
        // Cria instância do Gerente ou Desenvolvedor
        if (cargo === "Gerente") {
            if (!departamento) throw new Error("O campo Departamento é obrigatório para Gerentes.");
            funcionario = new Gerente(nome, idade, departamento);
        } else if (cargo === "Desenvolvedor") {
            if (!linguagem) throw new Error("O campo Linguagem é obrigatório para Desenvolvedores.");
            funcionario = new Desenvolvedor(nome, idade, linguagem);
        }

        // Monta as informações a serem exibidas
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            ${cargo === "Gerente" ? `<p>${funcionario.gerenciar()}</p>` : `<p>${funcionario.programar()}</p>`}
        `;

        // Limpa a seção de erro
        document.getElementById("erro").textContent = '';

    } catch (error) {
        exibirErro(error.message); // Exibe erro caso ocorra
    }
});

