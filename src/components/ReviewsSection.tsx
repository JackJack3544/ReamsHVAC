import React from 'react';

export interface ReviewItem {
  name: string;
  location?: string;
  city?: string;
  neighborhood?: string;
  source?: string;
  comment?: string;
  text?: string;
}

interface ReviewsSectionProps {
  title?: string;
  subtitle?: string;
  reviews?: ReviewItem[];
  bgImage?: string;
}

export const DEFAULT_BAY_AREA_REVIEWS: ReviewItem[] = [];

export function ReviewsSection({
  reviews = DEFAULT_BAY_AREA_REVIEWS,
}: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return null;
}
