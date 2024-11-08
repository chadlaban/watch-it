import React from "react";
import Paginate from "../pagination/Paginate.js";
import StringLimit from "../string/StringLimit.js";

const Reviews = ({ data }) => {
  const reviews = data.reviews.results || [];

  const renderReview = (review, index) => (
    <div key={index} className="border-b border-gray-200 p-4">
      <h4 className="text-lg font-semibold text-gray-800">{review.author}</h4>
      <p className="text-gray-600 text-sm mb-2">
        {new Date(review.created_at).toLocaleDateString()}
      </p>
      <StringLimit review={review.content} limit={200} />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white border rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-bold text-gray-700 mb-2">Reviews</h3>
      {reviews.length > 0 ? (
        <Paginate items={reviews} itemsPerPage={3} renderItem={renderReview} />
      ) : (
        <p className="text-gray-600">No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
