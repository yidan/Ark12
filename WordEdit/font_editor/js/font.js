/*
 * jQuery UI Font Selector Widget
 *
 * Copyright 2012, Olav Andreas Lindekleiv (http://lindekleiv.com/)
 * Available under the BSD License
 * See the LICENSE file or http://opensource.org/licenses/BSD-3-Clause
 *
 * Available on BitBucket at
 * https://bitbucket.org/lindekleiv/jquery-ui-fontselector
 */

$.widget("oal.fontSelector", {
    options: {
        inSpeed: 500,
        outSpeed: 250,
        bold: false,
        italic: false,
        underline: false
    },
    _create: function() {
        var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = this;
        this.element.hide();
        d = [];
        i = this.element.children();
        for (e = 0, g = i.length; e < g; e++) {
            a = i[e];
            c = $(a).attr("value");
            if ($(a).attr("selected"))
                this.selected = c;
            d.push(c)
            }
        if (!this.selected)
            this.selected = d[0];
        this.dropdown = $('<div class="fontSelector ui-widget"><span class="handle">&#9660;</span></div>');
        this.list = $('<ul class="fonts"></ul>');
        for (f = 0, h = d.length; f < h; f++) {
            a = d[f];
            this.element.before("<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=" + a + ":400,700,400italic,700italic'></link>");
            b = $("<li style=\"font-family: '" + a + "'\">" + a + "</li>");
            b.data("font", a);
            if (a === this.selected) {
                b.addClass("selected");
                this.dropdown.prepend($("<h4 style=\"font-family: '" + a + "'\" class='selected handle'>" + a + "</h4>"))
                }
            this.list.append(b)
            }
        this.dropdown.append(this.list);
        this.element.after(this.dropdown);
        return $("div.fontSelector .handle").click(function() {
            return j._toggleOpen()
            })
        },
    _toggleOpen: function() {
        var a = this;
        if (this.list.is(":visible")) {
            this.dropdown.find("span.handle").html("&#9660;");
            return this.list.slideUp(this.options.outSpeed)
            } else {
            this.dropdown.find("span.handle").html("&#9650;");
            this.list.slideDown(this.options.inSpeed);
            return $("div.fontSelector ul.fonts li").click(function(b) {
                var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n;
                c = $(b.target).data("font");
                g = a.selected;
                if (c === g)
                    return false;
                a._trigger("fontChange", null, {
                    font: c,
                    oldFont: g
                });
                a.selected = c;
                $("div.fontSelector h4.selected").text(c).css({
                    fontFamily: c
                });
                l = a.list.children();
                for (h = 0, j = l.length; h < j; h++) {
                    d = l[h];
                    if ($(d).data("font") === c) {
                        $(d).addClass("selected")
                        } else if ($(d).data("font") === g) {
                        $(d).removeClass("selected")
                        }
                }
                m = a.element.children();
                n = [];
                for (i = 0, k = m.length; i < k; i++) {
                    f = m[i];
                    e = $(f).val();
                    if (e === c) {
                        n.push($(f).attr("selected", "selected"))
                        } else {
                        n.push(void 0)
                        }
                }
                return n
            })
            }
    },
    _setOption: function(a, b) {
        if (a === "bold" && (b === true || b === false)) {
            this.options.bold = b;
            if (b === true) {
                this.dropdown.find("h4.selected").css({
                    fontWeight: "bold"
                });
                this.list.css({
                    fontWeight: "bold"
                })
                } else {
                this.dropdown.find("h4.selected").css({
                    fontWeight: "normal"
                });
                this.list.css({
                    fontWeight: "normal"
                })
                }
        } else if (a === "italic" && (b === true || b === false)) {
            this.options.italic = b;
            if (b === true) {
                this.dropdown.find("h4.selected").css({
                    fontStyle: "italic"
                });
                this.list.css({
                    fontStyle: "italic"
                })
                } else {
                this.dropdown.find("h4.selected").css({
                    fontStyle: "normal"
                });
                this.list.css({
                    fontStyle: "normal"
                })
                }
        } else if (a === "underline" && (b === true || b === false)) {
            this.options.underline = b;
            if (b === true) {
                this.dropdown.find("h4.selected").css({
                    textDecoration: "underline"
                });
                this.list.css({
                    textDecoration: "underline"
                })
                } else {
                this.dropdown.find("h4.selected").css({
                    textDecoration: "none"
                });
                this.list.css({
                    textDecoration: "none"
                })
                }
        }
        if ((a === "bold" || a === "italic" || a === "underline") && (b === true || b === false)) {
            return this._trigger("styleChange", null, {
                style: a,
                value: b
            })
            }
    },
    destroy: function() {
        return Widget.prototype.destroy.call(this)
        }
})