import React, { useState } from "react";
import Pagination from "./";

const Template = (args) => <Pagination {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  totalPages: 40,
  defaultSelectedPage: 3,
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
          onChange={(e) => setTotalPages(parseInt(e.target.value), 10)}
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
