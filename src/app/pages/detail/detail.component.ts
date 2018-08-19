import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PageTestService } from '../page-test.service';

@Component({
  selector: 'aa-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private _sub: Subscription;
  public settings: any;
  public type: string;
  public id: number;

  constructor(private router: Router, private route: ActivatedRoute, private pageService: PageTestService) {
  }

  ngOnInit() {
    // dit kan ook in een routeresolver
    this._sub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.id = params['id'];
      this.settings = this.pageService.getDetailSettings(this.type, this.id);
    });
  }
  
  formSubmit(event: any) {
    alert('form saved')
    this.router.navigate(['/components/pages/overview', this.type])
  }

  formCancel(event: any) {
    this.router.navigate(['/components/pages/overview', this.type])
  }
}
