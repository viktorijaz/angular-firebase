import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Subject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Calculation } from './calculation.model';
import { apiEndpoint, collectionName } from '../constants';

@Injectable()
export class CalculateService {
  private availableCalculations: Calculation[] = [];
  calculationsChanged = new Subject<Calculation[]>();

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  getAvailableCalculations() {
    return this.availableCalculations.slice();
  }

  loadFibonacci(fib: number): Observable<number> {
    return this.http.get<number>(`${apiEndpoint}/${fib}`);
  }

  fetchAvailableCalculations() {
    this.db
      .collection(collectionName)
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc: any) => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        }),
      )
      .subscribe((calculations) => {
        this.availableCalculations = calculations;
        this.calculationsChanged.next([...this.availableCalculations]);
      });
  }
  getCompletedOrCancelledExercises(): Calculation[] {
    return this.availableCalculations.slice();
  }
}
