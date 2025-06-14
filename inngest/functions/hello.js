import { Inngest } from "inngest";

// Initialize Inngest with your app name
export const inngest = new Inngest({ name: "career-coach" });

// Define a simple function
export const helloWorld = inngest.createFunction(
  { name: "Hello World Function" },
  { event: "demo/hello.world" }, // This is the event name you’ll use to trigger it
  async ({ event }) => {
    console.log("Hello from Inngest!", event);
    return { message: "Hello World!" };
  }
);