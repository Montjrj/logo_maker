const { Circle, Triangle, Square } = require("../lib/shapes");

describe("Circle", () => {

    describe("render", () => {
        it("should render a circle svg", () => {
            const color = "purple"
            const circle = new Circle();
            circle.setColor(color);
            let svgShapeString = circle.render();

            // Adjust the expected SVG string for a circle
            expect(svgShapeString).toContain(`<circle cx="155" cy="100" r="90" fill="${color}" />`);
        });
    });
});

describe("Triangle", () => {

    describe("render", () => {
        it("should render a triangle svg", () => {
            const triangle = new Triangle(); // Use a different variable name
            triangle.setColor("purple");
            let svgShapeString = triangle.render();

            // Adjust the expected SVG string for a triangle
            expect(svgShapeString).toContain('<polygon points="150,18 244,182 56,182" fill="purple" />');
        });
    });
});

describe("Square", () => {

    describe("render", () => {
        it("should render a square svg", () => {
            const square = new Square(); // Use a different variable name
            square.setColor("purple");
            let svgShapeString = square.render();

            // Adjust the expected SVG string for a square
            expect(svgShapeString).toContain('<rect x="65" y="10" width="175" height="175" fill="purple" />');
        });
    });
});


