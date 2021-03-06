'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _task_message = require('./task_message');

var _task_message2 = _interopRequireDefault(_task_message);

var _gulpUtil = require('gulp-util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Error Message
 * An error message triggered from a gulp task. Just formats most things red.
 *
 * @class
 * @extends {TaskMessage}
 * @property {Message} message - Instance to the message pieces
 * @property {string} type - Type of message this instance is
 * @property {string} plugin - Name of plugin log statement was called from
 * @property {string} icon - icon string to prepend when sending
 */

var ErrorMessage = (function (_TaskMessage) {
  _inherits(ErrorMessage, _TaskMessage);

  function ErrorMessage(plugin) {
    _classCallCheck(this, ErrorMessage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorMessage).call(this, plugin));
    // Call the parent constructor with the plugin & set the icon

    _this.icon = _this.color('⨉');
    _this.type = 'error';
    return _this;
  }

  /**
   * Action
   * Formats the action string red by calling the parent method with
   * a red formatted string.
   *
   * @method
   * @public
   * @param {string} str - Error string to show
   * @returns {ErorMessage} Chainable instance ref to this
   */

  _createClass(ErrorMessage, [{
    key: 'action',
    value: function action(str) {
      return _get(Object.getPrototypeOf(ErrorMessage.prototype), 'action', this).call(this, this.color('ERROR: ' + str));
    }

    /**
     * Color
     * A method to remove any previously set colors and format it as red.
     *
     * @method
     * @public
     * @param {string} str - Text input
     * @returns {string} Red colored terminal text
     */

  }, {
    key: 'color',
    value: function color(str) {
      return _gulpUtil.colors.red.bold(_gulpUtil.colors.stripColor(str));
    }

    /**
     * Text
     * Formats a basic text string red by calling the parent method with
     * a red formatted string.
     *
     * @method
     * @public
     * @param {string} str - Error string to show
     * @returns {ErorMessage} Chainable instance ref to this
     */

  }, {
    key: 'text',
    value: function text(str) {
      return _get(Object.getPrototypeOf(ErrorMessage.prototype), 'text', this).call(this, this.color(str));
    }
  }]);

  return ErrorMessage;
})(_task_message2.default);

exports.default = ErrorMessage;