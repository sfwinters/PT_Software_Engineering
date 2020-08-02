import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintxtComponent } from './maintxt.component';

describe('MaintxtComponent', () => {
  let component: MaintxtComponent;
  let fixture: ComponentFixture<MaintxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
