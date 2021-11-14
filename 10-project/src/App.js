import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    const isNameBlank = !name || name.trim().length === 0;
    if (isNameBlank) {
      showAlert(true, "Please enter a valid input!", "danger");
    } else if (!isNameBlank && editing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setEditing(false);
      showAlert(true, "Edit successfull!", "success");
    } else {
      showAlert(true, `${name} has been added to the list!`, "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const inputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const clearAllHandler = () => {
    const confirm = window.confirm("Are you sure you want to empty the list?");
    if (confirm) {
      showAlert(true, "List cleared successfully!", "success");
      setList([]);
    } else {
      return;
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const removeItem = (itemID) => {
    const specificItem = list.find((item) => item.id === itemID);
    const confirm = window.confirm(
      `Are you sure you want to empty remove ${specificItem.title}?`
    );
    if (confirm) {
      showAlert(true, `${specificItem.title} has been removed!`, "success");
      setList(list.filter((l) => l.id !== itemID));
    } else {
      return;
    }
  };

  const editItem = (itemID) => {
    const specificItem = list.find((item) => item.id === itemID);
    setEditing(true);
    setEditID(itemID);
    setName(specificItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert {...alert} />}
        <h3>Groceries</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={inputChangeHandler}
          />
          <button type="submit" className="submit-btn">
            {editing ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} onItemDelete={removeItem} onItemEdit={editItem} />
          <button className="clear-btn" onClick={clearAllHandler}>
            Clear All
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
