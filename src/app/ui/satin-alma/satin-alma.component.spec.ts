import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatinAlmaComponent } from './satin-alma.component';

describe('SatinAlmaComponent', () => {
  let component: SatinAlmaComponent;
  let fixture: ComponentFixture<SatinAlmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatinAlmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatinAlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
