import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  showPassword = signal(false);
  
  constructor() {
    // Verifica se já está autenticado
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }
    
    this.isLoading.set(true);
    this.errorMessage.set(null);
    
    const credentials = {
      email: this.loginForm.value.email,
      senha: this.loginForm.value.password
    };
    
    console.log('🔐 Tentando fazer login com:', credentials.email);
    
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('✅ Login bem-sucedido:', response);
        console.log('🔑 Token:', response.accessToken);
        console.log('👤 Usuário:', response.usuario);
        
        this.isLoading.set(false);
        // AuthService já redireciona para dashboard
      },
      error: (error) => {
        console.error('❌ Erro no login:', error);
        this.isLoading.set(false);
        this.errorMessage.set(
          error.message || 'Email ou senha incorretos. Tente novamente.'
        );
      }
    });
  }
  
  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }
  
  togglePasswordVisibility(): void {
    this.showPassword.set(!this.showPassword());
  }
  
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  
  getFieldError(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    
    if (field?.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    
    if (field?.hasError('email')) {
      return 'Email inválido';
    }
    
    if (field?.hasError('minlength')) {
      return 'Mínimo de 3 caracteres';
    }
    
    return '';
  }
  
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
}