import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['../../../../app/navbar/navbar.component.scss', 'navbar.component.scss'],
  // templateUrl: './navbar.component.html',
  templateUrl: 'navbar.component.html',
  animations: [slideMobileNav]
})
export class NavbarComponent extends BaseComponent {
}
