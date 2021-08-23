import Header from "./components/Header/index";
import "./app.scss";
import Headline from "./components/headline";

const tempArr = [
  {
    name: "stefan",
    email: "someMaiL@mail.com",
    age: 27,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
