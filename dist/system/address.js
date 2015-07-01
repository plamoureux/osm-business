System.register(['skyy/entity'], function (_export) {
  'use strict';

  var Entity, field, Address;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyEntity) {
      Entity = _skyyEntity.Entity;
      field = _skyyEntity.field;
    }],
    execute: function () {
      Address = (function (_Entity) {
        function Address() {
          _classCallCheck(this, _Address);

          _get(Object.getPrototypeOf(_Address.prototype), 'constructor', this).apply(this, arguments);
        }

        _inherits(Address, _Entity);

        var _Address = Address;
        Address = field('country', 'lookup', { caption: 'Pays', items: { Canada: 'Canada', France: 'France' } })(Address) || Address;
        Address = field('state', 'lookup', { caption: 'Province', items: { Québec: 'Québec', Ontario: 'Ontario' } })(Address) || Address;
        Address = field('postalCode', 'string', { caption: 'Code postal' })(Address) || Address;
        Address = field('city', 'string', { caption: 'Ville' })(Address) || Address;
        Address = field('street', 'string', { caption: 'Rue' })(Address) || Address;
        Address = field('building', 'string', { caption: 'Édifice' })(Address) || Address;
        return Address;
      })(Entity);

      _export('Address', Address);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQVFhLE9BQU87Ozs7Ozs7Ozs7MkJBUlosTUFBTTswQkFBRSxLQUFLOzs7QUFRUixhQUFPO2lCQUFQLE9BQU87Ozs7OztrQkFBUCxPQUFPOzt1QkFBUCxPQUFPO0FBQVAsZUFBTyxHQURuQixLQUFLLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLEVBQUMsQ0FBQyxDQUM5RSxPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FGbkIsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxFQUFDLENBQUMsQ0FFbEYsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBSG5CLEtBQUssQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxDQUFDLENBRzNDLE9BQU8sS0FBUCxPQUFPO0FBQVAsZUFBTyxHQUpuQixLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUkvQixPQUFPLEtBQVAsT0FBTztBQUFQLGVBQU8sR0FMbkIsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FLL0IsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBTm5CLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBTXJDLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTztTQUFTLE1BQU07O3lCQUF0QixPQUFPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eSwgZmllbGR9IGZyb20gJ3NreXkvZW50aXR5JztcclxuXHJcbkBmaWVsZCgnYnVpbGRpbmcnLCAnc3RyaW5nJywge2NhcHRpb246ICfDiWRpZmljZSd9KVxyXG5AZmllbGQoJ3N0cmVldCcsICdzdHJpbmcnLCB7Y2FwdGlvbjogJ1J1ZSd9KVxyXG5AZmllbGQoJ2NpdHknLCAnc3RyaW5nJywge2NhcHRpb246ICdWaWxsZSd9KVxyXG5AZmllbGQoJ3Bvc3RhbENvZGUnLCAnc3RyaW5nJywge2NhcHRpb246ICdDb2RlIHBvc3RhbCd9KVxyXG5AZmllbGQoJ3N0YXRlJywgJ2xvb2t1cCcsIHtjYXB0aW9uOiAnUHJvdmluY2UnLCBpdGVtczoge1F1w6liZWM6ICdRdcOpYmVjJywgT250YXJpbzogJ09udGFyaW8nfX0pXHJcbkBmaWVsZCgnY291bnRyeScsICdsb29rdXAnLCB7Y2FwdGlvbjogJ1BheXMnLCBpdGVtczoge0NhbmFkYTogJ0NhbmFkYScsIEZyYW5jZTogJ0ZyYW5jZSd9fSlcclxuZXhwb3J0IGNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBFbnRpdHkge31cclxuXHJcbi8vIl19