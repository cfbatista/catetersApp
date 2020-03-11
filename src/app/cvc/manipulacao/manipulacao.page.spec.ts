import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManipulacaoPage } from './manipulacao.page';

describe('ManipulacaoPage', () => {
  let component: ManipulacaoPage;
  let fixture: ComponentFixture<ManipulacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManipulacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
