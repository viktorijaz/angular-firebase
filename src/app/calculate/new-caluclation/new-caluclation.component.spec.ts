import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaluclationComponent } from './new-caluclation.component';

describe('NewCaluclationComponent', () => {
  let component: NewCaluclationComponent;
  let fixture: ComponentFixture<NewCaluclationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCaluclationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCaluclationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
