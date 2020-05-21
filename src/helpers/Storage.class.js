/**
 * @description handle storage
 */

export default class Storage {
  constructor(options) {
    const defaults = {
      item: {
        name: '_mbrdr',
      },
    };

    this.settings = {
      ...defaults,
      ...options,
    };

    this.getItem = (name) => JSON.parse(window.localStorage.getItem(name));
    this.setItem = (name, value) => window.localStorage.setItem(name, JSON.stringify(value));
    this.removeItem = (name) => window.localStorage.removeItem(name);
  }

  pull() {
    return this.item;
  }

  push(value) {
    this.item = value;
  }

  get item() {
    return this.getItem(this.settings.item.name);
  }

  set item(value) {
    return this.setItem(this.settings.item.name, value);
  }
}
