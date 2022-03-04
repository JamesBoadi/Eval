export default class Cache<T>
{
  cache = new Array();

  add(key: number, item: T)
  {
    this.cache[key] = item;
  }

  get(key: number): T
  {
    return this.cache[key];
  }

  containsKey(key: number)
  {
    return (this.cache[key] ?? false);
  }

  remove()
  {
    this.cache.pop();
  }

  update(key: number, item: T)
  {
    this.cache[key] = item;
  }

}
