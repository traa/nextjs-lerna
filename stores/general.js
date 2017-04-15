import { action, observable } from 'mobx';

let store = null;

class Store {
  @observable lastUpdate = 0;
  @observable userId = null;

  constructor (isServer, lastUpdate) {
    this.lastUpdate = lastUpdate;
  }

  @action start = () => {
    this.lastUpdate = Date.now();
  }
}

export function initStore (isServer, lastUpdate = Date.now()) {
  if (isServer && typeof window === 'undefined') {
    return new Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new Store(isServer, lastUpdate);
    }
    return store;
  }
}
