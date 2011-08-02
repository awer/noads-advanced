// ==UserScript==
// @include http*
// @exclude opera:*
// @exclude about:*
// @exclude *://localhost*
// @exclude *://192.168.*
// @exclude *://0.0.0.0*
// @exclude *dragonfly.opera.com*
// @exclude *acid3.acidtests.org*
// @exclude *.futuremark.com*
// @exclude *v8.googlecode.com*
// ==/UserScript==

// styles for option pages
var optionsCSS = '.noads_overlay{visibility:visible;background-color:#e3e5e7;direction:ltr;display:block !important;font-family:"Lucida Grande", Tahoma, Arial, Verdana, sans-serif;font-size:14px;height:100%;left:0;overflow:auto;position:fixed;top:0;width:100%;z-index:1000000 !important;margin:0;padding:0;}\
.noads_win{display:block !important;background-color:#f3f4f5;border-radius:4px;box-shadow:0 0 12px rgba(0,0,0,.35);color:#000;height:auto;overflow:visible;width:95%;margin:5% auto;padding:5px;}\
.noads_close_window{background:-o-skin("Caption Close Button Skin");border:none;cursor:pointer;display:block !important;float:right;height:18px;width:18px;margin:0;padding:0;}\
.noads_menu{list-style:none;overflow:hidden;margin:0 0 -1px 2px;padding:2px 2px 0;}\
.noads_menu li{border:1px solid #aaa;border-bottom-color:#fafbfc;border-radius:4px 4px 0 0;color:#000;cursor:default;float:left;font-family:tahoma,sans-serif;font-size:14px;line-height:normal;list-style-position:outside;text-align:left;white-space:nowrap;margin:0 0 0 1px;padding:3px 9px;}\
.noads_content{background-color:#fafbfc;border:1px solid #aaa;border-radius:0 4px 4px 4px;display:block !important;height:95%;overflow:hidden;width:97%;margin:0 5px 5px;padding:5px;}\
.noads_content .inline{position:relative;display:inline-block;float:right;margin-top:-48px;margin-right:-10px;}\
.noads_content .inline-clean{position:relative;display:inline-block;margin-top:-28px;}\
.noads_content button{background-image:none !important;width:auto;height:auto;display:inline-block;float:left;background-color:#f5f5f5 !important;border:1px solid #dedede;border-top:1px solid #eee;border-left:1px solid #eee;font-family:"Lucida Grande", Tahoma, Arial, Verdana, sans-serif;font-size:100%;line-height:130%;text-decoration:none;text-transform:none;vertical-align:middle;font-weight:700;color:#565656;cursor:pointer !important;opacity:1;z-index:1000005 !important;margin:10px 10px 5px 0;padding:5px 10px 6px 7px;}\
.noads_content button.unchecked{opacity:0.5;}\
.noads_content button img{display: inline-block;border:none;width:16px;height:16px;margin:0 3px -3px 0 !important;padding:0;}\
.noads_content button:hover{background-color:#dff4ff;border:1px solid #c2e1ef;color:#369;}\
.noads_content button:disabled{background-color:#737373;border:1px solid #c2e1ef;color:#369;}\
.noads_content button.positive{color:#529214;}\
.noads_content button.positive:hover{background-color:#E6EFC2;border:1px solid #C6D880;color:#529214;}\
.noads_content button.negative{color:#d12f19;}\
.noads_content button.negative:hover{background:#fbe3e4;border:1px solid #fbc2c4;color:#d12f19;}\
.noads_content p{clear:both;text-align:left;padding-top:10px;margin:0;padding:0}\
.noads_area{padding: 0 15px 0 15px; margin:0; width:auto;}\
.noads_content textarea{box-sizing: border-box;position:relative;font:13px/20px "helvetica neue",arial,tahoma,sans-serif;border:1px solid;background:none;text-shadow:1px 1px 1px #666;box-shadow:none !important;color:#007;outline:none !important;width:100%;overflow:hidden;text-align:left;z-index:1000001 !important;border-color:#ccc #aaa #aaa #ccc;margin:0;padding:0 10px;}\
.noads_content .inline .right{position:relative;float:right;margin-right:22px;}\
.noads_content .overflow{overflow:auto;}\
.noads_content .strikethrough{text-decoration: line-through;}\
.noads_content .right{position:relative;float:right;margin-right:0px;}\
.noads_content .right-second{position:relative;float:right;margin-right:10px;}\
.noads_content input[type=radio]{border-radius:3px;border:1px solid rgba(80,80,130,0.5);background:#fff;box-shadow:0 1px 1px rgba(121,153,166,0.75),inset 0 1px rgba(255,255,255,0.25),inset 0 0 1px rgba(255,255,255,0.75);-o-transition:0.25s;height:14px;padding:2px;width:14px}\
.noads_label_subscription{display:block !important;font-size:14px;margin:2px 0;padding:2px 4px;}\
.noads_label a{color:#729fcf;display:inline !important;font-size:14px;text-decoration:underline;text-transform:none;margin:0;padding:0;}\
.noads_custom_url{font-size:10px;width:400px;margin:2px;}\
.noads_usercss_area{height:200px;width:100%;}\
.noads_allrules{margin:8px 0 2px 5px;}\
.noads_help{background-color:#fafbfc;border:none;box-sizing:border-box;color:#000;font-family:monospace;font-size:14px;height:auto;overflow:auto;white-space:pre-wrap;width:96%;margin:4px 0;padding:0 4px;}';

