import React from "react";
import { configure, shallow } from "enzyme";
import Header from "../header";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Grocery component", () => {
  const wrapper = shallow(<Header />);
  it("should generate and match snapshot", async () => {
    expect(wrapper).toMatchSnapshot();
  });
});
