// increment/decrement number
let counter = document.getElementById('counter');
let minus = document.getElementById('-');
let plus = document.getElementById('+');
let num = 0;

const addNum = function() {
  counter.innerText = ++num;
}

const subtractNum = function() {
  counter.innerText = --num;
}

let interval = setInterval(addNum, 1000);

minus.addEventListener('click', subtractNum);
plus.addEventListener('click', addNum);


 // 'like' feature
let heart = document.getElementById('<3');
let ul = document.querySelector('.likes');
let lastLike;
let liked = 0;

const like = function() {
  let suffix = ''
  if (lastLike === counter.innerText) {
    suffix = 's'
    ++liked;
    let ps = document.querySelectorAll('p')
    let likeCount = ps[ps.length - 1];
    likeCount.innerText = `${counter.innerText} has been liked ${liked} time` + suffix;
  } else {
    liked = 1
    lastLike = counter.innerText;
    let likeCount = document.createElement('p');
    likeCount.innerText = `${counter.innerText} has been liked ${liked} time` + suffix;
    ul.appendChild(likeCount)
  }
}

heart.addEventListener('click', like)

// 'pause/resume' feature
let pause = document.getElementById('pause');
let isPaused = false;

pause.addEventListener('click', function() {
  if (isPaused) {
    setInterval(addNum, 1000)
    pause.innerText = 'pause';
  } else {
    clearInterval(interval);
    pause.innerText = 'resume';
    isPaused = true;
  }
});


// 'comment' feature
let comments = document.getElementById('list')
let commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let userInput = e.target.querySelector('#new-comment').value;
  const newComment = document.createElement('p');
  newComment.innerText = userInput;
  comments.appendChild(newComment);
  e.target.reset();
})
