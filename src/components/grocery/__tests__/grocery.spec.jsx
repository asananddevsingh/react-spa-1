import React from "react";
import { configure, shallow } from "enzyme";
import Grocery from "../grocery";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const groceryItems = {
  item1: {
    downVoteCount: 0,
    id: 1,
    imagePath:
      "https://raw.githubusercontent.com/asananddevsingh/grocery-app-exzeo/master/src/assets/items/01-sugar.jpg",
    name: "Icing Sugar",
    upVoteCount: 0
  },
  item2: {
    downVoteCount: 0,
    id: 2,
    imagePath:
      "https://raw.githubusercontent.com/asananddevsingh/grocery-app-exzeo/master/src/assets/items/02-gud.jpg",
    name: "Royal gud",
    upVoteCount: 1
  },
  item3: {
    downVoteCount: 0,
    id: 3,
    imagePath:
      "https://raw.githubusercontent.com/asananddevsingh/grocery-app-exzeo/master/src/assets/items/03-green.jpg",
    name: "Gur Chana",
    upVoteCount: 2
  },
  item4: {
    downVoteCount: 1,
    id: 4,
    imagePath:
      "https://raw.githubusercontent.com/asananddevsingh/grocery-app-exzeo/master/src/assets/items/04-masala.jpg",
    name: "Masala Chai",
    upVoteCount: 0
  }
};

const mockProps = {
  groceryItems,
  onInitGroceryItems: jest.fn(),
  onVoteUpItem: jest.fn(),
  onVoteDownItem: jest.fn()
};

describe("Grocery component", () => {
  const wrapper = shallow(<Grocery {...mockProps} />);
  const instance = wrapper.instance();

  it("should call componentDidMount", async () => {
    instance.componentDidMount();
  });

  it("should call voteUpHandler", async () => {
    instance.voteUpHandler();
  });

  it("should call voteDownHandler", async () => {
    instance.voteDownHandler();
  });
});
