System.register(['lodash', 'aurelia-framework', 'skyy/web-components/messages', 'skyy/web-components/entity-component'], function (_export) {
	'use strict';

	var _, computedFrom, EditEntity, EntityComponent, NameColumn;

	var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	return {
		setters: [function (_lodash) {
			_ = _lodash['default'];
		}, function (_aureliaFramework) {
			computedFrom = _aureliaFramework.computedFrom;
		}, function (_skyyWebComponentsMessages) {
			EditEntity = _skyyWebComponentsMessages.EditEntity;
		}, function (_skyyWebComponentsEntityComponent) {
			EntityComponent = _skyyWebComponentsEntityComponent.EntityComponent;
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
						this.publish(new EditEntity(this.business));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21EQUthLFVBQVU7Ozs7Ozs7Ozs7Ozs7O29DQUpmLFlBQVk7OzJDQUNaLFVBQVU7O3VEQUNWLGVBQWU7OztBQUVWLGFBQVU7YUFBVixVQUFVOzJCQUFWLFVBQVU7O2dDQUFWLFVBQVU7OztjQUFWLFVBQVU7OzBCQUFWLFVBQVU7O1lBYVosc0JBQUc7QUFDWixVQUFJLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQzVDOzs7a0JBWEEsWUFBWSxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztVQUNwQyxlQUFHO0FBQ2xCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzlCLFVBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDdkMsV0FBSSxXQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxNQUFHLENBQUM7T0FDekM7QUFDRCxhQUFPLElBQUksQ0FBQztNQUNYOzs7V0FYVSxVQUFVO01BQVMsZUFBZTs7eUJBQWxDLFVBQVUiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFZGl0RW50aXR5fSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL21lc3NhZ2VzJztcbmltcG9ydCB7RW50aXR5Q29tcG9uZW50fSBmcm9tICdza3l5L3dlYi1jb21wb25lbnRzL2VudGl0eS1jb21wb25lbnQnO1xuXG5leHBvcnQgY2xhc3MgTmFtZUNvbHVtbiBleHRlbmRzIEVudGl0eUNvbXBvbmVudCB7XG5cdC8vIFRPRE8gOiBAY29tcHV0ZWRGcm9tIG5lIGZvbmN0aW9ubmFpdCBwYXM7IMOgIHRlc3Rlci5cblx0Ly8gdW4gb2JqZXQgY29udGVuYW50IHVuZSBwcm9wcmnDqXTDqSBuZSBzZW1ibGUgcGFzIMOqdHJlIHN1cHBvcnTDqS5cblx0Ly8gVGVzdGVyIGh0dHA6Ly9laXNlbmJlcmdlZmZlY3QuYmx1ZXNwaXJlLmNvbS9hdXJlbGlhLWNvbXB1dGVkL1xuXHRAY29tcHV0ZWRGcm9tKCdidXNpbmVzcy5uYW1lJywgJ2J1c2luZXNzLnNob3J0TmFtZScpXG5cdGdldCBjb21wbGV0ZU5hbWUoKSB7XG5cdFx0bGV0IG5hbWUgPSB0aGlzLmJ1c2luZXNzLm5hbWU7XG5cdFx0aWYgKCFfLmlzRW1wdHkodGhpcy5idXNpbmVzcy5zaG9ydE5hbWUpKSB7XG5cdFx0ICBuYW1lICs9IGAgKCR7dGhpcy5idXNpbmVzcy5zaG9ydE5hbWV9KWA7XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuICB9XG5cblx0ZWRpdEVudGl0eSgpIHtcblx0XHR0aGlzLnB1Ymxpc2gobmV3IEVkaXRFbnRpdHkodGhpcy5idXNpbmVzcykpO1xuXHR9XG59Il19