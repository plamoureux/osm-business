System.register(['skyy/web-components/entity-form', 'skyy/web-components', './business', './business-form/title'], function (_export) {
  'use strict';

  var EntityForm, header, field, entityType, component, panel, sideBySide, Business, FormTitle, BusinessForm;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsEntityForm) {
      EntityForm = _skyyWebComponentsEntityForm.EntityForm;
      header = _skyyWebComponentsEntityForm.header;
      field = _skyyWebComponentsEntityForm.field;
    }, function (_skyyWebComponents) {
      entityType = _skyyWebComponents.entityType;
      component = _skyyWebComponents.component;
      panel = _skyyWebComponents.panel;
      sideBySide = _skyyWebComponents.sideBySide;
    }, function (_business) {
      Business = _business.Business;
    }, function (_businessFormTitle) {
      FormTitle = _businessFormTitle.Title;
    }],
    execute: function () {
      BusinessForm = (function (_EntityForm) {
        function BusinessForm() {
          _classCallCheck(this, _BusinessForm);

          _get(Object.getPrototypeOf(_BusinessForm.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BusinessForm, _EntityForm);

        var _BusinessForm = BusinessForm;
        BusinessForm = field('subscription.pricing')(BusinessForm) || BusinessForm;
        BusinessForm = panel('$subscription', { title: 'Abonnement' })(BusinessForm) || BusinessForm;
        BusinessForm = field('phoneNumber')(BusinessForm) || BusinessForm;
        BusinessForm = field('language')(BusinessForm) || BusinessForm;
        BusinessForm = field('shortName')(BusinessForm) || BusinessForm;
        BusinessForm = sideBySide()(BusinessForm) || BusinessForm;
        BusinessForm = field('name')(BusinessForm) || BusinessForm;
        BusinessForm = panel('$info')(BusinessForm) || BusinessForm;
        BusinessForm = header({ title: { 'new': 'Nouvelle entreprise', existing: 'name' } })(BusinessForm) || BusinessForm;
        BusinessForm = entityType(Business)(BusinessForm) || BusinessForm;
        return BusinessForm;
      })(EntityForm);

      _export('BusinessForm', BusinessForm);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dHQTRCYSxZQUFZOzs7Ozs7Ozs7O2dEQTVCakIsVUFBVTs0Q0FBRSxNQUFNOzJDQUFFLEtBQUs7O3NDQUN6QixVQUFVO3FDQUFFLFNBQVM7aUNBQUUsS0FBSztzQ0FBRSxVQUFVOzsyQkFFeEMsUUFBUTs7cUNBR1IsS0FBSzs7O0FBc0JBLGtCQUFZO2lCQUFaLFlBQVk7Ozs7OztrQkFBWixZQUFZOzs0QkFBWixZQUFZO0FBQVosb0JBQVksR0FQeEIsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBT2pCLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FSeEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQVFqQyxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBVHhCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FTUixZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBVnhCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FVTCxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBWHhCLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FXTixZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBWnhCLFVBQVUsRUFBRSxDQVlBLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FkeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQWNELFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FmeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQWVGLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FuQnhCLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLE9BQUsscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxFQUFDLENBQUMsQ0FtQm5ELFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FwQnhCLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FvQlIsWUFBWSxLQUFaLFlBQVk7ZUFBWixZQUFZO1NBQVMsVUFBVTs7OEJBQS9CLFlBQVkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5Rm9ybSwgaGVhZGVyLCBmaWVsZH0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cy9lbnRpdHktZm9ybSc7XHJcbmltcG9ydCB7ZW50aXR5VHlwZSwgY29tcG9uZW50LCBwYW5lbCwgc2lkZUJ5U2lkZX0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQge0J1c2luZXNzfSBmcm9tICcuL2J1c2luZXNzJztcclxuLy9pbXBvcnQge0FkZHJlc3NGb3JtfSBmcm9tICcuL2FkZHJlc3MtZm9ybSc7XHJcbi8vaW1wb3J0IHtDb250YWN0TGlzdH0gZnJvbSAnLi9jb250YWN0LWxpc3QnO1xyXG5pbXBvcnQge1RpdGxlIGFzIEZvcm1UaXRsZX0gZnJvbSAnLi9idXNpbmVzcy1mb3JtL3RpdGxlJztcclxuXHJcbkBlbnRpdHlUeXBlKEJ1c2luZXNzKVxyXG5AaGVhZGVyKHt0aXRsZToge25ldzogJ05vdXZlbGxlIGVudHJlcHJpc2UnLCBleGlzdGluZzogJ25hbWUnfX0pXHJcbi8vQGhlYWRlcih7dGl0bGU6IHt0eXBlOiBGb3JtVGl0bGV9fSlcclxuXHJcbi8vQHNpZGVCeVNpZGUoKVxyXG5AcGFuZWwoJyRpbmZvJylcclxuQGZpZWxkKCduYW1lJylcclxuXHJcbkBzaWRlQnlTaWRlKClcclxuQGZpZWxkKCdzaG9ydE5hbWUnKVxyXG5AZmllbGQoJ2xhbmd1YWdlJylcclxuQGZpZWxkKCdwaG9uZU51bWJlcicpXHJcbkBwYW5lbCgnJHN1YnNjcmlwdGlvbicsIHt0aXRsZTogJ0Fib25uZW1lbnQnfSlcclxuQGZpZWxkKCdzdWJzY3JpcHRpb24ucHJpY2luZycpXHJcbi8qXHJcbkBjb21wb25lbnQoJ2FkZHJlc3MnLCBBZGRyZXNzRm9ybSlcclxuQHBhbmVsKCckY29udGFjdHNQYW5lbCcsIHt0aXRsZTogJ0NvbnRhY3RzJ30pXHJcbkBjb21wb25lbnQoJ2NvbnRhY3RzJywgQ29udGFjdExpc3QpXHJcbiovXHJcbi8vQGNvbXBvbmVudCgnYWRkcmVzcycsIEFkZHJlc3NGb3JtKVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NGb3JtIGV4dGVuZHMgRW50aXR5Rm9ybSB7fSJdfQ==