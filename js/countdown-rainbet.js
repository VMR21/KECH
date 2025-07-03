function updateCountdown() {
  const el = document.getElementById("countdown");
  const now = new Date();

  // Get the last day of the current month at 23:59 UTC
  const nextMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1, 0, 0, 0));
  const target = new Date(nextMonth.getTime() - 60000); // Subtract 1 minute (23:59 UTC)

  const diff = target - now;
  if (diff <= 0) {
    el.textContent = "Ended";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  el.textContent = `${d}d ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
