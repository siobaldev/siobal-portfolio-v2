export function getErrorMessage(error: string): string {
  switch (error) {
    case "invalid-data":
      return "Please check your form and try again.";
    case "send-failed":
      return "Failed to send your message. Please try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}
