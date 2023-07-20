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
let message = "abe";
let endsWithC = message.endsWith("c");

let message2;
message2 = "abc";
let endsWithC2 = (<string>message).endsWith("c");
let endsWithC2AlternativeWay = (message as string).endsWith("c");
