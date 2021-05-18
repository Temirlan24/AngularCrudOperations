import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  public books: Book = new Book();

  constructor(
    public db: AngularFirestore,
    public dialog: MatDialogRef<AddItemComponent>
  ) {}

  ngOnInit(): void {}

  addBook() {
    this.db.collection('books').add({
      name: this.books.name,
      author: this.books.author,
      price: this.books.price,
    });
    this.dialog.close();
  }
  close() {
    this.dialog.close();
  }
}
