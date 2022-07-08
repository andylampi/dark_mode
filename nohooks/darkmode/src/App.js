import React from "react";
import Post from "./compo/post";
import PostDate from "./compo/postDate";

const ENUMCLS = {
  dark: "dark-mode",
  light: "light-mode",
};



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: PostDate, mode:"" };
  }
  componentDidMount = () => {
    const handler = (event) => {
      this.setState({ mode: event.matches ? ENUMCLS.dark : ENUMCLS.light });
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handler);
    this._cleanUpFn = () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }
  componentWillUnmount() {
    this._cleanUpFn();
  }
  toggleMode = () => {
    const mode = this.state.mode === ENUMCLS.dark ? ENUMCLS.light : ENUMCLS.dark;
    this.setState({ mode });
  };
  render() {
    return (
      <section className={`section-center ${this.state.mode}`}>
        <div className="container">
          <h2>DARK MODE APP</h2>
          <button id="change" onClick={this.toggleMode}>
            Cambia
          </button>
          {this.state.list.map((value) => {
            return <Post key={value.id} {...value} />;
          })}
        </div>
        {this.props.children}
      </section>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: true
    }
  }
  render() {
    return (
      <div className="multiApp">
        {this.state.child && <List><button onClick={() => this.setState({child: false})}>Cancella</button></List>}
        <List></List>
      </div>
    );
  }
}

export default App;
