import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIntakePageComponent } from './product-intake-page.component';

describe('ProductIntakePageComponent', () => {
  let component: ProductIntakePageComponent;
  let fixture: ComponentFixture<ProductIntakePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIntakePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIntakePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
