import { format } from "date-fns";

export const formatDate = (dateString) => {
  try {
    return format(new Date(dateString), "dd MMM, yyyy"); // Example: Dec 17, 2024
  } catch (error) {
    console.error("Invalid date string:", dateString);
    return ""; // Fallback for invalid dates
  }
};
