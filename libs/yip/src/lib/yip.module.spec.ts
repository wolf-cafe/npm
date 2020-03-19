import { async, TestBed } from '@angular/core/testing';
import { YipModule } from './yip.module';

describe('YipModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [YipModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(YipModule).toBeDefined();
  });
});
