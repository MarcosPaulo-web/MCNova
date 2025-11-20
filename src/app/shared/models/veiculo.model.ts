export interface Veiculo {
  cdVeiculo: number;
  cdCliente: number;
  nmCliente: string;
  placa: string;
  modelo: string;
  marca: string;
  ano: number;
  cor?: string;
  dataCadastro: string;
}

export interface VeiculoRequest {
  cdCliente: number;
  placa: string;
  modelo: string;
  marca: string;
  ano: number;
  cor?: string;
}