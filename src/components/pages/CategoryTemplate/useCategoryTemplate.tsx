/**
 * useCategoryTemplate
 * @package Hooks
 */
import React from 'react'
import { useRouter } from 'next/router'
/* contexts */
import { useBlogState } from '@/contexts/BlogContext'
/* constants */
import { NOCHITOKU_URL, BASE_TITLE, BLOG_SHOW_COUNT } from '@/constants/config'
/* types */
import { MetaHeadType } from '@/types/metaHead'

/**
 * interface
 */
interface HooksParams {
  breadName: string
}

/**
 * useCategoryTemplate
 * @param {HooksParams} params
 * @returns
 */
export const useCategoryTemplate = (params: HooksParams) => {
  /* params */
  const { breadName } = params
  /* router */
  const router = useRouter()
  /* contexts */
  const { blogList, totalCount } = useBlogState()
  /* local */
  const [metaData] = React.useState<MetaHeadType>({
    title: `「${breadName}」の記事一覧 | ${BASE_TITLE}`,
    description:
      'のちのち役に立つITエンジニアの技術ブログ。React, Next.jsをはじめとしたフロントエンドのスキルや、AWS, Node.js, ReactNativeなど幅広いITスキルのノウハウを発信しています。',
    keyword: 'エンジニア,IT,プログラミング,フロントエンド,AWS',
    image: NOCHITOKU_URL + '/assets/share_image.png',
    url: NOCHITOKU_URL + router.asPath,
  })

  return {
    state: {
      metaData,
      blogList,
      totalCount,
      BLOG_SHOW_COUNT,
    },
  }
}
