import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsercaoPage } from './insercao.page';

describe('InsercaoPage', () => {
  let component: InsercaoPage;
  let fixture: ComponentFixture<InsercaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsercaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsercaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
