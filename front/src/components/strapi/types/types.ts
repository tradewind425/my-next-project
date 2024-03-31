// Strapiから取得する食品データの型定義
export type Food = {
    id: number;
    attributes: {
      foodname: string;
      description: string;
      price: number;
    };
  };