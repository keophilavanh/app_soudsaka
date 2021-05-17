import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InviceBillPage } from './invice-bill.page';

describe('InviceBillPage', () => {
  let component: InviceBillPage;
  let fixture: ComponentFixture<InviceBillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviceBillPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InviceBillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
