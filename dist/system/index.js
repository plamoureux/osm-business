System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, Editor;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      Editor = (function () {
        function Editor() {
          _classCallCheck(this, _Editor);
        }

        var _Editor = Editor;
        Editor = bindable('content')(Editor) || Editor;
        Editor = bindable('mode')(Editor) || Editor;
        return Editor;
      })();

      _export('Editor', Editor);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQU1hLE1BQU07Ozs7OzttQ0FOWCxRQUFROzs7QUFNSCxZQUFNO2lCQUFOLE1BQU07Ozs7c0JBQU4sTUFBTTtBQUFOLGNBQU0sR0FGbEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUVQLE1BQU0sS0FBTixNQUFNO0FBQU4sY0FBTSxHQUhsQixRQUFRLENBQUMsTUFBTSxDQUFDLENBR0osTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG4vL2ltcG9ydCB7QnVzaW5lc3NMaXN0UGFnZX0gZnJvbSAnLi9idXNpbmVzcy1saXN0LXBhZ2UnOyAvL1xuQGJpbmRhYmxlKCdtb2RlJylcbkBiaW5kYWJsZSgnY29udGVudCcpXG4vL0BpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xuXG59Il19