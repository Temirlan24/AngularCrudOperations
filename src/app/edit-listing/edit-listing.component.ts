import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from '../shared/book';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
})
export class EditListingComponent implements OnInit {
  // @Input() editId: string;

  public books: Book = new Book();
  constructor(
    @Optional() public dialog: MatDialogRef<EditListingComponent>,
    public db: AngularFirestore,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {}

  close(): void {
    this.dialog.close();
  }
  changeContent() {
    this.db.collection('books').doc(this.data.id).update({
      name: this.data.name,
      author: this.data.author,
      price: this.data.price,
    });
    this.dialog.close();
  }
}
