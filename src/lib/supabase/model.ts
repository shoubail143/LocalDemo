export interface Board {
  id: string;
  title: string;
  description: string | null;
  color: string;
  user_id: string;
  created_at: string;
}

export interface Column {
  id: string;
  title: string;
  board_id: string;
  created_at: string;
  sort_order: number;
}

export interface task {
  id: string;
  column_id: string;
  title: string;
  description: string | null;
  assignee: string | null;
  due_date: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  priority: "low" | "medium" | "high";
}
