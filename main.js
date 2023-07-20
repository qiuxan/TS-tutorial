var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
// same with
var Color2 = {
    red: 0,
    green: 1,
    blue: 2,
};
var backGroundColor = Color.green;
