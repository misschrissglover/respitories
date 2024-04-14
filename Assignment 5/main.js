// Functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Ensure that the commentWrapper is selected correctly and is initially hidden
if (commentWrapper) {
    commentWrapper.style.display = 'none';
}

showHideBtn.addEventListener('click', function() {
    if (commentWrapper) {
        if (commentWrapper.style.display === 'none') {
            showHideBtn.textContent = 'Hide comments';
            commentWrapper.style.display = 'block';
        } else {
            showHideBtn.textContent = 'Show comments';
            commentWrapper.style.display = 'none';
        }
    }
});

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (nameField.value.trim() !== '' && commentField.value.trim() !== '') {
            submitComment();
        } else {
            alert('Please fill in both name and comment fields.');
        }
    });
}

function submitComment() {
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    namePara.classList.add('comment-name'); // Add class for potential styling
    commentPara.textContent = commentValue;
    commentPara.classList.add('comment-text'); // Add class for potential styling

    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);
    list.appendChild(listItem);

    // Clear input fields after submission
    nameField.value = '';
    commentField.value = '';
}
