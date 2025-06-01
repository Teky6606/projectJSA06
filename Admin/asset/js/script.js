let post = JSON.parse(localStorage.getItem("posts")) || [];
let editIndex = null;

const postForm = document.getElementById('postForm');
const title = document.getElementById('title');
const imageinput = document.getElementById('imageinput');
const content = document.getElementById('content');
const postsContainer = document.getElementById('postsContainer');

postForm.addEventListener('submit',function(e)
{
    e.preventDefault();

    const title2 = title.value.trim();
    const content2 = content.value.trim();
    const imageinput = imageinput.files[0];

    if(imageinput)
    {
        const reader = new FileReader();
        reader.onload = function (event)
        {
            const imgUrl = event.target.result;
            savepost(title2,content2,imageinput);

        };
        reader.readAsDataURL(imageinput);
    } 
    else{
        savepost(title2,content2,null);
    }

});

// function savepost(title, content, imageURL)
// {
//     if(editIndex != null)
//     {
//         post[editIndex] = {
//             title,content, imageinput :imageURL
//         }
//     }
// }