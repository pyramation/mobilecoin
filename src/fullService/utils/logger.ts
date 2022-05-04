
const logger = (msg: string, lvl = 'INFO'): void =>
  console.log('logger', JSON.stringify({ lvl, msg }));

export default logger;
export { logger };
