import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapListProps } from './types';

function MapList<T>({
  data = [],
  renderItem,
  keyExtractor,
  horizontal = false,
  showsScrollIndicator = true,
  itemSpacing = 0,
  numColumns = 1,
  numRows = 1,
  containerStyle = {},
  animation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.2 }
  },
  initialNumToRender = 10,
  onEndReached,
  onEndReachedThreshold = 0.5,
  EmptyComponent,
  HeaderComponent,
  FooterComponent
}: MapListProps<T>) {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load initial items and trigger scroll event
  useEffect(() => {
    setVisibleItems(data.slice(0, initialNumToRender));
    requestAnimationFrame(() => handleScroll()); // Trigger scroll detection after mount
  }, [data, initialNumToRender]);

  // Function to load more items when scrolling reaches threshold
  const loadMoreItems = useCallback(() => {
    setVisibleItems((prevItems) => {
      const newLength = Math.min(prevItems.length + initialNumToRender, data.length);
      return data.slice(0, newLength);
    });
  }, [data, initialNumToRender]);

  // Handle scroll event
  const handleScroll = useCallback(() => {
    if (!containerRef.current || visibleItems.length >= data.length) return;

    const container = containerRef.current;
    const scrollPosition = horizontal
      ? container.scrollLeft + container.clientWidth
      : container.scrollTop + container.clientHeight;

    const totalSize = horizontal ? container.scrollWidth : container.scrollHeight;
    const threshold = totalSize * onEndReachedThreshold;

    if (scrollPosition >= totalSize - threshold) {
      loadMoreItems();
      if (onEndReached) onEndReached();
    }
  }, [visibleItems, data, horizontal, onEndReachedThreshold, onEndReached, loadMoreItems]);

  // Attach scroll event listener
  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll);
      return () => containerElement.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Hide scrollbar styles dynamically based on `showsScrollIndicator`
  useEffect(() => {
    if (!showsScrollIndicator && containerRef.current) {
      containerRef.current.style.scrollbarWidth = 'none'; // Hide scrollbar for Firefox
      (containerRef.current.style as any).msOverflowStyle = 'none'; // Hide scrollbar for IE/Edge
      containerRef.current.style.overflow = horizontal ? 'auto hidden' : 'hidden auto'; // Allow scrolling
    }
  }, [showsScrollIndicator, horizontal]);
  


  // Styles for scroll behavior
  const containerStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: horizontal ? `repeat(${numRows}, 1fr)` : `repeat(${numColumns}, 1fr)`,
    gridAutoRows: horizontal ? 'auto' : '1fr',
    gap: itemSpacing,
    overflowX: horizontal ? 'auto' : 'hidden',
    overflowY: horizontal ? 'hidden' : 'auto', 
    WebkitOverflowScrolling: 'touch',
    maxHeight: horizontal ? 'auto' : '400px', 
    maxWidth: horizontal ? '100%' : 'auto',
    scrollbarWidth: 'none', // Hide scrollbar for Firefox
    msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
    ...containerStyle
  };
  

  if (data.length === 0 && EmptyComponent) {
    return (
      <div ref={containerRef} style={containerStyles}>
        {HeaderComponent}
        {EmptyComponent}
        {FooterComponent}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={containerStyles}>
      {HeaderComponent}
      <AnimatePresence>
        {visibleItems.map((item, index) => (
          <motion.div
            key={keyExtractor(item, index)}
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            transition={{
              delay: index * 0.05,
              ...animation.transition
            }}
          >
            {renderItem(item, index)}
          </motion.div>
        ))}
      </AnimatePresence>
      {FooterComponent}
    </div>
  );
}

export default MapList;
