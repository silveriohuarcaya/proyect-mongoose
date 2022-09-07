const connectDb = require("./config/database");

const Post = require("./models/blog");

const post1 = {
  title: "Aprendiendo NodeJS",
  description:
    "Es un blog post nuevo en el que se explica como se puede usar NodeJS",
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

connectDb().then(async () => {
  const postCreated = await Post.create(post1);
  // console.log("Post created", postCreated);

  const post = await Post.find();
  console.log("Post", post);
});
