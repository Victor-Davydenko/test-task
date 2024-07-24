import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-strength-meter',
  standalone: true,
  imports: [],
  templateUrl: './strength-meter.component.html',
  styleUrl: './strength-meter.component.css'
})
export class StrengthMeterComponent {
  passwordStrength = input.required<string>();
  classNames = computed(() => `strength_meter ${this.passwordStrength()}`);
}
