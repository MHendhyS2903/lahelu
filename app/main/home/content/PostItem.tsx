import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import {
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
  ResizeMode,
  Video,
} from "expo-av";
import { colors } from "../../../../constants/Colors";
import { TextMain } from "../../../../components/TextMain";
import {
  PlayIcon,
  EllipsisIcon,
  CircleDollarSignIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  MessageSquareTextIcon,
  VolumeXIcon,
  Volume2Icon,
  Share2Icon,
} from "lucide-react-native";
import { TouchableMain } from "../../../../components/TouchableMain";
import { texts } from "../../../../constants/Texts";
import { styles } from "../styles/PostItemStyles";
import Slider from "@react-native-community/slider";
import {
  Gesture,
  GestureHandlerRootView,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

export type PostItemProps = {
  id?: string;
  userName?: string;
  ageTime?: string;
  profileImageUrl?: string;
  content?: string;
  mediaUrl?: string;
  mediaType?: string;
  tags?: string[];
  niceVotes?: number;
  badVotes?: number;
  commentCount?: number;
  isFocused?: boolean;
};

const PostItem: React.FC<PostItemProps> = ({
  userName,
  ageTime,
  profileImageUrl,
  content,
  mediaUrl,
  mediaType,
  tags,
  niceVotes,
  commentCount,
  isFocused,
}) => {
  const videoRef = useRef<Video>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [mediaAspectRatio, setMediaAspectRatio] = useState<number>(16 / 9);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (mediaType?.toLowerCase() === "image" && mediaUrl) {
      Image.getSize(mediaUrl, (width, height) => {
        setMediaAspectRatio(width / height);
      });
    }
  }, [mediaUrl, mediaType]);

  useEffect(() => {
    if (mediaType?.toLowerCase() === "video" && videoRef.current) {
      if (isFocused) {
        videoRef.current.playAsync().catch(() => {});
        setIsPlaying(true);
        setLoading(true);
      } else {
        videoRef.current.pauseAsync().catch(() => {});
        setIsPlaying(false);
      }
    }
  }, [isFocused, mediaType]);

  const togglePlayPause = useCallback(async () => {
    if (isPlaying) {
      videoRef.current?.pauseAsync().catch(() => {});
      setIsPlaying(false);
    } else {
      videoRef.current?.playAsync().catch(() => {});
      setIsPlaying(true);
      setLoading(true);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
    videoRef.current?.setIsMutedAsync(!isMuted).catch(() => {});
  }, [isMuted]);

  const handlePlaybackStatusUpdate = useCallback(
    (status: AVPlaybackStatus) => {
      if (status && status.isLoaded) {
        const playing = (status as AVPlaybackStatusSuccess).isPlaying;
        if (playing !== isPlaying) setIsPlaying(playing);

        const positionMillis = (status as AVPlaybackStatusSuccess)
          .positionMillis;
        const videoDuration =
          (status as AVPlaybackStatusSuccess).durationMillis || 1;

        setSliderValue(positionMillis / 1000);
        setDuration(videoDuration / 1000);
        setLoading(false);
      }
    },
    [isPlaying],
  );

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    videoRef.current?.setPositionAsync(value * 1000);
  };

  const scale = useSharedValue(1);
  const startScale = useSharedValue(0);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      startScale.value = scale.value;
    })
    .onUpdate((event) => {
      scale.value = Math.min(Math.max(startScale.value * event.scale, 0.5), 3);
    })
    .onEnd(() => {
      scale.value = 1;
    })
    .runOnJS(true);

  const pinchStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    zIndex: scale.value > 1 ? 9999 : 1,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.profileRowStyle}>
        <Image
          source={{ uri: profileImageUrl }}
          style={styles.profileImageStyle}
        />
        <TextMain style={styles.userNameStyle}>{userName}</TextMain>
        <TextMain style={styles.timeAgoStyle}>({ageTime})</TextMain>
        <View style={styles.spacer} />
        <TouchableMain>
          <EllipsisIcon size={24} color={colors.laheluWhite} />
        </TouchableMain>
      </View>

      <TextMain style={styles.textContent}>{content}</TextMain>

      {mediaUrl && (
        <GestureHandlerRootView style={[styles.mediaContent]}>
          <GestureDetector gesture={pinch}>
            <Animated.View
              style={[{ aspectRatio: mediaAspectRatio }, pinchStyle]}
            >
              {mediaType?.toLowerCase() === "video" ? (
                <TouchableWithoutFeedback onPress={togglePlayPause}>
                  <View style={StyleSheet.absoluteFill}>
                    <Video
                      ref={videoRef}
                      source={{ uri: mediaUrl }}
                      style={StyleSheet.absoluteFill}
                      resizeMode={ResizeMode.CONTAIN}
                      isLooping
                      onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                    />
                    {!isPlaying && !loading && (
                      <View style={styles.playIconOverlay}>
                        <PlayIcon size={48} color={colors.laheluWhite} />
                      </View>
                    )}
                    <Slider
                      style={styles.sliderStyle}
                      minimumValue={0}
                      maximumValue={duration}
                      value={sliderValue}
                      onSlidingComplete={handleSliderChange}
                      minimumTrackTintColor={colors.laheluBlue}
                      maximumTrackTintColor={colors.black}
                      thumbTintColor={colors.laheluWhite}
                      thumbImage={require("../../../../assets/images/sliderDot.png")}
                    />

                    {mediaType?.toLowerCase() === "video" && (
                      <TouchableMain
                        onPress={toggleMute}
                        style={styles.muteButtonStyle}
                      >
                        {isMuted ? (
                          <VolumeXIcon size={24} color={colors.laheluWhite} />
                        ) : (
                          <Volume2Icon size={24} color={colors.laheluWhite} />
                        )}
                      </TouchableMain>
                    )}
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <Image
                  source={{
                    uri: mediaUrl,
                  }}
                  style={StyleSheet.absoluteFill}
                  resizeMode="contain"
                />
              )}
            </Animated.View>
          </GestureDetector>
        </GestureHandlerRootView>
      )}

      <View style={styles.tipTagContainer}>
        <View style={styles.tipTagItem}>
          <CircleDollarSignIcon size={16} color={colors.codeDC952B} />
          <TextMain style={styles.tipText}>{texts.tip}</TextMain>
        </View>

        {(tags ?? []).map((tag, index) => (
          <View key={index} style={styles.tipTagItem}>
            <TextMain style={styles.chipText}># {tag}</TextMain>
          </View>
        ))}
      </View>

      <View style={styles.actionRow}>
        <View style={styles.niceBadContainer}>
          <TouchableMain style={styles.likeButtonStyle}>
            <ThumbsUpIcon size={20} color={colors.laheluWhite} />
            <TextMain style={styles.actionTextStyle}>{niceVotes}</TextMain>
          </TouchableMain>

          <TouchableMain style={styles.dislikeButtonStyle}>
            <ThumbsDownIcon size={20} color={colors.laheluWhite} />
          </TouchableMain>
        </View>

        <TouchableMain style={styles.commentButtonStyle}>
          <MessageSquareTextIcon size={20} color={colors.laheluWhite} />
          <TextMain style={styles.actionTextStyle}>{commentCount}</TextMain>
        </TouchableMain>

        <View style={styles.flexSpacer} />

        <TouchableMain style={styles.share2IconStyle}>
          <Share2Icon size={20} color={colors.laheluWhite} />
        </TouchableMain>
      </View>
    </View>
  );
};

export default PostItem;
