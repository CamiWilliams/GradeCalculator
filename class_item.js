function ClassItem(class_name, class_categories, class_percentages) {
  this.class_name = class_name;
  this.class_categories = class_categories;
  this.class_percentages = class_percentages;
}

ClassItem.prototype.getClassName = function() {
  return class_name;
}

ClassItem.prototype.getClassCategories = function() {
    return class_categories;
}

ClassItem.prototype.getClassPercentages = function() {
  return class_percentages;
}

ClassItem.prototype.setClassName = function(class_name) {
  this.class_name = class_name;
}

ClassItem.prototype.setClassCategories = function(class_categories) {
  this.class_categories = class_categories;
}

ClassItem.prototype.setClassPercentages = function(class_percentages) {
  this.class_percentages = class_percentages;
}
