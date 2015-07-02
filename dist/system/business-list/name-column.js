System.register(['lodash', 'aurelia-framework', 'skyy/web-components', 'skyy/web-components/messages'], function (_export) {
	'use strict';

	var _, customElement, computedFrom, EntityComponent, EditEntity, NameColumn;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	return {
		setters: [function (_lodash) {
			_ = _lodash['default'];
		}, function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			computedFrom = _aureliaFramework.computedFrom;
		}, function (_skyyWebComponents) {
			EntityComponent = _skyyWebComponents.EntityComponent;
		}, function (_skyyWebComponentsMessages) {
			EditEntity = _skyyWebComponentsMessages.EditEntity;
		}],
		execute: function () {
			NameColumn = (function (_EntityComponent) {
				function NameColumn() {
					_classCallCheck(this, NameColumn);

					_get(Object.getPrototypeOf(NameColumn.prototype), 'constructor', this).apply(this, arguments);
				}

				_inherits(NameColumn, _EntityComponent);

				_createDecoratedClass(NameColumn, [{
					key: 'editEntity',
					value: function editEntity() {
						this.eventAggregator.publish(new EditEntity(this.metadata, this.business));
					}
				}, {
					key: 'completeName',
					decorators: [computedFrom('business.name', 'business.shortName')],
					get: function get() {
						var name = this.business.name;
						if (!_.isEmpty(this.business.shortName)) {
							name += ' (' + this.business.shortName + ')';
						}
						return name;
					}
				}]);

				return NameColumn;
			})(EntityComponent);

			_export('NameColumn', NameColumn);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tFQUthLFVBQVU7Ozs7Ozs7Ozs7Ozs7O3FDQUpmLGFBQWE7b0NBQUUsWUFBWTs7d0NBQzNCLGVBQWU7OzJDQUNmLFVBQVU7OztBQUVMLGFBQVU7YUFBVixVQUFVOzJCQUFWLFVBQVU7O2dDQUFWLFVBQVU7OztjQUFWLFVBQVU7OzBCQUFWLFVBQVU7O1lBYVosc0JBQUc7QUFDWixVQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzNFOzs7a0JBWEEsWUFBWSxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztVQUNwQyxlQUFHO0FBQ2xCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzlCLFVBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDdkMsV0FBSSxXQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxNQUFHLENBQUM7T0FDekM7QUFDRCxhQUFPLElBQUksQ0FBQztNQUNYOzs7V0FYVSxVQUFVO01BQVMsZUFBZTs7eUJBQWxDLFVBQVUiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7Y3VzdG9tRWxlbWVudCwgY29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RW50aXR5Q29tcG9uZW50fSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzJztcclxuaW1wb3J0IHtFZGl0RW50aXR5fSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL21lc3NhZ2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYW1lQ29sdW1uIGV4dGVuZHMgRW50aXR5Q29tcG9uZW50IHtcclxuXHQvLyBUT0RPIDogQGNvbXB1dGVkRnJvbSBuZSBmb25jdGlvbm5haXQgcGFzOyDDoCB0ZXN0ZXIuXHJcblx0Ly8gdW4gb2JqZXQgY29udGVuYW50IHVuZSBwcm9wcmnDqXTDqSBuZSBzZW1ibGUgcGFzIMOqdHJlIHN1cHBvcnTDqS5cclxuXHQvLyBUZXN0ZXIgaHR0cDovL2Vpc2VuYmVyZ2VmZmVjdC5ibHVlc3BpcmUuY29tL2F1cmVsaWEtY29tcHV0ZWQvXHJcblx0QGNvbXB1dGVkRnJvbSgnYnVzaW5lc3MubmFtZScsICdidXNpbmVzcy5zaG9ydE5hbWUnKVxyXG5cdGdldCBjb21wbGV0ZU5hbWUoKSB7XHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuYnVzaW5lc3MubmFtZTtcclxuXHRcdGlmICghXy5pc0VtcHR5KHRoaXMuYnVzaW5lc3Muc2hvcnROYW1lKSkge1xyXG5cdFx0ICBuYW1lICs9IGAgKCR7dGhpcy5idXNpbmVzcy5zaG9ydE5hbWV9KWA7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmFtZTtcclxuICB9XHJcblxyXG5cdGVkaXRFbnRpdHkoKSB7XHJcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKG5ldyBFZGl0RW50aXR5KHRoaXMubWV0YWRhdGEsIHRoaXMuYnVzaW5lc3MpKTtcclxuXHR9XHJcbn0iXX0=