(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_numeric_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-numeric-input */ "./node_modules/vue-numeric-input/dist/vue-numeric-input.umd.js");
/* harmony import */ var vue_numeric_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_numeric_input__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      "default": 0,
      type: Number
    },
    min: {
      "default": 0,
      type: Number
    },
    max: {
      "default": undefined,
      type: Number
    }
  },
  data: function data() {
    return {
      product: null,
      newValue: 1
    };
  },
  mounted: function mounted() {
    this.fetchData(); // Call fetchData method when the component is mounted
  },

  methods: {
    fetchData: function fetchData() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/client/products/fall-limited-edition-sneakers').then(function (response) {
        _this.product = response.data.data; // Store the product data
        console.log(response.data.data);
      })["catch"](function (error) {
        console.error(error);
      });
    },
    mpplus: function mpplus() {
      if (this.max === undefined || this.newValue < this.max) {
        this.newValue = this.newValue + 1;
        this.$emit('input', this.newValue);
      }
    },
    mpminus: function mpminus() {
      if (this.newValue > this.min) {
        this.newValue = this.newValue - 1;
        this.$emit('input', this.newValue);
      }
    }
  },
  watch: {
    value: {
      handler: function handler(newVal, oldVal) {
        this.newValue = newVal;
      }
    }
  },
  created: function created() {
    this.newValue = this.value;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "single-product-page"
};
var _hoisted_2 = {
  key: 0,
  "class": "py-5"
};
var _hoisted_3 = {
  "class": "container product py-5"
};
var _hoisted_4 = {
  "class": "row align-items-center"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-md-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-primary me-md-5 mb-5 mb-md-0"
}, " left ")], -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "col-md-6"
};
var _hoisted_7 = {
  "class": "product__name fw-bold pb-2 pb-md-4"
};
var _hoisted_8 = {
  "class": "product__desc pb-1 pb-md-3"
};
var _hoisted_9 = {
  "class": "product__price d-inline-flex align-items-center mb-1 fw-bold"
};
var _hoisted_10 = {
  key: 0,
  "class": "product__price-final fs-3 me-2"
};
var _hoisted_11 = {
  key: 1,
  "class": "product__price-discounted px-2 py-1 rounded"
};
var _hoisted_12 = {
  key: 0,
  "class": "product__price-original fw-bold pb-3 pb-md-4"
};
var _hoisted_13 = {
  "class": "product__actions d-md-inline-flex align-items-center d-grid gap-2"
};
var _hoisted_14 = {
  "class": "product__actions-quantity minusplusnumber d-inline-flex align-items-center justify-content-center me-md-3 rounded fw-bold"
};
var _hoisted_15 = {
  id: "field_container"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "product__actions-add-to-cart btn btn-primary fw-bold",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  "class": "bi bi-cart3 me-2 mb-1",
  viewBox: "0 0 16 16"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add to cart ")], -1 /* HOISTED */);
var _hoisted_17 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$data.product.price.discounted ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(parseFloat($data.product.price.discounted).toFixed(2)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.product.discount.amount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.discount.amount) + "% ", 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.product.price.full ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("del", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(parseFloat($data.product.price.full).toFixed(2)), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "minus fs-2 px-3 pb-2",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.mpminus();
    })
  }, "-"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "fs-6 fw-bold ms-2",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.newValue = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newValue]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "plus fs-2 px-3 pb-2",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.mpplus();
    })
  }, "+")]), _hoisted_16])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <table class=\"product-table\">\r\n                <tr>\r\n                    <td>Product ID</td>\r\n                    <td>{{ product.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Product Name</td>\r\n                    <td>{{ product.name }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Description</td>\r\n                    <td>{{ product.description }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Full Price</td>\r\n                    <td>{{ product.price.full }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Discounted Price</td>\r\n                    <td>{{ product.price.discounted }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Discount Type</td>\r\n                    <td>{{ product.discount.type }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Discount Amount</td>\r\n                    <td>{{ product.discount.amount }}%</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Images</td>\r\n                    <td>\r\n                    <ul>\r\n                        <li v-for=\"(image, index) in product.images\" :key=\"index\">\r\n                            <img :src=\"image\" alt=\"Product Image\" />\r\n                        </li>\r\n                    </ul>\r\n                    </td>\r\n                </tr>\r\n            </table> ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_17, " Loading product... "))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/bootstrap/dist/css/bootstrap.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap  v5.3.2 (https://getbootstrap.com/)\n * Copyright 2011-2023 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root,\n[data-bs-theme=light] {\n  --bs-blue: #0d6efd;\n  --bs-indigo: #6610f2;\n  --bs-purple: #6f42c1;\n  --bs-pink: #d63384;\n  --bs-red: #dc3545;\n  --bs-orange: #fd7e14;\n  --bs-yellow: #ffc107;\n  --bs-green: #198754;\n  --bs-teal: #20c997;\n  --bs-cyan: #0dcaf0;\n  --bs-black: #000;\n  --bs-white: #fff;\n  --bs-gray: #6c757d;\n  --bs-gray-dark: #343a40;\n  --bs-gray-100: #f8f9fa;\n  --bs-gray-200: #e9ecef;\n  --bs-gray-300: #dee2e6;\n  --bs-gray-400: #ced4da;\n  --bs-gray-500: #adb5bd;\n  --bs-gray-600: #6c757d;\n  --bs-gray-700: #495057;\n  --bs-gray-800: #343a40;\n  --bs-gray-900: #212529;\n  --bs-primary: #0d6efd;\n  --bs-secondary: #6c757d;\n  --bs-success: #198754;\n  --bs-info: #0dcaf0;\n  --bs-warning: #ffc107;\n  --bs-danger: #dc3545;\n  --bs-light: #f8f9fa;\n  --bs-dark: #212529;\n  --bs-primary-rgb: 13, 110, 253;\n  --bs-secondary-rgb: 108, 117, 125;\n  --bs-success-rgb: 25, 135, 84;\n  --bs-info-rgb: 13, 202, 240;\n  --bs-warning-rgb: 255, 193, 7;\n  --bs-danger-rgb: 220, 53, 69;\n  --bs-light-rgb: 248, 249, 250;\n  --bs-dark-rgb: 33, 37, 41;\n  --bs-primary-text-emphasis: #052c65;\n  --bs-secondary-text-emphasis: #2b2f32;\n  --bs-success-text-emphasis: #0a3622;\n  --bs-info-text-emphasis: #055160;\n  --bs-warning-text-emphasis: #664d03;\n  --bs-danger-text-emphasis: #58151c;\n  --bs-light-text-emphasis: #495057;\n  --bs-dark-text-emphasis: #495057;\n  --bs-primary-bg-subtle: #cfe2ff;\n  --bs-secondary-bg-subtle: #e2e3e5;\n  --bs-success-bg-subtle: #d1e7dd;\n  --bs-info-bg-subtle: #cff4fc;\n  --bs-warning-bg-subtle: #fff3cd;\n  --bs-danger-bg-subtle: #f8d7da;\n  --bs-light-bg-subtle: #fcfcfd;\n  --bs-dark-bg-subtle: #ced4da;\n  --bs-primary-border-subtle: #9ec5fe;\n  --bs-secondary-border-subtle: #c4c8cb;\n  --bs-success-border-subtle: #a3cfbb;\n  --bs-info-border-subtle: #9eeaf9;\n  --bs-warning-border-subtle: #ffe69c;\n  --bs-danger-border-subtle: #f1aeb5;\n  --bs-light-border-subtle: #e9ecef;\n  --bs-dark-border-subtle: #adb5bd;\n  --bs-white-rgb: 255, 255, 255;\n  --bs-black-rgb: 0, 0, 0;\n  --bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));\n  --bs-body-font-family: var(--bs-font-sans-serif);\n  --bs-body-font-size: 1rem;\n  --bs-body-font-weight: 400;\n  --bs-body-line-height: 1.5;\n  --bs-body-color: #212529;\n  --bs-body-color-rgb: 33, 37, 41;\n  --bs-body-bg: #fff;\n  --bs-body-bg-rgb: 255, 255, 255;\n  --bs-emphasis-color: #000;\n  --bs-emphasis-color-rgb: 0, 0, 0;\n  --bs-secondary-color: rgba(33, 37, 41, 0.75);\n  --bs-secondary-color-rgb: 33, 37, 41;\n  --bs-secondary-bg: #e9ecef;\n  --bs-secondary-bg-rgb: 233, 236, 239;\n  --bs-tertiary-color: rgba(33, 37, 41, 0.5);\n  --bs-tertiary-color-rgb: 33, 37, 41;\n  --bs-tertiary-bg: #f8f9fa;\n  --bs-tertiary-bg-rgb: 248, 249, 250;\n  --bs-heading-color: inherit;\n  --bs-link-color: #0d6efd;\n  --bs-link-color-rgb: 13, 110, 253;\n  --bs-link-decoration: underline;\n  --bs-link-hover-color: #0a58ca;\n  --bs-link-hover-color-rgb: 10, 88, 202;\n  --bs-code-color: #d63384;\n  --bs-highlight-color: #212529;\n  --bs-highlight-bg: #fff3cd;\n  --bs-border-width: 1px;\n  --bs-border-style: solid;\n  --bs-border-color: #dee2e6;\n  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);\n  --bs-border-radius: 0.375rem;\n  --bs-border-radius-sm: 0.25rem;\n  --bs-border-radius-lg: 0.5rem;\n  --bs-border-radius-xl: 1rem;\n  --bs-border-radius-xxl: 2rem;\n  --bs-border-radius-2xl: var(--bs-border-radius-xxl);\n  --bs-border-radius-pill: 50rem;\n  --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  --bs-focus-ring-width: 0.25rem;\n  --bs-focus-ring-opacity: 0.25;\n  --bs-focus-ring-color: rgba(13, 110, 253, 0.25);\n  --bs-form-valid-color: #198754;\n  --bs-form-valid-border-color: #198754;\n  --bs-form-invalid-color: #dc3545;\n  --bs-form-invalid-border-color: #dc3545;\n}\n\n[data-bs-theme=dark] {\n  color-scheme: dark;\n  --bs-body-color: #dee2e6;\n  --bs-body-color-rgb: 222, 226, 230;\n  --bs-body-bg: #212529;\n  --bs-body-bg-rgb: 33, 37, 41;\n  --bs-emphasis-color: #fff;\n  --bs-emphasis-color-rgb: 255, 255, 255;\n  --bs-secondary-color: rgba(222, 226, 230, 0.75);\n  --bs-secondary-color-rgb: 222, 226, 230;\n  --bs-secondary-bg: #343a40;\n  --bs-secondary-bg-rgb: 52, 58, 64;\n  --bs-tertiary-color: rgba(222, 226, 230, 0.5);\n  --bs-tertiary-color-rgb: 222, 226, 230;\n  --bs-tertiary-bg: #2b3035;\n  --bs-tertiary-bg-rgb: 43, 48, 53;\n  --bs-primary-text-emphasis: #6ea8fe;\n  --bs-secondary-text-emphasis: #a7acb1;\n  --bs-success-text-emphasis: #75b798;\n  --bs-info-text-emphasis: #6edff6;\n  --bs-warning-text-emphasis: #ffda6a;\n  --bs-danger-text-emphasis: #ea868f;\n  --bs-light-text-emphasis: #f8f9fa;\n  --bs-dark-text-emphasis: #dee2e6;\n  --bs-primary-bg-subtle: #031633;\n  --bs-secondary-bg-subtle: #161719;\n  --bs-success-bg-subtle: #051b11;\n  --bs-info-bg-subtle: #032830;\n  --bs-warning-bg-subtle: #332701;\n  --bs-danger-bg-subtle: #2c0b0e;\n  --bs-light-bg-subtle: #343a40;\n  --bs-dark-bg-subtle: #1a1d20;\n  --bs-primary-border-subtle: #084298;\n  --bs-secondary-border-subtle: #41464b;\n  --bs-success-border-subtle: #0f5132;\n  --bs-info-border-subtle: #087990;\n  --bs-warning-border-subtle: #997404;\n  --bs-danger-border-subtle: #842029;\n  --bs-light-border-subtle: #495057;\n  --bs-dark-border-subtle: #343a40;\n  --bs-heading-color: inherit;\n  --bs-link-color: #6ea8fe;\n  --bs-link-hover-color: #8bb9fe;\n  --bs-link-color-rgb: 110, 168, 254;\n  --bs-link-hover-color-rgb: 139, 185, 254;\n  --bs-code-color: #e685b5;\n  --bs-highlight-color: #dee2e6;\n  --bs-highlight-bg: #664d03;\n  --bs-border-color: #495057;\n  --bs-border-color-translucent: rgba(255, 255, 255, 0.15);\n  --bs-form-valid-color: #75b798;\n  --bs-form-valid-border-color: #75b798;\n  --bs-form-invalid-color: #ea868f;\n  --bs-form-invalid-border-color: #ea868f;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :root {\n    scroll-behavior: smooth;\n  }\n}\n\nbody {\n  margin: 0;\n  font-family: var(--bs-body-font-family);\n  font-size: var(--bs-body-font-size);\n  font-weight: var(--bs-body-font-weight);\n  line-height: var(--bs-body-line-height);\n  color: var(--bs-body-color);\n  text-align: var(--bs-body-text-align);\n  background-color: var(--bs-body-bg);\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  border: 0;\n  border-top: var(--bs-border-width) solid;\n  opacity: 0.25;\n}\n\nh6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n  color: var(--bs-heading-color);\n}\n\nh1, .h1 {\n  font-size: calc(1.375rem + 1.5vw);\n}\n@media (min-width: 1200px) {\n  h1, .h1 {\n    font-size: 2.5rem;\n  }\n}\n\nh2, .h2 {\n  font-size: calc(1.325rem + 0.9vw);\n}\n@media (min-width: 1200px) {\n  h2, .h2 {\n    font-size: 2rem;\n  }\n}\n\nh3, .h3 {\n  font-size: calc(1.3rem + 0.6vw);\n}\n@media (min-width: 1200px) {\n  h3, .h3 {\n    font-size: 1.75rem;\n  }\n}\n\nh4, .h4 {\n  font-size: calc(1.275rem + 0.3vw);\n}\n@media (min-width: 1200px) {\n  h4, .h4 {\n    font-size: 1.5rem;\n  }\n}\n\nh5, .h5 {\n  font-size: 1.25rem;\n}\n\nh6, .h6 {\n  font-size: 1rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n  text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall, .small {\n  font-size: 0.875em;\n}\n\nmark, .mark {\n  padding: 0.1875em;\n  color: var(--bs-highlight-color);\n  background-color: var(--bs-highlight-bg);\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));\n  text-decoration: underline;\n}\na:hover {\n  --bs-link-color-rgb: var(--bs-link-hover-color-rgb);\n}\n\na:not([href]):not([class]), a:not([href]):not([class]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: var(--bs-font-monospace);\n  font-size: 1em;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\ncode {\n  font-size: 0.875em;\n  color: var(--bs-code-color);\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nkbd {\n  padding: 0.1875rem 0.375rem;\n  font-size: 0.875em;\n  color: var(--bs-body-bg);\n  background-color: var(--bs-body-color);\n  border-radius: 0.25rem;\n}\nkbd kbd {\n  padding: 0;\n  font-size: 1em;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bs-secondary-color);\n  text-align: left;\n}\n\nth {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\nlabel {\n  display: inline-block;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n[role=button] {\n  cursor: pointer;\n}\n\nselect {\n  word-wrap: normal;\n}\nselect:disabled {\n  opacity: 1;\n}\n\n[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {\n  display: none !important;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: calc(1.275rem + 0.3vw);\n  line-height: inherit;\n}\n@media (min-width: 1200px) {\n  legend {\n    font-size: 1.5rem;\n  }\n}\nlegend + * {\n  clear: left;\n}\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n\n/* rtl:raw:\n[type=\"tel\"],\n[type=\"url\"],\n[type=\"email\"],\n[type=\"number\"] {\n  direction: ltr;\n}\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\n::file-selector-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\niframe {\n  border: 0;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: calc(1.625rem + 4.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-1 {\n    font-size: 5rem;\n  }\n}\n\n.display-2 {\n  font-size: calc(1.575rem + 3.9vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-2 {\n    font-size: 4.5rem;\n  }\n}\n\n.display-3 {\n  font-size: calc(1.525rem + 3.3vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-3 {\n    font-size: 4rem;\n  }\n}\n\n.display-4 {\n  font-size: calc(1.475rem + 2.7vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-4 {\n    font-size: 3.5rem;\n  }\n}\n\n.display-5 {\n  font-size: calc(1.425rem + 2.1vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-5 {\n    font-size: 3rem;\n  }\n}\n\n.display-6 {\n  font-size: calc(1.375rem + 1.5vw);\n  font-weight: 300;\n  line-height: 1.2;\n}\n@media (min-width: 1200px) {\n  .display-6 {\n    font-size: 2.5rem;\n  }\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 0.5rem;\n}\n\n.initialism {\n  font-size: 0.875em;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n}\n.blockquote > :last-child {\n  margin-bottom: 0;\n}\n\n.blockquote-footer {\n  margin-top: -1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875em;\n  color: #6c757d;\n}\n.blockquote-footer::before {\n  content: \"— \";\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: var(--bs-body-bg);\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  max-width: 100%;\n  height: auto;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 0.875em;\n  color: var(--bs-secondary-color);\n}\n\n.container,\n.container-fluid,\n.container-xxl,\n.container-xl,\n.container-lg,\n.container-md,\n.container-sm {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container-sm, .container {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container-md, .container-sm, .container {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container-lg, .container-md, .container-sm, .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 1400px) {\n  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {\n    max-width: 1320px;\n  }\n}\n:root {\n  --bs-breakpoint-xs: 0;\n  --bs-breakpoint-sm: 576px;\n  --bs-breakpoint-md: 768px;\n  --bs-breakpoint-lg: 992px;\n  --bs-breakpoint-xl: 1200px;\n  --bs-breakpoint-xxl: 1400px;\n}\n\n.row {\n  --bs-gutter-x: 1.5rem;\n  --bs-gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(-1 * var(--bs-gutter-y));\n  margin-right: calc(-0.5 * var(--bs-gutter-x));\n  margin-left: calc(-0.5 * var(--bs-gutter-x));\n}\n.row > * {\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%;\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  margin-top: var(--bs-gutter-y);\n}\n\n.col {\n  flex: 1 0 0%;\n}\n\n.row-cols-auto > * {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.row-cols-1 > * {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.row-cols-2 > * {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.row-cols-3 > * {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n\n.row-cols-4 > * {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.row-cols-5 > * {\n  flex: 0 0 auto;\n  width: 20%;\n}\n\n.row-cols-6 > * {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n\n.col-auto {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n.col-1 {\n  flex: 0 0 auto;\n  width: 8.33333333%;\n}\n\n.col-2 {\n  flex: 0 0 auto;\n  width: 16.66666667%;\n}\n\n.col-3 {\n  flex: 0 0 auto;\n  width: 25%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  width: 33.33333333%;\n}\n\n.col-5 {\n  flex: 0 0 auto;\n  width: 41.66666667%;\n}\n\n.col-6 {\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-7 {\n  flex: 0 0 auto;\n  width: 58.33333333%;\n}\n\n.col-8 {\n  flex: 0 0 auto;\n  width: 66.66666667%;\n}\n\n.col-9 {\n  flex: 0 0 auto;\n  width: 75%;\n}\n\n.col-10 {\n  flex: 0 0 auto;\n  width: 83.33333333%;\n}\n\n.col-11 {\n  flex: 0 0 auto;\n  width: 91.66666667%;\n}\n\n.col-12 {\n  flex: 0 0 auto;\n  width: 100%;\n}\n\n.offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.offset-3 {\n  margin-left: 25%;\n}\n\n.offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.offset-6 {\n  margin-left: 50%;\n}\n\n.offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.offset-9 {\n  margin-left: 75%;\n}\n\n.offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.g-0,\n.gx-0 {\n  --bs-gutter-x: 0;\n}\n\n.g-0,\n.gy-0 {\n  --bs-gutter-y: 0;\n}\n\n.g-1,\n.gx-1 {\n  --bs-gutter-x: 0.25rem;\n}\n\n.g-1,\n.gy-1 {\n  --bs-gutter-y: 0.25rem;\n}\n\n.g-2,\n.gx-2 {\n  --bs-gutter-x: 0.5rem;\n}\n\n.g-2,\n.gy-2 {\n  --bs-gutter-y: 0.5rem;\n}\n\n.g-3,\n.gx-3 {\n  --bs-gutter-x: 1rem;\n}\n\n.g-3,\n.gy-3 {\n  --bs-gutter-y: 1rem;\n}\n\n.g-4,\n.gx-4 {\n  --bs-gutter-x: 1.5rem;\n}\n\n.g-4,\n.gy-4 {\n  --bs-gutter-y: 1.5rem;\n}\n\n.g-5,\n.gx-5 {\n  --bs-gutter-x: 3rem;\n}\n\n.g-5,\n.gy-5 {\n  --bs-gutter-y: 3rem;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    flex: 1 0 0%;\n  }\n  .row-cols-sm-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-sm-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-sm-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-sm-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .row-cols-sm-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-sm-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-sm-6 > * {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-sm-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-sm-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-sm-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-sm-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-sm-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-sm-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-sm-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-sm-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-sm-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-sm-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-sm-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-sm-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-sm-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-sm-0 {\n    margin-left: 0;\n  }\n  .offset-sm-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-sm-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-sm-3 {\n    margin-left: 25%;\n  }\n  .offset-sm-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-sm-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-sm-6 {\n    margin-left: 50%;\n  }\n  .offset-sm-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-sm-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-sm-9 {\n    margin-left: 75%;\n  }\n  .offset-sm-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-sm-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-sm-0,\n  .gx-sm-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-sm-0,\n  .gy-sm-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-sm-1,\n  .gx-sm-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-sm-1,\n  .gy-sm-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-sm-2,\n  .gx-sm-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-sm-2,\n  .gy-sm-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-sm-3,\n  .gx-sm-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-sm-3,\n  .gy-sm-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-sm-4,\n  .gx-sm-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-sm-4,\n  .gy-sm-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-sm-5,\n  .gx-sm-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-sm-5,\n  .gy-sm-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 768px) {\n  .col-md {\n    flex: 1 0 0%;\n  }\n  .row-cols-md-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-md-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-md-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-md-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .row-cols-md-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-md-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-md-6 > * {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-md-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-md-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-md-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-md-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-md-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-md-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-md-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-md-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-md-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-md-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-md-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-md-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-md-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-md-0 {\n    margin-left: 0;\n  }\n  .offset-md-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-md-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-md-3 {\n    margin-left: 25%;\n  }\n  .offset-md-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-md-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-md-6 {\n    margin-left: 50%;\n  }\n  .offset-md-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-md-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-md-9 {\n    margin-left: 75%;\n  }\n  .offset-md-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-md-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-md-0,\n  .gx-md-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-md-0,\n  .gy-md-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-md-1,\n  .gx-md-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-md-1,\n  .gy-md-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-md-2,\n  .gx-md-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-md-2,\n  .gy-md-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-md-3,\n  .gx-md-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-md-3,\n  .gy-md-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-md-4,\n  .gx-md-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-md-4,\n  .gy-md-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-md-5,\n  .gx-md-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-md-5,\n  .gy-md-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 992px) {\n  .col-lg {\n    flex: 1 0 0%;\n  }\n  .row-cols-lg-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-lg-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-lg-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-lg-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .row-cols-lg-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-lg-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-lg-6 > * {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-lg-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-lg-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-lg-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-lg-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-lg-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-lg-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-lg-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-lg-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-lg-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-lg-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-lg-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-lg-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-lg-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-lg-0 {\n    margin-left: 0;\n  }\n  .offset-lg-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-lg-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-lg-3 {\n    margin-left: 25%;\n  }\n  .offset-lg-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-lg-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-lg-6 {\n    margin-left: 50%;\n  }\n  .offset-lg-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-lg-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-lg-9 {\n    margin-left: 75%;\n  }\n  .offset-lg-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-lg-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-lg-0,\n  .gx-lg-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-lg-0,\n  .gy-lg-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-lg-1,\n  .gx-lg-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-lg-1,\n  .gy-lg-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-lg-2,\n  .gx-lg-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-lg-2,\n  .gy-lg-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-lg-3,\n  .gx-lg-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-lg-3,\n  .gy-lg-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-lg-4,\n  .gx-lg-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-lg-4,\n  .gy-lg-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-lg-5,\n  .gx-lg-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-lg-5,\n  .gy-lg-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1200px) {\n  .col-xl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xl-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .row-cols-xl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xl-6 > * {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xl-0 {\n    margin-left: 0;\n  }\n  .offset-xl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xl-3 {\n    margin-left: 25%;\n  }\n  .offset-xl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xl-6 {\n    margin-left: 50%;\n  }\n  .offset-xl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xl-9 {\n    margin-left: 75%;\n  }\n  .offset-xl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xl-0,\n  .gx-xl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xl-0,\n  .gy-xl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xl-1,\n  .gx-xl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xl-1,\n  .gy-xl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xl-2,\n  .gx-xl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xl-2,\n  .gy-xl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xl-3,\n  .gx-xl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xl-3,\n  .gy-xl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xl-4,\n  .gx-xl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xl-4,\n  .gy-xl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xl-5,\n  .gx-xl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xl-5,\n  .gy-xl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n@media (min-width: 1400px) {\n  .col-xxl {\n    flex: 1 0 0%;\n  }\n  .row-cols-xxl-auto > * {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .row-cols-xxl-1 > * {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .row-cols-xxl-2 > * {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .row-cols-xxl-3 > * {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .row-cols-xxl-4 > * {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .row-cols-xxl-5 > * {\n    flex: 0 0 auto;\n    width: 20%;\n  }\n  .row-cols-xxl-6 > * {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xxl-auto {\n    flex: 0 0 auto;\n    width: auto;\n  }\n  .col-xxl-1 {\n    flex: 0 0 auto;\n    width: 8.33333333%;\n  }\n  .col-xxl-2 {\n    flex: 0 0 auto;\n    width: 16.66666667%;\n  }\n  .col-xxl-3 {\n    flex: 0 0 auto;\n    width: 25%;\n  }\n  .col-xxl-4 {\n    flex: 0 0 auto;\n    width: 33.33333333%;\n  }\n  .col-xxl-5 {\n    flex: 0 0 auto;\n    width: 41.66666667%;\n  }\n  .col-xxl-6 {\n    flex: 0 0 auto;\n    width: 50%;\n  }\n  .col-xxl-7 {\n    flex: 0 0 auto;\n    width: 58.33333333%;\n  }\n  .col-xxl-8 {\n    flex: 0 0 auto;\n    width: 66.66666667%;\n  }\n  .col-xxl-9 {\n    flex: 0 0 auto;\n    width: 75%;\n  }\n  .col-xxl-10 {\n    flex: 0 0 auto;\n    width: 83.33333333%;\n  }\n  .col-xxl-11 {\n    flex: 0 0 auto;\n    width: 91.66666667%;\n  }\n  .col-xxl-12 {\n    flex: 0 0 auto;\n    width: 100%;\n  }\n  .offset-xxl-0 {\n    margin-left: 0;\n  }\n  .offset-xxl-1 {\n    margin-left: 8.33333333%;\n  }\n  .offset-xxl-2 {\n    margin-left: 16.66666667%;\n  }\n  .offset-xxl-3 {\n    margin-left: 25%;\n  }\n  .offset-xxl-4 {\n    margin-left: 33.33333333%;\n  }\n  .offset-xxl-5 {\n    margin-left: 41.66666667%;\n  }\n  .offset-xxl-6 {\n    margin-left: 50%;\n  }\n  .offset-xxl-7 {\n    margin-left: 58.33333333%;\n  }\n  .offset-xxl-8 {\n    margin-left: 66.66666667%;\n  }\n  .offset-xxl-9 {\n    margin-left: 75%;\n  }\n  .offset-xxl-10 {\n    margin-left: 83.33333333%;\n  }\n  .offset-xxl-11 {\n    margin-left: 91.66666667%;\n  }\n  .g-xxl-0,\n  .gx-xxl-0 {\n    --bs-gutter-x: 0;\n  }\n  .g-xxl-0,\n  .gy-xxl-0 {\n    --bs-gutter-y: 0;\n  }\n  .g-xxl-1,\n  .gx-xxl-1 {\n    --bs-gutter-x: 0.25rem;\n  }\n  .g-xxl-1,\n  .gy-xxl-1 {\n    --bs-gutter-y: 0.25rem;\n  }\n  .g-xxl-2,\n  .gx-xxl-2 {\n    --bs-gutter-x: 0.5rem;\n  }\n  .g-xxl-2,\n  .gy-xxl-2 {\n    --bs-gutter-y: 0.5rem;\n  }\n  .g-xxl-3,\n  .gx-xxl-3 {\n    --bs-gutter-x: 1rem;\n  }\n  .g-xxl-3,\n  .gy-xxl-3 {\n    --bs-gutter-y: 1rem;\n  }\n  .g-xxl-4,\n  .gx-xxl-4 {\n    --bs-gutter-x: 1.5rem;\n  }\n  .g-xxl-4,\n  .gy-xxl-4 {\n    --bs-gutter-y: 1.5rem;\n  }\n  .g-xxl-5,\n  .gx-xxl-5 {\n    --bs-gutter-x: 3rem;\n  }\n  .g-xxl-5,\n  .gy-xxl-5 {\n    --bs-gutter-y: 3rem;\n  }\n}\n.table {\n  --bs-table-color-type: initial;\n  --bs-table-bg-type: initial;\n  --bs-table-color-state: initial;\n  --bs-table-bg-state: initial;\n  --bs-table-color: var(--bs-emphasis-color);\n  --bs-table-bg: var(--bs-body-bg);\n  --bs-table-border-color: var(--bs-border-color);\n  --bs-table-accent-bg: transparent;\n  --bs-table-striped-color: var(--bs-emphasis-color);\n  --bs-table-striped-bg: rgba(var(--bs-emphasis-color-rgb), 0.05);\n  --bs-table-active-color: var(--bs-emphasis-color);\n  --bs-table-active-bg: rgba(var(--bs-emphasis-color-rgb), 0.1);\n  --bs-table-hover-color: var(--bs-emphasis-color);\n  --bs-table-hover-bg: rgba(var(--bs-emphasis-color-rgb), 0.075);\n  width: 100%;\n  margin-bottom: 1rem;\n  vertical-align: top;\n  border-color: var(--bs-table-border-color);\n}\n.table > :not(caption) > * > * {\n  padding: 0.5rem 0.5rem;\n  color: var(--bs-table-color-state, var(--bs-table-color-type, var(--bs-table-color)));\n  background-color: var(--bs-table-bg);\n  border-bottom-width: var(--bs-border-width);\n  box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state, var(--bs-table-bg-type, var(--bs-table-accent-bg)));\n}\n.table > tbody {\n  vertical-align: inherit;\n}\n.table > thead {\n  vertical-align: bottom;\n}\n\n.table-group-divider {\n  border-top: calc(var(--bs-border-width) * 2) solid currentcolor;\n}\n\n.caption-top {\n  caption-side: top;\n}\n\n.table-sm > :not(caption) > * > * {\n  padding: 0.25rem 0.25rem;\n}\n\n.table-bordered > :not(caption) > * {\n  border-width: var(--bs-border-width) 0;\n}\n.table-bordered > :not(caption) > * > * {\n  border-width: 0 var(--bs-border-width);\n}\n\n.table-borderless > :not(caption) > * > * {\n  border-bottom-width: 0;\n}\n.table-borderless > :not(:first-child) {\n  border-top-width: 0;\n}\n\n.table-striped > tbody > tr:nth-of-type(odd) > * {\n  --bs-table-color-type: var(--bs-table-striped-color);\n  --bs-table-bg-type: var(--bs-table-striped-bg);\n}\n\n.table-striped-columns > :not(caption) > tr > :nth-child(even) {\n  --bs-table-color-type: var(--bs-table-striped-color);\n  --bs-table-bg-type: var(--bs-table-striped-bg);\n}\n\n.table-active {\n  --bs-table-color-state: var(--bs-table-active-color);\n  --bs-table-bg-state: var(--bs-table-active-bg);\n}\n\n.table-hover > tbody > tr:hover > * {\n  --bs-table-color-state: var(--bs-table-hover-color);\n  --bs-table-bg-state: var(--bs-table-hover-bg);\n}\n\n.table-primary {\n  --bs-table-color: #000;\n  --bs-table-bg: #cfe2ff;\n  --bs-table-border-color: #a6b5cc;\n  --bs-table-striped-bg: #c5d7f2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bacbe6;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfd1ec;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-secondary {\n  --bs-table-color: #000;\n  --bs-table-bg: #e2e3e5;\n  --bs-table-border-color: #b5b6b7;\n  --bs-table-striped-bg: #d7d8da;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #cbccce;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #d1d2d4;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-success {\n  --bs-table-color: #000;\n  --bs-table-bg: #d1e7dd;\n  --bs-table-border-color: #a7b9b1;\n  --bs-table-striped-bg: #c7dbd2;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #bcd0c7;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #c1d6cc;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-info {\n  --bs-table-color: #000;\n  --bs-table-bg: #cff4fc;\n  --bs-table-border-color: #a6c3ca;\n  --bs-table-striped-bg: #c5e8ef;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #badce3;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #bfe2e9;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-warning {\n  --bs-table-color: #000;\n  --bs-table-bg: #fff3cd;\n  --bs-table-border-color: #ccc2a4;\n  --bs-table-striped-bg: #f2e7c3;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #e6dbb9;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #ece1be;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-danger {\n  --bs-table-color: #000;\n  --bs-table-bg: #f8d7da;\n  --bs-table-border-color: #c6acae;\n  --bs-table-striped-bg: #eccccf;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfc2c4;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5c7ca;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-light {\n  --bs-table-color: #000;\n  --bs-table-bg: #f8f9fa;\n  --bs-table-border-color: #c6c7c8;\n  --bs-table-striped-bg: #ecedee;\n  --bs-table-striped-color: #000;\n  --bs-table-active-bg: #dfe0e1;\n  --bs-table-active-color: #000;\n  --bs-table-hover-bg: #e5e6e7;\n  --bs-table-hover-color: #000;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-dark {\n  --bs-table-color: #fff;\n  --bs-table-bg: #212529;\n  --bs-table-border-color: #4d5154;\n  --bs-table-striped-bg: #2c3034;\n  --bs-table-striped-color: #fff;\n  --bs-table-active-bg: #373b3e;\n  --bs-table-active-color: #fff;\n  --bs-table-hover-bg: #323539;\n  --bs-table-hover-color: #fff;\n  color: var(--bs-table-color);\n  border-color: var(--bs-table-border-color);\n}\n\n.table-responsive {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 1399.98px) {\n  .table-responsive-xxl {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.form-label {\n  margin-bottom: 0.5rem;\n}\n\n.col-form-label {\n  padding-top: calc(0.375rem + var(--bs-border-width));\n  padding-bottom: calc(0.375rem + var(--bs-border-width));\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5;\n}\n\n.col-form-label-lg {\n  padding-top: calc(0.5rem + var(--bs-border-width));\n  padding-bottom: calc(0.5rem + var(--bs-border-width));\n  font-size: 1.25rem;\n}\n\n.col-form-label-sm {\n  padding-top: calc(0.25rem + var(--bs-border-width));\n  padding-bottom: calc(0.25rem + var(--bs-border-width));\n  font-size: 0.875rem;\n}\n\n.form-text {\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--bs-secondary-color);\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-clip: padding-box;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control[type=file] {\n  overflow: hidden;\n}\n.form-control[type=file]:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control:focus {\n  color: var(--bs-body-color);\n  background-color: var(--bs-body-bg);\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-control::-webkit-date-and-time-value {\n  min-width: 85px;\n  height: 1.5em;\n  margin: 0;\n}\n.form-control::-webkit-datetime-edit {\n  display: block;\n  padding: 0;\n}\n.form-control::-moz-placeholder {\n  color: var(--bs-secondary-color);\n  opacity: 1;\n}\n.form-control::placeholder {\n  color: var(--bs-secondary-color);\n  opacity: 1;\n}\n.form-control:disabled {\n  background-color: var(--bs-secondary-bg);\n  opacity: 1;\n}\n.form-control::-webkit-file-upload-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n  margin-inline-end: 0.75rem;\n  color: var(--bs-body-color);\n  background-color: var(--bs-tertiary-bg);\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: var(--bs-border-width);\n  border-radius: 0;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control::file-selector-button {\n  padding: 0.375rem 0.75rem;\n  margin: -0.375rem -0.75rem;\n  -webkit-margin-end: 0.75rem;\n  margin-inline-end: 0.75rem;\n  color: var(--bs-body-color);\n  background-color: var(--bs-tertiary-bg);\n  pointer-events: none;\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n  border-inline-end-width: var(--bs-border-width);\n  border-radius: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-control::-webkit-file-upload-button {\n    -webkit-transition: none;\n    transition: none;\n  }\n  .form-control::file-selector-button {\n    transition: none;\n  }\n}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n  background-color: var(--bs-secondary-bg);\n}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button {\n  background-color: var(--bs-secondary-bg);\n}\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0;\n  margin-bottom: 0;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  background-color: transparent;\n  border: solid transparent;\n  border-width: var(--bs-border-width) 0;\n}\n.form-control-plaintext:focus {\n  outline: 0;\n}\n.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: var(--bs-border-radius-sm);\n}\n.form-control-sm::-webkit-file-upload-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n  margin-inline-end: 0.5rem;\n}\n.form-control-sm::file-selector-button {\n  padding: 0.25rem 0.5rem;\n  margin: -0.25rem -0.5rem;\n  -webkit-margin-end: 0.5rem;\n  margin-inline-end: 0.5rem;\n}\n\n.form-control-lg {\n  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: var(--bs-border-radius-lg);\n}\n.form-control-lg::-webkit-file-upload-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n  margin-inline-end: 1rem;\n}\n.form-control-lg::file-selector-button {\n  padding: 0.5rem 1rem;\n  margin: -0.5rem -1rem;\n  -webkit-margin-end: 1rem;\n  margin-inline-end: 1rem;\n}\n\ntextarea.form-control {\n  min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));\n}\ntextarea.form-control-sm {\n  min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));\n}\ntextarea.form-control-lg {\n  min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));\n}\n\n.form-control-color {\n  width: 3rem;\n  height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2));\n  padding: 0.375rem;\n}\n.form-control-color:not(:disabled):not([readonly]) {\n  cursor: pointer;\n}\n.form-control-color::-moz-color-swatch {\n  border: 0 !important;\n  border-radius: var(--bs-border-radius);\n}\n.form-control-color::-webkit-color-swatch {\n  border: 0 !important;\n  border-radius: var(--bs-border-radius);\n}\n.form-control-color.form-control-sm {\n  height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2));\n}\n.form-control-color.form-control-lg {\n  height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));\n}\n\n.form-select {\n  --bs-form-select-bg-img: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n  display: block;\n  width: 100%;\n  padding: 0.375rem 2.25rem 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-body-bg);\n  background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none);\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  background-size: 16px 12px;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-select {\n    transition: none;\n  }\n}\n.form-select:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-select[multiple], .form-select[size]:not([size=\"1\"]) {\n  padding-right: 0.75rem;\n  background-image: none;\n}\n.form-select:disabled {\n  background-color: var(--bs-secondary-bg);\n}\n.form-select:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 var(--bs-body-color);\n}\n\n.form-select-sm {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.5rem;\n  font-size: 0.875rem;\n  border-radius: var(--bs-border-radius-sm);\n}\n\n.form-select-lg {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  font-size: 1.25rem;\n  border-radius: var(--bs-border-radius-lg);\n}\n\n[data-bs-theme=dark] .form-select {\n  --bs-form-select-bg-img: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\n}\n\n.form-check {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5em;\n  margin-bottom: 0.125rem;\n}\n.form-check .form-check-input {\n  float: left;\n  margin-left: -1.5em;\n}\n\n.form-check-reverse {\n  padding-right: 1.5em;\n  padding-left: 0;\n  text-align: right;\n}\n.form-check-reverse .form-check-input {\n  float: right;\n  margin-right: -1.5em;\n  margin-left: 0;\n}\n\n.form-check-input {\n  --bs-form-check-bg: var(--bs-body-bg);\n  flex-shrink: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.25em;\n  vertical-align: top;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: var(--bs-form-check-bg);\n  background-image: var(--bs-form-check-bg-image);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n  print-color-adjust: exact;\n}\n.form-check-input[type=checkbox] {\n  border-radius: 0.25em;\n}\n.form-check-input[type=radio] {\n  border-radius: 50%;\n}\n.form-check-input:active {\n  filter: brightness(90%);\n}\n.form-check-input:focus {\n  border-color: #86b7fe;\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-check-input:checked {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n}\n.form-check-input:checked[type=checkbox] {\n  --bs-form-check-bg-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\");\n}\n.form-check-input:checked[type=radio] {\n  --bs-form-check-bg-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-check-input[type=checkbox]:indeterminate {\n  background-color: #0d6efd;\n  border-color: #0d6efd;\n  --bs-form-check-bg-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\");\n}\n.form-check-input:disabled {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.5;\n}\n.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {\n  cursor: default;\n  opacity: 0.5;\n}\n\n.form-switch {\n  padding-left: 2.5em;\n}\n.form-switch .form-check-input {\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");\n  width: 2em;\n  margin-left: -2.5em;\n  background-image: var(--bs-form-switch-bg);\n  background-position: left center;\n  border-radius: 2em;\n  transition: background-position 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-switch .form-check-input {\n    transition: none;\n  }\n}\n.form-switch .form-check-input:focus {\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\");\n}\n.form-switch .form-check-input:checked {\n  background-position: right center;\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\");\n}\n.form-switch.form-check-reverse {\n  padding-right: 2.5em;\n  padding-left: 0;\n}\n.form-switch.form-check-reverse .form-check-input {\n  margin-right: -2.5em;\n  margin-left: 0;\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: 1rem;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.btn-check[disabled] + .btn, .btn-check:disabled + .btn {\n  pointer-events: none;\n  filter: none;\n  opacity: 0.65;\n}\n\n[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus) {\n  --bs-form-switch-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e\");\n}\n\n.form-range {\n  width: 100%;\n  height: 1.5rem;\n  padding: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: transparent;\n}\n.form-range:focus {\n  outline: 0;\n}\n.form-range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.form-range::-moz-focus-outer {\n  border: 0;\n}\n.form-range::-webkit-slider-thumb {\n  width: 1rem;\n  height: 1rem;\n  margin-top: -0.25rem;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-webkit-slider-thumb {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.form-range::-webkit-slider-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: var(--bs-secondary-bg);\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range::-moz-range-thumb {\n  width: 1rem;\n  height: 1rem;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: #0d6efd;\n  border: 0;\n  border-radius: 1rem;\n  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-range::-moz-range-thumb {\n    -moz-transition: none;\n    transition: none;\n  }\n}\n.form-range::-moz-range-thumb:active {\n  background-color: #b6d4fe;\n}\n.form-range::-moz-range-track {\n  width: 100%;\n  height: 0.5rem;\n  color: transparent;\n  cursor: pointer;\n  background-color: var(--bs-secondary-bg);\n  border-color: transparent;\n  border-radius: 1rem;\n}\n.form-range:disabled {\n  pointer-events: none;\n}\n.form-range:disabled::-webkit-slider-thumb {\n  background-color: var(--bs-secondary-color);\n}\n.form-range:disabled::-moz-range-thumb {\n  background-color: var(--bs-secondary-color);\n}\n\n.form-floating {\n  position: relative;\n}\n.form-floating > .form-control,\n.form-floating > .form-control-plaintext,\n.form-floating > .form-select {\n  height: calc(3.5rem + calc(var(--bs-border-width) * 2));\n  min-height: calc(3.5rem + calc(var(--bs-border-width) * 2));\n  line-height: 1.25;\n}\n.form-floating > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  height: 100%;\n  padding: 1rem 0.75rem;\n  overflow: hidden;\n  text-align: start;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  pointer-events: none;\n  border: var(--bs-border-width) solid transparent;\n  transform-origin: 0 0;\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .form-floating > label {\n    transition: none;\n  }\n}\n.form-floating > .form-control,\n.form-floating > .form-control-plaintext {\n  padding: 1rem 0.75rem;\n}\n.form-floating > .form-control::-moz-placeholder, .form-floating > .form-control-plaintext::-moz-placeholder {\n  color: transparent;\n}\n.form-floating > .form-control::placeholder,\n.form-floating > .form-control-plaintext::placeholder {\n  color: transparent;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown), .form-floating > .form-control-plaintext:not(:-moz-placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown),\n.form-floating > .form-control-plaintext:focus,\n.form-floating > .form-control-plaintext:not(:placeholder-shown) {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:-webkit-autofill,\n.form-floating > .form-control-plaintext:-webkit-autofill {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-select {\n  padding-top: 1.625rem;\n  padding-bottom: 0.625rem;\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {\n  color: rgba(var(--bs-body-color-rgb), 0.65);\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:focus ~ label,\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\n.form-floating > .form-control-plaintext ~ label,\n.form-floating > .form-select ~ label {\n  color: rgba(var(--bs-body-color-rgb), 0.65);\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label::after {\n  position: absolute;\n  inset: 1rem 0.375rem;\n  z-index: -1;\n  height: 1.5em;\n  content: \"\";\n  background-color: var(--bs-body-bg);\n  border-radius: var(--bs-border-radius);\n}\n.form-floating > .form-control:focus ~ label::after,\n.form-floating > .form-control:not(:placeholder-shown) ~ label::after,\n.form-floating > .form-control-plaintext ~ label::after,\n.form-floating > .form-select ~ label::after {\n  position: absolute;\n  inset: 1rem 0.375rem;\n  z-index: -1;\n  height: 1.5em;\n  content: \"\";\n  background-color: var(--bs-body-bg);\n  border-radius: var(--bs-border-radius);\n}\n.form-floating > .form-control:-webkit-autofill ~ label {\n  color: rgba(var(--bs-body-color-rgb), 0.65);\n  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);\n}\n.form-floating > .form-control-plaintext ~ label {\n  border-width: var(--bs-border-width) 0;\n}\n.form-floating > :disabled ~ label,\n.form-floating > .form-control:disabled ~ label {\n  color: #6c757d;\n}\n.form-floating > :disabled ~ label::after,\n.form-floating > .form-control:disabled ~ label::after {\n  background-color: var(--bs-secondary-bg);\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group > .form-control,\n.input-group > .form-select,\n.input-group > .form-floating {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  min-width: 0;\n}\n.input-group > .form-control:focus,\n.input-group > .form-select:focus,\n.input-group > .form-floating:focus-within {\n  z-index: 5;\n}\n.input-group .btn {\n  position: relative;\n  z-index: 2;\n}\n.input-group .btn:focus {\n  z-index: 5;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--bs-body-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-tertiary-bg);\n  border: var(--bs-border-width) solid var(--bs-border-color);\n  border-radius: var(--bs-border-radius);\n}\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: var(--bs-border-radius-lg);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: var(--bs-border-radius-sm);\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: 3rem;\n}\n\n.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),\n.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,\n.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),\n.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),\n.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,\n.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {\n  margin-left: calc(var(--bs-border-width) * -1);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .form-floating:not(:first-child) > .form-control,\n.input-group > .form-floating:not(:first-child) > .form-select {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--bs-form-valid-color);\n}\n\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: var(--bs-success);\n  border-radius: var(--bs-border-radius);\n}\n\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid {\n  border-color: var(--bs-form-valid-border-color);\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus {\n  border-color: var(--bs-form-valid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);\n}\n\n.was-validated textarea.form-control:valid, textarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:valid, .form-select.is-valid {\n  border-color: var(--bs-form-valid-border-color);\n}\n.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size=\"1\"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size=\"1\"] {\n  --bs-form-select-bg-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  padding-right: 4.125rem;\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:valid:focus, .form-select.is-valid:focus {\n  border-color: var(--bs-form-valid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);\n}\n\n.was-validated .form-control-color:valid, .form-control-color.is-valid {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n\n.was-validated .form-check-input:valid, .form-check-input.is-valid {\n  border-color: var(--bs-form-valid-border-color);\n}\n.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {\n  background-color: var(--bs-form-valid-color);\n}\n.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25);\n}\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: var(--bs-form-valid-color);\n}\n\n.form-check-inline .form-check-input ~ .valid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group > .form-control:not(:focus):valid, .input-group > .form-control:not(:focus).is-valid,\n.was-validated .input-group > .form-select:not(:focus):valid,\n.input-group > .form-select:not(:focus).is-valid,\n.was-validated .input-group > .form-floating:not(:focus-within):valid,\n.input-group > .form-floating:not(:focus-within).is-valid {\n  z-index: 3;\n}\n\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875em;\n  color: var(--bs-form-invalid-color);\n}\n\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: 0.25rem 0.5rem;\n  margin-top: 0.1rem;\n  font-size: 0.875rem;\n  color: #fff;\n  background-color: var(--bs-danger);\n  border-radius: var(--bs-border-radius);\n}\n\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid {\n  border-color: var(--bs-form-invalid-border-color);\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {\n  border-color: var(--bs-form-invalid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);\n}\n\n.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.was-validated .form-select:invalid, .form-select.is-invalid {\n  border-color: var(--bs-form-invalid-border-color);\n}\n.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size=\"1\"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size=\"1\"] {\n  --bs-form-select-bg-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  padding-right: 4.125rem;\n  background-position: right 0.75rem center, center right 2.25rem;\n  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {\n  border-color: var(--bs-form-invalid-border-color);\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);\n}\n\n.was-validated .form-control-color:invalid, .form-control-color.is-invalid {\n  width: calc(3rem + calc(1.5em + 0.75rem));\n}\n\n.was-validated .form-check-input:invalid, .form-check-input.is-invalid {\n  border-color: var(--bs-form-invalid-border-color);\n}\n.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {\n  background-color: var(--bs-form-invalid-color);\n}\n.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {\n  box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25);\n}\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: var(--bs-form-invalid-color);\n}\n\n.form-check-inline .form-check-input ~ .invalid-feedback {\n  margin-left: 0.5em;\n}\n\n.was-validated .input-group > .form-control:not(:focus):invalid, .input-group > .form-control:not(:focus).is-invalid,\n.was-validated .input-group > .form-select:not(:focus):invalid,\n.input-group > .form-select:not(:focus).is-invalid,\n.was-validated .input-group > .form-floating:not(:focus-within):invalid,\n.input-group > .form-floating:not(:focus-within).is-invalid {\n  z-index: 4;\n}\n\n.btn {\n  --bs-btn-padding-x: 0.75rem;\n  --bs-btn-padding-y: 0.375rem;\n  --bs-btn-font-family: ;\n  --bs-btn-font-size: 1rem;\n  --bs-btn-font-weight: 400;\n  --bs-btn-line-height: 1.5;\n  --bs-btn-color: var(--bs-body-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-width: var(--bs-border-width);\n  --bs-btn-border-color: transparent;\n  --bs-btn-border-radius: var(--bs-border-radius);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  --bs-btn-disabled-opacity: 0.65;\n  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);\n  display: inline-block;\n  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);\n  font-family: var(--bs-btn-font-family);\n  font-size: var(--bs-btn-font-size);\n  font-weight: var(--bs-btn-font-weight);\n  line-height: var(--bs-btn-line-height);\n  color: var(--bs-btn-color);\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);\n  border-radius: var(--bs-btn-border-radius);\n  background-color: var(--bs-btn-bg);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .btn {\n    transition: none;\n  }\n}\n.btn:hover {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n}\n.btn-check + .btn:hover {\n  color: var(--bs-btn-color);\n  background-color: var(--bs-btn-bg);\n  border-color: var(--bs-btn-border-color);\n}\n.btn:focus-visible {\n  color: var(--bs-btn-hover-color);\n  background-color: var(--bs-btn-hover-bg);\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:focus-visible + .btn {\n  border-color: var(--bs-btn-hover-border-color);\n  outline: 0;\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {\n  color: var(--bs-btn-active-color);\n  background-color: var(--bs-btn-active-bg);\n  border-color: var(--bs-btn-active-border-color);\n}\n.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {\n  box-shadow: var(--bs-btn-focus-box-shadow);\n}\n.btn:disabled, .btn.disabled, fieldset:disabled .btn {\n  color: var(--bs-btn-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-btn-disabled-bg);\n  border-color: var(--bs-btn-disabled-border-color);\n  opacity: var(--bs-btn-disabled-opacity);\n}\n\n.btn-primary {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #0d6efd;\n  --bs-btn-border-color: #0d6efd;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0b5ed7;\n  --bs-btn-hover-border-color: #0a58ca;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0a58ca;\n  --bs-btn-active-border-color: #0a53be;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #0d6efd;\n  --bs-btn-disabled-border-color: #0d6efd;\n}\n\n.btn-secondary {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #6c757d;\n  --bs-btn-border-color: #6c757d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #5c636a;\n  --bs-btn-hover-border-color: #565e64;\n  --bs-btn-focus-shadow-rgb: 130, 138, 145;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #565e64;\n  --bs-btn-active-border-color: #51585e;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #6c757d;\n  --bs-btn-disabled-border-color: #6c757d;\n}\n\n.btn-success {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #198754;\n  --bs-btn-border-color: #198754;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #157347;\n  --bs-btn-hover-border-color: #146c43;\n  --bs-btn-focus-shadow-rgb: 60, 153, 110;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #146c43;\n  --bs-btn-active-border-color: #13653f;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #198754;\n  --bs-btn-disabled-border-color: #198754;\n}\n\n.btn-info {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #0dcaf0;\n  --bs-btn-border-color: #0dcaf0;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #31d2f2;\n  --bs-btn-hover-border-color: #25cff2;\n  --bs-btn-focus-shadow-rgb: 11, 172, 204;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #3dd5f3;\n  --bs-btn-active-border-color: #25cff2;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #0dcaf0;\n  --bs-btn-disabled-border-color: #0dcaf0;\n}\n\n.btn-warning {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #ffc107;\n  --bs-btn-border-color: #ffc107;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #ffca2c;\n  --bs-btn-hover-border-color: #ffc720;\n  --bs-btn-focus-shadow-rgb: 217, 164, 6;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #ffcd39;\n  --bs-btn-active-border-color: #ffc720;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #ffc107;\n  --bs-btn-disabled-border-color: #ffc107;\n}\n\n.btn-danger {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #dc3545;\n  --bs-btn-border-color: #dc3545;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #bb2d3b;\n  --bs-btn-hover-border-color: #b02a37;\n  --bs-btn-focus-shadow-rgb: 225, 83, 97;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #b02a37;\n  --bs-btn-active-border-color: #a52834;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #dc3545;\n  --bs-btn-disabled-border-color: #dc3545;\n}\n\n.btn-light {\n  --bs-btn-color: #000;\n  --bs-btn-bg: #f8f9fa;\n  --bs-btn-border-color: #f8f9fa;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #d3d4d5;\n  --bs-btn-hover-border-color: #c6c7c8;\n  --bs-btn-focus-shadow-rgb: 211, 212, 213;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #c6c7c8;\n  --bs-btn-active-border-color: #babbbc;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #000;\n  --bs-btn-disabled-bg: #f8f9fa;\n  --bs-btn-disabled-border-color: #f8f9fa;\n}\n\n.btn-dark {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #212529;\n  --bs-btn-border-color: #212529;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #424649;\n  --bs-btn-hover-border-color: #373b3e;\n  --bs-btn-focus-shadow-rgb: 66, 70, 73;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #4d5154;\n  --bs-btn-active-border-color: #373b3e;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #212529;\n  --bs-btn-disabled-border-color: #212529;\n}\n\n.btn-outline-primary {\n  --bs-btn-color: #0d6efd;\n  --bs-btn-border-color: #0d6efd;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0d6efd;\n  --bs-btn-hover-border-color: #0d6efd;\n  --bs-btn-focus-shadow-rgb: 13, 110, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0d6efd;\n  --bs-btn-active-border-color: #0d6efd;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #0d6efd;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #0d6efd;\n  --bs-gradient: none;\n}\n\n.btn-outline-secondary {\n  --bs-btn-color: #6c757d;\n  --bs-btn-border-color: #6c757d;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #6c757d;\n  --bs-btn-hover-border-color: #6c757d;\n  --bs-btn-focus-shadow-rgb: 108, 117, 125;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #6c757d;\n  --bs-btn-active-border-color: #6c757d;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #6c757d;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #6c757d;\n  --bs-gradient: none;\n}\n\n.btn-outline-success {\n  --bs-btn-color: #198754;\n  --bs-btn-border-color: #198754;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #198754;\n  --bs-btn-hover-border-color: #198754;\n  --bs-btn-focus-shadow-rgb: 25, 135, 84;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #198754;\n  --bs-btn-active-border-color: #198754;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #198754;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #198754;\n  --bs-gradient: none;\n}\n\n.btn-outline-info {\n  --bs-btn-color: #0dcaf0;\n  --bs-btn-border-color: #0dcaf0;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #0dcaf0;\n  --bs-btn-hover-border-color: #0dcaf0;\n  --bs-btn-focus-shadow-rgb: 13, 202, 240;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #0dcaf0;\n  --bs-btn-active-border-color: #0dcaf0;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #0dcaf0;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #0dcaf0;\n  --bs-gradient: none;\n}\n\n.btn-outline-warning {\n  --bs-btn-color: #ffc107;\n  --bs-btn-border-color: #ffc107;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #ffc107;\n  --bs-btn-hover-border-color: #ffc107;\n  --bs-btn-focus-shadow-rgb: 255, 193, 7;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #ffc107;\n  --bs-btn-active-border-color: #ffc107;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #ffc107;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #ffc107;\n  --bs-gradient: none;\n}\n\n.btn-outline-danger {\n  --bs-btn-color: #dc3545;\n  --bs-btn-border-color: #dc3545;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #dc3545;\n  --bs-btn-hover-border-color: #dc3545;\n  --bs-btn-focus-shadow-rgb: 220, 53, 69;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #dc3545;\n  --bs-btn-active-border-color: #dc3545;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #dc3545;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #dc3545;\n  --bs-gradient: none;\n}\n\n.btn-outline-light {\n  --bs-btn-color: #f8f9fa;\n  --bs-btn-border-color: #f8f9fa;\n  --bs-btn-hover-color: #000;\n  --bs-btn-hover-bg: #f8f9fa;\n  --bs-btn-hover-border-color: #f8f9fa;\n  --bs-btn-focus-shadow-rgb: 248, 249, 250;\n  --bs-btn-active-color: #000;\n  --bs-btn-active-bg: #f8f9fa;\n  --bs-btn-active-border-color: #f8f9fa;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #f8f9fa;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #f8f9fa;\n  --bs-gradient: none;\n}\n\n.btn-outline-dark {\n  --bs-btn-color: #212529;\n  --bs-btn-border-color: #212529;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #212529;\n  --bs-btn-hover-border-color: #212529;\n  --bs-btn-focus-shadow-rgb: 33, 37, 41;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #212529;\n  --bs-btn-active-border-color: #212529;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #212529;\n  --bs-btn-disabled-bg: transparent;\n  --bs-btn-disabled-border-color: #212529;\n  --bs-gradient: none;\n}\n\n.btn-link {\n  --bs-btn-font-weight: 400;\n  --bs-btn-color: var(--bs-link-color);\n  --bs-btn-bg: transparent;\n  --bs-btn-border-color: transparent;\n  --bs-btn-hover-color: var(--bs-link-hover-color);\n  --bs-btn-hover-border-color: transparent;\n  --bs-btn-active-color: var(--bs-link-hover-color);\n  --bs-btn-active-border-color: transparent;\n  --bs-btn-disabled-color: #6c757d;\n  --bs-btn-disabled-border-color: transparent;\n  --bs-btn-box-shadow: 0 0 0 #000;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  text-decoration: underline;\n}\n.btn-link:focus-visible {\n  color: var(--bs-btn-color);\n}\n.btn-link:hover {\n  color: var(--bs-btn-hover-color);\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  --bs-btn-padding-y: 0.5rem;\n  --bs-btn-padding-x: 1rem;\n  --bs-btn-font-size: 1.25rem;\n  --bs-btn-border-radius: var(--bs-border-radius-lg);\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  --bs-btn-padding-y: 0.25rem;\n  --bs-btn-padding-x: 0.5rem;\n  --bs-btn-font-size: 0.875rem;\n  --bs-btn-border-radius: var(--bs-border-radius-sm);\n}\n\n.fade {\n  transition: opacity 0.15s linear;\n}\n@media (prefers-reduced-motion: reduce) {\n  .fade {\n    transition: none;\n  }\n}\n.fade:not(.show) {\n  opacity: 0;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing {\n    transition: none;\n  }\n}\n.collapsing.collapse-horizontal {\n  width: 0;\n  height: auto;\n  transition: width 0.35s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .collapsing.collapse-horizontal {\n    transition: none;\n  }\n}\n\n.dropup,\n.dropend,\n.dropdown,\n.dropstart,\n.dropup-center,\n.dropdown-center {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n}\n.dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent;\n}\n.dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropdown-menu {\n  --bs-dropdown-zindex: 1000;\n  --bs-dropdown-min-width: 10rem;\n  --bs-dropdown-padding-x: 0;\n  --bs-dropdown-padding-y: 0.5rem;\n  --bs-dropdown-spacer: 0.125rem;\n  --bs-dropdown-font-size: 1rem;\n  --bs-dropdown-color: var(--bs-body-color);\n  --bs-dropdown-bg: var(--bs-body-bg);\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-border-radius: var(--bs-border-radius);\n  --bs-dropdown-border-width: var(--bs-border-width);\n  --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width));\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-divider-margin-y: 0.5rem;\n  --bs-dropdown-box-shadow: var(--bs-box-shadow);\n  --bs-dropdown-link-color: var(--bs-body-color);\n  --bs-dropdown-link-hover-color: var(--bs-body-color);\n  --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: var(--bs-tertiary-color);\n  --bs-dropdown-item-padding-x: 1rem;\n  --bs-dropdown-item-padding-y: 0.25rem;\n  --bs-dropdown-header-color: #6c757d;\n  --bs-dropdown-header-padding-x: 1rem;\n  --bs-dropdown-header-padding-y: 0.5rem;\n  position: absolute;\n  z-index: var(--bs-dropdown-zindex);\n  display: none;\n  min-width: var(--bs-dropdown-min-width);\n  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);\n  margin: 0;\n  font-size: var(--bs-dropdown-font-size);\n  color: var(--bs-dropdown-color);\n  text-align: left;\n  list-style: none;\n  background-color: var(--bs-dropdown-bg);\n  background-clip: padding-box;\n  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);\n  border-radius: var(--bs-dropdown-border-radius);\n}\n.dropdown-menu[data-bs-popper] {\n  top: 100%;\n  left: 0;\n  margin-top: var(--bs-dropdown-spacer);\n}\n\n.dropdown-menu-start {\n  --bs-position: start;\n}\n.dropdown-menu-start[data-bs-popper] {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-menu-end {\n  --bs-position: end;\n}\n.dropdown-menu-end[data-bs-popper] {\n  right: 0;\n  left: auto;\n}\n\n@media (min-width: 576px) {\n  .dropdown-menu-sm-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-sm-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-sm-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-sm-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 768px) {\n  .dropdown-menu-md-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-md-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-md-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-md-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 992px) {\n  .dropdown-menu-lg-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-lg-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-lg-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-lg-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1200px) {\n  .dropdown-menu-xl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n@media (min-width: 1400px) {\n  .dropdown-menu-xxl-start {\n    --bs-position: start;\n  }\n  .dropdown-menu-xxl-start[data-bs-popper] {\n    right: auto;\n    left: 0;\n  }\n  .dropdown-menu-xxl-end {\n    --bs-position: end;\n  }\n  .dropdown-menu-xxl-end[data-bs-popper] {\n    right: 0;\n    left: auto;\n  }\n}\n.dropup .dropdown-menu[data-bs-popper] {\n  top: auto;\n  bottom: 100%;\n  margin-top: 0;\n  margin-bottom: var(--bs-dropdown-spacer);\n}\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent;\n}\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n\n.dropend .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: auto;\n  left: 100%;\n  margin-top: 0;\n  margin-left: var(--bs-dropdown-spacer);\n}\n.dropend .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid;\n}\n.dropend .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropend .dropdown-toggle::after {\n  vertical-align: 0;\n}\n\n.dropstart .dropdown-menu[data-bs-popper] {\n  top: 0;\n  right: 100%;\n  left: auto;\n  margin-top: 0;\n  margin-right: var(--bs-dropdown-spacer);\n}\n.dropstart .dropdown-toggle::after {\n  display: inline-block;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n}\n.dropstart .dropdown-toggle::after {\n  display: none;\n}\n.dropstart .dropdown-toggle::before {\n  display: inline-block;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent;\n}\n.dropstart .dropdown-toggle:empty::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle::before {\n  vertical-align: 0;\n}\n\n.dropdown-divider {\n  height: 0;\n  margin: var(--bs-dropdown-divider-margin-y) 0;\n  overflow: hidden;\n  border-top: 1px solid var(--bs-dropdown-divider-bg);\n  opacity: 1;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  clear: both;\n  font-weight: 400;\n  color: var(--bs-dropdown-link-color);\n  text-align: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  border-radius: var(--bs-dropdown-item-border-radius, 0);\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color: var(--bs-dropdown-link-hover-color);\n  background-color: var(--bs-dropdown-link-hover-bg);\n}\n.dropdown-item.active, .dropdown-item:active {\n  color: var(--bs-dropdown-link-active-color);\n  text-decoration: none;\n  background-color: var(--bs-dropdown-link-active-bg);\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color: var(--bs-dropdown-link-disabled-color);\n  pointer-events: none;\n  background-color: transparent;\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n.dropdown-header {\n  display: block;\n  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: var(--bs-dropdown-header-color);\n  white-space: nowrap;\n}\n\n.dropdown-item-text {\n  display: block;\n  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);\n  color: var(--bs-dropdown-link-color);\n}\n\n.dropdown-menu-dark {\n  --bs-dropdown-color: #dee2e6;\n  --bs-dropdown-bg: #343a40;\n  --bs-dropdown-border-color: var(--bs-border-color-translucent);\n  --bs-dropdown-box-shadow: ;\n  --bs-dropdown-link-color: #dee2e6;\n  --bs-dropdown-link-hover-color: #fff;\n  --bs-dropdown-divider-bg: var(--bs-border-color-translucent);\n  --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);\n  --bs-dropdown-link-active-color: #fff;\n  --bs-dropdown-link-active-bg: #0d6efd;\n  --bs-dropdown-link-disabled-color: #adb5bd;\n  --bs-dropdown-header-color: #adb5bd;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  flex: 1 1 auto;\n}\n.btn-group > .btn-check:checked + .btn,\n.btn-group > .btn-check:focus + .btn,\n.btn-group > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn-check:checked + .btn,\n.btn-group-vertical > .btn-check:focus + .btn,\n.btn-group-vertical > .btn:hover,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 1;\n}\n\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.btn-toolbar .input-group {\n  width: auto;\n}\n\n.btn-group {\n  border-radius: var(--bs-border-radius);\n}\n.btn-group > :not(.btn-check:first-child) + .btn,\n.btn-group > .btn-group:not(:first-child) {\n  margin-left: calc(var(--bs-border-width) * -1);\n}\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn.dropdown-toggle-split:first-child,\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:nth-child(n+3),\n.btn-group > :not(.btn-check) + .btn,\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {\n  margin-left: 0;\n}\n.dropstart .dropdown-toggle-split::before {\n  margin-right: 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n}\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group {\n  width: 100%;\n}\n.btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) {\n  margin-top: calc(var(--bs-border-width) * -1);\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn ~ .btn,\n.btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav {\n  --bs-nav-link-padding-x: 1rem;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-link-color);\n  --bs-nav-link-hover-color: var(--bs-link-hover-color);\n  --bs-nav-link-disabled-color: var(--bs-secondary-color);\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);\n  font-size: var(--bs-nav-link-font-size);\n  font-weight: var(--bs-nav-link-font-weight);\n  color: var(--bs-nav-link-color);\n  text-decoration: none;\n  background: none;\n  border: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nav-link {\n    transition: none;\n  }\n}\n.nav-link:hover, .nav-link:focus {\n  color: var(--bs-nav-link-hover-color);\n}\n.nav-link:focus-visible {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n}\n.nav-link.disabled, .nav-link:disabled {\n  color: var(--bs-nav-link-disabled-color);\n  pointer-events: none;\n  cursor: default;\n}\n\n.nav-tabs {\n  --bs-nav-tabs-border-width: var(--bs-border-width);\n  --bs-nav-tabs-border-color: var(--bs-border-color);\n  --bs-nav-tabs-border-radius: var(--bs-border-radius);\n  --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);\n  --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);\n  --bs-nav-tabs-link-active-bg: var(--bs-body-bg);\n  --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);\n  border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);\n}\n.nav-tabs .nav-link {\n  margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));\n  border: var(--bs-nav-tabs-border-width) solid transparent;\n  border-top-left-radius: var(--bs-nav-tabs-border-radius);\n  border-top-right-radius: var(--bs-nav-tabs-border-radius);\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  isolation: isolate;\n  border-color: var(--bs-nav-tabs-link-hover-border-color);\n}\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link {\n  color: var(--bs-nav-tabs-link-active-color);\n  background-color: var(--bs-nav-tabs-link-active-bg);\n  border-color: var(--bs-nav-tabs-link-active-border-color);\n}\n.nav-tabs .dropdown-menu {\n  margin-top: calc(-1 * var(--bs-nav-tabs-border-width));\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.nav-pills {\n  --bs-nav-pills-border-radius: var(--bs-border-radius);\n  --bs-nav-pills-link-active-color: #fff;\n  --bs-nav-pills-link-active-bg: #0d6efd;\n}\n.nav-pills .nav-link {\n  border-radius: var(--bs-nav-pills-border-radius);\n}\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: var(--bs-nav-pills-link-active-color);\n  background-color: var(--bs-nav-pills-link-active-bg);\n}\n\n.nav-underline {\n  --bs-nav-underline-gap: 1rem;\n  --bs-nav-underline-border-width: 0.125rem;\n  --bs-nav-underline-link-active-color: var(--bs-emphasis-color);\n  gap: var(--bs-nav-underline-gap);\n}\n.nav-underline .nav-link {\n  padding-right: 0;\n  padding-left: 0;\n  border-bottom: var(--bs-nav-underline-border-width) solid transparent;\n}\n.nav-underline .nav-link:hover, .nav-underline .nav-link:focus {\n  border-bottom-color: currentcolor;\n}\n.nav-underline .nav-link.active,\n.nav-underline .show > .nav-link {\n  font-weight: 700;\n  color: var(--bs-nav-underline-link-active-color);\n  border-bottom-color: currentcolor;\n}\n\n.nav-fill > .nav-link,\n.nav-fill .nav-item {\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.nav-justified > .nav-link,\n.nav-justified .nav-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  text-align: center;\n}\n\n.nav-fill .nav-item .nav-link,\n.nav-justified .nav-item .nav-link {\n  width: 100%;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n\n.navbar {\n  --bs-navbar-padding-x: 0;\n  --bs-navbar-padding-y: 0.5rem;\n  --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);\n  --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);\n  --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);\n  --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);\n  --bs-navbar-brand-padding-y: 0.3125rem;\n  --bs-navbar-brand-margin-end: 1rem;\n  --bs-navbar-brand-font-size: 1.25rem;\n  --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);\n  --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);\n  --bs-navbar-nav-link-padding-x: 0.5rem;\n  --bs-navbar-toggler-padding-y: 0.25rem;\n  --bs-navbar-toggler-padding-x: 0.75rem;\n  --bs-navbar-toggler-font-size: 1.25rem;\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n  --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);\n  --bs-navbar-toggler-border-radius: var(--bs-border-radius);\n  --bs-navbar-toggler-focus-width: 0.25rem;\n  --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);\n}\n.navbar > .container,\n.navbar > .container-fluid,\n.navbar > .container-sm,\n.navbar > .container-md,\n.navbar > .container-lg,\n.navbar > .container-xl,\n.navbar > .container-xxl {\n  display: flex;\n  flex-wrap: inherit;\n  align-items: center;\n  justify-content: space-between;\n}\n.navbar-brand {\n  padding-top: var(--bs-navbar-brand-padding-y);\n  padding-bottom: var(--bs-navbar-brand-padding-y);\n  margin-right: var(--bs-navbar-brand-margin-end);\n  font-size: var(--bs-navbar-brand-font-size);\n  color: var(--bs-navbar-brand-color);\n  text-decoration: none;\n  white-space: nowrap;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n  color: var(--bs-navbar-brand-hover-color);\n}\n\n.navbar-nav {\n  --bs-nav-link-padding-x: 0;\n  --bs-nav-link-padding-y: 0.5rem;\n  --bs-nav-link-font-weight: ;\n  --bs-nav-link-color: var(--bs-navbar-color);\n  --bs-nav-link-hover-color: var(--bs-navbar-hover-color);\n  --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {\n  color: var(--bs-navbar-active-color);\n}\n.navbar-nav .dropdown-menu {\n  position: static;\n}\n\n.navbar-text {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: var(--bs-navbar-color);\n}\n.navbar-text a,\n.navbar-text a:hover,\n.navbar-text a:focus {\n  color: var(--bs-navbar-active-color);\n}\n\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  align-items: center;\n}\n\n.navbar-toggler {\n  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);\n  font-size: var(--bs-navbar-toggler-font-size);\n  line-height: 1;\n  color: var(--bs-navbar-color);\n  background-color: transparent;\n  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);\n  border-radius: var(--bs-navbar-toggler-border-radius);\n  transition: var(--bs-navbar-toggler-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .navbar-toggler {\n    transition: none;\n  }\n}\n.navbar-toggler:hover {\n  text-decoration: none;\n}\n.navbar-toggler:focus {\n  text-decoration: none;\n  outline: 0;\n  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width);\n}\n\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-image: var(--bs-navbar-toggler-icon-bg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--bs-scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-sm .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-sm .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-sm .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-md .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-md .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-md .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-lg .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-lg .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-lg .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-xl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-xl .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xl .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n@media (min-width: 1400px) {\n  .navbar-expand-xxl {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n  }\n  .navbar-expand-xxl .navbar-nav {\n    flex-direction: row;\n  }\n  .navbar-expand-xxl .navbar-nav .dropdown-menu {\n    position: absolute;\n  }\n  .navbar-expand-xxl .navbar-nav .nav-link {\n    padding-right: var(--bs-navbar-nav-link-padding-x);\n    padding-left: var(--bs-navbar-nav-link-padding-x);\n  }\n  .navbar-expand-xxl .navbar-nav-scroll {\n    overflow: visible;\n  }\n  .navbar-expand-xxl .navbar-collapse {\n    display: flex !important;\n    flex-basis: auto;\n  }\n  .navbar-expand-xxl .navbar-toggler {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas {\n    position: static;\n    z-index: auto;\n    flex-grow: 1;\n    width: auto !important;\n    height: auto !important;\n    visibility: visible !important;\n    background-color: transparent !important;\n    border: 0 !important;\n    transform: none !important;\n    transition: none;\n  }\n  .navbar-expand-xxl .offcanvas .offcanvas-header {\n    display: none;\n  }\n  .navbar-expand-xxl .offcanvas .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n  }\n}\n.navbar-expand {\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n.navbar-expand .navbar-nav {\n  flex-direction: row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right: var(--bs-navbar-nav-link-padding-x);\n  padding-left: var(--bs-navbar-nav-link-padding-x);\n}\n.navbar-expand .navbar-nav-scroll {\n  overflow: visible;\n}\n.navbar-expand .navbar-collapse {\n  display: flex !important;\n  flex-basis: auto;\n}\n.navbar-expand .navbar-toggler {\n  display: none;\n}\n.navbar-expand .offcanvas {\n  position: static;\n  z-index: auto;\n  flex-grow: 1;\n  width: auto !important;\n  height: auto !important;\n  visibility: visible !important;\n  background-color: transparent !important;\n  border: 0 !important;\n  transform: none !important;\n  transition: none;\n}\n.navbar-expand .offcanvas .offcanvas-header {\n  display: none;\n}\n.navbar-expand .offcanvas .offcanvas-body {\n  display: flex;\n  flex-grow: 0;\n  padding: 0;\n  overflow-y: visible;\n}\n\n.navbar-dark,\n.navbar[data-bs-theme=dark] {\n  --bs-navbar-color: rgba(255, 255, 255, 0.55);\n  --bs-navbar-hover-color: rgba(255, 255, 255, 0.75);\n  --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);\n  --bs-navbar-active-color: #fff;\n  --bs-navbar-brand-color: #fff;\n  --bs-navbar-brand-hover-color: #fff;\n  --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n[data-bs-theme=dark] .navbar-toggler-icon {\n  --bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.card {\n  --bs-card-spacer-y: 1rem;\n  --bs-card-spacer-x: 1rem;\n  --bs-card-title-spacer-y: 0.5rem;\n  --bs-card-title-color: ;\n  --bs-card-subtitle-color: ;\n  --bs-card-border-width: var(--bs-border-width);\n  --bs-card-border-color: var(--bs-border-color-translucent);\n  --bs-card-border-radius: var(--bs-border-radius);\n  --bs-card-box-shadow: ;\n  --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));\n  --bs-card-cap-padding-y: 0.5rem;\n  --bs-card-cap-padding-x: 1rem;\n  --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);\n  --bs-card-cap-color: ;\n  --bs-card-height: ;\n  --bs-card-color: ;\n  --bs-card-bg: var(--bs-body-bg);\n  --bs-card-img-overlay-padding: 1rem;\n  --bs-card-group-margin: 0.75rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  height: var(--bs-card-height);\n  color: var(--bs-body-color);\n  word-wrap: break-word;\n  background-color: var(--bs-card-bg);\n  background-clip: border-box;\n  border: var(--bs-card-border-width) solid var(--bs-card-border-color);\n  border-radius: var(--bs-card-border-radius);\n}\n.card > hr {\n  margin-right: 0;\n  margin-left: 0;\n}\n.card > .list-group {\n  border-top: inherit;\n  border-bottom: inherit;\n}\n.card > .list-group:first-child {\n  border-top-width: 0;\n  border-top-left-radius: var(--bs-card-inner-border-radius);\n  border-top-right-radius: var(--bs-card-inner-border-radius);\n}\n.card > .list-group:last-child {\n  border-bottom-width: 0;\n  border-bottom-right-radius: var(--bs-card-inner-border-radius);\n  border-bottom-left-radius: var(--bs-card-inner-border-radius);\n}\n.card > .card-header + .list-group,\n.card > .list-group + .card-footer {\n  border-top: 0;\n}\n\n.card-body {\n  flex: 1 1 auto;\n  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);\n  color: var(--bs-card-color);\n}\n\n.card-title {\n  margin-bottom: var(--bs-card-title-spacer-y);\n  color: var(--bs-card-title-color);\n}\n\n.card-subtitle {\n  margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));\n  margin-bottom: 0;\n  color: var(--bs-card-subtitle-color);\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link + .card-link {\n  margin-left: var(--bs-card-spacer-x);\n}\n\n.card-header {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  margin-bottom: 0;\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-header:first-child {\n  border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;\n}\n\n.card-footer {\n  padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);\n  color: var(--bs-card-cap-color);\n  background-color: var(--bs-card-cap-bg);\n  border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);\n}\n.card-footer:last-child {\n  border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);\n}\n\n.card-header-tabs {\n  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));\n  margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));\n  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));\n  border-bottom: 0;\n}\n.card-header-tabs .nav-link.active {\n  background-color: var(--bs-card-bg);\n  border-bottom-color: var(--bs-card-bg);\n}\n\n.card-header-pills {\n  margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));\n  margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: var(--bs-card-img-overlay-padding);\n  border-radius: var(--bs-card-inner-border-radius);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%;\n}\n\n.card-img,\n.card-img-top {\n  border-top-left-radius: var(--bs-card-inner-border-radius);\n  border-top-right-radius: var(--bs-card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  border-bottom-right-radius: var(--bs-card-inner-border-radius);\n  border-bottom-left-radius: var(--bs-card-inner-border-radius);\n}\n\n.card-group > .card {\n  margin-bottom: var(--bs-card-group-margin);\n}\n@media (min-width: 576px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .card-group > .card {\n    flex: 1 0 0%;\n    margin-bottom: 0;\n  }\n  .card-group > .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n  .card-group > .card:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header {\n    border-top-right-radius: 0;\n  }\n  .card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer {\n    border-bottom-right-radius: 0;\n  }\n  .card-group > .card:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header {\n    border-top-left-radius: 0;\n  }\n  .card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer {\n    border-bottom-left-radius: 0;\n  }\n}\n\n.accordion {\n  --bs-accordion-color: var(--bs-body-color);\n  --bs-accordion-bg: var(--bs-body-bg);\n  --bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;\n  --bs-accordion-border-color: var(--bs-border-color);\n  --bs-accordion-border-width: var(--bs-border-width);\n  --bs-accordion-border-radius: var(--bs-border-radius);\n  --bs-accordion-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));\n  --bs-accordion-btn-padding-x: 1.25rem;\n  --bs-accordion-btn-padding-y: 1rem;\n  --bs-accordion-btn-color: var(--bs-body-color);\n  --bs-accordion-btn-bg: var(--bs-accordion-bg);\n  --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-icon-width: 1.25rem;\n  --bs-accordion-btn-icon-transform: rotate(-180deg);\n  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-focus-border-color: #86b7fe;\n  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-accordion-body-padding-x: 1.25rem;\n  --bs-accordion-body-padding-y: 1rem;\n  --bs-accordion-active-color: var(--bs-primary-text-emphasis);\n  --bs-accordion-active-bg: var(--bs-primary-bg-subtle);\n}\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);\n  font-size: 1rem;\n  color: var(--bs-accordion-btn-color);\n  text-align: left;\n  background-color: var(--bs-accordion-btn-bg);\n  border: 0;\n  border-radius: 0;\n  overflow-anchor: none;\n  transition: var(--bs-accordion-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button {\n    transition: none;\n  }\n}\n.accordion-button:not(.collapsed) {\n  color: var(--bs-accordion-active-color);\n  background-color: var(--bs-accordion-active-bg);\n  box-shadow: inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color);\n}\n.accordion-button:not(.collapsed)::after {\n  background-image: var(--bs-accordion-btn-active-icon);\n  transform: var(--bs-accordion-btn-icon-transform);\n}\n.accordion-button::after {\n  flex-shrink: 0;\n  width: var(--bs-accordion-btn-icon-width);\n  height: var(--bs-accordion-btn-icon-width);\n  margin-left: auto;\n  content: \"\";\n  background-image: var(--bs-accordion-btn-icon);\n  background-repeat: no-repeat;\n  background-size: var(--bs-accordion-btn-icon-width);\n  transition: var(--bs-accordion-btn-icon-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .accordion-button::after {\n    transition: none;\n  }\n}\n.accordion-button:hover {\n  z-index: 2;\n}\n.accordion-button:focus {\n  z-index: 3;\n  border-color: var(--bs-accordion-btn-focus-border-color);\n  outline: 0;\n  box-shadow: var(--bs-accordion-btn-focus-box-shadow);\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  color: var(--bs-accordion-color);\n  background-color: var(--bs-accordion-bg);\n  border: var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);\n}\n.accordion-item:first-of-type {\n  border-top-left-radius: var(--bs-accordion-border-radius);\n  border-top-right-radius: var(--bs-accordion-border-radius);\n}\n.accordion-item:first-of-type .accordion-button {\n  border-top-left-radius: var(--bs-accordion-inner-border-radius);\n  border-top-right-radius: var(--bs-accordion-inner-border-radius);\n}\n.accordion-item:not(:first-of-type) {\n  border-top: 0;\n}\n.accordion-item:last-of-type {\n  border-bottom-right-radius: var(--bs-accordion-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-border-radius);\n}\n.accordion-item:last-of-type .accordion-button.collapsed {\n  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);\n}\n.accordion-item:last-of-type .accordion-collapse {\n  border-bottom-right-radius: var(--bs-accordion-border-radius);\n  border-bottom-left-radius: var(--bs-accordion-border-radius);\n}\n\n.accordion-body {\n  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);\n}\n\n.accordion-flush .accordion-collapse {\n  border-width: 0;\n}\n.accordion-flush .accordion-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0;\n}\n.accordion-flush .accordion-item:first-child {\n  border-top: 0;\n}\n.accordion-flush .accordion-item:last-child {\n  border-bottom: 0;\n}\n.accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {\n  border-radius: 0;\n}\n\n[data-bs-theme=dark] .accordion-button::after {\n  --bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n  --bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n\n.breadcrumb {\n  --bs-breadcrumb-padding-x: 0;\n  --bs-breadcrumb-padding-y: 0;\n  --bs-breadcrumb-margin-bottom: 1rem;\n  --bs-breadcrumb-bg: ;\n  --bs-breadcrumb-border-radius: ;\n  --bs-breadcrumb-divider-color: var(--bs-secondary-color);\n  --bs-breadcrumb-item-padding-x: 0.5rem;\n  --bs-breadcrumb-item-active-color: var(--bs-secondary-color);\n  display: flex;\n  flex-wrap: wrap;\n  padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);\n  margin-bottom: var(--bs-breadcrumb-margin-bottom);\n  font-size: var(--bs-breadcrumb-font-size);\n  list-style: none;\n  background-color: var(--bs-breadcrumb-bg);\n  border-radius: var(--bs-breadcrumb-border-radius);\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left: var(--bs-breadcrumb-item-padding-x);\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  float: left;\n  padding-right: var(--bs-breadcrumb-item-padding-x);\n  color: var(--bs-breadcrumb-divider-color);\n  content: var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */;\n}\n.breadcrumb-item.active {\n  color: var(--bs-breadcrumb-item-active-color);\n}\n\n.pagination {\n  --bs-pagination-padding-x: 0.75rem;\n  --bs-pagination-padding-y: 0.375rem;\n  --bs-pagination-font-size: 1rem;\n  --bs-pagination-color: var(--bs-link-color);\n  --bs-pagination-bg: var(--bs-body-bg);\n  --bs-pagination-border-width: var(--bs-border-width);\n  --bs-pagination-border-color: var(--bs-border-color);\n  --bs-pagination-border-radius: var(--bs-border-radius);\n  --bs-pagination-hover-color: var(--bs-link-hover-color);\n  --bs-pagination-hover-bg: var(--bs-tertiary-bg);\n  --bs-pagination-hover-border-color: var(--bs-border-color);\n  --bs-pagination-focus-color: var(--bs-link-hover-color);\n  --bs-pagination-focus-bg: var(--bs-secondary-bg);\n  --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-pagination-active-color: #fff;\n  --bs-pagination-active-bg: #0d6efd;\n  --bs-pagination-active-border-color: #0d6efd;\n  --bs-pagination-disabled-color: var(--bs-secondary-color);\n  --bs-pagination-disabled-bg: var(--bs-secondary-bg);\n  --bs-pagination-disabled-border-color: var(--bs-border-color);\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);\n  font-size: var(--bs-pagination-font-size);\n  color: var(--bs-pagination-color);\n  text-decoration: none;\n  background-color: var(--bs-pagination-bg);\n  border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-link {\n    transition: none;\n  }\n}\n.page-link:hover {\n  z-index: 2;\n  color: var(--bs-pagination-hover-color);\n  background-color: var(--bs-pagination-hover-bg);\n  border-color: var(--bs-pagination-hover-border-color);\n}\n.page-link:focus {\n  z-index: 3;\n  color: var(--bs-pagination-focus-color);\n  background-color: var(--bs-pagination-focus-bg);\n  outline: 0;\n  box-shadow: var(--bs-pagination-focus-box-shadow);\n}\n.page-link.active, .active > .page-link {\n  z-index: 3;\n  color: var(--bs-pagination-active-color);\n  background-color: var(--bs-pagination-active-bg);\n  border-color: var(--bs-pagination-active-border-color);\n}\n.page-link.disabled, .disabled > .page-link {\n  color: var(--bs-pagination-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-pagination-disabled-bg);\n  border-color: var(--bs-pagination-disabled-border-color);\n}\n\n.page-item:not(:first-child) .page-link {\n  margin-left: calc(var(--bs-border-width) * -1);\n}\n.page-item:first-child .page-link {\n  border-top-left-radius: var(--bs-pagination-border-radius);\n  border-bottom-left-radius: var(--bs-pagination-border-radius);\n}\n.page-item:last-child .page-link {\n  border-top-right-radius: var(--bs-pagination-border-radius);\n  border-bottom-right-radius: var(--bs-pagination-border-radius);\n}\n\n.pagination-lg {\n  --bs-pagination-padding-x: 1.5rem;\n  --bs-pagination-padding-y: 0.75rem;\n  --bs-pagination-font-size: 1.25rem;\n  --bs-pagination-border-radius: var(--bs-border-radius-lg);\n}\n\n.pagination-sm {\n  --bs-pagination-padding-x: 0.5rem;\n  --bs-pagination-padding-y: 0.25rem;\n  --bs-pagination-font-size: 0.875rem;\n  --bs-pagination-border-radius: var(--bs-border-radius-sm);\n}\n\n.badge {\n  --bs-badge-padding-x: 0.65em;\n  --bs-badge-padding-y: 0.35em;\n  --bs-badge-font-size: 0.75em;\n  --bs-badge-font-weight: 700;\n  --bs-badge-color: #fff;\n  --bs-badge-border-radius: var(--bs-border-radius);\n  display: inline-block;\n  padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);\n  font-size: var(--bs-badge-font-size);\n  font-weight: var(--bs-badge-font-weight);\n  line-height: 1;\n  color: var(--bs-badge-color);\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: var(--bs-badge-border-radius);\n}\n.badge:empty {\n  display: none;\n}\n\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n\n.alert {\n  --bs-alert-bg: transparent;\n  --bs-alert-padding-x: 1rem;\n  --bs-alert-padding-y: 1rem;\n  --bs-alert-margin-bottom: 1rem;\n  --bs-alert-color: inherit;\n  --bs-alert-border-color: transparent;\n  --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);\n  --bs-alert-border-radius: var(--bs-border-radius);\n  --bs-alert-link-color: inherit;\n  position: relative;\n  padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);\n  margin-bottom: var(--bs-alert-margin-bottom);\n  color: var(--bs-alert-color);\n  background-color: var(--bs-alert-bg);\n  border: var(--bs-alert-border);\n  border-radius: var(--bs-alert-border-radius);\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: 700;\n  color: var(--bs-alert-link-color);\n}\n\n.alert-dismissible {\n  padding-right: 3rem;\n}\n.alert-dismissible .btn-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  padding: 1.25rem 1rem;\n}\n\n.alert-primary {\n  --bs-alert-color: var(--bs-primary-text-emphasis);\n  --bs-alert-bg: var(--bs-primary-bg-subtle);\n  --bs-alert-border-color: var(--bs-primary-border-subtle);\n  --bs-alert-link-color: var(--bs-primary-text-emphasis);\n}\n\n.alert-secondary {\n  --bs-alert-color: var(--bs-secondary-text-emphasis);\n  --bs-alert-bg: var(--bs-secondary-bg-subtle);\n  --bs-alert-border-color: var(--bs-secondary-border-subtle);\n  --bs-alert-link-color: var(--bs-secondary-text-emphasis);\n}\n\n.alert-success {\n  --bs-alert-color: var(--bs-success-text-emphasis);\n  --bs-alert-bg: var(--bs-success-bg-subtle);\n  --bs-alert-border-color: var(--bs-success-border-subtle);\n  --bs-alert-link-color: var(--bs-success-text-emphasis);\n}\n\n.alert-info {\n  --bs-alert-color: var(--bs-info-text-emphasis);\n  --bs-alert-bg: var(--bs-info-bg-subtle);\n  --bs-alert-border-color: var(--bs-info-border-subtle);\n  --bs-alert-link-color: var(--bs-info-text-emphasis);\n}\n\n.alert-warning {\n  --bs-alert-color: var(--bs-warning-text-emphasis);\n  --bs-alert-bg: var(--bs-warning-bg-subtle);\n  --bs-alert-border-color: var(--bs-warning-border-subtle);\n  --bs-alert-link-color: var(--bs-warning-text-emphasis);\n}\n\n.alert-danger {\n  --bs-alert-color: var(--bs-danger-text-emphasis);\n  --bs-alert-bg: var(--bs-danger-bg-subtle);\n  --bs-alert-border-color: var(--bs-danger-border-subtle);\n  --bs-alert-link-color: var(--bs-danger-text-emphasis);\n}\n\n.alert-light {\n  --bs-alert-color: var(--bs-light-text-emphasis);\n  --bs-alert-bg: var(--bs-light-bg-subtle);\n  --bs-alert-border-color: var(--bs-light-border-subtle);\n  --bs-alert-link-color: var(--bs-light-text-emphasis);\n}\n\n.alert-dark {\n  --bs-alert-color: var(--bs-dark-text-emphasis);\n  --bs-alert-bg: var(--bs-dark-bg-subtle);\n  --bs-alert-border-color: var(--bs-dark-border-subtle);\n  --bs-alert-link-color: var(--bs-dark-text-emphasis);\n}\n\n@keyframes progress-bar-stripes {\n  0% {\n    background-position-x: 1rem;\n  }\n}\n.progress,\n.progress-stacked {\n  --bs-progress-height: 1rem;\n  --bs-progress-font-size: 0.75rem;\n  --bs-progress-bg: var(--bs-secondary-bg);\n  --bs-progress-border-radius: var(--bs-border-radius);\n  --bs-progress-box-shadow: var(--bs-box-shadow-inset);\n  --bs-progress-bar-color: #fff;\n  --bs-progress-bar-bg: #0d6efd;\n  --bs-progress-bar-transition: width 0.6s ease;\n  display: flex;\n  height: var(--bs-progress-height);\n  overflow: hidden;\n  font-size: var(--bs-progress-font-size);\n  background-color: var(--bs-progress-bg);\n  border-radius: var(--bs-progress-border-radius);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: var(--bs-progress-bar-color);\n  text-align: center;\n  white-space: nowrap;\n  background-color: var(--bs-progress-bar-bg);\n  transition: var(--bs-progress-bar-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    transition: none;\n  }\n}\n\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: var(--bs-progress-height) var(--bs-progress-height);\n}\n\n.progress-stacked > .progress {\n  overflow: visible;\n}\n\n.progress-stacked > .progress > .progress-bar {\n  width: 100%;\n}\n\n.progress-bar-animated {\n  animation: 1s linear infinite progress-bar-stripes;\n}\n@media (prefers-reduced-motion: reduce) {\n  .progress-bar-animated {\n    animation: none;\n  }\n}\n\n.list-group {\n  --bs-list-group-color: var(--bs-body-color);\n  --bs-list-group-bg: var(--bs-body-bg);\n  --bs-list-group-border-color: var(--bs-border-color);\n  --bs-list-group-border-width: var(--bs-border-width);\n  --bs-list-group-border-radius: var(--bs-border-radius);\n  --bs-list-group-item-padding-x: 1rem;\n  --bs-list-group-item-padding-y: 0.5rem;\n  --bs-list-group-action-color: var(--bs-secondary-color);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);\n  --bs-list-group-action-active-color: var(--bs-body-color);\n  --bs-list-group-action-active-bg: var(--bs-secondary-bg);\n  --bs-list-group-disabled-color: var(--bs-secondary-color);\n  --bs-list-group-disabled-bg: var(--bs-body-bg);\n  --bs-list-group-active-color: #fff;\n  --bs-list-group-active-bg: #0d6efd;\n  --bs-list-group-active-border-color: #0d6efd;\n  display: flex;\n  flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  border-radius: var(--bs-list-group-border-radius);\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n}\n.list-group-numbered > .list-group-item::before {\n  content: counters(section, \".\") \". \";\n  counter-increment: section;\n}\n\n.list-group-item-action {\n  width: 100%;\n  color: var(--bs-list-group-action-color);\n  text-align: inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  z-index: 1;\n  color: var(--bs-list-group-action-hover-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-action-hover-bg);\n}\n.list-group-item-action:active {\n  color: var(--bs-list-group-action-active-color);\n  background-color: var(--bs-list-group-action-active-bg);\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);\n  color: var(--bs-list-group-color);\n  text-decoration: none;\n  background-color: var(--bs-list-group-bg);\n  border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);\n}\n.list-group-item:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.list-group-item:last-child {\n  border-bottom-right-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color: var(--bs-list-group-disabled-color);\n  pointer-events: none;\n  background-color: var(--bs-list-group-disabled-bg);\n}\n.list-group-item.active {\n  z-index: 2;\n  color: var(--bs-list-group-active-color);\n  background-color: var(--bs-list-group-active-bg);\n  border-color: var(--bs-list-group-active-border-color);\n}\n.list-group-item + .list-group-item {\n  border-top-width: 0;\n}\n.list-group-item + .list-group-item.active {\n  margin-top: calc(-1 * var(--bs-list-group-border-width));\n  border-top-width: var(--bs-list-group-border-width);\n}\n\n.list-group-horizontal {\n  flex-direction: row;\n}\n.list-group-horizontal > .list-group-item:first-child:not(:last-child) {\n  border-bottom-left-radius: var(--bs-list-group-border-radius);\n  border-top-right-radius: 0;\n}\n.list-group-horizontal > .list-group-item:last-child:not(:first-child) {\n  border-top-right-radius: var(--bs-list-group-border-radius);\n  border-bottom-left-radius: 0;\n}\n.list-group-horizontal > .list-group-item.active {\n  margin-top: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item {\n  border-top-width: var(--bs-list-group-border-width);\n  border-left-width: 0;\n}\n.list-group-horizontal > .list-group-item + .list-group-item.active {\n  margin-left: calc(-1 * var(--bs-list-group-border-width));\n  border-left-width: var(--bs-list-group-border-width);\n}\n\n@media (min-width: 576px) {\n  .list-group-horizontal-sm {\n    flex-direction: row;\n  }\n  .list-group-horizontal-sm > .list-group-item:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 768px) {\n  .list-group-horizontal-md {\n    flex-direction: row;\n  }\n  .list-group-horizontal-md > .list-group-item:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-md > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-md > .list-group-item + .list-group-item.active {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 992px) {\n  .list-group-horizontal-lg {\n    flex-direction: row;\n  }\n  .list-group-horizontal-lg > .list-group-item:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 1200px) {\n  .list-group-horizontal-xl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xl > .list-group-item:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n@media (min-width: 1400px) {\n  .list-group-horizontal-xxl {\n    flex-direction: row;\n  }\n  .list-group-horizontal-xxl > .list-group-item:first-child:not(:last-child) {\n    border-bottom-left-radius: var(--bs-list-group-border-radius);\n    border-top-right-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item:last-child:not(:first-child) {\n    border-top-right-radius: var(--bs-list-group-border-radius);\n    border-bottom-left-radius: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item.active {\n    margin-top: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item {\n    border-top-width: var(--bs-list-group-border-width);\n    border-left-width: 0;\n  }\n  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {\n    margin-left: calc(-1 * var(--bs-list-group-border-width));\n    border-left-width: var(--bs-list-group-border-width);\n  }\n}\n.list-group-flush {\n  border-radius: 0;\n}\n.list-group-flush > .list-group-item {\n  border-width: 0 0 var(--bs-list-group-border-width);\n}\n.list-group-flush > .list-group-item:last-child {\n  border-bottom-width: 0;\n}\n\n.list-group-item-primary {\n  --bs-list-group-color: var(--bs-primary-text-emphasis);\n  --bs-list-group-bg: var(--bs-primary-bg-subtle);\n  --bs-list-group-border-color: var(--bs-primary-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);\n  --bs-list-group-active-color: var(--bs-primary-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-primary-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);\n}\n\n.list-group-item-secondary {\n  --bs-list-group-color: var(--bs-secondary-text-emphasis);\n  --bs-list-group-bg: var(--bs-secondary-bg-subtle);\n  --bs-list-group-border-color: var(--bs-secondary-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle);\n  --bs-list-group-active-color: var(--bs-secondary-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-secondary-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis);\n}\n\n.list-group-item-success {\n  --bs-list-group-color: var(--bs-success-text-emphasis);\n  --bs-list-group-bg: var(--bs-success-bg-subtle);\n  --bs-list-group-border-color: var(--bs-success-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-success-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-success-border-subtle);\n  --bs-list-group-active-color: var(--bs-success-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-success-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-success-text-emphasis);\n}\n\n.list-group-item-info {\n  --bs-list-group-color: var(--bs-info-text-emphasis);\n  --bs-list-group-bg: var(--bs-info-bg-subtle);\n  --bs-list-group-border-color: var(--bs-info-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-info-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-info-border-subtle);\n  --bs-list-group-active-color: var(--bs-info-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-info-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-info-text-emphasis);\n}\n\n.list-group-item-warning {\n  --bs-list-group-color: var(--bs-warning-text-emphasis);\n  --bs-list-group-bg: var(--bs-warning-bg-subtle);\n  --bs-list-group-border-color: var(--bs-warning-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-warning-border-subtle);\n  --bs-list-group-active-color: var(--bs-warning-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-warning-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-warning-text-emphasis);\n}\n\n.list-group-item-danger {\n  --bs-list-group-color: var(--bs-danger-text-emphasis);\n  --bs-list-group-bg: var(--bs-danger-bg-subtle);\n  --bs-list-group-border-color: var(--bs-danger-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-danger-border-subtle);\n  --bs-list-group-active-color: var(--bs-danger-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-danger-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-danger-text-emphasis);\n}\n\n.list-group-item-light {\n  --bs-list-group-color: var(--bs-light-text-emphasis);\n  --bs-list-group-bg: var(--bs-light-bg-subtle);\n  --bs-list-group-border-color: var(--bs-light-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-light-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-light-border-subtle);\n  --bs-list-group-active-color: var(--bs-light-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-light-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-light-text-emphasis);\n}\n\n.list-group-item-dark {\n  --bs-list-group-color: var(--bs-dark-text-emphasis);\n  --bs-list-group-bg: var(--bs-dark-bg-subtle);\n  --bs-list-group-border-color: var(--bs-dark-border-subtle);\n  --bs-list-group-action-hover-color: var(--bs-emphasis-color);\n  --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle);\n  --bs-list-group-action-active-color: var(--bs-emphasis-color);\n  --bs-list-group-action-active-bg: var(--bs-dark-border-subtle);\n  --bs-list-group-active-color: var(--bs-dark-bg-subtle);\n  --bs-list-group-active-bg: var(--bs-dark-text-emphasis);\n  --bs-list-group-active-border-color: var(--bs-dark-text-emphasis);\n}\n\n.btn-close {\n  --bs-btn-close-color: #000;\n  --bs-btn-close-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\");\n  --bs-btn-close-opacity: 0.5;\n  --bs-btn-close-hover-opacity: 0.75;\n  --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);\n  --bs-btn-close-focus-opacity: 1;\n  --bs-btn-close-disabled-opacity: 0.25;\n  --bs-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);\n  box-sizing: content-box;\n  width: 1em;\n  height: 1em;\n  padding: 0.25em 0.25em;\n  color: var(--bs-btn-close-color);\n  background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat;\n  border: 0;\n  border-radius: 0.375rem;\n  opacity: var(--bs-btn-close-opacity);\n}\n.btn-close:hover {\n  color: var(--bs-btn-close-color);\n  text-decoration: none;\n  opacity: var(--bs-btn-close-hover-opacity);\n}\n.btn-close:focus {\n  outline: 0;\n  box-shadow: var(--bs-btn-close-focus-shadow);\n  opacity: var(--bs-btn-close-focus-opacity);\n}\n.btn-close:disabled, .btn-close.disabled {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  opacity: var(--bs-btn-close-disabled-opacity);\n}\n\n.btn-close-white {\n  filter: var(--bs-btn-close-white-filter);\n}\n\n[data-bs-theme=dark] .btn-close {\n  filter: var(--bs-btn-close-white-filter);\n}\n\n.toast {\n  --bs-toast-zindex: 1090;\n  --bs-toast-padding-x: 0.75rem;\n  --bs-toast-padding-y: 0.5rem;\n  --bs-toast-spacing: 1.5rem;\n  --bs-toast-max-width: 350px;\n  --bs-toast-font-size: 0.875rem;\n  --bs-toast-color: ;\n  --bs-toast-bg: rgba(var(--bs-body-bg-rgb), 0.85);\n  --bs-toast-border-width: var(--bs-border-width);\n  --bs-toast-border-color: var(--bs-border-color-translucent);\n  --bs-toast-border-radius: var(--bs-border-radius);\n  --bs-toast-box-shadow: var(--bs-box-shadow);\n  --bs-toast-header-color: var(--bs-secondary-color);\n  --bs-toast-header-bg: rgba(var(--bs-body-bg-rgb), 0.85);\n  --bs-toast-header-border-color: var(--bs-border-color-translucent);\n  width: var(--bs-toast-max-width);\n  max-width: 100%;\n  font-size: var(--bs-toast-font-size);\n  color: var(--bs-toast-color);\n  pointer-events: auto;\n  background-color: var(--bs-toast-bg);\n  background-clip: padding-box;\n  border: var(--bs-toast-border-width) solid var(--bs-toast-border-color);\n  box-shadow: var(--bs-toast-box-shadow);\n  border-radius: var(--bs-toast-border-radius);\n}\n.toast.showing {\n  opacity: 0;\n}\n.toast:not(.show) {\n  display: none;\n}\n\n.toast-container {\n  --bs-toast-zindex: 1090;\n  position: absolute;\n  z-index: var(--bs-toast-zindex);\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n}\n.toast-container > :not(:last-child) {\n  margin-bottom: var(--bs-toast-spacing);\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x);\n  color: var(--bs-toast-header-color);\n  background-color: var(--bs-toast-header-bg);\n  background-clip: padding-box;\n  border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);\n  border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));\n  border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));\n}\n.toast-header .btn-close {\n  margin-right: calc(-0.5 * var(--bs-toast-padding-x));\n  margin-left: var(--bs-toast-padding-x);\n}\n\n.toast-body {\n  padding: var(--bs-toast-padding-x);\n  word-wrap: break-word;\n}\n\n.modal {\n  --bs-modal-zindex: 1055;\n  --bs-modal-width: 500px;\n  --bs-modal-padding: 1rem;\n  --bs-modal-margin: 0.5rem;\n  --bs-modal-color: ;\n  --bs-modal-bg: var(--bs-body-bg);\n  --bs-modal-border-color: var(--bs-border-color-translucent);\n  --bs-modal-border-width: var(--bs-border-width);\n  --bs-modal-border-radius: var(--bs-border-radius-lg);\n  --bs-modal-box-shadow: var(--bs-box-shadow-sm);\n  --bs-modal-inner-border-radius: calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));\n  --bs-modal-header-padding-x: 1rem;\n  --bs-modal-header-padding-y: 1rem;\n  --bs-modal-header-padding: 1rem 1rem;\n  --bs-modal-header-border-color: var(--bs-border-color);\n  --bs-modal-header-border-width: var(--bs-border-width);\n  --bs-modal-title-line-height: 1.5;\n  --bs-modal-footer-gap: 0.5rem;\n  --bs-modal-footer-bg: ;\n  --bs-modal-footer-border-color: var(--bs-border-color);\n  --bs-modal-footer-border-width: var(--bs-border-width);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-modal-zindex);\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  outline: 0;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: var(--bs-modal-margin);\n  pointer-events: none;\n}\n.modal.fade .modal-dialog {\n  transition: transform 0.3s ease-out;\n  transform: translate(0, -50px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    transition: none;\n  }\n}\n.modal.show .modal-dialog {\n  transform: none;\n}\n.modal.modal-static .modal-dialog {\n  transform: scale(1.02);\n}\n\n.modal-dialog-scrollable {\n  height: calc(100% - var(--bs-modal-margin) * 2);\n}\n.modal-dialog-scrollable .modal-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n.modal-dialog-scrollable .modal-body {\n  overflow-y: auto;\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: calc(100% - var(--bs-modal-margin) * 2);\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  color: var(--bs-modal-color);\n  pointer-events: auto;\n  background-color: var(--bs-modal-bg);\n  background-clip: padding-box;\n  border: var(--bs-modal-border-width) solid var(--bs-modal-border-color);\n  border-radius: var(--bs-modal-border-radius);\n  outline: 0;\n}\n\n.modal-backdrop {\n  --bs-backdrop-zindex: 1050;\n  --bs-backdrop-bg: #000;\n  --bs-backdrop-opacity: 0.5;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--bs-backdrop-zindex);\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bs-backdrop-bg);\n}\n.modal-backdrop.fade {\n  opacity: 0;\n}\n.modal-backdrop.show {\n  opacity: var(--bs-backdrop-opacity);\n}\n\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-modal-header-padding);\n  border-bottom: var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);\n  border-top-left-radius: var(--bs-modal-inner-border-radius);\n  border-top-right-radius: var(--bs-modal-inner-border-radius);\n}\n.modal-header .btn-close {\n  padding: calc(var(--bs-modal-header-padding-y) * 0.5) calc(var(--bs-modal-header-padding-x) * 0.5);\n  margin: calc(-0.5 * var(--bs-modal-header-padding-y)) calc(-0.5 * var(--bs-modal-header-padding-x)) calc(-0.5 * var(--bs-modal-header-padding-y)) auto;\n}\n\n.modal-title {\n  margin-bottom: 0;\n  line-height: var(--bs-modal-title-line-height);\n}\n\n.modal-body {\n  position: relative;\n  flex: 1 1 auto;\n  padding: var(--bs-modal-padding);\n}\n\n.modal-footer {\n  display: flex;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * 0.5);\n  background-color: var(--bs-modal-footer-bg);\n  border-top: var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);\n  border-bottom-right-radius: var(--bs-modal-inner-border-radius);\n  border-bottom-left-radius: var(--bs-modal-inner-border-radius);\n}\n.modal-footer > * {\n  margin: calc(var(--bs-modal-footer-gap) * 0.5);\n}\n\n@media (min-width: 576px) {\n  .modal {\n    --bs-modal-margin: 1.75rem;\n    --bs-modal-box-shadow: var(--bs-box-shadow);\n  }\n  .modal-dialog {\n    max-width: var(--bs-modal-width);\n    margin-right: auto;\n    margin-left: auto;\n  }\n  .modal-sm {\n    --bs-modal-width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg,\n  .modal-xl {\n    --bs-modal-width: 800px;\n  }\n}\n@media (min-width: 1200px) {\n  .modal-xl {\n    --bs-modal-width: 1140px;\n  }\n}\n.modal-fullscreen {\n  width: 100vw;\n  max-width: none;\n  height: 100%;\n  margin: 0;\n}\n.modal-fullscreen .modal-content {\n  height: 100%;\n  border: 0;\n  border-radius: 0;\n}\n.modal-fullscreen .modal-header,\n.modal-fullscreen .modal-footer {\n  border-radius: 0;\n}\n.modal-fullscreen .modal-body {\n  overflow-y: auto;\n}\n\n@media (max-width: 575.98px) {\n  .modal-fullscreen-sm-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-sm-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-header,\n  .modal-fullscreen-sm-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-sm-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 767.98px) {\n  .modal-fullscreen-md-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-md-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-header,\n  .modal-fullscreen-md-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-md-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 991.98px) {\n  .modal-fullscreen-lg-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-lg-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-header,\n  .modal-fullscreen-lg-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-lg-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1199.98px) {\n  .modal-fullscreen-xl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-header,\n  .modal-fullscreen-xl-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xl-down .modal-body {\n    overflow-y: auto;\n  }\n}\n@media (max-width: 1399.98px) {\n  .modal-fullscreen-xxl-down {\n    width: 100vw;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-content {\n    height: 100%;\n    border: 0;\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-header,\n  .modal-fullscreen-xxl-down .modal-footer {\n    border-radius: 0;\n  }\n  .modal-fullscreen-xxl-down .modal-body {\n    overflow-y: auto;\n  }\n}\n.tooltip {\n  --bs-tooltip-zindex: 1080;\n  --bs-tooltip-max-width: 200px;\n  --bs-tooltip-padding-x: 0.5rem;\n  --bs-tooltip-padding-y: 0.25rem;\n  --bs-tooltip-margin: ;\n  --bs-tooltip-font-size: 0.875rem;\n  --bs-tooltip-color: var(--bs-body-bg);\n  --bs-tooltip-bg: var(--bs-emphasis-color);\n  --bs-tooltip-border-radius: var(--bs-border-radius);\n  --bs-tooltip-opacity: 0.9;\n  --bs-tooltip-arrow-width: 0.8rem;\n  --bs-tooltip-arrow-height: 0.4rem;\n  z-index: var(--bs-tooltip-zindex);\n  display: block;\n  margin: var(--bs-tooltip-margin);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-tooltip-font-size);\n  word-wrap: break-word;\n  opacity: 0;\n}\n.tooltip.show {\n  opacity: var(--bs-tooltip-opacity);\n}\n.tooltip .tooltip-arrow {\n  display: block;\n  width: var(--bs-tooltip-arrow-width);\n  height: var(--bs-tooltip-arrow-height);\n}\n.tooltip .tooltip-arrow::before {\n  position: absolute;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n}\n\n.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {\n  bottom: calc(-1 * var(--bs-tooltip-arrow-height));\n}\n.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {\n  top: -1px;\n  border-width: var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;\n  border-top-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {\n  left: calc(-1 * var(--bs-tooltip-arrow-height));\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {\n  right: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * 0.5) 0;\n  border-right-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:end:ignore */\n.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {\n  top: calc(-1 * var(--bs-tooltip-arrow-height));\n}\n.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {\n  bottom: -1px;\n  border-width: 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);\n  border-bottom-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {\n  right: calc(-1 * var(--bs-tooltip-arrow-height));\n  width: var(--bs-tooltip-arrow-height);\n  height: var(--bs-tooltip-arrow-width);\n}\n.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {\n  left: -1px;\n  border-width: calc(var(--bs-tooltip-arrow-width) * 0.5) 0 calc(var(--bs-tooltip-arrow-width) * 0.5) var(--bs-tooltip-arrow-height);\n  border-left-color: var(--bs-tooltip-bg);\n}\n\n/* rtl:end:ignore */\n.tooltip-inner {\n  max-width: var(--bs-tooltip-max-width);\n  padding: var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);\n  color: var(--bs-tooltip-color);\n  text-align: center;\n  background-color: var(--bs-tooltip-bg);\n  border-radius: var(--bs-tooltip-border-radius);\n}\n\n.popover {\n  --bs-popover-zindex: 1070;\n  --bs-popover-max-width: 276px;\n  --bs-popover-font-size: 0.875rem;\n  --bs-popover-bg: var(--bs-body-bg);\n  --bs-popover-border-width: var(--bs-border-width);\n  --bs-popover-border-color: var(--bs-border-color-translucent);\n  --bs-popover-border-radius: var(--bs-border-radius-lg);\n  --bs-popover-inner-border-radius: calc(var(--bs-border-radius-lg) - var(--bs-border-width));\n  --bs-popover-box-shadow: var(--bs-box-shadow);\n  --bs-popover-header-padding-x: 1rem;\n  --bs-popover-header-padding-y: 0.5rem;\n  --bs-popover-header-font-size: 1rem;\n  --bs-popover-header-color: inherit;\n  --bs-popover-header-bg: var(--bs-secondary-bg);\n  --bs-popover-body-padding-x: 1rem;\n  --bs-popover-body-padding-y: 1rem;\n  --bs-popover-body-color: var(--bs-body-color);\n  --bs-popover-arrow-width: 1rem;\n  --bs-popover-arrow-height: 0.5rem;\n  --bs-popover-arrow-border: var(--bs-popover-border-color);\n  z-index: var(--bs-popover-zindex);\n  display: block;\n  max-width: var(--bs-popover-max-width);\n  font-family: var(--bs-font-sans-serif);\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  white-space: normal;\n  word-spacing: normal;\n  line-break: auto;\n  font-size: var(--bs-popover-font-size);\n  word-wrap: break-word;\n  background-color: var(--bs-popover-bg);\n  background-clip: padding-box;\n  border: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n  border-radius: var(--bs-popover-border-radius);\n}\n.popover .popover-arrow {\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  height: var(--bs-popover-arrow-height);\n}\n.popover .popover-arrow::before, .popover .popover-arrow::after {\n  position: absolute;\n  display: block;\n  content: \"\";\n  border-color: transparent;\n  border-style: solid;\n  border-width: 0;\n}\n\n.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {\n  bottom: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before, .bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  border-width: var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;\n}\n.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {\n  bottom: 0;\n  border-top-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {\n  bottom: var(--bs-popover-border-width);\n  border-top-color: var(--bs-popover-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {\n  left: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before, .bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  border-width: calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * 0.5) 0;\n}\n.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {\n  left: 0;\n  border-right-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {\n  left: var(--bs-popover-border-width);\n  border-right-color: var(--bs-popover-bg);\n}\n\n/* rtl:end:ignore */\n.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {\n  top: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before, .bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  border-width: 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);\n}\n.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {\n  top: 0;\n  border-bottom-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {\n  top: var(--bs-popover-border-width);\n  border-bottom-color: var(--bs-popover-bg);\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: block;\n  width: var(--bs-popover-arrow-width);\n  margin-left: calc(-0.5 * var(--bs-popover-arrow-width));\n  content: \"\";\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-header-bg);\n}\n\n/* rtl:begin:ignore */\n.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {\n  right: calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));\n  width: var(--bs-popover-arrow-height);\n  height: var(--bs-popover-arrow-width);\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before, .bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  border-width: calc(var(--bs-popover-arrow-width) * 0.5) 0 calc(var(--bs-popover-arrow-width) * 0.5) var(--bs-popover-arrow-height);\n}\n.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {\n  right: 0;\n  border-left-color: var(--bs-popover-arrow-border);\n}\n.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {\n  right: var(--bs-popover-border-width);\n  border-left-color: var(--bs-popover-bg);\n}\n\n/* rtl:end:ignore */\n.popover-header {\n  padding: var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);\n  margin-bottom: 0;\n  font-size: var(--bs-popover-header-font-size);\n  color: var(--bs-popover-header-color);\n  background-color: var(--bs-popover-header-bg);\n  border-bottom: var(--bs-popover-border-width) solid var(--bs-popover-border-color);\n  border-top-left-radius: var(--bs-popover-inner-border-radius);\n  border-top-right-radius: var(--bs-popover-inner-border-radius);\n}\n.popover-header:empty {\n  display: none;\n}\n\n.popover-body {\n  padding: var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);\n  color: var(--bs-popover-body-color);\n}\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    transition: none;\n  }\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n.carousel-fade .carousel-item {\n  opacity: 0;\n  transition-property: opacity;\n  transform: none;\n}\n.carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-start,\n.carousel-fade .carousel-item-prev.carousel-item-end {\n  z-index: 1;\n  opacity: 1;\n}\n.carousel-fade .active.carousel-item-start,\n.carousel-fade .active.carousel-item-end {\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0s 0.6s;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-fade .active.carousel-item-start,\n  .carousel-fade .active.carousel-item-end {\n    transition: none;\n  }\n}\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 15%;\n  padding: 0;\n  color: #fff;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: 0.5;\n  transition: opacity 0.15s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-control-prev,\n  .carousel-control-next {\n    transition: none;\n  }\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  opacity: 0.9;\n}\n\n.carousel-control-prev {\n  left: 0;\n}\n\n.carousel-control-next {\n  right: 0;\n}\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  \"autoRename\": true,\n  \"stringMap\":[ {\n    \"name\"    : \"prev-next\",\n    \"search\"  : \"prev\",\n    \"replace\" : \"next\"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\");\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");\n}\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  margin-right: 15%;\n  margin-bottom: 1rem;\n  margin-left: 15%;\n}\n.carousel-indicators [data-bs-target] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 30px;\n  height: 3px;\n  padding: 0;\n  margin-right: 3px;\n  margin-left: 3px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 0;\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  opacity: 0.5;\n  transition: opacity 0.6s ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .carousel-indicators [data-bs-target] {\n    transition: none;\n  }\n}\n.carousel-indicators .active {\n  opacity: 1;\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 1.25rem;\n  left: 15%;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  color: #fff;\n  text-align: center;\n}\n\n.carousel-dark .carousel-control-prev-icon,\n.carousel-dark .carousel-control-next-icon {\n  filter: invert(1) grayscale(100);\n}\n.carousel-dark .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n.carousel-dark .carousel-caption {\n  color: #000;\n}\n\n[data-bs-theme=dark] .carousel .carousel-control-prev-icon,\n[data-bs-theme=dark] .carousel .carousel-control-next-icon, [data-bs-theme=dark].carousel .carousel-control-prev-icon,\n[data-bs-theme=dark].carousel .carousel-control-next-icon {\n  filter: invert(1) grayscale(100);\n}\n[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target], [data-bs-theme=dark].carousel .carousel-indicators [data-bs-target] {\n  background-color: #000;\n}\n[data-bs-theme=dark] .carousel .carousel-caption, [data-bs-theme=dark].carousel .carousel-caption {\n  color: #000;\n}\n\n.spinner-grow,\n.spinner-border {\n  display: inline-block;\n  width: var(--bs-spinner-width);\n  height: var(--bs-spinner-height);\n  vertical-align: var(--bs-spinner-vertical-align);\n  border-radius: 50%;\n  animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);\n}\n\n@keyframes spinner-border {\n  to {\n    transform: rotate(360deg) /* rtl:ignore */;\n  }\n}\n.spinner-border {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-border-width: 0.25em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-border;\n  border: var(--bs-spinner-border-width) solid currentcolor;\n  border-right-color: transparent;\n}\n\n.spinner-border-sm {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n  --bs-spinner-border-width: 0.2em;\n}\n\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n.spinner-grow {\n  --bs-spinner-width: 2rem;\n  --bs-spinner-height: 2rem;\n  --bs-spinner-vertical-align: -0.125em;\n  --bs-spinner-animation-speed: 0.75s;\n  --bs-spinner-animation-name: spinner-grow;\n  background-color: currentcolor;\n  opacity: 0;\n}\n\n.spinner-grow-sm {\n  --bs-spinner-width: 1rem;\n  --bs-spinner-height: 1rem;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .spinner-border,\n  .spinner-grow {\n    --bs-spinner-animation-speed: 1.5s;\n  }\n}\n.offcanvas, .offcanvas-xxl, .offcanvas-xl, .offcanvas-lg, .offcanvas-md, .offcanvas-sm {\n  --bs-offcanvas-zindex: 1045;\n  --bs-offcanvas-width: 400px;\n  --bs-offcanvas-height: 30vh;\n  --bs-offcanvas-padding-x: 1rem;\n  --bs-offcanvas-padding-y: 1rem;\n  --bs-offcanvas-color: var(--bs-body-color);\n  --bs-offcanvas-bg: var(--bs-body-bg);\n  --bs-offcanvas-border-width: var(--bs-border-width);\n  --bs-offcanvas-border-color: var(--bs-border-color-translucent);\n  --bs-offcanvas-box-shadow: var(--bs-box-shadow-sm);\n  --bs-offcanvas-transition: transform 0.3s ease-in-out;\n  --bs-offcanvas-title-line-height: 1.5;\n}\n\n@media (max-width: 575.98px) {\n  .offcanvas-sm {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n  }\n}\n@media (max-width: 575.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-sm {\n    transition: none;\n  }\n}\n@media (max-width: 575.98px) {\n  .offcanvas-sm.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n  .offcanvas-sm.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n  .offcanvas-sm.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n  .offcanvas-sm.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n  .offcanvas-sm.showing, .offcanvas-sm.show:not(.hiding) {\n    transform: none;\n  }\n  .offcanvas-sm.showing, .offcanvas-sm.hiding, .offcanvas-sm.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 576px) {\n  .offcanvas-sm {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-sm .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-sm .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .offcanvas-md {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n  }\n}\n@media (max-width: 767.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-md {\n    transition: none;\n  }\n}\n@media (max-width: 767.98px) {\n  .offcanvas-md.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n  .offcanvas-md.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n  .offcanvas-md.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n  .offcanvas-md.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n  .offcanvas-md.showing, .offcanvas-md.show:not(.hiding) {\n    transform: none;\n  }\n  .offcanvas-md.showing, .offcanvas-md.hiding, .offcanvas-md.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 768px) {\n  .offcanvas-md {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-md .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-md .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .offcanvas-lg {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n  }\n}\n@media (max-width: 991.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-lg {\n    transition: none;\n  }\n}\n@media (max-width: 991.98px) {\n  .offcanvas-lg.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n  .offcanvas-lg.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n  .offcanvas-lg.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n  .offcanvas-lg.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n  .offcanvas-lg.showing, .offcanvas-lg.show:not(.hiding) {\n    transform: none;\n  }\n  .offcanvas-lg.showing, .offcanvas-lg.hiding, .offcanvas-lg.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 992px) {\n  .offcanvas-lg {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-lg .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-lg .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .offcanvas-xl {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n  }\n}\n@media (max-width: 1199.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-xl {\n    transition: none;\n  }\n}\n@media (max-width: 1199.98px) {\n  .offcanvas-xl.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n  .offcanvas-xl.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n  .offcanvas-xl.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n  .offcanvas-xl.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n  .offcanvas-xl.showing, .offcanvas-xl.show:not(.hiding) {\n    transform: none;\n  }\n  .offcanvas-xl.showing, .offcanvas-xl.hiding, .offcanvas-xl.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 1200px) {\n  .offcanvas-xl {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-xl .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-xl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl {\n    position: fixed;\n    bottom: 0;\n    z-index: var(--bs-offcanvas-zindex);\n    display: flex;\n    flex-direction: column;\n    max-width: 100%;\n    color: var(--bs-offcanvas-color);\n    visibility: hidden;\n    background-color: var(--bs-offcanvas-bg);\n    background-clip: padding-box;\n    outline: 0;\n    transition: var(--bs-offcanvas-transition);\n  }\n}\n@media (max-width: 1399.98px) and (prefers-reduced-motion: reduce) {\n  .offcanvas-xxl {\n    transition: none;\n  }\n}\n@media (max-width: 1399.98px) {\n  .offcanvas-xxl.offcanvas-start {\n    top: 0;\n    left: 0;\n    width: var(--bs-offcanvas-width);\n    border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(-100%);\n  }\n  .offcanvas-xxl.offcanvas-end {\n    top: 0;\n    right: 0;\n    width: var(--bs-offcanvas-width);\n    border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateX(100%);\n  }\n  .offcanvas-xxl.offcanvas-top {\n    top: 0;\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(-100%);\n  }\n  .offcanvas-xxl.offcanvas-bottom {\n    right: 0;\n    left: 0;\n    height: var(--bs-offcanvas-height);\n    max-height: 100%;\n    border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n    transform: translateY(100%);\n  }\n  .offcanvas-xxl.showing, .offcanvas-xxl.show:not(.hiding) {\n    transform: none;\n  }\n  .offcanvas-xxl.showing, .offcanvas-xxl.hiding, .offcanvas-xxl.show {\n    visibility: visible;\n  }\n}\n@media (min-width: 1400px) {\n  .offcanvas-xxl {\n    --bs-offcanvas-height: auto;\n    --bs-offcanvas-border-width: 0;\n    background-color: transparent !important;\n  }\n  .offcanvas-xxl .offcanvas-header {\n    display: none;\n  }\n  .offcanvas-xxl .offcanvas-body {\n    display: flex;\n    flex-grow: 0;\n    padding: 0;\n    overflow-y: visible;\n    background-color: transparent !important;\n  }\n}\n\n.offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: var(--bs-offcanvas-zindex);\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  color: var(--bs-offcanvas-color);\n  visibility: hidden;\n  background-color: var(--bs-offcanvas-bg);\n  background-clip: padding-box;\n  outline: 0;\n  transition: var(--bs-offcanvas-transition);\n}\n@media (prefers-reduced-motion: reduce) {\n  .offcanvas {\n    transition: none;\n  }\n}\n.offcanvas.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: var(--bs-offcanvas-width);\n  border-right: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(-100%);\n}\n.offcanvas.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: var(--bs-offcanvas-width);\n  border-left: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateX(100%);\n}\n.offcanvas.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-bottom: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(-100%);\n}\n.offcanvas.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: var(--bs-offcanvas-height);\n  max-height: 100%;\n  border-top: var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);\n  transform: translateY(100%);\n}\n.offcanvas.showing, .offcanvas.show:not(.hiding) {\n  transform: none;\n}\n.offcanvas.showing, .offcanvas.hiding, .offcanvas.show {\n  visibility: visible;\n}\n\n.offcanvas-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n}\n.offcanvas-backdrop.fade {\n  opacity: 0;\n}\n.offcanvas-backdrop.show {\n  opacity: 0.5;\n}\n\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n}\n.offcanvas-header .btn-close {\n  padding: calc(var(--bs-offcanvas-padding-y) * 0.5) calc(var(--bs-offcanvas-padding-x) * 0.5);\n  margin-top: calc(-0.5 * var(--bs-offcanvas-padding-y));\n  margin-right: calc(-0.5 * var(--bs-offcanvas-padding-x));\n  margin-bottom: calc(-0.5 * var(--bs-offcanvas-padding-y));\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: var(--bs-offcanvas-title-line-height);\n}\n\n.offcanvas-body {\n  flex-grow: 1;\n  padding: var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);\n  overflow-y: auto;\n}\n\n.placeholder {\n  display: inline-block;\n  min-height: 1em;\n  vertical-align: middle;\n  cursor: wait;\n  background-color: currentcolor;\n  opacity: 0.5;\n}\n.placeholder.btn::before {\n  display: inline-block;\n  content: \"\";\n}\n\n.placeholder-xs {\n  min-height: 0.6em;\n}\n\n.placeholder-sm {\n  min-height: 0.8em;\n}\n\n.placeholder-lg {\n  min-height: 1.2em;\n}\n\n.placeholder-glow .placeholder {\n  animation: placeholder-glow 2s ease-in-out infinite;\n}\n\n@keyframes placeholder-glow {\n  50% {\n    opacity: 0.2;\n  }\n}\n.placeholder-wave {\n  -webkit-mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  mask-image: linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);\n  -webkit-mask-size: 200% 100%;\n  mask-size: 200% 100%;\n  animation: placeholder-wave 2s linear infinite;\n}\n\n@keyframes placeholder-wave {\n  100% {\n    -webkit-mask-position: -200% 0%;\n    mask-position: -200% 0%;\n  }\n}\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.text-bg-primary {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-primary-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-secondary {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-secondary-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-success {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-success-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-info {\n  color: #000 !important;\n  background-color: RGBA(var(--bs-info-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-warning {\n  color: #000 !important;\n  background-color: RGBA(var(--bs-warning-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-danger {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-danger-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-light {\n  color: #000 !important;\n  background-color: RGBA(var(--bs-light-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.text-bg-dark {\n  color: #fff !important;\n  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important;\n}\n\n.link-primary {\n  color: RGBA(var(--bs-primary-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-primary-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-primary:hover, .link-primary:focus {\n  color: RGBA(10, 88, 202, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(10, 88, 202, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(10, 88, 202, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-secondary {\n  color: RGBA(var(--bs-secondary-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-secondary-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-secondary:hover, .link-secondary:focus {\n  color: RGBA(86, 94, 100, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(86, 94, 100, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(86, 94, 100, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-success {\n  color: RGBA(var(--bs-success-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-success-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-success:hover, .link-success:focus {\n  color: RGBA(20, 108, 67, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(20, 108, 67, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(20, 108, 67, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-info {\n  color: RGBA(var(--bs-info-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-info-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-info:hover, .link-info:focus {\n  color: RGBA(61, 213, 243, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(61, 213, 243, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(61, 213, 243, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-warning {\n  color: RGBA(var(--bs-warning-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-warning-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-warning:hover, .link-warning:focus {\n  color: RGBA(255, 205, 57, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(255, 205, 57, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-danger {\n  color: RGBA(var(--bs-danger-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-danger-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-danger:hover, .link-danger:focus {\n  color: RGBA(176, 42, 55, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(176, 42, 55, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(176, 42, 55, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-light {\n  color: RGBA(var(--bs-light-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-light-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-light:hover, .link-light:focus {\n  color: RGBA(249, 250, 251, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(249, 250, 251, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(249, 250, 251, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-dark {\n  color: RGBA(var(--bs-dark-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-dark-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-dark:hover, .link-dark:focus {\n  color: RGBA(26, 30, 33, var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(26, 30, 33, var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(26, 30, 33, var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-body-emphasis {\n  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 1)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n.link-body-emphasis:hover, .link-body-emphasis:focus {\n  color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-opacity, 0.75)) !important;\n  -webkit-text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;\n  text-decoration-color: RGBA(var(--bs-emphasis-color-rgb), var(--bs-link-underline-opacity, 0.75)) !important;\n}\n\n.focus-ring:focus {\n  outline: 0;\n  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);\n}\n\n.icon-link {\n  display: inline-flex;\n  gap: 0.375rem;\n  align-items: center;\n  -webkit-text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));\n  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 0.5));\n  text-underline-offset: 0.25em;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.icon-link > .bi {\n  flex-shrink: 0;\n  width: 1em;\n  height: 1em;\n  fill: currentcolor;\n  transition: 0.2s ease-in-out transform;\n}\n@media (prefers-reduced-motion: reduce) {\n  .icon-link > .bi {\n    transition: none;\n  }\n}\n\n.icon-link-hover:hover > .bi, .icon-link-hover:focus-visible > .bi {\n  transform: var(--bs-icon-link-transform, translate3d(0.25em, 0, 0));\n}\n\n.ratio {\n  position: relative;\n  width: 100%;\n}\n.ratio::before {\n  display: block;\n  padding-top: var(--bs-aspect-ratio);\n  content: \"\";\n}\n.ratio > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ratio-1x1 {\n  --bs-aspect-ratio: 100%;\n}\n\n.ratio-4x3 {\n  --bs-aspect-ratio: 75%;\n}\n\n.ratio-16x9 {\n  --bs-aspect-ratio: 56.25%;\n}\n\n.ratio-21x9 {\n  --bs-aspect-ratio: 42.8571428571%;\n}\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.sticky-top {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1020;\n}\n\n.sticky-bottom {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 1020;\n}\n\n@media (min-width: 576px) {\n  .sticky-sm-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-sm-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 768px) {\n  .sticky-md-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-md-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 992px) {\n  .sticky-lg-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-lg-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1200px) {\n  .sticky-xl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-xl-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n@media (min-width: 1400px) {\n  .sticky-xxl-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020;\n  }\n  .sticky-xxl-bottom {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 1020;\n  }\n}\n.hstack {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-self: stretch;\n}\n\n.vstack {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  align-self: stretch;\n}\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important;\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n.visually-hidden:not(caption),\n.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) {\n  position: absolute !important;\n}\n\n.stretched-link::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  content: \"\";\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.vr {\n  display: inline-block;\n  align-self: stretch;\n  width: var(--bs-border-width);\n  min-height: 1em;\n  background-color: currentcolor;\n  opacity: 0.25;\n}\n\n.align-baseline {\n  vertical-align: baseline !important;\n}\n\n.align-top {\n  vertical-align: top !important;\n}\n\n.align-middle {\n  vertical-align: middle !important;\n}\n\n.align-bottom {\n  vertical-align: bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align: text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align: text-top !important;\n}\n\n.float-start {\n  float: left !important;\n}\n\n.float-end {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n.object-fit-contain {\n  -o-object-fit: contain !important;\n  object-fit: contain !important;\n}\n\n.object-fit-cover {\n  -o-object-fit: cover !important;\n  object-fit: cover !important;\n}\n\n.object-fit-fill {\n  -o-object-fit: fill !important;\n  object-fit: fill !important;\n}\n\n.object-fit-scale {\n  -o-object-fit: scale-down !important;\n  object-fit: scale-down !important;\n}\n\n.object-fit-none {\n  -o-object-fit: none !important;\n  object-fit: none !important;\n}\n\n.opacity-0 {\n  opacity: 0 !important;\n}\n\n.opacity-25 {\n  opacity: 0.25 !important;\n}\n\n.opacity-50 {\n  opacity: 0.5 !important;\n}\n\n.opacity-75 {\n  opacity: 0.75 !important;\n}\n\n.opacity-100 {\n  opacity: 1 !important;\n}\n\n.overflow-auto {\n  overflow: auto !important;\n}\n\n.overflow-hidden {\n  overflow: hidden !important;\n}\n\n.overflow-visible {\n  overflow: visible !important;\n}\n\n.overflow-scroll {\n  overflow: scroll !important;\n}\n\n.overflow-x-auto {\n  overflow-x: auto !important;\n}\n\n.overflow-x-hidden {\n  overflow-x: hidden !important;\n}\n\n.overflow-x-visible {\n  overflow-x: visible !important;\n}\n\n.overflow-x-scroll {\n  overflow-x: scroll !important;\n}\n\n.overflow-y-auto {\n  overflow-y: auto !important;\n}\n\n.overflow-y-hidden {\n  overflow-y: hidden !important;\n}\n\n.overflow-y-visible {\n  overflow-y: visible !important;\n}\n\n.overflow-y-scroll {\n  overflow-y: scroll !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-grid {\n  display: grid !important;\n}\n\n.d-inline-grid {\n  display: inline-grid !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: inline-flex !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.shadow {\n  box-shadow: var(--bs-box-shadow) !important;\n}\n\n.shadow-sm {\n  box-shadow: var(--bs-box-shadow-sm) !important;\n}\n\n.shadow-lg {\n  box-shadow: var(--bs-box-shadow-lg) !important;\n}\n\n.shadow-none {\n  box-shadow: none !important;\n}\n\n.focus-ring-primary {\n  --bs-focus-ring-color: rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-secondary {\n  --bs-focus-ring-color: rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-success {\n  --bs-focus-ring-color: rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-info {\n  --bs-focus-ring-color: rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-warning {\n  --bs-focus-ring-color: rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-danger {\n  --bs-focus-ring-color: rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-light {\n  --bs-focus-ring-color: rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity));\n}\n\n.focus-ring-dark {\n  --bs-focus-ring-color: rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity));\n}\n\n.position-static {\n  position: static !important;\n}\n\n.position-relative {\n  position: relative !important;\n}\n\n.position-absolute {\n  position: absolute !important;\n}\n\n.position-fixed {\n  position: fixed !important;\n}\n\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n}\n\n.top-0 {\n  top: 0 !important;\n}\n\n.top-50 {\n  top: 50% !important;\n}\n\n.top-100 {\n  top: 100% !important;\n}\n\n.bottom-0 {\n  bottom: 0 !important;\n}\n\n.bottom-50 {\n  bottom: 50% !important;\n}\n\n.bottom-100 {\n  bottom: 100% !important;\n}\n\n.start-0 {\n  left: 0 !important;\n}\n\n.start-50 {\n  left: 50% !important;\n}\n\n.start-100 {\n  left: 100% !important;\n}\n\n.end-0 {\n  right: 0 !important;\n}\n\n.end-50 {\n  right: 50% !important;\n}\n\n.end-100 {\n  right: 100% !important;\n}\n\n.translate-middle {\n  transform: translate(-50%, -50%) !important;\n}\n\n.translate-middle-x {\n  transform: translateX(-50%) !important;\n}\n\n.translate-middle-y {\n  transform: translateY(-50%) !important;\n}\n\n.border {\n  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n\n.border-0 {\n  border: 0 !important;\n}\n\n.border-top {\n  border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n\n.border-top-0 {\n  border-top: 0 !important;\n}\n\n.border-end {\n  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n\n.border-end-0 {\n  border-right: 0 !important;\n}\n\n.border-bottom {\n  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n\n.border-bottom-0 {\n  border-bottom: 0 !important;\n}\n\n.border-start {\n  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;\n}\n\n.border-start-0 {\n  border-left: 0 !important;\n}\n\n.border-primary {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-secondary {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-success {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-info {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-warning {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-danger {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-light {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-dark {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-black {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-black-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-white {\n  --bs-border-opacity: 1;\n  border-color: rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important;\n}\n\n.border-primary-subtle {\n  border-color: var(--bs-primary-border-subtle) !important;\n}\n\n.border-secondary-subtle {\n  border-color: var(--bs-secondary-border-subtle) !important;\n}\n\n.border-success-subtle {\n  border-color: var(--bs-success-border-subtle) !important;\n}\n\n.border-info-subtle {\n  border-color: var(--bs-info-border-subtle) !important;\n}\n\n.border-warning-subtle {\n  border-color: var(--bs-warning-border-subtle) !important;\n}\n\n.border-danger-subtle {\n  border-color: var(--bs-danger-border-subtle) !important;\n}\n\n.border-light-subtle {\n  border-color: var(--bs-light-border-subtle) !important;\n}\n\n.border-dark-subtle {\n  border-color: var(--bs-dark-border-subtle) !important;\n}\n\n.border-1 {\n  border-width: 1px !important;\n}\n\n.border-2 {\n  border-width: 2px !important;\n}\n\n.border-3 {\n  border-width: 3px !important;\n}\n\n.border-4 {\n  border-width: 4px !important;\n}\n\n.border-5 {\n  border-width: 5px !important;\n}\n\n.border-opacity-10 {\n  --bs-border-opacity: 0.1;\n}\n\n.border-opacity-25 {\n  --bs-border-opacity: 0.25;\n}\n\n.border-opacity-50 {\n  --bs-border-opacity: 0.5;\n}\n\n.border-opacity-75 {\n  --bs-border-opacity: 0.75;\n}\n\n.border-opacity-100 {\n  --bs-border-opacity: 1;\n}\n\n.w-25 {\n  width: 25% !important;\n}\n\n.w-50 {\n  width: 50% !important;\n}\n\n.w-75 {\n  width: 75% !important;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.w-auto {\n  width: auto !important;\n}\n\n.mw-100 {\n  max-width: 100% !important;\n}\n\n.vw-100 {\n  width: 100vw !important;\n}\n\n.min-vw-100 {\n  min-width: 100vw !important;\n}\n\n.h-25 {\n  height: 25% !important;\n}\n\n.h-50 {\n  height: 50% !important;\n}\n\n.h-75 {\n  height: 75% !important;\n}\n\n.h-100 {\n  height: 100% !important;\n}\n\n.h-auto {\n  height: auto !important;\n}\n\n.mh-100 {\n  max-height: 100% !important;\n}\n\n.vh-100 {\n  height: 100vh !important;\n}\n\n.min-vh-100 {\n  min-height: 100vh !important;\n}\n\n.flex-fill {\n  flex: 1 1 auto !important;\n}\n\n.flex-row {\n  flex-direction: row !important;\n}\n\n.flex-column {\n  flex-direction: column !important;\n}\n\n.flex-row-reverse {\n  flex-direction: row-reverse !important;\n}\n\n.flex-column-reverse {\n  flex-direction: column-reverse !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1 {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1 {\n  flex-shrink: 1 !important;\n}\n\n.flex-wrap {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n\n.justify-content-start {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center {\n  justify-content: center !important;\n}\n\n.justify-content-between {\n  justify-content: space-between !important;\n}\n\n.justify-content-around {\n  justify-content: space-around !important;\n}\n\n.justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n\n.align-items-start {\n  align-items: flex-start !important;\n}\n\n.align-items-end {\n  align-items: flex-end !important;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.align-items-baseline {\n  align-items: baseline !important;\n}\n\n.align-items-stretch {\n  align-items: stretch !important;\n}\n\n.align-content-start {\n  align-content: flex-start !important;\n}\n\n.align-content-end {\n  align-content: flex-end !important;\n}\n\n.align-content-center {\n  align-content: center !important;\n}\n\n.align-content-between {\n  align-content: space-between !important;\n}\n\n.align-content-around {\n  align-content: space-around !important;\n}\n\n.align-content-stretch {\n  align-content: stretch !important;\n}\n\n.align-self-auto {\n  align-self: auto !important;\n}\n\n.align-self-start {\n  align-self: flex-start !important;\n}\n\n.align-self-end {\n  align-self: flex-end !important;\n}\n\n.align-self-center {\n  align-self: center !important;\n}\n\n.align-self-baseline {\n  align-self: baseline !important;\n}\n\n.align-self-stretch {\n  align-self: stretch !important;\n}\n\n.order-first {\n  order: -1 !important;\n}\n\n.order-0 {\n  order: 0 !important;\n}\n\n.order-1 {\n  order: 1 !important;\n}\n\n.order-2 {\n  order: 2 !important;\n}\n\n.order-3 {\n  order: 3 !important;\n}\n\n.order-4 {\n  order: 4 !important;\n}\n\n.order-5 {\n  order: 5 !important;\n}\n\n.order-last {\n  order: 6 !important;\n}\n\n.m-0 {\n  margin: 0 !important;\n}\n\n.m-1 {\n  margin: 0.25rem !important;\n}\n\n.m-2 {\n  margin: 0.5rem !important;\n}\n\n.m-3 {\n  margin: 1rem !important;\n}\n\n.m-4 {\n  margin: 1.5rem !important;\n}\n\n.m-5 {\n  margin: 3rem !important;\n}\n\n.m-auto {\n  margin: auto !important;\n}\n\n.mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1 {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.mx-2 {\n  margin-right: 0.5rem !important;\n  margin-left: 0.5rem !important;\n}\n\n.mx-3 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.mx-4 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.mx-5 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.mx-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n\n.my-2 {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.my-3 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.my-4 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.my-5 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.my-auto {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.mt-0 {\n  margin-top: 0 !important;\n}\n\n.mt-1 {\n  margin-top: 0.25rem !important;\n}\n\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n\n.mt-3 {\n  margin-top: 1rem !important;\n}\n\n.mt-4 {\n  margin-top: 1.5rem !important;\n}\n\n.mt-5 {\n  margin-top: 3rem !important;\n}\n\n.mt-auto {\n  margin-top: auto !important;\n}\n\n.me-0 {\n  margin-right: 0 !important;\n}\n\n.me-1 {\n  margin-right: 0.25rem !important;\n}\n\n.me-2 {\n  margin-right: 0.5rem !important;\n}\n\n.me-3 {\n  margin-right: 1rem !important;\n}\n\n.me-4 {\n  margin-right: 1.5rem !important;\n}\n\n.me-5 {\n  margin-right: 3rem !important;\n}\n\n.me-auto {\n  margin-right: auto !important;\n}\n\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem !important;\n}\n\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.mb-4 {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-5 {\n  margin-bottom: 3rem !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.ms-0 {\n  margin-left: 0 !important;\n}\n\n.ms-1 {\n  margin-left: 0.25rem !important;\n}\n\n.ms-2 {\n  margin-left: 0.5rem !important;\n}\n\n.ms-3 {\n  margin-left: 1rem !important;\n}\n\n.ms-4 {\n  margin-left: 1.5rem !important;\n}\n\n.ms-5 {\n  margin-left: 3rem !important;\n}\n\n.ms-auto {\n  margin-left: auto !important;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n.p-1 {\n  padding: 0.25rem !important;\n}\n\n.p-2 {\n  padding: 0.5rem !important;\n}\n\n.p-3 {\n  padding: 1rem !important;\n}\n\n.p-4 {\n  padding: 1.5rem !important;\n}\n\n.p-5 {\n  padding: 3rem !important;\n}\n\n.px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1 {\n  padding-right: 0.25rem !important;\n  padding-left: 0.25rem !important;\n}\n\n.px-2 {\n  padding-right: 0.5rem !important;\n  padding-left: 0.5rem !important;\n}\n\n.px-3 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.px-5 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.py-4 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.py-5 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pt-0 {\n  padding-top: 0 !important;\n}\n\n.pt-1 {\n  padding-top: 0.25rem !important;\n}\n\n.pt-2 {\n  padding-top: 0.5rem !important;\n}\n\n.pt-3 {\n  padding-top: 1rem !important;\n}\n\n.pt-4 {\n  padding-top: 1.5rem !important;\n}\n\n.pt-5 {\n  padding-top: 3rem !important;\n}\n\n.pe-0 {\n  padding-right: 0 !important;\n}\n\n.pe-1 {\n  padding-right: 0.25rem !important;\n}\n\n.pe-2 {\n  padding-right: 0.5rem !important;\n}\n\n.pe-3 {\n  padding-right: 1rem !important;\n}\n\n.pe-4 {\n  padding-right: 1.5rem !important;\n}\n\n.pe-5 {\n  padding-right: 3rem !important;\n}\n\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem !important;\n}\n\n.pb-3 {\n  padding-bottom: 1rem !important;\n}\n\n.pb-4 {\n  padding-bottom: 1.5rem !important;\n}\n\n.pb-5 {\n  padding-bottom: 3rem !important;\n}\n\n.ps-0 {\n  padding-left: 0 !important;\n}\n\n.ps-1 {\n  padding-left: 0.25rem !important;\n}\n\n.ps-2 {\n  padding-left: 0.5rem !important;\n}\n\n.ps-3 {\n  padding-left: 1rem !important;\n}\n\n.ps-4 {\n  padding-left: 1.5rem !important;\n}\n\n.ps-5 {\n  padding-left: 3rem !important;\n}\n\n.gap-0 {\n  gap: 0 !important;\n}\n\n.gap-1 {\n  gap: 0.25rem !important;\n}\n\n.gap-2 {\n  gap: 0.5rem !important;\n}\n\n.gap-3 {\n  gap: 1rem !important;\n}\n\n.gap-4 {\n  gap: 1.5rem !important;\n}\n\n.gap-5 {\n  gap: 3rem !important;\n}\n\n.row-gap-0 {\n  row-gap: 0 !important;\n}\n\n.row-gap-1 {\n  row-gap: 0.25rem !important;\n}\n\n.row-gap-2 {\n  row-gap: 0.5rem !important;\n}\n\n.row-gap-3 {\n  row-gap: 1rem !important;\n}\n\n.row-gap-4 {\n  row-gap: 1.5rem !important;\n}\n\n.row-gap-5 {\n  row-gap: 3rem !important;\n}\n\n.column-gap-0 {\n  -moz-column-gap: 0 !important;\n  column-gap: 0 !important;\n}\n\n.column-gap-1 {\n  -moz-column-gap: 0.25rem !important;\n  column-gap: 0.25rem !important;\n}\n\n.column-gap-2 {\n  -moz-column-gap: 0.5rem !important;\n  column-gap: 0.5rem !important;\n}\n\n.column-gap-3 {\n  -moz-column-gap: 1rem !important;\n  column-gap: 1rem !important;\n}\n\n.column-gap-4 {\n  -moz-column-gap: 1.5rem !important;\n  column-gap: 1.5rem !important;\n}\n\n.column-gap-5 {\n  -moz-column-gap: 3rem !important;\n  column-gap: 3rem !important;\n}\n\n.font-monospace {\n  font-family: var(--bs-font-monospace) !important;\n}\n\n.fs-1 {\n  font-size: calc(1.375rem + 1.5vw) !important;\n}\n\n.fs-2 {\n  font-size: calc(1.325rem + 0.9vw) !important;\n}\n\n.fs-3 {\n  font-size: calc(1.3rem + 0.6vw) !important;\n}\n\n.fs-4 {\n  font-size: calc(1.275rem + 0.3vw) !important;\n}\n\n.fs-5 {\n  font-size: 1.25rem !important;\n}\n\n.fs-6 {\n  font-size: 1rem !important;\n}\n\n.fst-italic {\n  font-style: italic !important;\n}\n\n.fst-normal {\n  font-style: normal !important;\n}\n\n.fw-lighter {\n  font-weight: lighter !important;\n}\n\n.fw-light {\n  font-weight: 300 !important;\n}\n\n.fw-normal {\n  font-weight: 400 !important;\n}\n\n.fw-medium {\n  font-weight: 500 !important;\n}\n\n.fw-semibold {\n  font-weight: 600 !important;\n}\n\n.fw-bold {\n  font-weight: 700 !important;\n}\n\n.fw-bolder {\n  font-weight: bolder !important;\n}\n\n.lh-1 {\n  line-height: 1 !important;\n}\n\n.lh-sm {\n  line-height: 1.25 !important;\n}\n\n.lh-base {\n  line-height: 1.5 !important;\n}\n\n.lh-lg {\n  line-height: 2 !important;\n}\n\n.text-start {\n  text-align: left !important;\n}\n\n.text-end {\n  text-align: right !important;\n}\n\n.text-center {\n  text-align: center !important;\n}\n\n.text-decoration-none {\n  text-decoration: none !important;\n}\n\n.text-decoration-underline {\n  text-decoration: underline !important;\n}\n\n.text-decoration-line-through {\n  text-decoration: line-through !important;\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.text-wrap {\n  white-space: normal !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n/* rtl:begin:remove */\n.text-break {\n  word-wrap: break-word !important;\n  word-break: break-word !important;\n}\n\n/* rtl:end:remove */\n.text-primary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-secondary {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-success {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-info {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-warning {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-danger {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-light {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-dark {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-black {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-white {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-body {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-muted {\n  --bs-text-opacity: 1;\n  color: var(--bs-secondary-color) !important;\n}\n\n.text-black-50 {\n  --bs-text-opacity: 1;\n  color: rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  --bs-text-opacity: 1;\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-body-secondary {\n  --bs-text-opacity: 1;\n  color: var(--bs-secondary-color) !important;\n}\n\n.text-body-tertiary {\n  --bs-text-opacity: 1;\n  color: var(--bs-tertiary-color) !important;\n}\n\n.text-body-emphasis {\n  --bs-text-opacity: 1;\n  color: var(--bs-emphasis-color) !important;\n}\n\n.text-reset {\n  --bs-text-opacity: 1;\n  color: inherit !important;\n}\n\n.text-opacity-25 {\n  --bs-text-opacity: 0.25;\n}\n\n.text-opacity-50 {\n  --bs-text-opacity: 0.5;\n}\n\n.text-opacity-75 {\n  --bs-text-opacity: 0.75;\n}\n\n.text-opacity-100 {\n  --bs-text-opacity: 1;\n}\n\n.text-primary-emphasis {\n  color: var(--bs-primary-text-emphasis) !important;\n}\n\n.text-secondary-emphasis {\n  color: var(--bs-secondary-text-emphasis) !important;\n}\n\n.text-success-emphasis {\n  color: var(--bs-success-text-emphasis) !important;\n}\n\n.text-info-emphasis {\n  color: var(--bs-info-text-emphasis) !important;\n}\n\n.text-warning-emphasis {\n  color: var(--bs-warning-text-emphasis) !important;\n}\n\n.text-danger-emphasis {\n  color: var(--bs-danger-text-emphasis) !important;\n}\n\n.text-light-emphasis {\n  color: var(--bs-light-text-emphasis) !important;\n}\n\n.text-dark-emphasis {\n  color: var(--bs-dark-text-emphasis) !important;\n}\n\n.link-opacity-10 {\n  --bs-link-opacity: 0.1;\n}\n\n.link-opacity-10-hover:hover {\n  --bs-link-opacity: 0.1;\n}\n\n.link-opacity-25 {\n  --bs-link-opacity: 0.25;\n}\n\n.link-opacity-25-hover:hover {\n  --bs-link-opacity: 0.25;\n}\n\n.link-opacity-50 {\n  --bs-link-opacity: 0.5;\n}\n\n.link-opacity-50-hover:hover {\n  --bs-link-opacity: 0.5;\n}\n\n.link-opacity-75 {\n  --bs-link-opacity: 0.75;\n}\n\n.link-opacity-75-hover:hover {\n  --bs-link-opacity: 0.75;\n}\n\n.link-opacity-100 {\n  --bs-link-opacity: 1;\n}\n\n.link-opacity-100-hover:hover {\n  --bs-link-opacity: 1;\n}\n\n.link-offset-1 {\n  text-underline-offset: 0.125em !important;\n}\n\n.link-offset-1-hover:hover {\n  text-underline-offset: 0.125em !important;\n}\n\n.link-offset-2 {\n  text-underline-offset: 0.25em !important;\n}\n\n.link-offset-2-hover:hover {\n  text-underline-offset: 0.25em !important;\n}\n\n.link-offset-3 {\n  text-underline-offset: 0.375em !important;\n}\n\n.link-offset-3-hover:hover {\n  text-underline-offset: 0.375em !important;\n}\n\n.link-underline-primary {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-primary-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-secondary {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-secondary-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-success {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-success-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-info {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-info-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-warning {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-warning-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-danger {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-danger-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-light {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-light-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline-dark {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;\n  text-decoration-color: rgba(var(--bs-dark-rgb), var(--bs-link-underline-opacity)) !important;\n}\n\n.link-underline {\n  --bs-link-underline-opacity: 1;\n  -webkit-text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;\n  text-decoration-color: rgba(var(--bs-link-color-rgb), var(--bs-link-underline-opacity, 1)) !important;\n}\n\n.link-underline-opacity-0 {\n  --bs-link-underline-opacity: 0;\n}\n\n.link-underline-opacity-0-hover:hover {\n  --bs-link-underline-opacity: 0;\n}\n\n.link-underline-opacity-10 {\n  --bs-link-underline-opacity: 0.1;\n}\n\n.link-underline-opacity-10-hover:hover {\n  --bs-link-underline-opacity: 0.1;\n}\n\n.link-underline-opacity-25 {\n  --bs-link-underline-opacity: 0.25;\n}\n\n.link-underline-opacity-25-hover:hover {\n  --bs-link-underline-opacity: 0.25;\n}\n\n.link-underline-opacity-50 {\n  --bs-link-underline-opacity: 0.5;\n}\n\n.link-underline-opacity-50-hover:hover {\n  --bs-link-underline-opacity: 0.5;\n}\n\n.link-underline-opacity-75 {\n  --bs-link-underline-opacity: 0.75;\n}\n\n.link-underline-opacity-75-hover:hover {\n  --bs-link-underline-opacity: 0.75;\n}\n\n.link-underline-opacity-100 {\n  --bs-link-underline-opacity: 1;\n}\n\n.link-underline-opacity-100-hover:hover {\n  --bs-link-underline-opacity: 1;\n}\n\n.bg-primary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-secondary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-success {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-info {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-warning {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-danger {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-light {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-dark {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-black {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-white {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-body {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-transparent {\n  --bs-bg-opacity: 1;\n  background-color: transparent !important;\n}\n\n.bg-body-secondary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-secondary-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-body-tertiary {\n  --bs-bg-opacity: 1;\n  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;\n}\n\n.bg-opacity-10 {\n  --bs-bg-opacity: 0.1;\n}\n\n.bg-opacity-25 {\n  --bs-bg-opacity: 0.25;\n}\n\n.bg-opacity-50 {\n  --bs-bg-opacity: 0.5;\n}\n\n.bg-opacity-75 {\n  --bs-bg-opacity: 0.75;\n}\n\n.bg-opacity-100 {\n  --bs-bg-opacity: 1;\n}\n\n.bg-primary-subtle {\n  background-color: var(--bs-primary-bg-subtle) !important;\n}\n\n.bg-secondary-subtle {\n  background-color: var(--bs-secondary-bg-subtle) !important;\n}\n\n.bg-success-subtle {\n  background-color: var(--bs-success-bg-subtle) !important;\n}\n\n.bg-info-subtle {\n  background-color: var(--bs-info-bg-subtle) !important;\n}\n\n.bg-warning-subtle {\n  background-color: var(--bs-warning-bg-subtle) !important;\n}\n\n.bg-danger-subtle {\n  background-color: var(--bs-danger-bg-subtle) !important;\n}\n\n.bg-light-subtle {\n  background-color: var(--bs-light-bg-subtle) !important;\n}\n\n.bg-dark-subtle {\n  background-color: var(--bs-dark-bg-subtle) !important;\n}\n\n.bg-gradient {\n  background-image: var(--bs-gradient) !important;\n}\n\n.user-select-all {\n  -webkit-user-select: all !important;\n  -moz-user-select: all !important;\n  user-select: all !important;\n}\n\n.user-select-auto {\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  user-select: auto !important;\n}\n\n.user-select-none {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  user-select: none !important;\n}\n\n.pe-none {\n  pointer-events: none !important;\n}\n\n.pe-auto {\n  pointer-events: auto !important;\n}\n\n.rounded {\n  border-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-0 {\n  border-radius: 0 !important;\n}\n\n.rounded-1 {\n  border-radius: var(--bs-border-radius-sm) !important;\n}\n\n.rounded-2 {\n  border-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-3 {\n  border-radius: var(--bs-border-radius-lg) !important;\n}\n\n.rounded-4 {\n  border-radius: var(--bs-border-radius-xl) !important;\n}\n\n.rounded-5 {\n  border-radius: var(--bs-border-radius-xxl) !important;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.rounded-pill {\n  border-radius: var(--bs-border-radius-pill) !important;\n}\n\n.rounded-top {\n  border-top-left-radius: var(--bs-border-radius) !important;\n  border-top-right-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-top-0 {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n}\n\n.rounded-top-1 {\n  border-top-left-radius: var(--bs-border-radius-sm) !important;\n  border-top-right-radius: var(--bs-border-radius-sm) !important;\n}\n\n.rounded-top-2 {\n  border-top-left-radius: var(--bs-border-radius) !important;\n  border-top-right-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-top-3 {\n  border-top-left-radius: var(--bs-border-radius-lg) !important;\n  border-top-right-radius: var(--bs-border-radius-lg) !important;\n}\n\n.rounded-top-4 {\n  border-top-left-radius: var(--bs-border-radius-xl) !important;\n  border-top-right-radius: var(--bs-border-radius-xl) !important;\n}\n\n.rounded-top-5 {\n  border-top-left-radius: var(--bs-border-radius-xxl) !important;\n  border-top-right-radius: var(--bs-border-radius-xxl) !important;\n}\n\n.rounded-top-circle {\n  border-top-left-radius: 50% !important;\n  border-top-right-radius: 50% !important;\n}\n\n.rounded-top-pill {\n  border-top-left-radius: var(--bs-border-radius-pill) !important;\n  border-top-right-radius: var(--bs-border-radius-pill) !important;\n}\n\n.rounded-end {\n  border-top-right-radius: var(--bs-border-radius) !important;\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-end-0 {\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.rounded-end-1 {\n  border-top-right-radius: var(--bs-border-radius-sm) !important;\n  border-bottom-right-radius: var(--bs-border-radius-sm) !important;\n}\n\n.rounded-end-2 {\n  border-top-right-radius: var(--bs-border-radius) !important;\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-end-3 {\n  border-top-right-radius: var(--bs-border-radius-lg) !important;\n  border-bottom-right-radius: var(--bs-border-radius-lg) !important;\n}\n\n.rounded-end-4 {\n  border-top-right-radius: var(--bs-border-radius-xl) !important;\n  border-bottom-right-radius: var(--bs-border-radius-xl) !important;\n}\n\n.rounded-end-5 {\n  border-top-right-radius: var(--bs-border-radius-xxl) !important;\n  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;\n}\n\n.rounded-end-circle {\n  border-top-right-radius: 50% !important;\n  border-bottom-right-radius: 50% !important;\n}\n\n.rounded-end-pill {\n  border-top-right-radius: var(--bs-border-radius-pill) !important;\n  border-bottom-right-radius: var(--bs-border-radius-pill) !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-bottom-0 {\n  border-bottom-right-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n}\n\n.rounded-bottom-1 {\n  border-bottom-right-radius: var(--bs-border-radius-sm) !important;\n  border-bottom-left-radius: var(--bs-border-radius-sm) !important;\n}\n\n.rounded-bottom-2 {\n  border-bottom-right-radius: var(--bs-border-radius) !important;\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-bottom-3 {\n  border-bottom-right-radius: var(--bs-border-radius-lg) !important;\n  border-bottom-left-radius: var(--bs-border-radius-lg) !important;\n}\n\n.rounded-bottom-4 {\n  border-bottom-right-radius: var(--bs-border-radius-xl) !important;\n  border-bottom-left-radius: var(--bs-border-radius-xl) !important;\n}\n\n.rounded-bottom-5 {\n  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;\n  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;\n}\n\n.rounded-bottom-circle {\n  border-bottom-right-radius: 50% !important;\n  border-bottom-left-radius: 50% !important;\n}\n\n.rounded-bottom-pill {\n  border-bottom-right-radius: var(--bs-border-radius-pill) !important;\n  border-bottom-left-radius: var(--bs-border-radius-pill) !important;\n}\n\n.rounded-start {\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n  border-top-left-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-start-0 {\n  border-bottom-left-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n}\n\n.rounded-start-1 {\n  border-bottom-left-radius: var(--bs-border-radius-sm) !important;\n  border-top-left-radius: var(--bs-border-radius-sm) !important;\n}\n\n.rounded-start-2 {\n  border-bottom-left-radius: var(--bs-border-radius) !important;\n  border-top-left-radius: var(--bs-border-radius) !important;\n}\n\n.rounded-start-3 {\n  border-bottom-left-radius: var(--bs-border-radius-lg) !important;\n  border-top-left-radius: var(--bs-border-radius-lg) !important;\n}\n\n.rounded-start-4 {\n  border-bottom-left-radius: var(--bs-border-radius-xl) !important;\n  border-top-left-radius: var(--bs-border-radius-xl) !important;\n}\n\n.rounded-start-5 {\n  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;\n  border-top-left-radius: var(--bs-border-radius-xxl) !important;\n}\n\n.rounded-start-circle {\n  border-bottom-left-radius: 50% !important;\n  border-top-left-radius: 50% !important;\n}\n\n.rounded-start-pill {\n  border-bottom-left-radius: var(--bs-border-radius-pill) !important;\n  border-top-left-radius: var(--bs-border-radius-pill) !important;\n}\n\n.visible {\n  visibility: visible !important;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n.z-n1 {\n  z-index: -1 !important;\n}\n\n.z-0 {\n  z-index: 0 !important;\n}\n\n.z-1 {\n  z-index: 1 !important;\n}\n\n.z-2 {\n  z-index: 2 !important;\n}\n\n.z-3 {\n  z-index: 3 !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-start {\n    float: left !important;\n  }\n  .float-sm-end {\n    float: right !important;\n  }\n  .float-sm-none {\n    float: none !important;\n  }\n  .object-fit-sm-contain {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n  .object-fit-sm-cover {\n    -o-object-fit: cover !important;\n    object-fit: cover !important;\n  }\n  .object-fit-sm-fill {\n    -o-object-fit: fill !important;\n    object-fit: fill !important;\n  }\n  .object-fit-sm-scale {\n    -o-object-fit: scale-down !important;\n    object-fit: scale-down !important;\n  }\n  .object-fit-sm-none {\n    -o-object-fit: none !important;\n    object-fit: none !important;\n  }\n  .d-sm-inline {\n    display: inline !important;\n  }\n  .d-sm-inline-block {\n    display: inline-block !important;\n  }\n  .d-sm-block {\n    display: block !important;\n  }\n  .d-sm-grid {\n    display: grid !important;\n  }\n  .d-sm-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-sm-table {\n    display: table !important;\n  }\n  .d-sm-table-row {\n    display: table-row !important;\n  }\n  .d-sm-table-cell {\n    display: table-cell !important;\n  }\n  .d-sm-flex {\n    display: flex !important;\n  }\n  .d-sm-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-sm-none {\n    display: none !important;\n  }\n  .flex-sm-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-sm-row {\n    flex-direction: row !important;\n  }\n  .flex-sm-column {\n    flex-direction: column !important;\n  }\n  .flex-sm-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-sm-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-sm-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-sm-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-sm-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-sm-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-sm-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-sm-center {\n    justify-content: center !important;\n  }\n  .justify-content-sm-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-sm-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-sm-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-sm-start {\n    align-items: flex-start !important;\n  }\n  .align-items-sm-end {\n    align-items: flex-end !important;\n  }\n  .align-items-sm-center {\n    align-items: center !important;\n  }\n  .align-items-sm-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-sm-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-sm-start {\n    align-content: flex-start !important;\n  }\n  .align-content-sm-end {\n    align-content: flex-end !important;\n  }\n  .align-content-sm-center {\n    align-content: center !important;\n  }\n  .align-content-sm-between {\n    align-content: space-between !important;\n  }\n  .align-content-sm-around {\n    align-content: space-around !important;\n  }\n  .align-content-sm-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-sm-auto {\n    align-self: auto !important;\n  }\n  .align-self-sm-start {\n    align-self: flex-start !important;\n  }\n  .align-self-sm-end {\n    align-self: flex-end !important;\n  }\n  .align-self-sm-center {\n    align-self: center !important;\n  }\n  .align-self-sm-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-sm-stretch {\n    align-self: stretch !important;\n  }\n  .order-sm-first {\n    order: -1 !important;\n  }\n  .order-sm-0 {\n    order: 0 !important;\n  }\n  .order-sm-1 {\n    order: 1 !important;\n  }\n  .order-sm-2 {\n    order: 2 !important;\n  }\n  .order-sm-3 {\n    order: 3 !important;\n  }\n  .order-sm-4 {\n    order: 4 !important;\n  }\n  .order-sm-5 {\n    order: 5 !important;\n  }\n  .order-sm-last {\n    order: 6 !important;\n  }\n  .m-sm-0 {\n    margin: 0 !important;\n  }\n  .m-sm-1 {\n    margin: 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin: 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin: 1rem !important;\n  }\n  .m-sm-4 {\n    margin: 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin: 3rem !important;\n  }\n  .m-sm-auto {\n    margin: auto !important;\n  }\n  .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-sm-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-sm-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-sm-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-sm-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-sm-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-sm-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-sm-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-sm-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-sm-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-sm-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-sm-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-sm-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-sm-0 {\n    margin-top: 0 !important;\n  }\n  .mt-sm-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-sm-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-sm-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-sm-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-sm-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-sm-auto {\n    margin-top: auto !important;\n  }\n  .me-sm-0 {\n    margin-right: 0 !important;\n  }\n  .me-sm-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-sm-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-sm-3 {\n    margin-right: 1rem !important;\n  }\n  .me-sm-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-sm-5 {\n    margin-right: 3rem !important;\n  }\n  .me-sm-auto {\n    margin-right: auto !important;\n  }\n  .mb-sm-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-sm-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-sm-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-sm-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-sm-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-sm-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-sm-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-sm-0 {\n    margin-left: 0 !important;\n  }\n  .ms-sm-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-sm-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-sm-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-sm-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-sm-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-sm-auto {\n    margin-left: auto !important;\n  }\n  .p-sm-0 {\n    padding: 0 !important;\n  }\n  .p-sm-1 {\n    padding: 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding: 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding: 1rem !important;\n  }\n  .p-sm-4 {\n    padding: 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding: 3rem !important;\n  }\n  .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-sm-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-sm-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-sm-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-sm-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-sm-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-sm-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-sm-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-sm-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-sm-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-sm-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-sm-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-sm-0 {\n    padding-top: 0 !important;\n  }\n  .pt-sm-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-sm-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-sm-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-sm-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-sm-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-sm-0 {\n    padding-right: 0 !important;\n  }\n  .pe-sm-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-sm-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-sm-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-sm-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-sm-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-sm-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-sm-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-sm-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-sm-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-sm-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-sm-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-sm-0 {\n    padding-left: 0 !important;\n  }\n  .ps-sm-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-sm-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-sm-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-sm-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-sm-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-sm-0 {\n    gap: 0 !important;\n  }\n  .gap-sm-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-sm-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-sm-3 {\n    gap: 1rem !important;\n  }\n  .gap-sm-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-sm-5 {\n    gap: 3rem !important;\n  }\n  .row-gap-sm-0 {\n    row-gap: 0 !important;\n  }\n  .row-gap-sm-1 {\n    row-gap: 0.25rem !important;\n  }\n  .row-gap-sm-2 {\n    row-gap: 0.5rem !important;\n  }\n  .row-gap-sm-3 {\n    row-gap: 1rem !important;\n  }\n  .row-gap-sm-4 {\n    row-gap: 1.5rem !important;\n  }\n  .row-gap-sm-5 {\n    row-gap: 3rem !important;\n  }\n  .column-gap-sm-0 {\n    -moz-column-gap: 0 !important;\n    column-gap: 0 !important;\n  }\n  .column-gap-sm-1 {\n    -moz-column-gap: 0.25rem !important;\n    column-gap: 0.25rem !important;\n  }\n  .column-gap-sm-2 {\n    -moz-column-gap: 0.5rem !important;\n    column-gap: 0.5rem !important;\n  }\n  .column-gap-sm-3 {\n    -moz-column-gap: 1rem !important;\n    column-gap: 1rem !important;\n  }\n  .column-gap-sm-4 {\n    -moz-column-gap: 1.5rem !important;\n    column-gap: 1.5rem !important;\n  }\n  .column-gap-sm-5 {\n    -moz-column-gap: 3rem !important;\n    column-gap: 3rem !important;\n  }\n  .text-sm-start {\n    text-align: left !important;\n  }\n  .text-sm-end {\n    text-align: right !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 768px) {\n  .float-md-start {\n    float: left !important;\n  }\n  .float-md-end {\n    float: right !important;\n  }\n  .float-md-none {\n    float: none !important;\n  }\n  .object-fit-md-contain {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n  .object-fit-md-cover {\n    -o-object-fit: cover !important;\n    object-fit: cover !important;\n  }\n  .object-fit-md-fill {\n    -o-object-fit: fill !important;\n    object-fit: fill !important;\n  }\n  .object-fit-md-scale {\n    -o-object-fit: scale-down !important;\n    object-fit: scale-down !important;\n  }\n  .object-fit-md-none {\n    -o-object-fit: none !important;\n    object-fit: none !important;\n  }\n  .d-md-inline {\n    display: inline !important;\n  }\n  .d-md-inline-block {\n    display: inline-block !important;\n  }\n  .d-md-block {\n    display: block !important;\n  }\n  .d-md-grid {\n    display: grid !important;\n  }\n  .d-md-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-md-table {\n    display: table !important;\n  }\n  .d-md-table-row {\n    display: table-row !important;\n  }\n  .d-md-table-cell {\n    display: table-cell !important;\n  }\n  .d-md-flex {\n    display: flex !important;\n  }\n  .d-md-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-md-none {\n    display: none !important;\n  }\n  .flex-md-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-md-row {\n    flex-direction: row !important;\n  }\n  .flex-md-column {\n    flex-direction: column !important;\n  }\n  .flex-md-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-md-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-md-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-md-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-md-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-md-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-md-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-md-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-md-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-md-center {\n    justify-content: center !important;\n  }\n  .justify-content-md-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-md-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-md-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-md-start {\n    align-items: flex-start !important;\n  }\n  .align-items-md-end {\n    align-items: flex-end !important;\n  }\n  .align-items-md-center {\n    align-items: center !important;\n  }\n  .align-items-md-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-md-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-md-start {\n    align-content: flex-start !important;\n  }\n  .align-content-md-end {\n    align-content: flex-end !important;\n  }\n  .align-content-md-center {\n    align-content: center !important;\n  }\n  .align-content-md-between {\n    align-content: space-between !important;\n  }\n  .align-content-md-around {\n    align-content: space-around !important;\n  }\n  .align-content-md-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-md-auto {\n    align-self: auto !important;\n  }\n  .align-self-md-start {\n    align-self: flex-start !important;\n  }\n  .align-self-md-end {\n    align-self: flex-end !important;\n  }\n  .align-self-md-center {\n    align-self: center !important;\n  }\n  .align-self-md-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-md-stretch {\n    align-self: stretch !important;\n  }\n  .order-md-first {\n    order: -1 !important;\n  }\n  .order-md-0 {\n    order: 0 !important;\n  }\n  .order-md-1 {\n    order: 1 !important;\n  }\n  .order-md-2 {\n    order: 2 !important;\n  }\n  .order-md-3 {\n    order: 3 !important;\n  }\n  .order-md-4 {\n    order: 4 !important;\n  }\n  .order-md-5 {\n    order: 5 !important;\n  }\n  .order-md-last {\n    order: 6 !important;\n  }\n  .m-md-0 {\n    margin: 0 !important;\n  }\n  .m-md-1 {\n    margin: 0.25rem !important;\n  }\n  .m-md-2 {\n    margin: 0.5rem !important;\n  }\n  .m-md-3 {\n    margin: 1rem !important;\n  }\n  .m-md-4 {\n    margin: 1.5rem !important;\n  }\n  .m-md-5 {\n    margin: 3rem !important;\n  }\n  .m-md-auto {\n    margin: auto !important;\n  }\n  .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-md-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-md-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-md-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-md-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-md-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-md-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-md-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-md-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-md-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-md-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-md-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-md-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-md-0 {\n    margin-top: 0 !important;\n  }\n  .mt-md-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-md-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-md-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-md-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-md-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-md-auto {\n    margin-top: auto !important;\n  }\n  .me-md-0 {\n    margin-right: 0 !important;\n  }\n  .me-md-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-md-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-md-3 {\n    margin-right: 1rem !important;\n  }\n  .me-md-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-md-5 {\n    margin-right: 3rem !important;\n  }\n  .me-md-auto {\n    margin-right: auto !important;\n  }\n  .mb-md-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-md-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-md-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-md-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-md-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-md-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-md-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-md-0 {\n    margin-left: 0 !important;\n  }\n  .ms-md-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-md-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-md-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-md-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-md-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-md-auto {\n    margin-left: auto !important;\n  }\n  .p-md-0 {\n    padding: 0 !important;\n  }\n  .p-md-1 {\n    padding: 0.25rem !important;\n  }\n  .p-md-2 {\n    padding: 0.5rem !important;\n  }\n  .p-md-3 {\n    padding: 1rem !important;\n  }\n  .p-md-4 {\n    padding: 1.5rem !important;\n  }\n  .p-md-5 {\n    padding: 3rem !important;\n  }\n  .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-md-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-md-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-md-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-md-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-md-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-md-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-md-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-md-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-md-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-md-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-md-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-md-0 {\n    padding-top: 0 !important;\n  }\n  .pt-md-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-md-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-md-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-md-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-md-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-md-0 {\n    padding-right: 0 !important;\n  }\n  .pe-md-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-md-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-md-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-md-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-md-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-md-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-md-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-md-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-md-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-md-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-md-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-md-0 {\n    padding-left: 0 !important;\n  }\n  .ps-md-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-md-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-md-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-md-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-md-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-md-0 {\n    gap: 0 !important;\n  }\n  .gap-md-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-md-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-md-3 {\n    gap: 1rem !important;\n  }\n  .gap-md-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-md-5 {\n    gap: 3rem !important;\n  }\n  .row-gap-md-0 {\n    row-gap: 0 !important;\n  }\n  .row-gap-md-1 {\n    row-gap: 0.25rem !important;\n  }\n  .row-gap-md-2 {\n    row-gap: 0.5rem !important;\n  }\n  .row-gap-md-3 {\n    row-gap: 1rem !important;\n  }\n  .row-gap-md-4 {\n    row-gap: 1.5rem !important;\n  }\n  .row-gap-md-5 {\n    row-gap: 3rem !important;\n  }\n  .column-gap-md-0 {\n    -moz-column-gap: 0 !important;\n    column-gap: 0 !important;\n  }\n  .column-gap-md-1 {\n    -moz-column-gap: 0.25rem !important;\n    column-gap: 0.25rem !important;\n  }\n  .column-gap-md-2 {\n    -moz-column-gap: 0.5rem !important;\n    column-gap: 0.5rem !important;\n  }\n  .column-gap-md-3 {\n    -moz-column-gap: 1rem !important;\n    column-gap: 1rem !important;\n  }\n  .column-gap-md-4 {\n    -moz-column-gap: 1.5rem !important;\n    column-gap: 1.5rem !important;\n  }\n  .column-gap-md-5 {\n    -moz-column-gap: 3rem !important;\n    column-gap: 3rem !important;\n  }\n  .text-md-start {\n    text-align: left !important;\n  }\n  .text-md-end {\n    text-align: right !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 992px) {\n  .float-lg-start {\n    float: left !important;\n  }\n  .float-lg-end {\n    float: right !important;\n  }\n  .float-lg-none {\n    float: none !important;\n  }\n  .object-fit-lg-contain {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n  .object-fit-lg-cover {\n    -o-object-fit: cover !important;\n    object-fit: cover !important;\n  }\n  .object-fit-lg-fill {\n    -o-object-fit: fill !important;\n    object-fit: fill !important;\n  }\n  .object-fit-lg-scale {\n    -o-object-fit: scale-down !important;\n    object-fit: scale-down !important;\n  }\n  .object-fit-lg-none {\n    -o-object-fit: none !important;\n    object-fit: none !important;\n  }\n  .d-lg-inline {\n    display: inline !important;\n  }\n  .d-lg-inline-block {\n    display: inline-block !important;\n  }\n  .d-lg-block {\n    display: block !important;\n  }\n  .d-lg-grid {\n    display: grid !important;\n  }\n  .d-lg-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-lg-table {\n    display: table !important;\n  }\n  .d-lg-table-row {\n    display: table-row !important;\n  }\n  .d-lg-table-cell {\n    display: table-cell !important;\n  }\n  .d-lg-flex {\n    display: flex !important;\n  }\n  .d-lg-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-lg-none {\n    display: none !important;\n  }\n  .flex-lg-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-lg-row {\n    flex-direction: row !important;\n  }\n  .flex-lg-column {\n    flex-direction: column !important;\n  }\n  .flex-lg-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-lg-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-lg-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-lg-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-lg-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-lg-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-lg-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-lg-center {\n    justify-content: center !important;\n  }\n  .justify-content-lg-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-lg-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-lg-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-lg-start {\n    align-items: flex-start !important;\n  }\n  .align-items-lg-end {\n    align-items: flex-end !important;\n  }\n  .align-items-lg-center {\n    align-items: center !important;\n  }\n  .align-items-lg-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-lg-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-lg-start {\n    align-content: flex-start !important;\n  }\n  .align-content-lg-end {\n    align-content: flex-end !important;\n  }\n  .align-content-lg-center {\n    align-content: center !important;\n  }\n  .align-content-lg-between {\n    align-content: space-between !important;\n  }\n  .align-content-lg-around {\n    align-content: space-around !important;\n  }\n  .align-content-lg-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-lg-auto {\n    align-self: auto !important;\n  }\n  .align-self-lg-start {\n    align-self: flex-start !important;\n  }\n  .align-self-lg-end {\n    align-self: flex-end !important;\n  }\n  .align-self-lg-center {\n    align-self: center !important;\n  }\n  .align-self-lg-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-lg-stretch {\n    align-self: stretch !important;\n  }\n  .order-lg-first {\n    order: -1 !important;\n  }\n  .order-lg-0 {\n    order: 0 !important;\n  }\n  .order-lg-1 {\n    order: 1 !important;\n  }\n  .order-lg-2 {\n    order: 2 !important;\n  }\n  .order-lg-3 {\n    order: 3 !important;\n  }\n  .order-lg-4 {\n    order: 4 !important;\n  }\n  .order-lg-5 {\n    order: 5 !important;\n  }\n  .order-lg-last {\n    order: 6 !important;\n  }\n  .m-lg-0 {\n    margin: 0 !important;\n  }\n  .m-lg-1 {\n    margin: 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin: 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin: 1rem !important;\n  }\n  .m-lg-4 {\n    margin: 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin: 3rem !important;\n  }\n  .m-lg-auto {\n    margin: auto !important;\n  }\n  .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-lg-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-lg-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-lg-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-lg-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-lg-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-lg-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-lg-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-lg-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-lg-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-lg-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-lg-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-lg-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-lg-0 {\n    margin-top: 0 !important;\n  }\n  .mt-lg-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-lg-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-lg-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-lg-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-lg-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-lg-auto {\n    margin-top: auto !important;\n  }\n  .me-lg-0 {\n    margin-right: 0 !important;\n  }\n  .me-lg-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-lg-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-lg-3 {\n    margin-right: 1rem !important;\n  }\n  .me-lg-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-lg-5 {\n    margin-right: 3rem !important;\n  }\n  .me-lg-auto {\n    margin-right: auto !important;\n  }\n  .mb-lg-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-lg-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-lg-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-lg-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-lg-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-lg-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-lg-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-lg-0 {\n    margin-left: 0 !important;\n  }\n  .ms-lg-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-lg-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-lg-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-lg-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-lg-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-lg-auto {\n    margin-left: auto !important;\n  }\n  .p-lg-0 {\n    padding: 0 !important;\n  }\n  .p-lg-1 {\n    padding: 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding: 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding: 1rem !important;\n  }\n  .p-lg-4 {\n    padding: 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding: 3rem !important;\n  }\n  .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-lg-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-lg-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-lg-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-lg-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-lg-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-lg-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-lg-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-lg-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-lg-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-lg-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-lg-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-lg-0 {\n    padding-top: 0 !important;\n  }\n  .pt-lg-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-lg-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-lg-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-lg-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-lg-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-lg-0 {\n    padding-right: 0 !important;\n  }\n  .pe-lg-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-lg-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-lg-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-lg-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-lg-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-lg-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-lg-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-lg-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-lg-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-lg-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-lg-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-lg-0 {\n    padding-left: 0 !important;\n  }\n  .ps-lg-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-lg-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-lg-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-lg-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-lg-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-lg-0 {\n    gap: 0 !important;\n  }\n  .gap-lg-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-lg-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-lg-3 {\n    gap: 1rem !important;\n  }\n  .gap-lg-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-lg-5 {\n    gap: 3rem !important;\n  }\n  .row-gap-lg-0 {\n    row-gap: 0 !important;\n  }\n  .row-gap-lg-1 {\n    row-gap: 0.25rem !important;\n  }\n  .row-gap-lg-2 {\n    row-gap: 0.5rem !important;\n  }\n  .row-gap-lg-3 {\n    row-gap: 1rem !important;\n  }\n  .row-gap-lg-4 {\n    row-gap: 1.5rem !important;\n  }\n  .row-gap-lg-5 {\n    row-gap: 3rem !important;\n  }\n  .column-gap-lg-0 {\n    -moz-column-gap: 0 !important;\n    column-gap: 0 !important;\n  }\n  .column-gap-lg-1 {\n    -moz-column-gap: 0.25rem !important;\n    column-gap: 0.25rem !important;\n  }\n  .column-gap-lg-2 {\n    -moz-column-gap: 0.5rem !important;\n    column-gap: 0.5rem !important;\n  }\n  .column-gap-lg-3 {\n    -moz-column-gap: 1rem !important;\n    column-gap: 1rem !important;\n  }\n  .column-gap-lg-4 {\n    -moz-column-gap: 1.5rem !important;\n    column-gap: 1.5rem !important;\n  }\n  .column-gap-lg-5 {\n    -moz-column-gap: 3rem !important;\n    column-gap: 3rem !important;\n  }\n  .text-lg-start {\n    text-align: left !important;\n  }\n  .text-lg-end {\n    text-align: right !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .float-xl-start {\n    float: left !important;\n  }\n  .float-xl-end {\n    float: right !important;\n  }\n  .float-xl-none {\n    float: none !important;\n  }\n  .object-fit-xl-contain {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n  .object-fit-xl-cover {\n    -o-object-fit: cover !important;\n    object-fit: cover !important;\n  }\n  .object-fit-xl-fill {\n    -o-object-fit: fill !important;\n    object-fit: fill !important;\n  }\n  .object-fit-xl-scale {\n    -o-object-fit: scale-down !important;\n    object-fit: scale-down !important;\n  }\n  .object-fit-xl-none {\n    -o-object-fit: none !important;\n    object-fit: none !important;\n  }\n  .d-xl-inline {\n    display: inline !important;\n  }\n  .d-xl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xl-block {\n    display: block !important;\n  }\n  .d-xl-grid {\n    display: grid !important;\n  }\n  .d-xl-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-xl-table {\n    display: table !important;\n  }\n  .d-xl-table-row {\n    display: table-row !important;\n  }\n  .d-xl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xl-flex {\n    display: flex !important;\n  }\n  .d-xl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xl-none {\n    display: none !important;\n  }\n  .flex-xl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xl-row {\n    flex-direction: row !important;\n  }\n  .flex-xl-column {\n    flex-direction: column !important;\n  }\n  .flex-xl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xl-center {\n    align-items: center !important;\n  }\n  .align-items-xl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xl-center {\n    align-content: center !important;\n  }\n  .align-content-xl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xl-center {\n    align-self: center !important;\n  }\n  .align-self-xl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xl-first {\n    order: -1 !important;\n  }\n  .order-xl-0 {\n    order: 0 !important;\n  }\n  .order-xl-1 {\n    order: 1 !important;\n  }\n  .order-xl-2 {\n    order: 2 !important;\n  }\n  .order-xl-3 {\n    order: 3 !important;\n  }\n  .order-xl-4 {\n    order: 4 !important;\n  }\n  .order-xl-5 {\n    order: 5 !important;\n  }\n  .order-xl-last {\n    order: 6 !important;\n  }\n  .m-xl-0 {\n    margin: 0 !important;\n  }\n  .m-xl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin: 1rem !important;\n  }\n  .m-xl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin: 3rem !important;\n  }\n  .m-xl-auto {\n    margin: auto !important;\n  }\n  .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xl-auto {\n    margin-top: auto !important;\n  }\n  .me-xl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xl-auto {\n    margin-left: auto !important;\n  }\n  .p-xl-0 {\n    padding: 0 !important;\n  }\n  .p-xl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding: 1rem !important;\n  }\n  .p-xl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding: 3rem !important;\n  }\n  .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xl-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-xl-0 {\n    gap: 0 !important;\n  }\n  .gap-xl-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-xl-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-xl-3 {\n    gap: 1rem !important;\n  }\n  .gap-xl-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-xl-5 {\n    gap: 3rem !important;\n  }\n  .row-gap-xl-0 {\n    row-gap: 0 !important;\n  }\n  .row-gap-xl-1 {\n    row-gap: 0.25rem !important;\n  }\n  .row-gap-xl-2 {\n    row-gap: 0.5rem !important;\n  }\n  .row-gap-xl-3 {\n    row-gap: 1rem !important;\n  }\n  .row-gap-xl-4 {\n    row-gap: 1.5rem !important;\n  }\n  .row-gap-xl-5 {\n    row-gap: 3rem !important;\n  }\n  .column-gap-xl-0 {\n    -moz-column-gap: 0 !important;\n    column-gap: 0 !important;\n  }\n  .column-gap-xl-1 {\n    -moz-column-gap: 0.25rem !important;\n    column-gap: 0.25rem !important;\n  }\n  .column-gap-xl-2 {\n    -moz-column-gap: 0.5rem !important;\n    column-gap: 0.5rem !important;\n  }\n  .column-gap-xl-3 {\n    -moz-column-gap: 1rem !important;\n    column-gap: 1rem !important;\n  }\n  .column-gap-xl-4 {\n    -moz-column-gap: 1.5rem !important;\n    column-gap: 1.5rem !important;\n  }\n  .column-gap-xl-5 {\n    -moz-column-gap: 3rem !important;\n    column-gap: 3rem !important;\n  }\n  .text-xl-start {\n    text-align: left !important;\n  }\n  .text-xl-end {\n    text-align: right !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1400px) {\n  .float-xxl-start {\n    float: left !important;\n  }\n  .float-xxl-end {\n    float: right !important;\n  }\n  .float-xxl-none {\n    float: none !important;\n  }\n  .object-fit-xxl-contain {\n    -o-object-fit: contain !important;\n    object-fit: contain !important;\n  }\n  .object-fit-xxl-cover {\n    -o-object-fit: cover !important;\n    object-fit: cover !important;\n  }\n  .object-fit-xxl-fill {\n    -o-object-fit: fill !important;\n    object-fit: fill !important;\n  }\n  .object-fit-xxl-scale {\n    -o-object-fit: scale-down !important;\n    object-fit: scale-down !important;\n  }\n  .object-fit-xxl-none {\n    -o-object-fit: none !important;\n    object-fit: none !important;\n  }\n  .d-xxl-inline {\n    display: inline !important;\n  }\n  .d-xxl-inline-block {\n    display: inline-block !important;\n  }\n  .d-xxl-block {\n    display: block !important;\n  }\n  .d-xxl-grid {\n    display: grid !important;\n  }\n  .d-xxl-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-xxl-table {\n    display: table !important;\n  }\n  .d-xxl-table-row {\n    display: table-row !important;\n  }\n  .d-xxl-table-cell {\n    display: table-cell !important;\n  }\n  .d-xxl-flex {\n    display: flex !important;\n  }\n  .d-xxl-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-xxl-none {\n    display: none !important;\n  }\n  .flex-xxl-fill {\n    flex: 1 1 auto !important;\n  }\n  .flex-xxl-row {\n    flex-direction: row !important;\n  }\n  .flex-xxl-column {\n    flex-direction: column !important;\n  }\n  .flex-xxl-row-reverse {\n    flex-direction: row-reverse !important;\n  }\n  .flex-xxl-column-reverse {\n    flex-direction: column-reverse !important;\n  }\n  .flex-xxl-grow-0 {\n    flex-grow: 0 !important;\n  }\n  .flex-xxl-grow-1 {\n    flex-grow: 1 !important;\n  }\n  .flex-xxl-shrink-0 {\n    flex-shrink: 0 !important;\n  }\n  .flex-xxl-shrink-1 {\n    flex-shrink: 1 !important;\n  }\n  .flex-xxl-wrap {\n    flex-wrap: wrap !important;\n  }\n  .flex-xxl-nowrap {\n    flex-wrap: nowrap !important;\n  }\n  .flex-xxl-wrap-reverse {\n    flex-wrap: wrap-reverse !important;\n  }\n  .justify-content-xxl-start {\n    justify-content: flex-start !important;\n  }\n  .justify-content-xxl-end {\n    justify-content: flex-end !important;\n  }\n  .justify-content-xxl-center {\n    justify-content: center !important;\n  }\n  .justify-content-xxl-between {\n    justify-content: space-between !important;\n  }\n  .justify-content-xxl-around {\n    justify-content: space-around !important;\n  }\n  .justify-content-xxl-evenly {\n    justify-content: space-evenly !important;\n  }\n  .align-items-xxl-start {\n    align-items: flex-start !important;\n  }\n  .align-items-xxl-end {\n    align-items: flex-end !important;\n  }\n  .align-items-xxl-center {\n    align-items: center !important;\n  }\n  .align-items-xxl-baseline {\n    align-items: baseline !important;\n  }\n  .align-items-xxl-stretch {\n    align-items: stretch !important;\n  }\n  .align-content-xxl-start {\n    align-content: flex-start !important;\n  }\n  .align-content-xxl-end {\n    align-content: flex-end !important;\n  }\n  .align-content-xxl-center {\n    align-content: center !important;\n  }\n  .align-content-xxl-between {\n    align-content: space-between !important;\n  }\n  .align-content-xxl-around {\n    align-content: space-around !important;\n  }\n  .align-content-xxl-stretch {\n    align-content: stretch !important;\n  }\n  .align-self-xxl-auto {\n    align-self: auto !important;\n  }\n  .align-self-xxl-start {\n    align-self: flex-start !important;\n  }\n  .align-self-xxl-end {\n    align-self: flex-end !important;\n  }\n  .align-self-xxl-center {\n    align-self: center !important;\n  }\n  .align-self-xxl-baseline {\n    align-self: baseline !important;\n  }\n  .align-self-xxl-stretch {\n    align-self: stretch !important;\n  }\n  .order-xxl-first {\n    order: -1 !important;\n  }\n  .order-xxl-0 {\n    order: 0 !important;\n  }\n  .order-xxl-1 {\n    order: 1 !important;\n  }\n  .order-xxl-2 {\n    order: 2 !important;\n  }\n  .order-xxl-3 {\n    order: 3 !important;\n  }\n  .order-xxl-4 {\n    order: 4 !important;\n  }\n  .order-xxl-5 {\n    order: 5 !important;\n  }\n  .order-xxl-last {\n    order: 6 !important;\n  }\n  .m-xxl-0 {\n    margin: 0 !important;\n  }\n  .m-xxl-1 {\n    margin: 0.25rem !important;\n  }\n  .m-xxl-2 {\n    margin: 0.5rem !important;\n  }\n  .m-xxl-3 {\n    margin: 1rem !important;\n  }\n  .m-xxl-4 {\n    margin: 1.5rem !important;\n  }\n  .m-xxl-5 {\n    margin: 3rem !important;\n  }\n  .m-xxl-auto {\n    margin: auto !important;\n  }\n  .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .mx-xxl-1 {\n    margin-right: 0.25rem !important;\n    margin-left: 0.25rem !important;\n  }\n  .mx-xxl-2 {\n    margin-right: 0.5rem !important;\n    margin-left: 0.5rem !important;\n  }\n  .mx-xxl-3 {\n    margin-right: 1rem !important;\n    margin-left: 1rem !important;\n  }\n  .mx-xxl-4 {\n    margin-right: 1.5rem !important;\n    margin-left: 1.5rem !important;\n  }\n  .mx-xxl-5 {\n    margin-right: 3rem !important;\n    margin-left: 3rem !important;\n  }\n  .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: auto !important;\n  }\n  .my-xxl-0 {\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n  .my-xxl-1 {\n    margin-top: 0.25rem !important;\n    margin-bottom: 0.25rem !important;\n  }\n  .my-xxl-2 {\n    margin-top: 0.5rem !important;\n    margin-bottom: 0.5rem !important;\n  }\n  .my-xxl-3 {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n  }\n  .my-xxl-4 {\n    margin-top: 1.5rem !important;\n    margin-bottom: 1.5rem !important;\n  }\n  .my-xxl-5 {\n    margin-top: 3rem !important;\n    margin-bottom: 3rem !important;\n  }\n  .my-xxl-auto {\n    margin-top: auto !important;\n    margin-bottom: auto !important;\n  }\n  .mt-xxl-0 {\n    margin-top: 0 !important;\n  }\n  .mt-xxl-1 {\n    margin-top: 0.25rem !important;\n  }\n  .mt-xxl-2 {\n    margin-top: 0.5rem !important;\n  }\n  .mt-xxl-3 {\n    margin-top: 1rem !important;\n  }\n  .mt-xxl-4 {\n    margin-top: 1.5rem !important;\n  }\n  .mt-xxl-5 {\n    margin-top: 3rem !important;\n  }\n  .mt-xxl-auto {\n    margin-top: auto !important;\n  }\n  .me-xxl-0 {\n    margin-right: 0 !important;\n  }\n  .me-xxl-1 {\n    margin-right: 0.25rem !important;\n  }\n  .me-xxl-2 {\n    margin-right: 0.5rem !important;\n  }\n  .me-xxl-3 {\n    margin-right: 1rem !important;\n  }\n  .me-xxl-4 {\n    margin-right: 1.5rem !important;\n  }\n  .me-xxl-5 {\n    margin-right: 3rem !important;\n  }\n  .me-xxl-auto {\n    margin-right: auto !important;\n  }\n  .mb-xxl-0 {\n    margin-bottom: 0 !important;\n  }\n  .mb-xxl-1 {\n    margin-bottom: 0.25rem !important;\n  }\n  .mb-xxl-2 {\n    margin-bottom: 0.5rem !important;\n  }\n  .mb-xxl-3 {\n    margin-bottom: 1rem !important;\n  }\n  .mb-xxl-4 {\n    margin-bottom: 1.5rem !important;\n  }\n  .mb-xxl-5 {\n    margin-bottom: 3rem !important;\n  }\n  .mb-xxl-auto {\n    margin-bottom: auto !important;\n  }\n  .ms-xxl-0 {\n    margin-left: 0 !important;\n  }\n  .ms-xxl-1 {\n    margin-left: 0.25rem !important;\n  }\n  .ms-xxl-2 {\n    margin-left: 0.5rem !important;\n  }\n  .ms-xxl-3 {\n    margin-left: 1rem !important;\n  }\n  .ms-xxl-4 {\n    margin-left: 1.5rem !important;\n  }\n  .ms-xxl-5 {\n    margin-left: 3rem !important;\n  }\n  .ms-xxl-auto {\n    margin-left: auto !important;\n  }\n  .p-xxl-0 {\n    padding: 0 !important;\n  }\n  .p-xxl-1 {\n    padding: 0.25rem !important;\n  }\n  .p-xxl-2 {\n    padding: 0.5rem !important;\n  }\n  .p-xxl-3 {\n    padding: 1rem !important;\n  }\n  .p-xxl-4 {\n    padding: 1.5rem !important;\n  }\n  .p-xxl-5 {\n    padding: 3rem !important;\n  }\n  .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .px-xxl-1 {\n    padding-right: 0.25rem !important;\n    padding-left: 0.25rem !important;\n  }\n  .px-xxl-2 {\n    padding-right: 0.5rem !important;\n    padding-left: 0.5rem !important;\n  }\n  .px-xxl-3 {\n    padding-right: 1rem !important;\n    padding-left: 1rem !important;\n  }\n  .px-xxl-4 {\n    padding-right: 1.5rem !important;\n    padding-left: 1.5rem !important;\n  }\n  .px-xxl-5 {\n    padding-right: 3rem !important;\n    padding-left: 3rem !important;\n  }\n  .py-xxl-0 {\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  .py-xxl-1 {\n    padding-top: 0.25rem !important;\n    padding-bottom: 0.25rem !important;\n  }\n  .py-xxl-2 {\n    padding-top: 0.5rem !important;\n    padding-bottom: 0.5rem !important;\n  }\n  .py-xxl-3 {\n    padding-top: 1rem !important;\n    padding-bottom: 1rem !important;\n  }\n  .py-xxl-4 {\n    padding-top: 1.5rem !important;\n    padding-bottom: 1.5rem !important;\n  }\n  .py-xxl-5 {\n    padding-top: 3rem !important;\n    padding-bottom: 3rem !important;\n  }\n  .pt-xxl-0 {\n    padding-top: 0 !important;\n  }\n  .pt-xxl-1 {\n    padding-top: 0.25rem !important;\n  }\n  .pt-xxl-2 {\n    padding-top: 0.5rem !important;\n  }\n  .pt-xxl-3 {\n    padding-top: 1rem !important;\n  }\n  .pt-xxl-4 {\n    padding-top: 1.5rem !important;\n  }\n  .pt-xxl-5 {\n    padding-top: 3rem !important;\n  }\n  .pe-xxl-0 {\n    padding-right: 0 !important;\n  }\n  .pe-xxl-1 {\n    padding-right: 0.25rem !important;\n  }\n  .pe-xxl-2 {\n    padding-right: 0.5rem !important;\n  }\n  .pe-xxl-3 {\n    padding-right: 1rem !important;\n  }\n  .pe-xxl-4 {\n    padding-right: 1.5rem !important;\n  }\n  .pe-xxl-5 {\n    padding-right: 3rem !important;\n  }\n  .pb-xxl-0 {\n    padding-bottom: 0 !important;\n  }\n  .pb-xxl-1 {\n    padding-bottom: 0.25rem !important;\n  }\n  .pb-xxl-2 {\n    padding-bottom: 0.5rem !important;\n  }\n  .pb-xxl-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pb-xxl-4 {\n    padding-bottom: 1.5rem !important;\n  }\n  .pb-xxl-5 {\n    padding-bottom: 3rem !important;\n  }\n  .ps-xxl-0 {\n    padding-left: 0 !important;\n  }\n  .ps-xxl-1 {\n    padding-left: 0.25rem !important;\n  }\n  .ps-xxl-2 {\n    padding-left: 0.5rem !important;\n  }\n  .ps-xxl-3 {\n    padding-left: 1rem !important;\n  }\n  .ps-xxl-4 {\n    padding-left: 1.5rem !important;\n  }\n  .ps-xxl-5 {\n    padding-left: 3rem !important;\n  }\n  .gap-xxl-0 {\n    gap: 0 !important;\n  }\n  .gap-xxl-1 {\n    gap: 0.25rem !important;\n  }\n  .gap-xxl-2 {\n    gap: 0.5rem !important;\n  }\n  .gap-xxl-3 {\n    gap: 1rem !important;\n  }\n  .gap-xxl-4 {\n    gap: 1.5rem !important;\n  }\n  .gap-xxl-5 {\n    gap: 3rem !important;\n  }\n  .row-gap-xxl-0 {\n    row-gap: 0 !important;\n  }\n  .row-gap-xxl-1 {\n    row-gap: 0.25rem !important;\n  }\n  .row-gap-xxl-2 {\n    row-gap: 0.5rem !important;\n  }\n  .row-gap-xxl-3 {\n    row-gap: 1rem !important;\n  }\n  .row-gap-xxl-4 {\n    row-gap: 1.5rem !important;\n  }\n  .row-gap-xxl-5 {\n    row-gap: 3rem !important;\n  }\n  .column-gap-xxl-0 {\n    -moz-column-gap: 0 !important;\n    column-gap: 0 !important;\n  }\n  .column-gap-xxl-1 {\n    -moz-column-gap: 0.25rem !important;\n    column-gap: 0.25rem !important;\n  }\n  .column-gap-xxl-2 {\n    -moz-column-gap: 0.5rem !important;\n    column-gap: 0.5rem !important;\n  }\n  .column-gap-xxl-3 {\n    -moz-column-gap: 1rem !important;\n    column-gap: 1rem !important;\n  }\n  .column-gap-xxl-4 {\n    -moz-column-gap: 1.5rem !important;\n    column-gap: 1.5rem !important;\n  }\n  .column-gap-xxl-5 {\n    -moz-column-gap: 3rem !important;\n    column-gap: 3rem !important;\n  }\n  .text-xxl-start {\n    text-align: left !important;\n  }\n  .text-xxl-end {\n    text-align: right !important;\n  }\n  .text-xxl-center {\n    text-align: center !important;\n  }\n}\n@media (min-width: 1200px) {\n  .fs-1 {\n    font-size: 2.5rem !important;\n  }\n  .fs-2 {\n    font-size: 2rem !important;\n  }\n  .fs-3 {\n    font-size: 1.75rem !important;\n  }\n  .fs-4 {\n    font-size: 1.5rem !important;\n  }\n}\n@media print {\n  .d-print-inline {\n    display: inline !important;\n  }\n  .d-print-inline-block {\n    display: inline-block !important;\n  }\n  .d-print-block {\n    display: block !important;\n  }\n  .d-print-grid {\n    display: grid !important;\n  }\n  .d-print-inline-grid {\n    display: inline-grid !important;\n  }\n  .d-print-table {\n    display: table !important;\n  }\n  .d-print-table-row {\n    display: table-row !important;\n  }\n  .d-print-table-cell {\n    display: table-cell !important;\n  }\n  .d-print-flex {\n    display: flex !important;\n  }\n  .d-print-inline-flex {\n    display: inline-flex !important;\n  }\n  .d-print-none {\n    display: none !important;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/bootstrap/dist/css/bootstrap.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/* Import your SCSS file */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody, html {\n  margin: 0;\n  height: 100%;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput, textarea {\n  -webkit-user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n       appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\n:where(pre) {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::-moz-placeholder {\n  color: unset;\n}\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: initial;\n}\n\n/* fix the feature of 'hidden' attribute.\n display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n - fix for the content editable attribute will work properly.\n - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}\nbody {\n  font-family: \"Kumbh Sans\", sans-serif;\n}\nbody {\n  font-size: 16px;\n}\n\n/* ------- customize primary button color -------- */\n.btn-primary,\n.btn-primary:active,\n.btn-primary:not(.btn-check):active {\n  color: hsl(0, 0%, 100%);\n  background-color: hsl(26, 100%, 55%);\n  border-color: hsl(26, 100%, 55%);\n}\n.btn-primary:hover {\n  color: hsl(26, 100%, 55%);\n  background-color: hsl(25, 100%, 94%);\n  border-color: hsl(25, 100%, 94%);\n}\n.single-product-page {\n  color: hsl(220, 13%, 13%);\n}\n.single-product-page .product {\n  width: 1038px;\n  max-width: 100%;\n}\n.single-product-page .product__desc {\n  color: hsl(219, 9%, 45%);\n}\n.single-product-page .product__price-discounted {\n  background-color: hsl(25, 100%, 94%);\n  color: hsl(26, 100%, 55%);\n}\n.single-product-page .product__price-original {\n  color: hsl(220, 14%, 75%);\n}\n.single-product-page .product__actions-quantity {\n  background-color: hsl(223, 64%, 98%);\n}\n.single-product-page .product__actions-quantity input {\n  background-color: transparent;\n  border: 0;\n  outline: none;\n  width: 80px;\n  max-width: 100%;\n  text-align: center;\n}\n.single-product-page .product__actions-quantity .plus,\n.single-product-page .product__actions-quantity .minus {\n  color: hsl(26, 100%, 55%);\n}\n.single-product-page .product__actions-quantity .plus:hover,\n.single-product-page .product__actions-quantity .minus:hover {\n  cursor: pointer;\n}\n.single-product-page .product__actions-add-to-cart {\n  font-size: 14px;\n  --bs-btn-padding-y: 1rem;\n  --bs-btn-padding-x: 3rem;\n  max-width: 100%;\n}\n@media (min-width: 1440px) {\n.single-product-page .product__actions-add-to-cart {\n    width: 270px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/views/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Product.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0 */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0");
/* harmony import */ var _Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js */ "./resources/js/views/Product.vue?vue&type=script&lang=js");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_7b8d5cc0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss */ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Product_vue_vue_type_template_id_7b8d5cc0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Product.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=template&id=7b8d5cc0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0");


