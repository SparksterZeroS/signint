import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

import * as Path from "node:path";
import * as URL from "node:url";

const projectDirectory = Path.dirname(URL.fileURLToPath(import.meta.url));
const srcDir = Path.join(projectDirectory, "src");
const distDir = Path.join(projectDirectory, "dist");

const projectName = "signint";

/** @type {import("rollup").RollupOptions[]} */
export default [
    {
        input: Path.join(srcDir, "index.ts"),
        output: [
            {
                file: Path.join(distDir, `${projectName}.cjs`),
                format: "cjs",
                sourcemap: true,
            },
            {
                file: Path.join(distDir, `${projectName}.min.cjs`),
                format: "cjs",
                plugins: [terser()],
            },
            {
                file: Path.join(distDir, `${projectName}.js`),
                format: "esm",
                sourcemap: true,
            },
            {
                file: Path.join(distDir, `${projectName}.min.js`),
                format: "esm",
                plugins: [terser()],
            },
        ],
        plugins: [typescript()],
    },
    {
        input: Path.join(srcDir, "index.ts"),
        plugins: [
            typescript({
                declaration: true,
                outDir: "dist"
            })
            
        ]
    }
];
