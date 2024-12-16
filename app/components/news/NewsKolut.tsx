import NewsCard from "../Card/NewsCard";

export default function NewsKolut({ posts }) {
  return (
    <div>
      <h2 className="text-2xl font-bold my-8">Berita Terbaru</h2>
      <div className="pb-5 flex mt-10 space-x-4 overflow-x-auto overflow-y-hidden max-w-full px-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="flex-shrink-0 w-80">
              <NewsCard
                title={post.title || "No Title"}
                excerpt={post.excerpt || "No Excerpt"}
                image={post.imageUrl}
                date={post.modified}
                link={post.link}
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada berita tersedia</p>
        )}
      </div>
    </div>
  );
}
