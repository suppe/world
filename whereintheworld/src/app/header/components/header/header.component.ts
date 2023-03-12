import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../../../shared/services/darkmode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme$: Observable<boolean>;

  constructor(private darkModeService: DarkmodeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.darkModeService.isDarkTheme;
  }

  toggleDarkTheme(): void {
    this.darkModeService.toggleDarkTheme();
  }
}
