export default class List<T>
{
  list = new Array();

  add<T>(item: T)
  {
    this.list[0] = item;
  }

  get(): T
  {
    return this.list[0];
  }

  remove()
  {
    this.list.pop();
  }

  update<T>(item: T)
  {
    this.list[0] = item;
  }

}
