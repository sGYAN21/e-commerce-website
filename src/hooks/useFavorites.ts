"use client";

import { useState } from "react";

export default function useFavorites(showSnackbar: (msg: string, type?: "success" | "info" | "warning" | "error") => void
) {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const toggleFavorite = (id: number) => {

    setFavorites(prev => {
      const isFav = !!prev[id];
      const updated = { ...prev, [id]: !isFav };
      showSnackbar(
        !isFav ? "Added to favorites!" : "Removed from favorites.",
                "success"
      );

      return updated;
    });
  };

  return { favorites, toggleFavorite };
}
