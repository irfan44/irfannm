import { Tab } from '@headlessui/react'

import PostList from 'components/blog/PostList'
import type { PostsModel } from 'lib/models/post'

interface Props {
  posts: PostsModel
}

const Posts = ({ posts }: Props) => {
  const allPosts = posts
  const techPosts = posts.filter((posts) => posts.category === 'Tech')
  const generasiGigihPosts = posts.filter(
    (posts) => posts.category === 'GenerasiGigih'
  )

  const categoryList = [
    { category: 'All', posts: allPosts },
    { category: 'Tech', posts: techPosts },
    { category: 'Generasi Gigih', posts: generasiGigihPosts },
  ]

  return (
    <Tab.Group>
      <Tab.List className="mx-auto flex h-9 w-fit space-x-2 rounded-full border border-neutral-200 bg-secondary px-1 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-800">
        {categoryList.map((items) => {
          return (
            <Tab
              key={items.category}
              className={({ selected }) =>
                selected
                  ? 'rounded-full bg-white px-3 py-1 font-bold text-black dark:bg-neutral-900 dark:text-white'
                  : 'px-3 py-1'
              }
            >
              {items.category}
            </Tab>
          )
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
          )
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Posts
