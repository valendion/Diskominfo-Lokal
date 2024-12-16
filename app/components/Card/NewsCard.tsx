import { NewsModal } from "~/model/NewsModel";
import { formatDate } from "~/utils/FormatDate";

const NewsCard = ({
  title,
  excerpt,
  image,
  date,
  link,
}: Pick<NewsModal, "title" | "excerpt" | "image" | "date" | "link">) => {
  return (
    <a
      href={link}
      target="_blank"
      className="rounded w-80 h-96  aspect-[3/4] flex flex-col border shadow-lg overflow-hidden"
    >
      <div className="p-4">
        <img
          src={"https://picsum.photos/200/300"}
          alt="News"
          className="w-full h-1/4"
        />
        <p className="text-lg font-semibold mb-2 mt-4 line-clamp-2">
          {title.rendered}
        </p>
        <p
          className="text-gray-700 text-sm line-clamp-3"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        />
        <p className="text-base font-light mt-4">{formatDate(date)}</p>
      </div>
    </a>
  );
};

export default NewsCard;
