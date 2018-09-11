// pretend I got these from a wordpress API
const posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },{
    "userId": 2,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },{
    "userId": 2,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  }];

let h = React.createElement;

// This is a COMPONENT
// It takes ONE thing and returns ONE thing
// It is being called by the component PostList
let BlogPost = post =>
    h('li',{className: "blogitem"}, [
        h('p',{},`Title: ${post.title}`),
        h('p',{},`User: ${post.userId}`),
        h('p',{},`Body: ${post.body}`),
        h('hr', {}, null)
]);

// react create element'ing the BlogPost function, with the 'post' data.
// pay attention to the .map because we have a function, with a function in it.
let PostList = (props) => {
    return h('ul', {}, 
        props.blogEntries.map(post => 
            h(BlogPost,post)
        )
    )
}

// now we are rendering a function named PostList, with the BlogEntries
// since the object BlogEntries is an array, we'll wrap it in  {} and
//  use .map in the PostList function
let myVDOM = () =>
    h('div', {className: "postlist"}, [
        h('h1',{}, 'Sic gorgiamus allos subjectatos nunc!'),
        h(PostList, { blogEntries: posts })
    ]);

// added some spaces to show more clearly that I am
// invoking the component myVDOM
ReactDOM.render( h(myVDOM), document.getElementById('react-main') );