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
  name: "ProductPage",
  data: function data() {
    return {
      product: null,
      currentImageIndex: 0,
      productNum: 0,
      cart: null
      // [{
      //     id:,
      //     name:,
      //     amount:,
      // }]
    };
  },

  methods: {
    getProductData: function getProductData() {
      var _this = this;
      var token = "1|JCRl9gmSCVArcFXMEVFlRHJaK5QwX5N9XnsVkRG4";
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/products/1", {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(function (response) {
        console.log(response);
        _this.product = response.data;
      })["catch"](function (error) {
        console.error(error);
        if (error.response && error.response.status === 404) {
          _this.$router.push({
            name: "404page"
          }); // Redirect to the 404 route
        }
      });
    },
    addToCart: function addToCart() {
      console.log("Product added to cart:", this.product);
    }
  },
  created: function created() {
    this.getProductData();
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
  "class": "product-page-temp container"
};
var _hoisted_2 = {
  key: 0,
  "class": "product-page row"
};
var _hoisted_3 = {
  "class": "product-images col-xs-12 col-sm-6"
};
var _hoisted_4 = {
  id: "product-carousel",
  "class": "carousel slide"
};
var _hoisted_5 = {
  "class": "carousel-inner"
};
var _hoisted_6 = ["src", "alt"];
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#product-carousel\" data-bs-slide=\"prev\" data-v-7b8d5cc0><div data-v-7b8d5cc0><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\" data-v-7b8d5cc0></span><span class=\"visually-hidden\" data-v-7b8d5cc0>Previous</span></div></button><button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#product-carousel\" data-bs-slide=\"next\" data-v-7b8d5cc0><span class=\"carousel-control-next-icon\" aria-hidden=\"true\" data-v-7b8d5cc0></span><span class=\"visually-hidden\" data-v-7b8d5cc0>Next</span></button>", 2);
var _hoisted_9 = {
  "class": "ProductThumbnails row"
};
var _hoisted_10 = ["onClick", "alt"];
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "product-contents col-xs-12 col-sm-6"
};
var _hoisted_13 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "product-company"
  }, "SNEAKER COMPANY", -1 /* HOISTED */);
});
var _hoisted_14 = {
  "class": "product-name"
};
var _hoisted_15 = {
  "class": "product-description"
};
var _hoisted_16 = {
  "class": "product-prices"
};
var _hoisted_17 = {
  "class": "product-prices-discount"
};
var _hoisted_18 = {
  "class": "product-prices-full"
};
var _hoisted_19 = {
  "class": "product-cart-control"
};
var _hoisted_20 = {
  "class": "product-cart-num"
};
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
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
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add to Cart ");
var _hoisted_23 = [_hoisted_21, _hoisted_22];
var _hoisted_24 = {
  key: 1,
  "class": "loading"
};
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "spinner-border m-5",
    role: "status"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "visually-hidden"
  }, " Loading product details..")], -1 /* HOISTED */);
});
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Loading product details.. ");
var _hoisted_27 = [_hoisted_25, _hoisted_26];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.product ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.images, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
        'carousel-item': true,
        active: index === $data.currentImageIndex
      })
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: image,
      "class": "product-image d-block w-100",
      alt: 'Product Image ' + (index + 1)
    }, null, 8 /* PROPS */, _hoisted_6)], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.product.images, function (image, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-3",
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'active-thumbnail': index === $data.currentImageIndex
      }, "thumbnail-wrap"]),
      onClick: function onClick($event) {
        return $data.currentImageIndex = index;
      },
      alt: 'ProductThumbnailImage ' + (index + 1)
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: image,
      "class": "img-fluid ProductThumbnail"
    }, null, 8 /* PROPS */, _hoisted_11)], 10 /* CLASS, PROPS */, _hoisted_10)]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.description), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "$" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.price.discounted), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.discount.amount) + "%", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, " $" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.product.price.full), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.productNum > 0 ? $data.productNum-- : $data.productNum;
    })
  }, " - "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.productNum), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.productNum++;
    })
  }, "+")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "product-cart-addto",
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.addToCart && $options.addToCart.apply($options, arguments);
    })
  }, _hoisted_23)])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_24, _hoisted_27))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* * {\r\n    outline: 1px solid red;\r\n} */\n.product-page-temp[data-v-7b8d5cc0] {\n}\n.product-page[data-v-7b8d5cc0] {\r\n    display: flex;\r\n    /* flex-direction: column; */\r\n    /* justify-content: center; */\r\n    /* justify-content: space-evenly;\r\n    align-items: center; */\r\n    margin-top: 150px;\n}\n.product-images[data-v-7b8d5cc0] {\r\n    padding: 0px 40px;\n}\n.product-contents[data-v-7b8d5cc0] {\r\n    padding: 0px 40px;\n}\n.product-image[data-v-7b8d5cc0] {\r\n    border-radius: 10%;\n}\n.ProductThumbnails[data-v-7b8d5cc0] {\r\n    margin-top: 25px;\n}\n.ProductThumbnail[data-v-7b8d5cc0] {\r\n    border-radius: 10%;\n}\n.thumbnail-wrap[data-v-7b8d5cc0] {\r\n    border: 3px solid transparent;\r\n    display: block;\n}\n.active-thumbnail[data-v-7b8d5cc0] {\r\n    border: 3px solid hsl(26, 100%, 55%);\r\n    border-radius: 10%;\n}\n.active-thumbnail img[data-v-7b8d5cc0] {\r\n    opacity: 0.5;\n}\n.product-contents[data-v-7b8d5cc0] {\r\n    margin-top: 40px;\n}\n.product-company[data-v-7b8d5cc0] {\r\n    display: none;\n}\n.product-name[data-v-7b8d5cc0] {\r\n    font-weight: bold;\n}\n.product-description[data-v-7b8d5cc0] {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: hsl(219, 9%, 45%);\r\n    font-size: 16px;\n}\n.product-prices-discount[data-v-7b8d5cc0] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    margin-bottom: 10px;\n}\n.product-prices-discount h2[data-v-7b8d5cc0] {\r\n    margin: 0;\r\n    font-weight: bold;\n}\n.product-prices-discount span[data-v-7b8d5cc0] {\r\n    color: hsl(26, 100%, 55%);\r\n    background: hsl(25, 100%, 94%);\r\n    padding: 0px 10px;\r\n    border-radius: 5px;\r\n    margin-left: 12px;\r\n    font-weight: bold;\n}\n.product-prices-full[data-v-7b8d5cc0] {\r\n    font-size: 16px;\r\n    color: hsl(220, 14%, 75%);\r\n    text-decoration: line-through;\n}\n.product-cart-control[data-v-7b8d5cc0] {\r\n    margin-top: 25px;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n    font-size: 16px;\n}\n.product-cart-control button[data-v-7b8d5cc0] {\r\n    /* background: none; */\r\n    /* color: inherit; */\r\n    border: none;\r\n    /* padding: 0; */\r\n    font: inherit;\r\n    cursor: pointer;\r\n    outline: inherit;\r\n    font-weight: bold;\n}\n.product-cart-num[data-v-7b8d5cc0] {\r\n    background: hsl(223, 64%, 98%);\r\n    padding: 10px 10px;\r\n    border-radius: 5px;\r\n    margin-right: 10px;\n}\n.product-cart-num button[data-v-7b8d5cc0] {\r\n    color: hsl(26, 100%, 55%);\r\n    background: hsl(223, 64%, 98%);\r\n    font-weight: bold;\r\n    font-size: 22px;\n}\n.product-cart-num span[data-v-7b8d5cc0] {\r\n    padding: 0px 30px;\r\n    font-weight: bold;\n}\n.product-cart-addto[data-v-7b8d5cc0] {\r\n    display: flex;\r\n    background: hsl(26, 100%, 55%);\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 15px 60px;\r\n    box-shadow: 0px 30px 40px hsla(26, 100%, 30%, 0.5);\r\n    font-weight: bold;\n}\n.product-cart-addto svg[data-v-7b8d5cc0] {\r\n    margin-right: 10px;\n}\n.carousel-control-prev[data-v-7b8d5cc0] {\r\n    display: none;\n}\n.carousel-control-next[data-v-7b8d5cc0] {\r\n    display: none;\n}\n.loading[data-v-7b8d5cc0] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\n}\n@media (max-width: 996px) {\n.product-contents[data-v-7b8d5cc0] {\r\n        padding: 0px 10px;\r\n        margin-top: 10px;\n}\n.product-images[data-v-7b8d5cc0] {\r\n        padding: 5px 10px;\n}\n.product-cart-addto[data-v-7b8d5cc0] {\r\n        padding: 15px 30px;\n}\n}\n@media (max-width: 768px) {\n.product-cart-control[data-v-7b8d5cc0] {\r\n        flex-direction: column;\n}\n.product-cart-num[data-v-7b8d5cc0] {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin-bottom: 10px;\r\n        margin-right: 0px;\n}\n}\n@media (max-width: 576px) {\n.carousel-control-prev[data-v-7b8d5cc0] {\r\n        display: flex;\n}\n.carousel-control-next[data-v-7b8d5cc0] {\r\n        display: flex;\n}\n.ProductThumbnails[data-v-7b8d5cc0] {\r\n        display: none;\n}\n.product-company[data-v-7b8d5cc0] {\r\n        display: block;\r\n        color: hsl(26, 100%, 55%);\r\n        font-weight: bold;\n}\n.product-page[data-v-7b8d5cc0] {\r\n        margin-top: 0px;\r\n        flex-direction: column;\n}\n.product-images[data-v-7b8d5cc0] {\r\n        padding: 0px 0px;\n}\n.product-image[data-v-7b8d5cc0] {\r\n        border-radius: 0;\n}\n.product-contents[data-v-7b8d5cc0] {\r\n        padding: 10px 30px;\n}\n.product-cart-num[data-v-7b8d5cc0] {\r\n        justify-content: space-between;\r\n        margin: 10px 0px;\r\n        padding: 7px 30px;\n}\n.product-cart-num button[data-v-7b8d5cc0] {\r\n        font-size: 32px;\n}\n.product-prices[data-v-7b8d5cc0] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\n}\n.product-cart-addto[data-v-7b8d5cc0] {\r\n        justify-content: center;\r\n        margin: 10px 0px;\r\n        padding: 20px 30px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");
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

/***/ "./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Product_vue_vue_type_style_index_0_id_7b8d5cc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Product.vue?vue&type=style&index=0&id=7b8d5cc0&scoped=true&lang=css");


/***/ })

}]);