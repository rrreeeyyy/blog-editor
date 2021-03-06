import UserModel from '../UserModel';

/**
 * ユーザー情報更新時のレスポンスデータクラスです。
 */
export default class SaveUserResponse {

  /** ユーザーデータ */
  get userData() { return this._userData; }

  /**
   * コンストラクター
   * @constructor
   */
  constructor(response) {
    let user = response.body;
    this._userData = new UserModel(
      user.screen_name,
      user.description,
      user.image_url
    );
  }
}
