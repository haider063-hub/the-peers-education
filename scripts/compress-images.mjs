import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public");

async function write(input, output, pipeline) {
  const tmp = `${output}.tmp`;
  await pipeline.toFile(tmp);
  const before = fs.existsSync(output) && output === input
    ? fs.statSync(input).size
    : fs.statSync(input).size;
  const after = fs.statSync(tmp).size;
  if (output !== input && fs.existsSync(output) === false) {
    fs.renameSync(tmp, output);
  } else if (output === input) {
    fs.renameSync(tmp, output);
  } else {
    fs.renameSync(tmp, output);
  }
  console.log(
    `${path.relative(process.cwd(), input)} ${(before / 1024).toFixed(0)}KB -> ${path.relative(process.cwd(), output)} ${(after / 1024).toFixed(0)}KB`,
  );
}

const jpegs = [
  "images/modern-hero.jpg",
  "images/modern-campus-1.jpg",
  "images/modern-campus-2.jpg",
  "images/modern-campus-3.jpg",
  "images/modern-events-1.jpg",
  "images/modern-events-2.jpg",
  "images/modern-sports-1.jpg",
  "images/modern-academics-1.jpg",
  "images/modern-academics-2.jpg",
  "images/director-portrait.jpg",
  "images/principal-iftikhar-sadiq.jpg",
  "images/principal-zeeshan-ahmad.jpg",
];

for (const file of jpegs) {
  const input = path.join(root, file);
  await write(
    input,
    input,
    sharp(input)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 72, mozjpeg: true }),
  );
}

const pngToJpeg = [
  ["images/zeeshan.png", "images/zeeshan.jpg"],
  ["images/iftikhar.png", "images/iftikhar.jpg"],
  ["images/home-page.png", "images/home-page.jpg"],
];

for (const [from, to] of pngToJpeg) {
  const input = path.join(root, from);
  const output = path.join(root, to);
  await write(
    input,
    output,
    sharp(input)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: 74, mozjpeg: true }),
  );
  fs.unlinkSync(input);
}

await write(
  path.join(root, "images/peers-logo.png"),
  path.join(root, "images/peers-logo.png"),
  sharp(path.join(root, "images/peers-logo.png"))
    .resize({ width: 800, withoutEnlargement: true })
    .png({ compressionLevel: 9, quality: 80 }),
);

for (const file of ["favicon.png", "images/favicon.png"]) {
  const input = path.join(root, file);
  await write(
    input,
    input,
    sharp(input)
      .resize({ width: 192, height: 192, fit: "contain", background: "#000000" })
      .png({ compressionLevel: 9, quality: 80 }),
  );
}
