function randomPack() {
  const c = ~~(Math.random() * Object.keys(blacket.packs).length)
  return Object.keys(blacket.packs)[c]
}

class pSpammer {
  constructor() {}
  start() {
    let iint = setInterval(() => {
      blacket.requests.post("https://v2.blacket.org/worker/open", {
        pack: randomPack()
      }, handle)
    }, 1000)

    function handle(d) {
      if (d.error) clearInterval(iint)
      console.log(d)
    }
  }
}
