export interface Servico {
  cdServico: number;
  nmServico: string;
  dsServico?: string;
  vlServico: number;
  tmpEstimado: number;
  ativo: boolean;
  dataCadastro: string;
}

export interface ServicoRequest {
  nmServico: string;
  dsServico?: string;
  vlServico: number;
  tmpEstimado: number;
}