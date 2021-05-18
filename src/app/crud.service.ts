import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from './shared/book';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private db: AngularFirestore) {}

  getBooks() {
    return this.db.collection('books').snapshotChanges();
  }
  createBook(book: Book) {
    return this.db.collection('book').add(book);
  }
  updateBook(book: Book) {
    delete book.id;
    this.db.doc('books/' + book.id).update(book);
  }
  deletePolicy(bookId: string) {
    this.db.doc('books/' + bookId).delete();
  }
}
