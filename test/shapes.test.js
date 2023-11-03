const { Circle, Triangle, Square } = require("../lib/shapes")

describe("Circle", () => {

    describe("render", () => {
        it("should render a circle svg", () => {
            const circle = new Circle ();
            circle.setColor("purple");
            let svgShapeString = circle.render()

            expect(svgShapeString).toContain('<circle cx="155" cy="100" r="90" fill="purple" />')
        })
    })
})



