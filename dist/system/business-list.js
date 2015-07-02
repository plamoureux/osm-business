System.register(['skyy/web-components/entity-list', 'skyy/web-components', 'skyy/web-components/toolbar', './business', './business-list/name-column', './widgets/my-widget'], function (_export) {
  'use strict';

  var EntityList, column, widget, entityType, toolbar, button, Business, NameColumn, MyWidget, BusinessList;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsEntityList) {
      EntityList = _skyyWebComponentsEntityList.EntityList;
      column = _skyyWebComponentsEntityList.column;
      widget = _skyyWebComponentsEntityList.widget;
    }, function (_skyyWebComponents) {
      entityType = _skyyWebComponents.entityType;
    }, function (_skyyWebComponentsToolbar) {
      toolbar = _skyyWebComponentsToolbar.toolbar;
      button = _skyyWebComponentsToolbar.button;
    }, function (_business) {
      Business = _business.Business;
    }, function (_businessListNameColumn) {
      NameColumn = _businessListNameColumn.NameColumn;
    }, function (_widgetsMyWidget) {
      MyWidget = _widgetsMyWidget.MyWidget;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytGQWVhLFlBQVk7Ozs7Ozs7Ozs7Z0RBZmpCLFVBQVU7NENBQUUsTUFBTTs0Q0FBRSxNQUFNOztzQ0FDMUIsVUFBVTs7MENBQ1YsT0FBTzt5Q0FBRSxNQUFNOzsyQkFFZixRQUFROzsyQ0FDUixVQUFVOztrQ0FDVixRQUFROzs7QUFTSCxrQkFBWTtpQkFBWixZQUFZOzs7Ozs7a0JBQVosWUFBWTs7NEJBQVosWUFBWTtBQUFaLG9CQUFZLEdBRHhCLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBTyxVQUFVLEVBQUMsQ0FBQyxDQUNqRCxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBRnhCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQU8sVUFBVSxFQUFDLENBQUMsQ0FFL0MsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQUh4QixNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBTyxVQUFVLEVBQUMsQ0FBQyxDQUdqRCxZQUFZLEtBQVosWUFBWTtBQUFaLG9CQUFZLEdBTHhCLE1BQU0sQ0FBQyxnQkFBZ0IsRUFDdEIsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBQyxDQUFDLENBSXZDLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FOeEIsT0FBTyxFQUFFLENBTUcsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQVB4QixVQUFVLENBQUMsUUFBUSxDQUFDLENBT1IsWUFBWSxLQUFaLFlBQVk7ZUFBWixZQUFZO1NBQVMsVUFBVTs7OEJBQS9CLFlBQVkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5TGlzdCwgY29sdW1uLCB3aWRnZXR9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZW50aXR5LWxpc3QnO1xyXG5pbXBvcnQge2VudGl0eVR5cGV9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge3Rvb2xiYXIsIGJ1dHRvbn0gZnJvbSAnc2t5eS93ZWItY29tcG9uZW50cy90b29sYmFyJztcclxuXHJcbmltcG9ydCB7QnVzaW5lc3N9IGZyb20gJy4vYnVzaW5lc3MnO1xyXG5pbXBvcnQge05hbWVDb2x1bW59IGZyb20gJy4vYnVzaW5lc3MtbGlzdC9uYW1lLWNvbHVtbic7XHJcbmltcG9ydCB7TXlXaWRnZXR9IGZyb20gJy4vd2lkZ2V0cy9teS13aWRnZXQnO1xyXG5cclxuQGVudGl0eVR5cGUoQnVzaW5lc3MpXHJcbkB0b29sYmFyKClcclxuQGJ1dHRvbignY3JlYXRlQnVzaW5lc3MnLCBcclxuICB7d2lkZ2V0OiBNeVdpZGdldCwgbGFiZWw6ICdDcsOpZXIgdW5lIGVudHJlcHJpc2UnfSlcclxuQGNvbHVtbignbmFtZScsIE5hbWVDb2x1bW4sIHt0aXRsZTogJ05vbScsIGNsYXNzOiAnY29sLXNtLTYnfSlcclxuQGNvbHVtbignYWRkcmVzcy5jaXR5Jywge3RpdGxlOiAnVmlsbGUnLCBjbGFzczogJ2NvbC1zbS0yJ30pXHJcbkBjb2x1bW4oJ2FkZHJlc3MuY291bnRyeScsIHt0aXRsZTogJ1BheXMnLCBjbGFzczogJ2NvbC1zbS0xJ30pXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc0xpc3QgZXh0ZW5kcyBFbnRpdHlMaXN0IHt9Il19