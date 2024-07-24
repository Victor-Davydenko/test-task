import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StrengthMeterComponent } from '../strength-meter/strength-meter.component';
import { DANGER_STRENGTH_VALUE, REQUIRED_MIN_PASSWORD_LENGTH, STRENGTH_DICTIONARY } from '../../utils/constants';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [ReactiveFormsModule, StrengthMeterComponent],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent {
  form = new FormGroup({
    password: new FormControl('')
  });

  checkPasswordStrength() {
    let strength = 0;
    const letters = +/[a-zA-Z]+/.test(this.passwordToCheck);
    const numbers = +/[0-9]+/.test(this.passwordToCheck);
    const symbols = +/[^a-zA-Z0-9\s]/.test(this.passwordToCheck);

    if (this.isFieldDirty && this.passwordToCheck.length < REQUIRED_MIN_PASSWORD_LENGTH) {
      strength = DANGER_STRENGTH_VALUE;
    } else {
      strength = letters + numbers + symbols;
    }
    return strength;
  }

  get passwordToCheck() {
    return this.form.value.password!;
  }

  get isFieldDirty() {
    return this.form.controls.password.dirty;
  }

  get passwordStrength() {
    const strengthKey = this.checkPasswordStrength();
    return STRENGTH_DICTIONARY[strengthKey];
  }
}
