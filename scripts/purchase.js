(function (window) {
  "use strict";
  var FORM_SELECTOR = '[data-purchase-info="form"]';
  var App = window.App;
  var FormHandler = App.FormHandler;
  var $ = window.jQuery;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    $("#confirm-modal").text(
      "Thank you for your payment " + data.title + " " + data.username + '!'
    );
    $("#confirm-modal").modal();
  });
})(window);
