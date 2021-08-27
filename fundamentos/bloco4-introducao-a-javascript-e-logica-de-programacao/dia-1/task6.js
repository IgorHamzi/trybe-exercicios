const chessPiece = 'rei';

switch (chessPiece.toLowerCase()){
  case 'rainha':
    console.log('Move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;
  case 'rei':
    console.log('move-se em todas as direções. Somente uma casa de cada vez.');
    break;
  case 'cavalo':
    console.log('move-se duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;
  case 'bispo':
    console.log('move-se ao longo da diagonal. Não pode pular outras peças.');
    break;
  case 'torre':
    console.log('move-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;
  case 'peao':
    console.log('move-se apenas uma casa para frente, Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo');
    break;
  default:
    console.log('error');
    break;
}