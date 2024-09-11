const nomes = ["Jung-kook", "Alana Delarey", "Ye", "kim jong un", "Tulla", "Ygona"


export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.lenght);
  return lista[posicao];
