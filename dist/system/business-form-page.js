System.register(['skyy/web-components/pages/entity-form-page', 'skyy/web-components/pages/decorators', 'osm-business/business-form'], function (_export) {
  'use strict';

  var EntityFormPage, route, form, BusinessForm, BusinessFormPage;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsPagesEntityFormPage) {
      EntityFormPage = _skyyWebComponentsPagesEntityFormPage.EntityFormPage;
    }, function (_skyyWebComponentsPagesDecorators) {
      route = _skyyWebComponentsPagesDecorators.route;
      form = _skyyWebComponentsPagesDecorators.form;
    }, function (_osmBusinessBusinessForm) {
      BusinessForm = _osmBusinessBusinessForm.BusinessForm;
    }],
    execute: function () {
      BusinessFormPage = (function (_EntityFormPage) {
        function BusinessFormPage() {
          _classCallCheck(this, _BusinessFormPage);

          _get(Object.getPrototypeOf(_BusinessFormPage.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BusinessFormPage, _EntityFormPage);

        var _BusinessFormPage = BusinessFormPage;
        BusinessFormPage = form(BusinessForm)(BusinessFormPage) || BusinessFormPage;
        BusinessFormPage = route('businesses/:id')(BusinessFormPage) || BusinessFormPage;
        return BusinessFormPage;
      })(EntityFormPage);

      _export('BusinessFormPage', BusinessFormPage);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lEQUthLGdCQUFnQjs7Ozs7Ozs7Ozs2REFMckIsY0FBYzs7Z0RBQ2QsS0FBSzsrQ0FBRSxJQUFJOzs4Q0FDWCxZQUFZOzs7QUFHUCxzQkFBZ0I7aUJBQWhCLGdCQUFnQjs7Ozs7O2tCQUFoQixnQkFBZ0I7O2dDQUFoQixnQkFBZ0I7QUFBaEIsd0JBQWdCLEdBRDVCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDTixnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUY1QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FFWCxnQkFBZ0IsS0FBaEIsZ0JBQWdCO2VBQWhCLGdCQUFnQjtTQUFTLGNBQWM7O2tDQUF2QyxnQkFBZ0IiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5Rm9ybVBhZ2V9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvcGFnZXMvZW50aXR5LWZvcm0tcGFnZSc7XG5pbXBvcnQge3JvdXRlLCBmb3JtfSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL3BhZ2VzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtCdXNpbmVzc0Zvcm19IGZyb20gJ29zbS1idXNpbmVzcy9idXNpbmVzcy1mb3JtJztcbkByb3V0ZSgnYnVzaW5lc3Nlcy86aWQnKVxuQGZvcm0oQnVzaW5lc3NGb3JtKVxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzRm9ybVBhZ2UgZXh0ZW5kcyBFbnRpdHlGb3JtUGFnZSB7fSJdfQ==