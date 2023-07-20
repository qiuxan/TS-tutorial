// enum Color {
//   red,
//   green,
//   blue,
// }

// // same with
// let Color2 = {
//   red: 0,
//   green: 1,
//   blue: 2,
// };

// let backGroundColor = Color.green;
// let message = "abe";
// let endsWithC = message.endsWith("c");

// let message2;
// message2 = "abc";
// let endsWithC2 = (<string>message).endsWith("c");
// let endsWithC2AlternativeWay = (message as string).endsWith("c");

// let drawPoint = (x, y, a, b, c, d, e, f, g, h) => {}; //xxxx not good

// let drawPoint = (point) => {};

// drawPoint({ x: 1, y: 2 });
// //looks good but what if:

// drawPoint({ name: "ian" }); // it will break the code

// solution:

// let drawPoint = (point: { x: number; y: number }) => {};

// solve the issue but what if we have a,b,c,d,e,f,g as parameter?  and also we might have to do it everytime:

// final solution

// let drawPoint = (point: Point) => {
//   console.log(point.x);
//   console.log(point.y);
// };

// //example  Class:

// let getDistance = (pointA: Point, pointB: Point) => {};

class Point {
  x: number;
  y: number;
  draw() {
    console.log("x:" + this.x, "y:" + this.y);
  }
  // getDistance(another: Point) {}
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
