import { User } from './user';

// export type Props = {
//   images: {
//     id: number;
//     url: string;
//     title: string;
//     caption: string;
//     user: User;
//     cols: number;
//   }[];
//   onClickInfo: (postId: number) => void;
// };

export type Image = {
  id: number;
  url: string;
  title: string;
  caption: string;
  user: User;
  cols: number;
};
