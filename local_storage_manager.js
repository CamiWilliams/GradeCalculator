window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.listOfClassesKey     = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Classes state getters/setters and clearing
LocalStorageManager.prototype.getClassesState = function () {
  var stateJSON = this.storage.getItem(this.listOfClassesKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setClassesState = function (classesState) {
  this.storage.setItem(this.listOfClassesKey, JSON.stringify(classesState));
};

LocalStorageManager.prototype.clearClassesState = function () {
  this.storage.removeItem(this.listOfClassesKey);
};
