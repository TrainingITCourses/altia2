import { Component, HostListener } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

type WomEvent = {
  preventDefault: any;
  prompt: () => void;
};

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular.Builders:Catalog';
  updateAvilable = false;
  promptEvent!: WomEvent;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeinstallprompt(event: WomEvent) {
    event.preventDefault();
    this.promptEvent = event;
  }

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe({
      next: () => (this.updateAvilable = true),
    });
  }

  reload() {
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }

  shouldInstall() {
    return (
      !window.matchMedia('(display-mode: standalone)').matches &&
      !!this.promptEvent
    );
  }

  installPWA() {
    this.promptEvent.prompt();
  }
}
