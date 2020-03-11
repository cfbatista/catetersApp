import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndicacaoPage } from './indicacao.page';

describe('IndicacaoPage', () => {
  let component: IndicacaoPage;
  let fixture: ComponentFixture<IndicacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndicacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
