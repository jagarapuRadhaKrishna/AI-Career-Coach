import { serve } from "inngest/next";
import { helloWorld } from "../../inngest/functions/hello";

export default serve("career-coach", [helloWorld]);