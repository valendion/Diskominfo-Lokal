import { formatDate } from "~/utils/FormatDate";
import { Calendar } from "lucide-react";
const BPSBookCard = ({ books }) => {
  return (
    <a href={books.pdf} className="group relative block ">
      <span className="absolute inset-0 border-2 border-dashed border-black"></span>

      <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-4  ">
          <img
            src={books.cover}
            alt="Cover Book Kolaka Utara"
            className="h-full w-full"
          />
          <p className="overflow-hidden h-20 my-4  text-base leading-snug font-semibold line-clamp-3">
            {books.title}
          </p>
          <p className="text-sm flex ">
            <Calendar className="size-4 fill-slate-400 mr-2" />{" "}
            {formatDate(books.rl_date)}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BPSBookCard;
