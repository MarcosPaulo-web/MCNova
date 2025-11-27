// src/app/core/services/ordem-servico.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OrdemServico, OrdemServicoRequest, StatusOrdemServico } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/ordens-servico`;
  
  // Criar nova ordem de servico
  criar(data: OrdemServicoRequest): Observable<OrdemServico> {
    return this.http.post<OrdemServico>(this.apiUrl, data);
  }
  
  // Buscar por ID
  buscarPorId(id: number): Observable<OrdemServico> {
    return this.http.get<OrdemServico>(`${this.apiUrl}/${id}`);
  }
  
  // Listar por status
  listarPorStatus(status: StatusOrdemServico): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${this.apiUrl}/status/${status}`);
  }
  
  // Listar orcamentos pendentes
  listarOrcamentosPendentes(): Observable<OrdemServico[]> {
    return this.http.get<OrdemServico[]>(`${this.apiUrl}/orcamentos/pendentes`);
  }
  
  // Aprovar orcamento com data de agendamento
  aprovarOrcamento(id: number, dataAgendamento?: string): Observable<OrdemServico> {
    return this.http.patch<OrdemServico>(`${this.apiUrl}/${id}/aprovar-orcamento`, { dataAgendamento });
  }
  
  // ✅ NOVO: Atualizar ordem de servico
  atualizar(id: number, data: OrdemServicoRequest): Observable<OrdemServico> {
    return this.http.put<OrdemServico>(`${this.apiUrl}/${id}`, data);
  }
  
  // ✅ NOVO: Alterar status diretamente
  alterarStatus(id: number, novoStatus: StatusOrdemServico): Observable<OrdemServico> {
    return this.http.patch<OrdemServico>(`${this.apiUrl}/${id}/alterar-status`, { 
      novoStatus: novoStatus 
    });
  }
  
  // ✅ NOVO: Iniciar ordem de servico
  iniciar(id: number): Observable<OrdemServico> {
    return this.http.patch<OrdemServico>(`${this.apiUrl}/${id}/iniciar`, {});
  }
  
  // Concluir ordem de servico
  concluir(id: number, formaPagamento: string): Observable<OrdemServico> {
    return this.http.patch<OrdemServico>(`${this.apiUrl}/${id}/concluir`, { formaPagamento });
  }
  
  // Cancelar ordem de servico
  cancelar(id: number): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${id}/cancelar`, {});
  }
}