import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportViewPage } from './report-view.page';

describe('ReportViewPage', () => {
  let component: ReportViewPage;
  let fixture: ComponentFixture<ReportViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
