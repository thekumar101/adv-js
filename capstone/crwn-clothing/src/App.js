const categories = [
  {
    title: "Hats",
    id: 1,
  },
  {
    title: "Jackets",
    id: 2,
  },
  {
    title: "Sneakers",
    id: 3,
  },
  {
    title: "Women",
    id: 4,
  },
  {
    title: "Men",
    id: 5,
  },
];
function App() {
  return (
    <div className="catergories-container">
      {categories.map(({ title, id }) => {
        return (
          <div class-name="category-container" key={id}>
            <div className="backgroud-image"></div>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Show Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
