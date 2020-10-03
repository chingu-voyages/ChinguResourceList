const fs = require('fs');

/**
 * Write the contents of an object array to a file.
 * @param {String} filePath Full path name of the output file
 * @param {[String]} content Content to write
 * @returns {Promise} Promise resolved when file write is completed
 */
const objectToFile = (filePath, content) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    for (const row of content) {
      file.write(row+'\n');
    }
    file.end();
    file.on('finish', () => {
      resolve('File write completed');
    });
  })
}