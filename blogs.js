// blogs.js

let bloges = JSON.parse(localStorage.getItem("blogs")) || [];
const defaultBlogs = [
  {
    id: 1,
    title: "Visualizing Urban Data Flow",
    image: "images/Technology1.jpg",
    category: "Technology",
    date: "2023-10-27T10:00",
    displayDate: "Oct 27, 2023 at 10:00 AM",
    description:
      "An exploration of how data moves through smart cities and how visualization tools make it meaningful.",
    content: `
      <p>Smart cities generate vast amounts of data every second—from traffic patterns and energy usage to pollution levels and public safety records.</p>
      <p>In this blog, I dive into how data visualization can transform these numbers into actionable insights. By creating interactive dashboards and visual flows, urban planners can better understand challenges and design smarter solutions.</p>
    `,
  },
  {
    id: 2,
    title: "The Power of Virtual Reality",
    image: "images/Technology2.jpg",
    category: "Technology",
    date: "2023-10-27T10:00",
    displayDate: "Oct 27, 2023 at 10:00 AM",
    description:
      "How VR is revolutionizing industries from gaming to healthcare, creating immersive experiences like never before.",
    content: `
      <p>Virtual Reality is no longer limited to video games—it is redefining industries like education, medicine, and real estate.</p>
      <p>This post explores the real-world applications of VR, from surgeons practicing complex procedures to students exploring virtual historical sites. The future is immersive, and VR is leading the way.</p>
    `,
  },
  {
    id: 3,
    title: "The Human-AI Connection",
    image: "images/Technology3.jpg",
    category: "Technology",
    date: "2023-10-27T10:00",
    displayDate: "Oct 27, 2023 at 10:00 AM",
    description:
      "Exploring the growing collaboration between humans and artificial intelligence in everyday life.",
    content: `
      <p>AI is no longer a futuristic concept—it is part of our daily routines, from voice assistants to smart recommendations.</p>
      <p>This blog reflects on how humans and AI can collaborate rather than compete, focusing on ethics, creativity, and productivity in this new partnership.</p>
    `,
  },
  {
    id: 4,
    title: "Harnessing the Power of AI",
    image: "images/Technology4.jpg",
    category: "Technology",
    date: "2023-10-27T10:00",
    displayDate: "Oct 27, 2023 at 10:00 AM",
    description:
      "A closer look at how artificial intelligence is transforming industries and daily decision-making.",
    content: `
      <p>Artificial Intelligence is fueling breakthroughs in healthcare, finance, marketing, and even personal productivity.</p>
      <p>This post discusses the strengths of AI, where it fits best, and how individuals and businesses can use it responsibly to make better decisions and achieve more.</p>
    `,
  },
  {
    id: 5,
    title: "Prompt Engineering for AI",
    image: "images/Programming1.jpg",
    category: "Programming",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "Understanding how to design effective prompts to get the best results from AI tools and models.",
    content: `
      <p>Prompt engineering is the art of asking the right questions. With AI tools like ChatGPT, the quality of the response depends heavily on the way prompts are written.</p>
      <p>In this blog, I’ll explain prompt structures, examples of effective prompts, and how developers can use this skill to maximize AI’s potential.</p>
    `,
  },
  {
    id: 6,
    title: "Artificial Intelligence in future",
    image: "images/Programming2.jpg",
    category: "Programming",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "Breaking down the core programming principles behind Artificial Intelligence.",
    content: `
      <p>AI is built on mathematics, algorithms, and smart programming. From neural networks to natural language processing, every function comes down to code.</p>
      <p>This post explains the basics of programming for AI, how libraries like TensorFlow and PyTorch work, and why understanding algorithms is key to building smarter systems.</p>
    `,
  },
  {
    id: 7,
    title: "Cybersecurity and Ethical Hacking",
    image: "images/Programming3.jpg",
    category: "Programming",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "An introduction to cybersecurity essentials and the role of ethical hacking in digital safety.",
    content: `
      <p>In today’s world, digital threats are everywhere—from phishing to ransomware attacks. Cybersecurity is essential for protecting individuals and businesses.</p>
      <p>This article highlights the importance of ethical hacking, penetration testing, and building secure systems, giving readers a practical look at defending against cyber threats.</p>
    `,
  },
  {
    id: 8,
    title: "Programming Languages (Python, Java, C++)",
    image: "images/Programming4.jpg",
    category: "Programming",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "A journey through different programming languages and their unique strengths.",
    content: `
      <p>From Python’s simplicity to C++’s power, each programming language has a unique place in software development.</p>
      <p>This post reviews popular languages, their best use cases, and advice for beginners on which language to start learning first.</p>
    `,
  },
  {
    id: 9,
    title: "The Anatomy of a Design Project",
    image: "images/Design1.jpg",
    category: "Design",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "Breaking down the stages of a design project from idea to delivery.",
    content: `
      <p>Every design project follows a journey—from initial brainstorming to wireframes, mockups, and final product delivery.</p>
      <p>This article explores each stage, highlighting best practices, tools, and the importance of user feedback throughout the design process.</p>
    `,
  },
  {
    id: 10,
    title: "The Future of UI/UX Design",
    image: "images/Design3.jpg",
    category: "Design",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "Exploring trends and technologies shaping the future of user interfaces and experiences.",
    content: `
      <p>From voice interfaces to AR/VR, UI/UX design is evolving rapidly to meet user expectations in a tech-driven world.</p>
      <p>This blog looks at current trends, future predictions, and how designers can stay ahead in this dynamic field.</p>
    `,
  },
  {
    id: 11,
    title: "The Dynamic World of Web Design",
    image: "images/Design4.jpg",
    category: "Design",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "How web design has evolved and what makes modern websites effective.",
    content: `
      <p>Web design has moved far beyond static HTML pages. Today’s websites focus on interactivity, responsiveness, and accessibility.</p>
      <p>This post discusses design principles that define modern web experiences and the tools that make them possible.</p>
    `,
  },
  {
    id: 12,
    title: "Designing Seamless User Flows",
    image: "images/Design5.jpg",
    category: "Design",
    date: "2023-11-02T09:30",
    displayDate: "Nov 02, 2023 at 9:30 AM",
    description:
      "Creating smooth and intuitive user flows that enhance digital products.",
    content: `
      <p>User flow is the backbone of good UX—it determines how easily users can accomplish their goals within an app or website.</p>
      <p>This article breaks down how to map user journeys, identify pain points, and design intuitive pathways that delight users.</p>
    `,
  },
  {
    id: 13,
    title: "Work at Office Hours",
    image: "images/Lifestyle1.jpg",
    category: "Lifestyle",
    date: "2023-11-05T14:00",
    displayDate: "Nov 05, 2023 at 2:00 PM",
    description:
      "Balancing productivity and well-being during traditional office hours.",
    content: `
      <p>Office hours can be demanding, but with the right strategies, they can also be productive and enjoyable.</p>
      <p>This post explores techniques to stay focused, avoid burnout, and create a healthier work-life balance within structured work environments.</p>
    `,
  },
  {
    id: 14,
    title: "Jogging and Meditation",
    image: "images/Lifestyle2.jpg",
    category: "Lifestyle",
    date: "2023-11-08T11:00",
    displayDate: "Nov 08, 2023 at 11:00 AM",
    description:
      "How jogging and meditation together can improve physical and mental well-being.",
    content: `
      <p>Jogging energizes the body, while meditation calms the mind. When practiced together, they create a balanced lifestyle routine.</p>
      <p>Here, I share tips on combining both practices for improved health, focus, and overall happiness.</p>
    `,
  },
  {
    id: 15,
    title: "Gym Workout Plan",
    image: "images/Lifestyle3.jpg",
    category: "Lifestyle",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "A simple yet effective gym routine for beginners.",
    content: `
      <p>Starting at the gym can be overwhelming. This blog outlines a beginner-friendly workout plan covering strength, cardio, and flexibility.</p>
      <p>Consistency and progression are key—learn how to track progress and build long-term fitness habits.</p>
    `,
  },
  {
    id: 16,
    title: "Joyying Time with Family and Friends",
    image: "images/Lifestyle4.jpg",
    category: "Lifestyle",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "The importance of family bonding in everyday life.",
    content: `
      <p>Spending quality time with family strengthens relationships, reduces stress, and creates lifelong memories.</p>
      <p>This post shares fun activities, weekend ideas, and reflections on why family time is so valuable in today’s busy world.</p>
    `,
  },
  {
    id: 17,
    title: "Golden Hour from Above area",
    image: "images/Travel1.jpg",
    category: "Travel",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "Capturing breathtaking golden hour views from the sky.",
    content: `
      <p>Few sights rival the golden hour when viewed from above—whether from a drone or airplane.</p>
      <p>This blog shares tips on capturing stunning photos, ideal settings, and the magic of natural light.</p>
    `,
  },
  {
    id: 18,
    title: "Breathing in the Mountain Air",
    image: "images/Travel3.jpg",
    category: "Travel",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description:
      "A journey into the mountains to find peace, adventure, and fresh air.",
    content: `
      <p>The mountains offer both challenge and serenity—whether hiking steep trails or simply breathing in crisp air.</p>
      <p>This post captures the joy of reconnecting with nature and the healing power of mountain adventures.</p>
    `,
  },
  {
    id: 19,
    title: "Capturing Coastal Charm and Beauty",
    image: "images/Travel4.jpg",
    category: "Travel",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "Exploring the beauty and culture of coastal towns.",
    content: `
      <p>Coastal towns are full of charm—colorful houses, bustling fish markets, and endless sea views.</p>
      <p>This blog shares travel experiences, photo tips, and the unique lifestyle found in seaside destinations.</p>
    `,
  },
  {
    id: 20,
    title: "Capturing the Burj Khalifa in Dubai",
    image: "images/Travel5.jpg",
    category: "Travel",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description:
      "Photographing the world’s tallest building and experiencing Dubai’s energy.",
    content: `
      <p>The Burj Khalifa is more than an architectural wonder—it is a symbol of ambition and innovation.</p>
      <p>This post covers the best angles, times, and tips for capturing the iconic skyscraper in Dubai’s skyline.</p>
    `,
  },
  {
    id: 21,
    title: "The Perfect Brunch Spread at Home",
    image: "images/Food1.jpg",
    category: "Food",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "Ideas for creating a delightful and balanced brunch spread.",
    content: `
      <p>Brunch is more than a meal—it’s an experience. From fluffy pancakes to avocado toast, brunch offers variety and comfort.</p>
      <p>This blog explores creative brunch recipes and tips for hosting a memorable mid-morning feast.</p>
    `,
  },
  {
    id: 22,
    title: "Behind the Scenes in the Kitchen",
    image: "images/Food2.jpg",
    category: "Food",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "A look into the unseen hard work and passion in kitchens.",
    content: `
      <p>Every dish served in a restaurant carries the story of countless hours of preparation and dedication.</p>
      <p>In this post, I take you behind the scenes in professional kitchens, where creativity, teamwork, and speed come together to create magic on a plate.</p>
    `,
  },
  {
    id: 23,
    title: "Picture-Perfect Pizza and Picture",
    image: "images/Food3.jpg",
    category: "Food",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "Exploring the art of making the perfect pizza.",
    content: `
      <p>From thin crust to deep dish, pizza is a universal favorite. But what makes it truly perfect?</p>
      <p>This blog dives into dough techniques, sauce choices, and topping combinations for creating your own picture-perfect pizza.</p>
    `,
  },
  {
    id: 24,
    title: "A Slice of Happiness in Food",
    image: "images/Food4.jpg",
    category: "Food",
    date: "2023-11-10T16:30",
    displayDate: "Nov 10, 2023 at 4:30 PM",
    description: "Why food brings joy and how to savor it fully.",
    content: `
      <p>Food is more than nourishment—it’s an emotional experience that connects us to people, places, and memories.</p>
      <p>This article celebrates food as a source of happiness and shares tips on slowing down to truly enjoy every bite.</p>
    `,
  },
];


// Load blogs from localStorage
let storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

// Merge defaultBlogs with storedBlogs (but don’t duplicate)
let blogs = [...defaultBlogs, ...storedBlogs.filter(b => !defaultBlogs.some(db => db.id === b.id))];

// Save back to localStorage
localStorage.setItem("blogs", JSON.stringify(blogs));



