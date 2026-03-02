tailwind.config = {
  theme: {
    extend: {
      colors: { gold: "#d4af37" },
      fontFamily: {
        bungee: ["Bungee", "cursive"],
        sans: ["Merriweather Sans", "sans-serif"],
      },
      keyframes: {
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        shoot: {
          "0%": {
            transform: "translateX(0) translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(300px) translateY(150px)",
            opacity: "0",
          },
        },
        gradBG: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pulseGold: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(212,175,55,.5)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212,175,55,0)" },
        },
        ringPulse: {
          "0%,100%": {
            transform: "translate(-50%,-50%) scale(1)",
            opacity: ".4",
          },
          "50%": {
            transform: "translate(-50%,-50%) scale(1.08)",
            opacity: ".8",
          },
        },
        bounceD: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        revealUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        float: "floatY 4s ease-in-out infinite",
        "twinkle-1": "twinkle 2.1s ease-in-out infinite",
        "twinkle-2": "twinkle 3.4s ease-in-out infinite .6s",
        "twinkle-3": "twinkle 2.8s ease-in-out infinite 1.2s",
        "twinkle-4": "twinkle 1.9s ease-in-out infinite .3s",
        "twinkle-5": "twinkle 3.1s ease-in-out infinite .9s",
        "twinkle-6": "twinkle 2.5s ease-in-out infinite 1.5s",
        "twinkle-7": "twinkle 1.7s ease-in-out infinite .4s",
        "shoot-1": "shoot 2.5s linear infinite 0s",
        "shoot-2": "shoot 2.5s linear infinite 5s",
        "shoot-3": "shoot 2.5s linear infinite 10s",
        "grad-bg": "gradBG 8s ease infinite",
        "pulse-gold": "pulseGold 2.5s infinite",
        ring: "ringPulse 3s ease-in-out infinite",
        "bounce-d": "bounceD 1.6s ease-in-out infinite",
        "reveal-up": "revealUp .7s ease forwards",
      },
    },
  },
};
     const io = new IntersectionObserver(
        (e) =>
          e.forEach((x) => x.isIntersecting && x.target.classList.add("on")),
        { threshold: 0.13 }
      );
      document
        .querySelectorAll(".reveal,.reveal-r")
        .forEach((el) => io.observe(el));
      
      document.getElementById("themeBtn").addEventListener("click", () => {
        document.body.classList.toggle("bg-[#f5f0e8]");
        document.body.classList.toggle("text-black");
      });