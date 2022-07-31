var Square3 = /** @class */ (function () {
    function Square3(width, height, bgc) {
        this.width = width;
        this.height = height;
        this.bgc = bgc;
    }
    Square3.prototype.draw = function () {
        var x = Math.random() * Square3.max;
        var sq = document.createElement('div');
        // set div styles
        var square = "<div style=\"position:relative; \n    left: ".concat(x, "px;\n    top: ").concat(x, "px;\n    width: ").concat(this.width, "px;\n    height: ").concat(this.height, "px;\n    background-color: ").concat(this.bgc, ";\"\n    </div>");
        // draw box
        document.body.insertAdjacentHTML('afterbegin', square); //child of body, adjcent to the end.
    };
    Square3.max = 400;
    return Square3;
}());
var sq = new Square3(30, 30, 'red');
sq.draw();
sq.draw();
sq.draw();
sq.draw();
