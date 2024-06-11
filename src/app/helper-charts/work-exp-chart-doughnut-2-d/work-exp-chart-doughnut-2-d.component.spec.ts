import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpChartDoughnut2DComponent } from './work-exp-chart-doughnut-2-d.component';

describe('WorkExpChartDoughnut2DComponent', () => {
  let component: WorkExpChartDoughnut2DComponent;
  let fixture: ComponentFixture<WorkExpChartDoughnut2DComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExpChartDoughnut2DComponent]
    });
    fixture = TestBed.createComponent(WorkExpChartDoughnut2DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
