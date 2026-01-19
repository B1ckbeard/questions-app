export type DrawerType = "info" | "filters" | "sidebar" | null;
export type DrawerSide = "left" | "right";

export interface DrawerState {
  isOpen: boolean;
  type: DrawerType;
  side: DrawerSide;
}
