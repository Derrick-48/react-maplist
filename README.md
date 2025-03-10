# MapList Component Documentation

Welcome to the **MapList** documentation! This document will guide you through installing, using, and customizing MapList, a performant list component with animations and lazy loading.

---

## 📦 Installation

You can install MapList via **npm** or **yarn**:

```sh
npm install maplist-component
```

or

```sh
yarn add maplist-component
```

---

## 🚀 Usage

To use MapList in your project, import it and pass your data:

```jsx
import MapList from 'maplist-component';

const data = ["Item 1", "Item 2", "Item 3", "Item 4"];

<MapList 
  data={data} 
  renderItem={(item) => <div>{item}</div>} 
/>;
```

---

## 🎛️ Props

| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array` | The list of items to render. |
| `renderItem` | `Function` | Function to render each item. |
| `keyExtractor` | `Function` | Extracts a unique key for each item. |
| `horizontal` | `Boolean` | Displays items in a horizontal list. |
| `showsScrollIndicator` | `Boolean` | Shows or hides the scrollbar. |
| `itemSpacing` | `Number` | Spacing between items. |
| `numColumns` | `Number` | Number of columns (grid layout). |
| `numRows` | `Number` | Number of rows (grid layout). |
| `onEndReached` | `Function` | Callback when reaching the end of the list. |

---

## 🎨 Customization

You can customize the styles of the MapList component using **Tailwind CSS** or any custom styles:

```jsx
<MapList 
  data={data} 
  renderItem={(item) => (
    <div className="p-4 bg-gray-200 rounded-lg shadow-md">{item}</div>
  )} 
/>;
```

---

## 🌍 Documentation Preview

To preview the documentation site locally, clone this repository and install dependencies:

```sh
git clone https://github.com/yourusername/maplist-docs.git
cd maplist-docs
npm install
npm start
```

This will start a local development server where you can view the documentation in a browser.

---

## 🔄 Updating the Published Package

To update the already public **MapList** package on **npm**, follow these steps:

1. Make your changes in the repository.
2. Update the version number in `package.json` (e.g., `1.0.1` to `1.0.2`).
3. Run the following commands:

```sh
git add .
git commit -m "Updated MapList to version X.X.X"
npm version patch # or minor/major depending on changes
npm publish
```

This will publish the updated package to **npm**, making it available to users.

---

## 🌟 Support

For questions or contributions, visit the **GitHub repository** or open an **issue**.

Happy coding! 🚀
