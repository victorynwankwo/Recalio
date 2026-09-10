const Notfound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-5 text-center font-sans text-white">
      <h1 className="m-0 text-[clamp(3rem,20vw,8rem)] tracking-[5px]">
        404
      </h1>

      <h2 className="mt-2 text-[clamp(1.2rem,6vw,2rem)]">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-[350px] text-[clamp(0.8rem,4vw,1.1rem)] text-[#aaa]">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
    </main>
  );
};

export default Notfound;