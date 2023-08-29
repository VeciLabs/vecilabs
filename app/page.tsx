import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.5rem_#ffffff70]"
          src="/vecilabs.png"
          alt="Vecilabs Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="flex flex-col items-center my-16">
        <div className="flex items-center justify-between">
          <Image
            className="flex relative dark:drop-shadow-[0_0_0.5rem_#ffffff70] invert"
            src="/wrench.svg"
            alt="Wrech icon"
            width={70}
            height={37}
          />
          <h2 className="p-8 font-bold text-xl">
            We are working on something awesome!
          </h2>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-3xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://github.com/vecilabs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
            Find out about ongoing projects on our Github
          </p>
        </a>

        <a
          href="mailto:hello@vecilabs.com"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div className="flex flex-col">
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              Get in touch with us!
            </p>
            <p className={`m-0 text-sm opacity-50 font-bold`}>
              hello@vecilabs.com
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
