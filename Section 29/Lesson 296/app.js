// This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); // firstColor.hex();
// firstColor.rgb(); // "rgb(35, 255, 150)"

// const black = makeColor(0, 0, 0);
// black.rgb(); // "rgb(0,0,0)"
// black.hex(); // "#0000s00"


// Creates a blank, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

const color1 = new Color(40, 255, 60);
const color2 = new Color(0, 0, 0);