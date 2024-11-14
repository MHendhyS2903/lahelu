import React, { useState, useCallback, useRef } from "react";
import { FlatList, ActivityIndicator, ViewToken } from "react-native";
import { PostItemProps } from "./PostItem";
import { colors } from "../../../../constants/Colors";
import { getPostsMock } from "../../../utils/mock";
import { styles } from "../styles/PostListStyles";
import PostItem from "./PostItem";

const PostList = () => {
  const [postItem, setPostItems] = useState<PostItemProps[]>(getPostsMock());
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const loadData = (page: number) => Promise.resolve(getPostsMock(page));

  const fetchAdditionalData = useCallback(() => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    loadData(currentPage + 1).then((newPostItems) => {
      setPostItems((previousItems) => [...previousItems, ...newPostItems]);
      setCurrentPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    });
  }, [isLoading, currentPage]);

  const handleViewableItemsChange = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      const currentFocusedItem = viewableItems.find(
        (item) => item.isViewable && item.item.mediaType === "video",
      );

      setActiveVideoId(currentFocusedItem ? currentFocusedItem.item.id : null);
    },
    [],
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      initialNumToRender={3}
      maxToRenderPerBatch={3}
      style={{ backgroundColor: colors.black }}
      data={postItem}
      renderItem={({ item }) => (
        <PostItem {...item} isFocused={activeVideoId === item.id} />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      onViewableItemsChanged={handleViewableItemsChange}
      viewabilityConfig={viewConfig}
      onEndReached={fetchAdditionalData}
      onEndReachedThreshold={0.1}
      ListFooterComponent={() => (
        <ActivityIndicator
          size={50}
          color={colors.laheluBlue}
          style={styles.loader}
        />
      )}
    />
  );
};

export default PostList;
