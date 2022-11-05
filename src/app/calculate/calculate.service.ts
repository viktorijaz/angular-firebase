import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from "@angular/core";
import { Subject, map, Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Calculation } from "./calculation.model";

@Injectable()
export class CalculateService {
    private availableCalculations: Calculation[] = [];

    private currentCalculation: Calculation;
    calculationsChanged = new Subject<Calculation[]>();

    constructor(private db: AngularFirestore, private http: HttpClient) { }

    getAvailableCalculations() {
        return this.availableCalculations.slice();
    }

    loadFibonacci(fib: number): Observable<number> {
        return this.http.get<number>(`https://us-central1-ng-syncvr.cloudfunctions.net/calculation/${fib}`);
    }

    fetchAvailableCalculations() {
        this.db.collection('availableCalculations').snapshotChanges().pipe(map(docArray => {
            return docArray.map((doc: any) => {
                return {
                    id: doc.payload.doc.id,
                    ...doc.payload.doc.data()
                };
            })
        })).subscribe(calculations => {
            this.availableCalculations = calculations;
            this.calculationsChanged.next([...this.availableCalculations]);
        });

    }
    getCompletedOrCancelledExercises(): Calculation[] {
        return this.availableCalculations.slice();
    }

    private addDataToDatabase(calculation: Calculation) {
        this.db.collection('availableCalculations').add(calculation);
    }
}
