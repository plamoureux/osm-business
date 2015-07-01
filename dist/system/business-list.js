System.register(['skyy/web-components/entity-list/entity-list', 'skyy/web-components/decorators', 'skyy/web-components/entity-list/decorators', './business'], function (_export) {
  'use strict';

  var EntityList, entityType, column, widget, Business, BusinessList;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsEntityListEntityList) {
      EntityList = _skyyWebComponentsEntityListEntityList.EntityList;
    }, function (_skyyWebComponentsDecorators) {
      entityType = _skyyWebComponentsDecorators.entityType;
    }, function (_skyyWebComponentsEntityListDecorators) {
      column = _skyyWebComponentsEntityListDecorators.column;
      widget = _skyyWebComponentsEntityListDecorators.widget;
    }, function (_business) {
      Business = _business.Business;
    }],
    execute: function () {
      BusinessList = (function (_EntityList) {
        function BusinessList() {
          _classCallCheck(this, _BusinessList);

          _get(Object.getPrototypeOf(_BusinessList.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BusinessList, _EntityList);

        var _BusinessList = BusinessList;
        BusinessList = column('address.city', { title: 'Ville', 'class': 'col-sm-2' })(BusinessList) || BusinessList;
        BusinessList = entityType(Business)(BusinessList) || BusinessList;
        BusinessList = route('businesses', { title: 'Entreprises' })(BusinessList) || BusinessList;
        return BusinessList;
      })(EntityList);

      _export('BusinessList', BusinessList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dEQWNhLFlBQVk7Ozs7Ozs7Ozs7MERBZGpCLFVBQVU7O2dEQUNWLFVBQVU7O3NEQUNWLE1BQU07c0RBQUUsTUFBTTs7MkJBRWQsUUFBUTs7O0FBVUgsa0JBQVk7aUJBQVosWUFBWTs7Ozs7O2tCQUFaLFlBQVk7OzRCQUFaLFlBQVk7QUFBWixvQkFBWSxHQUR4QixNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFPLFVBQVUsRUFBQyxDQUFDLENBQy9DLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FMeEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUtSLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FOeEIsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQU0vQixZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVk7U0FBUyxVQUFVOzs4QkFBL0IsWUFBWSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHlMaXN0fSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2VudGl0eS1saXN0L2VudGl0eS1saXN0JztcclxuaW1wb3J0IHtlbnRpdHlUeXBlfSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2RlY29yYXRvcnMnO1xyXG5pbXBvcnQge2NvbHVtbiwgd2lkZ2V0fSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2VudGl0eS1saXN0L2RlY29yYXRvcnMnO1xyXG4vL2ltcG9ydCB7dG9vbGJhciwgYnV0dG9ufSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL3Rvb2xiYXIvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7QnVzaW5lc3N9IGZyb20gJy4vYnVzaW5lc3MnO1xyXG4vL2ltcG9ydCB7TXlXaWRnZXR9IGZyb20gJy4vd2lkZ2V0cy9teS13aWRnZXQnO1xyXG4vL2ltcG9ydCB7TmFtZUNvbHVtbn0gZnJvbSAnLi9idXNpbmVzcy1saXN0L25hbWUtY29sdW1uJztcclxuXHJcbkByb3V0ZSgnYnVzaW5lc3NlcycsIHt0aXRsZTogJ0VudHJlcHJpc2VzJ30pXHJcbkBlbnRpdHlUeXBlKEJ1c2luZXNzKVxyXG4vL0B0b29sYmFyKClcclxuLy9AYnV0dG9uKCdjcmVhdGVCdXNpbmVzcycsIHt3aWRnZXQ6IE15V2lkZ2V0LCBsYWJlbDogJ0Nyw6llciB1bmUgZW50cmVwcmlzZSd9KVxyXG4vL0Bjb2x1bW4oJ25hbWUnLCBOYW1lQ29sdW1uKVxyXG5AY29sdW1uKCdhZGRyZXNzLmNpdHknLCB7dGl0bGU6ICdWaWxsZScsIGNsYXNzOiAnY29sLXNtLTInfSlcclxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzTGlzdCBleHRlbmRzIEVudGl0eUxpc3Qge30iXX0=