import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url'; // For __dirname equivalent in ES Modules
import { v4 as uuidv4 } from 'uuid'; // For unique post IDs

// __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// In-memory array to store blog posts - Initialized as empty
let posts = [];

// Set EJS as the view engine and define views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (CSS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the home page with all posts
app.get('/', (req, res) => {
    const successMessage = req.query.message;
    const errorMessage = req.query.error;
    res.render('index', { posts: posts, successMessage: successMessage, errorMessage: errorMessage });
});

// Route to render the "about" page
app.get("/about", (req, res) => {
    res.render("about.ejs"); // Assuming you have an about.ejs file
});

// Route to render the "compose" (new post) page
app.get("/compose", (req, res) => {
    res.render("compose.ejs");
});

// Route to handle new post creation
app.post('/compose', (req, res) => {
    // Note: Email field is in compose.ejs but not stored in 'posts' array
    // as it's typically user data, which would require a database/auth.
    const { title, content, image } = req.body; // 'image' expects a URL string

    if (title && content) {
        const newPost = {
            id: uuidv4(),
            title: title,
            content: content,
        };
        posts.push(newPost);
        res.redirect('/?message=New blog post created successfully!');
    } else {
        res.redirect('/compose?error=Please fill in both title and content.');
    }
});

// Route to view a single blog post
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);

    if (post) {
        res.render('single-post', { post: post });
    } else {
        res.redirect('/?error=Blog post not found.');
    }
});

// Route to render the edit page for a specific post
app.get('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const postToEdit = posts.find(post => post.id === postId);

    if (postToEdit) {
        res.render('edit', { post: postToEdit });
    } else {
        res.redirect('/?error=Post not found for editing.');
    }
});

// Route to handle updating a post
app.post('/edit/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content} = req.body; // 'image' expects a URL string
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex !== -1 && title && content) {
        posts[postIndex].title = title;
        posts[postIndex].content = content;
        res.redirect('/?message=Post updated successfully!');
    } else {
        res.redirect('/?error=Failed to update post.');
    }
});

// Route to handle deleting a post
app.post('/delete/:id', (req, res) => {
    const postId = req.params.id;
    const initialLength = posts.length;
    posts = posts.filter(post => post.id !== postId); // Filter out the post

    if (posts.length < initialLength) {
        res.redirect('/?message=Post deleted successfully!');
    } else {
        res.redirect('/?error=Failed to delete post.');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
