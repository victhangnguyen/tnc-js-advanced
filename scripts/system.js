import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const input = (question) => {
  return new Promise((resolve, reject) => {
    try {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    } catch (error) {
      console.log("Reject - Error: ", error);
      reject(error);
    }
  });
};
