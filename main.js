const right_img = [];
const left_img = [];

const right_pic = document.getElementById("right_pic");
const left_pic = document.getElementById("left_pic");

let count = -1;

//配列に画像を格納
for (let i = 0; i < 5; i++) {
  right_img[i] = `picture/${i}_right.JPG`;
  console.log(right_img[i]);
  if (i < 4) {
    left_img[i] = `picture/${i}_left.JPG`;
    console.log(left_img[i]);
  }
}

right_pic.onclick = function () {
  count += 1;
  if (count < 5) {
    right_pic.src = right_img[count];
  } else {
    count = -1;
  }
};

left_pic.onclick = function () {
  count += 1;
  if (count < 4) {
    left_pic.src = left_img[count];
  } else {
    count = -1;
  }
};
