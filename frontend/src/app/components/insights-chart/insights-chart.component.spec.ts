import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsChartComponent } from './insights-chart.component';

describe('InsightsChartComponent', () => {
  let component: InsightsChartComponent;
  let fixture: ComponentFixture<InsightsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
