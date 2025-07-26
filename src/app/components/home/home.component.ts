import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showFallbackAvatar: boolean = false;

  downloadCV(): void {
    // Create a sample CV download - you can replace this with actual CV file
    const link = document.createElement('a');
    link.href = 'assets/cv/CV_'; // You'll need to add your actual CV file here
    link.download = 'CV_PHAMDUYLUAN_FE.pdf';
    link.click();
  }

  onImageError(event: Event): void {
    this.showFallbackAvatar = true;
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
  }
}
