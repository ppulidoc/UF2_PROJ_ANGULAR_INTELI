import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssideLeftComponent } from './asside-left.component';

describe('AssideLeftComponent', () => {
  let component: AssideLeftComponent;
  let fixture: ComponentFixture<AssideLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssideLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
