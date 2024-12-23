import NewsCard from "../Card/NewsCard";

export default function NewsKolut({ posts }) {
  return (
    <div>
      <h2 className="text-2xl font-bold my-8">Berita Terbaru</h2>
      <div className="pb-5 grid grid-cols-3 gap-4 mt-10 max-w-full px-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="">
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
