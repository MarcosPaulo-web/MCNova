import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  protected form!: FormGroup;
  protected submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //faz as validações no submit
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    alert('Login realizado com sucesso!');
    this.router.navigate(['/home']);
  }
  //valida os campos
  isInvalid(campo: string): boolean {
    const control = this.form.get(campo);
    return (control?.invalid && this.submitted) ?? false;
  }
}
