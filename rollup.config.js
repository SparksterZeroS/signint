import terser from "@rollup/plugin-terser";
import { babel } from "@rollup/plugin-babel";
import { dts } from "rollup-plugin-dts";

import * as Path from "node:path";
import * as Filesystem from "node:fs";
import * as URL from "node:url";

const projectDirectory = Path.dirname(URL.fileURLToPath(import.meta.url));
const srcDir = Path.join(projectDirectory, "src");
const distDir = Path.join(projectDirectory, "dist");
const pkg = JSON.parse(Filesystem.readFileSync(Path.join(projectDirectory, "package.json"), "utf-8"));

/** @type {import("rollup").RollupOptions[]} */
export default [
    {
        input: Path.join(srcDir, "index.ts"),
        output: [
            {
                name: pkg.libraryName,
                file: Path.join(distDir, `${pkg.fileName}.js`),
                format: "umd",
                sourcemap: true,
            },
            {
                name: pkg.libraryName,
                file: Path.join(distDir, `${pkg.fileName}.min.js`),
                format: "umd",
                plugins: [terser()],
            },
        ],
        plugins: [
            babel({
                extensions: [".ts"],
            }),
        ],
    },
    {
        input: Path.join(srcDir, "index.ts"),
        output: {
            file: Path.join(distDir, `${pkg.fileName}.d.ts`),
            format: "umd"
        },
        plugins: [dts()],
    },
];
