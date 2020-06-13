const dimInput1 = document.getElementById("dim-1-input");
const dimInput2 = document.getElementById("dim-2-input");
const shapeSelect = document.getElementById("shape-select");
const shapeForm = document.getElementById("shape-form");
const tableBody = document.getElementById("shapes-table-body");

shapeForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Task 1: create a new shape instance passing it
  // the required dimensions the selected input
  let parsedValue = parseInt(shapeSelect.value, 10);
  let shapeType = new Shape(parsedValue, dimInput1.value, dimInput2.value);
  // Task 2: Call the function 'createTableRow' passing it the
  // object instance created in task 1
  createTableRow(shapeType);
});

function createTableRow(shape) {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${shape.getType()}</td>
  <td>${shape.getDimension1()}</td>
  <td>${shape.getDimension2()}</td>
  <td>${shape.calculateArea()}</td>
  <td>${shape.calculateCircumference()}
  `;

  tableBody.appendChild(row);
}

const types = [
  { id: 0, name: "Circle" },
  { id: 1, name: "Square" },
  { id: 2, name: "Rectangle" },
  { id: 3, name: "Triangle" }
];

class Shape {
  constructor(type, dim1, dim2) {
    this.type = type;
    this.dim1 = dim1;
    this.dim2 = dim2;
  }

  getType() {
    const typeObj = types.find(element => element.id === +this.type);
    return typeObj.name;
  }

  getDimension1() {
    return this.dim1;
  }

  getDimension2() {
    return this.dim2;
  }

  calculateArea() {
    if (this.type === 0) {
      let radius = this.dim1;
      let circleArea = Math.PI * radius ** 2;
      return circleArea;
    } else if (this.type === 1) {
      let side1 = this.dim1;
      let side2 = this.dim2;
      let squareArea = 0;
      if (side1 && !side2) {
        return (squareArea = side1 ** 2);
      } else if (side2 && !side1) {
        return (squareArea = side2 ** 2);
      } else {
        return (squareArea = side1 ** 2);
      }
    } else if (this.type === 2) {
      let side1 = this.dim1;
      let side2 = this.dim2;
      let rectangleArea = side1 * side2;
      return rectangleArea;
    } else {
      let side1 = this.dim1;
      let side2 = this.dim2;
      let triangleArea = (1 / 2) * side1 * side2;
      return triangleArea;
    }
  }

  calculateCircumference() {
    if (this.type === 0) {
      let radius = this.dim1;
      let circleCircumference = (2 * Math.PI * radius).toFixed(2);
      return circleCircumference;
    } else if (this.type === 1) {
      let side1 = this.dim1;
      let side2 = this.dim2;
      let squareCircumference = side1 + side2 + side1 + side2;
      return squareCircumference;
    } else if (this.type === 2) {
      let w = this.dim1;
      let i = this.dim2;
      let rectangleCircumfernce = 2 * (i + w);
      return rectangleCircumfernce;
    } else {
      return "it's complicated";
    }
  }
}
// Task 3: create the Shape class
// with constructor taking a type and 2 dimenstions
// Use the types enumerator above to map select-box ids to types

/*
The class should hold these properties
- type
- dim1
- dim2

and it should hold these methods
- getType()
- getDimension1()
- getDimension2()
- calculateArea()
- calculateCircumference()


Area and circumference calculation should be type dependant
if the shape have only 1 dimension, dimesion 2 can be undefined

for circles, let dim1 be the radius

for triangle circumference, jus return "it's complicated"

Search on how to get PI value from JS library.
*/
