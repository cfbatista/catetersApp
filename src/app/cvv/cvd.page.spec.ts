import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvdPage } from './cvd.page';

describe('CvvPage', () => {
  let component: CvdPage;
  let fixture: ComponentFixture<CvdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
