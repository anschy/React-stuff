import React from "react";

class Highlight extends React.Component {
  render() {
    let text = this.props.text;
    let highlight = this.props.highlight;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        Author :{" "}
        {parts.map((part) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark style={{ backgroundColor: "skyblue" }}>{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  }
}
class ProductRow extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          color: "black",
          backgroundColor: "lightblue",
          padding: "20px"
        }}
      >
        <tr>
          <td>Isbn: {this.props.book.isbn}</td>
        </tr>
        <tr>
          <td>Title: {this.props.book.title}</td>
        </tr>
        <tr>
          <td>Subtitle: {this.props.book.subtitle}</td>
        </tr>
        <tr>
          <td>
            <Highlight
              text={this.props.book.author}
              highlight={this.props.filterText}
            />
          </td>
        </tr>
      </div>
    );
  }
}

class ProductTable extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.debounce = this.debounce.bind(this);
  // }

  // debounce = (func, delay) => {
  //   let inDebounce
  //   return function() {
  //     const context = this
  //     const args = arguments
  //     clearTimeout(inDebounce)
  //     inDebounce = setTimeout(() =>
  //     func.apply(context, args)
  //     , delay)
  //   }
  // }

  render() {
    // const display = () => {
    //   const filterText = this.props.filterText;
    //   const rows = [];
    //   this.props.books.books.forEach((product) => {
    //     if (product.author.indexOf(filterText) === -1) {
    //       return;
    //     }
    //     rows.push(
    //       <ProductRow book={product} filterText={filterText} key={product.isbn} />
    //     );
    //   });
    //   console.log('hello')
    //   return rows
    // }
    // const func = this.debounce(display,3000);
    // rows.push(func())
    // display();
    const rows = [];
    const filterText = this.props.filterText;
    this.props.books.books.forEach((product) => {
      if (product.author.indexOf(filterText) === -1) {
        return;
      }
      rows.push(
        <ProductRow book={product} filterText={filterText} key={product.isbn} />
      );
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label>Search: </label>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            margin: "auto",
            marginBottom: "10px"
          }}
        >
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextChange={this.handleFilterTextChange}
          />
        </div>
        <div
          style={{ justifyContent: "center", display: "flex", margin: "auto" }}
        >
          <ProductTable
            books={this.props.books}
            filterText={this.state.filterText}
          />
        </div>
      </div>
    );
  }
}

export default FilterableProductTable;
