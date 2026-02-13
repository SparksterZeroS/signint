import terser from "@rollup/plugin-terser";
import { babel } from "@rollup/plugin-babel";
import { dts } from "rollup-plugin-dts";

import * as Path from "node:path";
import * as Filesystem from "node:fs";
import * as URL from "node:url";


const projectDirectory = Path.dirname(URL.fileURLToPath(import.meta.url));
const srcDir = Path.join(projectDirectory, "src");
const distDir = Path.join(projectDirectory, "dist");
const esmDistDir = Path.join(distDir, "esm")
const cjsDistDir = Path.join(distDir, "cjs")

const pkg = JSON.parse(Filesystem.readFileSync(Path.join(projectDirectory, "package.json")))

/** @type {import("rollup").RollupOptions[]} */
export default [
    {
        input: Path.join(srcDir, "index.ts"),
        output: [
            {
                file: Path.join(distDir, `${pkg.name}.js`),
                format: "umd",
                name: pkg.name,
                esModule: false,
                exports: "named",
                sourcemap: true,

            },
            {
                file: Path.join(distDir, `${pkg.name}.min.js`),
                format: "umd",
                name: pkg.name,
                esModule: false,
                exports: "named",
                plugins: [terser()],
            },
            {
                dir: esmDistDir,
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: cjsDistDir,
                format: "cjs",
                exports: "named",
                sourcemap: true,
            }
        ],
        plugins: [
            babel({
                extensions: [".ts"],
                babelHelpers: "bundled"
            }),
        ],
    },
    {
        input: Path.join(srcDir, "index.ts"),
        output: {
            file: Path.join(distDir, `${pkg.name}.d.ts`),
            format: "es"
        },
        plugins: [dts()],
    },
];
