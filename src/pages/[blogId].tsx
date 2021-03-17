/**
 * Blog記事
 * @package pages
 */
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
/* components */
import { BasePostPageLayout } from '@/components/layouts/BasePostPageLayout'
/* hooks */
import { useSetDate } from '@/hooks/SetData'
/* service */
import { getBlogBy, getBlogTotal } from '@/service/blogs'
import { getCategories } from '@/service/categories'
import { getProfileBy } from '@/service/profile'
/* types */
import { BlogItemType } from '@/types/blog'
import { CategoryType } from '@/types/category'
import { ProfileType } from '@/types/profile'

/**
 * props
 */
export type BlogDetailPorps = {
  blog: BlogItemType
  categories: CategoryType[]
  profile: ProfileType
}

/**
 * BlogsItemPage
 * @param props Porps
 * @returns
 */
const BlogsItemPage: NextPage<BlogDetailPorps> = (props) => {
  const { blog, categories, profile } = props
  const { setCategoryData, setProfileData } = useSetDate()
  const imageUrl = !!blog?.image ? blog.image.url : '/no_image.png'

  React.useEffect(() => {
    setCategoryData(categories)
    setProfileData(profile)
  }, [categories, setCategoryData, profile, setProfileData])

  return (
    <BasePostPageLayout>
      <section>
        <Image
          src={imageUrl}
          alt="Picture"
          width={498 * 1.5}
          height={332 * 1.5}
        />

        <h2>{blog.title}</h2>
        {blog.categories.length > 0 &&
          blog.categories.map((category) => (
            <h3 key={category.id}>カテゴリー：{category.name}</h3>
          ))}
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </section>
    </BasePostPageLayout>
  )
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { blogList } = await getBlogTotal()
  const paths = blogList.map((item: BlogItemType) => `/${item.id}`)
  return {
    paths,
    fallback: false, // getStaticPathsで返せないパスを全て404ページに返す
  }
}

/**
 * getStaticProps
 * @returns
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  let blogId = ''

  if (params?.blogId && typeof params.blogId === 'string') {
    blogId = params.blogId
  }

  const blogDetailData = await getBlogBy(blogId)
  const categoryData = await getCategories()
  const profile = await getProfileBy()
  const props: BlogDetailPorps = {
    blog: blogDetailData,
    categories: categoryData,
    profile: profile,
  }
  return { props }
}

export default BlogsItemPage
