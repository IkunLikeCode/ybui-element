import { makeInstaller } from "@ybui/utils";
import components from "./components";
import "@ybui/theme";
const installer = makeInstaller(components);
export * from "@ybui/components";
export default installer;
