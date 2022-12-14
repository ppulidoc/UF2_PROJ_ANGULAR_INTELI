import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssidesComponent } from './assides.component';

describe('AssidesComponent', () => {
  let component: AssidesComponent;
  let fixture: ComponentFixture<AssidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
