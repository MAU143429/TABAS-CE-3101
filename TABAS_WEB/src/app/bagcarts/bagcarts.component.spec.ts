import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagcartsComponent } from './bagcarts.component';

describe('BagcartsComponent', () => {
  let component: BagcartsComponent;
  let fixture: ComponentFixture<BagcartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagcartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagcartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
