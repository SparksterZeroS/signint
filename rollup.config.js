import terser from "@rollup/plugin-terser";
import { babel } from "@rollup/plugin-babel";

import * as Path from "node:path";
import * as Filesystem from "node:fs";
import * as URL from "node:url";

const projectDirectory = Path.dirname(URL.fileURLToPath(import.meta.url));
const srcDir = Path.join(projectDirectory, "src");
const distDir = Path.join(projectDirectory, "dist");

const pkg = JSON.parse(Filesystem.readFileSync(Path.join(projectDirectory, "package.json"), "utf-8"));

const projectName = pkg.name;

/** @type {import("rollup").RollupOptions} */
export default {
    input: Path.join(srcDir, "index.ts"),
    output: [
        {
            file: Path.join(distDir, `${projectName}.js`),
            format: "umd",
            sourcemap: true,
        },
        {
            file: Path.join(distDir, `${projectName}.min.js`),
            format: "umd",
            plugins: [terser()]
        },
    ],
    plugins: [
        babel({
            extensions: [".ts"],
        }),
    ],
};
