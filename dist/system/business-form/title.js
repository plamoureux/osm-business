System.register(['skyy/web-components'], function (_export) {
  'use strict';

  var EntityComponent, Title;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyWebComponents) {
      EntityComponent = _skyyWebComponents.EntityComponent;
    }],
    execute: function () {
      Title = (function (_EntityComponent) {
        function Title() {
          _classCallCheck(this, Title);

          _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(Title, _EntityComponent);

        return Title;
      })(EntityComponent);

      _export('Title', Title);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUVhLEtBQUs7Ozs7Ozs7Ozs7MkNBRlYsZUFBZTs7O0FBRVYsV0FBSztpQkFBTCxLQUFLO2dDQUFMLEtBQUs7O3FDQUFMLEtBQUs7OztrQkFBTCxLQUFLOztlQUFMLEtBQUs7U0FBUyxlQUFlOzt1QkFBN0IsS0FBSyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHlDb21wb25lbnR9IGZyb20gJ3NreXkvd2ViLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpdGxlIGV4dGVuZHMgRW50aXR5Q29tcG9uZW50IHt9Il19