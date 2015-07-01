System.register(['skyy/entity', './address'], function (_export) {
  'use strict';

  var Entity, config, entity, field, Address, Business;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_skyyEntity) {
      Entity = _skyyEntity.Entity;
      config = _skyyEntity.config;
      entity = _skyyEntity.entity;
      field = _skyyEntity.field;
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
        Business = field('subscription.pricing', 'lookup', { caption: 'Tarification', items: { 'Standard 60$': 'Standard 60$', '58.15$': '58.15$' } })(Business) || Business;
        Business = field('phoneNumber', 'string', { caption: 'Téléphone' })(Business) || Business;
        Business = field('language', 'radio', { caption: 'Langue', items: { fr: 'Français', en: 'Anglais' } })(Business) || Business;
        Business = field('shortName', 'string', { caption: 'Abréviation' })(Business) || Business;
        Business = field('name', 'string', { caption: 'Nom', mandatory: true, unique: true })(Business) || Business;
        Business = field('_id', 'string', { mandatory: true, unique: true })(Business) || Business;
        Business = config({ key: '_id', plural: 'Businesses' })(Business) || Business;
        return Business;
      })(Entity);

      _export('Business', Business);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhDQVdhLFFBQVE7Ozs7Ozs7Ozs7MkJBWGIsTUFBTTsyQkFBRSxNQUFNOzJCQUFFLE1BQU07MEJBQUUsS0FBSzs7eUJBQzdCLE9BQU87OztBQVVGLGNBQVE7aUJBQVIsUUFBUTs7Ozs7O2tCQUFSLFFBQVE7O3dCQUFSLFFBQVE7QUFBUixnQkFBUSxHQURwQixLQUFLLENBQUMsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsRUFBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsRUFBQyxDQUFDLENBQ25ILFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FIcEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FHMUMsUUFBUSxLQUFSLFFBQVE7QUFBUixnQkFBUSxHQUpwQixLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRyxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLEVBQUMsQ0FBQyxDQUk1RSxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBTHBCLEtBQUssQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxDQUFDLENBSzFDLFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FOcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBTTVELFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FQcEIsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQU8zQyxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBUnBCLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDLENBUTlCLFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUTtTQUFTLE1BQU07OzBCQUF2QixRQUFRIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eSwgY29uZmlnLCBlbnRpdHksIGZpZWxkfSBmcm9tICdza3l5L2VudGl0eSc7XHJcbmltcG9ydCB7QWRkcmVzc30gZnJvbSAnLi9hZGRyZXNzJztcclxuXHJcbkBjb25maWcoe2tleTogJ19pZCcsIHBsdXJhbDogJ0J1c2luZXNzZXMnfSlcclxuQGZpZWxkKCdfaWQnLCAnc3RyaW5nJywge21hbmRhdG9yeTogdHJ1ZSwgdW5pcXVlOiB0cnVlfSlcclxuQGZpZWxkKCduYW1lJywgJ3N0cmluZycsIHtjYXB0aW9uOiAnTm9tJywgbWFuZGF0b3J5OiB0cnVlLCB1bmlxdWU6IHRydWV9KVxyXG5AZmllbGQoJ3Nob3J0TmFtZScsICdzdHJpbmcnLCB7Y2FwdGlvbjogJ0FicsOpdmlhdGlvbid9KVxyXG5AZmllbGQoJ2xhbmd1YWdlJywgJ3JhZGlvJywgIHtjYXB0aW9uOiAnTGFuZ3VlJywgaXRlbXM6IHtmcjogJ0ZyYW7Dp2FpcycsIGVuOiAnQW5nbGFpcyd9fSlcclxuQGZpZWxkKCdwaG9uZU51bWJlcicsICdzdHJpbmcnLCB7Y2FwdGlvbjogJ1TDqWzDqXBob25lJ30pXHJcbi8vQGVudGl0eSgnYWRkcmVzcycsIEFkZHJlc3MpXHJcbkBmaWVsZCgnc3Vic2NyaXB0aW9uLnByaWNpbmcnLCAnbG9va3VwJywge2NhcHRpb246ICdUYXJpZmljYXRpb24nLCBpdGVtczogeydTdGFuZGFyZCA2MCQnOiAnU3RhbmRhcmQgNjAkJywgJzU4LjE1JCc6ICc1OC4xNSQnfX0pXHJcbmV4cG9ydCBjbGFzcyBCdXNpbmVzcyBleHRlbmRzIEVudGl0eSB7fSJdfQ==