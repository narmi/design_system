import React, { useState } from "react";
import { expect, waitFor } from "storybook/test";
import Pagination from "./";

const Template = (args) => <Pagination {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  totalPages: 40,
  defaultSelectedPage: 3,
};

/**
 * Interaction test verifying the next/previous arrows move the selected
 * page (tracked via `aria-current`).
 */
export const NavigatesWithArrows = {
  name: "Interaction: Navigates with next/previous arrows",
  render: () => <Pagination totalPages={10} defaultSelectedPage={3} />,
  play: async ({ canvas, userEvent }) => {
    expect(canvas.getByRole("button", { name: "Page 3" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    // advance to the next page
    await userEvent.click(canvas.getByRole("button", { name: "Next page" }));
    await waitFor(() =>
      expect(canvas.getByRole("button", { name: "Page 4" })).toHaveAttribute(
        "aria-current",
        "page",
      ),
    );

    // go back to the previous page
    await userEvent.click(
      canvas.getByRole("button", { name: "Previous page" }),
    );
    await waitFor(() =>
      expect(canvas.getByRole("button", { name: "Page 3" })).toHaveAttribute(
        "aria-current",
        "page",
      ),
    );
  },
};

/**
 * Interaction test verifying clicking a page number selects that page.
 */
export const SelectsPageNumber = {
  name: "Interaction: Selects a page by number",
  render: () => <Pagination totalPages={10} defaultSelectedPage={3} />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Page 5" }));
    await waitFor(() =>
      expect(canvas.getByRole("button", { name: "Page 5" })).toHaveAttribute(
        "aria-current",
        "page",
      ),
    );
    expect(canvas.getByRole("button", { name: "Page 3" })).not.toHaveAttribute(
      "aria-current",
      "page",
    );
  },
};

/**
 * Interaction test verifying the previous arrow is disabled on the first
 * page and does not change the selection.
 */
export const DisablesAtBounds = {
  name: "Interaction: Disables previous arrow at first page",
  render: () => <Pagination totalPages={10} defaultSelectedPage={1} />,
  play: async ({ canvas, userEvent }) => {
    const prev = canvas.getByRole("button", { name: "Previous page" });
    expect(prev).toHaveAttribute("aria-disabled", "true");

    // clicking the disabled arrow keeps the selection on page 1
    await userEvent.click(prev);
    expect(canvas.getByRole("button", { name: "Page 1" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  },
};

export const FullyControlled = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPages, setTotalPages] = useState(40);

  const handlePageChange = (page) => {
    setSelectedPage(parseInt(page, 10));
  };

  return (
    <>
      <Pagination
        totalPages={totalPages}
        selectedPage={selectedPage}
        onPageChange={handlePageChange}
      />
      <div className="padding--all border--top margin--top">
        <label htmlFor="totalPages">Total pages</label>
        <select
          className="margin--left"
          id="totalPages"
          onChange={(e) => setTotalPages(parseInt(e.target.value, 10))}
        >
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="25">25</option>
          <option value="40" selected>
            40
          </option>
        </select>
      </div>
    </>
  );
};

export default {
  title: "Components/Pagination",
  component: Pagination,
};
