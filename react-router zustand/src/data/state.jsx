import { create } from "zustand";
import { immer } from "zustand-middleware/immer";

import { cloneDeep } from "lodash";

import Button from "../components/Card";
import Card from "../components/Card";

export const useSystemStore = create(
  immer((set, get) => ({
    SystemState: {
      theme: "dark",
      language: "en",
      background: {
        primary: "black",
        secondary: "white",
      },
    },

    SwitchTheme: () =>
      set((state) => ({
        SystemState: {
          ...state.SystemState,
          theme: state.SystemState.theme === "dark" ? "light" : "dark",
        },
      })),
  }))
);

export const useAppstore = create(
  immer((set, get) => ({
    AppState: {
      AppList: [
        {
          id: 1,
          name: "Button",
          url: "https://topcoderfullstack.com",
          icon: "/app/edge.svg",
          ondblclickList: [],
          type: Button,
          component: null,
          install: "InstallEdge",
          active: false,
        },
      ],
    },
    SwitchAppType: () => {
      set((state) => {
        state.AppState.AppList[0].tpye =
          state.AppState.AppList[0].type === Button ? Card : Button;
          state.AppState.AppList[0].name =
          state.AppState.AppList[0].type === Button ? Card : Button;
      });
    },
  }))
);
