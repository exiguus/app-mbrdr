import Storage from './Storage.class';

/**
 * @description handle store state
 */
export default class Store {
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

    this.storage = new Storage({ item: this.settings.item });
    this.store = [];
  }

  push(value) {
    this.store = value;
    return this.store;
  }

  pull() {
    return this.store;
  }

  set store(value = {}) {
    return this.storage.push({
      ...this.storage.pull(),
      ...value,
    });
  }

  get store() {
    return this.storage.pull();
  }
}
