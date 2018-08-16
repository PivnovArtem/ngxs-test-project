import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {BooksState, BooksStateModel} from '../../store/state';
import {Observable} from 'rxjs';
import {AddBook, DeleteBook} from '../../store/actions';
import {Confirm} from './confirm.decorator';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})

export class BookListComponent implements OnInit {
  @Select(BooksState.getBooks) public books$: Observable<BooksStateModel>;
  constructor(private store: Store) {
  }

  public ngOnInit(): void { }

  @Confirm()
  public addBook(name: string) {
    this.store.dispatch(new AddBook(name));
  }

  @Confirm()
  public deleteBook(id: number) {
    this.store.dispatch(new DeleteBook(id));
  }
}

