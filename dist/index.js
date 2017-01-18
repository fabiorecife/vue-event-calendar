(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueEventCalendar"] = factory();
	else
		root["VueEventCalendar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  en: {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'All Events',
    notHaveEvents: 'Not Have Events'
  },
  zh: {
    dayNames: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    format: 'yyyy年MM月',
    fullFormat: 'yyyy年MM月dd日',
    dayEventsTitle: '全部事件',
    notHaveEvents: '没有事件'
  },
  pt: {
     dayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    monthNames: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    format: 'MM/yyyy',
    fullFormat: 'dd/MM/yyyy',
    dayEventsTitle: 'Todos os Eventos',
    notHaveEvents: 'Não têm eventos'
  }
};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = dateTimeFormatter;
function dateTimeFormatter(date, format) {
  // 时间格式化辅助函数 date:毫秒数 format:'yyyy-MM-dd hh:mm:ss'
  if (!date || date == "") {
    return "";
  }

  if (typeof date === "string") {
    var mts = date.match(/(\/Date\((\d+)\)\/)/);
    if (mts && mts.length >= 3) {
      date = parseInt(mts[2]);
    }
  }

  date = new Date(date);
  if (!date || date.toUTCString() == "Invalid Date") {
    return "";
  }

  var map = {
    "M": date.getMonth() + 1, //月份
    "d": date.getDate(), //日
    "h": date.getHours(), //小时
    "m": date.getMinutes(), //分
    "s": date.getSeconds(), //秒
    "q": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };

  format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
    var v = map[t];
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v;
        v = v.substr(v.length - 2);
      }
      return v;
    } else if (t === 'y') {
      return (date.getFullYear() + '').substr(4 - all.length);
    }
    return all;
  });

  return format;
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(11)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			configurable: false,
			get: function() { return module.l; }
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			configurable: false,
			get: function() { return module.i; }
		});
		module.webpackPolyfill = 1;
	}
	return module;
}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(7)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(13)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('h3', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.index + 1) + ". " + _vm._s(_vm.event.title))]), _vm._v(" "), _c('p', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.dateTimeFormatter(Date.parse(new Date(_vm.event.date)), _vm.i18n[_vm.locale].fullFormat)))]), _vm._v(" "), _c('p', {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.event.desc))])])
},staticRenderFns: []}

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "__vev_calendar-wrapper"
  }, [_c('cal-panel', {
    attrs: {
      "events": _vm.events,
      "calendar": _vm.calendarOptions
    },
    on: {
      "cur-day-changed": _vm.handleChangeCurDay
    }
  }), _vm._v(" "), _c('cal-events', {
    attrs: {
      "dayEvents": _vm.selectdDayEvents,
      "locale": _vm.calendarOptions.options.locale,
      "color": _vm.calendarOptions.options.color
    }
  }, [_vm._t("default", null, {
    showEvents: _vm.selectdDayEvents.events
  })], 2)], 1)
},staticRenderFns: []}

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "events-wrapper",
    style: (_vm.bgColor)
  }, [_c('h2', {
    staticClass: "date"
  }, [_vm._v("\n    " + _vm._s(_vm.dayEventsTitle) + "\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "cal-events"
  }, [_vm._t("default", _vm._l((_vm.events), function(event, index) {
    return _c('div', {
      staticClass: "event-item"
    }, [_c('cal-event-item', {
      attrs: {
        "event": event,
        "index": index,
        "locale": _vm.locale
      }
    })], 1)
  }))], 2)])
},staticRenderFns: []}

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cal-wrapper"
  }, [_c('div', {
    staticClass: "cal-header"
  }, [_c('div', {
    staticClass: "l",
    on: {
      "click": _vm.preMonth
    }
  }, [_c('div', {
    staticClass: "arrow-left icon"
  }, [_vm._v(" ")])]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.curYearMonth))]), _vm._v(" "), _c('div', {
    staticClass: "r",
    on: {
      "click": _vm.nextMonth
    }
  }, [_c('div', {
    staticClass: "arrow-right icon"
  }, [_vm._v(" ")])])]), _vm._v(" "), _c('div', {
    staticClass: "cal-body"
  }, [_c('div', {
    staticClass: "weeks"
  }, _vm._l((_vm.i18n[_vm.calendar.options.locale].dayNames), function(dayName) {
    return _c('span', {
      staticClass: "item"
    }, [_vm._v(_vm._s(dayName))])
  })), _vm._v(" "), _c('div', {
    staticClass: "dates"
  }, _vm._l((_vm.dayList), function(date) {
    return _c('div', {
      staticClass: "item",
      class: {
        today: date.status ? (_vm.today == date.date) : false,
          event: date.status ? (date.title != undefined) : false
      }
    }, [_c('p', {
      staticClass: "date-num",
      style: ({
        color: (date.title != undefined) ? _vm.calendar.options.color : 'inherit'
      }),
      on: {
        "click": function($event) {
          _vm.handleChangeCurday(date)
        }
      }
    }, [_vm._v(_vm._s(date.status ? date.date.split('/')[2] : ' '))]), _vm._v(" "), (date.status ? (_vm.today == date.date) : false) ? _c('span', {
      staticClass: "is-today",
      style: (_vm.style.todayStyle)
    }) : _vm._e(), _vm._v(" "), (date.status ? (date.title != undefined) : false) ? _c('span', {
      staticClass: "is-event",
      style: (_vm.style.eventStyle)
    }) : _vm._e()])
  }))])])
},staticRenderFns: []}

