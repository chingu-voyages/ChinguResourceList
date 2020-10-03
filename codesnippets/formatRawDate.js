/**
   * Format a raw date.
   * @param {String} rawDate Date in the format `yyyy-mm-ddThh:mm:ssZ`
   * @returns Date string formatted as `yyyy-mm-dd`
   */
  formatRawDate(rawDate) {
    const createdAt = new Date(rawDate);
    const month = ('0' + (createdAt.getMonth()+1)).slice(-2);
    const day = ('0' + createdAt.getDate()).slice(-2);
    return`${createdAt.getFullYear()}/${month}/${day}`;
  }