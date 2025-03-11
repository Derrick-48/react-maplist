# MapList Component Documentation

Welcome to the **MapList** documentation! This document will guide you through installing, using, and customizing MapList, a performant list component with animations and lazy loading.

---

## 📦 Installation

You can install MapList via **npm** or **yarn**:

```sh
npm install react-maplist
```

or

```sh
yarn add react-maplist
```

---

## 🚀 Usage

To use MapList in your project, import it and pass your data:

```jsx
import MapList from 'react-maplist';

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



## 🌟 Support

For questions or contributions, visit the **GitHub repository** or open an **issue**.

Happy coding! 🚀
