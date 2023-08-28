import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// #### First Component

const books = [
  {
    title: "Poppy Cooks: The Actually Delicious Air Fryer Cookbook",
    author: "Poppy O'Toole",
    img: "./images/81CFHLszkjL._AC_UL900_SR900,600_.jpg",
    id: 1,
  },
  {
    title: "The Last Devil To Die",
    author: "Richard Osman",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71+HvqfKF-L._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

const names = ["john", "peter", "susan"];

const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

//arguments
someFunc("job", "developer");

const someObject = {
  name: "john",
  job: "developer",
  location: "florida",
  id: 1,
};

const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.75rem" }}
      >
        {author}
      </h4>
    </article>
  );
};

// const Title = () => {
//   return <h2>Poppy Cooks: The Actually Delicious Air Fryer Cookbook</h2>;
// };
// const Author = () => <h4>Poppy O'Toole</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// arrow function also works

// const Greeting = () => {
//   return <h2>My First Component</h2>;
// };
