import { HTMLMotionProps } from 'framer-motion';

export interface MapListProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
  horizontal?: boolean;
  showsScrollIndicator?: boolean;
  itemSpacing?: number;
  numColumns?: number; // Number of columns (for vertical lists)
  numRows?: number; // Number of rows (for horizontal lists)
  containerStyle?: React.CSSProperties;
  animation?: {
    initial?: HTMLMotionProps<"div">["initial"];
    animate?: HTMLMotionProps<"div">["animate"];
    exit?: HTMLMotionProps<"div">["exit"];
    transition?: HTMLMotionProps<"div">["transition"];
  };
  initialNumToRender?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  EmptyComponent?: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  FooterComponent?: React.ReactNode;
}
