import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaoPage } from './nao.page';

describe('NaoPage', () => {
  let component: NaoPage;
  let fixture: ComponentFixture<NaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
