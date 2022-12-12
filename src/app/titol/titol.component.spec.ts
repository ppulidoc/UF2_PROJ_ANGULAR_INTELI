import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitolComponent } from './titol.component';

describe('TitolComponent', () => {
  let component: TitolComponent;
  let fixture: ComponentFixture<TitolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
