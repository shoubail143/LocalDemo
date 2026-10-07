import { createClient } from "./supabase/client";
import { Board, Column } from "./supabase/model";

const supabase = createClient();
export const boardService = {
  async getBoards(board: Board) {
    const { data, error } = await supabase
      .from("boards")
      .select("board")
      .eq("user_id", board.user_id)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  },
  async createBoards(
    board: Omit<Board, "id" | "created_at" | "updated_at">,
  ): Promise<Board[]> {
    const { data, error } = await supabase
      .from("boards")
      .insert("board")
      .select()
      .single();
    if (error) throw error;
    return data || [];
  },
};

export const columnService = {
  async getBoards(board: Board) {
    const { data, error } = await supabase
      .from("boards")
      .select("board")
      .eq("user_id", board.user_id)
      .order("created_at", { ascending: false });
    if (error) throw error;
    return data || [];
  },
  async createColumn(
    column: Omit<Column, "id" | "created_at">,
  ): Promise<Column[]> {
    const { data, error } = await supabase
      .from("columns")
      .insert("column")
      .select()
      .single();
    if (error) throw error;
    return data || [];
  },
};

export const boardDataService = {
  async createBoardWithDefaultColumn(
    title: string,
    description?: string | null,
    color?: string,
    user_id: string,
  ) {
    const board = await boardService.createBoards({
      title: title,
      description: description || null,
      color: color || "#b3d4fc",
      user_id: user_id,
    });
  },
};
