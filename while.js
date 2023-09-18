/**
 * LOOP
 * while ➡️ 如果条件不满足则输出0次
 * do...while ➡️ 至少输出一次
 */

// 输出五次输入者的名字
// ask writer to enter their name
process.stdout.write("Please write your name: ")
//Read user input
process.stdin.on("data", function(inputFromUser){
  let name = inputFromUser.toString().trim()
  // Repeat five times
  let i = 0;
  while( i < 5 ){
    // Print given name
    process.stdout.write("\n"+ name)
    i ++ ;
  }

  process.exit()
})
