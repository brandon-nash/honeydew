import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewListComponent } from './dew-list.component';

describe('DewListComponent', () => {
  let component: DewListComponent;
  let fixture: ComponentFixture<DewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
