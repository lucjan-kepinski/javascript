var iLikeMeat = true
// undefined
iLikeMeat
// true
iLikeMeat = "true"
// "true"
iLikeMeat = false
// false
7 > 5
// true
7 < 5
// false
7 = 7
// VM2671:1 Uncaught ReferenceError: Invalid left-hand side in assignment
7 == 7
// true
7 == 5
// false
0
// 0
Boolean(7 > 5)
// true
Boolean(6)
// true
Boolean(-5)
// true
Boolean(0)
// false
Boolean("hello")
// true
Boolean("")
// false