import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardListComponent } from './snowboard-list.component';

describe('SnowboardListComponent', () => {
  let component: SnowboardListComponent;
  let fixture: ComponentFixture<SnowboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
