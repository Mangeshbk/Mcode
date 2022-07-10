//https://oj.masaischool.com/contest/1677/problem/18

function runProgram(input) {
  // TC = O(n)
  // SC = O(1)
  input = input.trim().split(/[\n\r]+/);
  //console.log(input);

  let [N] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  //console.log(arr, N);

  permutations([], arr);
}

let permutations = (current, remaining) => {
  if (remaining.length <= 0) {
    console.log(current.join(" "));
    return;
  }
  for (let i = 0; i < remaining.length; i++) {
    current.push(remaining[i]);
    permutations(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
    current.pop();
  }
};

if (process.env.USERNAME === "dell") {
  runProgram(`
    3
    1 2 3
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
