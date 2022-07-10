//https://oj.masaischool.com/contest/1677/problem/15

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);
  let test = +input[0];

  for (let z = 0, line = 1; z < test; z++) {
    let [N] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(N, arr);

    console.log(signalCapacity1(arr));
  }
}

function signalCapacity(arr) {
  let stack = [0];
  let ans = [1];

  for (let i = 1; i < arr.length; i++) {
    let count = 1;
    while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      var temp = stack.pop();
      count += ans[temp];
    }
    stack.push(i);
    ans[i] = count;
  }
  return ans.join(" ");
}


if (process.env.USERNAME === "dell") {
  runProgram(`
    2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8
   `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
