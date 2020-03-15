import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Item } from '../models/item.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends Firestore<Item>{

  constructor(
    private authService : AuthService,
    db : AngularFirestore) {

    super(db);
    this.init();
  }

  private init(): void{
    this.authService.authState$.subscribe(user => {
      if (user) {
        this.setCollection(`/users/${user.uid}/items`);
        return;
      }
      this.setCollection(null);
    });
  }
}
