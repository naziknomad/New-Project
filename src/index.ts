function getLocalTime(): string {
  return new Date().toLocaleTimeString();
}

const live = process.argv.includes("--live");

if (live) {
  // Обновляем время в одной строке каждую секунду; Ctrl+C — выход.
  const render = () => process.stdout.write(`\r${getLocalTime()}`);
  render();
  const timer = setInterval(render, 1000);
  process.on("SIGINT", () => {
    clearInterval(timer);
    process.stdout.write("\n");
    process.exit(0);
  });
} else {
  console.log(getLocalTime());
}
