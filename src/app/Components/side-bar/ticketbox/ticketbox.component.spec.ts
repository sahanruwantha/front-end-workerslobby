import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketboxComponent } from './ticketbox.component';

describe('TicketboxComponent', () => {
  let component: TicketboxComponent;
  let fixture: ComponentFixture<TicketboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
