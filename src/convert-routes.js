const raw = require("./raw.json")
const fs = require("fs")

const run = async () => {
  const data = raw
    .map(route => ({
      route: String(route.route),
      ends: [
        route["ends/0"],
        route["ends/1"],
        route["ends/2"],
        route["ends/3"],
        route["ends/4"],
      ].filter(el => el),
    }))
    .filter(el => el.route)

  fs.writeFileSync("./src/busRoutes.json", JSON.stringify(data, null, 4))
}

run()
