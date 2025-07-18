import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const ReviewForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("http://localhost:5000/reviews", {
        name,
        rating,
        comment,
      });
      setSuccess(true);
      setName("");
      setRating(5);
      setComment("");
    } catch (err) {
      setError(t("reviewForm.submitError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{t("reviewForm.title")}</h2>
      {success && <div className="bg-green-100 text-green-800 p-2 rounded mb-4">{t("reviewForm.submitSuccess")}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t("reviewForm.nameLabel")}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            aria-label={t("reviewForm.nameLabel")}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">{t("reviewForm.ratingLabel")}</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-label={t("reviewForm.ratingLabel")}
          >
            {[5, 4, 3, 2, 1].map((score) => (
              <option key={score} value={score}>
                {score} {t("reviewForm.stars", { count: score })}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">{t("reviewForm.commentLabel")}</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            aria-label={t("reviewForm.commentLabel")}
          ></textarea>
        </div>
        {error && <div className="bg-red-100 text-red-800 p-2 rounded mb-4">{error}</div>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
        >
          {loading ? t("reviewForm.submitting") : t("reviewForm.submitButton")}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
