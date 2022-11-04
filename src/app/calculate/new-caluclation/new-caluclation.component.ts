import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../calculate.service';
import { Calculation } from '../calculation.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-new-caluclation',
  templateUrl: './new-caluclation.component.html',
  styleUrls: ['./new-caluclation.component.css']
})
export class NewCaluclationComponent implements OnInit {

  calculations: Calculation[];
  calculationSubscription: Subscription;
  constructor(private calculateService: CalculateService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.calculationSubscription = this.calculateService.calculationsChanged.subscribe(
      result => (this.calculations = result)
    );
    this.calculateService.fetchAvailableCalculations();

    //  this.calculations = this.calculateService.getAvailableCalculations();
  }
}
