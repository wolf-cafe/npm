import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YipComponent } from './yip.component';

describe('YipComponent', () => {
  let component: YipComponent;
  let fixture: ComponentFixture<YipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
