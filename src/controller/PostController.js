const { connectToMongo } = require('../utils/mongoUtil');

exports.createPost = (req, res, next) => {
    // const title = req.body.title;
    // const content = req.body.content;

    // // create a new Post instance
    // const post = new Post({
    //     title: title,
    //     content: content
    // });

    // // save the instance to the database
    // post
    //     .save()
    //     .then(postSaved => {
    //         res.status(201).json({
    //             message: 'Post created successfully!',
    //             post: postSaved
    //         });
    //     })
    //     .catch(err => console.log('err', err));
}


exports.getPosts = async (req, res, next) => {
    const client = await connectToMongo();
    res.status(201).json({
        message: 'Post created successfully!',
        post: client
    });
    // console.log("client")
    // const database = client.db("your_database_name"); // Replace with your actual database name
    // const postsCollection = database.collection("posts"); // Replace 'posts' with your actual collection name
    // return array of existing posts
    // res.json({ status: "hello" })
    // Post.find().then(foundPosts => {
    //     res.json({
    //         message: "All posts",
    //         posts: foundPosts
    //     });
    // });
}
