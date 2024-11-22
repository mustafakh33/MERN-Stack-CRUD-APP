import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsstudentComponent } from './detailsstudent.component';

describe('DetailsstudentComponent', () => {
  let component: DetailsstudentComponent;
  let fixture: ComponentFixture<DetailsstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsstudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
