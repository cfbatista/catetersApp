import { AngularFirestore, AngularFirestoreCollection, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export abstract class Firestore<T extends {id:string}> {

    protected collection: AngularFirestoreCollection<T>;

    constructor(protected db: AngularFirestore){

    }

    protected setCollection(path : string, queryFn?: QueryFn): void{
        this.collection = path ? this.db.collection(path, queryFn) : null;
    }
    // T = objeto generico para paciente
    private setItem(paciente : T, operation: string) : Promise<T>{
        return this.collection
            .doc<T>(paciente.id)
            [operation](paciente)
            .then(() => paciente);
    }

    getAll(): Observable<T[]>{
        return this.collection.valueChanges();
    }

    create(paciente: T) : Promise<T>{
        paciente.id = this.db.createId();
        return this.setItem(paciente, 'set');
    }

    update(paciente : T) : Promise<T>{
        return this.setItem(paciente, 'update');
    }

    delete(paciente : T) : Promise<void>{
        return this.collection.doc<T>(paciente.id).delete();
    }

    getById(id : string) : Observable<T>{
        return this.collection.doc<T>(id).valueChanges();
    }
}