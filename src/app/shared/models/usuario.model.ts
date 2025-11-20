export enum AuthProvider {
  LOCAL = 'LOCAL',
  GOOGLE = 'GOOGLE'
}

export enum UserRole {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_ATENDENTE = 'ROLE_ATENDENTE',
  ROLE_MECANICO = 'ROLE_MECANICO'
}

export interface Usuario {
  cdUsuario: number;
  nmUsuario: string;
  email: string;
  provider: AuthProvider;
  roles: UserRole[];
  nuTelefone?: string;
  nuCPF?: string;
  ativo: boolean;
  dataCadastro: string;
  dataAtualizacao?: string;
}

export interface UsuarioRequest {
  nmUsuario: string;
  email: string;
  password?: string;
  provider: AuthProvider;
  roles: UserRole[];
  nuTelefone?: string;
  nuCPF?: string;
  providerId?: string;
  ativo: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  usuario: Usuario;
}