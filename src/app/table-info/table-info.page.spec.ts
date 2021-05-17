import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableInfoPage } from './table-info.page';

describe('TableInfoPage', () => {
  let component: TableInfoPage;
  let fixture: ComponentFixture<TableInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
