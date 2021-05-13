export const convertBufferToBase64 = function (buffer) {
  let binaryStr = '';
  const byteArray = new Uint8Array(buffer);
  for (let i = 0; i < byteArray.byteLength; i++) {
    binaryStr += String.fromCharCode(byteArray[i]);
  }
  return btoa(binaryStr);
}