// images for buttons
var imageTick = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGrSURBVDjLvZPZLkNhFIV75zjvYm7VGFNCqoZUJ+roKUUpjRuqp61Wq0NKDMelGGqOxBSUIBKXWtWGZxAvobr8lWjChRgSF//dv9be+9trCwAI/vIE/26gXmviW5bqnb8yUK028qZjPfoPWEj4Ku5HBspgAz941IXZeze8N1bottSo8BTZviVWrEh546EO03EXpuJOdG63otJbjBKHkEp/Ml6yNYYzpuezWL4s5VMtT8acCMQcb5XL3eJE8VgBlR7BeMGW9Z4yT9y1CeyucuhdTGDxfftaBO7G4L+zg91UocxVmCiy51NpiP3n2treUPujL8xhOjYOzZYsQWANyRYlU4Y9Br6oHd5bDh0bCpSOixJiWx71YY09J5pM/WEbzFcDmHvwwBu2wnikg+lEj4mwBe5bC5h1OUqcwpdC60dxegRmR06TyjCF9G9z+qM2uCJmuMJmaNZaUrCSIi6X+jJIBBYtW5Cge7cd7sgoHDfDaAvKQGAlRZYc6ltJlMxX03UzlaRlBdQrzSCwksLRbOpHUSb7pcsnxCCwngvM2Rm/ugUCi84fycr4l2t8Bb6iqTxSCgNIAAAAAElFTkSuQmCC';
var imageCross = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIhSURBVDjLlZPrThNRFIWJicmJz6BWiYbIkYDEG0JbBiitDQgm0PuFXqSAtKXtpE2hNuoPTXwSnwtExd6w0pl2OtPlrphKLSXhx07OZM769qy19wwAGLhM1ddC184+d18QMzoq3lfsD3LZ7Y3XbE5DL6Atzuyilc5Ciyd7IHVfgNcDYTQ2tvDr5crn6uLSvX+Av2Lk36FFpSVENDe3OxDZu8apO5rROJDLo30+Nlvj5RnTlVNAKs1aCVFr7b4BPn6Cls21AWgEQlz2+Dl1h7IdA+i97A/geP65WhbmrnZZ0GIJpr6OqZqYAd5/gJpKox4Mg7pD2YoC2b0/54rJQuJZdm6Izcgma4TW1WZ0h+y8BfbyJMwBmSxkjw+VObNanp5h/adwGhaTXF4NWbLj9gEONyCmUZmd10pGgf1/vwcgOT3tUQE0DdicwIod2EmSbwsKE1P8QoDkcHPJ5YESjgBJkYQpIEZ2KEB51Y6y3ojvY+P8XEDN7uKS0w0ltA7QGCWHCxSWWpwyaCeLy0BkA7UXyyg8fIzDoWHeBaDN4tQdSvAVdU1Aok+nsNTipIEVnkywo/FHatVkBoIhnFisOBoZxcGtQd4B0GYJNZsDSiAEadUBCkstPtN3Avs2Msa+Dt9XfxoFSNYF/Bh9gP0bOqHLAm2WUF1YQskwrVFYPWkf3h1iXwbvqGfFPSGW9Eah8HSS9fuZDnS32f71m8KFY7xs/QZyu6TH2+2+FAAAAABJRU5ErkJggg==';
var imgRefresh = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI/SURBVDjLjZPbS9NhHMYH+zNidtCSQrqwQtY5y2QtT2QGrTZf13TkoYFlzsWa/tzcoR3cSc2xYUlGJfzAaIRltY0N12H5I+jaOxG8De+evhtdOP1hu3hv3sPzPO/z4SsBIPnfuvG8cbBlWiEVO5OUItA0VS8oxi9EdhXo+6yV3V3UGHRvVXHNfNv6zRfNuBZVoiFcB/3LdnQ8U+Gk+bhPVKB3qUOuf6/muaQR/qwDkZ9BRFdCmMr5EPz6BN7lMYylLGgNNaKqt3K0SKDnQ7us690t3rNsxeyvaUz+8OJpzo/QNzd8WTtcaQ7WlBmPvxhx1V2Pg7oDziIBimwwf3qAGWESkVwQ7owNujk1ztvk+cg4NnAUTT4FrrjqUKHdF9jxBfXr1rgjaSk4OlMcLrnOrJ7latxbL1V2lgvlbG9MtMTrMw1r1PImtfyn1n5q47TlBLf90n5NmalMtUdKZoyQMkLKlIGLjMyYhFpmlz3nGEVmFJlRZNaf7pIaEndM24XIjCOzjX9mm2S2JsqdkMYIqbB1j5C6yWzVk7YRFTsGFu7l+4nveExIA9aMCcOJh6DIoMigyOh+o4UryRWQOtIjaJtoziM1FD0mpE4uZcTc72gBaUyYKEI6khgqINXO3saR7kM8IZUVCRDS0Ucf+xFbCReQhr97MZ51wpWxYnhpCD3zOrT4lTisr+AJqVx0Fiiyr4/vhP4VyyMFIUWNqRrV96vWKXKckBoIqWzXYcoPDrUslDJoopuEVEpIB0sR+AuErIiZ6OqMKAAAAABJRU5ErkJggg==';
var imgSave = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAH+SURBVBgZBcE9i11VGAbQtc/sO0OCkqhghEREAwpWAWUg8aMVf4KFaJEqQtAipTZWViKiCGOh2Ap2gmJhlSIWFsFOxUK0EsUM3pl79n4f12qHb3z3Fh7D83gC95GOJsDe0ixLk5Qq/+xv/Lw9Xd+78/HLX3Y8fXTr2nWapy4eCFKxG7Fby97SnDlYtMbxthyfzHO//nl85fNvfvnk8MbX5xa8IHx1518Vkrj54Q+qQms2vVmWZjdiu5ZR2rT01166/NCZg/2PFjwSVMU6yjoC1oq+x6Y3VbHdlXWExPd379nf7Nmejv2Os6OC2O4KLK0RNn3RNCdr2Z5GJSpU4o+/TkhaJ30mEk5HwNuvX7Hpi76wzvjvtIwqVUSkyjqmpHS0mki8+9mPWmuWxqYvGkbFGCUAOH/+QevYI9GFSqmaHr5wkUYTAlGhqiRRiaqiNes6SOkwJwnQEqBRRRJEgkRLJGVdm6R0GLMQENE0EkmkSkQSVVMqopyuIaUTs0J455VLAAAAAODW0U/GiKT0pTWziEj44PZ1AAAAcPPqkTmH3QiJrlEVDXDt0qsAAAAAapa5BqUnyaw0Am7//gUAAAB49tEXzTmtM5KkV/y2G/X4M5fPao03n/sUAAAAwIX7y5yBv9vhjW/fT/IkuSp5gJKElKRISYoUiSRIyD1tufs/IXxui20QsKIAAAAASUVORK5CYII=';
var imgLoad = 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==';

