System.register(['skyy/web-components/entity-list/entity-list', 'skyy/web-components/decorators', 'osm-business/business', 'skyy/web-components/toolbar/decorators', 'osm-business/widgets/my-widget', 'skyy/web-components/entity-list/decorators', 'osm-business/business-list/name-column'], function (_export) {
  'use strict';

  var EntityList, entityType, Business, toolbar, button, MyWidget, column, NameColumn, BusinessList;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsEntityListEntityList) {
      EntityList = _skyyWebComponentsEntityListEntityList.EntityList;
    }, function (_skyyWebComponentsDecorators) {
      entityType = _skyyWebComponentsDecorators.entityType;
    }, function (_osmBusinessBusiness) {
      Business = _osmBusinessBusiness.Business;
    }, function (_skyyWebComponentsToolbarDecorators) {
      toolbar = _skyyWebComponentsToolbarDecorators.toolbar;
      button = _skyyWebComponentsToolbarDecorators.button;
    }, function (_osmBusinessWidgetsMyWidget) {
      MyWidget = _osmBusinessWidgetsMyWidget.MyWidget;
    }, function (_skyyWebComponentsEntityListDecorators) {
      column = _skyyWebComponentsEntityListDecorators.column;
    }, function (_osmBusinessBusinessListNameColumn) {
      NameColumn = _osmBusinessBusinessListNameColumn.NameColumn;
    }],
    execute: function () {
      BusinessList = (function (_EntityList) {
        function BusinessList() {
          _classCallCheck(this, _BusinessList);

          _get(Object.getPrototypeOf(_BusinessList.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BusinessList, _EntityList);

        var _BusinessList = BusinessList;
        BusinessList = column('address.country', { title: 'Pays', 'class': 'col-sm-1' })(BusinessList) || BusinessList;
        BusinessList = column('address.city', { title: 'Ville', 'class': 'col-sm-2' })(BusinessList) || BusinessList;
        BusinessList = column('name', NameColumn, { title: 'Nom', 'class': 'col-sm-6' })(BusinessList) || BusinessList;
        BusinessList = button('createBusiness', { widget: MyWidget, label: 'Créer une entreprise' })(BusinessList) || BusinessList;
        BusinessList = toolbar()(BusinessList) || BusinessList;
        BusinessList = entityType(Business)(BusinessList) || BusinessList;
        return BusinessList;
      })(EntityList);

      _export('BusinessList', BusinessList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VGQWNhLFlBQVk7Ozs7Ozs7Ozs7MERBZGpCLFVBQVU7O2dEQUNWLFVBQVU7O3NDQUNWLFFBQVE7O29EQUNSLE9BQU87bURBQUUsTUFBTTs7NkNBQ2YsUUFBUTs7c0RBQ1IsTUFBTTs7c0RBQ04sVUFBVTs7O0FBUUwsa0JBQVk7aUJBQVosWUFBWTs7Ozs7O2tCQUFaLFlBQVk7OzRCQUFaLFlBQVk7QUFBWixvQkFBWSxHQUR4QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQU8sVUFBVSxFQUFDLENBQUMsQ0FDakQsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQUZ4QixNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFPLFVBQVUsRUFBQyxDQUFDLENBRS9DLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FIeEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQU8sVUFBVSxFQUFDLENBQUMsQ0FHakQsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQUx4QixNQUFNLENBQUMsZ0JBQWdCLEVBQ3RCLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQyxDQUl2QyxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBTnhCLE9BQU8sRUFBRSxDQU1HLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FQeEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQU9SLFlBQVksS0FBWixZQUFZO2VBQVosWUFBWTtTQUFTLFVBQVU7OzhCQUEvQixZQUFZIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eUxpc3R9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZW50aXR5LWxpc3QvZW50aXR5LWxpc3QnO1xuaW1wb3J0IHtlbnRpdHlUeXBlfSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtCdXNpbmVzc30gZnJvbSAnb3NtLWJ1c2luZXNzL2J1c2luZXNzJztcbmltcG9ydCB7dG9vbGJhciwgYnV0dG9ufSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL3Rvb2xiYXIvZGVjb3JhdG9ycyc7XG5pbXBvcnQge015V2lkZ2V0fSBmcm9tICdvc20tYnVzaW5lc3Mvd2lkZ2V0cy9teS13aWRnZXQnO1xuaW1wb3J0IHtjb2x1bW59IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZW50aXR5LWxpc3QvZGVjb3JhdG9ycyc7XG5pbXBvcnQge05hbWVDb2x1bW59IGZyb20gJ29zbS1idXNpbmVzcy9idXNpbmVzcy1saXN0L25hbWUtY29sdW1uJztcbkBlbnRpdHlUeXBlKEJ1c2luZXNzKVxuQHRvb2xiYXIoKVxuQGJ1dHRvbignY3JlYXRlQnVzaW5lc3MnLCBcbiAge3dpZGdldDogTXlXaWRnZXQsIGxhYmVsOiAnQ3LDqWVyIHVuZSBlbnRyZXByaXNlJ30pXG5AY29sdW1uKCduYW1lJywgTmFtZUNvbHVtbiwge3RpdGxlOiAnTm9tJywgY2xhc3M6ICdjb2wtc20tNid9KVxuQGNvbHVtbignYWRkcmVzcy5jaXR5Jywge3RpdGxlOiAnVmlsbGUnLCBjbGFzczogJ2NvbC1zbS0yJ30pXG5AY29sdW1uKCdhZGRyZXNzLmNvdW50cnknLCB7dGl0bGU6ICdQYXlzJywgY2xhc3M6ICdjb2wtc20tMSd9KVxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzTGlzdCBleHRlbmRzIEVudGl0eUxpc3Qge30iXX0=