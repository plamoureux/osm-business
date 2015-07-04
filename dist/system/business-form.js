System.register(['skyy/web-components/entity-form/entity-form', 'skyy/web-components/decorators', 'osm-business/business', 'skyy/web-components/entity-form/decorators'], function (_export) {
  'use strict';

  var EntityForm, entityType, sideBySide, panel, Business, header, field, BusinessForm;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsEntityFormEntityForm) {
      EntityForm = _skyyWebComponentsEntityFormEntityForm.EntityForm;
    }, function (_skyyWebComponentsDecorators) {
      entityType = _skyyWebComponentsDecorators.entityType;
      sideBySide = _skyyWebComponentsDecorators.sideBySide;
      panel = _skyyWebComponentsDecorators.panel;
    }, function (_osmBusinessBusiness) {
      Business = _osmBusinessBusiness.Business;
    }, function (_skyyWebComponentsEntityFormDecorators) {
      header = _skyyWebComponentsEntityFormDecorators.header;
      field = _skyyWebComponentsEntityFormDecorators.field;
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
        BusinessForm = sideBySide()(BusinessForm) || BusinessForm;
        BusinessForm = header({ title: { 'new': 'Nouvelle entreprise', existing: 'name' } })(BusinessForm) || BusinessForm;
        BusinessForm = entityType(Business)(BusinessForm) || BusinessForm;
        return BusinessForm;
      })(EntityForm);

      _export('BusinessForm', BusinessForm);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBFQTZCYSxZQUFZOzs7Ozs7Ozs7OzBEQTdCakIsVUFBVTs7Z0RBQ1YsVUFBVTtnREFBRSxVQUFVOzJDQUFFLEtBQUs7O3NDQUM3QixRQUFROztzREFDUixNQUFNO3FEQUFFLEtBQUs7OztBQTBCUixrQkFBWTtpQkFBWixZQUFZOzs7Ozs7a0JBQVosWUFBWTs7NEJBQVosWUFBWTtBQUFaLG9CQUFZLEdBUHhCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQU9qQixZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBUnhCLEtBQUssQ0FBQyxlQUFlLEVBQUUsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FRakMsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQVR4QixLQUFLLENBQUMsYUFBYSxDQUFDLENBU1IsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQVZ4QixLQUFLLENBQUMsVUFBVSxDQUFDLENBVUwsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQVh4QixLQUFLLENBQUMsV0FBVyxDQUFDLENBV04sWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQVp4QixVQUFVLEVBQUUsQ0FZQSxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBZHhCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FjRCxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBZnhCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FlRixZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBaEJ4QixVQUFVLEVBQUUsQ0FnQkEsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQW5CeEIsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUMsT0FBSyxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLEVBQUMsQ0FBQyxDQW1CbkQsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQXBCeEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQW9CUixZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVk7U0FBUyxVQUFVOzs4QkFBL0IsWUFBWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHlGb3JtfSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2VudGl0eS1mb3JtL2VudGl0eS1mb3JtJztcbmltcG9ydCB7ZW50aXR5VHlwZSwgc2lkZUJ5U2lkZSwgcGFuZWx9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQge0J1c2luZXNzfSBmcm9tICdvc20tYnVzaW5lc3MvYnVzaW5lc3MnO1xuaW1wb3J0IHtoZWFkZXIsIGZpZWxkfSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2VudGl0eS1mb3JtL2RlY29yYXRvcnMnO1xuXG5cbi8vaW1wb3J0IHtBZGRyZXNzRm9ybX0gZnJvbSAnLi9hZGRyZXNzLWZvcm0nO1xuLy9pbXBvcnQge0NvbnRhY3RMaXN0fSBmcm9tICcuL2NvbnRhY3QtbGlzdCc7XG5cbkBlbnRpdHlUeXBlKEJ1c2luZXNzKVxuQGhlYWRlcih7dGl0bGU6IHtuZXc6ICdOb3V2ZWxsZSBlbnRyZXByaXNlJywgZXhpc3Rpbmc6ICduYW1lJ319KS8vL1xuLy9AaGVhZGVyKHt0aXRsZToge3R5cGU6IFRpdGxlfX0pXG5cbkBzaWRlQnlTaWRlKClcbkBwYW5lbCgnJGluZm8nKVxuQGZpZWxkKCduYW1lJylcblxuQHNpZGVCeVNpZGUoKVxuQGZpZWxkKCdzaG9ydE5hbWUnKVxuQGZpZWxkKCdsYW5ndWFnZScpXG5AZmllbGQoJ3Bob25lTnVtYmVyJylcbkBwYW5lbCgnJHN1YnNjcmlwdGlvbicsIHt0aXRsZTogJ0Fib25uZW1lbnQnfSlcbkBmaWVsZCgnc3Vic2NyaXB0aW9uLnByaWNpbmcnKVxuLypcbkBjb21wb25lbnQoJ2FkZHJlc3MnLCBBZGRyZXNzRm9ybSlcbkBwYW5lbCgnJGNvbnRhY3RzUGFuZWwnLCB7dGl0bGU6ICdDb250YWN0cyd9KVxuQGNvbXBvbmVudCgnY29udGFjdHMnLCBDb250YWN0TGlzdClcbiovXG4vL0Bjb21wb25lbnQoJ2FkZHJlc3MnLCBBZGRyZXNzRm9ybSlcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc0Zvcm0gZXh0ZW5kcyBFbnRpdHlGb3JtIHt9Il19