/***/ },
/* 11 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  props: {
    event: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    locale: {
      type: String,
      required: true
    }
  },
  methods: {
    dateTimeFormatter: __WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */]
  }
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue__);
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
  name: 'cal-events',
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  components: {
    'cal-event-item': __WEBPACK_IMPORTED_MODULE_2__cal_event_item_vue___default.a
  },
  props: {
    dayEvents: {
      type: Object,
      required: true
    },
    locale: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    dayEventsTitle: function dayEventsTitle() {
      if (this.dayEvents.date !== 'all') {
        if (this.dayEvents.events.length !== 0) {
          var tempDate = Date.parse(new Date(this.dayEvents.events[0].date));
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */])(tempDate, __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].fullFormat);
        } else {
          return this.dayEvents.date + __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].notHaveEvents;
        }
      } else {
        return __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */][this.locale].dayEventsTitle;
      }
    },
    events: function events() {
      return this.dayEvents.events;
    },
    bgColor: function bgColor() {
      return { backgroundColor: this.color };
    }
  },
  methods: {
    dateTimeFormatter: __WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */]
  }
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__i18n_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var inBrowser = typeof window !== 'undefined';
/* harmony default export */ exports["default"] = {
  name: 'cal-panel',
  data: function data() {
    return {
      i18n: __WEBPACK_IMPORTED_MODULE_0__i18n_js__["a" /* default */]
    };
  },

  props: {
    events: {
      type: Array,
      required: true
    },
    calendar: {
      type: Object,
      required: true
    }
  },
  computed: {
    dayList: function dayList() {
      var firstDay = new Date(this.calendar.params.curYear + '/' + (this.calendar.params.curMonth + 1) + '/01');
      var startTimestamp = firstDay - 1000 * 60 * 60 * 24 * firstDay.getDay();
      var item = void 0,
          status = void 0,
          tempArr = [],
          tempItem = void 0;

      for (var i = 0; i < 42; i++) {
        item = new Date(startTimestamp + i * 1000 * 60 * 60 * 24);
        if (this.calendar.params.curMonth === item.getMonth()) {
          status = 1;
        } else {
          status = 0;
        }
        tempItem = {
          date: item.getFullYear() + '/' + (item.getMonth() + 1) + '/' + item.getDate(),
          status: status
        };
        this.events.forEach(function (event) {
          if (event.date === tempItem.date) {
            tempItem.title = event.title;
            tempItem.desc = event.desc || '';
          }
        });
        tempArr.push(tempItem);
      }
      return tempArr;
    },
    today: function today() {
      var dateObj = new Date();
      return dateObj.getFullYear() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getDate();
    },
    curYearMonth: function curYearMonth() {
      var tempDate = Date.parse(new Date(this.calendar.params.curYear + '/' + (this.calendar.params.curMonth + 1) + '/01'));
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* dateTimeFormatter */])(tempDate, this.i18n[this.calendar.options.locale].format);
    },
    style: function style() {
      var style = {
        todayStyle: {
          backgroundColor: this.calendar.options.color,
          borderColor: this.calendar.options.color
        },
        eventStyle: {
          borderColor: this.calendar.options.color
        }
      };
      return style;
    }
  },
  methods: {
    nextMonth: function nextMonth() {
      this.$EventCalendar.nextMonth();
    },
    preMonth: function preMonth() {
      this.$EventCalendar.preMonth();
    },
    handleChangeCurday: function handleChangeCurday(date) {
      if (date.title != undefined) {
        this.$emit('cur-day-changed', date.date);
      }
    }
  }
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue__);
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var inBrowser = typeof window !== 'undefined';
/* harmony default export */ exports["default"] = {
  name: 'vue-event-calendar',
  components: {
    'cal-events': __WEBPACK_IMPORTED_MODULE_0__components_cal_events_vue___default.a,
    'cal-panel': __WEBPACK_IMPORTED_MODULE_1__components_cal_panel_vue___default.a
  },
  data: function data() {
    return {
      selectdDayEvents: {
        date: 'all',
        events: this.events || [] //default show all event
      }
    };
  },

  props: {
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    calendarOptions: function calendarOptions() {
      var dateObj = new Date();
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA;
      } else {
        return {
          options: {
            locale: 'en', //zh
            color: ' #f29543'
          },
          params: {
            curYear: dateObj.getFullYear(),
            curMonth: dateObj.getMonth(),
            curDate: dateObj.getDate(),
            curEventsDate: 'all'
          }
        };
      }
    },
    calendarParams: function calendarParams() {
      var dateObj = new Date();
      if (inBrowser) {
        return window.VueCalendarBarEventBus.CALENDAR_EVENTS_DATA.params;
      } else {
        return {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: dateString
        };
      }
    }
  },
  created: function created() {
    if (this.calendarParams.curEventsDate !== 'all') {
      this.handleChangeCurDay(this.calendarParams.curEventsDate);
    }
  },

  methods: {
    handleChangeCurDay: function handleChangeCurDay(date) {
      this.selectdDayEvents = {
        date: date,
        events: this.events.filter(function (event) {
          if (event.date === date) {
            return true;
          } else {
            return false;
          }
        })
      };
    }
  },
  watch: {
    calendarParams: function calendarParams() {
      if (this.calendarParams.curEventsDate !== 'all') {
        this.handleChangeCurDay(this.calendarParams.curEventsDate);
      }
    },
    events: function events() {
      this.selectdDayEvents = {
        date: 'all',
        events: this.events || []
      };
    }
  }
};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue__);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isVueNext = Vue.version.split('.')[0] === '2';
  var inBrowser = typeof window !== 'undefined';

  var DEFAULT_OPTION = {
    locale: 'zh', //en
    color: ' #f29543'
  };
  var Calendar = {
    $vm: null,
    bindEventBus: function bindEventBus(vm) {
      this.$vm = vm;
    },
    toDate: function toDate(dateString) {
      var dateArr = dateString.split('/');
      dateArr = dateArr.map(function (item) {
        return parseInt(item, 10);
      });
      this.$vm.CALENDAR_EVENTS_DATA.params = {
        curYear: dateArr[0],
        curMonth: dateArr[1] - 1,
        curDate: dateArr[2],
        curEventsDate: dateString
      };
    },
    nextMonth: function nextMonth() {
      if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth < 11) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth++;
      } else {
        this.$vm.CALENDAR_EVENTS_DATA.params.curYear++;
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 0;
      }
    },
    preMonth: function preMonth() {
      if (this.$vm.CALENDAR_EVENTS_DATA.params.curMonth > 0) {
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth--;
      } else {
        this.$vm.CALENDAR_EVENTS_DATA.params.curYear--;
        this.$vm.CALENDAR_EVENTS_DATA.params.curMonth = 11;
      }
    }
  };

  var calendarOptions = Object.assign(DEFAULT_OPTION, options);
  var dateObj = new Date();
  var VueCalendarBarEventBus = new Vue({
    data: {
      CALENDAR_EVENTS_DATA: {
        options: calendarOptions,
        params: {
          curYear: dateObj.getFullYear(),
          curMonth: dateObj.getMonth(),
          curDate: dateObj.getDate(),
          curEventsDate: 'all'
        }
      }
    }
  });

  if (inBrowser) {
    window.VueCalendarBarEventBus = VueCalendarBarEventBus;
    Calendar.bindEventBus(VueCalendarBarEventBus);
  }

  Vue.component('vue-event-calendar', __WEBPACK_IMPORTED_MODULE_0__vue_event_calendar_vue___default.a);

  Vue.prototype.$EventCalendar = Calendar;
}

if (( false ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
  module.exports.install = install;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }
/******/ ]);
});
//# sourceMappingURL=index.js.map