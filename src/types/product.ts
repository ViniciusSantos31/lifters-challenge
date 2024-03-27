export interface Product {
  titulo: string;
  valor: string;
  descricao: string;
  categoria: string;
  cores: Cor[];
  tamanhos: string[];
  fotos: Foto[];
}

export interface Cor {
  nome: string;
  codigo: string;
}

export interface Foto {
  url: string;
  capa: boolean;
}
