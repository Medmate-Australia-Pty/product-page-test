"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    var slug = this.$route.params.slug;
    this.getData(slug);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  data: function data() {
    return {
      activeItem: 0,
      // default first image
      width: 0,
      data: {},
      quantity: 0,
      cartButton: {
        title: "Add to cart"
      }
    };
  },
  methods: {
    getData: function getData(slug) {
      var _this = this;
      // Include token
      var token = localStorage.getItem('authToken');
      console.log('token: ' + token);
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/client/products/fall-limited-edition-sneakers")
      // Bug: 404page template won't reload after being navigated to (unless manually hit refresh)
      // .get(`/client/products/${slug}`) 

      // Retrieve from own API
      // .get("/api/products/1", {
      //     headers: {
      //         Authorization: "Bearer " + token,
      //     },
      // })
      .then(function (response) {
        // console.log(response.data.data);
        _this.data = response.data.data;
      });
      //  Code for 404 redirect 
      // .catch((error) => {
      //     console.error(error);
      //     if (error.response && error.response.status === 404) {
      //         this.$router.push({ name: "404page" }); // Redirect to the 404 route
      //     }
      // });
    },
    handleResize: function handleResize() {
      this.width = window.innerWidth;
    },
    renderImage: function renderImage(imageLink, i) {
      this.$refs.image.src = imageLink;
      this.activeItem = i;
    },
    renderNextImageCarousel: function renderNextImageCarousel() {
      if (this.activeItem === this.data.images.length - 1) {
        this.activeItem = 0;
      } else {
        this.activeItem++;
      }
      this.$refs.image.src = this.data.images[this.activeItem];
    },
    renderPrevImageCarousel: function renderPrevImageCarousel() {
      if (this.activeItem === 0) {
        this.activeItem = this.data.images.length - 1;
      } else {
        this.activeItem--;
      }
      this.$refs.image.src = this.data.images[this.activeItem];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7b8d5cc0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "container g-0 g-md-1"
};
var _hoisted_2 = {
  key: 0,
  "class": "product-page row g-0 g-md-1"
};
var _hoisted_3 = {
  key: 0,
  "class": "image-box col-xs-12 col-sm-6"
};
var _hoisted_4 = ["src", "alt"];
var _hoisted_5 = ["onClick", "src", "alt"];
var _hoisted_6 = {
  key: 1,
  "class": "mobile-image-box"
};
var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "12",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M11 1 3 9l8 8",
    stroke: "#1D2026",
    "stroke-width": "4",
    fill: "none",
    "fill-rule": "evenodd"
  })], -1 /* HOISTED */);
});
var _hoisted_8 = [_hoisted_7];
var _hoisted_9 = ["src", "alt"];
var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "13",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "m2 1 8 8-8 8",
    stroke: "#1D2026",
    "stroke-width": "4",
    fill: "none",
    "fill-rule": "evenodd"
  })], -1 /* HOISTED */);
});
var _hoisted_11 = [_hoisted_10];
var _hoisted_12 = {
  "class": "product-contents col-xs-12 col-sm-6"
};
var _hoisted_13 = {
  key: 0,
  "class": "sneaker-company"
};
var _hoisted_14 = {
  "class": "product-description"
};
var _hoisted_15 = {
  "class": "product-prices"
};
var _hoisted_16 = {
  "class": "product-prices-discount"
};
var _hoisted_17 = {
  "class": "product-prices-full"
};
var _hoisted_18 = {
  "class": "product-cart-control"
};
var _hoisted_19 = {
  "class": "product-cart-num"
};
var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    width: "22",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z",
    fill: "#ffffff",
    "fill-rule": "nonzero"
  })], -1 /* HOISTED */);
});
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add to cart ");
var _hoisted_22 = [_hoisted_20, _hoisted_21];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.data ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Image gallery for desktop "), $data.width > 800 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "main-image",
    ref: "image",
    src: $data.data.images[0],
    alt: $data.data.name
  }, null, 8 /* PROPS */, _hoisted_4), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.images, function (images, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      onClick: function onClick($event) {
        return $options.renderImage(images, i);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'active-image-item': i === $data.activeItem,
        'image-items': $data.activeItem !== i
      }),
      key: images,
      src: images,
      alt: $data.data.name
    }, null, 10 /* CLASS, PROPS */, _hoisted_5);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Image carousel for mobile "), $data.width < 800 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.renderPrevImageCarousel();
    }),
    "class": "mobile-button-left"
  }, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "main-image",
    ref: "image",
    src: $data.data.images[$data.activeItem],
    alt: $data.data.name
  }, null, 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.renderNextImageCarousel();
    }),
    "class": "mobile-button-right"
  }, _hoisted_11)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Product information "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$data.width < 800 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_13, "SNEAKER COMPANY")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.price.discounted), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.discount.amount) + "%", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.price.full), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.quantity > 0 ? $data.quantity-- : $data.quantity;
    })
  }, " - "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.quantity), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $data.quantity++;
    })
  }, "+")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "product-cart-addto",
    onClick: _cache[4] || (_cache[4] = function () {
      return _ctx.addToCart && _ctx.addToCart.apply(_ctx, arguments);
    })
  }, _hoisted_22)])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Primary */\n/* Neutral */\n.product-page[data-v-7b8d5cc0] {\n  display: flex;\n  flex-direction: row;\n}\n@media (min-width: 375px) {\n.product-page[data-v-7b8d5cc0] {\n    padding-bottom: 100px;\n}\n}\n@media (min-width: 1440px) {\n.product-page[data-v-7b8d5cc0] {\n    margin: 140px 140px 0px 140px;\n}\n}\n.image-box[data-v-7b8d5cc0] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 33px;\n}\n.image-box .main-image[data-v-7b8d5cc0] {\n  width: 450px;\n}\n.image-box .image-items[data-v-7b8d5cc0] {\n  width: 88px;\n}\n.image-box .active-image-item[data-v-7b8d5cc0] {\n  width: 88px;\n  border-style: solid;\n  border-color: hsl(26, 100%, 55%);\n  opacity: 0.4;\n  border-width: 2px;\n}\n.image-box img[data-v-7b8d5cc0] {\n  border-radius: 10px;\n}\n.mobile-image-box[data-v-7b8d5cc0] {\n  width: 100%;\n  height: 300px;\n}\n.mobile-image-box .main-image[data-v-7b8d5cc0] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n}\n.mobile-image-box .mobile-button-right[data-v-7b8d5cc0] {\n  position: absolute;\n  cursor: pointer;\n  transform: translate(-60px, 180px);\n  width: 40px;\n  height: 40px;\n  padding-inline: 0px;\n  border-radius: 50%;\n  z-index: 1;\n  border: none;\n  opacity: 0.9;\n}\n.mobile-image-box .mobile-button-left[data-v-7b8d5cc0] {\n  position: absolute;\n  cursor: pointer;\n  transform: translate(20px, 180px);\n  width: 40px;\n  height: 40px;\n  padding-inline: 0px;\n  border-radius: 50%;\n  z-index: 1;\n  border: none;\n  opacity: 0.9;\n}\n.sneaker-company[data-v-7b8d5cc0] {\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: hsl(26, 100%, 55%);\n  font-weight: bold;\n}\n.product-contents h1[data-v-7b8d5cc0] {\n  font-weight: bold;\n}\n@media (min-width: 375px) {\n.product-contents[data-v-7b8d5cc0] {\n    margin-top: 25px;\n    padding: 0px 30px;\n}\n}\n@media (min-width: 1440px) {\n.product-contents[data-v-7b8d5cc0] {\n    margin-top: 45px;\n    padding-left: 65px;\n}\n}\n.product-description[data-v-7b8d5cc0] {\n  opacity: 0.5;\n  font-weight: light;\n}\n@media (min-width: 375px) {\n.product-description[data-v-7b8d5cc0] {\n    margin: 12px 0px 20px 0px;\n}\n}\n@media (min-width: 1440px) {\n.product-description[data-v-7b8d5cc0] {\n    margin-top: 40px;\n    margin-bottom: 30px;\n}\n}\n@media (min-width: 375px) {\n.product-prices[data-v-7b8d5cc0] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n}\n}\n.product-prices-discount[data-v-7b8d5cc0] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.product-prices-discount h2[data-v-7b8d5cc0] {\n  margin: 0;\n  font-weight: bold;\n}\n.product-prices-discount span[data-v-7b8d5cc0] {\n  color: hsl(26, 100%, 55%);\n  background: hsl(25, 100%, 94%);\n  padding: 4px 8px;\n  border-radius: 5px;\n  margin-left: 12px;\n  font-weight: bold;\n}\n.product-prices-full[data-v-7b8d5cc0] {\n  color: hsl(220, 14%, 75%);\n  text-decoration: line-through;\n}\n.product-cart-control[data-v-7b8d5cc0] {\n  margin-top: 20px;\n  /* justify-content: space-between; */\n}\n.product-cart-control button[data-v-7b8d5cc0] {\n  border: none;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  font-weight: bold;\n}\n@media (min-width: 375px) {\n.product-cart-control[data-v-7b8d5cc0] {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n}\n}\n@media (min-width: 1440px) {\n.product-cart-control[data-v-7b8d5cc0] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n}\n}\n.product-cart-num[data-v-7b8d5cc0] {\n  background: hsl(223, 64%, 98%);\n  padding: 10px 15px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (min-width: 375px) {\n.product-cart-num[data-v-7b8d5cc0] {\n    width: 100%;\n}\n}\n@media (min-width: 1440px) {\n.product-cart-num[data-v-7b8d5cc0] {\n    width: 155px;\n    margin-right: 15px;\n}\n}\n.product-cart-num button[data-v-7b8d5cc0] {\n  color: hsl(26, 100%, 55%);\n  background: hsl(223, 64%, 98%);\n  font-weight: bold;\n  font-size: 22px;\n  padding: 0px 10px;\n}\n.product-cart-num span[data-v-7b8d5cc0] {\n  font-weight: bold;\n}\n.product-cart-addto[data-v-7b8d5cc0] {\n  justify-content: center;\n  background: hsl(26, 100%, 55%);\n  color: hsl(0, 0%, 100%);\n  border-radius: 10px;\n  padding: 15px 0px;\n  box-shadow: 0px 20px 50px hsla(26, 100%, 55%, 0.5);\n  font-weight: bold;\n}\n@media (min-width: 375px) {\n.product-cart-addto[data-v-7b8d5cc0] {\n    width: 100%;\n}\n}\n@media (min-width: 1440px) {\n.product-cart-addto[data-v-7b8d5cc0] {\n    flex: 1;\n    width: 300px;\n}\n}\n.product-cart-addto svg[data-v-7b8d5cc0] {\n  margin-right: 20px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0&scoped=true */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true");
/* harmony import */ var _Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js */ "./resources/js/views/Product.vue?vue&type=script&lang=js");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss */ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-7b8d5cc0"],['__file',"resources/js/views/Product.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_template_id_7b8d5cc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=template&id=7b8d5cc0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&scoped=true");


/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=scss");


/***/ })

}]);