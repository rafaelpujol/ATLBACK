import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppToastService {
  toasts: any[] = [];

  show(style: string, text: string): void {
    this.toasts.push({style, text });
  }

  showSuccess(text: string): void {
    this.show( 'bg-success text-light', text );
  }

  showError(text: string): void {
    this.show( 'bg-danger text-light',  text + '<i class="fas fa-times"></i> ');
  }

  showDanger(text: string): void {
    this.showError(text);
  }

  showWarnning(text: string): void {
    this.show( 'bg-warning text-light',  text + '<i class="fas fa-times"></i> ');
  }
  remove(toast: any): void {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
