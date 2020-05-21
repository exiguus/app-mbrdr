import Store from './Store.class';

import DATA from '../data.json';

export default class Canvas {
  constructor(options) {
    this.store = new Store({
      item: {
        name: '_mbrdr_canvas',
      },
    });

    this.count = this.items.length;

    this.defaults = {
      create: {
        count: 24,
        color: '#ffffff',
      },
    };

    this.settings = {
      ...this.defaults,
      ...options,
    };
  }

  init() {
    return {
      count: this.items.length,
      items: this.items,
    };
  }

  create() {
    let cols = [];
    const rows = [];

    let r = 0;
    while (r < this.settings.create.count) {
      for (let l = 0; l < this.settings.create.count; l += 1) {
        cols.push(this.settings.create.color);
      }

      rows.push(cols);
      cols = [];
      r += 1;
    }
    return rows;
  }

  add(name) {
    const { items } = this;
    items.push({
      name,
      id: this.items.length,
      data: this.create(),
    });
    this.items = items;
    return this.init();
  }

  remove() {
    const { items } = this;
    items.pop();
    this.items = items;
    return this.init();
  }

  update(items) {
    this.items = items;
    return this.init();
  }

  restore() {
    this.items = DATA;
    return this.init();
  }

  set items(value = []) {
    return this.store.push({
      ...this.store.pull(),
      ...{
        items: value,
      },
    }).items;
  }

  get items() {
    return this.store.pull().items || this.store.push({
      ...this.store.pull(),
      ...{
        items: DATA,
      },
    }).items;
  }
}
