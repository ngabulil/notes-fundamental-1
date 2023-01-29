import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getAllNotes } from "../utils/local-data";
import { deleteNote, getNote } from "../utils/local-data";
import PropTypes from "prop-types";


class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(this.props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        note: getNote(id),
      };
    });
  }

  render() {
    const notes = getAllNotes();
    return (
      <main>
        <h1>Catatan Aktif</h1>
        <SearchBar />

        <NoteList notes={notes} onDelete={this.onDeleteHandler} />
      </main>
    );
  }
}
HomePage.propTypes = {
  id: PropTypes.string,
}

export default HomePage;
