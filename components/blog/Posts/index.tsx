import { Tab } from '@headlessui/react';
import PostList from 'components/blog/PostList';
import AllPosts from 'types/all-posts';

const Posts = ({ allPosts }: AllPosts) => {
  const everyPosts = allPosts.slice(0);
  const techPosts = allPosts.filter((posts) => posts.category === 'Tech');
  const generasiGIGIHPosts = allPosts.filter(
    (posts) => posts.category === 'Generasi Gigih'
  );

  const categoryList = [
    { category: 'All', posts: everyPosts },
    { category: 'Tech', posts: techPosts },
    { category: 'Generasi Gigih', posts: generasiGIGIHPosts },
  ];

  return (
    <Tab.Group>
      <Tab.List className="space-x-2 mx-auto px-1 py-1 h-9 flex text-sm border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-full w-fit">
        {categoryList.map((items) => {
          return (
            <Tab
              key={items.category}
              className={({ selected }) =>
                selected
                  ? 'dark:bg-neutral-900 bg-white rounded-full px-3 py-1 font-bold text-black dark:text-white'
                  : 'px-3 py-1'
              }
            >
              {items.category}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {categoryList.map((items) => {
          return (
            <Tab.Panel key={items.category}>
              <div className="mt-8">
                <PostList posts={items.posts} />
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Posts;
