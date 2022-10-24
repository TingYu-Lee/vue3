# Vue3-開發環境
## 目的

- 減少全新專案的初期設定
- 確保開發環境的一致性
- 程式碼品質管控
- 版控交付檢核

## 參考
[vue3-eslint-stylelint-demo (Volar + ESLint + stylelint + husky)](https://github.com/sethidden/vue3-eslint-stylelint-demo)

## 功能
### Expected
1. 錯誤應透過 intellisense 提示 ( ESLint、StyleLint )
2. 執行 `save` 步驟時，應執行 Lint 的 fix
3. commit時，此次異動的程式碼如有 lint 的錯誤，會被中斷，請透過 git log 查看錯誤

> 檢查 VScode 的 intellisense 是由 `ESLint` 提供，而非 `tsconfig`
> 
> 請關閉非建議的套件
> 
> setting.json 請使用 工作區

### 前置作業
1. 進行 `npm install`。
2. 安裝建議的 **VSCode** Extension
3. **從 console 視窗檢查 `node_modules` 下的 `eslintServer.js` 運行正常**

## 組建

- Vue3
- ESLint
- ESLint Prettier
- StyleLint
- Husky
- lint-staged

> 以下為 `extension` 的設定筆記

## Vue.js - The Progressive JavaScript Framework

_create project memo._

√ Add TypeScript? ... / Yes

√ Add JSX Support? ... / Yes

√ Add Vue Router for Single Page Application development? ... / Yes

√ Add Pinia for state management? ... / Yes

√ Add Vitest for Unit Testing? ... / Yes

√ Add Cypress for End-to-End testing? ... / Yes

√ Add ESLint for code quality? ... No /

## ESLint

### initialize

1. create 專案時勾選，然後保存 `eslintrc.js`\*\*

因為各框架 ( `vue`、`react`、`angular` )提供的設定是相對穩定的

2. 再進行 ESLint 的 `init`\*\*

3. 透過版控比對 & 合併設定，以框架的為主進行覆蓋

#### `extends` 的順序

注意規則順序 ( `overwrite` )

以 `vue` 為例:

- 'airbnb-base' ( `.ts` / `.js` )
- '@vue/airbnb' ( `.vue` )

### eslint --init

√ How would you like to use ESLint? · style

√ What type of modules does your project use? · esm

√ Which framework does your project use? · vue

√ Does your project use TypeScript? · / Yes

√ Where does your code run? · browser

√ How would you like to define a style for your project? · guide

√ Which style guide do you want to follow? · airbnb

√ What format do you want your config file to be in? · JavaScript

√ Would you like to install them now with npm? · / Yes
