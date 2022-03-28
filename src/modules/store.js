export default class Store {
  static getList() {
    let list = [];
    if (localStorage.getItem('task') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('task'));
    }
    return list;
  }

  static save() {
    localStorage.setItem('task', JSON.stringify(this.list));
  } 

  static add(task) {
    const list = Store.getList();
    list.push(task);
    Store.updateIndex();
    this.save();
  }

  static remove(index) {
    const list = Store.getList();
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].index === index) {
        list.splice(index - 1, 1);
      }
    }
    this.save();
  }

  static updateIndex() {
    const list = Store.getList();
    for (let j = 0; j < list.length; j += 1) {
      list[j].index = j + 1;
    }
    this.save();
  }

  static updateInput(value, task) {
    const list = Store.getList();
    list[task.index - 1].description = value;
    this.save();
  }

  static updateState(value, task) {
    const list = Store.getList();
    list[task.index - 1].state = value;this.save();
    this.save();
  }

  static updateStorage() {
    const list = Store.getList();
    Store.updateIndex();
    this.save();
  }

  static clearCompleted() {
    let list = Store.getList();
    list.forEach(() => {
      list = list.filter((task) => task.state !== true);
    });
    this.save();
    Store.updateIndex();
  }
}