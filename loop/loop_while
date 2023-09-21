/**
 * LOOP
 * while ➡️ Condition is checked before the code is run.
 * 先条件检查再进行输出
 * do...while ➡️ Condition is checked after the code is run.
 * 先输出一次再检查条件
 */

// Test：输出五次输入者的名字
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
