import { Tab } from '@headlessui/react'

import PostList from 'components/blog/PostList'
import type { CategorizedPostsModel } from 'lib/models/post'

interface Props {
  categorizedPosts: CategorizedPostsModel
}

const Posts = ({ categorizedPosts }: Props) => {
  return (
    <Tab.Group>
      <Tab.List className="mx-auto flex h-9 w-fit space-x-2 rounded-full border border-neutral-200 bg-secondary px-1 py-1 text-sm dark:border-neutral-700 dark:bg-neutral-800">
        {categorizedPosts.map((items) => {
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
        {categorizedPosts.map((items) => {
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
