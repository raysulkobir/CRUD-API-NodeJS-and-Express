const { connectToMongo } = require('../utils/mongoUtil');

exports.createPost = (req, res) => {
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


exports.getPosts = async (req, res) => {
    try {
        // Connect to the MongoDB client
        const client = await connectToMongo();
        const database = client.db("demo_db"); // Replace with your actual database name
        const postsCollection = database.collection("brand"); // Replace 'brand' with your actual collection name

        // Example action: Inserting a document into the 'brand' collection
        const result = await postsCollection.insertOne({ name: 'sony' });

        // Send the response back to the client
        res.status(200).json({
            message: 'Data inserted successfully',
            data: result
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({
            message: 'Error fetching posts',
            error: error.message
        });
    }
};
