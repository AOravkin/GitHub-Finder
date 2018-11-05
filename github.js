class GitHub {
  constructor() {
    this.client_id = "0b4f54c65bec74c72a45";
    this.client_secret = "931786b57a97f8feaf640587f64515326a224511";
  }

  // Get user method
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
