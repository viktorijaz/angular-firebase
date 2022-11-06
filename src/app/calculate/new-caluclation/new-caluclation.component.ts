import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalculateService } from '../calculate.service';
import { Calculation } from '../calculation.model';

@Component({
  selector: 'app-new-caluclation',
  templateUrl: './new-caluclation.component.html',
  styleUrls: ['./new-caluclation.component.css'],
})
export class NewCaluclationComponent implements OnInit {
  calculateForm: FormGroup;
  calculations: Calculation[];
  calculationSubscription: Subscription;
  result: number;
  loading: boolean;
  constructor(
    private calculateService: CalculateService,
    private db: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.calculationSubscription = this.calculateService.calculationsChanged.subscribe(
      (result) => (this.calculations = result),
    );
    this.calculateService.fetchAvailableCalculations();

    this.calculateForm = new FormGroup({
      fibonacci: new FormControl('', {
        validators: [Validators.required, Validators.min(0)],
      }),
    });
  }

  onSubmit() {
    this.loading = true;
    this.calculateService
      .loadFibonacci(this.calculateForm.value.fibonacci)
      .subscribe((res) => {
        this.result = res;
        this.loading = false;
        console.log(res);
      });
  }
}
