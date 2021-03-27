/**
 * pages/SearchTemplate
 * PresentationalComponent
 * @package Component
 */
import React from 'react'
/* components */
import { BaseLayout } from '@/components/layouts/BaseLayout'
import { PageTitle } from '@/components/common/atoms/PageTitle'
import { SearchInputForm } from '@/components/common/molcules/SearchInputForm'
import { SearchBlogItem } from './organisms/SearchBlogItem'
import { BlogItemResponsive } from '@/components/common/molcules/BlogItemResponsive'
/* types */
import { BlogItemType } from '@/types/blog'
import { EventType } from '@/types/event'
/* styles*/
import styles from './styles.module.scss'

/**
 * props
 */
type Props = {
  breadName: string
  searchText: string
  showBlogList: BlogItemType[]
  onChange: EventType['onChange']
}

/**
 * presenter
 * @param props
 * @returns
 */
export const Presenter: React.FC<Props> = (props: Props) => {
  const { breadName, searchText, showBlogList, onChange } = props

  return (
    <BaseLayout breadName={breadName}>
      <div className={styles.container}>
        <PageTitle title="検索結果" />
        {/* 検索フォーム */}
        <div className={styles.input}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            onChange={onChange}
          />
        </div>
        <div className={styles.input__responsive}>
          <SearchInputForm
            text={searchText}
            placeholder="検索"
            size={32}
            onChange={onChange}
          />
        </div>

        {/* 検索結果一覧 */}
        <div className={styles.list}>
          {showBlogList.length > 0 &&
            showBlogList.map((blog) => (
              <SearchBlogItem key={blog.id} blogItem={blog} />
            ))}

          {showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>

        {/* 検索結果一覧 レスポンシブ */}
        <div className={styles.list__responsive}>
          {showBlogList.length > 0 &&
            showBlogList.map((blog) => (
              <BlogItemResponsive key={blog.id} blogItem={blog} />
            ))}

          {showBlogList.length === 0 && (
            <div className={styles.unknown}>
              <p>検索したキーワードは記事がありませんでした。</p>
              <p>別のキーワードで検索してみてください。</p>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}
