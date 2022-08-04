import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card.js";

function PaginateItems({ itemsPerPage, dados }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState(dados);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <React.StrictMode>
      <Card currentItems={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item_ExColaborado"
        pageLinkClassName="page-link_ExColaborado "
        previousClassName="page-item_ExColaborado"
        previousLinkClassName="page-link_ExColaborado "
        nextClassName="page-item_ExColaborado"
        nextLinkClassName="page-link_ExColaborado "
        breakClassName="page-item_ExColaborado"
        breakLinkClassName="page-link_ExColaborado "
        containerClassName="paginationExColaborado"
        activeClassName="active_ExColaborado"
        renderOnZeroPageCount={null}
      />
    </React.StrictMode>
  );
}

function Paginate({ dados }) {
  return <PaginateItems itemsPerPage={10} dados={dados} />;
}
export default Paginate;
