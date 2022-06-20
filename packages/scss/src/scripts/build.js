const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");

const getComponents = (types) => {
  let allComponents = [];
  
  types.forEach((type) => {
    if (type === "global") {
      allComponents.push({
        input: "src/global.scss",
        output: "lib/global.css",
      });
    } else {
      const allFiles = Fs.readdirSync(`src/${type}`).map((file) => ({
        input: `src/${type}/${file}`,
        output: `lib/${file.slice(0, -4).toLowerCase() + "css"}`,
      }));

      allComponents.push(...allFiles);
    }
  });

  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: "expanded",
    includePaths: [Path.resolve("src")],
  });

  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};

const compileComponents = (types) => {
  const components = getComponents(types);
  try {
    Fs.mkdirSync(Path.resolve("lib"));
    components.forEach(({ input, output }) => {
      compile(input, output);
    });
  } catch (e) {}
};

compileComponents(["global", "atoms", "molecules"]);
