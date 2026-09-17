export interface Blog {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: {
    heading?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const blogs: Blog[] = [
  {
    slug: "what-is-laparoscopic-surgery",
    title: "What is Laparoscopic Surgery?",
    category: "Laparoscopic Surgery",
    date: "15 Aug 2025",
    readTime: "5 min read",
    image: "/blog-laparoscopic.jpg",
    excerpt:
      "Learn how laparoscopic surgery works, its benefits, recovery and why it is widely used for minimally invasive surgical procedures.",
    content: [
      {
        paragraphs: [
          "Laparoscopic surgery is a minimally invasive surgical technique in which operations are performed through small incisions rather than a large traditional incision.",
          "A small camera called a laparoscope is inserted through one of the incisions. This allows the surgeon to view the operating area on a high-resolution monitor and perform the procedure using specialized instruments."
        ],
      },
      {
        heading: "How does laparoscopic surgery work?",
        paragraphs: [
          "The surgeon makes small incisions through which the camera and surgical instruments are introduced. The abdomen is gently inflated to create working space, allowing the surgeon to operate with precision."
        ],
      },
      {
        heading: "Benefits of laparoscopic surgery",
        paragraphs: [
          "Compared with many traditional open procedures, minimally invasive surgery can offer several potential benefits depending on the procedure and individual patient."
        ],
        bullets: [
          "Smaller surgical incisions",
          "Reduced postoperative discomfort",
          "Shorter hospital stay in many procedures",
          "Earlier return to normal activities",
          "Smaller scars"
        ],
      },
      {
        heading: "Recovery",
        paragraphs: [
          "Recovery varies according to the type of surgery, the patient's overall health and the complexity of the procedure. Your surgeon will provide specific postoperative instructions and follow-up recommendations."
        ],
      },
    ],
  },

  {
    slug: "gallstones-symptoms-treatment-prevention",
    title: "Gallstones: Symptoms, Treatment and Prevention",
    category: "Gallbladder Surgery",
    date: "28 Jul 2025",
    readTime: "6 min read",
    image: "/blog-gallstones.jpg",
    excerpt:
      "Understand the common symptoms of gallstones, available treatment options and when surgical consultation may be required.",
    content: [
      {
        paragraphs: [
          "Gallstones are hardened deposits that can develop inside the gallbladder. They may remain without causing symptoms or can lead to pain and other complications."
        ],
      },
      {
        heading: "Common symptoms",
        paragraphs: [
          "When gallstones cause symptoms, patients may experience discomfort in the upper right or upper central abdomen, particularly after meals."
        ],
        bullets: [
          "Upper abdominal pain",
          "Pain after fatty meals",
          "Nausea or vomiting",
          "Bloating or indigestion",
          "Pain that may radiate to the back or shoulder"
        ],
      },
      {
        heading: "Treatment options",
        paragraphs: [
          "Treatment depends on whether gallstones are causing symptoms or complications. Patients with symptomatic gallstones may be advised to undergo surgical evaluation."
        ],
      },
      {
        heading: "When should you consult a surgeon?",
        paragraphs: [
          "Persistent abdominal pain, fever, jaundice, repeated vomiting or severe symptoms should be medically evaluated promptly."
        ],
      },
    ],
  },

  {
    slug: "hernia-types-symptoms-treatment",
    title: "Hernia: Types, Symptoms and Treatment Options",
    category: "Hernia Surgery",
    date: "10 Jul 2025",
    readTime: "5 min read",
    image: "/blog-hernia.jpg",
    excerpt:
      "A simple guide to understanding hernias, their symptoms, common types and available surgical treatment options.",
    content: [
      {
        paragraphs: [
          "A hernia occurs when an internal organ or tissue pushes through a weakened area of muscle or surrounding tissue."
        ],
      },
      {
        heading: "Common types of hernia",
        paragraphs: [
          "Hernias can occur in different areas of the body. Some of the commonly encountered types include:"
        ],
        bullets: [
          "Inguinal hernia",
          "Umbilical hernia",
          "Incisional hernia",
          "Femoral hernia"
        ],
      },
      {
        heading: "Common symptoms",
        paragraphs: [
          "A visible or palpable swelling, discomfort or pain at the affected area can occur, particularly while coughing, lifting or standing."
        ],
      },
      {
        heading: "Treatment",
        paragraphs: [
          "Treatment depends on the type and size of the hernia, symptoms and the patient's overall condition. Surgical repair may be recommended for symptomatic or complicated hernias."
        ],
      },
    ],
  },
];