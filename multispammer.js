function randomPack() {
  const c = ~~(Math.random() * Object.keys(blacket.packs).length)
  return Object.keys(blacket.packs)[c]
}

class pSpammer {
  constructor() {
    this.pack = null
  }
  start() {
    let iint = setInterval(() => {
      this.pack = randomPack()
      blacket.requests.post("https://v2.blacket.org/worker/open", {
        pack: this.pack
      }, (d) => {
        handle(d, this.pack)
      })
    }, 1000)

    function handle(d, pack) {
      if (d.error) location.reload()
      console.log(pack, d)
    }
  }
}
