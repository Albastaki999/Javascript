const baseUrl = "https://jsonplaceholder.typicode.com";

let posts = [];

let fetchPosts = async () => {
  let response = await fetch(baseUrl + "/posts");
  let data = await response.json();
  posts = data;
  console.log(posts[0].title);
};

let fetchPostsById = async (id) => {
  let response = await fetch(baseUrl + "/posts/" + id);
  let data = await response.json();
  posts = data;
  console.log(posts);
};

console.log("Fetching all posts...");
// fetchPosts();
fetchPostsById(11);
console.log("Hello");
