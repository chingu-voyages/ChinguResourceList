const fs = require('fs');

/**
 * Validate that the path exists and is a directory
 * @static
 * @param {String} pathToDir Path specification
 * @returns {Number} 0: Directory exists; -1: Not found or inaccessible; -2: Not a directory
 */
const validateDirPath = (pathToDir) => {
  try {
    const pathStat = fs.statSync(pathToDir);
    if (!pathStat.isDirectory()) {
      return -2; // Not a directory
    }
    return 0; // Path is a valid directory
  }
  catch(err) {
    return -1; // Not found or inaccessible
  }
}