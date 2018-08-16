export class AddBook {
  public static readonly type = '[BOOK] add';

  constructor(public payload: string) {
  }
}

export class DeleteBook {
  public static readonly type = '[TODO] delete';

  constructor(public payload: number) {
  }
}
