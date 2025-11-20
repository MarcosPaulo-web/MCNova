export interface Cliente {
  cdCliente: number;
  nmCliente: string;
  nuCPF?: string;
  nuTelefone?: string;
  dsEndereco?: string;
  email?: string;
  ativo: boolean;
  dataCadastro: string;
}

export interface ClienteRequest {
  nmCliente: string;
  nuCPF?: string;
  nuTelefone?: string;
  dsEndereco?: string;
  email?: string;
}