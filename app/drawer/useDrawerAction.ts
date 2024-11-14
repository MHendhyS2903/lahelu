import { useCallback } from "react";
import { _useDrawerState } from "./useDrawerState";
import { useRouter } from "expo-router";
import { page } from "../../constants/Pages";

export const useDrawerAction = () => {
  const router = useRouter();

  const setState = _useDrawerState((state) => state.setState);

  const onPressMenu = useCallback(
    (activedMenu: string) => {
      const targetPage = activedMenu === page.main ? page.main : page.blank;
      router.navigate(targetPage);
      setState({ activedMenu });
    },
    [router, setState],
  );

  const onPressExplore = useCallback(
    (exploreMenuId: string) => {
      router.navigate(page.blank);
      setState({ activedMenu: exploreMenuId });
    },
    [router, setState],
  );

  return { onPressMenu, onPressExplore };
};
