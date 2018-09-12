// a constant, a list of posts from some given source.
const posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati",
    "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  },{
    "userId": 2,
    "id": 9,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  },{
    "userId": 2,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
  }];

// h is conventional, and shorter to type.
const h = React.createElement;

// This is a COMPONENT: It takes ONE thing and returns ONE thing
// It is being called by the component PostList.
// Let's add buttons. These will run functions in our props.
let BlogPost = props =>
    h('li',{className: "blogitem"}, [
        h('p',{},`Title: ${props.post.title}`),
        h('p',{},`User: ${props.post.userId}`),
        h('p',{},`Body: ${props.post.body}`),
        h('button',{
            onClick: () => {
                props.deletePost(props.post.id);
            }
        },'delete'),
        h('button',{
            onClick: () => {
                props.snakePost(props.post.id);
            }
        },'snake me'),
        h('hr', {}, null)
]);

// react create element'ing the BlogPost function, with the 'post' data.
// pay attention to the .map because we have a function, with a function in it.
let PostList = (props) => {
    return h('ul', {}, 
        props.posts.map(post => 
            h(BlogPost,{ snakePost: props.snakePost, deletePost: props.deletePost, post: post})
            //                                      if key and value are the same, I could just use post
        )
    )
}

// let us make a class instead.
// all my manipulations are now done to the state (a magic thing)
// render is a function, and it has plenty of functions in it
// which are now gone from "above"
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: this.props.posts 
        };
    }
    render () {
        let deletePost = (id) => {
            this.setState( 
                {posts : this.state.posts.filter(myPost => myPost.id !== id)}
            );
        }
        let snakePost = (id) => {
            let newPosts = this.state.posts.map(currentPost =>
                (currentPost.id === id) ? 
                    Object.assign({}, currentPost, {title : currentPost.title + 's'})
                : currentPost
            );
            this.setState(
                {posts : newPosts}
            );
        }
        return h('div', {className: "postlist"}, [
                h('h1',{}, 'Sic gorgiamus allos subjectatos nunc!'),
                h(PostList, {snakePost, deletePost, posts: this.state.posts} )
        ]);
    }
}
//
// My main
//
ReactDOM.render( h(Homepage, {posts}), document.getElementById('react-main') );