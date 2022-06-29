import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store";
import Search from "./Search";

test("Search renderer", () => {
    const component = render(
        <Provider store={store}>
            <Search />
        </Provider>
    );

    expect(component.getByPlaceholderText("Selecciona una opción"));
});

