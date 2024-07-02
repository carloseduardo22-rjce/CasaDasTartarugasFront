import { Component, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css']
})
export class HeaderComponent implements OnDestroy {
  sidebarActive = false;
  private globalClickListener: (() => void) | null = null;

  constructor(private renderer: Renderer2) { }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
    if (this.sidebarActive) {
      this.addGlobalClickListener();
    } else {
      this.removeGlobalClickListener();
    }
  }

  closeSidebar() {
    this.sidebarActive = false;
    this.removeGlobalClickListener();
  }

  addGlobalClickListener() {
    this.globalClickListener = this.renderer.listen('document', 'click', (event: Event) => {
      const targetElement = event.target as HTMLElement;
      if (targetElement && !targetElement.closest('.sidebar') && !targetElement.closest('.hamburguer')) {
        this.closeSidebar();
      }
    });
  }

  removeGlobalClickListener() {
    if (this.globalClickListener) {
      this.globalClickListener = null;
    }
  }

  ngOnDestroy() {
    this.removeGlobalClickListener();
  }

}