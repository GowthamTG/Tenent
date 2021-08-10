import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PassworMathValidator } from 'src/app/validators/passwordMatvh.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: PassworMathValidator.passwordMatchValidator(
        'password',
        'confirmPassword'
      ),
    }
  );
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {}
}
