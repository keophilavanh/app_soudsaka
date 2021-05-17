import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableManagePage } from './table-manage.page';

describe('TableManagePage', () => {
  let component: TableManagePage;
  let fixture: ComponentFixture<TableManagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableManagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableManagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
