System.register(['core-js'], function (_export) {
	'use strict';

	var MyWidget;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_coreJs) {}],
		execute: function () {
			MyWidget = (function () {
				function MyWidget() {
					_classCallCheck(this, MyWidget);
				}

				_createClass(MyWidget, [{
					key: 'activate',
					value: function activate(model) {
						Object.assign(this, model);
					}
				}, {
					key: 'cancel',
					value: function cancel() {
						var _this = this;

						setTimeout(function () {
							return _this.metadata.isVisible = false;
						}, 0);
					}
				}]);

				return MyWidget;
			})();

			_export('MyWidget', MyWidget);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0tBRWEsUUFBUTs7Ozs7Ozs7O0FBQVIsV0FBUTthQUFSLFFBQVE7MkJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7O1lBQ1osa0JBQUMsS0FBSyxFQUFFO0FBQ2YsWUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0I7OztZQUVLLGtCQUFHOzs7QUFDUixnQkFBVSxDQUFDO2NBQU0sTUFBSyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUs7T0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ3JEOzs7V0FQVyxRQUFROzs7dUJBQVIsUUFBUSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdjb3JlLWpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNeVdpZGdldCB7XHJcblx0YWN0aXZhdGUobW9kZWwpIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgbW9kZWwpO1xyXG5cdH1cclxuXHJcblx0Y2FuY2VsKCkge1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB0aGlzLm1ldGFkYXRhLmlzVmlzaWJsZSA9IGZhbHNlLCAwKTtcclxuXHR9XHJcbn0iXX0=