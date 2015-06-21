var app = angular.module('app', []);

app.directive('wrapIn', function ($templateCache) {
  return {
    transclude: 'element',
    link: function (scope, element, attrs, ctrl, transclude) {
      var template = $templateCache.get(attrs.wrapIn);
      var templateElement = angular.element(template);

      transclude(scope, function (clone) {
        element.after(templateElement.append(clone));
      });
    }
  };
});
