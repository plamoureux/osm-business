System.register(['skyy/entity/entity', 'skyy/entity/decorators', 'osm-business/address'], function (_export) {
  'use strict';

  var Entity, key, plural, string, radio, entity, lookup, Address, Business;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyEntityEntity) {
      Entity = _skyyEntityEntity.Entity;
    }, function (_skyyEntityDecorators) {
      key = _skyyEntityDecorators.key;
      plural = _skyyEntityDecorators.plural;
      string = _skyyEntityDecorators.string;
      radio = _skyyEntityDecorators.radio;
      entity = _skyyEntityDecorators.entity;
      lookup = _skyyEntityDecorators.lookup;
    }, function (_osmBusinessAddress) {
      Address = _osmBusinessAddress.Address;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21FQWVhLFFBQVE7Ozs7Ozs7Ozs7aUNBZmIsTUFBTTs7a0NBQ04sR0FBRztxQ0FBRSxNQUFNO3FDQUFFLE1BQU07b0NBQUUsS0FBSztxQ0FBRSxNQUFNO3FDQUFFLE1BQU07O29DQUMxQyxPQUFPOzs7QUFhRixjQUFRO2lCQUFSLFFBQVE7Ozs7OztrQkFBUixRQUFROzt3QkFBUixRQUFRO0FBQVIsZ0JBQVEsR0FGcEIsTUFBTSxDQUFDLHNCQUFzQixFQUFFLEVBQUMsT0FBTyxFQUFFLGNBQWM7QUFDdEQsZUFBSyxFQUFFLEVBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQyxDQUNsRCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBSHBCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBR2QsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQUpwQixNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBSWpDLFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FOcEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFDLE9BQU8sRUFBRSxRQUFRO0FBQ25DLGVBQUssRUFBRSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUMsQ0FLN0IsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQVBwQixNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxDQUFDLENBT2pDLFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FScEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FRbkQsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQVRwQixNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FTbEMsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQVZwQixNQUFNLENBQUMsWUFBWSxDQUFDLENBVVIsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQVhwQixHQUFHLENBQUMsS0FBSyxDQUFDLENBV0UsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFRO1NBQVMsTUFBTTs7MEJBQXZCLFFBQVEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5fSBmcm9tICdza3l5L2VudGl0eS9lbnRpdHknO1xuaW1wb3J0IHtrZXksIHBsdXJhbCwgc3RyaW5nLCByYWRpbywgZW50aXR5LCBsb29rdXB9IGZyb20gJ3NreXkvZW50aXR5L2RlY29yYXRvcnMnO1xuaW1wb3J0IHtBZGRyZXNzfSBmcm9tICdvc20tYnVzaW5lc3MvYWRkcmVzcyc7XG5cbkBrZXkoJ19pZCcpXG5AcGx1cmFsKCdCdXNpbmVzc2VzJylcbkBzdHJpbmcoJ19pZCcsIHttYW5kYXRvcnk6IHRydWUsIHVuaXF1ZTogdHJ1ZX0pXG5Ac3RyaW5nKCduYW1lJywge2NhcHRpb246ICdOb20nLCBtYW5kYXRvcnk6IHRydWUsIHVuaXF1ZTogdHJ1ZX0pXG5Ac3RyaW5nKCdzaG9ydE5hbWUnLCB7Y2FwdGlvbjogJ0FicsOpdmlhdGlvbid9KVxuQHJhZGlvKCdsYW5ndWFnZScsIHtjYXB0aW9uOiAnTGFuZ3VlJywgXG4gIGl0ZW1zOiB7ZnI6ICdGcmFuw6dhaXMnLCBlbjogJ0FuZ2xhaXMnfX0pXG5Ac3RyaW5nKCdwaG9uZU51bWJlcicsIHtjYXB0aW9uOiAnVMOpbMOpcGhvbmUnfSlcbkBlbnRpdHkoJ2FkZHJlc3MnLCBBZGRyZXNzKVxuQGxvb2t1cCgnc3Vic2NyaXB0aW9uLnByaWNpbmcnLCB7Y2FwdGlvbjogJ1RhcmlmaWNhdGlvbicsIFxuICBpdGVtczogeydTdGFuZGFyZCA2MCQnOiAnU3RhbmRhcmQgNjAkJywgJzU4LjE1JCc6ICc1OC4xNSQnfX0pXG5leHBvcnQgY2xhc3MgQnVzaW5lc3MgZXh0ZW5kcyBFbnRpdHkge30iXX0=