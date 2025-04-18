// Answer Queries
// Description

// You are given an integer array arr of size n. This array is queried q times. In each query, an element x is given. For each query, you have to print "YES" if the element exists in the array or "NO" if it doesn't exist

function runProgram(input) {
  // TC = O(n)
  // SC = O(n)
  input = input.trim().split(/[\n\r]+/);

  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let Q = +input[2];
  let query = input[3].trim().split(" ").map(Number);

  //console.log(N, arr, Q, query);

  let obj1 = {};
  for (key of arr) {
    obj1[key] ? obj1[key]++ : (obj1[key] = 1);
  }

  for (let i = 0; i < Q; i++) {
    console.log(obj1[query[i]] ? "YES" : "NO");
  }
}

if (process.env.USERNAME === "dell") {
  runProgram(`
  5
  1 2 3 4 5
  3
  3 5 7
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
