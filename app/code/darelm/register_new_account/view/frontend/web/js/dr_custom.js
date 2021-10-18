define([
    "jquery",
    "jquery/ui",
    'mage/validation'
], function($) {
    "use strict";
    console.log('vky_custom.js is loaded!!');
        //creating jquery widget
        $.widget('vky_custom.js', {
            _create: function() {
                this._bind();
            },

            /**
             * Event binding, will monitor change, keyup and paste events.
             * @private
             */
            _bind: function () {
                this._on(this.element, {
                    'change': this.validateField,
                    'keyup': this.validateField,
                    'paste': this.validateField,
                    'click': this.validateField,
                    'focusout': this.validateField,
                    'focusin': this.validateField,
                });
            },

            validateField: function () {
                console.log(this.element);
                $.validator.validateSingleElement(this.element);
            },

        });

    return $.vky_custom.js;
});