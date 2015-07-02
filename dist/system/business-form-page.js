System.register(['skyy/web-components/pages', './business-form'], function (_export) {
  'use strict';

  var EntityFormPage, route, form, BusinessForm, BusinessFormPage;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsPages) {
      EntityFormPage = _skyyWebComponentsPages.EntityFormPage;
      route = _skyyWebComponentsPages.route;
      form = _skyyWebComponentsPages.form;
    }, function (_businessForm) {
      BusinessForm = _businessForm.BusinessForm;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lEQU1hLGdCQUFnQjs7Ozs7Ozs7OzsrQ0FOckIsY0FBYztzQ0FBRSxLQUFLO3FDQUFFLElBQUk7O21DQUUzQixZQUFZOzs7QUFJUCxzQkFBZ0I7aUJBQWhCLGdCQUFnQjs7Ozs7O2tCQUFoQixnQkFBZ0I7O2dDQUFoQixnQkFBZ0I7QUFBaEIsd0JBQWdCLEdBRDVCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDTixnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUY1QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FFWCxnQkFBZ0IsS0FBaEIsZ0JBQWdCO2VBQWhCLGdCQUFnQjtTQUFTLGNBQWM7O2tDQUF2QyxnQkFBZ0IiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5Rm9ybVBhZ2UsIHJvdXRlLCBmb3JtfSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL3BhZ2VzJztcclxuXHJcbmltcG9ydCB7QnVzaW5lc3NGb3JtfSBmcm9tICcuL2J1c2luZXNzLWZvcm0nO1xyXG5cclxuQHJvdXRlKCdidXNpbmVzc2VzLzppZCcpXHJcbkBmb3JtKEJ1c2luZXNzRm9ybSlcclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzRm9ybVBhZ2UgZXh0ZW5kcyBFbnRpdHlGb3JtUGFnZSB7fSJdfQ==