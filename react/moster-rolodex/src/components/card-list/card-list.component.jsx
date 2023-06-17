import { Component } from "react";

class CardList extends Component {
  render() {
    const { filteredMonsters } = this.props;
    return (
      <div>
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
