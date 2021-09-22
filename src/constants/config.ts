/**
 * config
 *
 * @package Constants
 */

/**
 * 1ページあたりのブログ記事表示件数
 */
export const BLOG_SHOW_COUNT =
  Number(process.env.NEXT_PUBLIC_BLOG_SHOW_COUNT) || 8

/**
 * ブログのURL
 */
export const NOCHITOKU_URL = 'mackey-blog.vercel.app'

/**
 * ブログのベースタイトル
 */
export const BASE_TITLE = 'マキログ'

/**
 * metadataのdescription固定文言
 */
export const METADATA_DESCRIPTION = {
  BASIC:
    '今まで本を読んで来なかったITエンジニアが本を読んで感想を溜めていきます',
  POLICY:
    'マキログ（以下、「当サイト」とします。）における利用規約は、下記の通りです。',
  TERM:
    'マキログ（以下、「当サイト」と言います。）では、お客様からお預かりする個人情報の重要性を強く認識し、個人情報の保護に関する法律、その他の関係法令を遵守すると共に、以下に定めるプライバシーポリシーに従って、個人情報を安全かつ適切に取り扱うことを宣言いたします。',
}

/**
 * metadataのkeyword固定文言
 */
export const METADATA_KEYWORD = {
  BASIC: 'エンジニア,IT,プログラミング,AWS,読書',
}

/**
 * metadataのimage固定画像
 */
export const METADATA_IMAGE = {
  BASIC: NOCHITOKU_URL + '/assets/share_image.png',
}
