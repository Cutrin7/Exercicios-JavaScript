let numero = parseInt(prompt('Digite um número de 1 a 7: '))

switch (numero) {
    case 1:
        alert('Segunda')
        break;
    case 2:
        alert('Terça')
        break;
    case 3:
        alert('Quarta')
        break;
    case 4:
        alert('Quinta')
        break;
    case 5:
        alert('Sexta')
        break;
    case 6:
        alert('Sabado')
        break;
    case 7:
        alert('Domingo')
        break;

    default:
        alert('Dia invalido')
        break;
}