/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&lang=scss");


/***/ }),

/***/ "./node_modules/vue-numeric-input/dist/vue-numeric-input.umd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-numeric-input/dist/vue-numeric-input.umd.js ***!
  \**********************************************************************/
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_596__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_596__);
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
/******/ 	__nested_webpack_require_596__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_596__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_596__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_596__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_596__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_596__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_596__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_596__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_596__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_596__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_596__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_596__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_596__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_596__(__nested_webpack_require_596__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __nested_webpack_require_4072__) {

var wellKnownSymbol = __nested_webpack_require_4072__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __nested_webpack_require_4352__) {

var DESCRIPTORS = __nested_webpack_require_4352__("83ab");
var propertyIsEnumerableModule = __nested_webpack_require_4352__("d1e7");
var createPropertyDescriptor = __nested_webpack_require_4352__("5c6c");
var toIndexedObject = __nested_webpack_require_4352__("fc6a");
var toPropertyKey = __nested_webpack_require_4352__("a04b");
var has = __nested_webpack_require_4352__("5135");
var IE8_DOM_DEFINE = __nested_webpack_require_4352__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __nested_webpack_require_5396__) {

var DESCRIPTORS = __nested_webpack_require_5396__("83ab");
var fails = __nested_webpack_require_5396__("d039");
var createElement = __nested_webpack_require_5396__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "12b3":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_6108__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_numeric_input_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_6108__("4500");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_numeric_input_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_6108__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_numeric_input_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument === 'function';
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __nested_webpack_require_7979__) {

var getBuiltIn = __nested_webpack_require_7979__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __nested_webpack_require_8454__) {

var toInteger = __nested_webpack_require_8454__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __nested_webpack_require_8970__) {

var global = __nested_webpack_require_8970__("da84");
var getOwnPropertyDescriptor = __nested_webpack_require_8970__("06cf").f;
var createNonEnumerableProperty = __nested_webpack_require_8970__("9112");
var redefine = __nested_webpack_require_8970__("6eeb");
var setGlobal = __nested_webpack_require_8970__("ce4e");
var copyConstructorProperties = __nested_webpack_require_8970__("e893");
var isForced = __nested_webpack_require_8970__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __nested_webpack_require_11549__) {

var internalObjectKeys = __nested_webpack_require_11549__("ca84");
var enumBugKeys = __nested_webpack_require_11549__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __nested_webpack_require_14688__) {

"use strict";

var PROPER_FUNCTION_NAME = __nested_webpack_require_14688__("5e77").PROPER;
var redefine = __nested_webpack_require_14688__("6eeb");
var anObject = __nested_webpack_require_14688__("825a");
var $toString = __nested_webpack_require_14688__("577e");
var fails = __nested_webpack_require_14688__("d039");
var flags = __nested_webpack_require_14688__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __nested_webpack_require_15867__) {

var global = __nested_webpack_require_15867__("da84");
var userAgent = __nested_webpack_require_15867__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __nested_webpack_require_16529__) {

var getBuiltIn = __nested_webpack_require_16529__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __nested_webpack_require_16721__) {

var DESCRIPTORS = __nested_webpack_require_16721__("83ab");
var definePropertyModule = __nested_webpack_require_16721__("9bf2");
var anObject = __nested_webpack_require_16721__("825a");
var objectKeys = __nested_webpack_require_16721__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __nested_webpack_require_17470__) {

var isCallable = __nested_webpack_require_17470__("1626");

module.exports = function (argument) {
  if (typeof argument === 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __nested_webpack_require_17792__) {

var fails = __nested_webpack_require_17792__("d039");
var classof = __nested_webpack_require_17792__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __nested_webpack_require_18377__) {

var wellKnownSymbol = __nested_webpack_require_18377__("b622");
var create = __nested_webpack_require_18377__("7c73");
var definePropertyModule = __nested_webpack_require_18377__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "4500":
/***/ (function(module, exports, __nested_webpack_require_19084__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __nested_webpack_require_19084__("b0bb");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __nested_webpack_require_19084__("499e").default
var update = add("d740a91a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "485a":
/***/ (function(module, exports, __nested_webpack_require_19627__) {

var isCallable = __nested_webpack_require_19627__("1626");
var isObject = __nested_webpack_require_19627__("861d");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __nested_webpack_require_20319__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __nested_webpack_require_20319__("2d00");
var fails = __nested_webpack_require_20319__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "499e":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_21108__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_21108__.r(__nested_webpack_exports__);

// EXPORTS
__nested_webpack_require_21108__.d(__nested_webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __nested_webpack_require_28345__) {

var toIndexedObject = __nested_webpack_require_28345__("fc6a");
var toLength = __nested_webpack_require_28345__("50c4");
var toAbsoluteIndex = __nested_webpack_require_28345__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __nested_webpack_require_29690__) {

var toInteger = __nested_webpack_require_29690__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports, __nested_webpack_require_30064__) {

var toObject = __nested_webpack_require_30064__("7b0b");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __nested_webpack_require_30347__) {

var IS_PURE = __nested_webpack_require_30347__("c430");
var store = __nested_webpack_require_30347__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.18.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __nested_webpack_require_30770__) {

var getBuiltIn = __nested_webpack_require_30770__("d066");
var getOwnPropertyNamesModule = __nested_webpack_require_30770__("241c");
var getOwnPropertySymbolsModule = __nested_webpack_require_30770__("7418");
var anObject = __nested_webpack_require_30770__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __nested_webpack_require_31401__) {

var classof = __nested_webpack_require_31401__("f5df");

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __nested_webpack_require_31984__) {

var requireObjectCoercible = __nested_webpack_require_31984__("1d80");
var toString = __nested_webpack_require_31984__("577e");
var whitespaces = __nested_webpack_require_31984__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __nested_webpack_require_33143__) {

var isCallable = __nested_webpack_require_33143__("1626");
var tryToString = __nested_webpack_require_33143__("0d51");

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __nested_webpack_require_33751__) {

var DESCRIPTORS = __nested_webpack_require_33751__("83ab");
var has = __nested_webpack_require_33751__("5135");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = has(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "5e89":
/***/ (function(module, exports, __nested_webpack_require_34519__) {

var isObject = __nested_webpack_require_34519__("861d");

var floor = Math.floor;

// `Number.isInteger` method implementation
// https://tc39.es/ecma262/#sec-number.isinteger
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __nested_webpack_require_34871__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_34871__("7f9a");
var global = __nested_webpack_require_34871__("da84");
var isObject = __nested_webpack_require_34871__("861d");
var createNonEnumerableProperty = __nested_webpack_require_34871__("9112");
var objectHas = __nested_webpack_require_34871__("5135");
var shared = __nested_webpack_require_34871__("c6cd");
var sharedKey = __nested_webpack_require_34871__("f772");
var hiddenKeys = __nested_webpack_require_34871__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __nested_webpack_require_36803__) {

var global = __nested_webpack_require_36803__("da84");
var isCallable = __nested_webpack_require_36803__("1626");
var has = __nested_webpack_require_36803__("5135");
var createNonEnumerableProperty = __nested_webpack_require_36803__("9112");
var setGlobal = __nested_webpack_require_36803__("ce4e");
var inspectSource = __nested_webpack_require_36803__("8925");
var InternalStateModule = __nested_webpack_require_36803__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __nested_webpack_require_36803__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!has(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __nested_webpack_require_38756__) {

var isCallable = __nested_webpack_require_38756__("1626");
var isObject = __nested_webpack_require_38756__("861d");
var setPrototypeOf = __nested_webpack_require_38756__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __nested_webpack_require_39959__) {

var requireObjectCoercible = __nested_webpack_require_39959__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __nested_webpack_require_40269__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __nested_webpack_require_40269__("825a");
var defineProperties = __nested_webpack_require_40269__("37e8");
var enumBugKeys = __nested_webpack_require_40269__("7839");
var hiddenKeys = __nested_webpack_require_40269__("d012");
var html = __nested_webpack_require_40269__("1be4");
var documentCreateElement = __nested_webpack_require_40269__("cc12");
var sharedKey = __nested_webpack_require_40269__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __nested_webpack_require_43281__) {

var global = __nested_webpack_require_43281__("da84");
var isCallable = __nested_webpack_require_43281__("1626");
var inspectSource = __nested_webpack_require_43281__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __nested_webpack_require_43618__) {

var isObject = __nested_webpack_require_43618__("861d");

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __nested_webpack_require_43929__) {

var fails = __nested_webpack_require_43929__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __nested_webpack_require_44319__) {

var isCallable = __nested_webpack_require_44319__("1626");

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __nested_webpack_require_47800__) {

var isCallable = __nested_webpack_require_47800__("1626");
var store = __nested_webpack_require_47800__("c6cd");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8ba4":
/***/ (function(module, exports, __nested_webpack_require_48259__) {

var $ = __nested_webpack_require_48259__("23e7");
var isInteger = __nested_webpack_require_48259__("5e89");

// `Number.isInteger` method
// https://tc39.es/ecma262/#sec-number.isinteger
$({ target: 'Number', stat: true }, {
  isInteger: isInteger
});


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __nested_webpack_require_48809__) {

var DESCRIPTORS = __nested_webpack_require_48809__("83ab");
var definePropertyModule = __nested_webpack_require_48809__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_48809__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __nested_webpack_require_49281__) {

var fails = __nested_webpack_require_49281__("d039");
var isCallable = __nested_webpack_require_49281__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __nested_webpack_require_49973__) {

var DESCRIPTORS = __nested_webpack_require_49973__("83ab");
var IE8_DOM_DEFINE = __nested_webpack_require_49973__("0cfb");
var anObject = __nested_webpack_require_49973__("825a");
var toPropertyKey = __nested_webpack_require_49973__("a04b");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __nested_webpack_require_50868__) {

var toPrimitive = __nested_webpack_require_50868__("c04e");
var isSymbol = __nested_webpack_require_50868__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __nested_webpack_require_51571__) {

"use strict";

var DESCRIPTORS = __nested_webpack_require_51571__("83ab");
var global = __nested_webpack_require_51571__("da84");
var isForced = __nested_webpack_require_51571__("94ca");
var redefine = __nested_webpack_require_51571__("6eeb");
var has = __nested_webpack_require_51571__("5135");
var classof = __nested_webpack_require_51571__("c6b6");
var inheritIfRequired = __nested_webpack_require_51571__("7156");
var isSymbol = __nested_webpack_require_51571__("d9b5");
var toPrimitive = __nested_webpack_require_51571__("c04e");
var fails = __nested_webpack_require_51571__("d039");
var create = __nested_webpack_require_51571__("7c73");
var getOwnPropertyNames = __nested_webpack_require_51571__("241c").f;
var getOwnPropertyDescriptor = __nested_webpack_require_51571__("06cf").f;
var defineProperty = __nested_webpack_require_51571__("9bf2").f;
var trim = __nested_webpack_require_51571__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __nested_webpack_require_55198__) {

"use strict";

var anObject = __nested_webpack_require_55198__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "aff5":
/***/ (function(module, exports, __nested_webpack_require_55762__) {

var $ = __nested_webpack_require_55762__("23e7");

// `Number.MAX_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.max_safe_integer
$({ target: 'Number', stat: true }, {
  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
});


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __nested_webpack_require_56057__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_56057__("00ee");
var classof = __nested_webpack_require_56057__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0bb":
/***/ (function(module, exports, __nested_webpack_require_56491__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __nested_webpack_require_56491__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-numeric-input{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;height:1.8rem}.vue-numeric-input.small{height:20px;font-size:12px}.vue-numeric-input.small .numeric-input{padding:2px 1.4rem}.vue-numeric-input.large{height:42px;font-size:34px}.vue-numeric-input.large .numeric-input{padding:2px 2.8rem}.vue-numeric-input .numeric-input{height:inherit;padding:2px 2rem;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:inherit;border:1px solid #ccc;border-radius:2px;display:block;line-height:1.8rem;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s;width:100%;-moz-appearance:textfield!important}.numeric-input::-webkit-inner-spin-button,.numeric-input::-webkit-outer-spin-button{-webkit-appearance:none!important;margin:0!important}.vue-numeric-input .numeric-input:focus{outline:none;border-color:#409eff}.vue-numeric-input button{position:absolute;width:1.8rem;padding:.2rem;margin:0;cursor:pointer;text-align:center;-webkit-transition:all .1s ease 0s;transition:all .1s ease 0s;background:rgba(0,0,0,.1);border:solid rgba(0,0,0,.1);-webkit-box-shadow:rgba(0,0,0,.1) -1px -1px 3px inset,hsla(0,0%,100%,.7) 1px 1px 3px inset;box-shadow:inset -1px -1px 3px rgba(0,0,0,.1),inset 1px 1px 3px hsla(0,0%,100%,.7)}.vue-numeric-input button:focus{outline:none!important}.vue-numeric-input.small button{width:20px}.vue-numeric-input.large button{width:40px}.vue-numeric-input button:hover{background:rgba(0,0,0,.2)}.vue-numeric-input button:active{-webkit-box-shadow:rgba(0,0,0,.2) 0 1px 3px inset,hsla(0,0%,100%,.5) -1px -1px 4px inset;box-shadow:inset 0 1px 3px rgba(0,0,0,.2),inset -1px -1px 4px hsla(0,0%,100%,.5)}.vue-numeric-input button:disabled{opacity:.5;-webkit-box-shadow:none;box-shadow:none;cursor:not-allowed}.vue-numeric-input .numeric-input.no-control{padding:2px 5px}.vue-numeric-input .btn-increment{right:0;top:0;bottom:0;border-radius:2px;border-width:1px}.vue-numeric-input .btn-increment .btn-icon{position:absolute;width:100%;height:100%;top:0;left:0}.vue-numeric-input .btn-increment .btn-icon:before{display:inline-block;visibility:visible;content:\"\";background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"CurrentColor\" viewBox=\"0 0 16 16\"><path d=\"M8 0a1 1 0 011 1v6h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 011-1z\"/></svg>');background-repeat:no-repeat;background-size:65% 65%;background-position:50%;width:100%;height:100%}.vue-numeric-input .btn-increment .btn-icon:after{position:absolute;visibility:hidden;content:\"\"}.vue-numeric-input .btn-decrement{left:0;top:0;bottom:0;border-radius:2px;border-width:1px}.vue-numeric-input .btn-decrement .btn-icon{position:absolute;width:100%;height:100%;top:0;left:0}.vue-numeric-input .btn-decrement .btn-icon:before{display:inline-block;visibility:visible;content:\"\";background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M0 8a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1z\"/></svg>');background-repeat:no-repeat;background-size:65% 65%;background-position:50%;width:100%;height:100%}.vue-numeric-input .btn-decrement .btn-icon:after{visibility:hidden;content:\"\";clear:both;height:0}.vue-numeric-input.updown .numeric-input{padding:5px 2rem 5px 5px}.vue-numeric-input.updown .btn-increment{right:0;top:0;bottom:50%;border-radius:2px 2px 0 0;border-width:1px 1px 0}.vue-numeric-input.updown .btn-increment .btn-icon{top:50%;left:50%;width:0;height:0;border-width:0 .45rem .45rem;border-color:transparent transparent #111;border-style:solid;margin:-.25rem 0 0 -.4rem}.vue-numeric-input.updown .btn-increment .btn-icon:before{visibility:hidden;display:block;content:\"\";clear:both;height:0}.vue-numeric-input.updown .btn-decrement .btn-icon:before{content:\"\"}.vue-numeric-input.updown .btn-increment .btn-icon:after{visibility:hidden;display:block;content:\"\";clear:both;height:0}.vue-numeric-input.updown .btn-decrement{right:0;top:50%;bottom:0;left:auto;border-radius:0 0 2px 2px;border-width:0 1px 1px}.vue-numeric-input.updown .btn-decrement .btn-icon{top:50%;left:50%;width:0;height:0;border-width:.45rem .45rem 0;border-color:#111 transparent transparent;border-style:solid;margin:-.25rem 0 0 -.4rem}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __nested_webpack_require_61067__) {

var DESCRIPTORS = __nested_webpack_require_61067__("83ab");
var FUNCTION_NAME_EXISTS = __nested_webpack_require_61067__("5e77").EXISTS;
var defineProperty = __nested_webpack_require_61067__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __nested_webpack_require_61853__) {

var global = __nested_webpack_require_61853__("da84");
var shared = __nested_webpack_require_61853__("5692");
var has = __nested_webpack_require_61853__("5135");
var uid = __nested_webpack_require_61853__("90e3");
var NATIVE_SYMBOL = __nested_webpack_require_61853__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_61853__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __nested_webpack_require_62753__) {

var isObject = __nested_webpack_require_62753__("861d");
var isSymbol = __nested_webpack_require_62753__("d9b5");
var getMethod = __nested_webpack_require_62753__("dc4a");
var ordinaryToPrimitive = __nested_webpack_require_62753__("485a");
var wellKnownSymbol = __nested_webpack_require_62753__("b622");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __nested_webpack_require_63963__) {

var global = __nested_webpack_require_63963__("da84");
var setGlobal = __nested_webpack_require_63963__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __nested_webpack_require_64783__) {

var has = __nested_webpack_require_64783__("5135");
var toIndexedObject = __nested_webpack_require_64783__("fc6a");
var indexOf = __nested_webpack_require_64783__("4d64").indexOf;
var hiddenKeys = __nested_webpack_require_64783__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __nested_webpack_require_65416__) {

"use strict";

var $ = __nested_webpack_require_65416__("23e7");
var $includes = __nested_webpack_require_65416__("4d64").includes;
var addToUnscopables = __nested_webpack_require_65416__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __nested_webpack_require_66031__) {

var global = __nested_webpack_require_66031__("da84");
var isObject = __nested_webpack_require_66031__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __nested_webpack_require_66446__) {

var global = __nested_webpack_require_66446__("da84");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __nested_webpack_require_67105__) {

var global = __nested_webpack_require_67105__("da84");
var isCallable = __nested_webpack_require_67105__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __nested_webpack_require_68263__) {

/* eslint-disable no-proto -- safe */
var anObject = __nested_webpack_require_68263__("825a");
var aPossiblePrototype = __nested_webpack_require_68263__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __nested_webpack_require_69326__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_69326__("00ee");
var redefine = __nested_webpack_require_69326__("6eeb");
var toString = __nested_webpack_require_69326__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __nested_webpack_require_69754__) {

var isCallable = __nested_webpack_require_69754__("1626");
var getBuiltIn = __nested_webpack_require_69754__("d066");
var USE_SYMBOL_AS_UID = __nested_webpack_require_69754__("fdbf");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __nested_webpack_require_70193__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_70193__("c8ba")))

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __nested_webpack_require_70983__) {

var aCallable = __nested_webpack_require_70983__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __nested_webpack_require_71299__) {

var internalObjectKeys = __nested_webpack_require_71299__("ca84");
var enumBugKeys = __nested_webpack_require_71299__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e6e1":
/***/ (function(module, exports, __nested_webpack_require_71706__) {

var $ = __nested_webpack_require_71706__("23e7");

// `Number.MIN_SAFE_INTEGER` constant
// https://tc39.es/ecma262/#sec-number.min_safe_integer
$({ target: 'Number', stat: true }, {
  MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __nested_webpack_require_72002__) {

var has = __nested_webpack_require_72002__("5135");
var ownKeys = __nested_webpack_require_72002__("56ef");
var getOwnPropertyDescriptorModule = __nested_webpack_require_72002__("06cf");
var definePropertyModule = __nested_webpack_require_72002__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __nested_webpack_require_72647__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_72647__("00ee");
var isCallable = __nested_webpack_require_72647__("1626");
var classofRaw = __nested_webpack_require_72647__("c6b6");
var wellKnownSymbol = __nested_webpack_require_72647__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __nested_webpack_require_73737__) {

var shared = __nested_webpack_require_73737__("5692");
var uid = __nested_webpack_require_73737__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_74026__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_74026__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_74026__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_74026__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __nested_webpack_require_74026__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e4a896fa-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-numeric-input.vue?vue&type=template&id=702358e3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'vue-numeric-input',
    _vm.size,
    _vm.controlsType === 'updown' ? 'updown' : ''
  ],style:(_vm.widthStyle)},[_c('input',_vm._g(_vm._b({ref:"input",class:_vm.inputClasses,style:(_vm.inputStyle),attrs:{"name":_vm.name,"type":"number","step":"any","placeholder":_vm.placeholder,"max":_vm.max,"min":_vm.min,"autofocus":_vm.autofocus,"disabled":_vm.disabled,"readonly":_vm.readonly || !_vm.isInput},domProps:{"value":_vm.computedValue},on:{"input":_vm.onInput,"change":_vm.onChange,"blur":_vm.onBlur,"focus":_vm.onFocus}},'input',_vm.$attrs,false),
      _vm.mousewheel
        ? { wheel: _vm.throttle(_vm.mouseWheelHandler, 6000) }
        : {
            wheel: function(evt) {
              evt.preventDefault();
            }
          }
    )),(_vm.controls)?_c('button',{staticClass:"input-btn btn-decrement",attrs:{"type":"button","disabled":_vm.disabled || _vm.minDisable},on:{"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.start(_vm.decrement)},"touchstart":function($event){$event.preventDefault();return _vm.start(_vm.decrement)},"touchend":function($event){$event.preventDefault();return _vm.stop.apply(null, arguments)}}},[_c('span',{staticClass:"btn-icon"})]):_vm._e(),(_vm.controls)?_c('button',{staticClass:"input-btn btn-increment",attrs:{"type":"button","disabled":_vm.disabled || _vm.maxDisable},on:{"mousedown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.start(_vm.increment)},"touchstart":function($event){$event.preventDefault();return _vm.start(_vm.increment)},"touchend":function($event){$event.preventDefault();return _vm.stop.apply(null, arguments)}}},[_c('span',{staticClass:"btn-icon"})]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-numeric-input.vue?vue&type=template&id=702358e3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __nested_webpack_require_74026__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.min-safe-integer.js
var es_number_min_safe_integer = __nested_webpack_require_74026__("e6e1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.max-safe-integer.js
var es_number_max_safe_integer = __nested_webpack_require_74026__("aff5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __nested_webpack_require_74026__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-integer.js
var es_number_is_integer = __nested_webpack_require_74026__("8ba4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __nested_webpack_require_74026__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __nested_webpack_require_74026__("25f0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-numeric-input.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var timeInterval = 100;
/* harmony default export */ var vue_numeric_inputvue_type_script_lang_js_ = ({
  name: "vue-numeric-input",
  props: {
    name: String,
    value: [String, Number],
    placeholder: String,
    min: {
      type: Number,
      default: Number.MIN_SAFE_INTEGER
    },
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: Number,
      default: 1
    },
    align: {
      type: String,
      default: "left"
    },
    width: {
      type: String
    },
    size: {
      type: String,
      default: "normal",
      validator: function validator(value) {
        return ["small", "normal", "large"].includes(value);
      }
    },
    precision: {
      type: Number,
      validator: function validator(val) {
        return val >= 0 && Number.isInteger(val);
      }
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsType: {
      type: String,
      default: "plusminus"
    },
    mousewheel: {
      type: Boolean,
      default: false
    },
    isInput: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      newValue: 0,
      minDisable: false,
      maxDisable: false,
      interval: null,
      startTime: null,
      handler: Function
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        if (this.precision) {
          val = this.toPrecision(val, this.precision);
        }

        if (this.max && val >= this.max) {
          this.newValue = this.max;
        } else if (this.min && val <= this.min) {
          this.newValue = this.min;
        } else {
          this.newValue = val;
        }

        if (this.newValue !== val) {
          this.$emit("input", this.newValue);
        }
      }
    }
  },
  methods: {
    /**
     * Function convert value to number
     * @param val
     * @returns {number | Number}
     */
    toNumber: function toNumber(val) {
      var n = parseFloat(val);
      return isNaN(n) ? val : n;
    },

    /**
     * Function to return fixed decimal precision of input val
     * @param val
     * @param prec
     * @returns {number | Number}
     */
    toPrecision: function toPrecision(val, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(Math.round(val * Math.pow(10, precision)) / Math.pow(10, precision));
    },

    /**
     * Function to get the precision of a v
     * @param value
     * @returns {number | Number}
     */
    getPrecision: function getPrecision(value) {
      if (value === undefined) return 0;
      var valueString = value.toString();
      var dotPosition = valueString.indexOf(".");
      var precision = 0;

      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }

      return precision;
    },

    /**
     * Increment the current numeric value
     */
    increment: function increment() {
      if (!this.readonly && !this.disabled) {
        var val = this.computedValue || 0;
        var precisionFactor = Math.pow(10, this.numValuePrecision);
        var newVal = Math.round(precisionFactor * val + precisionFactor * this.step) / precisionFactor;

        if (newVal <= this.max) {
          this.minDisable = false;
          this.computedValue = newVal;
        } else {
          this.maxDisable = true;
        }
      }
    },

    /**
     * Decrement the current numeric value
     */
    decrement: function decrement() {
      if (!this.readonly && !this.disabled) {
        var val = this.computedValue || 0;
        var precisionFactor = Math.pow(10, this.numValuePrecision);
        var newVal = Math.round(precisionFactor * val - precisionFactor * this.step) / precisionFactor;

        if (newVal >= this.min) {
          this.maxDisable = false;
          this.computedValue = newVal;
        } else {
          this.minDisable = true;
        }
      }
    },

    /**
     * Handle value on Input
     */
    onInput: function onInput(event) {
      var _this = this;

      this.$nextTick(function () {
        if (event.target) {
          _this.computedValue = _this.toNumber(event.target.value);
        }
      });
    },

    /**
     *  Start a repetitive call to increment and decrement method after a timeInterval on mousedown event and will stop on mouseup event on controls
     * @param handler - increment or decrement method
     */
    start: function start(handler) {
      document.addEventListener("mouseup", this.stop);
      this.startTime = new Date();
      this.handler = handler;
      clearInterval(this.interval);
      this.interval = setInterval(handler, timeInterval);
    },

    /**
     * clear interval on mouseup event and remove the listener
     * @param evt - event to be removed
     */
    stop: function stop(evt) {
      document.removeEventListener(evt.type, this.stop);

      if (new Date() - this.startTime < timeInterval) {
        this.handler();
      }

      clearInterval(this.interval);
      this.interval = null;
      this.handler = null;
      this.startTime = null;
      if (this.value !== this.computedValue) this.$emit("change", this.computedValue);
    },

    /**
     * On blur event trigger
     * @param event - blur event on input
     */
    onBlur: function onBlur(event) {
      this.$emit("blur", event);
    },

    /**
     * On focus event trigger on input
     * @param event
     */
    onFocus: function onFocus(event) {
      this.$emit("focus", event);
    },

    /**
     * On change event trigger on input
     * @param event
     */
    onChange: function onChange() {
      this.$emit("change", this.computedValue);
    },

    /**
     * focus method to set the focus on input
     */
    focus: function focus() {
      if (!this.disabled) {
        this.$refs.input.focus();
      }
    },

    /**
     * blur to be trigger on input
     */
    blur: function blur() {
      this.$refs.input.blur();
    },
    mouseWheelHandler: function mouseWheelHandler(event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (event.deltaY < 0) {
        this.increment();
      } else {
        this.decrement();
      }

      return false;
    },
    throttle: function throttle(fn, delay) {
      var lastCall = 0;
      return function () {
        var now = new Date().getTime();

        if (now - lastCall < delay) {
          return;
        }

        lastCall = now;
        return fn.apply(void 0, arguments);
      };
    }
  },
  computed: {
    computedValue: {
      get: function get() {
        return this.newValue;
      },
      set: function set(value) {
        this.newValue = value;
        this.$emit("input", value);
      }
    },
    numValuePrecision: function numValuePrecision() {
      var stepPrecision = this.getPrecision(this.step);

      if (this.precision !== undefined) {
        return this.precision;
      } else {
        return Math.max(this.getPrecision(this.computedValue || 0), stepPrecision);
      }
    },
    inputClasses: function inputClasses() {
      return [this.controls ? "" : "no-control", this.className ? this.className : "", "numeric-input"];
    },
    inputStyle: function inputStyle() {
      return {
        textAlign: this.align
      };
    },
    widthStyle: function widthStyle() {
      var sizeWidth = "150px";

      if (this.size === "small") {
        sizeWidth = "100px";
      } else if (this.size === "large") {
        sizeWidth = "240px";
      }

      return {
        width: this.width ? "".concat(this.width) : sizeWidth
      };
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
    this.interval = null;
    this.handler = null;
    this.startTime = null;
  }
});
// CONCATENATED MODULE: ./src/vue-numeric-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_numeric_inputvue_type_script_lang_js_ = (vue_numeric_inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-numeric-input.vue?vue&type=style&index=0&lang=css&
var vue_numeric_inputvue_type_style_index_0_lang_css_ = __nested_webpack_require_74026__("12b3");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-numeric-input.vue






/* normalize component */

var component = normalizeComponent(
  src_vue_numeric_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_numeric_input = (component.exports);
// CONCATENATED MODULE: ./src/index.js


var src_plugin = {
  install: function install(Vue) {
    Vue.component(vue_numeric_input.name, vue_numeric_input);
  }
};
vue_numeric_input.install = src_plugin.install;
/* harmony default export */ var src_0 = (vue_numeric_input);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (src_0);



/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __nested_webpack_require_91259__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_91259__("44ad");
var requireObjectCoercible = __nested_webpack_require_91259__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __nested_webpack_require_91596__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __nested_webpack_require_91596__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});

/***/ })

}]);