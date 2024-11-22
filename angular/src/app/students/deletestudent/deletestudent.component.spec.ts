import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestudentComponent } from './deletestudent.component';

describe('DeletestudentComponent', () => {
  let component: DeletestudentComponent;
  let fixture: ComponentFixture<DeletestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletestudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
