var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Input = /** @class */ (function () {
    function Input() {
        this.inp = document.querySelector('#value');
        this.btns = document.querySelectorAll('.container button');
    }
    Input.prototype._Inp = function () {
        var _this = this;
        this.btns.forEach(function (ele) {
            ele.addEventListener('click', function (e) {
                var data = e.target;
                var state_1 = data.innerText.toLowerCase().includes('c');
                var state_2 = data.innerText.toLowerCase().includes('d');
                switch (state_1) {
                    case false:
                        _this.inp.value += data.innerText;
                        break;
                    case true:
                        _this.inp.value = '';
                        break;
                }
                switch (state_2) {
                    case true:
                        _this.inp.value = _this.inp.value.slice(0, _this.inp.value.length - 2);
                        break;
                }
            });
        });
    };
    return Input;
}());
var Calc = /** @class */ (function (_super) {
    __extends(Calc, _super);
    function Calc() {
        return _super.call(this) || this;
    }
    Calc.prototype._Calcer = function () {
        var _this = this;
        this.btns.forEach(function (ele) {
            ele.addEventListener('click', function (e) {
                var data = e.target;
                if (data.innerText.includes('=')) {
                    _this.inp.value = _this.inp.value.slice(0, _this.inp.value.length - 1);
                    try {
                        _this.inp.value = eval(_this.inp.value);
                    }
                    catch (e) {
                        _this.inp.value = 'Error!';
                        setTimeout(function () {
                            _this.inp.value = '';
                        }, 800);
                    }
                }
            });
        });
    };
    return Calc;
}(Input));
var Animater = /** @class */ (function (_super) {
    __extends(Animater, _super);
    function Animater() {
        return _super.call(this) || this;
    }
    Animater.prototype.Animater = function () {
        var randomData = Math.floor(Math.random() * this.btns.length);
        this.btns[randomData].classList.contains('active') ?
            this.btns[randomData].classList.remove('active') :
            this.btns[randomData].classList.add('active');
    };
    return Animater;
}(Input));
var inputs = new Input();
inputs._Inp();
var clac = new Calc();
clac._Calcer();
var animate = new Animater();
setInterval(function () {
    animate.Animater();
}, 100);
