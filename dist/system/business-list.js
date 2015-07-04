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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VGQW9CYSxZQUFZOzs7Ozs7Ozs7OzBEQXBCakIsVUFBVTs7Z0RBQ1YsVUFBVTs7c0NBQ1YsUUFBUTs7b0RBQ1IsT0FBTzttREFBRSxNQUFNOzs2Q0FDZixRQUFROztzREFDUixNQUFNOztzREFDTixVQUFVOzs7QUFjTCxrQkFBWTtpQkFBWixZQUFZOzs7Ozs7a0JBQVosWUFBWTs7NEJBQVosWUFBWTtBQUFaLG9CQUFZLEdBRHhCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBTyxVQUFVLEVBQUMsQ0FBQyxDQUNqRCxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBRnhCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQU8sVUFBVSxFQUFDLENBQUMsQ0FFL0MsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQUh4QixNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBTyxVQUFVLEVBQUMsQ0FBQyxDQUdqRCxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBTHhCLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDdEIsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBQyxDQUFDLENBSXZDLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FOeEIsT0FBTyxFQUFFLENBTUcsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQVB4QixVQUFVLENBQUMsUUFBUSxDQUFDLENBT1IsWUFBWSxLQUFaLFlBQVk7ZUFBWixZQUFZO1NBQVMsVUFBVTs7OEJBQS9CLFlBQVkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5TGlzdH0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cy9lbnRpdHktbGlzdC9lbnRpdHktbGlzdCc7XG5pbXBvcnQge2VudGl0eVR5cGV9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQge0J1c2luZXNzfSBmcm9tICdvc20tYnVzaW5lc3MvYnVzaW5lc3MnO1xuaW1wb3J0IHt0b29sYmFyLCBidXR0b259IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvdG9vbGJhci9kZWNvcmF0b3JzJztcbmltcG9ydCB7TXlXaWRnZXR9IGZyb20gJ29zbS1idXNpbmVzcy93aWRnZXRzL215LXdpZGdldCc7XG5pbXBvcnQge2NvbHVtbn0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cy9lbnRpdHktbGlzdC9kZWNvcmF0b3JzJztcbmltcG9ydCB7TmFtZUNvbHVtbn0gZnJvbSAnb3NtLWJ1c2luZXNzL2J1c2luZXNzLWxpc3QvbmFtZS1jb2x1bW4nO1xuXG5cblxuXG5cblxuQGVudGl0eVR5cGUoQnVzaW5lc3MpXG5AdG9vbGJhcigpIC8vXG5AYnV0dG9uKCdjcmVhdGVCdXNpbmVzcycsIFxuICB7d2lkZ2V0OiBNeVdpZGdldCwgbGFiZWw6ICdDcsOpZXIgdW5lIGVudHJlcHJpc2UnfSlcbkBjb2x1bW4oJ25hbWUnLCBOYW1lQ29sdW1uLCB7dGl0bGU6ICdOb20nLCBjbGFzczogJ2NvbC1zbS02J30pXG5AY29sdW1uKCdhZGRyZXNzLmNpdHknLCB7dGl0bGU6ICdWaWxsZScsIGNsYXNzOiAnY29sLXNtLTInfSlcbkBjb2x1bW4oJ2FkZHJlc3MuY291bnRyeScsIHt0aXRsZTogJ1BheXMnLCBjbGFzczogJ2NvbC1zbS0xJ30pXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NMaXN0IGV4dGVuZHMgRW50aXR5TGlzdCB7fSJdfQ==