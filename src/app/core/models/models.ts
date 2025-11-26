// ========================================
// src/app/core/models/models.ts
// VERSÃO CORRIGIDA - Compatível com o Backend
// ========================================

import { UserRole, AuthProvider } from './enums';

// ==================== USUARIO ====================
export interface Usuario {
  cdUsuario: number;
  nmUsuario: string;
  email: string;
  provider: AuthProvider;
  roles: UserRole[];
  nuTelefone?: string;
  nuCPF?: string;
  ativo: boolean;
}

export interface UsuarioRequest {
  nmUsuario: string;
  email: string;
  password?: string;
  provider?: AuthProvider;
  authProvider?: AuthProvider; // Alias para compatibilidade
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