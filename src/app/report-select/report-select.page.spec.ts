import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportSelectPage } from './report-select.page';

describe('ReportSelectPage', () => {
  let component: ReportSelectPage;
  let fixture: ComponentFixture<ReportSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
