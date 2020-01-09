export interface AppPage {
  url: string;
  icon: object;
  title: string;
}

export type SLOT = "secondary" | "primary" | "start" | "end";

//secondary	Positions element to the left of the content in ios mode, and directly to the right in md mode.
//primary	Positions element to the right of the content in ios mode, and to the far right in md mode.
//start	Positions to the left of the content in LTR, and to the right in RTL.
//end	Positions to the right of the content in LTR, and to the left in RTL.
