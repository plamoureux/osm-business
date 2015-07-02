System.register(['skyy/web-components/pages', './business-list'], function (_export) {
  'use strict';

  var EntityListPage, route, list, BusinessList, BusinessListPage;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponentsPages) {
      EntityListPage = _skyyWebComponentsPages.EntityListPage;
      route = _skyyWebComponentsPages.route;
      list = _skyyWebComponentsPages.list;
    }, function (_businessList) {
      BusinessList = _businessList.BusinessList;
    }],
    execute: function () {
      BusinessListPage = (function (_EntityListPage) {
        function BusinessListPage() {
          _classCallCheck(this, _BusinessListPage);

          _get(Object.getPrototypeOf(_BusinessListPage.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(BusinessListPage, _EntityListPage);

        var _BusinessListPage = BusinessListPage;
        BusinessListPage = list(BusinessList)(BusinessListPage) || BusinessListPage;
        BusinessListPage = route('businesses', { title: 'Entreprises' })(BusinessListPage) || BusinessListPage;
        return BusinessListPage;
      })(EntityListPage);

      _export('BusinessListPage', BusinessListPage);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lEQU1hLGdCQUFnQjs7Ozs7Ozs7OzsrQ0FOckIsY0FBYztzQ0FBRSxLQUFLO3FDQUFFLElBQUk7O21DQUUzQixZQUFZOzs7QUFJUCxzQkFBZ0I7aUJBQWhCLGdCQUFnQjs7Ozs7O2tCQUFoQixnQkFBZ0I7O2dDQUFoQixnQkFBZ0I7QUFBaEIsd0JBQWdCLEdBRDVCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FDTixnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUY1QixLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBQyxDQUFDLENBRS9CLGdCQUFnQixLQUFoQixnQkFBZ0I7ZUFBaEIsZ0JBQWdCO1NBQVMsY0FBYzs7a0NBQXZDLGdCQUFnQiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHlMaXN0UGFnZSwgcm91dGUsIGxpc3R9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMvcGFnZXMnO1xyXG5cclxuaW1wb3J0IHtCdXNpbmVzc0xpc3R9IGZyb20gJy4vYnVzaW5lc3MtbGlzdCc7XHJcblxyXG5Acm91dGUoJ2J1c2luZXNzZXMnLCB7dGl0bGU6ICdFbnRyZXByaXNlcyd9KVxyXG5AbGlzdChCdXNpbmVzc0xpc3QpXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzc0xpc3RQYWdlIGV4dGVuZHMgRW50aXR5TGlzdFBhZ2Uge30iXX0=