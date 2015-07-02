System.register(['skyy/entity', './address'], function (_export) {
  'use strict';

  var Entity, key, plural, string, radio, lookup, entity, Address, Business;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyEntity) {
      Entity = _skyyEntity.Entity;
      key = _skyyEntity.key;
      plural = _skyyEntity.plural;
      string = _skyyEntity.string;
      radio = _skyyEntity.radio;
      lookup = _skyyEntity.lookup;
      entity = _skyyEntity.entity;
    }, function (_address) {
      Address = _address.Address;
    }],
    execute: function () {
      Business = (function (_Entity) {
        function Business() {
          _classCallCheck(this, _Business);

          _get(Object.getPrototypeOf(_Business.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(Business, _Entity);

        var _Business = Business;
        Business = lookup('subscription.pricing', { caption: 'Tarification',
          items: { 'Standard 60$': 'Standard 60$', '58.15$': '58.15$' } })(Business) || Business;
        Business = entity('address', Address)(Business) || Business;
        Business = string('phoneNumber', { caption: 'Téléphone' })(Business) || Business;
        Business = radio('language', { caption: 'Langue',
          items: { fr: 'Français', en: 'Anglais' } })(Business) || Business;
        Business = string('shortName', { caption: 'Abréviation' })(Business) || Business;
        Business = string('name', { caption: 'Nom', mandatory: true, unique: true })(Business) || Business;
        Business = string('_id', { mandatory: true, unique: true })(Business) || Business;
        Business = plural('Businesses')(Business) || Business;
        Business = key('_id')(Business) || Business;
        return Business;
      })(Entity);

      _export('Business', Business);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21FQWVhLFFBQVE7Ozs7Ozs7Ozs7MkJBZmIsTUFBTTt3QkFBRSxHQUFHOzJCQUFFLE1BQU07MkJBQUUsTUFBTTswQkFDakMsS0FBSzsyQkFBRSxNQUFNOzJCQUFFLE1BQU07O3lCQUNmLE9BQU87OztBQWFGLGNBQVE7aUJBQVIsUUFBUTs7Ozs7O2tCQUFSLFFBQVE7O3dCQUFSLFFBQVE7QUFBUixnQkFBUSxHQUZwQixNQUFNLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxPQUFPLEVBQUUsY0FBYztBQUN0RCxlQUFLLEVBQUUsRUFBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsRUFBQyxDQUFDLENBQ2xELFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FIcEIsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FHZCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBSnBCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FJakMsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQU5wQixLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxFQUFFLFFBQVE7QUFDbkMsZUFBSyxFQUFFLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxDQUs3QixRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBUHBCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FPakMsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQVJwQixNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQVFuRCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBVHBCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQVNsQyxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBVnBCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FVUixRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBWHBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FXRSxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7U0FBUyxNQUFNOzswQkFBdkIsUUFBUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIGtleSwgcGx1cmFsLCBzdHJpbmcsIFxyXG4gIHJhZGlvLCBsb29rdXAsIGVudGl0eX0gZnJvbSAnc2t5eS9lbnRpdHknO1xyXG5pbXBvcnQge0FkZHJlc3N9IGZyb20gJy4vYWRkcmVzcyc7XHJcblxyXG5Aa2V5KCdfaWQnKVxyXG5AcGx1cmFsKCdCdXNpbmVzc2VzJylcclxuQHN0cmluZygnX2lkJywge21hbmRhdG9yeTogdHJ1ZSwgdW5pcXVlOiB0cnVlfSlcclxuQHN0cmluZygnbmFtZScsIHtjYXB0aW9uOiAnTm9tJywgbWFuZGF0b3J5OiB0cnVlLCB1bmlxdWU6IHRydWV9KVxyXG5Ac3RyaW5nKCdzaG9ydE5hbWUnLCB7Y2FwdGlvbjogJ0FicsOpdmlhdGlvbid9KVxyXG5AcmFkaW8oJ2xhbmd1YWdlJywge2NhcHRpb246ICdMYW5ndWUnLCBcclxuICBpdGVtczoge2ZyOiAnRnJhbsOnYWlzJywgZW46ICdBbmdsYWlzJ319KVxyXG5Ac3RyaW5nKCdwaG9uZU51bWJlcicsIHtjYXB0aW9uOiAnVMOpbMOpcGhvbmUnfSlcclxuQGVudGl0eSgnYWRkcmVzcycsIEFkZHJlc3MpXHJcbkBsb29rdXAoJ3N1YnNjcmlwdGlvbi5wcmljaW5nJywge2NhcHRpb246ICdUYXJpZmljYXRpb24nLCBcclxuICBpdGVtczogeydTdGFuZGFyZCA2MCQnOiAnU3RhbmRhcmQgNjAkJywgJzU4LjE1JCc6ICc1OC4xNSQnfX0pXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzcyBleHRlbmRzIEVudGl0eSB7fSJdfQ==