import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UploadAvatar from "./UploadAvatar";

describe("<UploadAvatar />", () => {
  test("it should mount", () => {
    render(<UploadAvatar />);

    const uploadavatar = screen.getByTestId("UploadAvatar");

    expect(uploadavatar).toBeInTheDocument();
  });
});
