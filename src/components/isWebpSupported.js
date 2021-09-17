const canUseWebP = () => {
    const elem = document.createElement('canvas')
    if (elem.getContext && elem.getContext('2d')) {
        // CanvasからWebPを出力して、結果がdata:image/webpで始まっているかチェック
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }
    // Canvas自体が使えなければ非対応扱いにする
    return false
}

// 最初に一度だけ判定して結果をexport
export default canUseWebP()
