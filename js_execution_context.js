let val1 = 10
let val2 = 20
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 444)

// JS execution consists of 3 phases
//  1. Global Execution
//  2. Memory Phase
//  3. Execution Phase

// 1. Global Execution
//    this

// 2. Memory Phase
//    val1 -> undefined
//    val2 -> undefined
//    addNum -> definition
//    result1 -> undefined
//    result2 -> undefined

// 3. Execution Phase
//    val1 <- 10
//    val2 <- 20
//addNum --> New variable environment + execution thread
//        ----------------------------------|
//        |               |              |
//    Memory phase    Execution control
//  val1->undefined    num1-> 10
//  val2->undefined    num2-> 20
//  total->undefined   total-> 30 
//  This total will be returned to global execution context
//  This will be automatically deleted after performing it's task
