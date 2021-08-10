# Learning next.js  

## 開発環境手順  
1. make start-up
2. make bash
3. npm i --force  
※2021/8/5  
simplebar-reactがReact17系に対応してないので強制的に入れる  
※simplebar-react公式はReact17系でも問題ないとのこと  
4. npm run dev

## 技術スタック  
React 17.0.2  
Next 11.0.1  
SWR 0.5.6  
ホスティング  
vercel  

[Apiサーバ](https://github.com/tsubasa111/learning-go-echo)    
Go 1.5  
echo 4  

## ディレクトリ構造  

```
├── src
│   ├── pages ルーティング
│   │   └── [PageName]
│   │           ├── index.tsx
│   │           └── [PageName]
│   ├── components
│   │   ├── identities ページ単位で必要なパーツ
│   │   │   └── [Page Name]
│   │   │       └──[Component Name]
│   │   │          ├── index.tsx
│   │   │          └── style.tsx
│   │   │
│   │   ├── originals 特定の用途でしか使われない
│   │   ├── templates レイアウト
│   │   └── uiParts 共通UIパーツ
│   │       └── [Component Name]
│   │           ├── index.tsx
│   │           └── style.tsx
│   │
│   ├── models 型定義
│   ├── pageStyles pagesに直接使う なくなる予定
│   ├── styles 全体のスタイル
│   └── utils 他に必要なもの
```
