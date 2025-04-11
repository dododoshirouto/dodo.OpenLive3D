# dodo.OpenLive3D

OpenLive3D を自分用に改造してるやつ。

---

## 🚀 いますぐ試す

- ~~[🔗 本番サイト](https://openlive3d.com/)~~
- 工事中

---

## 🎯 これはなに？

推し活、配信、収録、会議まで。  
**表情・カメラの動き**を軽いマシンでも扱えるようにしたかった。

このリポジトリでは、以下のカスタマイズを追加中：

### 🔧 改造ポイント（予定含む）

- [x] Cookieの有効期限変更（保存設定を長期間に）
- [x] 設定のExport/Import機能
- [x] 描画処理を軽量化
  - [x] カメラ入力の解像度をフレームレートを指定できるようにする
  - [x] three.jsのアンチエイリアスを無効にする
  - [x] リムライトをオン・オフできるようにする
  - [x] 表情の更新頻度を下げる
  - [x] 変化のあるボーン以外を処理スキップする
- [ ] 使わない機能を非表示にする（音楽とか、表情とか）
  - [ ] 音楽(BGM)を非表示
- [ ] どのカメラを選択したかを保存する（Export/Importには含めない）
- [ ] アンチエイリアシング(css？)
- [ ] Emissionの発酵具合を調整できるようにする

### 💭 できたらいいなぁ

- [ ] 言語を自動取得
- [ ] 口の形を開閉以外も表現する(a/aaとi/ihを縦横で組み合わせる)
- [ ] 回転オフセット（カメラに角度が付いてても使えるように）
  - [ ] 回転オフセットのキャリブレーション
- [ ] 瞳を上下にも動くように
- [ ] モデルを選択式にする
- [ ] 服やオブジェクトに文字を書いて表示する
- [ ] 指トラッキング
- [ ] 背景透過出力
  - [ ] WebSocketでランドマーク情報を送受信する
  - [ ] 3Dを描画しないモード
  - [ ] 受け取ったランドマーク情報で動くモード
  - [ ] OBS用に3Dだけを背景透過で表示するモード
- [ ] スマホ対応

※ 元プロジェクトと一部挙動が違うことがあります

---

## 解析メモ

### VRMモデルの描画をしてるとこを探す

- index.html: requestAnimationFrame(initLoop);
- control-manager.js: checkIntegrate()
- control-manager.js: requestAnimationFrame(viLoop);
- control-manager.js: updateVRMScene();
- control-manager.js: drawScene();
- gui-layout.js: renderer.render(scene, camera);

### 設定GUIの追加

- gui-layout.js: createLayout()

---

## 🛠 技術メモ

- [Python WebSocket Server](https://github.com/dododoshirouto/PythonWebSocketServer)

---

## 👤 クレジット

- 本家: [OpenLive3D](https://github.com/OpenLive3D)
- 改造者(ぼく): [どどど素人（@super_amateur_c）](https://twitter.com/super_amateur_c)

---

## 💬 お問い合わせとか

- Twitter: [@super_amateur_c](https://twitter.com/super_amateur_c)
