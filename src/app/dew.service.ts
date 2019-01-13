import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Dew } from './dew';

@Injectable({
  providedIn: 'root'
})
export class DewService {
  dewCollection: AngularFirestoreCollection<Dew>;
  dewRef$: Observable<Dew[]>;

  constructor(private afs: AngularFirestore) {
    this.dewCollection = this.afs.collection<Dew>('dews');
    this.dewRef$ = this.dewCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Dew;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

  getDewList() : Observable<Dew[]>{
    return this.dewRef$;
  }

  addDew(dew) : void {
    this.dewCollection.add(dew);
  }

  updateDew(dew: Dew) : void {
    this.dewCollection.doc(dew.id).update(dew);
  }

  deleteDew(dew: Dew) : void {
    this.dewCollection.doc(dew.id).delete();
  }

  async removeAllDews() {
      const dews = await this.dewCollection.ref.get();
      dews.forEach(dew => {
        this.dewCollection.doc(dew.id).delete();
      });
    }
}
