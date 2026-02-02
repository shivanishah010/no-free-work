const messages = [
        "Thanks so much for considering me. Please see here for a link to my rates. Let me know if you have any questions.",
        "This sounds like a great opportunity, thank you for thinking of me. Could you share the budget for this project?",
        "Thanks for reaching out. I’m currently focusing all my time on my existing client work, so I can't volunteer for this. Hope you find the right fit.",
        "That sounds like an interesting project. I only take on paid commissions at this stage of my career, but I appreciate you thinking of me.",
        "Thanks for reaching out. I'm not able to take on unpaid projects right now, but I'd love to chat if a budget opens up later this year.",
        "I appreciate the offer. My schedule is currently full with my paying clients, so I have to pass on this one. Best of luck with the project.",
        "I appreciate you thinking of me. I'm unable to take on any unpaid projects, so I have to pass on this one. Best of luck with the project.",
        "Thanks for reaching out. I typically charge a flat fee for this, so I'm unable to get into detail here. Please feel free to book a consultation using the link below.",
        "I'm honored you'd like to work with me. At this time, I'm only accepting projects with a set budget, but I’d love to stay in touch for future collaborations.",
        "Thanks for reaching out. I have to pass on unpaid work right now to stay focused on my current clients, but I wish you the best with this project.",
        "I appreciate the offer. I’m currently at capacity for pro-bono work for the year, so I’ll have to pass on this occasion.",
        "I appreciate the inquiry. I’m currently focusing exclusively on my paying clients, so I won't be able to help out with this one.",
        "Thank you for the kind words about my work! Because this is my full-time job, I’m unable to take on projects without a fee.",
        "Thanks for thinking of me. I'm not able to take this on without a budget, but I'm happy to recommend some job boards where you might find a student looking for experience.",
        "It sounds like a cool project, but I’m only taking on paid commissions at the moment. Feel free to reach out if your budget situation changes!",
        "Thanks for the note. I’m currently prioritizing projects with a dedicated budget, so I’ll have to pass on this for now.",
        "This sounds like a great project. My current business model doesn't allow for unpaid collaborations, but I appreciate the offer.",
        "I’m honored you’d like to collaborate. I have to stick to my paid rate schedule right now, but please let me know if a budget becomes available.",
        "I appreciate you reaching out. While I love the concept, I’m not able to take on any unpaid work at this stage of my business.",
        "Thank you for thinking of me. I only take on paid work to ensure I can give my full attention to every project, so I’ll have to decline.",
        "I appreciate you reaching out. I’m currently only taking on new projects that meet my minimum project fee, so I’ll have to pass on this one.",
        "Thanks for the note. I’m not able to offer pro-bono work at this time, but I'd be happy to keep you in mind if my availability changes.",
        "Thanks for thinking of me. I make it a point to only accept paid engagements to maintain my business sustainability, so I must decline.",
        "Thank you for thinking of me. This isn’t a fit for my current business model as I’m focusing on paid contracts, but I wish you the best of luck.",
        "I appreciate the invite! I have a strict policy against working for exposure, but I'd be happy to send over my rate card if you're interested.",
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
  output.textContent = messages[randomIndex];

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
        const text = output.textContent;
        navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy Reply";
        }, 2000);
      });
