import { State, Action, StateContext, Selector } from '@ngxs/store';
import {Book} from '../../core/models/book';
import {initialBooks} from '../../core/constans/initialBooks';
import {AddBook, DeleteBook} from '../actions';

export class BooksStateModel {
  public books: Book[];
}

@State<BooksStateModel>({
  name: 'books',
  defaults: {
    books: [
      ...initialBooks
    ]
  }
})

export class BooksState {
  @Selector()
  public static getBooks(state: BooksStateModel) {
    return state.books;
  }

  @Action(AddBook)
  public add({ getState, patchState }: StateContext<BooksStateModel>, { payload }: AddBook) {
    patchState({
      books: [...getState().books, {
        id: Math.round(Math.random() * 1000),
        name: payload,
        read: false
      }]
    });
  }

  @Action(DeleteBook)
  public delete({ getState, patchState }: StateContext<BooksStateModel>, { payload }: DeleteBook) {
    patchState({
      books: getState().books.filter((b) => b.id !== payload)
    });
  }
}

