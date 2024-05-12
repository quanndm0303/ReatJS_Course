//Kiểu dữ liệu string

// //cách khai báo kiểu dữ liệu String
// var c = 'Hello'

// var q = `Good ${c}`
// console.log(q)

// var a = "Hello"
// var b ='Hello'

//Toán tử trong String

// console.log(a+" " + b)

//escape sequesces in string

// "Day 30\\03\\2003"

// \n: xuong dong
// \t : tab ( 8 ki tu space)
// \'
// \"
// \\

// var a = 1
// var b = 2

// console.log(`Ket qua cua ${a} cong voi ${b} la : ${a+b}`)

// const string = "Ket qua cua ${a} cong voi ${b} la : ${a+b}"

// console.log(string.length)

//index trong string
//Giống như trong array index trong string cũng có chiều dài của string -1 VD n-1
//phần tử cuối cùng trong String 

// string[string.length -1 ];

//Phần tử đầu 
// string[0]

// string.toUpperCase()
// string.toLowerCase()

// string.trim()

// var a = "Hello my name is Quan"

// console.log(a.substring(6,13))
//cắt chuỗi đối số thứ nhất là vị trí index bắt đầu, đối số thứ 2 là vị trí index + 1 kết thúc

//plit : string -> Array
// String.spilit()
//join : Array -> string

//includes kiểm tra substring có trong string hay không

// string.includes("hello")

//Kiểm tra và trả lại kết quả là subtring là vị trí ký tự đầu tiên của substring
// string.indexOf("hello")

//concat string: nối các string
// string.concat(a,b,c)

//repalce tìm kiếm string đó sau đó thay thế nó đi , chỉ thay thế thằng đầu tiên nó tìm thấy 
// string.replace
// string.raplaceAll