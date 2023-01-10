import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunComponent } from './urun.component';

describe('UrunComponent', () => {
  let component: UrunComponent;
  let fixture: ComponentFixture<UrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
