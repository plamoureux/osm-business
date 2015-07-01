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
        BusinessList = column('address.country', { title: 'Pays', 'class': 'col-sm-1' })(BusinessList) || BusinessList;
        BusinessList = column('address.city', { title: 'Ville', 'class': 'col-sm-2' })(BusinessList) || BusinessList;
        BusinessList = entityType(Business)(BusinessList) || BusinessList;
        return BusinessList;
      })(EntityList);

      _export('BusinessList', BusinessList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dEQWNhLFlBQVk7Ozs7Ozs7Ozs7MERBZGpCLFVBQVU7O2dEQUNWLFVBQVU7O3NEQUNWLE1BQU07c0RBQUUsTUFBTTs7MkJBRWQsUUFBUTs7O0FBVUgsa0JBQVk7aUJBQVosWUFBWTs7Ozs7O2tCQUFaLFlBQVk7OzRCQUFaLFlBQVk7QUFBWixvQkFBWSxHQUR4QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQU8sVUFBVSxFQUFDLENBQUMsQ0FDakQsWUFBWSxLQUFaLFlBQVk7QUFBWixvQkFBWSxHQUZ4QixNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFPLFVBQVUsRUFBQyxDQUFDLENBRS9DLFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FOeEIsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQU1SLFlBQVksS0FBWixZQUFZO2VBQVosWUFBWTtTQUFTLFVBQVU7OzhCQUEvQixZQUFZIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eUxpc3R9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZW50aXR5LWxpc3QvZW50aXR5LWxpc3QnO1xyXG5pbXBvcnQge2VudGl0eVR5cGV9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZGVjb3JhdG9ycyc7XHJcbmltcG9ydCB7Y29sdW1uLCB3aWRnZXR9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvZW50aXR5LWxpc3QvZGVjb3JhdG9ycyc7XHJcbi8vaW1wb3J0IHt0b29sYmFyLCBidXR0b259IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvdG9vbGJhci9kZWNvcmF0b3JzJztcclxuaW1wb3J0IHtCdXNpbmVzc30gZnJvbSAnLi9idXNpbmVzcyc7XHJcbi8vaW1wb3J0IHtNeVdpZGdldH0gZnJvbSAnLi93aWRnZXRzL215LXdpZGdldCc7XHJcbi8vaW1wb3J0IHtOYW1lQ29sdW1ufSBmcm9tICcuL2J1c2luZXNzLWxpc3QvbmFtZS1jb2x1bW4nO1xyXG5cclxuQGVudGl0eVR5cGUoQnVzaW5lc3MpXHJcbi8vQHRvb2xiYXIoKVxyXG4vL0BidXR0b24oJ2NyZWF0ZUJ1c2luZXNzJywge3dpZGdldDogTXlXaWRnZXQsIGxhYmVsOiAnQ3LDqWVyIHVuZSBlbnRyZXByaXNlJ30pXHJcbi8vQGNvbHVtbignbmFtZScsIE5hbWVDb2x1bW4pXHJcbkBjb2x1bW4oJ2FkZHJlc3MuY2l0eScsIHt0aXRsZTogJ1ZpbGxlJywgY2xhc3M6ICdjb2wtc20tMid9KVxyXG5AY29sdW1uKCdhZGRyZXNzLmNvdW50cnknLCB7dGl0bGU6ICdQYXlzJywgY2xhc3M6ICdjb2wtc20tMSd9KVxyXG5leHBvcnQgY2xhc3MgQnVzaW5lc3NMaXN0IGV4dGVuZHMgRW50aXR5TGlzdCB7fSJdfQ==