const messages = [
    `Hi [Client name],

I wanted to give you advance notice that my rates will be adjusting from [current rate] to [new rate], effective [date].

This is part of my annual review to ensure my pricing reflects current market standards and the value I bring to your projects.

I really enjoy working with you and I'm looking forward to continuing our partnership. If you'd like to discuss this or have any questions, I'm happy to hop on a call.

Best,
[Your name]`,

`Hi [Client name],

I'm reaching out to let you know that my rates will be adjusting from [current rate] to [new rate] with effect from [date].

Over the past year, we've achieved [list specific results]. This adjustment reflects the proven value and results I'm able to deliver.

I'm grateful for the trust you've placed in me, and I'm excited to keep supporting [client or specific project or goal]. If you'd like to chat about this or discuss upcoming work, let me know.

Thanks,
[Your name]`,

`Hi [Client name],

I hope you're doing well. I'm writing to let you know that my rates will be increasing to [new rate] starting [date].

I wanted to give you the option to lock in your current rate of [current rate] for any projects booked and paid for by [last date before increase takes effect]. If you're planning work for next quarter, we can secure my current rate for immediate projects.

Either way, I'm looking forward to continuing to work together. Let me know if you'd like to discuss upcoming projects or if you have any questions.

Best,
[Your name]`,

`Hi [Client name],

Hope you're doing well! I wanted to give you a heads up that I'll be adjusting my rates from [current rate] to [new rate] starting [date].

This is something I do annually to keep my pricing in line with the market and the value I bring to the table.

I've really loved working with you, and I'm excited to keep our partnership going strong. If you want to chat about this or anything else, let me know.

Best,
[Your name]`,

`Hi [Client name],

I'm reaching out to let you know that my rates will be moving from [current rate] to [new rate] starting [date].

We've had some great wins together this past year: [share specific results]. I'm really proud of what we've built, and this adjustment reflects the impact I've been able to create.

I'm grateful you've trusted me with your projects, and I'm looking forward to what we'll tackle next. If you want to discuss upcoming work or have any questions, I'm here.

Thanks,
[Your name]`,

`Hi [Client name],

Hope you're having a great week! I wanted to let you know that my rates will be going up to [new rate] starting [date].

If you've got any projects in mind for the near future, I'm happy to honor my current rate of [current rate] for anything booked before [last date before increase takes effect]. Just a little thank-you for being such a great client to work with.

Either way, I'm really looking forward to continuing to work together. Just let me know if you want to chat about what's coming up.

Best,
[Your name]`,

`Hi [Client name],

I wanted to reach out to let you know my rate will be adjusting to [new rate] starting [date].

Working with you has been great, and I'm really looking forward to continuing what we've built together. This update just keeps things aligned with where my business is at and the value I'm bringing to our projects.

Nothing changes on my end in terms of how I work or what you can expect from me. Just wanted to make sure you had a heads up.

Let me know if you want to chat about anything.

Best,
[Your name]`,

`Hi [Client name],

I wanted to give you a heads up that my rate will be changing from [current rate] to [new rate] effective [date].

Looking back at what we've accomplished this past year, I'm really proud of the work we've done together: [list specific achievements]. This rate reflects the level of expertise and results I've been delivering.

I appreciate the trust you've shown in me, and I'm excited about the projects we have ahead. If there's anything you want to discuss, please let me know.

Talk soon,
[Your name]`,

`Hi [Client name],

I'm writing to let you know my rate will be updating to [new rate] starting [date].

We've done some fantastic work together, and I've been able to consistently deliver across everything we've tackled. In the past year, our work together has resulted in [list specific achievements]. This rate reflects that level of quality and impact.

As a thank-you for being such a great partner, I'm happy to lock in my current rate of [current rate] for any projects booked by [last date before increase takes effect].

Either way, I'm excited to keep working together. Happy to chat if you have questions.

Best,
[Your name]`

      ];

      let lastIndex = -1;
      const output = document.getElementById("output");
      const mainBtn = document.getElementById("generate");
      const buttonGroup = document.querySelector(".button-group");
      const copyBtn = document.getElementById("copyBtn");
      const generateAgainBtn = document.getElementById("generateAgain");

      function displayNewReply() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * messages.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  output.innerHTML = messages[randomIndex].replace(/\n/g, '<br>');

  // 1. Force the output box to show
  output.style.display = "block"; 

  // 2. Hide the main start button
  mainBtn.style.display = "none";
  
  // 3. Show the button group
  buttonGroup.style.display = "flex";
}

      // Both buttons now trigger the same logic
      mainBtn.addEventListener("click", displayNewReply);
      generateAgainBtn.addEventListener("click", displayNewReply);

      copyBtn.addEventListener("click", () => {
        const text = output.innerText;
        navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy Reply";
        }, 2000);
      });