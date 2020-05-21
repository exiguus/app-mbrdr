import Canvas from './Canvas.class';

const canvas = new Canvas();

export default function CanvasMixin(propertyName) {
  return {
    data() {
      return {
        // Initialize
        [propertyName]: {
          count: canvas.count,
          items: canvas.items,
          color: canvas.color,
        },
      };
    },
    created() {
      const sync = () => {
        this[propertyName] = {
          ...this[propertyName],
          ...canvas.init(),
        };
      };

      this[propertyName] = {
        ...canvas.init(),
        add: (name = 'Name') => {
          canvas.add(name);
          sync();
        },
        remove: () => {
          canvas.remove();
          sync();
        },
        restore: () => {
          canvas.restore();
          sync();
        },
        update: () => {
          canvas.update(this[propertyName].items);
          sync();
        },
      };
    },
  };
}
