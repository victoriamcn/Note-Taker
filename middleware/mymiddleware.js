// // Custom middleware that logs out the type and path of each request to the server
// // need to rewrite for this challenge
// const mymiddleware = (req, res, next) => {
//     const fgCyan = '\x1b[36m';
//     switch (req.method) {
//       case 'GET': {
//         console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
//         break;
//       }
//       case 'POST': {
//         console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
//         break;
//       }
//       default:
//         console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
//     }
  
//     next();
//   };
  
//   exports.mymiddleware = mymiddleware;
  