export enum FormaPagamento {
  DINHEIRO = 'DINHEIRO',
  CARTAO_CREDITO = 'CARTAO_CREDITO',
  CARTAO_DEBITO = 'CARTAO_DEBITO',
  PIX = 'PIX'
}

export interface Venda {
  cdVenda: number;
  cdCliente: number;
  nmCliente: string;
  cdAtendente: number;
  nmAtendente: string;
  dataVenda: string;
  vlTotal: number;
  desconto: number;
  formaPagamento: FormaPagamento;
  dataCadastro: string;
}

export interface ItemVenda {
  cdProduto: number;
  quantidade: number;
}

export interface VendaRequest {
  cdCliente: number;
  cdAtendente: number;
  desconto?: number;
  formaPagamento: FormaPagamento;
  itens: ItemVenda[];
}

export interface Faturamento {
  cdFaturamento: number;
  cdVenda?: number;
  cdOrdemServico?: number;
  dataVenda: string;
  vlTotal: number;
  formaPagamento: FormaPagamento;
  nomeCliente: string;
  tipoTransacao: string;
}