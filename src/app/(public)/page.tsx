import PostCard from "@/components/post/PostCard";
import { getPosts, searchPosts } from "@/lib/post";
// import { Post } from '@/types/post'

type SearchParams = {
  search?: string;
};

export default async function PostPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolveSearchParams = await searchParams;
  const query = resolveSearchParams.search || "";

  const posts = query ? await searchPosts(query) : await getPosts();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
