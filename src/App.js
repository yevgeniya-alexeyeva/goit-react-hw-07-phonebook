import "./App.css";
import { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "./redux/operations";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Loader from "react-loader-spinner";
import { getIsLoading } from "./redux/contacts-selectors";

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="#fc4445"
            height={100}
            width={100}
            timeout={3000}
          />
        ) : (
          <ContactList />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
