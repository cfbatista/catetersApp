import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CvcPage } from './cvc.page';

describe('CvcPage', () => {
  let component: CvcPage;
  let fixture: ComponentFixture<CvcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CvcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
