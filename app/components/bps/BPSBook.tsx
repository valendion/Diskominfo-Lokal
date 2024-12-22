import BPSBookCard from "../Card/BPSBookCard";
import { PaginationComp } from "../base/PaginationComp.client";
import { useNavigate, ScrollRestoration } from "@remix-run/react";

const BPSBook = ({ bps, currentPage }: { bps: any; currentPage: number }) => {
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    navigate(`/?page=${page}`, { preventScrollReset: true });
  };

  return (
    <>
      <h2 className="text-2xl font-bold my-8">Buku</h2>
      <PaginationComp
        currentPage={currentPage}
        totalPages={bps.data[0].pages || 1}
        onPageChange={handlePageChange}
      />
      <ScrollRestoration />
      <div className="grid grid-cols-4 gap-4">
        {bps.data[1].map((publication: any, index: number) => (
          <BPSBookCard books={publication} key={index} className="mb-2">
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {publication.title}
            </a>
          </BPSBookCard>
        ))}
      </div>
      <PaginationComp
        currentPage={currentPage}
        totalPages={bps.data[0].pages || 1}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default BPSBook;
