import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Meta } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private collectionName = 'metas';

  constructor(private firestore: AngularFirestore) { }

  // GET
  getMetas(): Observable<Meta[]> {
    return this.firestore.collection<Meta>(this.collectionName).valueChanges({ idField: 'id' });
  }

  // POST
  addMeta(meta: Meta): Promise<any> {
    return this.firestore.collection(this.collectionName).add(meta);
  }

  // DELETE
  deleteMeta(id: string): Promise<any> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }
}
