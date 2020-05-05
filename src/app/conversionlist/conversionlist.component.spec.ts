import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionlistComponent } from './conversionlist.component';

describe('ConversionlistComponent', () => {
  let component: ConversionlistComponent;
  let fixture: ComponentFixture<ConversionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
