// ! Make sure all assets are loaded
document.addEventListener("DOMContentLoaded", () => {
  const APIUrl = "https://jsonplaceholder.typicode.com/posts";
  const postContainer = document.querySelector(".posts-container");

  // ? using async and await
  async function fetchPosts() {
    try {
      const apiResponse = await fetch(APIUrl);
      const actualPost = await apiResponse.json();
      console.log(actualPost);
      postContainer.innerHTML = "";

      // * display posts
      actualPost.forEach((post) => {
        const postElement = createPostElement(post);
        postContainer.appendChild(postElement);
      });
    } catch (error) {
        '<p style="color:red;text-align:center">Error loading posts. please try again later</p>';
    }
  }

  //create post html elements
  function createPostElement(post) {
    const article = document.createElement("article");
    article.className = "post-card";

    const title = document.createElement("h2");
    title.className = "post-title";
    title.textContent = post.title;

    const body = document.createElement("p");
    body.className = "post-body";
    body.textContent = post.body;

    article.appendChild(title);
    article.appendChild(body);

    return article;
  }

  // calling the function
  fetchPosts();
});
