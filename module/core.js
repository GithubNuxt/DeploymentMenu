export default class Deployment {
  constructor(selectBtn, Array) {
    this.menus = document.querySelectorAll(selectBtn); // トリガーとするクラス名
    this.moveClass = Array.addName; // 付与するクラス名
  }

  init() {
    this.onAction();
  }

  /* クラス付与削除の処理 */
  _setOpen() {
    for (let i = 0; i < this.menus.length; i++) {
      this.menus[i].classList.add(this.moveClass);
    }
  }
  _setClose() {
    for (let i = 0; i < this.menus.length; i++) {
      this.menus[i].classList.remove(this.moveClass);
    }
  }
  /* クリック処理 */
  onAction() {
    for (let i = 0; i < this.menus.length; i++) {
      this.menus[i].addEventListener("click", () => {
        if (this.menus[i].classList.contains(this.moveClass)) {
          this._setClose();
        } else {
          this._setOpen();
        }
      });
    }
  }
}
