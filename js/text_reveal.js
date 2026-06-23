gsap.registerPlugin(SplitText);

document.querySelectorAll(".textslide").forEach(text => {
  gsap.registerPlugin(SplitText);

  SplitText.create(text, {
    type: "lines",
    linesClass: "line",
    autoSplit: true,

    onSplit(self) {
      if (text.dataset.completed === "true") return;

      text.style.visibility = "visible";

      const tl = gsap.timeline({
        onComplete() {
          text.dataset.completed = "true";

          self.lines.forEach(line => {
            line.style.willChange = "";
            line._overlay.style.willChange = "";
          });
        }
      });

      self.lines.forEach((line, i) => {
        const content = line.innerHTML;
        line.textContent = "";

        const wrap = document.createElement("div");
        wrap.className = "wrap";
        wrap.innerHTML = content;

        const overlay = document.createElement("div");
        overlay.className = "overlay";

        line._wrap = wrap;
        line._overlay = overlay;

        line.append(wrap, overlay);

        const start = i * 0.25;

        tl.to(
          line,
          {
            opacity: 1,
            duration: 0.01
          },
          start
        )
          .to(
            overlay,
            {
              scaleX: 1,
              duration: 0.45,
              ease: "power1.in"
            },
            start
          )
          .set(
            wrap,
            {
              opacity: 1
            },
            start + 0.45
          )
          .to(
            overlay,
            {
              scaleX: 0,
              duration: 0.45,
              ease: "power1.out",
              transformOrigin: "right center"
            },
            start + 0.45
          );
      });

      return tl;
    }
  });
});