import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatable.NetComponent } from './datatable.net.component';

describe('Datatable.NetComponent', () => {
  let component: Datatable.NetComponent;
  let fixture: ComponentFixture<Datatable.NetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datatable.NetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datatable.NetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
