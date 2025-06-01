let post = JSON.parse(localStorage.getItem("posts")) || [];
let editIndex = null;

const postForm = document.getElementById('postForm');
const title = document.getElementById('title');
const content = document.getElementById('content');
const postsContainer = document.getElementById('postsContainer');