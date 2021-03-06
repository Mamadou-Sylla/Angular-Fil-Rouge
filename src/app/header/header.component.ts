import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private Authlogout: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }

  // tslint:disable-next-line:typedef
  logout(){
    this.Authlogout.logout();
  }
}
