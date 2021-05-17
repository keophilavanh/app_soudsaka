import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TableAddPage } from './table-add.page';

describe('TableAddPage', () => {
  let component: TableAddPage;
  let fixture: ComponentFixture<TableAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TableAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
