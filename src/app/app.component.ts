import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MagicXPAModule } from './magic.module';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MagicXPAModule],
    templateUrl: './app.component.html',
    standalone: true
})
export class AppComponent {
  title = 'Modernize Angular Admin Tempplate';
}
