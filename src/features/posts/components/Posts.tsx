import React from "react";

import Card from "../../../components/ui/Card";
import { useGetAllPosts } from "../hooks/useGetAllPosts";
import ErrorMsg from "../../../components/common/ErrorMsg";
import CardSkeleton from "../../../components/skeleton/CardSkeleton";
import type { PostType } from "../../../types/types";

export default function Posts() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetAllPosts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_,idx) => (
          <div key={idx}>
          <CardSkeleton  />

          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
 <ErrorMsg error={error}></ErrorMsg>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {data?.map((post:PostType) => (
        <Card
          key={post.id}
          title={post.title}
          description={post.body}
        />
      ))}
    </div>
  );
}