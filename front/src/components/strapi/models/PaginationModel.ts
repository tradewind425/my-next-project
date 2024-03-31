// /src/models/PaginationModel.ts

export interface Food {
    id: number;
    attributes: {
      foodname: string;
      description: string;
      price: number;
    };
  }
  
  export interface ApiResponse {
    data: Food[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  
  // ページネーションに関するデータとロジックを管理するクラスまたは関数
  export const fetchFoodsWithPagination = async (currentPage: number, pageSize: number = 6): Promise<{foods: Food[], totalPages: number}> => {
    const response = await fetch(`http://localhost:4000/api/foods?_limit=${pageSize}&_start=${(currentPage - 1) * pageSize}`);
    const result: ApiResponse = await response.json();
    const totalPages = Math.ceil(result.meta.pagination.total / pageSize);
    return { foods: result.data, totalPages };
  };
  