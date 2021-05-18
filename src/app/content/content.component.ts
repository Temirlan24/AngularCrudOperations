import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AddItemComponent } from '../add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../shared/book';
import { EditListingComponent } from '../edit-listing/edit-listing.component';
import { CrudService } from '../crud.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  books: Observable<any>;
  constructor(
    public db: AngularFirestore,
    public dialog: MatDialog,
    public crud: CrudService
  ) {
    this.books = db
      .collection<any>('books')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
  ngOnInit(): void {}

  addBook() {
    this.dialog.open(AddItemComponent);
  }
  editBook(book: any) {
    const dialogRef = this.dialog.open(EditListingComponent, {
      data: book,
    });
    return dialogRef.afterClosed();
  }
  deleteBook(bookId: string) {
    this.db.collection('books').doc(bookId).delete();
  }
}
