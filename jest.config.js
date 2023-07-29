import { resolve } from 'path';


export default async () => {
  /* 
    Replace the <INSERT YOUR FILE NAME HERE> with the name of the cloned repo folder name 
    Eg: "../23da1134-b7a2-4e2f-bcdf-59dbab5a7595"
  */
  let __dirname = "../7d5a6c2a-f747-4db6-aa49-f221ec08e737";
  return {
    rootDir: resolve(__dirname, ''),
    verbose: true,
    reporters: ['default', 'jest-junit'],
    maxWorkers: 1
  };
};
