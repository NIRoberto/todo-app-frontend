import App from "../App";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

let wrapper;
describe("Todo app testing ", () => {
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test("Dummy test  ", () => {
    console.log("Ny first Jest react testing ");
  });
  test("Test  todo  app bg html elements ", () => {
    expect(wrapper.find(".main").childAt(0).type()).toEqual("div");
  });
  test("Test  todo  app main elements ", () => {
    let dark = false;

    expect(
      wrapper.find(".main").contains(
        <div
          className="main-item1"
          style={{
            backgroundImage: `${
              dark
                ? `url('https://image.shutterstock.com/image-vector/dark-blue-vector-background-curved-260nw-1031871925.jpg')`
                : `url('https://www.wallpapertip.com/wmimgs/40-407167_dark-blue-mountain-wallpaper.jpg')`
            } `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        />
      )
    ).toEqual(true);
  });
  test("Test app title ", () => {
    expect(wrapper.find("h3").text()).toContain("TODO");
  });
  test("Test app Footer text ", () => {
    expect(wrapper.find(".main-item2").text()).toContain(
      "Drag and drop to read the list"
    );
  });
});
