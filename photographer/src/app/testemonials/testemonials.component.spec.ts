import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemonialsComponent } from './testemonials.component';

describe('TestemonialsComponent', () => {
  let component: TestemonialsComponent;
  let fixture: ComponentFixture<TestemonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestemonialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestemonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
