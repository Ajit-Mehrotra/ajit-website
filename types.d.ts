type Post = {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    sentiment_score?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    category_id?: string | null;
    author_id: string;
}