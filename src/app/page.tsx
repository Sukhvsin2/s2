export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between items-center px-24">
        <div>
          <h1 className="text-4xl text-center pb-2">about sukhvinder</h1>
          <p className="about">
            sukhvinder is a software developer and software QA at <a className="underline" href="www.google.com"><span className="text-red-400 font-semibold">inspire brands</span></a> in <a className="underline" href="https://www.google.com/search?q=atlanta+traffic+memes&tbm=isch&ved=2ahUKEwiOrcz17-j_AhW0AWIAHX3tAYQQ2-cCegQIABAA&oq=atlanta+traffic+&gs_lcp=CgNpbWcQARgCMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEIoFEEM6CAgAEIAEELEDOgoIABCKBRCxAxBDOg0IABCKBRCxAxCDARBDUOIFWKkdYNtVaABwAHgAgAGzAYgB3waSAQM5LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=5a2dZM6mHrSDiLMP_dqHoAg&bih=671&biw=1390&hl=en-GB">atlanta.</a> as a human, sukhvinder has many links like..
          </p>
          <ul className="pt-2 text-center">
            <li><a className="underline" href="https://github.com/sukhvsin2">Github🔐</a></li>
            <li><a className="underline" href="https://www.instagram.com/sukhv_singh/">Instagram📸</a></li>
            <li><a className="underline" href="https://twitter.com/singhsukh205">Twitter🐤</a></li>
            <li><a className="underline" href="https://linkedin.com/in/sukhvsin2">LinkedIn👔</a></li>
            <li><a className="underline" href="/onlyfans">OnlyFans🤫</a></li>
          </ul>

          <div className="achivements pt-4">
            <h2 className="text-2xl text-center pb-2">biggest life achievements 🏆</h2>
            <ul className="text-center">
              <li>- creating this website</li>
              <li>- getting you to click on this website</li>
            </ul>
          </div>
        </div>
        <div className="foot">
          <span className="text-gray-700">
            inspired from <a href="https://k2.codes/" target="_blank">K2</a>
          </span>
        </div>
    </main>
  )
}
