import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePeriodChartDoughnut2DComponent } from './notice-period-chart-doughnut-2-d.component';

describe('NoticePeriodChartDoughnut2DComponent', () => {
  let component: NoticePeriodChartDoughnut2DComponent;
  let fixture: ComponentFixture<NoticePeriodChartDoughnut2DComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticePeriodChartDoughnut2DComponent]
    });
    fixture = TestBed.createComponent(NoticePeriodChartDoughnut2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
