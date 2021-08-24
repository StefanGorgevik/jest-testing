import Header from "./components/Header/index";
import "./app.scss";
import Headline from "./components/headline";
import SharedButton from "./components/Button";
import ListItem from "./components/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

const tempArr = [
  {
    name: "stefan",
    email: "someMaiL@mail.com",
    age: 27,
    onlineStatus: true,
  },
];

const App = ({ posts, fetchPosts }) => {
  const fetchItems = () => {
    fetchPosts();
  };

  const configButton = {
    buttonText: "Get posts",
    emitEvent: fetchItems,
  };

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post) => {
              return (
                <ListItem key={post.id} title={post.title} desc={post.body} />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.postsReducer,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
