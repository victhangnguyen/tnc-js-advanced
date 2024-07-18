# tnc-js-advanced

# Để chuyển Kiểu dữ liệu của input dùng lệnh Number()

var a, b, c;
a = Number(await input("Enter value of a: "));
a sẽ mang giá trị là số (Number)

# Thêm dữ liệu vào trong mảng

var questions = [
"Bạn ăn cơm chưa? ",
"Ăn cơm xong, bạn làm gì? ",
"Bạn có ăn cơm nữa không? ",
"Nếu không ăn cơm nữa, vậy bạn sẽ làm gì? ",
"Nếu không làm gì, bạn có ăn cơm bữa không? ",
];

var results = [];

for (var i = 0; i < questions.length; i++) {
const result = await input(questions[i]);
results.push(result);
}

//! Duyệt từng phần tử của mãng
for (let i = 0; i < results.length; i++) {
console.log("results[" + i + "]: ", results[i]);
}
