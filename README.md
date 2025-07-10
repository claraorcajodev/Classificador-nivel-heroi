# Classificador de Nível de Herói

Este é um projeto sugerido pela DIO em JavaScript, criado para classificar o nível de um herói com base na sua quantidade de pontos de experiência (XP). O script determina o ranking do herói e exibe uma mensagem formatada no console.

## 🎯 Objetivo

O objetivo deste script é praticar a utilização de variáveis e estruturas de decisão (`switch`) para resolver um problema simples de classificação, exibindo uma saída de acordo com as regras estabelecidas.

## ⚙️ Funcionalidades

* Define o nome e a quantidade de XP de um herói diretamente no código.
* Utiliza uma estrutura `switch` para comparar a quantidade de XP com diferentes faixas de valores.
* Atribui um rank específico (Ferro, Bronze, Prata, etc.) com base na faixa de XP.
* Exibe no console uma mensagem final informando o nome do herói e seu nível alcançado.

## 📊 Tabela de Níveis

A classificação do herói é baseada na seguinte tabela de XP:

| Nível      | Faixa de XP                  |
| :--------- | :--------------------------- |
| Ferro      | Menor que 1.000              |
| Bronze     | Entre 1.001 e 2.000          |
| Prata      | Entre 2.001 e 5.000          |
| Ouro       | Entre 5.001 e 7.000          |
| Platina    | Entre 7.001 e 8.000          |
| Ascendente | Entre 8.001 e 9.000          |
| Imortal    | Entre 9.001 e 10.000         |
| Radiante   | Maior ou igual a 10.001      |

## 🚀 Como Usar

### Pré-requisitos

* Você precisa ter o [Node.js](https://nodejs.org/) instalado em seu computador para executar o arquivo JavaScript.

### Passos

1.  Salve o código do projeto em um arquivo chamado `index.js`.
2.  Abra seu terminal (CMD, PowerShell, Bash, etc.).
3.  Navegue até a pasta onde você salvou o arquivo.
4.  Execute o seguinte comando no terminal:
    ```bash
    node index.js
    ```
5.  A saída será exibida no terminal.

## ✏️ Como Modificar

Para testar com outros nomes ou valores de XP, basta alterar as duas primeiras linhas do código no arquivo `index.js`:

```javascript
let nome = "Aragorn"; // Altere o nome aqui
let XP = 8500;       // Altere a quantidade de XP aqui
