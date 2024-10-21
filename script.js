const myCarouselElement = document.querySelector('#carousel');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
});

// chagning title span
const titleSpan = document.querySelector('.title-span');
const spanArray = ['top', 'most unique', 'most popular', 'best'];
let i = 0;

setInterval(() => {
  titleSpan.textContent = spanArray[i];
  i++;
  if (i === spanArray.length) {
    i = 0;
  }
}, 2000);

const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    info: 'A novel about racism and injustice.',
  },
  {
    title: '1984',
    author: 'George Orwell',
    info: 'A dystopian novel about totalitarianism.',
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    info: "The narrative of a sailor's obsession with a white whale.",
  },
];

function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('item');
    bookDiv.innerHTML = `<strong>${book.title}</strong> by ${book.author} <button onclick="toggleInfo(${index})">Read More</button>
            <div class="additional-info" id="info-${index}">${book.info}</div>`;
    bookList.appendChild(bookDiv);
  });
}

function notifyOnClick(callback) {
  const playSoundButton = document.getElementById('playSoundButton');
  playSoundButton.addEventListener('click', callback);
}

function toggleInfo(index) {
  const infoDiv = document.getElementById(`info-${index}`);
  infoDiv.style.display =
    infoDiv.style.display === 'none' || infoDiv.style.display === ''
      ? 'block'
      : 'none';
}

function playSound() {
  const notificationSound = document.getElementById('notificationSound');
  notificationSound.currentTime = 0;
  notificationSound.play();
}

notifyOnClick(playSound);

displayBooks();
