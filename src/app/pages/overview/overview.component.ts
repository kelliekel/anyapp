import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageTestService } from '../page-test.service';

@Component({
  selector: 'aa-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  private _sub: Subscription;
  public settings: any;
  public type: string;

  constructor(private router: Router, private route: ActivatedRoute, private pageService: PageTestService) {
  }

  ngOnInit() {
    // dit kan ook in een routeresolver
    this._sub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.settings = this.pageService.getOverviewSettings(this.type);
    });
  }

  itemClick(event: any) {
    this.router.navigate(['/components/pages/detail', this.type, event.id])
  }
}
