function generateUUIDv7(): string {
    const timestamp = BigInt(Date.now());
  
    const timeLow = Number(timestamp & BigInt(0x0000ffffffff));
    const timeHigh = Number((timestamp >> BigInt(48)) & BigInt(0x0fff));
  
    const randomHigh = Math.floor(Math.random() * 0x100000000);
    const randomLow = Math.floor(Math.random() * 0x100000000);
  
    const version = 0x7;
    
    return (
      timeLow.toString(16).padStart(8, '0') + '-' +
      ((timeHigh | (version << 12)).toString(16).padStart(4, '0')) + '-' +
      Math.floor(Math.random() * 0x1000).toString(16).padStart(4, '0') + '-' +
      randomHigh.toString(16).padStart(8, '0') + '-' +
      randomLow.toString(16).padStart(8, '0')
    );
}
  
// console.log(generateUUIDv7());
  