var options = {
    stop: null,
    checkEnabled: function (name) { return getValue(name) != 'disabled'; },
    setEnabled: function (name, value) { setValue(name, !value ? 'disabled' : 'enabled'); },
    // subscriptions
    isCorrectDomain: function (domain, domains) {
        if (!domains) return true;
        var str, arr = domains.split(','), inDomain = false, exDomain = false, i;
        while (domain) {
            for (i = 0, l = arr.length; i < l; i++) {
                str = arr[i];
                if (str.charAt(0) != '~') { if (str == domain) { return true; } else { inDomain = true; } }
                else { if (str.slice(1) == domain) { return false; } else { exDomain = true; } }
            }
            domain = domain.slice(domain.indexOf('.') + 1 || domain.length);
        }
        arr = null;
        return !inDomain && exDomain;
    },
    getRules: function (name, domain) {
        var rule, pos, rez = [], tmp = getValue(name).split('\n');
        for (var i = 0, l = tmp.length; i < l; i++) {
            rule = tmp[i];
            pos = rule.indexOf('##');
            if (pos != -1 && this.isCorrectDomain(domain, rule.slice(0, pos))) rez.push(rule.slice(pos + 2));
        }
        tmp = null;
        return rez.join(',');
    },
    setRules: function (name, domain, selector) {
        var rule, pos, arr = [], rez = [], tmp = getValue(name).split('\n');
        var rules = splitCSS(selector);
        rules.posArr = function (arr) {
            var len = arr.length, j, i;
            if (len) for (i = 0, l = this.length - len + 1; i < l; i++) {
                for (j = 0; j < len; j++) {
                    if (arr[j] != this[i + j]) break;
                }
                if (j == len) return i;
            }
            return -1;
        };
        rules.delArr = function (arr) {
            var pos = this.posArr(arr);
            if (pos != -1) this.splice(pos, arr.length);
        };
        rules.getCorrected = function (arr) {
            var rule, pos, len, stArr, currPos, nextPos, rez = [], i;
            for (i = 0, l = arr.length - 1; i <= l; i++) {
                rule = arr[i];
                pos = rule.indexOf('##') + 2;
                if (i < l) {
                    stArr = splitCSS(rule.slice(pos));
                    currPos = this.posArr(stArr);
                    nextPos = this.posArr(splitCSS(arr[i + 1].slice(arr[i + 1].indexOf('##') + 2)));
                    len = currPos < nextPos ? nextPos : (currPos != -1 ? currPos + stArr.length : 0);
                }
                else {
                    len = this.length;
                }
                if (len) rez.push(rule.slice(0, pos) + this.splice(0, len).join(','));
            }
            return rez;
        };

        for (i = tmp.length; i--; ) {
            rule = tmp[i];
            pos = rule.indexOf('##');
            if (pos != -1 && this.isCorrectDomain(domain, rule.slice(0, pos))) {
                if (pos == 0) { rules.delArr(splitCSS(rule.slice(pos + 2))); } else { arr.unshift(rule); tmp.splice(i, 1); }
            }
        }
        switch (arr.length) {
            case 0: if (rules.length) tmp.unshift(domain + '##' + rules.join(',')); break;
            case 1: if (rules.length) tmp.unshift(arr[0].slice(0, arr[0].indexOf('##') + 2) + rules.join(',')); break;
            default: tmp = rules.getCorrected(arr).concat(tmp); break;
        }
        setValue(name, tmp.join('\n'));
        for (i = 0, l = tmp.length; i < l; i++) {
            rule = tmp[i];
            pos = rule.indexOf('##');
            if (pos != -1 && this.isCorrectDomain(domain, rule.slice(0, pos))) rez.push(rule.slice(pos + 2));
        }
        tmp = null;
        return rez.join(',');
    },
    getReScriptBlock: function (name) {
        var rule, pos, rez = [], tmp = getValue(name).split('\n');
        for (var i = 0, l = tmp.length; i < l; i++) {
            rule = tmp[i];
            pos = rule.indexOf('##$$');
            if (pos != -1 && this.isCorrectDomain(domain, rule.slice(0, pos))) rez.push(rule.slice(pos + 4));
        }
        tmp = null;
        return rez.length ? new RegExp(rez.join('|').replace(/\/|\.(?=\w)/g, '\\$&')) : false;
    },
    getRawRules: function (name, domain, global) {
        var rez = [], tmp = getValue(name).split('\n'), rule, i;
        if (!domain) {
            var whitelist = getValue(name + '_white').split('\n');
            for (i = 0, l = whitelist.length; i < l; i++) {
                if (whitelist[i].indexOf('@@') == 0) rez.push(whitelist[i]);
            }
        }
        for (i = 0, l = tmp.length; i < l; i++) {
            rule = tmp[i], pos = rule.indexOf('##');
            if (pos != -1) {
                if (global) { rez.push(rule); }
                else { if (options.isCorrectDomain(domain, rule.slice(0, pos))) rez.push(rule); }
            }
        }
        tmp = null;
        return rez.join('\n\n');
    },
    setRawRules: function (name, value, domain) {
        var rule, pos, rez = [], tmp = value.split('\n'), i;
        for (i = 0, l = tmp.length; i < l; i++) {
            rule = tmp[i];
            pos = rule.indexOf('##');
            if (pos != -1 && rule.length > pos + 2) rez.push(rule);
        }
        if (domain) {
            var tmp = getValue(name).split('\n');
            for (i = tmp.length; i--; ) {
                rule = tmp[i];
                pos = rule.indexOf('##');
                if (pos != -1 && options.isCorrectDomain(domain, rule.slice(0, pos))) tmp.splice(i, 1);
            }
            rez = rez.concat(tmp);
        }
        setValue(name, rez.join('\n'));
        rez = tmp = null;
    },
    getForSite: function (domain) { return this.isActiveDomain('noads_list_white', domain) || this.isActiveDomain('noads_userlist_white', domain) || this.isActiveDomain('noads_scriptlist_white', domain); },
    setForSite: function (domain, value) { this.setActiveDomain('noads_list_white', domain, value); this.setActiveDomain('noads_userlist_white', domain, value); this.setActiveDomain('noads_scriptlist_white', domain, value); },
    isWhiteListed: function (rule, domain) {
        var pos = rule.indexOf('$');
        if (pos != -1) rule = rule.slice(0, pos);
        var end = rule.charAt(rule.length - 1) == '^';
        if (end) rule = rule.slice(0, -1);
        pos = domain.indexOf(rule);
        return (pos == 0 || pos > 0 && domain.charAt(pos - 1) == '.') && (!end || pos + rule.length == domain.length);
    },
    setWhiteList: function (name, value) {
        var rule, rez = [], arr = value.split('\n');
        for (var i = 0, l = arr.length; i < l; i++) {
            rule = arr[i];
            if (rule.indexOf('@@') == 0 && rule.length > 4) rez.push(rule);
        }
        arr = null;
        setValue(name, rez.join('\n'));
    },
    // create default white list
    setDefWhiteList: function () {
        var whiteList = '~translate.google.com,~youtube.com,~metacafe.com,~lastfm.ru,~livegames.ru,~vkontakte.ru,~vk.com,~eurosport.ru,~imageshack.us,~britannica.com,~vimeo.com,~virustotal.com,~wikipedia.org,~newegg.com,~yahoo.com,~facebook.com,~deviantart.com,~hotmail.com,~picasaweb.google.com,~playset.ru,~molotok.ru,~megashare.by,~ya.ru,~acid3.acidtests.org,~mail.ru,~piter.fm,~kinozal.tv,~tvshack.net,~anonym.to,~twitter.com,~flickr.com,~myspace.com,~bbc.co.uk,~ebay.com,~opera.com,~imdb.com,~macromedia.com';
        var skipScripts = '^data:|^https?://[0-9a-z-]*.googleapis.com|^https?://translate.googleusercontent.com|^https?://[0-9a-z-]*.yahooapis.com|^http://yuilibrary.com|^https?://www.google.com/jsapi|^https?://maps.google.com|^https?://www.google.com/recaptcha|^http://[0-9a-z-]+.gstatic.com|^https?://[0-9a-z-]+.appspot.com|^https?://yui.yahooapis.com|^https?://script.aculo.us|^https?://api.bit.ly|^http://static.myopera.com|^http://ipinfodb.com|^http://fonts.gizmodo.com|^http://fastcache.gawkerassets.com|^https?://api.recaptcha.net|^http://rutube.ru|^https?://css.yandex.net|^https?://api-maps.yandex.ru|^https?://sstatic.net|^http://s\\d+.addthis.com/js|^https?://s\\d+.ucoz.net/src/u.js|^http://[0-9a-z-]+.imgsmail.ru|^https?://[0-9a-z-]+.hotmail.|^https?://[0-9a-z-]+.wlxrs.com|^https?://auth.tbn.ru|^https?://easylist-downloads.adblockplus.org/[a-z_+-]+.txt$|^https?://secure.fanboy.co.nz/[a-z_+-]+.txt$|swfobject.js$|yahoo-dom-event.js$|bundle_github.js$|show_afs_search.js$|chart.js$|ajax.js$|widgets.js$|common.js$|AC_RunActiveContent.js$|ext[0-9a-z.-]*.js$|yui[0-9a-z.-]*.js$|jquery[0-9a-z.-]*.js$';
        var rez = [], arr = whiteList.split(',');
        for (var i = 0, rule; rule = arr[i]; i++) {
            if (rule.charAt(0) == '~') rez.push('@@||' + rule.slice(1) + '^');
        }
        setValue('noads_scriptlist_white', rez.join('\n') + '\n@@==' + skipScripts);
        rez = null;
    },
    setActiveDomain: function (name, domain, value) {
        var rez = getValue(name).split('\n');
        if (value) {
            for (var i = rez.length; i--; ) {
                if (rez[i].indexOf('@@||') == 0) {
                    if (this.isWhiteListed(rez[i].slice(4), domain)) rez.splice(i, 1);
                }
            }
        }
        else { rez.unshift('@@||' + domain.replace(/^www\./, '') + '^'); }
        log('whitelisted ' + name + ' ' + JSON.stringify(rez));
        setValue(name, rez.join('\n'));
        rez = null;
    },
    isActiveDomain: function (name, domain, retRe) {
        //log('wtf is going on '+domain+' with '+name);
        var rule, rez = [], tmp = getValue(name).split('\n');
        for (var i = 0, l = tmp.length; i < l; i++) {
            rule = tmp[i];
            if (rule.indexOf('@@||') == 0) { if (this.isWhiteListed(rule.slice(4), domain)) return false; } // @@|| - direct domain, @@== - RegExp domain
            else if (retRe && rule.indexOf('@@==') == 0) rez.push(rule.slice(4));
        }
        //log((new RegExp(rez.join('|'))).toString());
        tmp = null;
        return retRe ? new RegExp((rez.join('|').replace(/\/|\.(?=[\w\d])/g, '\\$&') || '^$'), 'i') : true;
    },
    showPreferences: function (domain) {
        if (!document.body) return;
        var global = domain ? false : true;
        var press = function (e) { if (e.keyCode == 27) options.stop(global); };

        var overlay = document.getElementById('noads_overlay');
        if (overlay) { overlay.close(); return; }
        //window.scrollTo(0,0);

        if (this.stop) this.stop(global);
        overlay = document.createElement('div');
        
        // fix z-order if site is trying to be funny and uses z-index above 1000000
        if (!global) {
            var elements = (document.all) ? document.all : document.getElementsByTagName('*');
            for (var z = 0; z < elements.length; z++) {
                if (parseInt(window.getComputedStyle(elements[z], null).getPropertyValue('z-index'), 10) >= 1000000) 
                    elements[z].style.setProperty('z-index', '999999', null);
            }
        }
        
        overlay.className = 'noads_overlay';
        overlay.id = 'noads_overlay';
        //if(!global) overlay.clearStyle = addStyle(optionsCSS);
        //else  
        overlay.clearStyle = addStyle(optionsCSS + 'body{visibility: hidden; overflow: hidden;}');
        overlay.close = function (global) {
            if (!global) {
                run.updateCSS(domain);
                delEle(this.clearStyle);
                document.removeEventListener('keypress', press, false);
                run.stop = null;
                delEle(this);
            }
            else {
                window.opener = 'extension';
                window.close();
            }
        };
        this.stop = function (global) { overlay.close(global); };
        document.addEventListener('keypress', press, false);

        var lng = TRANSLATE();
        var win = document.createElement('div');
        win.className = 'noads_win';
        if (!global) win.style.marginTop = '4%';
        overlay.appendChild(win);
        var img = document.createElement('div');
        img.className = 'noads_close_window'
        img.title = lng.pClose;
        img.onclick = function () {
            if (global) {
                window.opener = 'extension';
                window.close();
            } else { this.parentNode.parentNode.close(); }
        };
        win.appendChild(img);
        win.createMenu = function () {
            var menu = document.createElement('ul'), list;
            menu.className = 'noads_menu';
            menu.id = 'noads_menu';
            for (var i = 0, item; item = arguments[i]; i++) {
                list = document.createElement('li');
                list.appendChild(document.createTextNode(item[0]));
                list.onclick = item[1];
                list.style.backgroundColor = (i === 0) ? '#fafbfc' : '#edeeef';
                list.style.borderBottomColor = (i === 0) ? '#fafbfc' : '#aaaaaa';
                menu.appendChild(list);
            }
            this.appendChild(menu);
        };
        var content = document.createElement('div');
        content.className = 'noads_content';
        var area = document.createElement('div');
        area.className = 'noads_area';
        area.clear = function (num) {
            while (this.firstChild) this.removeChild(this.firstChild);
            if (arguments.length) for (var i = 0, li = document.querySelectorAll('#noads_menu li'); i < li.length; i++) {
                li[i].style.backgroundColor = (i == num) ? '#fafbfc' : '#edeeef';
                li[i].style.borderBottomColor = (i == num) ? '#fafbfc' : '#aaaaaa';
            }
        };
        area.createButton = function (sID, sText, sClickFn, sClass, imgData){
            var button = document.createElement('button');
            button.type = 'button';
            button.id = sID;
            if (imgData) {
                var img = document.createElement('img');
                img.src = imgData;
                button.appendChild(img);
            }
            if (sClass) button.className = sClass;
            button.appendChild(document.createTextNode(sText));
            if (sClickFn) button.onclick = sClickFn;
            return button;
        };
        area.createCheckbox = function (sName, textEnabled, classEnabled, textDisabled, classDisabled, imgData, sClickFn) {
            var checkbox = document.createElement('button');
            checkbox.type = 'checkbox';
            checkbox.id = sName + '_toggle';
            if (imgData) {
                var img = document.createElement('img');
                img.src = imgData;
                checkbox.appendChild(img);
            }
            var enable, disable, changetext = false;
            if (textEnabled != '' && textDisabled != '') {
                enable = document.createTextNode(textEnabled);
                disable = document.createTextNode(textDisabled);
                options.checkEnabled(sName + '_state') ? checkbox.appendChild(enable) : checkbox.appendChild(disable) ;
                changetext = true;
            }
            else {
                if (textEnabled != '') { checkbox.appendChild(document.createTextNode(textEnabled)); }
                else { checkbox.appendChild(document.createTextNode(sName)); }
            }
            checkbox.className = options.checkEnabled(sName + '_state') ? (classEnabled || '') : (classDisabled || '');
            if (options.checkEnabled(sName + '_state')) checkbox.setAttribute('checked', 'true');
           
            checkbox.onclick = function (e) {
                e.preventDefault();
                if (sClickFn) sClickFn();
                if (this.getAttribute('checked') == 'true') {
                    options.setEnabled(sName + '_state', false);
                    this.className = classDisabled;
                    this.setAttribute('checked','false');
                    if (changetext) {
                        this.removeChild(enable);
                        this.appendChild(disable);
                    }
                }
                else {
                    options.setEnabled(sName + '_state', true);
                    this.className = classEnabled;
                    this.setAttribute('checked', 'true');
                    if (changetext) {
                        this.removeChild(disable);
                        this.appendChild(enable);
                    }
                }
            };
            return checkbox;
        };
        area.createTextarea = function (sID, hTxt, sName) {
            var disabled = global ? !options.checkEnabled(sName + '_state') : !options.isActiveDomain(sName + '_white', domain);
            var p = document.createElement('p');
            p.className = 'noads_input_help';
            p.appendChild(document.createTextNode(hTxt));
            this.appendChild(p);

            var textarea = document.createElement('textarea');
            textarea.style.height = (global ? '75%' : '200px');
            textarea.rows = global ? '30' : '10';
            textarea.cols = '100';
            textarea.value = options.getRawRules(sName, domain, global);
            textarea.id = sID;
            if (!global) { textarea.disabled = disabled; }
            else { textarea.className = 'overflow'; }
            return textarea;
        };
        area.createRadioButton = function (txt, url, typein) {
            var label = document.createElement('label');
            label.className = 'noads_label_subscription'
            var input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'subs';
            if (url && ~getValue('noads_default_url2').indexOf(url)) input.checked = true;
            label.appendChild(input);
            if (!typein) {
                label.appendChild(document.createTextNode(txt + ': '));
                var a = document.createElement('a');
                a.href = url;
                a.target = '_blank';
                a.appendChild(document.createTextNode(url));
                label.appendChild(a);
            } else {
                input = document.createElement('input');
                input.className = 'noads_custom_url';
                input.type = 'text';
                input.value = url;
                input.onkeyup = function () {
                    this.previousElementSibling.checked = true;
                    setValue('noads_custom_url', this.value);
                };
                label.appendChild(input);
                label.appendChild(document.createTextNode(txt));
            }
            this.appendChild(label);
        };

        area.showUserCSSList = function (pos) {
            this.clear(pos);
            this.appendChild(this.createTextarea('noads_usercss_textarea', lng.pUCSS, 'noads_userlist'));
            this.appendChild(this.createCheckbox('noads_userlist', lng.pEnabled, 'positive right', lng.pDisabled, 'negative unchecked right'));
            this.appendChild(this.createButton('noads_button_save', lng.pSave, function () {
                var val = document.getElementById('noads_usercss_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_userlist', val);
                options.setWhiteList('noads_userlist_white', val);
             }, 'positive', imageTick));
            
            this.appendChild(this.createButton('noads_button_export', lng.pExport, function () {
                var val = document.getElementById('noads_usercss_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                window.open('data:text/plain;charset=UTF-8;base64,' + window.btoa(val));
            }, '', imgSave));
        };
        area.showCSSList = function (pos) {
            this.clear(pos);
            this.appendChild(this.createTextarea('noads_css_textarea', lng.pCSS, 'noads_list'));
            this.appendChild(this.createCheckbox('noads_list', lng.pEnabled, 'positive right', lng.pDisabled, 'negative unchecked right'));
            this.appendChild(this.createButton('noads_button_save', lng.pSave, function () {
                var val = document.getElementById('noads_css_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_list', val);
                options.setWhiteList('noads_list_white', val);
            }, 'positive', imageTick));
            
            this.appendChild(this.createButton('noads_button_export', lng.pExport, function () {
                var val = document.getElementById('noads_css_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                window.open('data:text/plain;charset=UTF-8;base64,' + window.btoa(val));
            }, '', imgSave));
        };
        area.showMagicList = function (pos) {
            this.clear(pos);
            this.appendChild(this.createTextarea('noads_magic_textarea', lng.pMK, 'noads_magiclist'));
            this.appendChild(this.createCheckbox('noads_magiclist', lng.pEnabled, 'positive right', lng.pDisabled, 'negative unchecked right'));
            this.appendChild(this.createButton('noads_button_save', lng.pSave, function () {
                var val = document.getElementById('noads_magic_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_magiclist', val);
                options.setWhiteList('noads_magiclist_white', val);
            }, 'positive', imageTick));
            
            this.appendChild(this.createButton('noads_button_export', lng.pExport, function () {
                var val = document.getElementById('noads_magic_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                window.open('data:text/plain;charset=UTF-8;base64,' + window.btoa(val));
            }, '', imgSave));
        };
        area.showUserURLfilters = function (pos) {
            this.clear(pos);
            this.appendChild(this.createTextarea('noads_userurlfilterlist_textarea', lng.pUserURLfilters, 'noads_userurlfilterlist'));
            this.appendChild(this.createCheckbox('noads_userurlfilterlist', lng.pEnabled, 'positive right', lng.pDisabled, 'negative unchecked right'));
            this.appendChild(this.createButton('noads_button_save', lng.pSave, function () {
                var val = document.getElementById('noads_userurlfilterlist_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_userurlfilterlist', val);
                // options.setWhiteList(sName + '_white', val); exclusions by URL-filter are unsupported
                // notify URL-filter about changes & reload rules in BG
                postMsg({ type: 'reload_rules', global: false });
            }, 'positive', imageTick));
            
            this.appendChild(this.createButton('noads_button_export', lng.pExport, function () {
                var val = document.getElementById('noads_userurlfilterlist_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                window.open('data:text/plain;charset=UTF-8;base64,' + window.btoa(val));
            }, '', imgSave));
        };
        area.showURLfilters = function (pos) {
            this.clear(pos);
            this.appendChild(this.createTextarea('noads_urlfilterlist_textarea', lng.pURLfilters, 'noads_urlfilterlist'));
            this.appendChild(this.createCheckbox('noads_urlfilterlist', lng.pEnabled, 'positive right', lng.pDisabled, 'negative unchecked right'));
            this.appendChild(this.createButton('noads_button_save', lng.pSave, function () {
                var val = document.getElementById('noads_urlfilterlist_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_urlfilterlist', val);
                // options.setWhiteList(sName + '_white', val); exclusions by URL-filter are unsupported
                // notify URL-filter about changes & reload rules in BG
                postMsg({ type: 'reload_rules', global: true });
            }, 'positive', imageTick));
            
            this.appendChild(this.createButton('noads_button_export', lng.pExport, function () {
                var val = document.getElementById('noads_urlfilterlist_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                window.open('data:text/plain;charset=UTF-8;base64,' + window.btoa(val));
            }, '', imgSave));
        };
        area.showScriptWhitelist = function (pos) {
            this.clear(pos);
            this.appendChild(this.createTextarea('noads_scriptlist_textarea', lng.pScripts, 'noads_scriptlist'));
            this.appendChild(this.createCheckbox('noads_scriptlist', lng.pEnabled, 'positive right', lng.pDisabled, 'negative unchecked right'));
            this.appendChild(this.createCheckbox('noads_button', lng.pHideButton, 'positive right-second', lng.pShowButton, 'negative unchecked right-second'));
            this.appendChild(this.createButton('noads_button_save', lng.pSave, function () {
                var val = document.getElementById('noads_scriptlist_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_scriptlist', val);
                options.setWhiteList('noads_scriptlist_white', val);
            }, 'positive', imageTick));
            
            this.appendChild(this.createButton('noads_button_export', lng.pExport, function () {
                var val = document.getElementById('noads_scriptlist_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                window.open('data:text/plain;charset=UTF-8;base64,' + window.btoa(val));
            }, '', imgSave));
        };
        area.showSitePreferences = function (pos) {
            this.clear(pos);
            log('opened settings for ' + domain);
            
            var textucss = this.createTextarea('noads_usercss_textarea', lng.pUCSS, 'noads_userlist');
            this.appendChild(textucss);
            var inlinearea = document.createElement('div');
            inlinearea.className = 'inline';
            inlinearea.appendChild(this.createCheckbox('noads_userlist', lng.pEnabled, 'positive right', lng.pDisabled, 'negative right', null,
                function() {document.getElementById('noads_usercss_textarea').disabled = options.checkEnabled('noads_userlist_state') || !options.isActiveDomain('noads_userlist_white', domain);}));
            inlinearea.appendChild(this.createButton('noads_button_save_usercss', lng.pSave, function () {
                var val = document.getElementById('noads_usercss_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_userlist', val, domain);
                options.setWhiteList('noads_userlist_white', val);
                
            }, 'right-second', imageTick));
            this.appendChild(inlinearea);

            var textcss = this.createTextarea('noads_css_textarea', lng.pCSS, 'noads_list');
            this.appendChild(textcss);
            inlinearea = document.createElement('div');
            inlinearea.className = 'inline';
            inlinearea.appendChild(this.createCheckbox('noads_list', lng.pEnabled, 'positive right', lng.pDisabled, 'negative right', null,
                function() {document.getElementById('noads_css_textarea').disabled = options.checkEnabled('noads_list_state') || !options.isActiveDomain('noads_list_white', domain);}));
            inlinearea.appendChild(this.createButton('noads_button_save_css', lng.pSave, function () {
                var val = document.getElementById('noads_css_textarea').value.replace(/^\s+|\r|\s+$/g, '');
                options.setRawRules('noads_list', val, domain);
                options.setWhiteList('noads_list_white', val);
            }, 'right-second', imageTick));
              this.appendChild(inlinearea);

            // add to white list textarea
            var button = document.createElement('button');
            button.type = 'button';
            var disabled = !options.checkEnabled('noads_scriptlist_state') || !options.isActiveDomain('noads_scriptlist_white', domain);
            var p = document.createElement('p');
            p.appendChild(document.createTextNode(lng.pBlockedScripts));
            this.appendChild(p);
            var textarea = document.createElement('textarea');
            textarea.id = 'noads_jsblocks_textarea';
            textarea.rows = '10';
            textarea.cols = '100';
            textarea.style.height = '200px';
            if(!disabled) textarea.value = blockedScripts.replace(/; /g, '\n');
            textarea.disabled = disabled;
            textarea.readOnly = true;
            this.appendChild(textarea);

            // add to white list
            this.appendChild(this.createButton('noads_button_save', lng.pAddToWhite, function () {
                var textarea = document.getElementById('noads_jsblocks_textarea');
                var val = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd).replace(/^\s+|\r|\s+$/g, '');
                if (val) {
                    val = val.replace(/[*+?^=!${}()|[\]\\]|\.(?!\w)/g, '\\$&').replace(/\n+/g, '|');
                    var whitelist = getValue('noads_scriptlist_white');
                    setValue('noads_scriptlist_white', '@@==' + val + (whitelist ? '\n' + whitelist : ''));
                    alert(val + ' is added to the script blocker exclusions.');
                }
            }, 'positive', imageTick));

            var checkbox = document.createElement('button');
            checkbox.type = 'checkbox';
            var img = document.createElement('img');
            img.src = imageCross;
            checkbox.appendChild(img);
            var enable = document.createTextNode(lng.pBlockingDisable),
                disable = document.createTextNode(lng.pBlockingEnable),
                classEnabled = 'negative right',
                classDisabled = 'positive right',
                state = options.getForSite(domain);
                checkbox.setAttribute('checked', state);
            if (state) {
                checkbox.appendChild(enable);
                checkbox.className = classEnabled;
            } else {
                checkbox.appendChild(disable); 
                checkbox.className = classDisabled;
            }
            textucss.disabled = !options.checkEnabled('noads_userlist_state') || !options.isActiveDomain('noads_userlist_white', domain);
            textcss.disabled = !options.checkEnabled('noads_list_state') || !options.isActiveDomain('noads_list_white', domain);

            checkbox.onclick = function () {
                var currentstate = !(this.getAttribute('checked') == 'true');
                if (currentstate) {
                    this.removeChild(disable); 
                    this.appendChild(enable);
                    this.className = classEnabled;
                } else {
                    this.removeChild(enable);
                    this.appendChild(disable);
                    this.className = classDisabled;
                }
                textucss.disabled = !currentstate;
                textcss.disabled = !currentstate;
                textarea.disabled = !currentstate;
                this.setAttribute('checked', currentstate);
                options.setForSite(window.location.hostname, currentstate);
                log('set whitelisted for <' + window.location.hostname + '> to ' + options.getForSite(window.location.hostname));
            };
            this.appendChild(checkbox);
        };
        area.showSubscriptions = function (pos) {
            this.clear(pos);
            this.createRadioButton('EasyList', 'https://easylist-downloads.adblockplus.org/easylist.txt');
            this.createRadioButton('RuAdList/EasyList russian', 'https://easylist-downloads.adblockplus.org/ruadlist+easylist.txt');
            this.createRadioButton('EasyList german', 'https://easylist-downloads.adblockplus.org/easylistgermany.txt');
            this.createRadioButton('EasyList bulgarian', 'http://stanev.org/abp/adblock_bg.txt');
            this.createRadioButton('EasyList french', 'http://lian.info.tm/liste_fr.txt');
            this.createRadioButton('EasyList japanese', 'http://adblock-plus-japanese-filter.googlecode.com/hg/abp_jp.txt');
            this.createRadioButton('EasyList greek', 'http://www.void.gr/kargig/void-gr-filters.txt');
            this.createRadioButton('EasyList polish', 'http://adblocklist.org/adblock-pxf-polish.txt');
            this.createRadioButton('EasyList chinese', 'http://adblock-chinalist.googlecode.com/svn/trunk/adblock.txt');
            this.createRadioButton('EasyList romanian', 'http://www.zoso.ro/pages/rolist.txt');
            this.createRadioButton('EasyList finish', 'http://www.wiltteri.net/wiltteri.txt');
            this.createRadioButton('FanBoy (annoyance list; selectors)', 'http://www.fanboy.co.nz/fanboy-addon.txt');
            this.appendChild(document.createElement('br'));
            this.createRadioButton('FanBoy main', 'http://www.fanboy.co.nz/adblock/opera/urlfilter.ini');
            this.createRadioButton('FanBoy main/tracking', 'http://www.fanboy.co.nz/adblock/opera/complete/urlfilter.ini');
            this.createRadioButton('FanBoy russian', 'http://www.fanboy.co.nz/adblock/opera/rus/urlfilter.ini');
            this.createRadioButton('FanBoy chinese', 'http://www.fanboy.co.nz/adblock/opera/chn/urlfilter.ini');
            this.createRadioButton('FanBoy portuguese/spanish', 'http://www.fanboy.co.nz/adblock/opera/esp/urlfilter.ini');
            this.createRadioButton('FanBoy czech', 'http://www.fanboy.co.nz/adblock/opera/cz/urlfilter.ini');
            this.createRadioButton('FanBoy japanese ', 'http://www.fanboy.co.nz/adblock/opera/jpn/urlfilter.ini');
            this.createRadioButton('FanBoy turkish', 'http://www.fanboy.co.nz/adblock/opera/trky/urlfilter.ini');
            this.createRadioButton('FanBoy polish', 'http://www.fanboy.co.nz/adblock/opera/pol/urlfilter.ini');
            this.createRadioButton('FanBoy vietnamese', 'http://www.fanboy.co.nz/adblock/opera/vtn/urlfilter.ini');
            this.createRadioButton('FanBoy swedish', 'http://www.fanboy.co.nz/adblock/opera/swe/urlfilter.ini');
            this.appendChild(document.createElement('br'));
            this.createRadioButton(' (*.txt, *.ini)', getValue('noads_custom_url'), true);
            
            this.appendChild(this.createCheckbox('noads_allrules',lng.pAllRules,'right positive','','right negative unchecked'));

            this.appendChild(this.createButton('noads_dlsubscription',lng.pDownload, function () {
                var dlsubscription = document.getElementById('noads_dlsubscription');
                if (dlsubscription.disabled === true) return; else dlsubscription.disabled = true;
                
                var url = Array(), inputs = area.getElementsByTagName('input');
                for (var i = 0, radioButton; radioButton = inputs[i]; i++) {
                    if (radioButton.type == 'checkbox' && radioButton.checked) { url.push(radioButton.nextElementSibling.href || radioButton.nextElementSibling.value); };
                };
                if (url.length) {
                    dlsubscription.childNodes[0].src = imgLoad;
                    setValue('noads_default_url2', url);
                    postMsg({ type: 'get_filters', url: url, allRules: document.getElementById('noads_allrules_toggle').getAttribute('checked') == 'true'});
                }
            }, '', imgRefresh));
        };
        area.showHelp = function (pos) {
            this.clear(pos);
            var p = document.createElement('pre');
            p.className = 'noads_help';
            p.appendChild(document.createTextNode(lng.pAbout));
            this.appendChild(p);

            this.appendChild(this.createCheckbox('noads_debug_enabled', lng.pDebug, 'right inline-clean', lng.pDebug, 'right unchecked inline-clean'));
            this.appendChild(this.createCheckbox('noads_tb_enabled', lng.pToolbarButton, 'right-second inline-clean', lng.pToolbarButton, 'right-second unchecked inline-clean'));
        };

        if(domain) win.createMenu([lng.pSite, function () { area.showSitePreferences(0) }]);
        else win.createMenu( [lng.mUCSS, function () { area.showUserCSSList(0); }], 
            [lng.mCSS, function () { area.showCSSList(1); }], 
            [lng.mScripts, function () { area.showScriptWhitelist(2); }], 
            [lng.mMK, function () { area.showMagicList(3); }],
            [lng.mUserURLfilters, function () { area.showUserURLfilters(4); }],
            [lng.mURLfilters, function () { area.showURLfilters(5); }],
            [lng.mSubscriptions, function () { area.showSubscriptions(6); }],
            [lng.mHelp, function () { area.showHelp(7); }]
        );
        content.appendChild(area);
        win.appendChild(content);
        if(domain) area.showSitePreferences(0); else area.showUserCSSList(0);
        try { document.body.appendChild(overlay); } 
        catch(ex) {
                run.updateCSS(domain);
                delEle(overlay.clearStyle);
                document.removeEventListener('keypress', press, false);
                run.stop = null;
                delEle(overlay);
        }    
    }
};