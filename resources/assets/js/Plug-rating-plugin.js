/**
 * jQuery Bar Rating Plugin v1.1.4
 *
 * http://github.com/antennaio/jquery-bar-rating
 *
 * Copyright (c) 2012-2015 Kazik Pietruszewski
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // browser globals
        factory(jQuery);
    }
}(function ($) {

    var BarRating = (function() {

        function BarRating() {
            var self = this;

            // wrap element in a wrapper div
            var wrapElement = function() {
                var classes = [self.options.wrapperClass];

                if (self.options.theme !== '') {
                    classes.push('br-theme-' + self.options.theme);
                }
                
                self.$elem.wrap($('<div />', {
                    'class': classes.join(' ')
                }));
            };

            // unwrap element
            var unwrapElement = function() {
                self.$elem.unwrap();
            };

            // return initial option
            var findInitialOption = function() {
                var option;

                if (self.options.initialRating) {
                    option = $('option[value="' + self.options.initialRating  + '"]', self.$elem);
                } else {
                    option = $('option:selected', self.$elem);
                }

                return option;
            };

            // get data
            var getData = function(key) {
                var data = self.$elem.data('barrating');

                if (typeof key !== 'undefined') {
                    return data[key];
                }

                return data;
            };

            // set data
            var setData = function(key, value) {
                if (value !== null && typeof value === 'object') {
                    self.$elem.data('barrating', value);
                } else {
                    self.$elem.data('barrating')[key] = value;
                }
            };

            // save data on element
            var saveDataOnElement = function() {
                var $opt = findInitialOption();

                setData(null, {
                    userOptions: self.options,

                    // initial rating based on the OPTION value
                    ratingValue: $opt.val(),
                    ratingText: ($opt.data('html')) ? $opt.data('html') : $opt.text(),

                    // rating will be restored by calling clear method
                    originalRatingValue: $opt.val(),
                    originalRatingText: ($opt.data('html')) ? $opt.data('html') : $opt.text(),

                    // read-only state
                    readOnly: self.options.readonly,

                    // first OPTION empty - allow deselecting of ratings
                    deselectable: (!self.$elem.find('option:first').val()) ? true : false
                });
            };

            // remove data on element
            var removeDataOnElement = function() {
                self.$elem.removeData('barrating');
            };

            // return current rating text
            var ratingText = function() {
                return getData('ratingText');
            };

            // return current rating value
            var ratingValue = function() {
                return getData('ratingValue');
            };

            // build widget and return jQuery element
            var buildWidget = function() {
                var $w = $('<div />', { 'class': 'br-widget' });

                // create A elements that will replace OPTIONs
                self.$elem.find('option').each(function() {
                    var val, text, html, $a;

                    val = $(this).val();

                    // create ratings - but only if val is defined
                    if (val) {
                        text = $(this).text();
                        html = $(this).data('html');
                        if (html) { text = html; }

                        $a = $('<a />', {
                            'href': '#',
                            'data-rating-value': val,
                            'data-rating-text': text,
                            'html': (self.options.showValues) ? text : ''
                        });

                        $w.append($a);
                    }

                });

                // append .br-current-rating div to the widget
                if (self.options.showSelectedRating) {
                    $w.append($('<div />', { 'text': '', 'class': 'br-current-rating' }));
                }

                // additional classes for the widget
                if (self.options.reverse) {
                    $w.addClass('br-reverse');
                }

                if (self.options.readonly) {
                    $w.addClass('br-readonly');
                }

                return $w;
            };

            // return a jQuery function name depending on the 'reverse' setting
            var nextAllorPreviousAll = function() {
                if (getData('userOptions').reverse) {
                    return 'nextAll';
                } else {
                    return 'prevAll';
                }
            };

            // set the value of the select field
            var setSelectFieldValue = function(value) {
                // change selected OPTION in the select field (hidden)
                self.$elem.find('option[value="' + value + '"]').prop('selected', true);
                self.$elem.change();
            };

            // display the currently selected rating
            var showSelectedRating = function(text) {
                // text undefined?
                text = text ? text : ratingText();

                // update .br-current-rating div
                if (self.options.showSelectedRating) {
                    self.$elem.parent().find('.br-current-rating').text(text);
                }
            };

            // apply style by setting classes on elements
            var applyStyle = function() {
                // remove classes
                self.$widget.find('a').removeClass('br-selected br-current');

                // add classes
                self.$widget.find('a[data-rating-value="' + ratingValue() + '"]')
                    .addClass('br-selected br-current')[nextAllorPreviousAll()]()
                    .addClass('br-selected');
            };

            // check if the element is deselectable?
            var isDeselectable = function($element) {
                return ($element.hasClass('br-current') && getData('deselectable'));
            };

            // handle click events
            var attachClickHandler = function($elements) {
                $elements.on('click.barrating', function(event) {
                    var $a = $(this),
                        options = getData('userOptions'),
                        value,
                        text;

                    event.preventDefault();

                    $elements.removeClass('br-active br-selected');
                    $a.addClass('br-selected')[nextAllorPreviousAll()]()
                        .addClass('br-selected');

                    value = $a.attr('data-rating-value');
                    text = $a.attr('data-rating-text');

                    // is current and deselectable?
                    if (isDeselectable($a)) {
                        $a.removeClass('br-selected br-current')[nextAllorPreviousAll()]()
                            .removeClass('br-selected br-current');
                        value = ''; text = '';
                    } else {
                        $elements.removeClass('br-current');
                        $a.addClass('br-current');
                    }

                    // remember selected rating
                    setData('ratingValue', value);
                    setData('ratingText', text);

                    setSelectFieldValue(value);
                    showSelectedRating(text);

                    // onSelect callback
                    options.onSelect.call(
                        self,
                        ratingValue(),
                        ratingText(),
                        event
                    );

                    return false;
                });
            };

            // handle mouseenter events
            var attachMouseEnterHandler = function($elements) {
                $elements.on('mouseenter.barrating focus.barrating', function() {
                    var $a = $(this);

                    $elements.removeClass('br-active br-selected');
                    $a.addClass('br-active')[nextAllorPreviousAll()]()
                        .addClass('br-active');

                    showSelectedRating($a.attr('data-rating-text'));
                });
            };

            // handle mouseleave events
            var attachMouseLeaveHandler = function($elements) {
                self.$widget.on('mouseleave.barrating blur.barrating', function() {
                    $elements.removeClass('br-active');
                    showSelectedRating();
                    applyStyle();
                });
            };

            // somewhat primitive way to remove 300ms click delay on touch devices
            // for a more advanced solution consider setting `fastClicks` option to false
            // and using a library such as fastclick (https://github.com/ftlabs/fastclick)
            var fastClicks = function($elements) {
                $elements.on('touchstart.barrating', function(event) {
                    event.preventDefault();
                    event.stopPropagation();

                    $(this).click();
                });
            };

            // disable clicks
            var disableClicks = function($elements) {
                $elements.on('click.barrating', function(event) {
                    event.preventDefault();
                });
            };

            var attachHandlers = function($elements) {
                // attach click event handler
                attachClickHandler($elements);

                if (self.options.hoverState) {
                    // attach mouseenter event handler
                    attachMouseEnterHandler($elements);

                    // attach mouseleave event handler
                    attachMouseLeaveHandler($elements);
                }
            };

            var detachHandlers = function($elements) {
                // remove event handlers in the ".barrating" namespace
                $elements.off('.barrating');
            };

            var setupHandlers = function(readonly) {
                $elements = self.$widget.find('a');

                if (fastClicks) {
                    fastClicks($elements);
                }

                if (readonly) {
                    detachHandlers($elements);
                    disableClicks($elements);
                } else {
                    attachHandlers($elements);
                }
            };

            this.show = function() {
                // run only once
                if (getData()) return;

                // wrap element
                wrapElement();

                // save data
                saveDataOnElement();

                // build & append widget to the DOM
                self.$widget = buildWidget();
                self.$widget.insertAfter(self.$elem);

                applyStyle();

                showSelectedRating();

                setupHandlers(self.options.readonly);

                // hide the select field
                self.$elem.hide();
            };

            this.readonly = function(state) {
                if (typeof state !== 'boolean' || getData('readOnly') == state) return;

                setupHandlers(state);
                setData('readOnly', state);
                self.$widget.toggleClass('br-readonly');
            };

            this.set = function(value) {
                var options = getData('userOptions');

                if (!self.$elem.find('option[value="' + value + '"]').val()) return;

                // set data
                setData('ratingValue', value);
                setData('ratingText', self.$elem.find('option[value="' + value + '"]').text());

                setSelectFieldValue(ratingValue());
                showSelectedRating(ratingText());

                applyStyle();

                // onSelect callback
                if (!options.silent) {
                    options.onSelect.call(
                        this,
                        ratingValue(),
                        ratingText()
                    );
                }
            };

            this.clear = function() {
                var options = getData('userOptions');

                // restore original data
                setData('ratingValue', getData('originalRatingValue'));
                setData('ratingText', getData('originalRatingText'));

                setSelectFieldValue(ratingValue());
                showSelectedRating(ratingText());

                applyStyle();

                // onClear callback
                options.onClear.call(
                    this,
                    ratingValue(),
                    ratingText()
                );
            };

            this.destroy = function() {
                var value = ratingValue();
                var text = ratingText();
                var options = getData('userOptions');

                // detach handlers
                detachHandlers(self.$widget.find('a'));

                // remove widget
                self.$widget.remove();

                // remove data
                removeDataOnElement();

                // unwrap the element
                unwrapElement();

                // show the element
                self.$elem.show();

                // onDestroy callback
                options.onDestroy.call(
                    this,
                    value,
                    text
                );
            };
        }

        BarRating.prototype.init = function (options, elem) {
            this.$elem = $(elem);
            this.options = $.extend({}, $.fn.barrating.defaults, options);

            return this.options;
        };

        return BarRating;
    })();

    $.fn.barrating = function (method, options) {
        return this.each(function () {
            var plugin = new BarRating();

            // plugin works with select fields
            if (!$(this).is('select')) {
                $.error('Sorry, this plugin only works with select fields.');
            }

            // method supplied
            if (plugin.hasOwnProperty(method)) {
                plugin.init(options, this);
                if (method === 'show') {
                    return plugin.show(options);
                } else {
                    // plugin exists?
                    if (plugin.$elem.data('barrating')) {
                        plugin.$widget = $(this).next('.br-widget');
                        return plugin[method](options);
                    }
                }

            // no method supplied or only options supplied
            } else if (typeof method === 'object' || !method) {
                options = method;
                plugin.init(options, this);
                return plugin.show();

            } else {
                $.error('Method ' + method + ' does not exist on jQuery.barrating');
            }
        });
    };

    $.fn.barrating.defaults = {
        theme:'',
        initialRating:null, // initial rating
        showValues:false, // display rating values on the bars?
        showSelectedRating:true, // append a div with a rating to the widget?
        reverse:false, // reverse the rating?
        readonly:false, // make the rating ready-only?
        fastClicks:true, // remove 300ms click delay on touch devices?
        hoverState:true, // change state on hover?
        silent:false, // supress callbacks when controlling ratings programatically
        wrapperClass:'br-wrapper', // class applied to wrapper div
        onSelect:function (value, text, event) {
        }, // callback fired when a rating is selected
        onClear:function (value, text) {
        }, // callback fired when a rating is cleared
        onDestroy:function (value, text) {
        } // callback fired when a widget is destroyed
    };

    $.fn.barrating.BarRating = BarRating;

}));


// bootstrap-rating - v1.3.2 - (c) 2016 dreyescat 
// https://github.com/dreyescat/bootstrap-rating MIT

(function ($, undefined) {
  'use strict';

  var OFFSET = 5;

  function Rating(element, options) {
    this.$input = $(element);
    this.$rating = $('<span></span>').css({
      cursor: 'default'
    }).insertBefore(this.$input);
    // Merge data and parameter options.
    // Those provided as parameter prevail over the data ones.
    this.options = (function (opts) {
      // Sanitize start, stop, step, and fractions.
      // All of them start, stop, and step must be integers.
      opts.start = parseInt(opts.start, 10);
      opts.start = isNaN(opts.start) ? undefined : opts.start;
      // In case we don't have a valid stop rate try to get a reasonable
      // one based on the existence of a valid start rate.
      opts.stop = parseInt(opts.stop, 10);
      opts.stop = isNaN(opts.stop) ?
        opts.start + OFFSET || undefined : opts.stop;
      // 0 step is ignored.
      opts.step = parseInt(opts.step, 10) || undefined;
      // Symbol fractions and scale (number of significant digits).
      // 0 is ignored and negative numbers are turned to positive.
      opts.fractions = Math.abs(parseInt(opts.fractions, 10)) || undefined;
      opts.scale = Math.abs(parseInt(opts.scale, 10)) || undefined;

      // Extend/Override the default options with those provided either as
      // data attributes or function parameters.
      opts = $.extend({}, $.fn.rating.defaults, opts);
      // Inherit default filled if none is defined for the selected symbol.
      opts.filledSelected = opts.filledSelected || opts.filled;
      return opts;
    }($.extend({}, this.$input.data(), options)));

    this._init();
  };

  Rating.prototype = {
    _init: function () {
      var rating = this,
          $input = this.$input,
          $rating = this.$rating;

      var ifEnabled = function (f) {
        return function (e) {
          // According to the W3C attribute readonly is not allowed on input
          // elements with type hidden.
          // Keep readonly prop for legacy but its use should be deprecated.
          if (!$input.prop('disabled') && !$input.prop('readonly') &&
              $input.data('readonly') === undefined) {
            f.call(this, e);
          }
        }
      };

      // Build the rating control.
      for (var i = 1; i <= this._rateToIndex(this.options.stop); i++) {
        // Create the rating symbol container.
        var $symbol = $('<div class="rating-symbol"></div>').css({
            display: 'inline-block',
            position: 'relative'
        });
        // Add background symbol to the symbol container.
        $('<div class="rating-symbol-background ' + this.options.empty + '"></div>')
          .appendTo($symbol);
        // Add foreground symbol to the symbol container.
        // The filled icon is wrapped with a div to allow fractional selection.
        $('<div class="rating-symbol-foreground"></div>')
          .append('<span></span>')
          .css({
            display: 'inline-block',
            position: 'absolute',
            overflow: 'hidden',
            left: 0,
            // Overspecify right and left to 0 and let the container direction
            // decide which one is going to take precedence according to the
            // ltr/rtl direction.
            // (https://developer.mozilla.org/en-US/docs/Web/CSS/right)
            // When both the right CSS property and the left CSS property are
            // defined, the position of the element is overspecified. In that
            // case, the left value has precedence when the container is
            // left-to-right (that is that the right computed value is set to
            // -left), and the right value has precedence when the container is
            // right-to-left (that is that the left computed value is set to
            // -right).
            right: 0,
            width: 0
          }).appendTo($symbol);
        $rating.append($symbol);
        this.options.extendSymbol.call($symbol, this._indexToRate(i));
      }
      // Initialize the rating control with the associated input value rate.
      this._updateRate($input.val());

      // Keep rating control and its associated input in sync.
      $input
        .on('change', function () {
          rating._updateRate($(this).val());
        });

      var fractionalIndex = function (e) {
        var $symbol = $(e.currentTarget);
        // Calculate the distance from the mouse pointer to the origin of the
        // symbol. We need to be careful with the CSS direction. If we are
        // right-to-left then the symbol starts at the right. So we have to add
        // the symbol width to the left offset to get the CSS rigth position.
        var x = Math.abs((e.pageX || e.originalEvent.touches[0].pageX) -
          (($symbol.css('direction') === 'rtl' && $symbol.width()) +
          $symbol.offset().left));

        // NOTE: When the mouse pointer is close to the left side of the symbol
        // a negative x is returned. Probably some precision error in the
        // calculation.
        // x should never be less than 0 because this would mean that we are in
        // the previous symbol.
        x = x > 0 ? x : rating.options.scale * 0.1;
        return $symbol.index() + x / $symbol.width();
      };
      // Keep the current highlighted index (fractional or not).
      var index;
      $rating
        .on('mousedown touchstart', '.rating-symbol', ifEnabled(function (e) {
          // Set input 'trigger' the change event.
          $input.val(rating._indexToRate(fractionalIndex(e))).change();
        }))
        .on('mousemove touchmove', '.rating-symbol', ifEnabled(function (e) {
          var current = rating._roundToFraction(fractionalIndex(e));
          if (current !== index) {
            // Trigger pseudo rate leave event if the mouse pointer is not
            // leaving from another symbol (mouseleave).
            if (index !== undefined) $(this).trigger('rating.rateleave');
            // Update index and trigger rate enter event.
            index = current;
            $(this).trigger('rating.rateenter', [rating._indexToRate(index)]);
          }
          // Fill the symbols as fractions chunks.
          rating._fillUntil(current);
        }))
        .on('mouseleave touchend', '.rating-symbol', ifEnabled(function () {
          // When a symbol is left, reset index and trigger rate leave event.
          index = undefined;
          $(this).trigger('rating.rateleave');
          // Restore on hover out.
          rating._fillUntil(rating._rateToIndex(parseFloat($input.val())));
        }));

    },
    // Fill rating symbols until index.
    _fillUntil: function (index) {
      var $rating = this.$rating;
      // Get the index of the last whole symbol.
      var i = Math.floor(index);
      // Hide completely hidden symbols background.
      $rating.find('.rating-symbol-background')
        .css('visibility', 'visible')
        .slice(0, i).css('visibility', 'hidden');
      var $rates = $rating.find('.rating-symbol-foreground');
      // Reset foreground
      $rates.width(0);
      // Fill all the foreground symbols up to the selected one.
      $rates.slice(0, i).width('auto')
        .find('span').attr('class', this.options.filled);
      // Amend selected symbol.
      $rates.eq(index % 1 ? i : i - 1)
        .find('span').attr('class', this.options.filledSelected);
      // Partially fill the fractional one.
      $rates.eq(i).width(index % 1 * 100 + '%');
    },
    // Calculate the rate of an index according the the start and step.
    _indexToRate: function (index) {
      return this.options.start + Math.floor(index) * this.options.step +
        this.options.step * this._roundToFraction(index % 1);
    },
    // Calculate the corresponding index for a rate.
    _rateToIndex: function (rate) {
      return (rate - this.options.start) / this.options.step;
    },
    // Round index to the configured opts.fractions.
    _roundToFraction: function (index) {
      // Get the closest top fraction.
      var fraction = Math.ceil(index % 1 * this.options.fractions) / this.options.fractions;
      // Truncate decimal trying to avoid float precission issues.
      var p = Math.pow(10, this.options.scale);
      return Math.floor(index) + Math.floor(fraction * p) / p;
    },
    // Check the rate is in the proper range [start..stop].
    _contains: function (rate) {
      var start = this.options.step > 0 ? this.options.start : this.options.stop;
      var stop = this.options.step > 0 ? this.options.stop : this.options.start;
      return start <= rate && rate <= stop;
    },
    // Update empty and filled rating symbols according to a rate.
    _updateRate: function (rate) {
      var value = parseFloat(rate);
      if (this._contains(value)) {
        this._fillUntil(this._rateToIndex(value));
        this.$input.val(value);
      }
    },
    rate: function (value) {
      if (value === undefined) {
        return this.$input.val();
      }
      this._updateRate(value);
    }
  };

  $.fn.rating = function (options) {
    var args = Array.prototype.slice.call(arguments, 1),
        result;
    this.each(function () {
      var $input = $(this);
      var rating = $input.data('rating');
      if (!rating) {
        $input.data('rating', (rating = new Rating(this, options)));
      }
      // Underscore are used for private methods.
      if (typeof options === 'string' && options[0] !== '_') {
        result = rating[options].apply(rating, args);
      }
    });
    return result || this;
  };

  // Plugin defaults.
  $.fn.rating.defaults = {
    filled: '',
    filledSelected: undefined,
    empty: '',
    start: 0,
    stop: OFFSET,
    step: 1,
    fractions: 1,
    scale: 3,
    extendSymbol: function (rate) {},
  };

  $(function () {
    $('input.rating').rating();
  });
}(jQuery));