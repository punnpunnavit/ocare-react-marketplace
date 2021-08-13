// Middleware to handle response parsing, error handling, logging, etc...
// This is kept separate to keep our files lean and allow a clean separation for any response and error logic you may want to handle here for all API calls. Maybe you want to log an error here or create custom actions for authorization based on the response header.

// response.js

export function handleResponse(response) {
    if (response.results) {
      return response.results;
    }
  
    if (response.data) {
      return response.data;
    }
  
    return response;
  }
  
  export function handleError(error) {
    if (error.data) {
      return error.data;
    }
    return error;
  }