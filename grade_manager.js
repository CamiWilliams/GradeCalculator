function GradeManager(StorageManager) {
  this.storageManager = new StorageManager;
  this.setup();
}

GradeManager.prototype.setup = function () {
  var previousState = this.storageManager.getClassesState();
  if (previousState) {
    this.class_item_list = previousState.class_item_list;
    this.class_list_size = previousState.class_list_size;
  } else {
    this.class_item_list = NULL;
  }
}

GradeManager.prototype.getClassList = function() {
  return this.class_item_list;
}

GradeManager.prototype.addClassItem = function(classItem) {
  this.class_item_list[class_list_size] = classItem;
  this.class_item_list++;
}
