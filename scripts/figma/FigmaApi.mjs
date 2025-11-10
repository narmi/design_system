/**
 * Simple wrapper around Figma's Variables REST API
 * Based on: https://github.com/figma/variables-github-action-example
 */

export default class FigmaApi {
  constructor(token) {
    this.baseUrl = "https://api.figma.com";
    this.token = token;
  }

  async getLocalVariables(fileKey) {
    const response = await fetch(
      `${this.baseUrl}/v1/files/${fileKey}/variables/local`,
      {
        headers: {
          Accept: "*/*",
          "X-Figma-Token": this.token,
        },
      },
    );

    if (!response.ok) {
      const error = new Error(
        `Figma API Error: ${response.status} ${response.statusText}`,
      );
      error.status = response.status;
      throw error;
    }

    return response.json();
  }
}
