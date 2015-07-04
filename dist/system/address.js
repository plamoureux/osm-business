System.register(['skyy/entity/entity', 'skyy/entity/decorators'], function (_export) {
  'use strict';

  var Entity, string, lookup, Address;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyEntityEntity) {
      Entity = _skyyEntityEntity.Entity;
    }, function (_skyyEntityDecorators) {
      string = _skyyEntityDecorators.string;
      lookup = _skyyEntityDecorators.lookup;
    }],
    execute: function () {
      Address = (function (_Entity) {
        function Address() {
          _classCallCheck(this, _Address);

          _get(Object.getPrototypeOf(_Address.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(Address, _Entity);

        var _Address = Address;
        Address = lookup('country', { caption: 'Pays',
          items: { Canada: 'Canada', France: 'France' } })(Address) || Address;
        Address = lookup('state', { caption: 'Province',
          items: { Québec: 'Québec', Ontario: 'Ontario' } })(Address) || Address;
        Address = string('postalCode', { caption: 'Code postal' })(Address) || Address;
        Address = string('city', { caption: 'Ville' })(Address) || Address;
        Address = string('street', { caption: 'Rue' })(Address) || Address;
        Address = string('building', { caption: 'Édifice' })(Address) || Address;
        return Address;
      })(Entity);

      _export('Address', Address);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhCQVdhLE9BQU87Ozs7Ozs7Ozs7aUNBWFosTUFBTTs7cUNBQ04sTUFBTTtxQ0FBRSxNQUFNOzs7QUFVVCxhQUFPO2lCQUFQLE9BQU87Ozs7OztrQkFBUCxPQUFPOzt1QkFBUCxPQUFPO0FBQVAsZUFBTyxHQUZuQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU07QUFDakMsZUFBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQyxDQUNsQyxPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FKbkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVO0FBQ25DLGVBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUMsQ0FHcEMsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBTG5CLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FLbEMsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBTm5CLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FNdEIsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBUG5CLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FPdEIsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBUm5CLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FRNUIsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPO1NBQVMsTUFBTTs7eUJBQXRCLE9BQU8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5fSBmcm9tICdza3l5L2VudGl0eS9lbnRpdHknO1xuaW1wb3J0IHtzdHJpbmcsIGxvb2t1cH0gZnJvbSAnc2t5eS9lbnRpdHkvZGVjb3JhdG9ycyc7XG5cbkBzdHJpbmcoJ2J1aWxkaW5nJywge2NhcHRpb246ICfDiWRpZmljZSd9KVxuQHN0cmluZygnc3RyZWV0Jywge2NhcHRpb246ICdSdWUnfSlcbkBzdHJpbmcoJ2NpdHknLCB7Y2FwdGlvbjogJ1ZpbGxlJ30pXG5Ac3RyaW5nKCdwb3N0YWxDb2RlJywge2NhcHRpb246ICdDb2RlIHBvc3RhbCd9KVxuQGxvb2t1cCgnc3RhdGUnLCB7Y2FwdGlvbjogJ1Byb3ZpbmNlJywgXG4gIGl0ZW1zOiB7UXXDqWJlYzogJ1F1w6liZWMnLCBPbnRhcmlvOiAnT250YXJpbyd9fSlcbkBsb29rdXAoJ2NvdW50cnknLCB7Y2FwdGlvbjogJ1BheXMnLCBcbiAgaXRlbXM6IHtDYW5hZGE6ICdDYW5hZGEnLCBGcmFuY2U6ICdGcmFuY2UnfX0pXG5leHBvcnQgY2xhc3MgQWRkcmVzcyBleHRlbmRzIEVudGl0eSB7fSJdfQ==