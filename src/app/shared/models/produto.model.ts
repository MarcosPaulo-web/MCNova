export interface Produto {
  cdProduto: number;
  nmProduto: string;
  dsProduto?: string;
  categoria?: string;
  vlCusto: number;
  vlVenda: number;
  qtdEstoque: number;
  qtdMinimo: number;
  ativo: boolean;
  dataCadastro: string;
}

export interface ProdutoRequest {
  nmProduto: string;
  dsProduto?: string;
  categoria?: string;
  vlCusto: number;
  vlVenda: number;
  qtdEstoque: number;
  qtdMinimo: number;
}