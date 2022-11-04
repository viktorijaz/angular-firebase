import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from "@angular/core";
import { tap, map } from 'rxjs'
import { Subject } from 'rxjs';
import { Calculation } from "./calculation.model";

@Injectable()
export class CalculateService {
    private availableCalculations: Calculation[] = [];

    private currentCalculation: Calculation;
    calculationsChanged = new Subject<Calculation[]>();

    constructor(private db: AngularFirestore) { }

    getAvailableCalculations() {
        return this.availableCalculations.slice();
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
