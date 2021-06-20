(self["webpackChunk"] = self["webpackChunk"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['pageNumber'],
  data: function data() {
    return {
      currentPage: 0,
      page: 1,
      increment: 3
    };
  },
  methods: {
    next: function next(num) {
      /* if( num > this.page && this.currentPage <= Math.ceil(this.pageNumber / this.increment) ) {
           this.currentPage = (this.currentPage + this.increment
      //                    console.log(this.currentPage);
        }
       if( num < this.page && this.currentPage >= Math.ceil(this.pageNumber / this.increment) ){
           this.currentPage = this.currentPage - this.increment
       }*/
      this.currentPage = num === 1 ? 0 : (num - 1) * 3;
      this.page = num;
      this.$emit('clicked', {
        currentPage: this.currentPage,
        increment: this.increment
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  validations: {
    password: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      minLength: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6)
    },
    repeatPassword: {
      sameAsPassword: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('password')
    }
  },
  data: function data() {
    return {
      snackbar: false,
      timeout: 8000,
      title: 'Activate',
      code: '',
      reset: '',
      id: '',
      password: '',
      repeatPassword: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])), {}, {
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push('Password must be at most 6 characters long');
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    },
    repeatPasswordErrors: function repeatPasswordErrors() {
      var errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords don\'t match');
      return errors;
    }
  }),
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.errors = newCount;
    }
  },
  methods: {
    submit: function submit() {
      var data = {
        id: this.id,
        password: this.password,
        password_confirmation: this.password
      };

      if (this.$v.$invalid) {
        this.$store.commit('MESSAGE', 'Invalid data.');
        this.snackbar = true;
      } else {
        this.$store.commit('MESSAGE', 'Resetting...');
        this.$store.dispatch('setPassword', data);
      }

      this.$v.$touch();
    }
  },
  beforeMount: function beforeMount() {},
  created: function created() {
    this.code = this.$route.params.code;
    this.reset = this.$route.query.reset;
    this.id = this.$route.params.code.substr(0, this.$route.params.code.indexOf('!'));
    console.log(this.id); //this.$store.commit('MESSAGE', 'Activating...')

    if (this.code) {
      this.$store.dispatch('activateUser', this.code);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./dashboard-hr-master/resources/js/hr-system/router.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  validations: {
    email: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      email: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    name: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    company: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    surname: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      name: '',
      surname: '',
      company: '',
      email: '',
      password: '',
      repeatPassword: '',
      errors: '',
      snackbar: false,
      y: 'bottom',
      x: null,
      mode: '',
      timeout: 8000,
      redirect: false,
      loading: false,
      loader: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])), {}, {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('Name is required.');
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    surnameErrors: function surnameErrors() {
      var errors = [];
      if (!this.$v.surname.$dirty) return errors;
      !this.$v.surname.required && errors.push('Last name is required.');
      return errors;
    },
    companyErrors: function companyErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('Company name is required.');
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    }
  }),
  watch: {
    message: function message(newCount, oldCount) {
      // Our fancy notification (2).
      // if(newCount !== oldCount) {
      this.snackbar = true;
      this.loading = false;

      if (newCount === 'Account has been creared successfully') {
        this.clear();
        _router__WEBPACK_IMPORTED_MODULE_1__.default.push({
          name: 'login',
          params: {
            success: true
          }
        });
      } // }

    }
  },
  methods: {
    submit: function submit() {
      var random = Math.random().toString(36).slice(-8);
      var user = {
        name: this.name,
        surname: this.surname,
        company_name: this.company,
        email: this.email,
        password: random,
        password_confirmation: random,
        is_superuser: 1,
        creator: true
      };
      /*
                       for (let p of user) {
                           console.log( p[1]);
                       }*/

      if (this.$v.$invalid) {
        this.$store.commit('MESSAGE', 'Invalid data.');
        this.snackbar = true;
      } else {
        this.loading = true;
        this.$store.commit('MESSAGE', 'Registering...');
        this.$store.dispatch('registerUser', user);
      }

      this.$v.$touch();
    },
    clear: function clear() {
      this.$v.$reset();
      this.name = '';
      this.surname = '';
      this.email = '';
      this.password = '';
      this.company = '';
      this.repeatPassword = '';
      return _router__WEBPACK_IMPORTED_MODULE_1__.default.push({
        name: 'login',
        params: {
          success: true
        }
      });
    }
  },
  beforeMount: function beforeMount() {
    if (this.$store.getters.token) {
      return _router__WEBPACK_IMPORTED_MODULE_1__.default.push({
        name: 'profile'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Users_AllUsers_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users/AllUsers.vue */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue");
/* harmony import */ var _Holidays_AllHolidays_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Holidays/AllHolidays.vue */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue");
/* harmony import */ var _Departments_AllDepartments_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Departments/AllDepartments.vue */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue");
/* harmony import */ var _Kudos_AllKudos_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Kudos/AllKudos.vue */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      timeout: 6000,
      snackbar: false,
      errors: '',
      is_superuser: 0,
      active: '',
      invoice: '',
      views: ['All', 'Employees', 'Holidays', 'Departments', 'Kudos', 'Subscription'],
      selectedView: 'All'
    };
  },
  components: {
    AllUsers: _Users_AllUsers_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    AllHolidays: _Holidays_AllHolidays_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    AllDepartments: _Departments_AllDepartments_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    AllKudos: _Kudos_AllKudos_vue__WEBPACK_IMPORTED_MODULE_4__.default
  },
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.errors = newCount;
    },
    subscriptionStatus: function subscriptionStatus(newStatus, oldStatus) {
      this.active = newStatus;
    }
  },
  computed: _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message', 'subscriptionStatus'])),
  methods: {
    onSelect: function onSelect(selectObj) {
      this.selectedView = selectObj;
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    var period_end = this.$store.getters.companyName.current_period_end;
    var today = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date()).format('YYYY-MM-DD');

    if (!period_end) {
      this.$router.push({
        name: 'subscribe'
      });
    }

    if (today > period_end) {
      var data = {
        stripe_id: this.$store.getters.companyName.stripe_id,
        user_id: this.$store.getters.companyName.user_id
      };
      this.$store.dispatch('checkSubscription', data);
    } else {
      this.active = false;
    }

    if (this.$store.getters.companyName.is_superuser !== 1) {
      this.$router.push({
        name: 'profile'
      });
    }
  },
  mounted: function mounted() {
    this.is_superuser = this.$store.getters.companyName.is_superuser;
    this.invoice = this.$store.getters.companyName.invoice ? this.$store.getters.companyName.invoice : '';
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/daygrid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      today: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().format('YYYY-MM-DD'),
      calendarPlugins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/daygrid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
      timeout: 6000,
      snackbar: false,
      errors: '',
      is_superuser: 0,
      company_name: '',
      user_name: '',
      user_id: ''
    };
  },
  components: {
    dayGridPlugin: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/daygrid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    FullCalendar: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@fullcalendar/vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) // make the <FullCalendar> tag available

  },
  watch: {
    message: function message(newCount, oldCount) {
      console.log(newCount);
      this.snackbar = true;
      this.errors = newCount;
    },
    holidays: function holidays(n, o) {
      console.log(n);
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])), {}, {
    events: function events() {
      var events = [];
      this.$store.getters.holidays.map(function (h) {
        events.push({
          title: h.name,
          start: h.start_date,
          end: h.end_date
        });
      });
      return events;
    }
  }),
  methods: {},
  beforeMount: function beforeMount() {
    var data = {
      getUrl: 'holidays/company/',
      commit: 'GET_HOLIDAYS'
    };
    this.$store.dispatch('get', data);
    this.$store.dispatch('checkToken');
    var period_end = this.$store.getters.companyName.current_period_end;
    var today = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date()).format('YYYY-MM-DD');

    if (!period_end || today > period_end) {
      this.$router.push({
        name: 'subscribe'
      });
    }
  },
  mounted: function mounted() {
    this.is_superuser = this.$store.getters.companyName.is_superuser;
    this.company_name = this.$store.getters.companyName.company_name;
    this.user_name = this.$store.getters.companyName.name;
    this.user_id = this.$store.getters.companyName.user_id;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Holidays_AllHolidays_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Holidays/AllHolidays.vue */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue");
/* harmony import */ var _Kudos_AllKudos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Kudos/AllKudos */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue");
/* harmony import */ var _Departments_AllDepartments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Departments/AllDepartments */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue");
/* harmony import */ var _Users_AllUsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Users/AllUsers */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      timeout: 6000,
      snackbar: false,
      errors: '',
      is_superuser: 0,
      company_name: '',
      user_name: '',
      user_id: '',
      supervisor: false,
      views: ['All', 'Employees', 'Holidays', 'Departments', 'Kudos'],
      selectedView: 'All',
      user: '',
      department: ''
    };
  },
  components: {
    AllHolidays: _Holidays_AllHolidays_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    AllKudos: _Kudos_AllKudos__WEBPACK_IMPORTED_MODULE_2__.default,
    AllDepartments: _Departments_AllDepartments__WEBPACK_IMPORTED_MODULE_3__.default,
    AllUsers: _Users_AllUsers__WEBPACK_IMPORTED_MODULE_4__.default
  },
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.errors = newCount;
    }
  },
  computed: _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])),
  methods: {
    onSelect: function onSelect(selectObj) {
      this.selectedView = selectObj;
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    var period_end = this.$store.getters.companyName.current_period_end;
    var today = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date()).format('YYYY-MM-DD');

    if (!period_end) {
      this.$router.push({
        name: 'subscribe'
      });
    }

    if (today > period_end) {
      var data = {
        stripe_id: this.$store.getters.companyName.stripe_id,
        user_id: this.$store.getters.companyName.user_id
      };
      this.$store.dispatch('checkSubscription', data);
    }
  },
  mounted: function mounted() {
    console.log(this.$store.getters.companyName);
    this.is_superuser = this.$store.getters.companyName.is_superuser;
    this.supervisor = this.$store.getters.companyName.user_id === this.$store.getters.companyName.supervisor;
    this.company_name = this.$store.getters.companyName.company_name;
    this.user_name = this.$store.getters.companyName.name;
    this.user = this.$store.getters.companyName;
    this.user_id = this.$store.getters.companyName.user_id;
    this.department = _.filter(this.$store.getters.departments, {
      id: this.user.department_id
    })[0].department_name;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  props: ['singleUser'],
  validations: {
    name: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      name: '',
      userId: '',
      company_id: '',
      employees: {},
      head: ''
    };
  },
  watch: {},
  computed: {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    users: function users() {
      var users = this.$store.getters.AllUsers;
      var values = [];
      users.map(function (u) {
        values.push({
          name: u.user_name,
          user_id: u.user_id,
          select: {
            name: u.name + ' ' + u.surname,
            id: u.user_id,
            email: u.email
          },
          department: u.department
        });
      }); //  let g = _.filter(values, {department_id: 0});
      // return g;

      return this.$store.getters.AllUsers.length > 0 ? this.$store.getters.AllUsers : [];
    }
  },
  methods: {
    onSelect: function onSelect(selectObj) {
      this.userId = selectObj;
    },
    onSelectMultiple: function onSelectMultiple(selectObj) {
      this.employees = selectObj;
    },
    submit: function submit() {
      var userId = this.userId;
      var all = this.employees;
      all.push(userId);

      if (this.userId && this.name) {
        var data = {
          head: userId,
          department_name: this.name,
          company_id: this.company_id,
          employees: all,
          postUrl: 'departments/add',
          getUrl: 'departments/company/',
          commit: 'GET_DEPARTMENTS'
        };
        this.$store.commit('MESSAGE', 'Adding...');
        this.$store.dispatch('post', data);
        this.$emit('clicked', false);
        this.clear();
      }
    },
    clear: function clear() {
      this.name = '';
      this.employees = {};
      this.head = '';
    }
  },
  mounted: function mounted() {
    var data = {
      getUrl: 'users/company/',
      commit: 'GET_ALL_USERS'
    };
    this.$store.dispatch('get', data);
    this.company_id = this.$store.getters.companyName.company_id;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _EditDepartment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDepartment */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue");
/* harmony import */ var _AddDepartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddDepartment */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tree */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['single'],
  data: function data() {
    return {
      timeout: 6000,
      snackbar: false,
      errors: '',
      dialog: false,
      dialogEdit: false,
      dialogAddDepartment: false,
      dialogTree: false,
      id: '',
      name: '',
      user: '',
      currentUser: 0,
      pageNumber: 0,
      currentPage: 0,
      increment: 3,
      department: '',
      is_superuser: '',
      departmentName: '',
      company_name: '',
      load: true
    };
  },
  components: {
    EditDepartment: _EditDepartment__WEBPACK_IMPORTED_MODULE_1__.default,
    AddDepartment: _AddDepartment__WEBPACK_IMPORTED_MODULE_2__.default,
    Tree: _Tree__WEBPACK_IMPORTED_MODULE_3__.default
  },
  watch: {
    departments: function departments(newCount, oldCount) {
      this.load = !newCount;
      this.pageNumber = newCount.length;
      this.snackbar = true;
      return newCount.length > 0 ? newCount : [];
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['departments'])), {}, {
    allDepartments: function allDepartments() {
      var d = this.$store.getters.departments.length > 0 ? this.$store.getters.departments : [];
      d.map(function (u) {
        if (!u.employees) {
          d.map(function (d) {
            if (d.id === u.id && d.employees) {
              u['head_name'] = d.head_name;
              u['head_surname'] = d.head_surname;
              u['employees'] = d.employees;
            }
          });
        }
      }); //let ud = _.uniqBy(d, 'id')

      this.pageNumber = d.length;
      return d;
    }
  }),
  methods: {
    format: function format(date) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date).format('DD MMM');
    },
    onNextDepartment: function onNextDepartment(value) {
      this.currentPage = value.currentPage;
      this.increment = value.increment;
    },
    onDepartmentUpdated: function onDepartmentUpdated(value) {
      this.dialogEdit = value;
    },
    onDepartmentAdded: function onDepartmentAdded(value) {
      this.dialogAddDepartment = value;
    },
    deleteDepartment: function deleteDepartment(department) {
      this.id = department.id;
      this.departmentName = department.department_name;
      this.dialog = true; // this.$store.dispatch('deleteUser', id)
    },
    deleteConfirmed: function deleteConfirmed() {
      this.dialog = false;
      this.$store.commit('MESSAGE', 'Deleting...');
      var data = {
        id: this.id,
        name: this.departmentName,
        postUrl: 'departments/delete/' + this.id,
        getUrl: 'departments/company/',
        commit: 'GET_DEPARTMENTS'
      };
      this.$store.dispatch('post', data);
    },
    editDepartment: function editDepartment(department) {
      this.dialogEdit = true;
      this.department = department;
    },
    addDepartment: function addDepartment() {
      this.dialogAddDepartment = true;
    },
    viewAll: function viewAll() {
      this.dialogTree = true;
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    this.is_superuser = this.$store.getters.companyName.is_superuser;
    this.company_name = this.$store.getters.companyName.company_name;
    this.currentUser = this.$store.getters.user.id;
  },
  mounted: function mounted() {
    var data = {
      getUrl: 'departments/company/',
      commit: 'GET_DEPARTMENTS'
    };
    this.$store.dispatch('get', data);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['department'],
  data: function data() {
    return {
      departmentName: '',
      headId: '',
      depEmployees: [],
      employees: [],
      items: [],
      values: [],
      allUsers: ''
    };
  },
  computed: {
    dep: function dep() {
      var values = [];

      if (this.department.employees && this.department.employees !== '') {
        var x = this.department.employees.split(';');
        x.map(function (s) {
          values.push({
            user_id: s.split(',')[0].toString(),
            name: s.split(',')[1]
          });
        });
      } else {
        values = [];
      }

      return values;
    },
    users: function users() {
      var users = this.$store.getters.AllUsers;
      this.allUsers = users;

      var g = _.groupBy(users, 'department_id');

      var key = this.department.id;
      this.depEmployees = g[key];
      return users;
    }
  },
  methods: {
    splitting: function splitting(obj) {
      var values = [];

      if (obj && obj !== '') {
        var x = obj.split(';');
        x.map(function (s) {
          values.push(s.split(',')[0].toString());
        });
      }

      return values;
    },
    onSelect: function onSelect(selectObj) {
      this.headId = selectObj;
    },
    onSelectMultiple: function onSelectMultiple(selectObj) {
      this.employees = selectObj.map(Number);
    },

    /*submit () {
         if(!_.isEqual(this.employees, this.splitting(this.department.employees) ) &&  this.employees.length > 0){
             console.log('not eql');
        }
         if(
            (this.headId && this.headId !== this.department.head_id) ||
            (this.departmentName  && this.departmentName !== this.department.name) ||
            (!_.isEqual(this.employees, this.splitting(this.department.employees) ) &&  this.employees.length > 0)
        ) {
            let data = {
                id:this.department.id ,
                head:  (this.headId && this.headId !== this.department.head_id) ? Number(this.headId) : '',
                department_name:  (this.departmentName  && this.departmentName !== this.department.name) ? this.departmentName : '',
                employees: (!_.isEqual(this.employees, this.splitting(this.department.employees) ) &&  this.employees.length > 0) ? this.employees : ''
            }
             this.$store.dispatch('editDepartment', data)
            this.$emit('clicked', false);
            this.clear()
       } */
    submit: function submit() {
      var values = [this.department.head_id];
      var users = this.$store.getters.AllUsers;
      this.allUsers = users;

      var g = _.groupBy(users, 'department');

      g[this.department.department_name] && Object.values(g[this.department.department_name]).map(function (u) {
        values.push(u.user_id);
      });

      if (this.headId && this.headId !== this.department.head_id || this.departmentName && this.departmentName !== this.department.name || this.employees.length > 0) {
        var data = {
          id: this.department.id,
          head: this.headId ? Number(this.headId) : this.department.head_id,
          department_name: this.departmentName !== '' ? this.departmentName : this.department.department_name,
          employees: this.employees.length > 0 ? this.employees : values,
          // to be converted to array
          old_head: this.department.head_id,
          postUrl: 'departments/edit/' + this.department.id,
          getUrl: 'departments/company/',
          commit: 'GET_DEPARTMENTS'
        };
        this.$store.commit('MESSAGE', 'Updating...');
        this.$store.dispatch('post', data);
        this.$emit('clicked', false);
        this.clear();
      }
    },
    clear: function clear() {}
  },
  created: function created() {//return items;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-tree-chart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: '',
      name: '',
      user: '',
      currentUser: 0,
      department: '',
      is_superuser: '',
      departmentName: ''
    };
  },
  components: {
    TreeChart: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-tree-chart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  watch: {},
  computed: {
    treeData: function treeData() {
      var children = [];
      var users = this.$store.getters.AllUsers;

      var g = lodash__WEBPACK_IMPORTED_MODULE_1___default().groupBy(users, 'department');

      var values = [];
      var o = [];
      Object.values(g).map(function (ga) {
        ga.map(function (v) {
          o.push({
            name: v.user_name,
            image_url: v.avatar ? v.avatar : "https://static.refined-x.com/avat1.jpg",
            department: v.department
          });
        });
      });

      var ng = lodash__WEBPACK_IMPORTED_MODULE_1___default().groupBy(o, 'department');

      Object.keys(ng).map(function (k) {
        /* children.push( {
             name: k,
             image_url: "https://static.refined-x.com/avat1.jpg",
             children: ng[k]
         })*/
      });
      var dep = this.$store.getters.departments.length > 0 ? this.$store.getters.departments : [];
      dep.map(function (h) {
        var ud = [];
        users.map(function (u) {
          if (u.department_id === h.id && h.head_id !== u.user_id) {
            ud.push({
              name: u.user_name,
              image_url: u.avatar ? u.avatar : __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
            });
          }
        });
        ud.length > 0 ? children.push({
          name: h.department_name + '(' + h.user_name + ')',
          image_url: h.avatar ? h.avatar : __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
          children: ud
        }) : children.push({
          name: h.department_name + '(' + h.user_name + ')',
          image_url: h.avatar ? h.avatar : __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
        });
      });
      var tree = {
        name: this.$store.getters.companyName.company_name,
        image_url: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/enterprise.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        children: children
      };
      return tree;
    }
  },
  methods: {},
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    this.is_superuser = this.$store.getters.companyName.is_superuser;
    this.currentUser = this.$store.getters.user.id;
  },
  mounted: function mounted() {
    var data = {
      getUrl: 'departments/company/',
      commit: 'GET_DEPARTMENTS'
    };
    this.$store.dispatch('get', data);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  validations: {
    email: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      email: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      snackbar: false,
      timeout: 8000,
      title: 'Activate',
      forgot: '',
      email: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])), {}, {
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    }
  }),
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.errors = newCount;
    }
  },
  methods: {
    submit: function submit() {
      this.errors = '';
      var user = {
        email: this.email
      };

      if (this.$v.$invalid) {
        this.$store.state.message = 'Invalid entry';
        this.snackbar = true;
      } else {
        this.$store.commit('MESSAGE', 'Resetting...');
        this.$store.dispatch('forgotPassword', user);
      }

      this.$v.$touch();
    }
  },
  beforeMount: function beforeMount() {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['singleUser'],
  data: function data() {
    return {
      radioGroupAm: 'am',
      radioGroup: 'full',
      displayAm: false,
      hApprover: '',
      select: {},
      date: null,
      dateEnd: null,
      menu: false,
      menuEnd: false,
      userId: '',
      min: "1950-01-01",
      type: 'Holiday',
      types: [{
        type_name: 'Holiday'
      }, {
        type_name: 'Sickness'
      }, {
        type_name: 'Others'
      }]
    };
  },
  watch: {
    radioGroup: function radioGroup() {
      this.displayAm = this.radioGroup === 'half';
    }
  },
  computed: {
    users: function users() {
      // return this.$store.getters.AllUsers.length > 0 ?  this.$store.getters.AllUsers : [];
      var values = [];
      console.log(this.$store.getters.AllUsers);
      this.$store.getters.AllUsers.map(function (u) {
        values.push({
          name: u.name,
          user_id: u.user_id,
          select: {
            name: u.name + ' ' + u.surname,
            id: u.user_id,
            email: u.email,
            left: u.holidays_left,
            approver: u.approver
          }
        });
      });
      return values;
    }
  },
  methods: {
    onSelectType: function onSelectType(selectObj) {
      this.type = selectObj;
    },
    save: function save(date) {
      this.$refs.menu.save(date);
      this.$refs.menuEnd.save(date);

      if (this.date) {
        this.min = this.date;
      }
    },
    onSelect: function onSelect(selectObj) {
      this.select = selectObj;
      var userId = this.singleUser ? this.singleUser : this.select.id;
      var allusers = this.$store.getters.AllUsers;

      var user = _.filter(allusers, {
        user_id: userId
      });

      console.log(user);
      var approver = user[0].holiday_approver !== 0 && allusers ? _.filter(allusers, {
        user_id: user[0].holiday_approver
      }) : '';
      var approverEmail = approver ? approver[0].user_id === userId ? '' : approver[0].email : '';
    },
    submit: function submit() {
      var userId = this.singleUser ? this.singleUser : this.select.id;
      var allusers = this.$store.getters.AllUsers;

      var user = _.filter(allusers, {
        user_id: userId
      });

      console.log(user);
      var approver = user[0].holiday_approver !== 0 && allusers ? _.filter(allusers, {
        user_id: user[0].holiday_approver
      }) : '';
      var approverEmail = approver ? approver[0].user_id === userId ? '' : approver[0].email : '';
      this.dateEnd = this.displayAm ? this.date : this.dateEnd;

      if (userId && this.date && this.dateEnd) {
        var data = {
          email: this.singleUser ? this.$store.getters.companyName.email : this.select.email,
          name: this.singleUser ? this.$store.getters.companyName.name : this.select.name,
          user_id: userId,
          start_date: this.date,
          end_date: this.dateEnd,
          count: this.radioGroup === 'full' ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.dateEnd).diff(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this.date), 'days') + 1 : 0.5,
          approved: this.$store.getters.companyName.is_superuser === 1 ? 'approved' : 'pending',
          type: this.type,
          full: this.radioGroup ? this.radioGroup : 'full',
          amPm: this.radioGroupAm ? this.radioGroupAm : 'am',
          approverEmail: approverEmail,
          postUrl: 'holidays/add/',
          getUrl: 'holidays/company/',
          commit: 'GET_HOLIDAYS'
        };
        console.log(data);
        return;
        this.$store.commit('MESSAGE', 'Adding...'); // this.$store.dispatch('addHoliday', data)

        this.$store.dispatch('post', data);
        this.$emit('clicked', false);
      }
    },
    clear: function clear() {}
  },
  mounted: function mounted() {
    var data = {
      getUrl: 'users/company/',
      commit: 'GET_ALL_USERS'
    };
    this.$store.dispatch('get', data);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _EditHoliday__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditHoliday */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue");
/* harmony import */ var _AddHoliday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddHoliday */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['single', 'team'],
  data: function data() {
    return {
      selected: [],
      allSelected: false,
      holidayIds: [],
      timeout: 6000,
      snackbar: false,
      errors: '',
      dialog: false,
      dialogEdit: false,
      dialogAddHoliday: false,
      id: '',
      name: '',
      user: '',
      currentUser: 0,
      pageNumber: 0,
      currentPage: 0,
      increment: 6,
      holiday: '',
      is_superuser: '',
      page: 1,
      circle: true,
      sortBy: ['approved', 'denied', 'pending', 'All'],
      actions: ['select all', 'unselect all', 'delete', 'archive'],
      selectedHoliday: '',
      total: '',
      holidaysObject: '',
      all: true,
      dialogArchive: false,
      multiple: false,
      load: true,
      show: "6"
    };
  },
  components: {
    EditHoliday: _EditHoliday__WEBPACK_IMPORTED_MODULE_1__.default,
    AddHoliday: _AddHoliday__WEBPACK_IMPORTED_MODULE_2__.default
  },
  watch: {
    holidays: function holidays(newCount, oldCount) {
      this.load = !newCount;
      this.pageNumber = newCount.length;
      this.snackbar = true;
      return newCount;
    },
    all: function all(n) {
      var a = this.actions;

      if (n) {
        this.actions = ['select all', 'unselect all', 'delete', 'archive'];
      } else {
        this.actions = ['select all', 'unselect all', 'delete', 'restore'];
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['holidays'])), {}, {
    holidays: function holidays() {
      var h;

      if (this.$store.getters.holidays.length > 0) {
        h = lodash__WEBPACK_IMPORTED_MODULE_3___default().sortBy(this.$store.getters.holidays, function (o) {
          // return  moment(o.start_date);
          return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(o.created_at);
        }).reverse();
      } else {
        h = [];
      }

      if (this.single) {
        h = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(h, ['user_id', this.single]);
      }

      if (this.team) {
        lodash__WEBPACK_IMPORTED_MODULE_3___default().remove(h, ['user_id', this.team]);

        h = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(h, ['supervisor', this.team]);
      }

      this.total = h.length;
      this.holidaysObject = h;
      return h;
    }
  }),
  methods: {
    onSelect: function onSelect(selectObj) {
      this.selectedHoliday = selectObj;
      var h = this.$store.getters.holidays;

      if (selectObj === 'All') {
        this.pageNumber = h.length;
        this.total = h.length;
      } else {
        h = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(h, {
          approved: selectObj
        });
        this.total = h.length;
        this.pageNumber = h.length;
      }
    },
    onShow: function onShow(selectObj) {
      this.show = selectObj;
      this.increment = Number(selectObj);
    },
    onSelectAction: function onSelectAction(selectObj) {
      var _this = this;

      if (selectObj === 'delete') {
        if (this.holidayIds.length > 0) {
          this.dialog = true;
          this.multiple = true;
        }
      }

      if (selectObj === 'archive' || selectObj === 'restore') {
        if (this.holidayIds.length > 0) {
          this.dialogArchive = true;
          this.multiple = true;
        }
      }

      if (selectObj === 'select all') {
        this.holidayIds = [];

        if (!this.allSelected) {
          this.holidaysObject.map(function (holiday, index) {
            if (index >= _this.currentPage && index < _this.currentPage + _this.increment) {
              if (_this.selectedHoliday && _this.selectedHoliday !== 'All') {
                holiday.approved === _this.selectedHoliday && _this.holidayIds.push(holiday.id);
              } else {
                _this.holidayIds.push(holiday.id);
              }
            }
          });
        }
      }

      if (selectObj === 'unselect all') {
        this.holidayIds = [];
      }
    },
    next: function next(page) {
      this.currentPage = page === 1 ? 0 : (page - 1) * this.increment;
    },
    format: function format(date) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date).format('DD MMM');
    },
    onNextHoliday: function onNextHoliday(value) {
      this.currentPage = value.currentPage;
      this.increment = value.increment;
    },
    countHoliday: function countHoliday(holiday) {
      var a = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(holiday.start_date);
      var b = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(holiday.end_date);
      return b.diff(a, 'days') + 1;
    },
    onHolidayUpdated: function onHolidayUpdated(value) {
      this.dialogEdit = value;
    },
    onHolidayAdded: function onHolidayAdded(value) {
      this.dialogAddHoliday = value;
    },
    deleteHoliday: function deleteHoliday(id) {
      this.id = id;
      this.dialog = true;
    },
    deleteConfirmed: function deleteConfirmed() {
      this.dialog = false;
      this.$store.commit('MESSAGE', 'Deleting...');
      var data = {
        id: this.id,
        postUrl: 'requests/delete/',
        getUrl: 'holidays/company/',
        commit: 'GET_HOLIDAYS'
      };

      if (this.multiple) {
        data['ids'] = this.holidayIds;
      }

      this.multiple = false;
      this.holidayIds = [];
      this.$store.dispatch('post', data);
      this.all = true;
    },
    archiveHoliday: function archiveHoliday(id) {
      this.dialogArchive = true;
      this.id = id;
    },
    archiveConfirmed: function archiveConfirmed() {
      this.dialogArchive = false;
      this.$store.commit('MESSAGE', 'Processing...');
      var data = {
        id: this.id,
        archive: this.all,
        postUrl: 'holiday/archive',
        getUrl: 'holidays/company/',
        commit: 'GET_HOLIDAYS'
      };

      if (this.multiple) {
        data['ids'] = this.holidayIds;
      }

      this.multiple = false;
      this.holidayIds = [];
      this.$store.dispatch('post', data);
      this.all = true;
    },
    editHoliday: function editHoliday(holiday) {
      this.dialogEdit = true;
      this.holiday = holiday;
    },
    addHoliday: function addHoliday() {
      this.dialogAddHoliday = true;
    },
    approveHoliday: function approveHoliday(holiday, approval) {
      var data = {
        email: holiday.email,
        id: holiday.id,
        user_id: holiday.user_id,
        count: this.countHoliday(holiday),
        approved: approval,
        type: holiday.type ? holiday.type : '',
        postUrl: 'requests/approve/' + holiday.id,
        getUrl: 'holidays/company/',
        commit: 'GET_HOLIDAYS'
      };
      this.$store.commit('MESSAGE', 'Processing...');
      this.$store.dispatch('post', data);
    },
    viewArchived: function viewArchived() {
      this.currentPage = 0;
      this.pageNumber = 0;
      this.all = false;
      var data = {
        getUrl: 'holidays-archived/company/',
        commit: 'GET_HOLIDAYS'
      };
      this.$store.dispatch('get', data);
    },
    getAll: function getAll() {
      this.currentPage = 0;
      this.pageNumber = 0;
      this.all = true;
      var data = {
        getUrl: 'holidays/company/',
        commit: 'GET_HOLIDAYS'
      };
      this.$store.dispatch('get', data);
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    this.is_superuser = this.$store.getters.companyName.is_superuser;
    this.currentUser = this.$store.getters.user.id;
  },
  mounted: function mounted() {
    var data = {
      getUrl: 'holidays/company/',
      commit: 'GET_HOLIDAYS'
    };
    this.$store.dispatch('get', data);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['holiday'],
  data: function data() {
    return {
      date: null,
      dateEnd: null,
      menu: false,
      menuEnd: false,
      min: "1950-01-01"
    };
  },
  methods: {
    format: function format(date) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(date).format('YYYY-MM-DD');
    },
    save: function save(date) {
      this.$refs.menu.save(date);
      this.$refs.menuEnd.save(date);

      if (this.date) {
        this.min = this.date;
      }
    },
    submit: function submit() {
      if (this.date && this.date !== this.holiday.start_date || this.dateEnd && this.dateEnd !== this.holiday.end_date) {
        var s = this.date ? this.date : this.holiday.start_date;
        var e = this.dateEnd ? this.dateEnd : this.holiday.end_date;
        var c = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e).diff(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(s), 'days');

        if (c < 0) {
          this.$store.state.message = 'Invalid entry';
          return;
        }

        var data = {
          id: this.holiday.id,
          user_id: this.holiday.user_id,
          start_date: s,
          end_date: e,
          count: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(e).diff(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(s), 'days'),
          postUrl: 'requests/edit/' + this.holiday.id,
          getUrl: 'holidays/company/',
          commit: 'GET_HOLIDAYS'
        }; // this.$store.dispatch('editHoliday', data)

        this.$store.dispatch('post', data);
        this.$emit('clicked', false);
        this.clear();
      }
    },
    clear: function clear() {}
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  validations: {
    message: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      message: '',
      username: '',
      sender: ''
    };
  },
  computed: {
    messageErrors: function messageErrors() {
      var errors = [];
      if (!this.$v.message.$dirty) return errors;
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    users: function users() {
      var c = this.$store.getters.companyName.user_id;

      var f = _.filter(this.$store.getters.AllUsers, function (n) {
        return n.user_id !== c;
      });

      return f;
    }
  },
  watch: {
    message: function message(newCount, oldCount) {
      // Our fancy notification (2).
      // if(newCount !== oldCount) {
      this.snackbar = true;
      this.errors = newCount; // }
    }
  },
  methods: {
    onSelect: function onSelect(selectObj) {
      this.sender = selectObj;
    },
    submit: function submit() {
      if (this.message !== '' && this.sender !== '') {
        var data = {
          message: this.message,
          user_id: this.sender,
          company_id: this.$store.getters.companyName.company_id,
          sender: this.$store.getters.companyName.user_id,
          postUrl: 'kudos/add',
          getUrl: 'kudos/company/',
          commit: 'GET_KUDOS'
        };
        this.$store.commit('MESSAGE', 'Adding...'); // this.$store.dispatch('addKudos', data)

        this.$store.dispatch('post', data);
        this.$emit('clicked', false);
        this.clear();
      }

      if (this.$v.$invalid) {
        this.message = 'Invalid entry';
        this.snackbar = true;
      }

      this.$v.$touch();
    },
    clear: function clear() {
      this.$v.$reset();
      this.name = '';
      this.surname = '';
      this.email = '';
      this.holiday = '';
      this.date = null;
      this.DOB = '';
      this.password = '';
      this.company = '';
      this.repeatPassword = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AddKudos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddKudos */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['single'],
  data: function data() {
    return {
      timeout: 6000,
      snackbar: false,
      errors: '',
      dialog: false,
      dialogEdit: false,
      dialogAdd: false,
      pageNumber: 0,
      currentPage: 0,
      increment: 6,
      count: '',
      id: '',
      page: 1,
      circle: true,
      total: '',
      all: true,
      actions: ['select all', 'unselect all', 'delete', 'archive'],
      allK: true,
      dialogArchive: false,
      multiple: false,
      KudosIds: [],
      kudosObject: '',
      kudosObjectCached: '',
      load: true,
      months: ['All'],
      byMonth: false,
      selectedMonth: '',
      show: "6"
    };
  },
  components: {
    AddKudos: _AddKudos__WEBPACK_IMPORTED_MODULE_1__.default
  },
  watch: {
    kudos: function kudos(newCount, oldCount) {
      //this.pageNumber = newCount.length;
      this.load = !newCount;
      this.snackbar = true;
      this.errors = newCount;
    },
    allK: function allK(n) {
      var a = this.actions;

      if (n) {
        this.actions = ['select all', 'unselect all', 'delete', 'archive'];
      } else {
        this.actions = ['select all', 'unselect all', 'delete', 'restore'];
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['kudos'])), {}, {
    allKudos: function allKudos() {
      /*
       // todo: add data prop (allkodus) so it will be easier to filter by date
       */
    }
  }),
  methods: {
    formatDate: function formatDate(d) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(d).format('MMM DD, YYYY');
    },
    formatDateYear: function formatDateYear(d) {
      return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(d).format('MMM YYYY');
    },
    onSelectMonth: function onSelectMonth(selectObj) {
      this.selectedMonth = selectObj;

      if (selectObj === 'All') {
        this.kudosObject = this.kudosObjectCached;
        this.pageNumber = this.kudosObjectCached.length;
        this.total = this.kudosObjectCached.length;
      } else {
        var arr = [];
        this.kudosObjectCached.map(function (k) {
          if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(k.created_at).format('MMM YYYY') === selectObj) {
            arr.push(k);
          }
        });
        this.pageNumber = arr.length;
        this.total = arr.length;
        this.kudosObject = arr;
      }
    },
    onShow: function onShow(selectObj) {
      this.show = selectObj;
      this.increment = Number(selectObj);
    },
    onSelectAction: function onSelectAction(selectObj) {
      var _this = this;

      if (selectObj === 'delete') {
        if (this.KudosIds.length > 0) {
          this.dialog = true;
          this.multiple = true;
        }
      }

      if (selectObj === 'archive' || selectObj === 'restore') {
        if (this.KudosIds.length > 0) {
          this.dialogArchive = true;
          this.multiple = true;
        }
      }

      if (selectObj === 'select all') {
        this.KudosIds = [];

        if (!this.allSelected) {
          this.kudosObject.map(function (kudo, index) {
            if (index >= _this.currentPage && index < _this.currentPage + _this.increment) {
              _this.KudosIds.push(kudo.id);
            }
          });
        }
      }

      if (selectObj === 'unselect all') {
        this.KudosIds = [];
      }
    },
    next: function next(page) {
      this.currentPage = page === 1 ? 0 : (page - 1) * this.increment;
    },
    checkSize: function checkSize(kudo) {
      var values = [];

      if (kudo.likes_group && kudo.likes_group !== '') {
        var x = kudo.likes_group.split(';');
        x.map(function (s) {
          values.push({
            like_id: s.split(',')[0],
            user_id: Number(s.split(',')[1])
          });
        });
      } else {
        values = [];
      }

      return lodash__WEBPACK_IMPORTED_MODULE_2___default().size(values);
    },
    checkLike: function checkLike(kudo) {
      var values = [];

      if (kudo.likes_group && kudo.likes_group !== '') {
        var x = kudo.likes_group.split(';');
        x.map(function (s) {
          values.push({
            like_id: s.split(',')[0],
            user_id: Number(s.split(',')[1])
          });
        });
      } else {
        values = [];
      } //this.count = _.size(values);


      return lodash__WEBPACK_IMPORTED_MODULE_2___default().find(values, {
        user_id: this.$store.getters.companyName.user_id
      });
    },
    onNextPage: function onNextPage(value) {
      this.currentPage = value.currentPage;
      this.increment = value.increment;
    },
    onKudosAdded: function onKudosAdded(value) {
      this.dialogAdd = value;
    },
    deleteKudos: function deleteKudos(kudos) {
      this.id = kudos.id;
      this.dialog = true;
    },
    deleteConfirmed: function deleteConfirmed() {
      this.$store.commit('MESSAGE', 'Deleting...');
      var data = {
        id: this.id,
        postUrl: 'kudos/delete/',
        getUrl: 'kudos/company/',
        commit: 'GET_KUDOS'
      };

      if (this.multiple) {
        data['ids'] = this.KudosIds;
      }

      this.multiple = false;
      this.KudosIds = [];
      this.$store.dispatch('post', data);
      this.allK = true;
      this.dialog = false;
      this.$store.commit('MESSAGE', 'Deleting...');
      this.$store.dispatch('post', data);
    },
    archiveKudos: function archiveKudos(id) {
      this.dialogArchive = true;
      this.id = id;
    },
    archiveConfirmed: function archiveConfirmed() {
      this.dialogArchive = false;
      this.$store.commit('MESSAGE', 'Processing...');
      var data = {
        id: this.id,
        archive: this.allK,
        postUrl: 'kudos/archive/',
        getUrl: 'kudos/company/',
        commit: 'GET_KUDOS'
      };

      if (this.multiple) {
        data['ids'] = this.KudosIds;
      }

      this.multiple = false;
      this.KudosIds = [];
      this.$store.dispatch('post', data);
      this.allK = true;
    },
    addKudos: function addKudos() {
      this.dialogAdd = true;
    },
    likeKudos: function likeKudos(kudo) {
      var data = {
        kudos_id: kudo.id,
        user_id: this.$store.getters.companyName.user_id,
        postUrl: 'kudos/like/',
        getUrl: 'kudos/company/',
        commit: 'GET_KUDOS'
      };
      this.$store.commit('MESSAGE', 'Adding...');
      this.$store.dispatch('post', data);
    },
    viewArchived: function viewArchived() {
      this.currentPage = 0;
      this.pageNumber = 0;
      this.allK = false;
      var data = {
        getUrl: 'kudos-archived/company/',
        commit: 'GET_KUDOS'
      };
      this.$store.dispatch('get', data);
    },
    getAll: function getAll() {
      var data = {
        getUrl: 'kudos/company/',
        commit: 'GET_KUDOS'
      };
      this.$store.dispatch('get', data);
      this.all = true;
      this.allK = true;
      this.currentPage = 0;
      this.pageNumber = 0;
    },
    award: function award() {
      var _this2 = this;

      this.currentPage = 0;
      this.pageNumber = 0;
      var id = this.$store.getters.companyName.company_id;

      if (!id) {
        return;
      }

      var authorization = {
        headers: {
          Authorization: "Bearer ".concat(this.$store.state.token)
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat(process.env.VUE_APP_CMS_URL, "kudos-award/company/").concat(id), authorization).then(function (res) {
        _this2.all = false;

        _this2.$store.commit('GET_KUDOS', res.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  beforeMount: function beforeMount() {
    var k = this.$store.getters.kudos;

    var f = lodash__WEBPACK_IMPORTED_MODULE_2___default().filter(k, {
      receiver_id: this.single
    });

    var r = this.single ? f : k;
    console.log(r);
    this.pageNumber = r.length;
    this.total = r.length;
    var a = [];
    a['All'] = 'all';

    if (this.all) {
      r = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortBy(r, function (o) {
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(o.created_at);
      }).reverse();
      var da = '';
      var c = [];
      r.map(function (k, i) {
        var created = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(k.created_at).format('MMM YYYY');

        if (da === created) {
          c.push(k);
          a[created] = c;
        } else {
          a[created] = [k];
        }

        da = created;
      });
    }

    this.months = a;
    this.kudosObject = r;
    this.kudosObjectCached = r;
  },
  mounted: function mounted() {
    var data = {
      getUrl: 'kudos/company/',
      commit: 'GET_KUDOS'
    };
    this.$store.dispatch('get', data);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Users_EditUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users/EditUser */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue");
/* harmony import */ var _Users_AddUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users/AddUser */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['userProfile'],
  data: function data() {
    return {
      timeout: 6000,
      snackbar: false,
      errors: '',
      dialog: false,
      dialogEdit: false,
      dialogAdd: false,
      id: '',
      name: '',
      hApprover: '',
      uSupervisor: '',
      currentUser: '',
      pageNumber: 0,
      currentPage: 0,
      increment: 3,
      getAllUsers: [],
      department: ''
    };
  },
  components: {
    EditUser: _Users_EditUser__WEBPACK_IMPORTED_MODULE_1__.default,
    AddUser: _Users_AddUser__WEBPACK_IMPORTED_MODULE_2__.default
  },
  watch: {
    AllUsers: function AllUsers(newU, oldCount) {
      if (oldCount !== newU) {
        this.snackbar = true;
        this.getAllUsers = newU;
      }
    },
    message: function message(newCount, oldCount) {
      if (oldCount !== newCount) {
        this.snackbar = true;
        this.errors = newCount;
      }
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['AllUsers', 'message'])), {}, {
    user: function user() {
      if (this.userProfile) {
        this.currentUser = this.userProfile;

        var _h = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(this.$store.getters.AllUsers, {
          user_id: this.userProfile.holiday_approver
        });

        console.log(_h);
        this.hApprover = _h.length > 0 ? _h[0].user_name : '';

        var _s = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(this.$store.getters.AllUsers, {
          user_id: this.userProfile.supervisor
        });

        this.uSupervisor = _s.length > 0 ? _s[0].user_name : '';
        this.department = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(this.$store.getters.departments, {
          id: this.userProfile.department_id
        })[0].department_name;
        return this.userProfile;
      }

      var users = this.$store.getters.AllUsers;

      var user = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(users, {
        user_id: this.$store.getters.user.id
      });

      this.department = user && lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(this.$store.getters.departments, {
        id: user[0].department_id
      })[0].department_name;

      var h = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(this.$store.getters.AllUsers, {
        user_id: user.holiday_approver
      });

      this.hApprover = h.length > 0 ? h[0].user_name : '';

      var s = lodash__WEBPACK_IMPORTED_MODULE_3___default().filter(this.$store.getters.AllUsers, {
        user_id: user.supervisor
      });

      this.uSupervisor = s.length > 0 ? s[0].user_name : '';
      this.currentUser = user[0];
      return user.length > 0 ? user[0] : '';
    }
  }),
  methods: {
    onNextPage: function onNextPage(value) {
      this.currentPage = value.currentPage;
      this.increment = value.increment;
    },
    onUserUpdated: function onUserUpdated(value) {
      this.dialogEdit = value;
    },
    onUserAdded: function onUserAdded(value) {
      this.dialogAdd = value;
    },
    deleteUser: function deleteUser(user) {
      this.id = user.user_id;
      this.name = user.name;
      this.dialog = true; // this.$store.dispatch('deleteUser', id)
    },
    deleteConfirmed: function deleteConfirmed() {
      this.dialog = false;
      this.$store.dispatch('deleteUser', this.id);
    },
    editUser: function editUser(user) {
      this.dialogEdit = true;
      this.user = user;
      this.id = user.user_id;
      this.name = user.name; //
    },
    addUser: function addUser() {
      this.dialogAdd = true;
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    var data = {
      getUrl: 'users/company/',
      commit: 'GET_ALL_USERS'
    };
    this.$store.dispatch('get', data);
  },
  mounted: function mounted() {
    var period_end = this.$store.getters.companyName.current_period_end;
    var today = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date()).format('YYYY-MM-DD');

    if (today > period_end) {
      var data = {
        stripe_id: this.$store.getters.companyName.stripe_id,
        user_id: this.$store.getters.companyName.user_id
      };
      this.$store.dispatch('checkSubscription', data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  validations: {
    password: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      minLength: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6)
    },
    repeatPassword: {
      sameAsPassword: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('password')
    },
    code: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      snackbar: false,
      timeout: 8000,
      title: 'Activate',
      reset: '',
      code: '',
      password: '',
      repeatPassword: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])), {}, {
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push('Password must be at most 6 characters long');
      !this.$v.password.required && errors.push('Password is required.');
      return errors;
    },
    repeatPasswordErrors: function repeatPasswordErrors() {
      var errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords don\'t match');
      return errors;
    },
    codeErrors: function codeErrors() {
      var errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push('Reset code is required');
      return errors;
    }
  }),
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.errors = newCount;
    }
  },
  methods: {
    submit: function submit() {
      var data = {
        reset_password_code: this.code,
        password: this.password,
        password_confirmation: this.password
      };

      if (this.$v.$invalid) {
        this.$store.commit('MESSAGE', 'Invalid data.');
        this.snackbar = true;
      } else {
        this.$store.commit('MESSAGE', 'Resetting...');
        this.$store.dispatch('resetPassword', data);
      }

      this.$v.$touch();
    }
  },
  beforeMount: function beforeMount() {},
  created: function created() {
    this.code = this.$route.params.code;

    if (this.reset) {
      this.$store.commit('MESSAGE', 'Resetting...'); // this.$store.dispatch('resetPassword', this.reset)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-stripe-elements-plus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  validations: {
    city: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    address: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    postCode: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    name: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    surname: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      name: '',
      surname: '',
      address: '',
      city: '',
      postCode: '',
      seasons: ['Basic', 'Bronze', 'Silver', 'Gold'],
      "package": 'plan_F35fcQyG7adY5F',
      price: '£5',
      hint: '1-10',
      complete: false,
      stripeOptions: {
        hidePostalCode: true // see https://stripe.com/docs/stripe.js#element-options for details

      },
      snackbar: false,
      timeout: 8000,
      userId: '',
      note: '',
      color: 'success',
      invoice: '',
      admin: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])), {}, {
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('First name is required.');
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    surnameErrors: function surnameErrors() {
      var errors = [];
      if (!this.$v.surname.$dirty) return errors;
      !this.$v.surname.required && errors.push('Last name is required.');
      return errors;
    },
    addressErrors: function addressErrors() {
      var errors = [];
      if (!this.$v.surname.$dirty) return errors;
      !this.$v.surname.required && errors.push('Address is required.');
      return errors;
    },
    cityErrors: function cityErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push('First name is required.');
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    postCodeErrors: function postCodeErrors() {
      var errors = [];
      if (!this.$v.surname.$dirty) return errors;
      !this.$v.surname.required && errors.push('Post code is required.');
      return errors;
    }
  }),
  components: {
    Card: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-stripe-elements-plus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.errors = newCount;
    }
  },
  methods: {
    pay: function pay() {
      var _this = this;

      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      if (this.$v.$invalid) {
        this.$store.commit('MESSAGE', 'Invalid entries.');
        this.snackbar = true;
      } else {
        this.$store.commit('MESSAGE', 'Processing...');
        var metaData = this.$store.getters.companyName;
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-stripe-elements-plus'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().then(function (val) {
          var data = {
            companyName: metaData.company_name,
            name: _this.name,
            email: metaData.email,
            surname: _this.surname,
            address: _this.address,
            city: _this.city,
            postCode: _this.postCode,
            "package": _this["package"],
            token: val.token.id,
            user_id: _this.userId,
            stripe_id: metaData.stripe_id
          };

          _this.$store.dispatch('subscribe', data);

          _this.clear();
        })["catch"](function (err) {
          _this.$store.commit('MESSAGE', 'Payment failed!');
        });
      }

      this.$v.$touch();
    },
    clear: function clear() {
      this.$v.$reset();
      this.name = '';
      this.surname = '';
      this.address = '';
      this.postCode = '';
      this.city = '';
    },
    season: function season(val) {
      switch (val) {
        case 0:
          this.price = '£5';
          this.hint = '1-10';
          this["package"] = 'basic'; // basic

          break;

        case 1:
          this.price = '£20';
          this.hint = '11-20';
          this["package"] = 'bronze'; //bronze

          break;

        case 2:
          this.price = '£50';
          this.hint = '21-50';
          this["package"] = 'silver'; // silver

          break;

        case 3:
          this.price = '£99';
          this.hint = '51-100';
          this["package"] = 'gold'; //Gold

          break;
      }

      return this.seasons[val];
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
    var period_end = this.$store.getters.companyName.current_period_end;

    if (period_end) {
      var today = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(new Date()).format('YYYY-MM-DD');

      if (today > period_end) {
        this.note = 'Your account has expired, please subscribe again or make payment to continue';
        this.color = 'error';
      } else {
        this.note = 'Your current monthly bill ends ' + period_end;
        this.color = 'success';
      }
    }

    this.invoice = this.$store.getters.companyName.invoice ? this.$store.getters.companyName.invoice : '';

    if (this.$store.getters.companyName.is_superuser === 1) {
      this.admin = true;
    }
  },
  created: function created() {
    var c = this.$store.getters.companyName;
    this.userId = c.user_id;
    this.name = c.name;
    this.surname = c.surname;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  props: ['user'],
  validations: {
    password: {
      minLength: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6)
    },
    repeatPassword: {
      sameAsPassword: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('password')
    },
    email: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
      email: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    name: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    surname: {
      required: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }
  },
  data: function data() {
    return {
      name: '',
      surname: '',
      email: '',
      role: '',
      checked: '',
      holidays: '',
      date: null,
      menu: false,
      approver: '',
      supervisor: ''
    };
  },
  computed: {
    users: function users() {
      return this.$store.getters.AllUsers;
    },
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    surnameErrors: function surnameErrors() {
      var errors = [];
      if (!this.$v.surname.$dirty) return errors;
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push('Password must be at most 6 characters long');
      return errors;
    },
    repeatPasswordErrors: function repeatPasswordErrors() {
      var errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords don\'t match');
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      return errors;
    }
  },
  watch: {
    message: function message(newCount, oldCount) {
      // Our fancy notification (2).
      // if(newCount !== oldCount) {
      this.snackbar = true;
      this.errors = newCount; // }
    },
    menu: function menu(val) {
      var _this = this;

      val && setTimeout(function () {
        return _this.$refs.picker.activePicker = 'YEAR';
      });
    }
  },
  methods: {
    onSelectApprover: function onSelectApprover(selectObj) {
      this.approver = selectObj;
    },
    onSelectSupervisor: function onSelectSupervisor(selectObj) {
      this.supervisor = selectObj;
    },
    save: function save(date) {
      this.$refs.menu.save(date);
    },
    submit: function submit() {
      this.$emit('clicked', false);
      var company = this.$store.getters.companyName;
      var random = Math.random().toString(36).slice(-8);
      var user = {
        name: this.name,
        surname: this.surname,
        company_name: company.company_name,
        email: this.email,
        password: random,
        password_confirmation: random,
        is_superuser: this.checked ? 1 : 0,
        holidays: this.holidays,
        role: this.role,
        DOB: this.date,
        creator: false,
        company_id: company.company_id,
        approver: this.approver,
        supervisor: this.supervisor
      };

      if (this.$v.$invalid) {
        this.message = 'Invalid entry';
        this.snackbar = true;
      } else {
        this.$store.commit('MESSAGE', 'Adding...');
        this.$store.dispatch('addUser', user);
        this.clear();
      }

      this.$v.$touch();
    },
    clear: function clear() {
      this.$v.$reset();
      this.name = '';
      this.surname = '';
      this.email = '';
      this.role = '';
      this.holidays = '';
      this.date = null;
      this.DOB = '';
      this.company = '';
    }
  },
  beforeMount: function beforeMount() {
    if (this.$store.getters.token) {//  return router.push({ name: 'profile' })
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _EditUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditUser */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue");
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUser */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Profile */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Pagination */ "./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['employees'],
  data: function data() {
    return {
      timeout: 6000,
      snackbar: false,
      errors: '',
      dialog: false,
      dialogArchive: false,
      dialogEdit: false,
      dialogAdd: false,
      dialogCard: false,
      id: '',
      name: '',
      user: '',
      currentUser: '',
      pageNumber: 0,
      currentPage: 0,
      increment: 6,
      userKeys: {},
      userDep: '',
      selectedDep: '',
      index: 1,
      max: '',
      page: 1,
      circle: true,
      loopI: 0,
      total: '',
      all: true,
      load: true,
      show: "6"
    };
  },
  components: {
    EditUser: _EditUser__WEBPACK_IMPORTED_MODULE_1__.default,
    AddUser: _AddUser__WEBPACK_IMPORTED_MODULE_2__.default,
    UserCard: _Profile__WEBPACK_IMPORTED_MODULE_3__.default
  },
  watch: {
    AllUsers: function AllUsers(newCount, oldCount) {
      this.load = !newCount;
      this.snackbar = true;
      this.errors = newCount;
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['AllUsers'])), {}, {
    items: function items() {
      return {
        item1: 'value1',
        item2: 'value2'
      };
    },
    users: function users() {
      var users = this.$store.getters.AllUsers;
      this.pageNumber = users.length;
      this.total = users.length;

      if (this.selectedDep) {
        if (this.selectedDep === 9999) {
          this.pageNumber = users.length;
          this.total = users.length;
        } else {
          users = lodash__WEBPACK_IMPORTED_MODULE_4___default().filter(users, {
            department_id: Number(this.selectedDep)
          });
          this.pageNumber = users.length;
          this.total = users.length;
        }
      }

      return users;
    },
    usersDep: function usersDep() {
      var users = this.$store.getters.AllUsers;

      var g = lodash__WEBPACK_IMPORTED_MODULE_4___default().groupBy(users, 'department_id');

      var departments = this.$store.getters.departments; // rename null

      var newObject = {}; //delete Object.assign(newObject, g, {['Not assigned']: g['null'] })['null'];

      var userDep = [];
      Object.keys(g).map(function (key) {
        var f = lodash__WEBPACK_IMPORTED_MODULE_4___default().filter(departments, {
          id: Number(key)
        });

        userDep.push({
          id: key,
          department_name: f.length > 0 ? f[0].department_name : 'Not assigned'
        });
      });
      userDep.push({
        id: 9999,
        department_name: 'All'
      }); //userDep =  _.uniqBy(userDep, 'department_name')

      this.pageNumber = Object.values(this.$store.getters.AllUsers).length;
      this.total = Object.values(this.$store.getters.AllUsers).length;
      return userDep; //return this.$store.getters.AllUsers.length > 0 ?  this.$store.getters.AllUsers : [];
    }
  }),
  methods: {
    next: function next(page) {
      this.currentPage = page === 1 ? 0 : (page - 1) * this.increment;
    },
    onSelect: function onSelect(selectObj) {
      this.currentPage = 0;
      this.selectedDep = selectObj;
    },
    onShow: function onShow(selectObj) {
      this.show = selectObj;
      this.increment = Number(selectObj);
    },
    onNextPage: function onNextPage(value) {
      this.currentPage = value.currentPage;
      this.increment = value.increment;
    },
    onUserUpdated: function onUserUpdated(value) {
      this.dialogEdit = value;
    },
    onUserAdded: function onUserAdded(value) {
      this.dialogAdd = value;
    },
    deleteUser: function deleteUser(user) {
      this.id = user.user_id;
      this.name = user.name;
      this.dialog = true;
    },
    archiveUser: function archiveUser(user) {
      this.id = user.user_id;
      this.name = user.name;
      this.dialogArchive = true;
    },
    deleteConfirmed: function deleteConfirmed() {
      this.dialog = false;
      this.$store.commit('MESSAGE', 'Deleting...');
      var data = {
        id: this.id,
        postUrl: 'users/delete/',
        getUrl: 'users/company/',
        commit: 'GET_ALL_USERS'
      };
      this.$store.dispatch('post', data);
    },
    archiveConfirmed: function archiveConfirmed() {
      this.dialogArchive = false;
      this.$store.commit('MESSAGE', 'Processing...');
      var data = {
        id: this.id,
        archive: this.all,
        postUrl: 'users/archive/',
        getUrl: 'users/company/',
        commit: 'GET_ALL_USERS'
      };
      this.$store.dispatch('post', data);
    },
    editUser: function editUser(user) {
      this.dialogEdit = true;
      this.user = user;
      this.id = user.user_id;
      this.name = user.name; //
    },
    addUser: function addUser() {
      this.dialogAdd = true;
    },
    callback: function callback(key) {//console.log(key)
      //console.log('loop has finished')
    },
    viewArchived: function viewArchived() {
      this.all = false;
      this.$store.dispatch('getAllArchivedUsers');
    },
    getAll: function getAll() {
      this.all = true;
      var data = {
        getUrl: 'users/company/',
        commit: 'GET_ALL_USERS'
      };
      this.$store.dispatch('get', data);
    },
    download: function download() {
      var data = {
        getUrl: 'users/download/',
        commit: 'GET_ALL_USERS'
      };
      this.$store.dispatch('get', data);
    },
    userCard: function userCard(user) {
      this.dialogCard = true;
      this.user = user;
    }
  },
  beforeMount: function beforeMount() {
    this.$store.dispatch('checkToken');
  },
  mounted: function mounted() {
    this.users = this.employees.data;
    var data = {
      getUrl: 'users/company/',
      commit: 'GET_ALL_USERS'
    };
    this.$store.dispatch('get', data);
    this.currentUser = this.$store.getters.user.id;

    switch (this.$store.getters.companyName["package"]) {
      case 'basic':
        this.max = 10;
        break;

      case 'bronze':
        this.max = 20;
        break;

      case 'silver':
        this.max = 50;
        break;

      case 'gold':
        this.max = 100;
        break;

      case 'platinum':
        this.max = 100;
    }
  },
  directives: {
    forCallback: function forCallback(el, binding) {
      var element = binding.value;
      var key = element.key;
      var len = 0;

      if (Array.isArray(element.array)) {
        len = element.array.length;
      } else if (_typeof(element.array) === 'object') {
        var keys = Object.keys(element.array);
        key = keys.indexOf(key);
        len = keys.length;
      }

      if (key == len - 1) {
        if (typeof element.callback === 'function') {
          element.callback(key);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())],
  props: ['user'],
  validations: {
    password: {
      minLength: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6)
    },
    repeatPassword: {
      sameAsPassword: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('password')
    },
    email: {
      email: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuelidate/lib/validators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    },
    name: '',
    surname: '',
    holidays: ''
  },
  data: function data() {
    return {
      name: '',
      surname: '',
      holidays: '',
      email: '',
      password: '',
      repeatPassword: '',
      checked: '',
      date: null,
      menu: false,
      image: '',
      filename: '',
      role: '',
      approver: '',
      supervisor: '',
      hApprover: '',
      uSupervisor: '',
      imgError: ''
    };
  },
  computed: {
    users: function users() {
      var h = _.filter(this.$store.getters.AllUsers, {
        user_id: this.user.holiday_approver
      });

      this.hApprover = h.length > 0 ? h[0].user_name : '';

      var s = _.filter(this.$store.getters.AllUsers, {
        user_id: this.user.supervisor
      });

      this.uSupervisor = s.length > 0 ? s[0].user_name : '';
      return this.$store.getters.AllUsers;
    },
    nameErrors: function nameErrors() {
      var errors = [];
      if (!this.$v.name.$dirty) return errors;
      this.$v.valid = errors.length <= 0;
      return errors;
    },
    surnameErrors: function surnameErrors() {
      var errors = [];
      if (!this.$v.surname.$dirty) return errors;
      return errors;
    },
    passwordErrors: function passwordErrors() {
      var errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength && errors.push('Password must be at most 6 characters long');
      return errors;
    },
    repeatPasswordErrors: function repeatPasswordErrors() {
      var errors = [];
      if (!this.$v.repeatPassword.$dirty) return errors;
      !this.$v.repeatPassword.sameAsPassword && errors.push('Passwords don\'t match');
      return errors;
    },
    emailErrors: function emailErrors() {
      var errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail');
      return errors;
    },
    checkAdmin: function checkAdmin() {
      this.checked = this.user.is_superuser === 1;
    }
  },
  watch: {
    menu: function menu(val) {
      var _this = this;

      val && setTimeout(function () {
        return _this.$refs.picker.activePicker = 'YEAR';
      });
    }
  },
  methods: {
    onSelectApprover: function onSelectApprover(selectObj) {
      this.approver = selectObj;
    },
    onSelectSupervisor: function onSelectSupervisor(selectObj) {
      this.supervisor = selectObj;
    },
    loader: function loader() {
      var _this2 = this;

      var l = this.loader;
      this[l] = !this[l];
      setTimeout(function () {
        return _this2[l] = false;
      }, 3000);
      this.loader = null;
    },
    onFileChange: function onFileChange(e) {
      this.filename = '';
      var files = e.target.files || e.dataTransfer.files;
      var types = ["image/jpeg", "image/png"];
      console.log(types.indexOf(files[0].type));

      if (!types.includes(files[0].type)) {
        this.imgError = 'Image type not supported';
        return;
      }

      if (files[0].size > 3024 * 1024) {
        console.log('too');
        this.imgError = 'Image too large';
        return;
      }

      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var reader = new FileReader();
      this.filename = file.name;
      var vm = this;

      reader.onload = function (e) {
        vm.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    upload: function upload() {
      axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://hr-system.localhost/cms/test/".concat(this.$store.getters.companyName.company_name), {
        image: this.image
      }).then(function (response) {});
    },
    save: function save(date) {
      this.$refs.menu.save(date);
    },
    submit: function submit() {
      var admin = this.user.is_superuser === 1;
      this.$emit('clicked', false);
      var holiday;

      if (this.holidays && this.user.holidays) {
        holiday = this.holidays === this.user.holiday ? '' : this.holidays;
      } else if (!this.holidays || !this.user.holidays) {
        holiday = this.holidays ? this.holidays : this.user.holidays;
      } else {
        holiday = '';
      }

      var dob;

      if (this.date && this.user.DOB) {
        dob = this.date === this.user.DOB ? '' : this.date;
      } else if (!this.date || !this.user.DOB) {
        dob = this.date ? this.date : this.user.DOB;
      } else {
        dob = '';
      }

      var user_data = {
        id: this.user.user_id,
        name: this.name === this.user.name ? '' : this.name,
        surname: this.surname === this.user.surname ? '' : this.surname,
        email: this.email === this.user.email ? '' : this.email,
        password: this.password !== '' && this.repeatPassword !== '' ? this.password : '',
        holidays: holiday,
        role: this.role ? this.role : '',
        approver: this.approver ? this.approver : '',
        supervisor: this.supervisor ? this.supervisor : '',
        is_superuser: this.checked === admin || this.checked === '' ? '' : this.checked,
        DOB: dob,
        image: this.image !== '' ? this.image : '',
        imageName: this.image !== '' && this.image ? this.$store.getters.companyName.company_name + '-' + this.user.name + this.user.id : ''
      };
      var check = Object.values(user_data).some(function (u) {
        return u !== '';
      });

      if (check) {
        user_data['company_name'] = this.$store.getters.companyName.company_name;
        this.$store.commit('MESSAGE', 'Updating...');
        this.$store.dispatch('editUser', user_data);
        this.clear();
      } else {}
    },
    clear: function clear() {
      this.$v.$reset();
      this.name = '';
      this.surname = '';
      this.email = '';
      this.password = '';
      this.repeatPassword = '';
      this.holidays = '';
      this.date = '';
    }
  },
  beforeMount: function beforeMount() {
    if (this.$store.getters.token) {//  return router.push({ name: 'profile' })
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



vue__WEBPACK_IMPORTED_MODULE_1__.default.use(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  $_veeValidate: {
    validator: 'new'
  },
  data: function data() {
    return {
      name: '',
      email: '',
      emailSent: '',
      timeout: 6000,
      snackbar: false
    };
  },
  watch: {
    message: function message(newCount, oldCount) {
      this.snackbar = true;
      this.loading = false;
    }
  },
  computed: _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(['message'])),
  methods: {
    submit: function submit() {
      var _this = this;

      var once = true;
      var email = {
        email: this.email,
        text: this.name,
        subject: 'Contact form',
        postUrl: 'contact-us/',
        getUrl: '',
        commit: ''
      };
      this.$validator.validateAll().then(function (res) {
        if (res && once) {
          _this.$store.commit('MESSAGE', 'Sending...');

          _this.$store.dispatch('post', email);

          _this.clear();

          once = false;
        }
      })["catch"](function () {// Failed
      });
    },
    clear: function clear() {
      this.name = '';
      this.email = '';
      this.$validator.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '~@fullcalendar/daygrid/main.css' in '/Users/nour/Desktop/sites/cigroup/dashboard-hr-master/resources/js/hr-system/views/backend'\n    at finishWithoutResolve (/Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:293:18)\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:362:15\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/Users/nour/Desktop/sites/cigroup/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/Users/nour/Desktop/sites/cigroup/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:25:1)\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:87:43\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/Users/nour/Desktop/sites/cigroup/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/Users/nour/Desktop/sites/cigroup/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:56:1)\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/ConditionalPlugin.js:53:42\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/Resolver.js:410:5\n    at eval (eval at create (/Users/nour/Desktop/sites/cigroup/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/forEachBail.js:16:12\n    at /Users/nour/Desktop/sites/cigroup/node_modules/enhanced-resolve/lib/ModulesInHierachicDirectoriesPlugin.js:72:16");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.StripeElement {\n    box-sizing: border-box;\n\n    height: 40px;\n\n    padding: 10px 12px;\n\n    border: 1px solid transparent;\n    border-radius: 4px;\n    background-color: white;\n\n    box-shadow: 0 1px 3px 0 #e6ebf1;\n    transition: box-shadow 150ms ease;\n}\n.StripeElement--focus {\n    box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid {\n    border-color: #fa755a;\n}\n.StripeElement--webkit-autofill {\n    background-color: #fefde5 !important;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-loader {\n    -webkit-animation: loader 1s infinite;\n            animation: loader 1s infinite;\n    display: flex;\n}\n@-webkit-keyframes loader {\nfrom {\n        transform: rotate(0);\n}\nto {\n        transform: rotate(360deg);\n}\n}\n@keyframes loader {\nfrom {\n        transform: rotate(0);\n}\nto {\n        transform: rotate(360deg);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default()), options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default().locals) || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subscribe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditUser.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue":
/*!******************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_931c692a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=931c692a& */ "./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=template&id=931c692a&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Pagination_vue_vue_type_template_id_931c692a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pagination_vue_vue_type_template_id_931c692a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/components/Pagination.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/404.vue":
/*!******************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/404.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _404_vue_vue_type_template_id_5595eb2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=5595eb2f& */ "./dashboard-hr-master/resources/js/hr-system/views/404.vue?vue&type=template&id=5595eb2f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _404_vue_vue_type_template_id_5595eb2f___WEBPACK_IMPORTED_MODULE_0__.render,
  _404_vue_vue_type_template_id_5595eb2f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/404.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/Activate.vue":
/*!***********************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/Activate.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Activate_vue_vue_type_template_id_7b91a22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Activate.vue?vue&type=template&id=7b91a22c& */ "./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=template&id=7b91a22c&");
/* harmony import */ var _Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Activate.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Activate_vue_vue_type_template_id_7b91a22c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Activate_vue_vue_type_template_id_7b91a22c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/Activate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/Register.vue":
/*!***********************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/Register.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_5cfda3dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=5cfda3dc& */ "./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=template&id=5cfda3dc&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_5cfda3dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_5cfda3dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue":
/*!****************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_12b2992b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=12b2992b& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=template&id=12b2992b&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Admin_vue_vue_type_template_id_12b2992b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admin_vue_vue_type_template_id_12b2992b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue":
/*!*******************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calendar_vue_vue_type_template_id_24fcd4dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=24fcd4dc& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=template&id=24fcd4dc&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calendar.vue?vue&type=style&index=0&lang=scss& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Calendar_vue_vue_type_template_id_24fcd4dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Calendar_vue_vue_type_template_id_24fcd4dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue":
/*!********************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_26a153f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=26a153f0& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=template&id=26a153f0&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_26a153f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_26a153f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue":
/*!************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDepartment_vue_vue_type_template_id_d6eb3d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDepartment.vue?vue&type=template&id=d6eb3d3e& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=template&id=d6eb3d3e&");
/* harmony import */ var _AddDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDepartment.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddDepartment_vue_vue_type_template_id_d6eb3d3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddDepartment_vue_vue_type_template_id_d6eb3d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue":
/*!*************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllDepartments_vue_vue_type_template_id_db696a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllDepartments.vue?vue&type=template&id=db696a3c& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=template&id=db696a3c&");
/* harmony import */ var _AllDepartments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDepartments.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AllDepartments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AllDepartments_vue_vue_type_template_id_db696a3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllDepartments_vue_vue_type_template_id_db696a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue":
/*!*************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditDepartment_vue_vue_type_template_id_04c13ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditDepartment.vue?vue&type=template&id=04c13ede& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=template&id=04c13ede&");
/* harmony import */ var _EditDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditDepartment.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditDepartment_vue_vue_type_template_id_04c13ede___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditDepartment_vue_vue_type_template_id_04c13ede___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue":
/*!***************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tree_vue_vue_type_template_id_945c8600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.vue?vue&type=template&id=945c8600& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=template&id=945c8600&");
/* harmony import */ var _Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Tree_vue_vue_type_template_id_945c8600___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tree_vue_vue_type_template_id_945c8600___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue":
/*!*************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_109efc32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=109efc32& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=template&id=109efc32&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ForgotPassword_vue_vue_type_template_id_109efc32___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPassword_vue_vue_type_template_id_109efc32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue":
/*!******************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddHoliday_vue_vue_type_template_id_c8f4e632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddHoliday.vue?vue&type=template&id=c8f4e632& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=template&id=c8f4e632&");
/* harmony import */ var _AddHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddHoliday.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddHoliday_vue_vue_type_template_id_c8f4e632___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddHoliday_vue_vue_type_template_id_c8f4e632___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue":
/*!*******************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllHolidays_vue_vue_type_template_id_5bde321c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllHolidays.vue?vue&type=template&id=5bde321c& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=template&id=5bde321c&");
/* harmony import */ var _AllHolidays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllHolidays.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AllHolidays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AllHolidays_vue_vue_type_template_id_5bde321c___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllHolidays_vue_vue_type_template_id_5bde321c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue":
/*!*******************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditHoliday_vue_vue_type_template_id_b8afc7a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditHoliday.vue?vue&type=template&id=b8afc7a4& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=template&id=b8afc7a4&");
/* harmony import */ var _EditHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditHoliday.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditHoliday_vue_vue_type_template_id_b8afc7a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditHoliday_vue_vue_type_template_id_b8afc7a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue":
/*!*************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddKudos_vue_vue_type_template_id_38cf9042___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddKudos.vue?vue&type=template&id=38cf9042& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=template&id=38cf9042&");
/* harmony import */ var _AddKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddKudos.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddKudos_vue_vue_type_template_id_38cf9042___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddKudos_vue_vue_type_template_id_38cf9042___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue":
/*!*************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllKudos_vue_vue_type_template_id_fb7ea17c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllKudos.vue?vue&type=template&id=fb7ea17c& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=template&id=fb7ea17c&");
/* harmony import */ var _AllKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllKudos.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AllKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AllKudos_vue_vue_type_template_id_fb7ea17c___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllKudos_vue_vue_type_template_id_fb7ea17c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue":
/*!******************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_d2027cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=d2027cf6& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=template&id=d2027cf6&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_d2027cf6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_d2027cf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue":
/*!************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResetPassword_vue_vue_type_template_id_79c1b966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=template&id=79c1b966& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=template&id=79c1b966&");
/* harmony import */ var _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ResetPassword_vue_vue_type_template_id_79c1b966___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResetPassword_vue_vue_type_template_id_79c1b966___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue":
/*!********************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Subscribe_vue_vue_type_template_id_a3fc08b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=template&id=a3fc08b4& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=template&id=a3fc08b4&");
/* harmony import */ var _Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=script&lang=js&");
/* harmony import */ var _Subscribe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=style&index=0&lang=css& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Subscribe_vue_vue_type_template_id_a3fc08b4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Subscribe_vue_vue_type_template_id_a3fc08b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue":
/*!************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUser_vue_vue_type_template_id_8e175c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUser.vue?vue&type=template&id=8e175c7e& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=template&id=8e175c7e&");
/* harmony import */ var _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUser.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUser_vue_vue_type_template_id_8e175c7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUser_vue_vue_type_template_id_8e175c7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue":
/*!*************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllUsers_vue_vue_type_template_id_9a9ab2fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllUsers.vue?vue&type=template&id=9a9ab2fc& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=template&id=9a9ab2fc&");
/* harmony import */ var _AllUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllUsers.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AllUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AllUsers_vue_vue_type_template_id_9a9ab2fc___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllUsers_vue_vue_type_template_id_9a9ab2fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue":
/*!*************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditUser_vue_vue_type_template_id_3890b0e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditUser.vue?vue&type=template&id=3890b0e0& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=template&id=3890b0e0&");
/* harmony import */ var _EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditUser.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _EditUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditUser.vue?vue&type=style&index=0&lang=css& */ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditUser_vue_vue_type_template_id_3890b0e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditUser_vue_vue_type_template_id_3890b0e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue":
/*!*****************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_a1b701ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=a1b701ee& */ "./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue?vue&type=template&id=a1b701ee&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _About_vue_vue_type_template_id_a1b701ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_a1b701ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue":
/*!*******************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_7a7db51c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=7a7db51c& */ "./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=template&id=7a7db51c&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Contact_vue_vue_type_template_id_7a7db51c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contact_vue_vue_type_template_id_7a7db51c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Activate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDepartment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDepartments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllDepartments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDepartments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditDepartment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tree.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddHoliday.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllHolidays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllHolidays.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllHolidays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditHoliday.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHoliday_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddKudos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllKudos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllKudos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subscribe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subscribe.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditUser.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=template&id=931c692a&":
/*!*************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=template&id=931c692a& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_931c692a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_931c692a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_931c692a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pagination.vue?vue&type=template&id=931c692a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=template&id=931c692a&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/404.vue?vue&type=template&id=5595eb2f&":
/*!*************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/404.vue?vue&type=template&id=5595eb2f& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_5595eb2f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_5595eb2f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_5595eb2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./404.vue?vue&type=template&id=5595eb2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/404.vue?vue&type=template&id=5595eb2f&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=template&id=7b91a22c&":
/*!******************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=template&id=7b91a22c& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_template_id_7b91a22c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_template_id_7b91a22c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Activate_vue_vue_type_template_id_7b91a22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Activate.vue?vue&type=template&id=7b91a22c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=template&id=7b91a22c&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=template&id=5cfda3dc&":
/*!******************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=template&id=5cfda3dc& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_5cfda3dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_5cfda3dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_5cfda3dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=5cfda3dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=template&id=5cfda3dc&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=template&id=12b2992b&":
/*!***********************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=template&id=12b2992b& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_12b2992b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_12b2992b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_12b2992b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=template&id=12b2992b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=template&id=12b2992b&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=template&id=24fcd4dc&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=template&id=24fcd4dc& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_24fcd4dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_24fcd4dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_24fcd4dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=template&id=24fcd4dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=template&id=24fcd4dc&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=template&id=26a153f0&":
/*!***************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=template&id=26a153f0& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_26a153f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_26a153f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_26a153f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=26a153f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=template&id=26a153f0&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=template&id=d6eb3d3e&":
/*!*******************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=template&id=d6eb3d3e& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDepartment_vue_vue_type_template_id_d6eb3d3e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDepartment_vue_vue_type_template_id_d6eb3d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDepartment_vue_vue_type_template_id_d6eb3d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDepartment.vue?vue&type=template&id=d6eb3d3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=template&id=d6eb3d3e&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=template&id=db696a3c&":
/*!********************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=template&id=db696a3c& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDepartments_vue_vue_type_template_id_db696a3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDepartments_vue_vue_type_template_id_db696a3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllDepartments_vue_vue_type_template_id_db696a3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllDepartments.vue?vue&type=template&id=db696a3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=template&id=db696a3c&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=template&id=04c13ede&":
/*!********************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=template&id=04c13ede& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDepartment_vue_vue_type_template_id_04c13ede___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDepartment_vue_vue_type_template_id_04c13ede___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditDepartment_vue_vue_type_template_id_04c13ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditDepartment.vue?vue&type=template&id=04c13ede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=template&id=04c13ede&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=template&id=945c8600&":
/*!**********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=template&id=945c8600& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_template_id_945c8600___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_template_id_945c8600___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_template_id_945c8600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tree.vue?vue&type=template&id=945c8600& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=template&id=945c8600&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=template&id=109efc32&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=template&id=109efc32& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_109efc32___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_109efc32___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_109efc32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=109efc32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=template&id=109efc32&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=template&id=c8f4e632&":
/*!*************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=template&id=c8f4e632& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHoliday_vue_vue_type_template_id_c8f4e632___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHoliday_vue_vue_type_template_id_c8f4e632___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHoliday_vue_vue_type_template_id_c8f4e632___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddHoliday.vue?vue&type=template&id=c8f4e632& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=template&id=c8f4e632&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=template&id=5bde321c&":
/*!**************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=template&id=5bde321c& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllHolidays_vue_vue_type_template_id_5bde321c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllHolidays_vue_vue_type_template_id_5bde321c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllHolidays_vue_vue_type_template_id_5bde321c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllHolidays.vue?vue&type=template&id=5bde321c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=template&id=5bde321c&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=template&id=b8afc7a4&":
/*!**************************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=template&id=b8afc7a4& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHoliday_vue_vue_type_template_id_b8afc7a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHoliday_vue_vue_type_template_id_b8afc7a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditHoliday_vue_vue_type_template_id_b8afc7a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditHoliday.vue?vue&type=template&id=b8afc7a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=template&id=b8afc7a4&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=template&id=38cf9042&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=template&id=38cf9042& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddKudos_vue_vue_type_template_id_38cf9042___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddKudos_vue_vue_type_template_id_38cf9042___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddKudos_vue_vue_type_template_id_38cf9042___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddKudos.vue?vue&type=template&id=38cf9042& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=template&id=38cf9042&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=template&id=fb7ea17c&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=template&id=fb7ea17c& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllKudos_vue_vue_type_template_id_fb7ea17c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllKudos_vue_vue_type_template_id_fb7ea17c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllKudos_vue_vue_type_template_id_fb7ea17c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllKudos.vue?vue&type=template&id=fb7ea17c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=template&id=fb7ea17c&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=template&id=d2027cf6&":
/*!*************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=template&id=d2027cf6& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_d2027cf6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_d2027cf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_d2027cf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=d2027cf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=template&id=d2027cf6&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=template&id=79c1b966&":
/*!*******************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=template&id=79c1b966& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_79c1b966___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_79c1b966___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetPassword_vue_vue_type_template_id_79c1b966___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResetPassword.vue?vue&type=template&id=79c1b966& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=template&id=79c1b966&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=template&id=a3fc08b4&":
/*!***************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=template&id=a3fc08b4& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_template_id_a3fc08b4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_template_id_a3fc08b4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_template_id_a3fc08b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Subscribe.vue?vue&type=template&id=a3fc08b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=template&id=a3fc08b4&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=template&id=8e175c7e&":
/*!*******************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=template&id=8e175c7e& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_8e175c7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_8e175c7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_8e175c7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=template&id=8e175c7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=template&id=8e175c7e&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=template&id=9a9ab2fc&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=template&id=9a9ab2fc& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsers_vue_vue_type_template_id_9a9ab2fc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsers_vue_vue_type_template_id_9a9ab2fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUsers_vue_vue_type_template_id_9a9ab2fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllUsers.vue?vue&type=template&id=9a9ab2fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=template&id=9a9ab2fc&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=template&id=3890b0e0&":
/*!********************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=template&id=3890b0e0& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_3890b0e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_3890b0e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditUser_vue_vue_type_template_id_3890b0e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditUser.vue?vue&type=template&id=3890b0e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=template&id=3890b0e0&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue?vue&type=template&id=a1b701ee&":
/*!************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue?vue&type=template&id=a1b701ee& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_a1b701ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_a1b701ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_a1b701ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=a1b701ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue?vue&type=template&id=a1b701ee&");


/***/ }),

/***/ "./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=template&id=7a7db51c&":
/*!**************************************************************************************************************!*\
  !*** ./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=template&id=7a7db51c& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_7a7db51c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_7a7db51c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_7a7db51c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=template&id=7a7db51c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=template&id=7a7db51c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=template&id=931c692a&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/components/Pagination.vue?vue&type=template&id=931c692a& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-xs-center" }, [
    _c(
      "div",
      { staticClass: "custom_pagination" },
      _vm._l(Math.ceil(_vm.pageNumber / _vm.increment), function(num) {
        return _c("span", { staticClass: "custom_pagination_item" }, [
          _c(
            "span",
            {
              class: " " + (num / _vm.page === 1 ? "active" : "no"),
              on: {
                click: function($event) {
                  return _vm.next(num)
                }
              }
            },
            [_vm._v(_vm._s(num))]
          )
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/404.vue?vue&type=template&id=5595eb2f&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/404.vue?vue&type=template&id=5595eb2f& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", [
    _c(
      "div",
      { staticClass: "img_404", staticStyle: { "text-align": "center" } },
      [
        _c(
          "svg",
          {
            attrs: {
              viewBox: "0 0 512 512",
              height: "70vh",
              xmlns: "http://www.w3.org/2000/svg"
            }
          },
          [
            _c("path", {
              attrs: {
                d:
                  "m512 96v384c0 17.679688-14.320312 32-32 32h-448c-17.679688 0-32-14.320312-32-32v-384zm0 0",
                fill: "#e4edfb"
              }
            }),
            _c("path", {
              attrs: { d: "m0 0h512v128h-512zm0 0", fill: "#300D4F" }
            }),
            _c("path", { attrs: { d: "m64 48h32v32h-32zm0 0", fill: "#fff" } }),
            _c("path", {
              attrs: { d: "m128 48h32v32h-32zm0 0", fill: "#fff" }
            }),
            _c("path", {
              attrs: {
                d:
                  "m432 80h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",
                fill: "#62808c"
              }
            }),
            _c("g", { attrs: { fill: "#300D4F" } }, [
              _c("path", {
                attrs: {
                  d:
                    "m160 400h-32v-32h-64v-36.433594l54.945312-91.566406h41.054688v96h16c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-16zm-61.34375-64h29.34375v-48.894531zm0 0"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "m416 400h-32v-32h-64v-36.433594l54.945312-91.566406h41.054688v96h16c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16h-16zm-61.34375-64h29.34375v-48.894531zm0 0"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "m256 400c-26.511719 0-48-21.488281-48-48v-64c0-26.511719 21.488281-48 48-48s48 21.488281 48 48v64c0 26.511719-21.488281 48-48 48zm0-32c8.832031 0 16-7.167969 16-16v-64c0-8.832031-7.167969-16-16-16s-16 7.167969-16 16v64c0 8.832031 7.167969 16 16 16zm0 0"
                }
              })
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=template&id=7b91a22c&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Activate.vue?vue&type=template&id=7b91a22c& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "subscribe", attrs: { flat: "", color: "transparent" } },
    [
      _c(
        "v-container",
        [
          _c("h1", [_vm._v("Account activation")]),
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { id: "check-register-form" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.passwordErrors,
                  label: "password",
                  type: "password",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.password.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.password.$touch()
                  }
                },
                model: {
                  value: _vm.password,
                  callback: function($$v) {
                    _vm.password = $$v
                  },
                  expression: "password"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.repeatPasswordErrors,
                  label: "Confirm password",
                  type: "password",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.repeatPassword.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.repeatPassword.$touch()
                  }
                },
                model: {
                  value: _vm.repeatPassword,
                  callback: function($$v) {
                    _vm.repeatPassword = $$v
                  },
                  expression: "repeatPassword"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", form: "check-register-form" },
                  on: { click: _vm.submit }
                },
                [_vm._v("Reset password")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [
              _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
              _c(
                "v-btn",
                {
                  attrs: { color: "pink", flat: "" },
                  on: {
                    click: function($event) {
                      _vm.snackbar = false
                    }
                  }
                },
                [_vm._v("\n            Close\n        ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=template&id=5cfda3dc&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/Register.vue?vue&type=template&id=5cfda3dc& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("h1", [_vm._v("Register ")]),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { id: "check-register-form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit.apply(null, arguments)
            }
          }
        },
        [
          _c("v-text-field", {
            attrs: {
              "error-messages": _vm.nameErrors,
              label: "First name",
              required: ""
            },
            on: {
              input: function($event) {
                return _vm.$v.name.$touch()
              },
              blur: function($event) {
                return _vm.$v.name.$touch()
              }
            },
            model: {
              value: _vm.name,
              callback: function($$v) {
                _vm.name = $$v
              },
              expression: "name"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "error-messages": _vm.surnameErrors,
              label: "Last name",
              required: ""
            },
            on: {
              input: function($event) {
                return _vm.$v.surname.$touch()
              },
              blur: function($event) {
                return _vm.$v.surname.$touch()
              }
            },
            model: {
              value: _vm.surname,
              callback: function($$v) {
                _vm.surname = $$v
              },
              expression: "surname"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "error-messages": _vm.emailErrors,
              label: "E-mail",
              name: "email",
              required: ""
            },
            on: {
              input: function($event) {
                return _vm.$v.email.$touch()
              },
              blur: function($event) {
                return _vm.$v.email.$touch()
              }
            },
            model: {
              value: _vm.email,
              callback: function($$v) {
                _vm.email = $$v
              },
              expression: "email"
            }
          }),
          _vm._v(" "),
          _c("v-text-field", {
            attrs: {
              "error-messages": _vm.companyErrors,
              label: "Company name",
              required: ""
            },
            on: {
              input: function($event) {
                return _vm.$v.company.$touch()
              },
              blur: function($event) {
                return _vm.$v.company.$touch()
              }
            },
            model: {
              value: _vm.company,
              callback: function($$v) {
                _vm.company = $$v
              },
              expression: "company"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                loading: _vm.loading,
                disabled: _vm.loading,
                color: "primary",
                form: "check-register-form"
              },
              on: { click: _vm.submit }
            },
            [_vm._v("Register")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "p",
        [
          _vm._v("Already have an account? "),
          _c("router-link", { attrs: { to: "/login" } }, [_vm._v("login")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=template&id=12b2992b&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Admin.vue?vue&type=template&id=12b2992b& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "admin_area " },
    [
      _c(
        "div",
        { staticClass: "admin_area_header" },
        [
          _c("h1", [_vm._v("Admin area:")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              items: _vm.views,
              label: "Change View",
              "persistent-hint": "",
              solo: "",
              height: "40"
            },
            on: { input: _vm.onSelect }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _vm.selectedView === "All" || _vm.selectedView === "Employees"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "", "align-start": "" } },
                [
                  _c("h3", [_vm._v("Manage employees")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("You can add, archive or delete employees.")
                  ]),
                  _vm._v(" "),
                  _c("AllUsers"),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Departments"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Manage Departments")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("Create departments and assign its employees.")
                  ]),
                  _vm._v(" "),
                  _c("AllDepartments"),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Holidays"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Manage Holidays")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Request holidays, edit, archive or delete all holidays."
                    )
                  ]),
                  _vm._v(" "),
                  _c("AllHolidays", { attrs: { single: 0 } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Kudos"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Manage Kudos")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Give or like kudos, track your most liked employees"
                    )
                  ]),
                  _vm._v(" "),
                  _c("AllKudos"),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Subscription"
            ? _c("v-flex", { attrs: { xs12: "", sm12: "" } }, [
                _c("h3", [_vm._v("Manage Subscription")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Check your latest invoice, upgrade or change your billing details."
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "admin_area_sub" }, [
                  _c(
                    "div",
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/subscribe" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "grey-color admin_add",
                              attrs: { fab: "", small: "" }
                            },
                            [
                              _c("v-icon", { attrs: { color: "black" } }, [
                                _vm._v("fas fa-cog")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  this.invoice
                    ? _c("div", [
                        _c(
                          "a",
                          { attrs: { href: this.invoice, target: "_blank" } },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "grey-color admin_add",
                                attrs: { fab: "", small: "" }
                              },
                              [
                                _c("v-icon", { attrs: { color: "black" } }, [
                                  _vm._v("fas fa-download")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ])
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=template&id=24fcd4dc&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Calendar.vue?vue&type=template&id=24fcd4dc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "admin_area" },
    [
      _c(
        "v-layout",
        [
          _c(
            "v-flex",
            [
              _c(
                "v-sheet",
                [
                  _c("FullCalendar", {
                    attrs: {
                      defaultView: "dayGridMonth",
                      plugins: _vm.calendarPlugins,
                      events: _vm.events
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=template&id=26a153f0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Dashboard.vue?vue&type=template&id=26a153f0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "admin_area" },
    [
      _c(
        "div",
        { staticClass: "admin_area_header" },
        [
          _c("div", [
            _c("h1", [_vm._v(_vm._s(_vm.user_name) + "'s Dashboard:")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(_vm._s(_vm.user.role && _vm.user.role)),
              _c("br"),
              _vm._v(
                "\n             " +
                  _vm._s(_vm.department && "@ " + _vm.department)
              )
            ])
          ]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              items: _vm.views,
              label: "Change View",
              "persistent-hint": "",
              solo: "",
              height: "40"
            },
            on: { input: _vm.onSelect }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _vm.selectedView === "All" || _vm.selectedView === "Holidays"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Holidays")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Request holidays, edit, view archived or filter your holidays view."
                    )
                  ]),
                  _vm._v(" "),
                  _c("AllHolidays", { attrs: { single: _vm.user_id } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.supervisor &&
          (_vm.selectedView === "All" || _vm.selectedView === "Holidays")
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("My team holidays")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Approve or deny your team's holiday.")]),
                  _vm._v(" "),
                  _c("AllHolidays", { attrs: { team: _vm.user_id } })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "admin_spacer" }),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Kudos"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Kudos")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v("Give or like kudos, track most liked employees")
                  ]),
                  _vm._v(" "),
                  _c("AllKudos"),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Kudos"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("My Kudos")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("What others have said about you.")]),
                  _vm._v(" "),
                  _c("AllKudos", { attrs: { single: _vm.user_id } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Departments"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Departments")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Company departments.")]),
                  _vm._v(" "),
                  _c("AllDepartments", { attrs: { single: _vm.user_id } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selectedView === "All" || _vm.selectedView === "Employees"
            ? _c(
                "v-flex",
                { attrs: { xs12: "", sm12: "" } },
                [
                  _c("h3", [_vm._v("Employees")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Company employees details.")]),
                  _vm._v(" "),
                  _c("AllUsers", { attrs: { single: _vm.user_id } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "admin_spacer" })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=template&id=d6eb3d3e&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AddDepartment.vue?vue&type=template&id=d6eb3d3e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { staticClass: "pa-0" }, [
    _c(
      "form",
      [
        _c(
          "v-container",
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { staticClass: "pa-0", attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", md6: "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            "error-messages": _vm.nameErrors,
                            label: "Department name",
                            name: "name",
                            required: ""
                          },
                          on: {
                            input: function($event) {
                              return _vm.$v.name.$touch()
                            },
                            blur: function($event) {
                              return _vm.$v.name.$touch()
                            }
                          },
                          model: {
                            value: _vm.name,
                            callback: function($$v) {
                              _vm.name = $$v
                            },
                            expression: "name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label: "Head of department",
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelect },
                      model: {
                        value: _vm.head,
                        callback: function($$v) {
                          _vm.head = $$v
                        },
                        expression: "head"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        attach: "",
                        chips: "",
                        label: "Employees",
                        multiple: ""
                      },
                      on: { input: _vm.onSelectMultiple }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Add")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=template&id=db696a3c&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/AllDepartments.vue?vue&type=template&id=db696a3c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "admin_layout", attrs: { row: "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "div",
            { staticClass: "department_head" },
            [
              !_vm.single
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color ",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.addDepartment }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("add")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        336012803
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Add department")])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              {
                                staticClass: "grey-color ",
                                attrs: { fab: "", small: "" },
                                on: { click: _vm.viewAll }
                              },
                              on
                            ),
                            [
                              _c("v-icon", { attrs: { color: "black" } }, [
                                _vm._v("far fa-eye")
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [_vm._v(" "), _c("span", [_vm._v("View company tree")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "admin_area_result" },
            [
              _vm.load
                ? _c("div", { staticClass: "custom-loader-wrapper" }, [
                    _c("div", { staticClass: "custom-loader" })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.allDepartments, function(department, index) {
                return _c(
                  "v-card",
                  { key: department.id, attrs: { avatar: "", hover: "" } },
                  [
                    _c(
                      "v-list",
                      [
                        _c(
                          "v-list-tile",
                          [
                            !_vm.single
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "transparent-color",
                                    attrs: { fab: "", small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editDepartment(department)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { color: "grey" } }, [
                                      _vm._v("fas fa-user-edit")
                                    ])
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.single
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "transparent-color",
                                    attrs: { fab: "", small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteDepartment(department)
                                      }
                                    }
                                  },
                                  [
                                    _c("v-icon", { attrs: { color: "pink" } }, [
                                      _vm._v("fas fa-trash")
                                    ])
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-list-tile-content",
                              [
                                _c("v-list-tile-title", {
                                  domProps: {
                                    textContent: _vm._s(
                                      department.department_name
                                    )
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-tile-content",
                              [
                                _c("v-list-tile-title", {
                                  domProps: {
                                    textContent: _vm._s(department.name)
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Deleting Department:")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    Are you sure you want to delete this department?\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.deleteConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Delete\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogEdit,
                callback: function($$v) {
                  _vm.dialogEdit = $$v
                },
                expression: "dialogEdit"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogEdit = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("Edit Department:")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c("EditDepartment", {
                        attrs: { department: _vm.department },
                        on: { clicked: _vm.onDepartmentUpdated }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogAddDepartment,
                callback: function($$v) {
                  _vm.dialogAddDepartment = $$v
                },
                expression: "dialogAddDepartment"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogAddDepartment = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("New Department:")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c("AddDepartment", {
                        on: { clicked: _vm.onDepartmentAdded }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogTree,
                callback: function($$v) {
                  _vm.dialogTree = $$v
                },
                expression: "dialogTree"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogTree = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v(_vm._s(_vm.company_name))]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list", [_c("Tree")], 1)
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=template&id=04c13ede&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/EditDepartment.vue?vue&type=template&id=04c13ede& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", [
    _c(
      "form",
      [
        _c(
          "v-container",
          { staticClass: "pa-0" },
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { staticClass: "pa-0", attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-flex",
                      { attrs: { xs12: "", md6: "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            label:
                              "Department name: " +
                              _vm.department.department_name
                          },
                          model: {
                            value: _vm.departmentName,
                            callback: function($$v) {
                              _vm.departmentName = $$v
                            },
                            expression: "departmentName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label:
                          "Head of Department: " +
                          (_vm.department.user_name
                            ? _vm.department.user_name
                            : ""),
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelect }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.allUsers,
                        attach: "",
                        chips: "",
                        label: "Employees",
                        multiple: ""
                      },
                      on: { input: _vm.onSelectMultiple },
                      model: {
                        value: _vm.depEmployees,
                        callback: function($$v) {
                          _vm.depEmployees = $$v
                        },
                        expression: "depEmployees"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=template&id=945c8600&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Departments/Tree.vue?vue&type=template&id=945c8600& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "department_tree", attrs: { row: "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [_c("TreeChart", { attrs: { json: _vm.treeData } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=template&id=109efc32&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ForgotPassword.vue?vue&type=template&id=109efc32& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "subscribe", attrs: { flat: "", color: "transparent" } },
    [
      _c(
        "v-container",
        [
          _c("h1", [_vm._v("Forgot password")]),
          _vm._v(" "),
          _c(
            "v-form",
            {
              attrs: { id: "check-login-form" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit.apply(null, arguments)
                }
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  "error-messages": _vm.emailErrors,
                  label: "E-mail",
                  required: ""
                },
                on: {
                  input: function($event) {
                    return _vm.$v.email.$touch()
                  },
                  blur: function($event) {
                    return _vm.$v.email.$touch()
                  }
                },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    type: "submit",
                    color: "primary",
                    form: "check-login-form"
                  },
                  on: { click: _vm.submit }
                },
                [_vm._v("submit")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=template&id=c8f4e632&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AddHoliday.vue?vue&type=template&id=c8f4e632& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { staticClass: "pa-0" }, [
    _c(
      "form",
      [
        _c(
          "v-container",
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { staticClass: "pa-0", attrs: { xs12: "", md12: "" } },
                  [
                    _vm.singleUser === 0
                      ? _c("v-select", {
                          attrs: {
                            "item-text": "select.name",
                            "item-value": "select",
                            items: _vm.users,
                            label: "Select user",
                            "persistent-hint": ""
                          },
                          on: { input: _vm.onSelect }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-menu",
                      {
                        ref: "menu",
                        attrs: {
                          "close-on-content-click": false,
                          "nudge-right": 40,
                          lazy: "",
                          transition: "scale-transition",
                          "offset-y": "",
                          "full-width": "",
                          "min-width": "290px"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-text-field",
                                  _vm._g(
                                    {
                                      attrs: {
                                        label: "Start date",
                                        "prepend-icon": "event",
                                        readonly: ""
                                      },
                                      model: {
                                        value: _vm.date,
                                        callback: function($$v) {
                                          _vm.date = $$v
                                        },
                                        expression: "date"
                                      }
                                    },
                                    on
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.menu,
                          callback: function($$v) {
                            _vm.menu = $$v
                          },
                          expression: "menu"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c("v-date-picker", {
                          ref: "picker",
                          attrs: { min: "1950-01-01" },
                          on: { change: _vm.save },
                          model: {
                            value: _vm.date,
                            callback: function($$v) {
                              _vm.date = $$v
                            },
                            expression: "date"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-menu",
                      {
                        ref: "menuEnd",
                        attrs: {
                          "close-on-content-click": false,
                          "nudge-right": 40,
                          lazy: "",
                          transition: "scale-transition",
                          "offset-y": "",
                          "full-width": "",
                          "min-width": "290px"
                        },
                        scopedSlots: _vm._u(
                          [
                            !_vm.displayAm
                              ? {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          {
                                            attrs: {
                                              label: "End date",
                                              "prepend-icon": "event",
                                              readonly: ""
                                            },
                                            model: {
                                              value: _vm.dateEnd,
                                              callback: function($$v) {
                                                _vm.dateEnd = $$v
                                              },
                                              expression: "dateEnd"
                                            }
                                          },
                                          on
                                        )
                                      )
                                    ]
                                  }
                                }
                              : null
                          ],
                          null,
                          true
                        ),
                        model: {
                          value: _vm.menuEnd,
                          callback: function($$v) {
                            _vm.menuEnd = $$v
                          },
                          expression: "menuEnd"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c("v-date-picker", {
                          attrs: { min: _vm.min },
                          on: { change: _vm.save },
                          model: {
                            value: _vm.dateEnd,
                            callback: function($$v) {
                              _vm.dateEnd = $$v
                            },
                            expression: "dateEnd"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "type_name",
                        "item-value": "type_name",
                        items: _vm.types,
                        label: "Select type",
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelectType },
                      model: {
                        value: _vm.type,
                        callback: function($$v) {
                          _vm.type = $$v
                        },
                        expression: "type"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-radio-group",
                      {
                        model: {
                          value: _vm.radioGroup,
                          callback: function($$v) {
                            _vm.radioGroup = $$v
                          },
                          expression: "radioGroup"
                        }
                      },
                      [
                        _c("v-radio", {
                          attrs: {
                            label: "Half day",
                            color: "primary",
                            value: "half"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-radio", {
                          attrs: {
                            label: "Full day",
                            value: "full",
                            color: "primary"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _vm.displayAm
                      ? _c(
                          "v-radio-group",
                          {
                            model: {
                              value: _vm.radioGroupAm,
                              callback: function($$v) {
                                _vm.radioGroupAm = $$v
                              },
                              expression: "radioGroupAm"
                            }
                          },
                          [
                            _c("v-radio", {
                              attrs: {
                                label: "AM",
                                color: "primary",
                                value: "am"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-radio", {
                              attrs: {
                                label: "PM",
                                value: "pm",
                                color: "primary"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Book")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=template&id=5bde321c&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/AllHolidays.vue?vue&type=template&id=5bde321c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "admin_layout", attrs: { row: "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "div",
            { staticClass: "holiday_head" },
            [
              !_vm.team
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color ",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.addHoliday }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("add")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1442303481
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Add holiday")])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.all
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.viewArchived }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("fas fa-archive")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        434295664
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("View archived")])]
                  )
                : _c(
                    "v-btn",
                    {
                      staticClass: "grey-color",
                      attrs: { fab: "", small: "" },
                      on: { click: _vm.getAll }
                    },
                    [
                      _c("v-icon", { attrs: { color: "black" } }, [
                        _vm._v("fas fa-long-arrow-alt-left")
                      ])
                    ],
                    1
                  ),
              _vm._v(" "),
              _c("v-select", {
                attrs: { items: _vm.sortBy, label: "Filter by", solo: "" },
                on: { input: _vm.onSelect }
              }),
              _vm._v(" "),
              _vm.$route.path === "/admin"
                ? _c("v-select", {
                    attrs: { items: _vm.actions, label: "Actions", solo: "" },
                    on: { input: _vm.onSelectAction }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "admin_area_result" },
            [
              _vm.load
                ? _c("div", { staticClass: "custom-loader-wrapper" }, [
                    _c("div", { staticClass: "custom-loader" })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.holidays, function(holiday, index) {
                return index >= _vm.currentPage &&
                  index < _vm.currentPage + _vm.increment
                  ? _c(
                      "v-card",
                      {
                        key: holiday.id,
                        class: !_vm.all
                          ? "grey-card"
                          : holiday.approved + "_bg",
                        attrs: { avatar: "", hover: "" }
                      },
                      [
                        (_vm.selectedHoliday && _vm.selectedHoliday !== "All"
                        ? holiday.approved === _vm.selectedHoliday
                        : true)
                          ? _c(
                              "v-list",
                              [
                                _c(
                                  "v-list-tile",
                                  { staticClass: "list-item" },
                                  [
                                    _vm.$route.path === "/admin"
                                      ? _c("v-checkbox", {
                                          staticStyle: { "max-width": "20px" },
                                          attrs: {
                                            value: holiday.id,
                                            color: "primary"
                                          },
                                          model: {
                                            value: _vm.holidayIds,
                                            callback: function($$v) {
                                              _vm.holidayIds = $$v
                                            },
                                            expression: "holidayIds"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.team && _vm.all
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editHoliday(holiday)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("fas fa-user-edit")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.$route.path === "/admin"
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.archiveHoliday(
                                                  holiday.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("fas fa-archive")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.team && !_vm.single
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteHoliday(
                                                  holiday.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "pink" } },
                                              [_vm._v("fas fa-trash")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      { staticClass: "item-text" },
                                      [
                                        _c("v-list-tile-title", {
                                          domProps: {
                                            textContent: _vm._s(holiday.name)
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("v-list-tile-title", {
                                          domProps: {
                                            textContent: _vm._s(
                                              _vm.format(holiday.start_date) +
                                                " to " +
                                                _vm.format(holiday.end_date)
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      {
                                        staticClass: "item-count",
                                        attrs: { "align-end": "" }
                                      },
                                      [
                                        !holiday.am_pm
                                          ? _c("v-list-tile-title", {
                                              domProps: {
                                                textContent: _vm._s(
                                                  _vm.countHoliday(holiday) +
                                                    " days"
                                                )
                                              }
                                            })
                                          : _c("v-list-tile-title", {
                                              domProps: {
                                                textContent: _vm._s(
                                                  "Half day: " + holiday.am_pm
                                                )
                                              }
                                            })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    holiday.approved == "pending" &&
                                    _vm.is_superuser === 1
                                      ? _c(
                                          "v-list-tile-action",
                                          {
                                            staticClass: "btn",
                                            on: {
                                              click: function($event) {
                                                return _vm.approveHoliday(
                                                  holiday,
                                                  "approved"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "primary" } },
                                              [_vm._v("fas fa-check")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    holiday.approved == "pending" &&
                                    _vm.is_superuser === 1
                                      ? _c(
                                          "v-list-tile-action",
                                          {
                                            staticClass: "btn appending",
                                            on: {
                                              click: function($event) {
                                                return _vm.approveHoliday(
                                                  holiday,
                                                  "denied"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "secondary" } },
                                              [_vm._v("fas fa-times")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    holiday.approved !== "pending"
                                      ? _c(
                                          "v-list-tile-action",
                                          {
                                            staticClass:
                                              "btn pending item-count"
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "holiday_status" },
                                              [_vm._v(_vm._s(holiday.approved))]
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-xs-center pagination-wrapper" },
            [
              _c(
                "div",
                { staticClass: "show_select" },
                [
                  _c("v-select", {
                    attrs: {
                      items: ["6", "12", "24"],
                      label: _vm.show,
                      solo: ""
                    },
                    on: { input: _vm.onShow },
                    model: {
                      value: _vm.show,
                      callback: function($$v) {
                        _vm.show = $$v
                      },
                      expression: "show"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.pageNumber > _vm.increment
                ? _c("v-pagination", {
                    staticClass: "grey-page",
                    attrs: {
                      length: Math.ceil(_vm.pageNumber / _vm.increment),
                      circle: _vm.circle,
                      "total-visible": 5,
                      color: "black"
                    },
                    on: { input: _vm.next },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.total
                ? _c("div", { staticClass: "total" }, [
                    _c("span", [_vm._v("Total: " + _vm._s(_vm.total))])
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Deleting Holiday:")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    Are you sure you want to delete this holiday?\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.deleteConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Delete\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialogArchive,
                callback: function($$v) {
                  _vm.dialogArchive = $$v
                },
                expression: "dialogArchive"
              }
            },
            [
              _c(
                "v-card",
                [
                  _vm.all
                    ? _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Archiving holiday:")
                      ])
                    : _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Restore holiday:")
                      ]),
                  _vm._v(" "),
                  _vm.all
                    ? _c("v-card-text", [
                        _vm._v(
                          "\n                    Are you sure you want to add this holiday to archive?\n                "
                        )
                      ])
                    : _c("v-card-text", [
                        _vm._v(
                          "\n                    Are you sure you want to restore this holiday?\n                "
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialogArchive = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.archiveConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Confirm\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogEdit,
                callback: function($$v) {
                  _vm.dialogEdit = $$v
                },
                expression: "dialogEdit"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogEdit = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("Edit holiday")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c("EditHoliday", {
                        attrs: { holiday: _vm.holiday },
                        on: { clicked: _vm.onHolidayUpdated }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogAddHoliday,
                callback: function($$v) {
                  _vm.dialogAddHoliday = $$v
                },
                expression: "dialogAddHoliday"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogAddHoliday = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("New holiday")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c("AddHoliday", {
                        attrs: { singleUser: _vm.single },
                        on: { clicked: _vm.onHolidayAdded }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=template&id=b8afc7a4&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Holidays/EditHoliday.vue?vue&type=template&id=b8afc7a4& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { staticClass: "pa-0" }, [
    _c(
      "form",
      [
        _c(
          "v-container",
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-menu",
                      {
                        ref: "menu",
                        attrs: {
                          "close-on-content-click": false,
                          "nudge-right": 40,
                          lazy: "",
                          transition: "scale-transition",
                          "offset-y": "",
                          "full-width": "",
                          "min-width": "290px"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-text-field",
                                  _vm._g(
                                    {
                                      attrs: {
                                        label: _vm.format(
                                          _vm.holiday.start_date
                                        ),
                                        "prepend-icon": "event",
                                        readonly: ""
                                      },
                                      model: {
                                        value: _vm.date,
                                        callback: function($$v) {
                                          _vm.date = $$v
                                        },
                                        expression: "date"
                                      }
                                    },
                                    on
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.menu,
                          callback: function($$v) {
                            _vm.menu = $$v
                          },
                          expression: "menu"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c("v-date-picker", {
                          ref: "picker",
                          attrs: { min: "1950-01-01" },
                          on: { change: _vm.save },
                          model: {
                            value: _vm.date,
                            callback: function($$v) {
                              _vm.date = $$v
                            },
                            expression: "date"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-menu",
                      {
                        ref: "menuEnd",
                        attrs: {
                          "close-on-content-click": false,
                          "nudge-right": 40,
                          lazy: "",
                          transition: "scale-transition",
                          "offset-y": "",
                          "full-width": "",
                          "min-width": "290px"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-text-field",
                                  _vm._g(
                                    {
                                      attrs: {
                                        label: _vm.format(_vm.holiday.end_date),
                                        "prepend-icon": "event",
                                        readonly: ""
                                      },
                                      model: {
                                        value: _vm.dateEnd,
                                        callback: function($$v) {
                                          _vm.dateEnd = $$v
                                        },
                                        expression: "dateEnd"
                                      }
                                    },
                                    on
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.menuEnd,
                          callback: function($$v) {
                            _vm.menuEnd = $$v
                          },
                          expression: "menuEnd"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c("v-date-picker", {
                          attrs: { min: _vm.min },
                          on: { change: _vm.save },
                          model: {
                            value: _vm.dateEnd,
                            callback: function($$v) {
                              _vm.dateEnd = $$v
                            },
                            expression: "dateEnd"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=template&id=38cf9042&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AddKudos.vue?vue&type=template&id=38cf9042& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { staticClass: "pa-0" }, [
    _c(
      "form",
      [
        _c(
          "v-container",
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { staticClass: "pa-0", attrs: { xs12: "", md12: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label: "Employees",
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelect },
                      model: {
                        value: _vm.username,
                        callback: function($$v) {
                          _vm.username = $$v
                        },
                        expression: "username"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c("v-textarea", {
                      attrs: {
                        label: "Message",
                        "error-messages": _vm.messageErrors,
                        required: ""
                      },
                      on: {
                        input: function($event) {
                          return _vm.$v.message.$touch()
                        },
                        blur: function($event) {
                          return _vm.$v.message.$touch()
                        }
                      },
                      model: {
                        value: _vm.message,
                        callback: function($$v) {
                          _vm.message = $$v
                        },
                        expression: "message"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Give kudos")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=template&id=fb7ea17c&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Kudos/AllKudos.vue?vue&type=template&id=fb7ea17c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "admin_layout", attrs: { row: "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "div",
            { staticClass: "kudos_head" },
            [
              !_vm.single
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color ",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.addKudos }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("add")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        4340161
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Add Kudos")])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.all && !_vm.single
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color ",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.award }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("fas fa-award")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3359054617
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Kudos Leaderboard ")])]
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.all && !_vm.single
                ? _c(
                    "v-btn",
                    {
                      staticClass: "grey-color",
                      attrs: { fab: "", small: "" },
                      on: { click: _vm.getAll }
                    },
                    [
                      _c("v-icon", { attrs: { color: "black" } }, [
                        _vm._v("fas fa-long-arrow-alt-left")
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.allK
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.viewArchived }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("fas fa-archive")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        434295664
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("View archived")])]
                  )
                : _c(
                    "v-btn",
                    {
                      staticClass: "grey-color",
                      attrs: { fab: "", small: "" },
                      on: { click: _vm.getAll }
                    },
                    [
                      _c("v-icon", { attrs: { color: "black" } }, [
                        _vm._v("fas fa-long-arrow-alt-left")
                      ])
                    ],
                    1
                  ),
              _vm._v(" "),
              _vm.$route.path === "/admin"
                ? _c("v-select", {
                    attrs: { items: _vm.actions, label: "Actions", solo: "" },
                    on: { input: _vm.onSelectAction }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: Object.keys(_vm.months),
                  label: "Sort by months",
                  solo: ""
                },
                on: { input: _vm.onSelectMonth }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "admin_area_result" },
            [
              _vm.load
                ? _c("div", { staticClass: "custom-loader-wrapper" }, [
                    _c("div", { staticClass: "custom-loader" })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.kudosObject, function(kudo, index) {
                return index >= _vm.currentPage &&
                  index < _vm.currentPage + _vm.increment
                  ? _c(
                      "v-card",
                      {
                        key: kudo.id,
                        class: !_vm.allK && "grey-card",
                        attrs: { avatar: "", hover: "", height: "auto" }
                      },
                      [
                        _c(
                          "v-list",
                          [
                            _c(
                              "v-list-tile",
                              {
                                staticClass: "list-item kudos-item",
                                attrs: { avatar: "" }
                              },
                              [
                                _vm.$route.path === "/admin" && _vm.all
                                  ? _c(
                                      "v-list-tile-avatar",
                                      [
                                        _c("v-checkbox", {
                                          staticStyle: { "max-width": "20px" },
                                          attrs: {
                                            color: "primary",
                                            value: kudo.id
                                          },
                                          model: {
                                            value: _vm.KudosIds,
                                            callback: function($$v) {
                                              _vm.KudosIds = $$v
                                            },
                                            expression: "KudosIds"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("v-list-tile-avatar", [
                                  !kudo.avatar
                                    ? _c("img", {
                                        attrs: {
                                          src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                          alt: "",
                                          width: "45"
                                        }
                                      })
                                    : _c("img", { attrs: { src: kudo.avatar } })
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-list-tile-content",
                                  [
                                    _c("v-list-tile-title", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          kudo.receiver_name +
                                            " " +
                                            kudo.receiver_surname
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.all
                                      ? _c("v-list-tile-sub-title", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              "<span class='text--primary'>" +
                                                (kudo.giver_name +
                                                  " " +
                                                  kudo.giver_surname +
                                                  ": ") +
                                                "</span> &mdash;" +
                                                kudo.message +
                                                "  "
                                            )
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("v-list-tile-sub-title", {
                                      domProps: {
                                        innerHTML: _vm._s(
                                          "<span class='text--primary'>" +
                                            _vm.formatDate(kudo.created_at) +
                                            "</span>"
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.all
                              ? _c(
                                  "v-list-tile",
                                  { staticClass: "kudos_actions" },
                                  [
                                    _vm.$route.path === "/admin"
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteKudos(kudo)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "pink" } },
                                              [_vm._v("fas fa-trash")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.$route.path === "/admin"
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.archiveKudos(kudo.id)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("fas fa-archive")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.checkLike(kudo)
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.likeKudos(kudo)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("far fa-heart")]
                                            )
                                          ],
                                          1
                                        )
                                      : _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("fas fa-heart")]
                                            )
                                          ],
                                          1
                                        ),
                                    _vm._v(" "),
                                    kudo.likes_number !== 0
                                      ? _c(
                                          "span",
                                          { staticClass: "kudos_number" },
                                          [
                                            _vm._v(
                                              "\n                       " +
                                                _vm._s(kudo.likes_number) +
                                                "\n                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _c(
                                  "v-list-tile",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "transparent-color",
                                        attrs: { fab: "", small: "" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(kudo.kudos_number) +
                                            "\n                        "
                                        ),
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "grey" } },
                                          [_vm._v("fas fa-award")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "transparent-color",
                                        attrs: { fab: "", small: "" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(kudo.likes_number) +
                                            "\n                        "
                                        ),
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "grey" } },
                                          [_vm._v("fas fa-heart")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-xs-center pagination-wrapper" },
            [
              _c(
                "div",
                { staticClass: "show_select" },
                [
                  _c("v-select", {
                    attrs: {
                      items: ["6", "12", "24"],
                      label: _vm.show,
                      solo: ""
                    },
                    on: { input: _vm.onShow },
                    model: {
                      value: _vm.show,
                      callback: function($$v) {
                        _vm.show = $$v
                      },
                      expression: "show"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.pageNumber > _vm.increment
                ? _c("v-pagination", {
                    staticClass: "grey-page",
                    attrs: {
                      length: Math.ceil(_vm.pageNumber / _vm.increment),
                      circle: _vm.circle,
                      "total-visible": 5,
                      color: "black"
                    },
                    on: { input: _vm.next },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.total
                ? _c("div", { staticClass: "total" }, [
                    _c("span", [_vm._v("Total: " + _vm._s(_vm.total))])
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Deleting Kudos:")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    Are you sure you want to delete this Kudos?\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.deleteConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Delete\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialogArchive,
                callback: function($$v) {
                  _vm.dialogArchive = $$v
                },
                expression: "dialogArchive"
              }
            },
            [
              _c(
                "v-card",
                [
                  _vm.allK
                    ? _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Archiving kudos:")
                      ])
                    : _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Restore kudos:")
                      ]),
                  _vm._v(" "),
                  _vm.all
                    ? _c("v-card-text", [
                        _vm._v(
                          "\n                    Are you sure you want to add this kudos to archive?\n                "
                        )
                      ])
                    : _c("v-card-text", [
                        _vm._v(
                          "\n                    Are you sure you want to restore this kudos?\n                "
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialogArchive = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.archiveConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Confirm\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogAdd,
                callback: function($$v) {
                  _vm.dialogAdd = $$v
                },
                expression: "dialogAdd"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogAdd = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("Kudos: ")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [_c("AddKudos", { on: { clicked: _vm.onKudosAdded } })],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=template&id=d2027cf6&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Profile.vue?vue&type=template&id=d2027cf6& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "admin_layout", attrs: { row: "" } },
    [
      _c(
        "v-flex",
        { staticClass: "profile", attrs: { xs12: "", sm12: "" } },
        [
          _vm.user
            ? _c(
                "v-card",
                [
                  _c(
                    "v-img",
                    {
                      staticClass: "profile_img",
                      attrs: {
                        src: _vm.user.avatar
                          ? _vm.user.avatar
                          : __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/user.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                        height: "300px",
                        contain: "",
                        "aspect-ratio": "2"
                      }
                    },
                    [
                      _c("div", { staticClass: "profile_img_overlay" }),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { column: "", "fill-height": "" } },
                        [
                          !_vm.userProfile
                            ? _c(
                                "v-card-title",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "grey-color admin_add",
                                      attrs: { fab: "", small: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editUser(_vm.currentUser)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { attrs: { color: "black" } },
                                        [_vm._v("edit")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-card-title",
                            { staticClass: "white--text pl-5 pt-5" },
                            [
                              _c("div", { staticClass: "display-1 " }, [
                                _vm._v(
                                  _vm._s(_vm.user.name + " " + _vm.user.surname)
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-sub-title",
                                { staticClass: "white--text" },
                                [_vm._v(_vm._s(_vm.user.role && _vm.user.role))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-sub-title",
                                { staticClass: "white--text" },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.department && "@ " + _vm.department
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { "two-line": "" } },
                    [
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "grey" } }, [
                                _vm._v("phone")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.user.telephone
                                      ? _vm.user.telephone
                                      : "(--) -- -- -- --"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [_vm._v("Mobile")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v("chat")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "grey" } }, [
                                _vm._v("mail")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(_vm._s(_vm.user.email))
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Email address")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "grey" } }, [
                                _vm._v("fas fa-birthday-cake")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.user.dob ? _vm.user.dob : "--/--/--"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Date of birth")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "grey" } }, [
                                _vm._v("location_on")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.user.address
                                      ? _vm.user.address
                                      : "No address"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.user.post_code
                                      ? _vm.user.post_code + ", "
                                      : ""
                                  ) +
                                    " " +
                                    _vm._s(_vm.user.city ? _vm.user.city : "")
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-list-tile",
                        { on: { click: function($event) {} } },
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "grey" } }, [
                                _vm._v("fas fa-user-cog")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.uSupervisor
                                      ? _vm.uSupervisor
                                      : "Not assigned"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Supervisor")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.hApprover
                                      ? _vm.hApprover
                                      : "Not assigned"
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-list-tile-sub-title", [
                                _vm._v("Holiday approver")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition",
            "max-width": "900"
          },
          model: {
            value: _vm.dialogEdit,
            callback: function($$v) {
              _vm.dialogEdit = $$v
            },
            expression: "dialogEdit"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialogEdit = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [
                    _vm._v("Edit " + _vm._s(_vm.name) + ":")
                  ]),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                [
                  _c("EditUser", {
                    attrs: { user: _vm.user },
                    on: { clicked: _vm.onUserUpdated }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "900" },
          model: {
            value: _vm.dialogAdd,
            callback: function($$v) {
              _vm.dialogAdd = $$v
            },
            expression: "dialogAdd"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("New user:")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [_c("AddUser", { on: { clicked: _vm.onUserAdded } })],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", flat: "flat" },
                      on: {
                        click: function($event) {
                          _vm.dialogAdd = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Cancel\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=template&id=79c1b966&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/ResetPassword.vue?vue&type=template&id=79c1b966& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "subscribe", attrs: { flat: "", color: "transparent" } },
    [
      _c("v-container", [
        _c("h1", [_vm._v("Password reset")]),
        _vm._v(" "),
        _c(
          "form",
          {
            attrs: { id: "check-register-form" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submit.apply(null, arguments)
              }
            }
          },
          [
            _c("v-text-field", {
              attrs: {
                "error-messages": _vm.codeErrors,
                label: "Rest code",
                required: ""
              },
              on: {
                input: function($event) {
                  return _vm.$v.code.$touch()
                },
                blur: function($event) {
                  return _vm.$v.code.$touch()
                }
              },
              model: {
                value: _vm.code,
                callback: function($$v) {
                  _vm.code = $$v
                },
                expression: "code"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                "error-messages": _vm.passwordErrors,
                label: "password",
                type: "password",
                required: ""
              },
              on: {
                input: function($event) {
                  return _vm.$v.password.$touch()
                },
                blur: function($event) {
                  return _vm.$v.password.$touch()
                }
              },
              model: {
                value: _vm.password,
                callback: function($$v) {
                  _vm.password = $$v
                },
                expression: "password"
              }
            }),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: {
                "error-messages": _vm.repeatPasswordErrors,
                label: "Confirm password",
                type: "password",
                required: ""
              },
              on: {
                input: function($event) {
                  return _vm.$v.repeatPassword.$touch()
                },
                blur: function($event) {
                  return _vm.$v.repeatPassword.$touch()
                }
              },
              model: {
                value: _vm.repeatPassword,
                callback: function($$v) {
                  _vm.repeatPassword = $$v
                },
                expression: "repeatPassword"
              }
            }),
            _vm._v(" "),
            _c(
              "v-btn",
              {
                attrs: { color: "primary", form: "check-register-form" },
                on: { click: _vm.submit }
              },
              [_vm._v("Reset password")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=template&id=a3fc08b4&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Subscribe.vue?vue&type=template&id=a3fc08b4& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "subscribe", attrs: { flat: "", color: "transparent" } },
    [
      _c(
        "v-container",
        [
          _c("h1", [_vm._v("Subscription:")]),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              attrs: { type: _vm.color },
              model: {
                value: _vm.note,
                callback: function($$v) {
                  _vm.note = $$v
                },
                expression: "note"
              }
            },
            [
              _c("span", { domProps: { innerHTML: _vm._s(_vm.note) } }),
              _vm._v(".\n        ")
            ]
          ),
          _vm._v(" "),
          this.invoice && this.admin
            ? _c("div", [
                _c(
                  "a",
                  { attrs: { href: this.invoice, target: "_blank" } },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "grey-color admin_add",
                        attrs: { fab: "", small: "" }
                      },
                      [
                        _c("v-icon", { attrs: { color: "black" } }, [
                          _vm._v("fas fa-download")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p"),
          _vm._v(" "),
          this.admin
            ? _c(
                "div",
                [
                  _vm.invoice
                    ? _c("h2", { staticClass: "subscribe_package" }, [
                        _vm._v("Update package")
                      ])
                    : _c("h2", { staticClass: "subscribe_package" }, [
                        _vm._v("Choose package")
                      ]),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { row: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { "pa-0": "", xs12: "", sm12: "" } },
                        [
                          _c("v-slider", {
                            staticClass: "subscribe_slider",
                            attrs: {
                              "tick-labels": _vm.seasons,
                              value: 1,
                              min: "0",
                              max: "3",
                              "thumb-label": "",
                              "thumb-size": "60",
                              "always-dirty": "",
                              hint: "Number of employees: " + _vm.hint,
                              label: _vm.price + " monthly",
                              "persistent-hint": "",
                              "thumb-label": "always"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "thumb-label",
                                  fn: function(props) {
                                    return [
                                      _c("span", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(_vm.season(props.value)) +
                                            "\n                          "
                                        )
                                      ])
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              3873036075
                            )
                          }),
                          _vm._v(" "),
                          _c("h2", { staticClass: "subscribe_billing" }, [
                            _vm._v("Billing details")
                          ]),
                          _vm._v(" "),
                          _c(
                            "form",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.nameErrors,
                                  label: "First name",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.name.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.name.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.name,
                                  callback: function($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.surnameErrors,
                                  label: "Last name",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.surname.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.surname.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.surname,
                                  callback: function($$v) {
                                    _vm.surname = $$v
                                  },
                                  expression: "surname"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.addressErrors,
                                  label: "Address",
                                  name: "address",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.address.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.address.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.address,
                                  callback: function($$v) {
                                    _vm.address = $$v
                                  },
                                  expression: "address"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.postCodeErrors,
                                  label: "Post code",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.postCode.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.postCode.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.postCode,
                                  callback: function($$v) {
                                    _vm.postCode = $$v
                                  },
                                  expression: "postCode"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "error-messages": _vm.cityErrors,
                                  label: "City",
                                  required: ""
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.$v.city.$touch()
                                  },
                                  blur: function($event) {
                                    return _vm.$v.city.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.city,
                                  callback: function($$v) {
                                    _vm.city = $$v
                                  },
                                  expression: "city"
                                }
                              }),
                              _vm._v(" "),
                              _c("h2", { staticClass: "subscribe_card" }, [
                                _vm._v("Card details")
                              ]),
                              _vm._v(" "),
                              _c("card", {
                                staticClass: "stripe-card",
                                class: { complete: _vm.complete },
                                attrs: {
                                  stripe:
                                    "pk_test_GGlKVvETnl09kbeJqlmf9YTh00vXQqQZfv",
                                  options: _vm.stripeOptions
                                },
                                on: {
                                  change: function($event) {
                                    _vm.complete = $event.complete
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: !_vm.complete
                                  },
                                  on: { click: _vm.pay }
                                },
                                [_vm._v("Checkout")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.message) + "\n        "),
          _c(
            "v-btn",
            {
              attrs: { color: "pink", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n            Close\n        ")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=template&id=8e175c7e&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AddUser.vue?vue&type=template&id=8e175c7e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", [
    _c(
      "form",
      { staticClass: "edit_user" },
      [
        _c(
          "v-container",
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        "error-messages": _vm.nameErrors,
                        label: "First name",
                        required: ""
                      },
                      on: {
                        input: function($event) {
                          return _vm.$v.name.$touch()
                        },
                        blur: function($event) {
                          return _vm.$v.name.$touch()
                        }
                      },
                      model: {
                        value: _vm.name,
                        callback: function($$v) {
                          _vm.name = $$v
                        },
                        expression: "name"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        "error-messages": _vm.surnameErrors,
                        label: "Last name",
                        required: ""
                      },
                      on: {
                        input: function($event) {
                          return _vm.$v.surname.$touch()
                        },
                        blur: function($event) {
                          return _vm.$v.surname.$touch()
                        }
                      },
                      model: {
                        value: _vm.surname,
                        callback: function($$v) {
                          _vm.surname = $$v
                        },
                        expression: "surname"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        "error-messages": _vm.emailErrors,
                        label: "E-mail",
                        name: "email",
                        required: ""
                      },
                      on: {
                        input: function($event) {
                          return _vm.$v.email.$touch()
                        },
                        blur: function($event) {
                          return _vm.$v.email.$touch()
                        }
                      },
                      model: {
                        value: _vm.email,
                        callback: function($$v) {
                          _vm.email = $$v
                        },
                        expression: "email"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Role" },
                      model: {
                        value: _vm.role,
                        callback: function($$v) {
                          _vm.role = $$v
                        },
                        expression: "role"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Holidays" },
                      model: {
                        value: _vm.holidays,
                        callback: function($$v) {
                          _vm.holidays = $$v
                        },
                        expression: "holidays"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label: "Holiday approver",
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelectApprover }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label: "Supervisor",
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelectSupervisor }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c(
                      "v-menu",
                      {
                        ref: "menu",
                        attrs: {
                          "close-on-content-click": false,
                          "nudge-right": 40,
                          lazy: "",
                          transition: "scale-transition",
                          "offset-y": "",
                          "full-width": "",
                          "min-width": "290px"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-text-field",
                                  _vm._g(
                                    {
                                      attrs: {
                                        label: "Birthday date",
                                        "prepend-icon": "event",
                                        readonly: ""
                                      },
                                      model: {
                                        value: _vm.date,
                                        callback: function($$v) {
                                          _vm.date = $$v
                                        },
                                        expression: "date"
                                      }
                                    },
                                    on
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.menu,
                          callback: function($$v) {
                            _vm.menu = $$v
                          },
                          expression: "menu"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c("v-date-picker", {
                          ref: "picker",
                          attrs: {
                            max: new Date().toISOString().substr(0, 10),
                            min: "1950-01-01"
                          },
                          on: { change: _vm.save },
                          model: {
                            value: _vm.date,
                            callback: function($$v) {
                              _vm.date = $$v
                            },
                            expression: "date"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c("v-label", { attrs: { for: "" } }, [
                      _vm._v("is admin?")
                    ]),
                    _vm._v(" "),
                    _c("v-switch", {
                      attrs: {
                        name: "is_superuser",
                        label: " " + (_vm.checked ? "Yes" : "No")
                      },
                      model: {
                        value: _vm.checked,
                        callback: function($$v) {
                          _vm.checked = $$v
                        },
                        expression: "checked"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Add user")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=template&id=9a9ab2fc&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/AllUsers.vue?vue&type=template&id=9a9ab2fc& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "admin_layout", attrs: { row: "" } },
    [
      _c(
        "v-flex",
        { attrs: { xs12: "" } },
        [
          _c(
            "div",
            { staticClass: "users_head" },
            [
              _vm.pageNumber < _vm.max && !_vm.single
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color ",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.addUser }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("add")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3236953398
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("Add employee")])]
                  )
                : _c(
                    "div",
                    [
                      !_vm.single
                        ? _c(
                            "v-chip",
                            {
                              staticClass: " grey-color",
                              attrs: { "text-color": "white" }
                            },
                            [
                              _c(
                                "router-link",
                                { attrs: { to: "/subscribe" } },
                                [
                                  _c(
                                    "v-avatar",
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          staticStyle: { "font-size": "16px" },
                                          attrs: { color: "pink" }
                                        },
                                        [_vm._v(" fas fa-piggy-bank")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticStyle: {
                                        color: "rgba(255, 82, 82, 1)"
                                      }
                                    },
                                    [_vm._v("To add more users please upgrade")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  ),
              _vm._v(" "),
              _vm.all
                ? _c(
                    "v-tooltip",
                    {
                      attrs: { bottom: "" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "grey-color",
                                      attrs: { fab: "", small: "" },
                                      on: { click: _vm.viewArchived }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "black" } },
                                      [_vm._v("fas fa-archive")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        434295664
                      )
                    },
                    [_vm._v(" "), _c("span", [_vm._v("View archived")])]
                  )
                : _c(
                    "v-btn",
                    {
                      staticClass: "grey-color",
                      attrs: { fab: "", small: "" },
                      on: { click: _vm.getAll }
                    },
                    [
                      _c("v-icon", { attrs: { color: "black" } }, [
                        _vm._v("fas fa-long-arrow-alt-left")
                      ])
                    ],
                    1
                  ),
              _vm._v(" "),
              _c(
                "v-tooltip",
                {
                  attrs: { bottom: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              {
                                staticClass: "grey-color",
                                attrs: { fab: "", small: "", dark: "" },
                                on: { click: _vm.download }
                              },
                              on
                            ),
                            [
                              _c("v-icon", { attrs: { color: "black" } }, [
                                _vm._v("fas fa-download")
                              ])
                            ],
                            1
                          )
                        ]
                      }
                    }
                  ])
                },
                [_vm._v(" "), _c("span", [_vm._v("Download users")])]
              ),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.usersDep,
                  label: "All departments",
                  "item-text": "department_name",
                  "item-value": "id",
                  "persistent-hint": "",
                  solo: "",
                  height: "40"
                },
                on: { input: _vm.onSelect }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "admin_area_result" },
            [
              _vm.load
                ? _c("div", { staticClass: "custom-loader-wrapper" }, [
                    _c("div", { staticClass: "custom-loader" })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.users, function(user, index) {
                return (_vm.selectedDep && _vm.selectedDep !== 9999
                ? user.department_id === Number(_vm.selectedDep)
                : true)
                  ? _c(
                      "v-card",
                      {
                        directives: [
                          {
                            name: "for-callback",
                            rawName: "v-for-callback",
                            value: {
                              key: index,
                              array: _vm.users,
                              callback: _vm.callback
                            },
                            expression:
                              "{key: index, array: users, callback: callback}"
                          }
                        ],
                        key: user.user_id,
                        attrs: { avatar: "", hover: "" }
                      },
                      [
                        index >= _vm.currentPage &&
                        index < _vm.currentPage + _vm.increment
                          ? _c(
                              "v-list",
                              [
                                _c(
                                  "v-list-tile",
                                  { staticClass: "list-item users-item" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "transparent-color",
                                        attrs: { fab: "", small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.userCard(user)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "grey" } },
                                          [_vm._v("far fa-eye")]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.all && !_vm.single
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editUser(user)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("fas fa-user-edit")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.single
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.archiveUser(user)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "grey" } },
                                              [_vm._v("fas fa-archive")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    !_vm.single
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "transparent-color",
                                            attrs: { fab: "", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteUser(user)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { color: "pink" } },
                                              [_vm._v("fas fa-trash")]
                                            )
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      { staticClass: "item-text" },
                                      [
                                        _c("v-list-tile-title", {
                                          domProps: {
                                            textContent: _vm._s(
                                              user.name + " " + user.surname
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-content",
                                      { staticClass: "item-count" },
                                      [
                                        _c("v-list-tile-title", {
                                          domProps: {
                                            textContent: _vm._s(user.role)
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-list-tile-avatar",
                                      { staticStyle: { padding: "20px 0" } },
                                      [
                                        !user.avatar
                                          ? _c("img", {
                                              attrs: {
                                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/profile.svg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                                alt: "",
                                                width: "45"
                                              }
                                            })
                                          : _c("img", {
                                              attrs: { src: user.avatar }
                                            })
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-xs-center pagination-wrapper" },
            [
              _c(
                "div",
                { staticClass: "show_select" },
                [
                  _c("v-select", {
                    attrs: {
                      items: ["6", "12", "24"],
                      label: _vm.show,
                      solo: ""
                    },
                    on: { input: _vm.onShow },
                    model: {
                      value: _vm.show,
                      callback: function($$v) {
                        _vm.show = $$v
                      },
                      expression: "show"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.pageNumber > _vm.increment
                ? _c("v-pagination", {
                    staticClass: "grey-page",
                    attrs: {
                      length: Math.ceil(_vm.pageNumber / _vm.increment),
                      circle: _vm.circle,
                      "total-visible": 5,
                      color: "black"
                    },
                    on: { input: _vm.next },
                    model: {
                      value: _vm.page,
                      callback: function($$v) {
                        _vm.page = $$v
                      },
                      expression: "page"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.total
                ? _c("div", { staticClass: "total" }, [
                    _c("span", [_vm._v("Total: " + _vm._s(_vm.total))])
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Deleting user:")
                  ]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n                    Are you sure you want to delete this user permanently?\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.deleteConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Delete\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.dialogArchive,
                callback: function($$v) {
                  _vm.dialogArchive = $$v
                },
                expression: "dialogArchive"
              }
            },
            [
              _c(
                "v-card",
                [
                  _vm.all
                    ? _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Archiving user:")
                      ])
                    : _c("v-card-title", { staticClass: "headline" }, [
                        _vm._v("Restore user:")
                      ]),
                  _vm._v(" "),
                  _vm.all
                    ? _c("v-card-text", [
                        _vm._v(
                          "\n                    Are you sure you want to add this user to archive?\n                "
                        )
                      ])
                    : _c("v-card-text", [
                        _vm._v(
                          "\n                    Are you sure you want to restore this user?\n                "
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", flat: "flat" },
                          on: {
                            click: function($event) {
                              _vm.dialogArchive = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        Cancel\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "pink", flat: "flat" },
                          on: { click: _vm.archiveConfirmed }
                        },
                        [
                          _vm._v(
                            "\n                        Confirm\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogEdit,
                callback: function($$v) {
                  _vm.dialogEdit = $$v
                },
                expression: "dialogEdit"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogEdit = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [
                        _vm._v(_vm._s(_vm.user.name + " " + _vm.user.surname))
                      ]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [
                      _c("EditUser", {
                        attrs: { user: _vm.user },
                        on: { clicked: _vm.onUserUpdated }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogAdd,
                callback: function($$v) {
                  _vm.dialogAdd = $$v
                },
                expression: "dialogAdd"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogAdd = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("New user:")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [_c("AddUser", { on: { clicked: _vm.onUserAdded } })],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition",
                "max-width": "900"
              },
              model: {
                value: _vm.dialogCard,
                callback: function($$v) {
                  _vm.dialogCard = $$v
                },
                expression: "dialogCard"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.dialogCard = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("Employee card:")]),
                      _vm._v(" "),
                      _c("v-spacer")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    [_c("UserCard", { attrs: { userProfile: _vm.user } })],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=template&id=3890b0e0&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/backend/Users/EditUser.vue?vue&type=template&id=3890b0e0& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", [
    _c(
      "form",
      { staticClass: "edit_user" },
      [
        _c(
          "v-container",
          [
            _c(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "First name: " + _vm.user.name },
                      model: {
                        value: _vm.name,
                        callback: function($$v) {
                          _vm.name = $$v
                        },
                        expression: "name"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Last name: " + _vm.user.surname },
                      model: {
                        value: _vm.surname,
                        callback: function($$v) {
                          _vm.surname = $$v
                        },
                        expression: "surname"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Email: " + _vm.user.email,
                        name: "email"
                      },
                      model: {
                        value: _vm.email,
                        callback: function($$v) {
                          _vm.email = $$v
                        },
                        expression: "email"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Role: " + (_vm.user.role ? _vm.user.role : "")
                      },
                      model: {
                        value: _vm.role,
                        callback: function($$v) {
                          _vm.role = $$v
                        },
                        expression: "role"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "", "pa-10": "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        label:
                          "Holidays: " +
                          (_vm.user.holidays ? _vm.user.holidays : 0),
                        required: ""
                      },
                      model: {
                        value: _vm.holidays,
                        callback: function($$v) {
                          _vm.holidays = $$v
                        },
                        expression: "holidays"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label:
                          "Holiday approver: " +
                          (_vm.user.holiday_approver ? _vm.hApprover : ""),
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelectApprover }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-select", {
                      attrs: {
                        "item-text": "user_name",
                        "item-value": "user_id",
                        items: _vm.users,
                        label:
                          "Supervisor: " +
                          (_vm.user.supervisor ? _vm.uSupervisor : ""),
                        "persistent-hint": ""
                      },
                      on: { input: _vm.onSelectSupervisor }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c(
                      "v-menu",
                      {
                        ref: "menu",
                        attrs: {
                          "close-on-content-click": false,
                          "nudge-right": 40,
                          lazy: "",
                          transition: "scale-transition",
                          "offset-y": "",
                          "full-width": "",
                          "min-width": "290px"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-text-field",
                                  _vm._g(
                                    {
                                      attrs: {
                                        label:
                                          "Birthday date: " +
                                          (_vm.user.dob
                                            ? _vm.user.dob
                                            : "--/--/--"),
                                        "prepend-icon": "event",
                                        readonly: ""
                                      },
                                      model: {
                                        value: _vm.date,
                                        callback: function($$v) {
                                          _vm.date = $$v
                                        },
                                        expression: "date"
                                      }
                                    },
                                    on
                                  )
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.menu,
                          callback: function($$v) {
                            _vm.menu = $$v
                          },
                          expression: "menu"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c("v-date-picker", {
                          ref: "picker",
                          attrs: {
                            max: new Date().toISOString().substr(0, 10),
                            min: "1950-01-01"
                          },
                          on: { change: _vm.save },
                          model: {
                            value: _vm.date,
                            callback: function($$v) {
                              _vm.date = $$v
                            },
                            expression: "date"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        "error-messages": _vm.passwordErrors,
                        label: "password",
                        type: "password",
                        required: ""
                      },
                      on: {
                        input: function($event) {
                          return _vm.$v.password.$touch()
                        },
                        blur: function($event) {
                          return _vm.$v.password.$touch()
                        }
                      },
                      model: {
                        value: _vm.password,
                        callback: function($$v) {
                          _vm.password = $$v
                        },
                        expression: "password"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md6: "" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        "error-messages": _vm.repeatPasswordErrors,
                        label: "Confirm password",
                        type: "password",
                        required: ""
                      },
                      on: {
                        input: function($event) {
                          return _vm.$v.repeatPassword.$touch()
                        },
                        blur: function($event) {
                          return _vm.$v.repeatPassword.$touch()
                        }
                      },
                      model: {
                        value: _vm.repeatPassword,
                        callback: function($$v) {
                          _vm.repeatPassword = $$v
                        },
                        expression: "repeatPassword"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.checkAdmin) +
                        "\n\n                    "
                    ),
                    _c("br"),
                    _vm._v(" "),
                    _c("v-label", { attrs: { for: "" } }, [
                      _vm._v("is admin?")
                    ]),
                    _vm._v(" "),
                    _c("v-switch", {
                      attrs: {
                        name: "is_superuser",
                        label: " " + (_vm.checked ? "Yes" : "No")
                      },
                      model: {
                        value: _vm.checked,
                        callback: function($$v) {
                          _vm.checked = $$v
                        },
                        expression: "checked"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-flex", { attrs: { xs12: "", md6: "" } }, [
                  _c(
                    "label",
                    { staticClass: "profile_upload" },
                    [
                      _vm._v(
                        "\n                        Uploda profile image   "
                      ),
                      _c("v-icon", { attrs: { right: "", dark: "" } }, [
                        _vm._v("cloud_upload")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        staticStyle: { display: "none" },
                        attrs: { type: "file", accept: "image/*" },
                        on: {
                          change: function($event) {
                            return _vm.onFileChange($event)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.filename
                    ? _c("span", [_vm._v(_vm._s(_vm.filename))])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.imgError
                    ? _c("span", [_vm._v(_vm._s(_vm.imgError))])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "v-flex",
                  { attrs: { xs12: "", md12: "" } },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue?vue&type=template&id=a1b701ee&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/About.vue?vue&type=template&id=a1b701ee& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", [
    _c("div", { staticClass: "about" }, [
      _c("h1", [_vm._v("About us")]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [
          _vm._v(
            "We developed DashboardHR to meet the needs of growing businesses who need to escape the admin of managing their people."
          )
        ])
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          " We know what it’s like to manage a team and our goal is to let you escape from the HR admin so you can focus on growing your business. Breathe is a trading name of Centurion Management Systems Ltd."
        ),
        _c("br"),
        _vm._v(
          "\n\n    We had been implementing HR systems across the UK for over 22 years but then we found ourselves reviewing the available options for SMEs. We looked at the range of products on offer in the UK HR software market but none of these systems ticked all the boxes. So we decided to develop our own HR software solution – the result is Breathe, a fully web-based solution that is secure and reliable but above all simple to use."
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=template&id=7a7db51c&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard-hr-master/resources/js/hr-system/views/frontend/Contact.vue?vue&type=template&id=7a7db51c& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("h1", [_vm._v("Contact us ")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Leave a message and we will get back to you as soon as possible."
        )
      ]),
      _vm._v(" "),
      _c(
        "v-form",
        {
          attrs: { id: "check-contact-form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit.apply(null, arguments)
            }
          }
        },
        [
          _c("v-text-field", {
            directives: [
              {
                name: "validate",
                rawName: "v-validate",
                value: "required|email",
                expression: "'required|email'"
              }
            ],
            attrs: {
              "error-messages": _vm.errors.collect("email"),
              label: "E-mail",
              "data-vv-name": "email",
              required: ""
            },
            model: {
              value: _vm.email,
              callback: function($$v) {
                _vm.email = $$v
              },
              expression: "email"
            }
          }),
          _vm._v(" "),
          _c("v-textarea", {
            attrs: {
              "error-messages": _vm.errors.collect("name"),
              label: "Your message",
              "data-vv-name": "name",
              required: ""
            },
            model: {
              value: _vm.name,
              callback: function($$v) {
                _vm.name = $$v
              },
              expression: "name"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: {
                type: "submit",
                color: "primary",
                form: "check-contact-form"
              },
              on: { click: _vm.submit }
            },
            [_vm._v("Send")]
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: { bottom: "bottom", right: "right", timeout: _vm.timeout },
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [
              _vm._v("\n            " + _vm._s(_vm.message) + "\n            "),
              _c(
                "v-btn",
                {
                  attrs: { color: "pink", flat: "" },
                  on: {
                    click: function($event) {
                      _vm.snackbar = false
                    }
                  }
                },
                [_vm._v("\n                Close\n            ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);