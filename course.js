// SME Course Developer - Blackboard Project

// Course Information
const courseInfo = {
    title: "Effective Leadership and Management",
    duration: "10 weeks",
    targetAudience: "Mid-level professionals looking to develop leadership and management skills",
    platform: "Blackboard"
};

// Accessibility and Inclusivity Considerations
const accessibility = {
    altText: "All images and infographics will include descriptive alt text.",
    captionedVideos: "All video content will have closed captions.",
    transcripts: "Transcripts for video and audio content will be provided.",
    accessibleDocuments: "All documents will be provided in accessible formats (e.g., tagged PDFs).",
    keyboardNavigation: "Ensure all interactive elements are accessible via keyboard.",
    colorContrast: "High contrast color schemes will be used for readability.",
    screenReaderCompatibility: "Ensure all content is compatible with screen readers."
};

// Weekly Content and Activities
const weeks = [
    {
        week: 1,
        topic: "Introduction to Leadership",
        objective: "Understand the fundamentals of leadership and its importance in organizational success.",
        content: [
            { type: "video", title: "What is Leadership?", accessibility: "captioned, with transcript" },
            { type: "reading", title: "Theories of Leadership", accessibility: "accessible PDF" },
            { type: "discussionBoard", title: "Share an Example of Great Leadership" }
        ],
        practicalActivity: [
            { type: "scenario", title: "Read a case study about a leadership challenge and discuss possible solutions in groups", accessibility: "ensure scenario description is accessible" }
        ]
    },
    // Additional weeks follow the same structure...
    {
        week: 2,
        topic: "Communication Skills",
        objective: "Develop effective communication skills for leadership.",
        content: [
            { type: "video", title: "Effective Communication Techniques", accessibility: "captioned, with transcript" },
            { type: "reading", title: "The Role of Communication in Leadership", accessibility: "accessible PDF" },
            { type: "discussionBoard", title: "Communication Barriers and How to Overcome Them" }
        ],
        practicalActivity: [
            { type: "rolePlay", title: "Conduct a simulated team meeting where participants practice active listening and clear communication", accessibility: "instructions accessible, role descriptions provided in text format" }
        ]
    },
    // More weeks...
];

// Blackboard Features Utilized
const features = [
    "Announcements",
    "Course Content",
    "Discussion Boards",
    "Assignments",
    "Quizzes",
    "Grade Center",
    "Collaborate"
];

// Additional Resources
const resources = [
    "Office Hours: Weekly virtual office hours for Q&A sessions",
    "Supplementary Materials: Links to additional readings, videos, and tools",
    "Technical Support: Resources and contacts for technical assistance with Blackboard"
];

// Evaluation Criteria
const evaluationCriteria = {
    Participation: "20%",
    Assignments: "30%",
    Quizzes: "20%",
    FinalProject: "30%"
};

// Function to generate course content structure
function generateCourseContent() {
    console.log("Course Information:", courseInfo);
    console.log("Accessibility Considerations:", accessibility);
    console.log("Weekly Content and Activities:", weeks);
    console.log("Blackboard Features Utilized:", features);
    console.log("Additional Resources:", resources);
    console.log("Evaluation Criteria:", evaluationCriteria);
}

// Execute the function to generate and display the course content structure
generateCourseContent();
