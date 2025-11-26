// ========================================
// src/app/core/models/models.ts
// VERSÃO CORRIGIDA (SEM dataCadastro/dataAtualizacao)
// ========================================

import { UserRole, AuthProvider, FormaPagamento, StatusAgendamento, StatusOrdemServico, TipoServico } from './enums';

// ==================== USUARIO ====================
export interface Usuario {
  cdUsuario: number;
  nmUsuario: string;
  email: string;
  provider: AuthProvider;
  authProvider: AuthProvider; // Alias para provider (compatibilidade)
  roles: UserRole[];
  nuTelefone?: string;
  nuCPF?: string;
  ativo: boolean;
}

export interface UsuarioRequest {
  nmUsuario: string;
  email: string;
  password?: string;
  senha?: string; // Alias para password (compatibilidade)
  provider?: AuthProvider;
  authProvider?: AuthProvider; // Alias para provider (compatibilidade)
  roles: UserRole[];
  nuTelefone?: string;
  nuCPF?: string;
  providerId?: string;
  ativo?: boolean;
}

// ==================== AUTH ====================
export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  usuario: Usuario;
}

// ==================== CLIENTE ====================
export interface Cliente {
  cdCliente: number;
  nmCliente: string;
  nuCPF?: string;
  nuTelefone?: string;
  dsEndereco?: string;
  email?: string;
  ativo: boolean;
}

export interface ClienteRequest {
  nmCliente: string;
  nuCPF?: string;
  nuTelefone?: string;
  dsEndereco?: string;
  email?: string;
}

// ==================== VEICULO ====================
export interface Veiculo {
  cdVeiculo: number;
  cdCliente: number;
  cliente?: { cdCliente: number; nmCliente: string };
  nmCliente: string;
  placa: string;
  modelo: string;
  marca: string;
  ano: number;
  cor?: string;
}

export interface VeiculoRequest {
  cdCliente: number;
  placa: string;
  modelo: string;
  marca: string;
  ano: number;
  cor?: string;
}

// ========================================
// src/app/core/models/models-extended.ts
// VERSÃO CORRIGIDA (SEM dataCadastro)
// ========================================

// ==================== PRODUTO ====================
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
}

export interface ProdutoRequest {
  nmProduto: string;
  dsProduto?: string | null;
  categoria?: string | null;
  vlCusto: number;
  vlVenda: number;
  qtdEstoque: number;
  qtdMinimo: number;
}

// ==================== SERVICO ====================
export interface Servico {
  cdServico: number;
  nmServico: string;
  dsServico?: string;
  vlServico: number;
  tmpEstimado: number;
  ativo: boolean;
}

export interface ServicoRequest {
  nmServico: string;
  dsServico?: string;
  vlServico: number;
  tmpEstimado?: number;
}

// ==================== AGENDAMENTO ====================
export interface Agendamento {
  cdAgendamento: number;
  cdCliente: number;
  cliente?: { cdCliente: number; nmCliente: string };
  nmCliente: string;
  cdVeiculo: number;
  veiculo?: { cdVeiculo: number; placa: string; modelo: string };
  placa: string;
  cdMecanico: number;
  mecanico?: { cdUsuario: number; nmUsuario: string };
  nmMecanico: string;
  horario: string;
  dataAgendamento: string;
  dhAgendamento?: string;
  dsServico: string;
  status: StatusAgendamento;
  observacoes?: string;
}

export interface AgendamentoRequest {
  cdCliente: number;
  cdVeiculo: number;
  cdMecanico: number;
  horario?: string;
  dhAgendamento?: string;
  dataAgendamento?: string;
  dsServico: string;
  observacoes?: string;
  status?: StatusAgendamento;
}

// ==================== VENDA ====================
export interface Venda {
  cdVenda: number;
  cdCliente?: number;
  cliente?: { cdCliente: number; nmCliente: string };
  nmCliente: string;
  cdAtendente: number;
  atendente?: { cdUsuario: number; nmUsuario: string };
  nmAtendente: string;
  dataVenda: string;
  vlTotal: number;
  desconto: number;
  formaPagamento: FormaPagamento;
  itens?: ItemVenda[];
}

export interface VendaRequest {
  cdCliente?: number;
  cdAtendente: number;
  desconto?: number;
  formaPagamento: FormaPagamento;
  itens: ItemVendaRequest[];
}

// ==================== FATURAMENTO ====================
export interface Faturamento {
  cdFaturamento: number;
  cdVenda?: number;
  venda?: { cdVenda: number };
  cdOrdemServico?: number;
  ordemServico?: { cdOrdemServico: number };
  cdCliente?: number;
  cliente?: { cdCliente: number; nmCliente: string };
  dataVenda: string;
  dataFaturamento: string;
  vlTotal: number;
  formaPagamento: FormaPagamento;
  nomeCliente: string;
  tipoTransacao: string;
}