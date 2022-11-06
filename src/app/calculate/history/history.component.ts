import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

import { Calculation } from '../calculation.model';
import { CalculateService } from '../calculate.service';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns = ['date', 'result'];
  dataSource = new MatTableDataSource<Calculation>();
  private changedSubscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private calculateService: CalculateService) { }

  ngOnInit() {
    this.changedSubscription = this.calculateService.calculationsChanged.subscribe(
      (result: Calculation[]) => {
        this.dataSource.data = result;
      },
    );
    this.calculateService.fetchAvailableCalculations();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.changedSubscription.unsubscribe();
  }
}
